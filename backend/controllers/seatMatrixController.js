import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import csv from "csv-parser";
import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const csvPath = path.join(__dirname, "seat_details.csv");

const addSeatMatrixController = async (req, res) => {
  try {
    const results = [];

    fs.createReadStream(csvPath)
      .pipe(
        csv({
          // Trim headers so " program_id" -> "program_id"
          mapHeaders: ({ header }) => header.trim(),
        })
      )
      .on("data", (row) => {
        // Trim all values before converting
        const cleaned = {
          program_id: Number(row.program_id?.trim()),
          category_id: Number(row.category_id?.trim()),
          total_seats: Number(row.total_seats?.trim()),
        };

        results.push(cleaned);
      })
      .on("end", async () => {
        try {
          const batchSize = 100;

          for (let i = 0; i < results.length; i += batchSize) {
            const batch = results.slice(i, i + batchSize);

            await prisma.seat_Matrix.createMany({
              data: batch,
              skipDuplicates: true,
            });
          }

          return res.status(200).json({
            success: true,
            message: "Seat matrix added successfully",
          });
        } catch (error) {
          console.error("Error inserting seat matrix:", error);
          return res.status(500).json({
            success: false,
            message: "Error while adding seat matrix",
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
    console.error("Controller error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while inserting seat matrix",
      error,
    });
  }
};

const getSeatMatrixData = async (req, res) => {
  try {
    const data = req.body;
    if (
      !data.category_id ||
      !data.college_id ||
      !data.department_id ||
      !Array.isArray(data.category_id) ||
      !Array.isArray(data.college_id) ||
      !Array.isArray(data.department_id)
    ) {
      return res.status(400).json({
        success: false,
        message: "Provide all the necessary fields",
      });
    }
  
for(let i=0;i<data.category_id.length;i++){
  data.category_id[i]=parseInt(data.category_id[i],10);
}
for(let i=0;i<data.department_id.length;i++){
  data.department_id[i]=parseInt(data.department_id[i],10);
}
for(let i=0;i<data.college_id.length;i++){
  data.college_id[i]=parseInt(data.college_id[i],10);
}

const programs = await prisma.program.findMany({
  where: {
    college_id: { in: data.college_id },
    department_id: { in: data.department_id },
  },
  select: {
    program_id: true,
    college_id: true,
    department_id: true,
  },
});

const programIds = programs.map((p) => p.program_id);

const seatMatrices = await prisma.seat_Matrix.findMany({
  where: {
    program_id: { in: programIds },
    category_id: { in: data.category_id },
  },
  select: {
    program_id: true,
    category_id: true,
    total_seats: true,
  },
});

const result = seatMatrices.map((sm) => {
  const prog = programs.find((p) => p.program_id === sm.program_id);
  return {
    college_id: prog?.college_id,
    department_id: prog?.department_id,
    program_id: sm.program_id,
    category_id: sm.category_id,
    total_seats: sm.total_seats,
  };
});

    return res.status(200).json({
      success: true,
      message: "Seat matric data fetched",
      data: result,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching seat matrix data",
      error,
    });
  }
};

export { addSeatMatrixController, getSeatMatrixData };
