
// "use client"

// import { useState } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { History } from "lucide-react"

// const generateAllocationData = (institute, department, category) => {
//   const data = []
//   const institutes = institute === "all" ? Array.from({ length: 10 }, (_, i) => `IIT${i + 1}`) : [institute]
//   const departments = department === "all" ? Array.from({ length: 5 }, (_, i) => `dept${i + 1}`) : [department]
//   const categories = category === "all" ? Array.from({ length: 16 }, (_, i) => `${i + 1}`) : [category]

//   institutes.forEach((inst) => {
//     departments.forEach((dept) => {
//       categories.forEach((cat) => {
//         const openingRank = Math.floor(Math.random() * 1000) + 100 // Random opening rank between 100-1099
//         const closingRank = openingRank + Math.floor(Math.random() * 500) + 50 // Closing rank higher than opening
//         data.push({
//           institute: inst,
//           department: dept,
//           category: cat,
//           openingRank: openingRank,
//           closingRank: closingRank,
//         })
//       })
//     })
//   })

//   return data
// }

// export default function PreviousAllocationPage() {
//   const [selectedInstitute, setSelectedInstitute] = useState("")
//   const [selectedDepartment, setSelectedDepartment] = useState("")
//   const [selectedCategory, setSelectedCategory] = useState("")
//   const [allocationData, setAllocationData] = useState([])
//   const [showResults, setShowResults] = useState(false)

//   const handleSubmit = () => {
//     if (selectedInstitute && selectedDepartment && selectedCategory) {
//       const data = generateAllocationData(selectedInstitute, selectedDepartment, selectedCategory)
//       setAllocationData(data)
//       setShowResults(true)
//     }
//   }

//   return (
//     <div className="space-y-6">
//       <Card className="border-blue-200 p-0">
//         <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b border-blue-100 pt-5 mt-0 rounded-t-xl">
//           <CardTitle className="text-blue-800 flex items-center gap-2">
//             <History className="h-5 w-5" />
//             Previous Seat Allocation
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="p-6">
//           <div className="space-y-6">
//             <div className="space-y-4">
//               <div className="grid grid-cols-4">
//                 <label className="text-sm font-medium text-gray-700 col-span-1 my-auto">Select Institute</label>
//                 <Select value={selectedInstitute} onValueChange={setSelectedInstitute}>
//                   <SelectTrigger className="border-blue-200 focus:border-blue-400 w-full col-span-3">
//                     <SelectValue placeholder="Choose institute" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {Array.from({ length: 10 }, (_, i) => (
//                       <SelectItem key={i} value={`IIT${i + 1}`}>
//                         IIT{i + 1}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div className="grid grid-cols-4">
//                 <label className="text-sm font-medium text-gray-700 col-span-1 my-auto">Select Department</label>
//                 <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
//                   <SelectTrigger className="border-blue-200 focus:border-blue-400 w-full col-span-3">
//                     <SelectValue placeholder="Choose department" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">All</SelectItem>
//                     {Array.from({ length: 5 }, (_, i) => (
//                       <SelectItem key={i} value={`dept${i + 1}`}>
//                         dept{i + 1}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div className="grid grid-cols-4">
//                 <label className="text-sm font-medium text-gray-700 col-span-1 my-auto">Select Category</label>
//                 <Select value={selectedCategory} onValueChange={setSelectedCategory}>
//                   <SelectTrigger className="border-blue-200 focus:border-blue-400 w-full col-span-3">
//                     <SelectValue placeholder="Choose category" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">All</SelectItem>
//                     {Array.from({ length: 16 }, (_, i) => (
//                       <SelectItem key={i} value={`${i + 1}`}>
//                         {i + 1}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>

//             <div className="flex justify-center">
//               <Button
//                 onClick={handleSubmit}
//                 disabled={!selectedInstitute || !selectedDepartment || !selectedCategory}
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
//               >
//                 Submit
//               </Button>
//             </div>

//             {showResults && (
//               <div className="space-y-4">
//                 <div className="border-t border-blue-200 pt-6"></div>

//                 <h3 className="text-lg font-semibold text-gray-800">Previous Allocation Results</h3>

