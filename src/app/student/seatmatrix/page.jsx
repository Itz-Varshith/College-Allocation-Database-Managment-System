
"use client"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Grid3X3 } from "lucide-react"

export default function SeatMatrixPage() {
  const [selectedInstitute, setSelectedInstitute] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [seatData, setSeatData] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [loading, setLoading] = useState(false)

  // NEW: State for fetched lists
  const [institutes, setInstitutes] = useState([])
  const [departments, setDepartments] = useState([])
  const [categories, setCategories] = useState([])

  // Fetch dropdown data from backend
  useEffect(() => {
    const fetchInstitutes = async () => {
      try {
        const res = await fetch("http://localhost:9000/college/all")
        const data = await res.json()
        if (data.success && data.namesList) {
          setInstitutes(data.namesList)
        }
      } catch (error) {
        console.error("Error fetching institutes:", error)
      }
    }

    const fetchDepartments = async () => {
      try {
        const res = await fetch("http://localhost:9000/department/all")
        const data = await res.json()
        if (data.success && data.namesList) {
          setDepartments(data.namesList)
        }
      } catch (error) {
        console.error("Error fetching departments:", error)
      }
    }

    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:9000/category/all")
        const data = await res.json()
        if (data.success && data.namesList) {
          setCategories(data.namesList)
        }
      } catch (error) {
        console.error("Error fetching categories:", error)
      }
    }

    fetchInstitutes()
    fetchDepartments()
    fetchCategories()
  }, [])

  const handleSubmit = async () => {
    setLoading(true)
    try {
      if (selectedInstitute && selectedDepartment && selectedCategory) {
        let instituteArray = []
        let departmentArray = []
        let categoryArray = []

        if (selectedInstitute === "all") {
          instituteArray = institutes.map((inst) => Number.parseInt(inst.id, 10))
        } else {
          instituteArray = [Number.parseInt(selectedInstitute, 10)]
        }

        if (selectedDepartment === "all") {
          departmentArray = departments.map((dept) => Number.parseInt(dept.id, 10))
        } else {
          departmentArray = [Number.parseInt(selectedDepartment, 10)]
        }

        if (selectedCategory === "all") {
          categoryArray = categories.map((cat) => Number.parseInt(cat.id, 10))
        } else {
          categoryArray = [Number.parseInt(selectedCategory, 10)]
        }
        const res = await fetch("http://localhost:9000/seatMatrix/data", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            college_id: instituteArray,
            department_id: departmentArray,
            category_id: categoryArray,
          }),
        })
        console.log(instituteArray,departmentArray,categoryArray)
        console.log("efhsu",res)
        const data = await res.json()
        console.log(data)

        if (data.success && data.data) {
          const mappedData = data.data.map((item) => ({
            institute: institutes.find((i) => i.id === item.college_id)?.name || `College ${item.college_id}`,
            department: departments.find((d) => d.id === item.department_id)?.name || `Dept ${item.department_id}`,
            category: categories.find((c) => c.id === item.category_id)?.name || `Cat ${item.category_id}`,
            seats: item.total_seats,
          }))
          setSeatData(mappedData)
        }

        setShowResults(true)
      }
    } catch (error) {
      console.error("Error fetching seat matrix:", error)
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setSelectedInstitute("")
    setSelectedDepartment("")
    setSelectedCategory("")
    setSeatData([])
    setShowResults(false)
  }

  return (
    <div className="space-y-6 m-5">
      <Card className="border-blue-200 p-0">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b border-blue-100 pt-5 mt-0 rounded-t-xl">
          <CardTitle className="text-blue-800 flex items-center gap-2">
            <Grid3X3 className="h-5 w-5" />
            Seat Matrix
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="space-y-4">
              {/* Institute Dropdown */}
              <div className="grid grid-cols-4">
                <label className="text-sm font-medium text-gray-700 col-span-1 my-auto">Select Institute</label>
                <Select value={selectedInstitute} onValueChange={setSelectedInstitute}>
                  <SelectTrigger className="border-blue-200 focus:border-blue-400 w-full col-span-3">
                    <SelectValue placeholder="Choose institute" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    {institutes.map((inst) => (
                      <SelectItem key={inst.id} value={String(inst.id)}>
                        {inst.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Department Dropdown */}
              <div className="grid grid-cols-4">
                <label className="text-sm font-medium text-gray-700 col-span-1 my-auto">Select Department</label>
                <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                  <SelectTrigger className="border-blue-200 focus:border-blue-400 w-full col-span-3">
                    <SelectValue placeholder="Choose department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    {departments.map((dept) => (
                      <SelectItem key={dept.id} value={String(dept.id)}>
                        {dept.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Category Dropdown */}
              <div className="grid grid-cols-4">
                <label className="text-sm font-medium text-gray-700 col-span-1 my-auto">Select Category</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="border-blue-200 focus:border-blue-400 w-full col-span-3">
                    <SelectValue placeholder="Choose category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    {categories.map((cat) => (
                      <SelectItem key={cat.id} value={String(cat.id)}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                onClick={handleSubmit}
                disabled={!selectedInstitute || !selectedDepartment || !selectedCategory || loading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="h-4 w-4 animate-spin text-white" viewBox="0 0 24 24" aria-hidden="true">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    Loading...
                  </span>
                ) : (
                  "Submit"
                )}
              </Button>
            </div>

            {showResults && (
              <div className="space-y-4">
                <div className="border-t border-blue-200 pt-6"></div>
                <h3 className="text-lg font-semibold text-gray-800">Seat Matrix Results</h3>
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
                          Number of Seats
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {seatData.map((row, index) => (
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
                            {row.seats}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="text-sm text-gray-600 text-center">Showing {seatData.length} results</div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
