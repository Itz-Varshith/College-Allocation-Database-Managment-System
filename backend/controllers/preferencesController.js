import { PrismaClient } from "../generated/prisma/index.js";
import fs from "fs"
import csv from "csv-parser"
import path from "path";
import { fileURLToPath } from "url";

const prisma = new PrismaClient();

const getPreferences = async (req, res) => {
  try {
    const studentId = req.session.studentId;
    if (!studentId) {
      return res.status(400).json({
        success: false,
        message: "Provide the user ID",
      });
    }
    const allPreferences = await prisma.preferences.findMany({
      where: {
        student_id: parseInt(studentId, 10),
      },
      include: {
        programID: {
          include: {
            collegeID: true,
            deptID: true,
          },
        },
      },
    });
    return res.json({
      success: true,
      message: "Preferences fetched successfully",
      preference: allPreferences,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: true,
      messsge: "Server error while fetching preferences",
      error,
    });
  }
};

const addPreferences = async (req, res) => {
  try {
    const currentYear=new Date().getFullYear();
    const currentRound=await prisma.round.findFirst({
      where:{
        start_time:{
          gte:new Date(currentYear,0,1)
        }
      }
    })
    if(currentRound){
      return res.status(400).json({
        success: false,
        message: "You cannot change preferences after the allocation process has started",
      });
    }
    const data = req.body;
    data.studentId=req.session.studentId;
    if (
      !data.studentId ||
      !data.preferences ||
      !Array.isArray(data.preferences)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid input data",
      });
    }

    // Step 1: Map input preferences to program IDs
    let results = [];
    for (const pref of data.preferences) {
      const prog = await prisma.program.findFirst({
        where: {
          college_id: parseInt(pref.college_id, 10),
          department_id: parseInt(pref.department_id, 10),
        },
        select: { program_id: true },
      });

      if (prog) {
        results.push(prog.program_id);
      }
    }
    data.studentId=req.session.studentId;
    // Step 2: Upsert (Insert or Update) preferences
    let i = 1;
    for (const programId of results) {
      await prisma.preferences.upsert({
        where: {
          student_id_preference_number: {
            student_id: data.studentId,
            preference_number: i,
          },
        },
        update: {
          program_id: programId,
        },
        create: {
          student_id: data.studentId,
          preference_number: i,
          program_id: programId,
        },
      });
      i++;
    }

    // Step 3: Delete any extra preferences beyond the new list length
    await prisma.preferences.deleteMany({
      where: {
        student_id: data.studentId,
        preference_number: {
          gt: results.length, // delete all preferences with pref_no > new length
        },
      },
    });

    return res.json({
      success: true,
      message: "Preferences updated successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error while saving preferences",
      error,
    });
  }
};


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const csvPath = path.join(__dirname, "student_preferences_chatgpt.csv");

const addAllStudentPreferences=async(req,res)=>{
  try {
    const results=[]
     fs.createReadStream(csvPath)
          .pipe(csv())
          .on("data", (data) => {
            data.student_id=parseInt(data.student_id,10);
            data.student_id+=2500000
            data.program_id=parseInt(data.program_id,10);
            data.preference_number=parseInt(data.preference_number,10);
            results.push(data);
          })
          .on("end", async () => {
            try {
              const batchSize = 100;
    
              for (let i = 0; i < results.length; i += batchSize) {
                const batch = results.slice(i, i + batchSize);
                await prisma.preferences.createMany({
                  data: batch,
                  skipDuplicates: true,
                });
              }
    
              return res.status(200).json({
                success: true,
                message: "Preferences added successfully",
              });
            } catch (error) {
              console.error("Error inserting Preferences:", error);
              return res.status(500).json({
                success: false,
                message: "Error while adding Preferences",
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
    console.error(error)
    return res.status(500).json({
      success:false,
      message:"Server error while adding all student preferences",
      error
    })
  }
}

export { getPreferences, addPreferences, addAllStudentPreferences };


