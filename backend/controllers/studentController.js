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

export { addStudentController, addStudentPreferences };
