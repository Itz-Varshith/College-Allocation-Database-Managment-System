import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

const getAllCollegeInfo = async (req, res) => {
  try {
    const allCollege = await prisma.college.findMany();
    let namesList = [];
    for (const college of allCollege) {
      if (college && college.college_name) {
        namesList.push({name:college.college_name,id:college.college_id});
      }
    }
    return res.status(200).json({
      success: true,
      message: "College names fetched successfully",
      namesList,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching college data",
    });
  }
};

const editCollegeInfo = async (req, res) => {
  try {
    console.log("Hii")
    const collegeData = req.body;
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server error while editing college details",
    });
  }
};


const addCollegeController = async (req, res) => {
  try {
    console.log("Inside controller")
    await prisma.college.createMany({
      data: [
        {
          college_name: "IIT Bombay",
          state: "Maharashtra",
          city: "Mumbai",
          pincode: "400076",
        },
        {
          college_name: "IIT Delhi",
          state: "Delhi",
          city: "Delhi",
          pincode: "110016",
        },
        {
          college_name: "IIT Madras",
          state: "Tamil Nadu",
          city: "Chennai",
          pincode: "600036",
        },
        {
          college_name: "IIT Kanpur",
          state: "Uttar Pradesh",
          city: "Kanpur",
          pincode: "208016",
        },
        {
          college_name: "IIT Kharagpur",
          state: "West Bengal",
          city: "Kharagpur",
          pincode: "721302",
        },
        {
          college_name: "IIT Roorkee",
          state: "Uttarakhand",
          city: "Roorkee",
          pincode: "247667",
        },
        {
          college_name: "IIT Guwahati",
          state: "Assam",
          city: "Guwahati",
          pincode: "781039",
        },
        {
          college_name: "IIT Hyderabad",
          state: "Telangana",
          city: "Hyderabad",
          pincode: "502284",
        },
        {
          college_name: "IIT Varanasi",
          state: "Uttar Pradesh",
          city: "Varanasi",
          pincode: "221005",
        },
        {
          college_name: "IIT Indore",
          state: "Madhya Pradesh",
          city: "Indore",
          pincode: "453552",
        },
      ],
      skipDuplicates: true,
    });
    return res.status(200).json({
        success:true,
        message:"Colleges inserted successfully"
    })
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while adding Colleges",
    });
  }
};
export { getAllCollegeInfo, editCollegeInfo, addCollegeController };
