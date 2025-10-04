import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

const getPreferences = async (req, res) => {
  try {
    const studentId = req.params.id;
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
    const data = req.body;

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

export { getPreferences, addPreferences };



