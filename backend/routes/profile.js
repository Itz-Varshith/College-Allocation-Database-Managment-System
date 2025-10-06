// import express from "express";
// import { PrismaClient } from "../generated/prisma/index.js";

// const router = express.Router();
// const prisma = new PrismaClient();

// router.get("/", async (req, res) => {
//   try {
//     if (!req.session.studentId) {
//       return res.status(401).json({ message: "Not logged in" });
//     }

//     const student = await prisma.student.findUnique({
//       where: { student_id: req.session.studentId },
//       select: {
//         student_id: true,
//         name: true,
//         email: true,
//         mobile_number: true,
//         gender: true,
//         current_status: true,
//         isRegistered: true,

//       },
//     });

//     if (!student) {
//       return res.status(404).json({ message: "Student not found" });
//     }

//     res.status(200).json({ student });

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// export default router;




import express from "express";
import { PrismaClient } from "../generated/prisma/index.js";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    if (!req.session.studentId) {
      return res.status(401).json({ message: "Not logged in" });
    }

    const student = await prisma.student.findUnique({
      where: { student_id: req.session.studentId },
      select: {
        student_id: true,
        name: true,
        email: true,
        mobile_number: true,
        gender: true,
        current_status: true,
        isRegistered: true,
        general_rank: true,
        category_rank: true,
        category_id: true,  // This gives the ID of the category relation
      },
    });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    student.general_rank = student.general_rank.toString();
    student.category_rank = student.category_rank.toString();

    res.status(200).json({ student });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
