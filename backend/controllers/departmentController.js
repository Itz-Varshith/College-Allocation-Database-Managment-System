import { PrismaClient } from "../generated/prisma/index.js";


const prisma = new PrismaClient();

const addDepartmentController = async (req, res) => {
  try {
    await prisma.department.createMany({
      data:[
        {department_name:"Computer Science and Engineering"},
        {department_name:"Electrical Engineering"},
        {department_name:"Civil Engineering"},
        {department_name:"Mechanical Engineering"},
        {department_name:"Chemical Engineering"}
      ]
    })
    return res.status(200).json({
      success:true,
      message:"Departments added successfully"
    })
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success:false,
      message:"Server error while inserting departments",
      error:error
    })
  }  
};

const getAllDepartments=async(req,res)=>{
  try {
    const allDepts=await prisma.department.findMany();
    let results=[];
    for(const dept of allDepts){
      results.push({name:dept.department_name,id:dept.department_id})
    }
    return res.status(200).json({
      success:true,
      message:"Department names fetched successfully",
      namesList:results
    })
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success:false,
      message:"server error while fetching department list",
      error
    })
  }
}

export { addDepartmentController, getAllDepartments };
