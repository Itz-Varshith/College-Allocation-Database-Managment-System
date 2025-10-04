// import express from "express";
// import cors from "cors";
// import { PrismaClient } from "./generated/prisma/index.js";
// import categoryRouter from "./routes/categoryRouter.js";
// import studentRouter from "./routes/studentRouter.js";
// import collegeRouter from "./routes/collegeRouter.js";
// import departmentRouter from "./routes/departmentRouter.js";
// import programRouter from "./routes/programRouter.js";
// import authRoutes from "./routes/auth.js";
// const app = new express();
// const PORT = process.env.PORT || 9000;

// const prisma=new PrismaClient();

// app.use(express.json());
// app.use(cors({
//   origin: "http://localhost:3000", 
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true
// }));


// app.get('/', (req, res) => {
//     res.send('College Allocation Database Management System API');
// });

// app.use('/category',categoryRouter);
// app.use('/student',studentRouter);
// app.use('/college',collegeRouter)
// app.use('/department',departmentRouter)
// app.use('/program',programRouter)
// app.use("/api", authRoutes);

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });





import express from "express";
import cors from "cors";
import dotenv from "dotenv"; 
import session from "express-session";
import { PrismaClient } from "./generated/prisma/index.js";

import categoryRouter from "./routes/categoryRouter.js";
import studentRouter from "./routes/studentRouter.js";
import collegeRouter from "./routes/collegeRouter.js";
import departmentRouter from "./routes/departmentRouter.js";
import programRouter from "./routes/programRouter.js";
import seatMatrixRouter from "./routes/seatMatrixRouter.js";
import prefernceRouter from "./routes/preferenceRouter.js";
const app = new express();
import authRoutes from "./routes/auth.js";
import profileRouter from "./routes/profile.js";
import changePasswordRouter from "./routes/changePassword.js";

dotenv.config();

const PORT = process.env.PORT || 9000;

const prisma = new PrismaClient();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, 
    maxAge: 1000*60*60*24,
  }
}));

app.get('/', (req, res) => {
    res.send('College Allocation Database Management System API');
});

app.use('/category',categoryRouter);
app.use('/student',studentRouter);
app.use('/college',collegeRouter)
app.use('/department',departmentRouter)
app.use('/program',programRouter)
app.use('/seatMatrix',seatMatrixRouter)
app.use('/preference',prefernceRouter)
app.use("/api", authRoutes);
app.use("/api/profile", profileRouter);
app.use("/api/change-password", changePasswordRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
