import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

const startAllocation = async (req, res) => {
  try {
    // Getting details of the round number here
    const round_number = 1;
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
      take: 100,
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

    // Step-4
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
      for (const preference of preferences) {
        // first check general rank current pref, then with cat rank if alloted break and if not alloted check next pref
        if (availableSeatMatrix.get(`${preference.program_id}_1`) > 0) {
          availableSeatMatrix.set(
            `${preference.program_id}_1`,
            availableSeatMatrix.get(`${preference.program_id}_1`) - 1
          );
          console.log(
            `Alloted student with ${student.student_id} to ${preference.program_id} in general rank`
          );
          await prisma.allocation_Status.create({
            data: {
              studentID: { connect: { student_id: student.student_id } },
              programID: { connect: { program_id: preference.program_id } },
              categoryID: { connect: { category_id: student.category_id } },
              roundID: { connect: { round_number: round_number } },
              rank_value_used: student.general_rank,
              rank_type_used: "general",
            },
          });
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
          console.log(
            `Alloted student with ${student.student_id} to ${preference.program_id} in category rank`
          );
          await prisma.allocation_Status.create({
            data: {
              studentID: { connect: { student_id: student.student_id } },
              programID: { connect: { program_id: preference.program_id } },
              categoryID: { connect: { category_id: student.category_id } },
              roundID: { connect: { round_number: round_number } },
              rank_value_used: student.category_rank,
              rank_type_used: "category",
            },
          });
          break;
        }
      }
    }

    return res.status(200).json({
      message: "Done",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error while starting allocation",
    });
  }
};

export { startAllocation };
