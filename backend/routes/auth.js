import express from "express";
import bcrypt from "bcryptjs";
import { PrismaClient } from "../generated/prisma/index.js"; 

const router = express.Router();
const prisma = new PrismaClient();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const student = await prisma.student.findFirst({
      where: { email },
    });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    if (!student.isRegistered) {
      if (password === student.mobile_number) {
        const hashedPassword = await bcrypt.hash(student.mobile_number, 10);

        await prisma.student.updateMany({
          where: { email },
          data: {
            password: hashedPassword,
            // isRegistered: true,
          },
        });

        req.session.studentId = student.student_id;
        
        return res.status(200).json({ 
          message: "Registered successfully & logged in", 
          studentId: student.student_id 
        });
      } else {
        return res.status(401).json({ message: "Invalid credentials" });
      }
    }

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
   
    req.session.studentId = student.student_id;
  req.session.save((err) => {
  if (err) console.error("Session save error:", err);
  return res.status(200).json({ 
    message: "Login successful", 
    studentId: student.student_id 
  });
});



  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
});


router.post("/logout", async (req, res) => {
  try {
    // Check if session exists
    if (!req.session) {
      return res.status(200).json({
        message: "Already logged out",
      });
    }

    // Destroy the session
    req.session.destroy((err) => {
      if (err) {
        console.error("Session destroy error:", err);
        return res.status(500).json({ message: "Error during logout" });
      }

      // Clear the session cookie (default name is "connect.sid")
      res.clearCookie("connect.sid", {
        httpOnly: true,
        secure: false, // Set to true if using HTTPS
        sameSite: "lax",
      });

      return res.status(200).json({
        message: "Logout successful",
      });
    });
  } catch (error) {
    console.error("Logout error:", error);
    return res.status(500).json({ message: "Server error during logout" });
  }
});

export default router;
