import { PrismaClient } from "../generated/prisma/index.js"

const prisma = new PrismaClient();

const addProgramController= async (req,res)=>{
    try {
        for(let i=1;i<=10;i++){
            for(let j=1;j<=5;j++){
                await prisma.program.create({
                    data:{
                        college_id:i,
                        department_id:j,
                        duration:"4"
                    }
                })
            }
        };
        return res.status(200).json({
            success:true,
            message:"Programs inserted successfully"
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Server error while inserting departments",
            error:error
        })
    }
}


export {addProgramController}