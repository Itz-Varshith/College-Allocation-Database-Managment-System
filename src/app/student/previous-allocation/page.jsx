
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { History } from "lucide-react"

const generateAllocationData = (institute, department, category) => {
  const data = []
  const institutes = institute === "all" ? Array.from({ length: 10 }, (_, i) => `IIT${i + 1}`) : [institute]
  const departments = department === "all" ? Array.from({ length: 5 }, (_, i) => `dept${i + 1}`) : [department]
  const categories = category === "all" ? Array.from({ length: 16 }, (_, i) => `${i + 1}`) : [category]

  institutes.forEach((inst) => {
    departments.forEach((dept) => {
      categories.forEach((cat) => {
        const openingRank = Math.floor(Math.random() * 1000) + 100 // Random opening rank between 100-1099
        const closingRank = openingRank + Math.floor(Math.random() * 500) + 50 // Closing rank higher than opening
        data.push({
          institute: inst,
          department: dept,
          category: cat,
          openingRank: openingRank,
          closingRank: closingRank,
        })
      })
    })
  })

  return data
}

export default function PreviousAllocationPage() {
  const [selectedInstitute, setSelectedInstitute] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [allocationData, setAllocationData] = useState([])
  const [showResults, setShowResults] = useState(false)

  const handleSubmit = () => {
    if (selectedInstitute && selectedDepartment && selectedCategory) {
      const data = generateAllocationData(selectedInstitute, selectedDepartment, selectedCategory)
      setAllocationData(data)
      setShowResults(true)
    }
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
            <div className="space-y-4">
              <div className="grid grid-cols-4">
                <label className="text-sm font-medium text-gray-700 col-span-1 my-auto">Select Institute</label>
                <Select value={selectedInstitute} onValueChange={setSelectedInstitute}>
                  <SelectTrigger className="border-blue-200 focus:border-blue-400 w-full col-span-3">
                    <SelectValue placeholder="Choose institute" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => (
                      <SelectItem key={i} value={`IIT${i + 1}`}>
                        IIT{i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-4">
                <label className="text-sm font-medium text-gray-700 col-span-1 my-auto">Select Department</label>
                <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                  <SelectTrigger className="border-blue-200 focus:border-blue-400 w-full col-span-3">
                    <SelectValue placeholder="Choose department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    {Array.from({ length: 5 }, (_, i) => (
                      <SelectItem key={i} value={`dept${i + 1}`}>
                        dept{i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-4">
                <label className="text-sm font-medium text-gray-700 col-span-1 my-auto">Select Category</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="border-blue-200 focus:border-blue-400 w-full col-span-3">
                    <SelectValue placeholder="Choose category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    {Array.from({ length: 16 }, (_, i) => (
                      <SelectItem key={i} value={`${i + 1}`}>
                        {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                onClick={handleSubmit}
                disabled={!selectedInstitute || !selectedDepartment || !selectedCategory}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
              >
                Submit
              </Button>
            </div>

            {showResults && (
              <div className="space-y-4">
                <div className="border-t border-blue-200 pt-6"></div>

                <h3 className="text-lg font-semibold text-gray-800">Previous Allocation Results</h3>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-blue-200 rounded-lg">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="border border-blue-200 px-4 py-3 text-left text-sm font-semibold text-blue-800">
                          S.No.
                        </th>
                        <th className="border border-blue-200 px-4 py-3 text-left text-sm font-semibold text-blue-800">
                          Institute Name
                        </th>
                        <th className="border border-blue-200 px-4 py-3 text-left text-sm font-semibold text-blue-800">
                          Department
                        </th>
                        <th className="border border-blue-200 px-4 py-3 text-left text-sm font-semibold text-blue-800">
                          Category Type
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
                        <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-blue-25"}>
                          <td className="border border-blue-200 px-4 py-3 text-sm text-gray-700 font-medium">
                            {index + 1}
                          </td>
                          <td className="border border-blue-200 px-4 py-3 text-sm text-gray-700 break-words">
                            {row.institute}
                          </td>
                          <td className="border border-blue-200 px-4 py-3 text-sm text-gray-700 break-words">
                            {row.department}
                          </td>
                          <td className="border border-blue-200 px-4 py-3 text-sm text-gray-700 break-words">
                            {row.category}
                          </td>
                          <td className="border border-blue-200 px-4 py-3 text-sm text-gray-700 font-medium">
                            {row.openingRank}
                          </td>
                          <td className="border border-blue-200 px-4 py-3 text-sm text-gray-700 font-medium">
                            {row.closingRank}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="text-sm text-gray-600 text-center">Showing {allocationData.length} results</div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