//                 <div className="overflow-x-auto">
//                   <table className="w-full border-collapse border border-blue-200 rounded-lg">
//                     <thead>
//                       <tr className="bg-blue-50">
//                         <th className="border border-blue-200 px-4 py-3 text-left text-sm font-semibold text-blue-800">
//                           S.No.
//                         </th>
//                         <th className="border border-blue-200 px-4 py-3 text-left text-sm font-semibold text-blue-800">
//                           Institute Name
//                         </th>
//                         <th className="border border-blue-200 px-4 py-3 text-left text-sm font-semibold text-blue-800">
//                           Department
//                         </th>
//                         <th className="border border-blue-200 px-4 py-3 text-left text-sm font-semibold text-blue-800">
//                           Category Type
//                         </th>
//                         <th className="border border-blue-200 px-4 py-3 text-left text-sm font-semibold text-blue-800">
//                           Opening Rank
//                         </th>
//                         <th className="border border-blue-200 px-4 py-3 text-left text-sm font-semibold text-blue-800">
//                           Closing Rank
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {allocationData.map((row, index) => (
//                         <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-blue-25"}>
//                           <td className="border border-blue-200 px-4 py-3 text-sm text-gray-700 font-medium">
//                             {index + 1}
//                           </td>
//                           <td className="border border-blue-200 px-4 py-3 text-sm text-gray-700 break-words">
//                             {row.institute}
//                           </td>
//                           <td className="border border-blue-200 px-4 py-3 text-sm text-gray-700 break-words">
//                             {row.department}
//                           </td>
//                           <td className="border border-blue-200 px-4 py-3 text-sm text-gray-700 break-words">
//                             {row.category}
//                           </td>
//                           <td className="border border-blue-200 px-4 py-3 text-sm text-gray-700 font-medium">
//                             {row.openingRank}
//                           </td>
//                           <td className="border border-blue-200 px-4 py-3 text-sm text-gray-700 font-medium">
//                             {row.closingRank}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>

//                 <div className="text-sm text-gray-600 text-center">Showing {allocationData.length} results</div>
//               </div>
//             )}
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }



"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { History, Loader2 } from "lucide-react";

const API_BASE_URL = "http://localhost:9000";

export default function PreviousAllocationPage() {
  const [selectedInstitute, setSelectedInstitute] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRound, setSelectedRound] = useState("1");
  const [allocationData, setAllocationData] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Data for dropdowns
  const [colleges, setColleges] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  // Fetch initial data
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoadingData(true);

        // Fetch colleges
        const collegesResponse = await fetch(`${API_BASE_URL}/college/all`);
        const collegesData = await collegesResponse.json();
        if (collegesData.success) {
          setColleges(collegesData.namesList);
        }

        // Fetch departments
        const departmentsResponse = await fetch(
          `${API_BASE_URL}/department/all`
        );
        const departmentsData = await departmentsResponse.json();
        if (departmentsData.success) {
          setDepartments(departmentsData.namesList);
        }

        // Fetch categories
        const categoriesResponse = await fetch(`${API_BASE_URL}/category/all`);
        const categoriesData = await categoriesResponse.json();
        if (categoriesData.success) {
          setCategories(categoriesData.namesList);
        }
      } catch (error) {
        console.error("Error fetching initial data:", error);
        setError("Failed to load initial data");
      } finally {
        setLoadingData(false);
      }
    };

    fetchInitialData();
  }, []);

  // Helper functions to get names from IDs
  const getCollegeName = (collegeId) => {
    const college = colleges.find(
      (college) => college.id === parseInt(collegeId)
    );
    return college ? college.name : `College ${collegeId}`;
  };

  const getDepartmentName = (departmentId) => {
    const department = departments.find(
      (dept) => dept.id === parseInt(departmentId)
    );
    return department ? department.name : `Department ${departmentId}`;
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id === parseInt(categoryId));
    return category ? category.name : `Category ${categoryId}`;
  };

  const handleSubmit = async () => {
    if (!selectedInstitute || !selectedDepartment || !selectedCategory) {
      setError("Please select all required fields");
      return;
    }

    try {
      setLoading(true);
      setError("");

      // Handle "all" selections by using all available IDs
      const collegeIds =
        selectedInstitute === "all"
          ? colleges.map((college) => college.id)
          : [parseInt(selectedInstitute)];

      const departmentIds =
        selectedDepartment === "all"
          ? departments.map((dept) => dept.id)
          : [parseInt(selectedDepartment)];

      const categoryIds =
        selectedCategory === "all"
          ? categories.map((category) => category.id)
          : [parseInt(selectedCategory)];

      const requestData = {
        college_id: collegeIds,
        department_id: departmentIds,
        category_id: categoryIds,
        round_number: parseInt(selectedRound),
      };

      const response = await fetch(
        `${API_BASE_URL}/allocation/get-opening-and-closing-ranks`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      const result = await response.json();

      if (result.success) {
        setAllocationData(result.data);
        setShowResults(true);
      } else {
        setError(result.message || "Failed to fetch allocation data");
      }
    } catch (error) {
      console.error("Error fetching allocation data:", error);
      setError("Failed to fetch allocation data");
    } finally {
      setLoading(false);
    }
  };

  if (loadingData) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex items-center gap-2">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span>Loading data...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="border-blue-200 p-0">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b border-blue-100 pt-5 mt-0 rounded-t-xl">
          <CardTitle className="text-blue-800 flex items-center gap-2">
            <History className="h-5 w-5" />
            Previous Seat Allocation
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div className="grid grid-cols-4">
                <label className="text-sm font-medium text-gray-700 col-span-1 my-auto">
                  Select Institute
                </label>
                <Select
                  value={selectedInstitute}
                  onValueChange={setSelectedInstitute}
                >
                  <SelectTrigger className="border-blue-200 focus:border-blue-400 w-full col-span-3">
                    <SelectValue placeholder="Choose institute" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Colleges</SelectItem>
                    {colleges.map((college) => (
                      <SelectItem
                        key={college.id}
                        value={college.id.toString()}
                      >
                        {college.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-4">
                <label className="text-sm font-medium text-gray-700 col-span-1 my-auto">
                  Select Department
                </label>
                <Select
                  value={selectedDepartment}
                  onValueChange={setSelectedDepartment}
                >
                  <SelectTrigger className="border-blue-200 focus:border-blue-400 w-full col-span-3">
                    <SelectValue placeholder="Choose department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    {departments.map((dept) => (
                      <SelectItem key={dept.id} value={dept.id.toString()}>
                        {dept.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-4">
                <label className="text-sm font-medium text-gray-700 col-span-1 my-auto">
                  Select Category
                </label>
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="border-blue-200 focus:border-blue-400 w-full col-span-3">
                    <SelectValue placeholder="Choose category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem
                        key={category.id}
                        value={category.id.toString()}
                      >
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-4">
                <label className="text-sm font-medium text-gray-700 col-span-1 my-auto">
                  Round Number
                </label>
                <Select value={selectedRound} onValueChange={setSelectedRound}>
                  <SelectTrigger className="border-blue-200 focus:border-blue-400 w-full col-span-3">
                    <SelectValue placeholder="Choose round" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Round 1</SelectItem>
                    <SelectItem value="2">Round 2</SelectItem>
                    <SelectItem value="3">Round 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                onClick={handleSubmit}
                disabled={
                  !selectedInstitute ||
                  !selectedDepartment ||
                  !selectedCategory ||
                  loading
                }
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading...
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </div>

            {showResults && (
              <div className="space-y-4">
                <div className="border-t border-blue-200 pt-6"></div>

                <h3 className="text-lg font-semibold text-gray-800">
                  Previous Allocation Results
                </h3>

                {allocationData.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    No allocation data found for the selected criteria.
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-blue-200 rounded-lg">
                      <thead>
                        <tr className="bg-blue-50">
                          <th className="border border-blue-200 px-4 py-3 text-left text-sm font-semibold text-blue-800">
                            S.No.
                          </th>
                          <th className="border border-blue-200 px-4 py-3 text-left text-sm font-semibold text-blue-800">
                            College Name
                          </th>
                          <th className="border border-blue-200 px-4 py-3 text-left text-sm font-semibold text-blue-800">
                            Department Name
                          </th>
                          <th className="border border-blue-200 px-4 py-3 text-left text-sm font-semibold text-blue-800">
                            Category Name
                          </th>
                          <th className="border border-blue-200 px-4 py-3 text-left text-sm font-semibold text-blue-800">
                            Round ID
                          </th>
                          <th className="border border-blue-200 px-4 py-3 text-left text-sm font-semibold text-blue-800">
                            Opening Rank
                          </th>
                          <th className="border border-blue-200 px-4 py-3 text-left text-sm font-semibold text-blue-800">
                            Closing Rank
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {allocationData.map((row, index) => (
                          <tr
                            key={index}
                            className={
                              index % 2 === 0 ? "bg-white" : "bg-blue-25"
                            }
                          >
                            <td className="border border-blue-200 px-4 py-3 text-sm text-gray-700 font-medium">
                              {index + 1}
                            </td>
                            <td className="border border-blue-200 px-4 py-3 text-sm text-gray-700 break-words">
                              {getCollegeName(row.college_id)}
                            </td>
                            <td className="border border-blue-200 px-4 py-3 text-sm text-gray-700 break-words">
                              {getDepartmentName(row.department_id)}
                            </td>
                            <td className="border border-blue-200 px-4 py-3 text-sm text-gray-700 break-words">
                              {getCategoryName(row.category_id)}
                            </td>
                            <td className="border border-blue-200 px-4 py-3 text-sm text-gray-700 break-words">
                              {row.round_id}
                            </td>
                            <td className="border border-blue-200 px-4 py-3 text-sm text-gray-700 font-medium">
                              {row.opening_rank || "N/A"}
                            </td>
                            <td className="border border-blue-200 px-4 py-3 text-sm text-gray-700 font-medium">
                              {row.closing_rank || "N/A"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                <div className="text-sm text-gray-600 text-center">
                  Showing {allocationData.length} results
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
