import { PrismaClient } from "../generated/prisma/index.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const prisma = new PrismaClient();

// Get current file directory for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Logger utility to write logs to file
const logToFile = (message) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;
  const logFilePath = path.join(__dirname, "allocation_logs.txt");

  fs.appendFileSync(logFilePath, logMessage, "utf8");
  console.log(message); // Also log to console for immediate feedback
};

const insertCuttOffRanks = async (req, res) => {
  try {
    // select min(rank_value_used) as opening_rank,max(rank_value_used) as closing_rank from allocation_status group by program_id,category_id,round_id where round_id=round_number
    const cuttOffRanks = await prisma.allocation_Status.groupBy({
      by: ["program_id", "category_id", "round_id"],
      _min: {
        rank_value_used: true,
      },
      _max: {
        rank_value_used: true,
      },
    });

    // Convert BigInt values to strings for JSON serialization
    const serializedCuttOffRanks = cuttOffRanks.map((item) => ({
      program_id: item.program_id,
      category_id: item.category_id,
      round_id: item.round_id,
      opening_rank: item._min.rank_value_used?.toString(),
      closing_rank: item._max.rank_value_used?.toString(),
    }));

    const result =await prisma.cutOff_ranks.createMany({
      data: serializedCuttOffRanks,
    });
    console.log(result);
    logToFile(
      `Fetched cutoff ranks for ${serializedCuttOffRanks.length} program-category combinations`
    );
    return res.status(200).json({
      success: true,
      message: "Cutt off ranks fetched successfully",
      data: serializedCuttOffRanks,
    });
  } catch (error) {
    logToFile("=".repeat(80));
    logToFile(`ERROR: Inserting cutt off ranks failed!`);
    logToFile(`Error message: ${error.message}`);
    logToFile(`Stack trace: ${error.stack}`);
    logToFile("=".repeat(80));
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error while inserting cutt off ranks",
    });
  }
};

const startAllocation = async (req, res) => {
  try {
    // Getting details of the round number here
    const round_number = 1;
    logToFile("=".repeat(80));
    logToFile(`Starting allocation process for Round ${round_number}`);
    logToFile("=".repeat(80));
    // Step 1 Fetch seat matrix and store into map
    // Step 2 Fetch all students with data id, general rank, category rank and category id
    // Step 3 Go Through all the student (i.e allocation status table) and decrease the seat count(for those programs who have freezed their seats) in the seat matrix map declared above
    // Step 4 Iterate over students and fetch their preferences and iterate over preferences and check if preference is available and allot insert data into allocation status table and update seat matrix map

    // Step-1
    let availableSeatMatrix = new Map();
    const seat_matrix_data = await prisma.seat_Matrix.findMany();
    for (const item of seat_matrix_data) {
      availableSeatMatrix.set(
        `${item.program_id}_${item.category_id}`,
        parseInt(item.total_seats, 10)
      );
    }

    // Step-2
    const allStudents = await prisma.student.findMany({
      where: {
        current_status: "float",
        isRegistered: true,
      },
      select: {
        student_id: true,
        general_rank: true,
        category_rank: true,
        category_id: true,
      },
      //   take: 1000,
    });

    // Step-3
    const frozenStudents = await prisma.student.findMany({
      where: {
        current_status: "freeze",
      },
      select: {
        student_id: true,
      },
    });
    const frozenStudentIds = frozenStudents.map(
      (student) => student.student_id
    );

    const allocationStudent = await prisma.allocation_Status.findMany({
      where: {
        student_id: { in: [...frozenStudentIds] },
      },
      select: {
        program_id: true,
        category_id: true,
      },
    });
    for (const item of allocationStudent) {
      availableSeatMatrix.set(
        `${item.program_id}_${item.category_id}`,
        availableSeatMatrix.get(`${item.program_id}_${item.category_id}`) - 1
      );
    }

    // Step-4: Collect all allocations first
    const allocationsToCreate = [];
    logToFile(`Total students to process: ${allStudents.length}`);
    for (const student of allStudents) {
      const preferences = await prisma.preferences.findMany({
        where: {
          student_id: student.student_id,
        },
        select: {
          program_id: true,
          preference_number: true,
        },
      });
      let isAlloted = false;
      for (const preference of preferences) {
        // first check general rank current pref, then with cat rank if alloted break and if not alloted check next pref
        if (availableSeatMatrix.get(`${preference.program_id}_1`) > 0) {
          availableSeatMatrix.set(
            `${preference.program_id}_1`,
            availableSeatMatrix.get(`${preference.program_id}_1`) - 1
          );
          logToFile(
            `Alloted student ${student.student_id} to program ${preference.program_id} using general rank ${student.general_rank}`
          );
          allocationsToCreate.push({
            student_id: student.student_id,
            program_id: preference.program_id,
            category_id: 1,
            round_id: round_number,
            rank_value_used: student.general_rank,
            rank_type_used: "general",
            year: 2025,
          });
          isAlloted = true;
          break;
        } else if (
          availableSeatMatrix.get(
            `${preference.program_id}_${student.category_id}`
          ) > 0
        ) {
          availableSeatMatrix.set(
            `${preference.program_id}_${student.category_id}`,
            availableSeatMatrix.get(
              `${preference.program_id}_${student.category_id}`
            ) - 1
          );
          logToFile(
            `Alloted student ${student.student_id} to program ${preference.program_id} using category rank ${student.category_rank}`
          );
          allocationsToCreate.push({
            student_id: student.student_id,
            program_id: preference.program_id,
            category_id: student.category_id,
            round_id: round_number,
            rank_value_used: student.category_rank,
            rank_type_used: "category",
            year: 2025,
          });
          isAlloted = true;
          break;
        }
      }
      if (!isAlloted) {
        logToFile(`Student ${student.student_id} not alloted to any program`);
      }
    }

    // Step-5: Batch insert allocations with batch size of 300
    const BATCH_SIZE = 500;
    let totalInserted = 0;

    for (let i = 0; i < allocationsToCreate.length; i += BATCH_SIZE) {
      const batch = allocationsToCreate.slice(i, i + BATCH_SIZE);
      const result = await prisma.allocation_Status.createMany({
        data: batch,
        skipDuplicates: true,
      });
      totalInserted += result.count;
      logToFile(
        `Inserted batch ${Math.floor(i / BATCH_SIZE) + 1}: ${
          result.count
        } records (Total so far: ${totalInserted})`
      );
    }

    logToFile("=".repeat(80));
    logToFile(`Allocation process completed successfully!`);
    logToFile(`Total allocations created: ${totalInserted}`);
    logToFile(
      `Total batches processed: ${Math.ceil(
        allocationsToCreate.length / BATCH_SIZE
      )}`
    );
    logToFile("=".repeat(80));
    // insertCuttOffRanks(allocationsToCreate,round_number);
    return res.status(200).json({
      message: "Done",
      totalAllocations: totalInserted,
    });
  } catch (error) {
    logToFile("=".repeat(80));
    logToFile(`ERROR: Allocation process failed!`);
    logToFile(`Error message: ${error.message}`);
    logToFile(`Stack trace: ${error.stack}`);
    logToFile("=".repeat(80));
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error while starting allocation",
    });
  }
};

