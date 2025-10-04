import express from "express";
import cors from "cors";
import { PrismaClient } from "./generated/prisma/index.js";
import categoryRouter from "./routes/categoryRouter.js";
import studentRouter from "./routes/studentRouter.js";
import collegeRouter from "./routes/collegeRouter.js";
import departmentRouter from "./routes/departmentRouter.js";
import programRouter from "./routes/programRouter.js";
import seatMatrixRouter from "./routes/seatMatrixRouter.js";
import prefernceRouter from "./routes/preferenceRouter.js";
const app = new express();
const PORT = process.env.PORT || 9000;

const prisma=new PrismaClient();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
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
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});