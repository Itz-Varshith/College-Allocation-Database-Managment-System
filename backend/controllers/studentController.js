import fs from "fs";
import csv from "csv-parser";
import { PrismaClient } from "../generated/prisma/index.js";
import { fileURLToPath } from "url";
import path from "path";

const prisma = new PrismaClient();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const csvPath = path.join(__dirname, "students.csv");
const addStudentController = async (req, res) => {
  try {
    const results = [];

    fs.createReadStream(csvPath)
      .pipe(csv())
      .on("data", (data) => {
        data.gender = data.gender.trim().toLowerCase();
        data.name = data.name.trim();
        data.email = data.email.trim();
        data.mobile_number = data.mobile_number.trim();
        data.password = "";
        data.isRegistered = data.isRegistered.trim().toLowerCase() === "true";
        data.student_id = parseInt(data.student_id, 10);
        data.student_id += 2500000;
        data.general_rank = BigInt(data.general_rank);
        data.category_rank = BigInt(data.category_rank);
        data.category_id = parseInt(data.category_id, 10);

        results.push(data);
      })
      .on("end", async () => {
        try {
          const batchSize = 100;

          for (let i = 0; i < results.length; i += batchSize) {
            const batch = results.slice(i, i + batchSize);
            await prisma.student.createMany({
              data: batch,
              skipDuplicates: true,
            });
          }

          return res.status(200).json({
            success: true,
            message: "Students added successfully",
          });
        } catch (error) {
          console.error("Error inserting students:", error);
          return res.status(500).json({
            success: false,
            message: "Error while adding students",
          });
        }
      })
      .on("error", (err) => {
        console.error("CSV read error:", err);
        return res.status(500).json({
          success: false,
          message: "Error reading CSV file",
        });
      });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while adding students",
    });
  }
};

// This controller will take ,ist of choices and add into the users list.
const addStudentPreferences = async (req, res) => {};

const changeCurrentStatus = async (req, res) => {
  try {
    const data = req.body;
    data.student_id = req.session.studentId;
    if (!data.student_id || !data.statusChangeTo) {
      return res.status(404).json({
        success: false,
        message: "Incorrect data format provided",
      });
    }
    const santizedData = data.statusChangeTo.toLowerCase();
    await prisma.student.update({
      where: {
        student_id: parseInt(data.student_id, 10),
      },
      data: {
        current_status: santizedData,
      },
    });
    return res.status(200).json({
      success: true,
      message: "Status changed successfully",
    });
  } catch (error) {
    console.error(error);
    return res.json({
      success: false,
      message: "Server error while changing the current state for the user",
      error: error,
    });
  }
};

/**
 *
 * @param {Request data includes preferred college of the student or preferred
 *        department and also the category of the student, here keep in mind for the
 *        frontend that category is mandatory but college_id and department_id are
 *        optional to send, if the user doesn't fill them send them as 0 to the
 *        backend} req
 * @param {Gives a response list of college data along with all the data of the college
 *         i.e department id and all the related stuff} res
 * @returns
 */

const predictStudentResults = async (req, res) => {
  try {
    // This is the data object being recieved from the frontend
    const data = req.body;
    data.student_id = req.session.studentId;
    // data.student_id = 2500010;

    if (!data.student_id || !data) {
      return res.status(400).json({
        success: false,
        message: "Please login to use the prediction feature",
      });
    }
    // Get studnet data from the data only selecting what data is required i.e only ranks and categories.
    const studentData = await prisma.student.findFirst({
      where: {
        student_id: parseInt(data.student_id, 10),
      },
      select: {
        isRegistered: true,
        general_rank: true,
        category_id: true,
        category_rank: true,
      },
    });
    // Generally student here is registered but i used it to avoid malacious attacks with random IDs that might break into the system
    if (!studentData || !studentData.isRegistered) {
      return res.status(401).json({
        success: false,
        message: "Please register before using the prediction feature",
      });
    }
    // Now for the prediction of the seats which the user might get based on the data given from the frontend, Here as i mentioned in the req format above i am only going to use non zero ids of collge and department.
    // Also only one id must be provided at a time
    const college_id = parseInt(data.college_id, 10);
    const department_id = parseInt(data.department_id, 10);
    // Getting the data ready to query cause if the user doesn;t have any sort or preference then we need to include all the college so i am making a new array named college_id_to_query to fill with data
    let college_id_to_query = [];
    if (college_id == 0) {
      const resp = await prisma.college.findMany({
        select: {
          college_id: true,
        },
      });
      college_id_to_query = resp.map((a) => a.college_id);
    } else {
      college_id_to_query.push(college_id);
    }
    // Similar to the above one i am writing a query to get the details related to new department
    let department_id_to_query = [];
    if (department_id == 0) {
      const resp = await prisma.department.findMany({
        select: {
          department_id: true,
        },
      });
      department_id_to_query = resp.map((a) => a.department_id);
    } else {
      department_id_to_query.push(department_id);
    }
    const programIds = await prisma.program.findMany({
      where: {
        college_id: { in: college_id_to_query },
        department_id: { in: department_id_to_query },
      },
      select: {
        program_id: true,
      },
    });
    const programIdsArray = programIds.map((a) => a.program_id);
    console.log(programIdsArray);
    const allCases = await prisma.cutOff_ranks.findMany({
      where: {
        program_id: { in: programIdsArray },
        category_id: studentData.category_id,
        OR: [
          {
            closing_rank: { gte: studentData.general_rank },
          },
          {
            closing_rank: { gte: studentData.category_rank },
          },
        ],
      },
      select: {
        program_id: true,
        category_id: true,
        opening_rank: true,
        closing_rank: true,
      },
    });

    // Convert BigInt values to strings for JSON serialization
    const serializedAllCases = allCases.map((item) => ({
      program_id: item.program_id.toString(),
      category_id: item.category_id.toString(),
      opening_rank: item.opening_rank?.toString(),
      closing_rank: item.closing_rank?.toString(),
    }));

    // Fetch program details with college and department information
    const programIdsForQuery = serializedAllCases.map((item) =>
      parseInt(item.program_id, 10)
    );
    const allPrograms = await prisma.program.findMany({
      where: {
        program_id: { in: programIdsForQuery },
      },
      select: {
        program_id: true,
        college_id: true,
        department_id: true,
        collegeID: {
          select: {
            college_name: true,
          },
        },
        deptID: {
          select: {
            department_name: true,
          },
        },
      },
    });

    // Combine program data with cutoff ranks
    const predictionResults = allPrograms.map((program) => {
      const cutoffData = serializedAllCases.find(
        (item) => parseInt(item.program_id, 10) === program.program_id
      );
      return {
        program_id: program.program_id.toString(),
        college_id: program.college_id.toString(),
        department_id: program.department_id.toString(),
        college_name: program.collegeID.college_name,
        department_name: program.deptID.department_name,
        opening_rank: cutoffData?.opening_rank || "N/A",
        closing_rank: cutoffData?.closing_rank || "N/A",
        category_id: cutoffData?.category_id || "N/A",
      };
    });

    return res.status(200).json({
      success: true,
      message: "Prediction successful",
      data: predictionResults,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error while predicting student choices",
      error: error,
    });
  }
};

export {
  addStudentController,
  addStudentPreferences,
  changeCurrentStatus,
  predictStudentResults,
};