const getOpeningAndClosingRanks = async (req, res) => {
  try {
    const data = req.body;
    if (
      !data.college_id ||
      !data.department_id ||
      !data.category_id ||
      !data.round_number ||
      !Array.isArray(data.college_id) ||
      !Array.isArray(data.department_id) ||
      !Array.isArray(data.category_id)
    ) {
      return res.status(400).json({
        success: false,
        message: "Provide all the necessary fields",
      });
    }
    data.college_id = data.college_id.map((item) => parseInt(item, 10));
    data.department_id = data.department_id.map((item) => parseInt(item, 10));
    data.category_id = data.category_id.map((item) => parseInt(item, 10));
    data.round_number = parseInt(data.round_number, 10);
    const allProgramsids = await prisma.program.findMany({
      where: {
        college_id: { in: data.college_id },
        department_id: { in: data.department_id },
      },
      select: {
        program_id: true,
      },
    });
    const roundDetails = await prisma.round.findUnique({
      where: {
        round_number: data.round_number,
      },
    });
    const totalData = await prisma.cutOff_ranks.findMany({
      where: {
        program_id: { in: allProgramsids.map((item) => item.program_id) },
        category_id: { in: data.category_id },
        round_id: { in: roundDetails.round_id },
      },
      include: {
        programID: {
          select: {
            college_id: true,
            department_id: true,
          },
        },
      },
    });

    const serializedData = totalData.map((item) => ({
      program_id: item.program_id.toString(),
      category_id: item.category_id.toString(),
      round_id: item.round_id.toString(),
      opening_rank: item.opening_rank?.toString(),
      closing_rank: item.closing_rank?.toString(),
      college_id: item.programID.college_id.toString(),
      department_id: item.programID.department_id.toString(),
    }));

    return res.status(200).json({
      success: true,
      message: "Opening and closing ranks fetched successfully",
      data: serializedData,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error while getting opening and closing ranks",
      error: error,
    });
  }
};



const FetchRoundNumber = async (req,res) => {
   try {
    // Find the latest round where start_time <= NOW()
    let round = await prisma.round.findFirst({
      where: {
        start_time: {
          lte: new Date(),   // start_time <= now
        },
      },
      orderBy: {
        start_time: "desc",  // closest to now
      },
      select: {
        round_number: true,
      },
    });

    // return round_number or null
    let round_no=round ? round.round_number : null
    return res.status(200).json({
      success: true,
      message: "Round number returned successfully",
      data: round_no,
    });

  } catch (error) {
    console.error("Error getting latest round number:", error);
    return null;
  }
};

export { startAllocation, insertCuttOffRanks,getOpeningAndClosingRanks,FetchRoundNumber };
