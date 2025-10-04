import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

const createCategory = async (req, res) => {
  try {
    const allCats = await prisma.category.createMany({
      data: [
        { category_name: "OPEN" },
        { category_name: "OPEN-FEMALE" },
        { category_name: "OPEN-PWD" },
        { category_name: "OPEN-PWD-FEMALE" },
        { category_name: "EWS" },
        { category_name: "EWS-FEMALE" },
        { category_name: "EWS-PWD" },
        { category_name: "OBC-NCL" },
        { category_name: "OBC-NCL-FEMALE" },
        { category_name: "OBC-NCL-PWD" },
        { category_name: "SC" },
        { category_name: "SC-FEMALE" },
        { category_name: "SC-PWD" },
        { category_name: "ST" },
        { category_name: "ST-FEMALE" },
        { category_name: "ST-PWD" },
      ],
      skipDuplicates: true,
    });
    return res.status(201).json({
      message: "Categories have been inserted in the database successfully!!",
      categories: allCats,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal pointer error haha",
    });
  }
};


const getAllCategories=async (req,res)=>{
  try {
    const allCats=await prisma.category.findMany();
    let results=[];
    for(const cat of allCats){
      results.push({name:cat.category_name,id:cat.category_id})
    }
    return res.status(200).json({
      success:true,
      message:"Categories fetched successfully",
      namesList:results
    })
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success:false,
      message:"Server error while fetching categories",
      error
    })
  }
}
export { createCategory , getAllCategories};
