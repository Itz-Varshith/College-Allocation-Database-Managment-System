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
import { TrendingUp, Loader2 } from "lucide-react";
import { API_BASE_URL } from "@/lib/api";

export default function PredictionPage() {
  const [selectedCollege, setSelectedCollege] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [predictionData, setPredictionData] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [colleges, setColleges] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoadingData(true);

        const collegesResponse = await fetch(`${API_BASE_URL}/college/all`);
        const collegesData = await collegesResponse.json();
        if (collegesData.success) {
          setColleges(collegesData.namesList);
        }

        const departmentsResponse = await fetch(
          `${API_BASE_URL}/department/all`
        );
        const departmentsData = await departmentsResponse.json();
        if (departmentsData.success) {
          setDepartments(departmentsData.namesList);
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

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError("");
      setShowResults(false);

      const requestData = {
        college_id:
          selectedCollege === "all" || selectedCollege === ""
            ? 0
            : parseInt(selectedCollege, 10),
        department_id:
          selectedDepartment === "all" || selectedDepartment === ""
            ? 0
            : parseInt(selectedDepartment, 10),
      };

      const response = await fetch(`${API_BASE_URL}/student/getPrediction`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(requestData),
      });

      const result = await response.json();

      if (result.success) {
        setPredictionData(result.data || []);
        setShowResults(true);
      } else {
        setError(result.message || "Failed to fetch prediction data");
      }
    } catch (error) {
      console.error("Error fetching prediction data:", error);
      setError("Failed to fetch prediction data");
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
            <TrendingUp className="h-5 w-5" />
            Rank Prediction
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
                  Select College (Optional)
                </label>
                <Select
                  value={selectedCollege}
                  onValueChange={setSelectedCollege}
                >
                  <SelectTrigger className="border-blue-200 focus:border-blue-400 w-full col-span-3">
                    <SelectValue placeholder="Choose college (leave empty for all)" />
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
                  Select Department (Optional)
                </label>
                <Select
                  value={selectedDepartment}
                  onValueChange={setSelectedDepartment}
                >
                  <SelectTrigger className="border-blue-200 focus:border-blue-400 w-full col-span-3">
                    <SelectValue placeholder="Choose department (leave empty for all)" />
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
            </div>

            <div className="flex justify-center">
              <Button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Predicting...
                  </>
                ) : (
                  "Get Prediction"
                )}
              </Button>
            </div>

            {showResults && (
              <div className="space-y-4">
                <div className="border-t border-blue-200 pt-6"></div>

                <h3 className="text-lg font-semibold text-gray-800">
                  Prediction Results
                </h3>

                {predictionData.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    No matching programs found based on your rank and
                    preferences.
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
                            Opening Rank
                          </th>
                          <th className="border border-blue-200 px-4 py-3 text-left text-sm font-semibold text-blue-800">
                            Closing Rank
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {predictionData.map((row, index) => (
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
                              {row.college_name}
                            </td>
                            <td className="border border-blue-200 px-4 py-3 text-sm text-gray-700 break-words">
                              {row.department_name}
                            </td>
                            <td className="border border-blue-200 px-4 py-3 text-sm text-gray-700 font-medium">
                              {row.opening_rank}
                            </td>
                            <td className="border border-blue-200 px-4 py-3 text-sm text-gray-700 font-medium">
                              {row.closing_rank}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                <div className="text-sm text-gray-600 text-center">
                  Showing {predictionData.length} result
                  {predictionData.length !== 1 ? "s" : ""}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
