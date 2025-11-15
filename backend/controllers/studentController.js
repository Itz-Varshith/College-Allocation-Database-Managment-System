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
const addStudentPreferences= async (req,res)=>{

}
const getStudentAllocation = async (req, res) => {
  try {
    console.log(req.session.studentId);
    if (!req.session.studentId) {
      return res.status(401).json({ message: "Not logged in" });
    }

    const student_id = req.session.studentId;

    if (!student_id) {
      return res.status(400).json({ error: "student_id is required" });
    }

    // Fetch all allocations for this student (for every round)
    const allAllocations = await prisma.allocation_Status.findMany({
      where: { student_id: Number(student_id) },
      orderBy: { round_id: "desc" },
      select: {
        round_id: true,
        program_id: true,
      },
    });

    if (!allAllocations || allAllocations.length === 0) {
      return res.json([]);
    }

    // Prepare an array of allocation details for each round
    const responseArray = [];

    for (const allocation of allAllocations) {
      const { round_id, program_id } = allocation;

      const programDetails = await prisma.program.findUnique({
        where: { program_id },
        select: {
          collegeID: { select: { college_name: true } },
          deptID: { select: { department_name: true } },
        },
      });

      if (!programDetails) continue;

      const preferenceRecord = await prisma.preferences.findFirst({
        where: {
          student_id: Number(student_id),
          program_id: program_id,
        },
        select: { preference_number: true },
      });

      if (!preferenceRecord) continue;

      responseArray.push({
        round_id,
        college_name: programDetails.collegeID.college_name,
        department_name: programDetails.deptID.department_name,
        preference_number: preferenceRecord.preference_number,
      });
    }

    res.json(responseArray);
  } catch (err) {
    console.error("Error fetching allocation details:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const changeCurrentStatus = async (req,res) => {
    try {
      const data=req.body;
      data.student_id=req.session.studentId;
      if(!data.student_id || !data.statusChangeTo) {
        return res.status(404).json({
          success:false,
          message:"Incorrect data format provided",
        })
      }
      const santizedData=data.statusChangeTo.toLowerCase();
      await prisma.student.update({
        where:{
          student_id:parseInt(data.student_id,10)
        },
        data:{
          current_status:santizedData
        }
      })
      return res.status(200).json({
        success:true,
        message:"Status changed successfully"
      })
    } catch (error) {
      console.error(error);
      return res.json({
        success:false,
        message:"Server error while changing the current state for the user",
        error:error
      })
    }
}

export { addStudentController, addStudentPreferences, getStudentAllocation,changeCurrentStatus };
