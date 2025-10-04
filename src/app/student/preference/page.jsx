// // // // "use client"

// // // // import { useState } from "react"
// // // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// // // // import { Button } from "@/components/ui/button"
// // // // import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
// // // // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// // // // import { Plus, Trash2, ChevronUp, ChevronDown, Settings, School } from "lucide-react"

// // // // export default function PreferencePage() {
// // // //   const [preferences, setPreferences] = useState([])
// // // //   const [isModalOpen, setIsModalOpen] = useState(false)
// // // //   const [selectedInstitute, setSelectedInstitute] = useState("")
// // // //   const [selectedDepartment, setSelectedDepartment] = useState("")

// // // //   const institutes = Array.from({ length: 10 }, (_, i) => `IIT${i + 1}`)
// // // //   const departments = [ "dept1", "dept2", "dept3", "dept4", "dept5"]

// // // //   const handleAddPreference = () => {
// // // //     if (selectedInstitute && selectedDepartment) {
// // // //       const newPreference = {
// // // //         id: Date.now().toString(),
// // // //         institute: selectedInstitute,
// // // //         department: selectedDepartment,
// // // //       }
// // // //       setPreferences([...preferences, newPreference])
// // // //       setSelectedInstitute("")
// // // //       setSelectedDepartment("")
// // // //       setIsModalOpen(false)
// // // //     }
// // // //   }

// // // //   const handleDeletePreference = (id) => {
// // // //     setPreferences(preferences.filter((pref) => pref.id !== id))
// // // //   }

// // // //   const handleMoveUp = (index) => {
// // // //     if (index > 0) {
// // // //       const newPreferences = [...preferences]
// // // //       ;[newPreferences[index], newPreferences[index - 1]] = [newPreferences[index - 1], newPreferences[index]]
// // // //       setPreferences(newPreferences)
// // // //     }
// // // //   }

// // // //   const handleMoveDown = (index) => {
// // // //     if (index < preferences.length - 1) {
// // // //       const newPreferences = [...preferences]
// // // //       ;[newPreferences[index], newPreferences[index + 1]] = [newPreferences[index + 1], newPreferences[index]]
// // // //       setPreferences(newPreferences)
// // // //     }
// // // //   }

// // // //   return (
// // // //     <div className="space-y-6">
// // // //       <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-white">
// // // //         <CardHeader className="pb-3">
// // // //           <div className="flex justify-between items-center">
// // // //             <CardTitle className="text-blue-800 flex items-center gap-2">
// // // //               <Settings className="h-5 w-5" />
// // // //               College Preferences
// // // //             </CardTitle>
// // // //             <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
// // // //               <DialogTrigger asChild>
// // // //                 <Button className="bg-blue-600 hover:bg-blue-700 text-white">
// // // //                   <Plus className="h-4 w-4 mr-2" />
// // // //                   Add Preference
// // // //                 </Button>
// // // //               </DialogTrigger>
// // // //               <DialogContent className="sm:max-w-md">
// // // //                 <DialogHeader>
// // // //                   <DialogTitle className="text-blue-800">Add New Preference</DialogTitle>
// // // //                 </DialogHeader>
// // // //                 <div className="space-y-4 py-4">
// // // //                   <div className="space-y-2">
// // // //                     <label className="text-sm font-medium text-gray-700">Select Institute</label>
// // // //                     <Select value={selectedInstitute} onValueChange={setSelectedInstitute}>
// // // //                       <SelectTrigger className="border-blue-200 focus:border-blue-400">
// // // //                         <SelectValue placeholder="Choose an institute" />
// // // //                       </SelectTrigger>
// // // //                       <SelectContent>
// // // //                         {institutes.map((institute) => (
// // // //                           <SelectItem key={institute} value={institute}>
// // // //                             {institute}
// // // //                           </SelectItem>
// // // //                         ))}
// // // //                       </SelectContent>
// // // //                     </Select>
// // // //                   </div>
// // // //                   <div className="space-y-2">
// // // //                     <label className="text-sm font-medium text-gray-700">Select Department</label>
// // // //                     <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
// // // //                       <SelectTrigger className="border-blue-200 focus:border-blue-400">
// // // //                         <SelectValue placeholder="Choose a department" />
// // // //                       </SelectTrigger>
// // // //                       <SelectContent>
// // // //                         {departments.map((department) => (
// // // //                           <SelectItem key={department} value={department}>
// // // //                             {department}
// // // //                           </SelectItem>
// // // //                         ))}
// // // //                       </SelectContent>
// // // //                     </Select>
// // // //                   </div>
// // // //                   <Button
// // // //                     onClick={handleAddPreference}
// // // //                     className="w-full bg-blue-600 hover:bg-blue-700 text-white"
// // // //                     disabled={!selectedInstitute || !selectedDepartment}
// // // //                   >
// // // //                     Add Preference
// // // //                   </Button>
// // // //                 </div>
// // // //               </DialogContent>
// // // //             </Dialog>
// // // //           </div>
// // // //         </CardHeader>
// // // //         <CardContent>
// // // //           <p className="text-blue-600">Set your college and department preferences in order of priority.</p>
// // // //         </CardContent>
// // // //       </Card>

// // // //       <Card>
// // // //         <CardHeader>
// // // //           <CardTitle className="text-gray-800 flex items-center gap-2">
// // // //             <School className="h-5 w-5" />
// // // //             Your Preferences ({preferences.length})
// // // //           </CardTitle>
// // // //         </CardHeader>
// // // //         <CardContent>
// // // //           {preferences.length === 0 ? (
// // // //             <div className="text-center py-8">
// // // //               <School className="h-12 w-12 text-gray-300 mx-auto mb-4" />
// // // //               <p className="text-gray-500 text-lg">No preferences added yet</p>
// // // //               <p className="text-gray-400 text-sm mt-2">Click "Add Preference" to get started</p>
// // // //             </div>
// // // //           ) : (
// // // //             <div className="space-y-3">
// // // //               {preferences.map((preference, index) => (
// // // //                 <div
// // // //                   key={preference.id}
// // // //                   className="flex items-center justify-between p-4 bg-white border border-blue-100 rounded-lg hover:border-blue-200 transition-colors"
// // // //                 >
// // // //                   <div className="flex items-center gap-4">
// // // //                     <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-800 rounded-full font-semibold text-sm">
// // // //                       {index + 1}
// // // //                     </div>
// // // //                     <div>
// // // //                       <p className="font-semibold text-gray-800">{preference.institute}</p>
// // // //                       <p className="text-sm text-gray-600">{preference.department}</p>
// // // //                     </div>
// // // //                   </div>
// // // //                   <div className="flex items-center gap-2">
// // // //                     <Button
// // // //                       variant="outline"
// // // //                       size="sm"
// // // //                       onClick={() => handleMoveUp(index)}
// // // //                       disabled={index === 0}
// // // //                       className="border-blue-200 hover:bg-blue-50 hover:border-blue-300"
// // // //                     >
// // // //                       <ChevronUp className="h-4 w-4" />
// // // //                     </Button>
// // // //                     <Button
// // // //                       variant="outline"
// // // //                       size="sm"
// // // //                       onClick={() => handleMoveDown(index)}
// // // //                       disabled={index === preferences.length - 1}
// // // //                       className="border-blue-200 hover:bg-blue-50 hover:border-blue-300"
// // // //                     >
// // // //                       <ChevronDown className="h-4 w-4" />
// // // //                     </Button>
// // // //                     <Button
// // // //                       variant="outline"
// // // //                       size="sm"
// // // //                       onClick={() => handleDeletePreference(preference.id)}
// // // //                       className="border-red-200 hover:bg-red-50 hover:border-red-300 text-red-600"
// // // //                     >
// // // //                       <Trash2 className="h-4 w-4" />
// // // //                     </Button>
// // // //                   </div>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           )}
// // // //         </CardContent>
// // // //       </Card>
// // // //     </div>
// // // //   )
// // // // }


// // // "use client"

// // // import { useEffect, useState } from "react"
// // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// // // import { Button } from "@/components/ui/button"
// // // import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
// // // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// // // import { Plus, Trash2, ChevronUp, ChevronDown, Settings, School, AlertTriangle } from "lucide-react"

// // // export default function PreferencePage() {
// // //   const [preferences, setPreferences] = useState([])
// // //   const [isModalOpen, setIsModalOpen] = useState(false)
// // //   const [selectedInstitute, setSelectedInstitute] = useState("")
// // //   const [selectedDepartment, setSelectedDepartment] = useState("")
// // //   const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false)
// // //   const [preferenceToDelete, setPreferenceToDelete] = useState(null)
// // //   const [highlightedPreference, setHighlightedPreference] = useState(null)
// // //   const [duplicateError, setDuplicateError] = useState("")

// // //   const institutes = Array.from({ length: 10 }, (_, i) => `IIT${i + 1}`)
// // //   const departments = ["All", "dept1", "dept2", "dept3", "dept4", "dept5"]

// // //   const handleAddPreference = () => {
// // //     if (selectedInstitute && selectedDepartment) {
// // //       const isDuplicate = preferences.some(
// // //         (pref) => pref.institute === selectedInstitute && pref.department === selectedDepartment,
// // //       )

// // //       if (isDuplicate) {
// // //         setDuplicateError("This preference already exists!")
// // //         return
// // //       }

// // //       const newPreference = {
// // //         id: Date.now().toString(),
// // //         institute: selectedInstitute,
// // //         department: selectedDepartment,
// // //       }
// // //       setPreferences([...preferences, newPreference])
// // //       setSelectedInstitute("")
// // //       setSelectedDepartment("")
// // //       setDuplicateError("")
// // //       setIsModalOpen(false)
// // //     }
// // //   }

// // //   const handleDeletePreference = (id) => {
// // //     setPreferenceToDelete(id)
// // //     setDeleteConfirmOpen(true)
// // //   }

// // //   const confirmDelete = () => {
// // //     if (preferenceToDelete) {
// // //       setPreferences(preferences.filter((pref) => pref.id !== preferenceToDelete))
// // //       setPreferenceToDelete(null)
// // //       setDeleteConfirmOpen(false)
// // //     }
// // //   }

// // //   const handleMoveUp = (index) => {
// // //     if (index > 0) {
// // //       const newPreferences = [...preferences]
// // //       ;[newPreferences[index], newPreferences[index - 1]] = [newPreferences[index - 1], newPreferences[index]]
// // //       setPreferences(newPreferences)
// // //       setHighlightedPreference(newPreferences[index - 1].id)
// // //       setTimeout(() => setHighlightedPreference(null), 1000)
// // //     }
// // //   }

// // //   const handleMoveDown = (index) => {
// // //     if (index < preferences.length - 1) {
// // //       const newPreferences = [...preferences]
// // //       ;[newPreferences[index], newPreferences[index + 1]] = [newPreferences[index + 1], newPreferences[index]]
// // //       setPreferences(newPreferences)
// // //       setHighlightedPreference(newPreferences[index + 1].id)
// // //       setTimeout(() => setHighlightedPreference(null), 1000)
// // //     }
// // //   }

// // //   return (
// // //     <div className="space-y-6">
// // //       <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-white">
// // //         <CardHeader className="pb-3">
// // //           <div className="flex justify-between items-center">
// // //             <CardTitle className="text-blue-800 flex items-center gap-2">
// // //               <Settings className="h-5 w-5" />
// // //               College Preferences
// // //             </CardTitle>
// // //             <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
// // //               <DialogTrigger asChild>
// // //                 <Button className="bg-blue-600 hover:bg-blue-700 text-white">
// // //                   <Plus className="h-4 w-4 mr-2" />
// // //                   Add Preference
// // //                 </Button>
// // //               </DialogTrigger>
// // //               <DialogContent className="sm:max-w-md">
// // //                 <DialogHeader>
// // //                   <DialogTitle className="text-blue-800">Add New Preference</DialogTitle>
// // //                 </DialogHeader>
// // //                 <div className="space-y-4 py-4">
// // //                   {duplicateError && (
// // //                     <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-md">
// // //                       <AlertTriangle className="h-4 w-4 text-red-600" />
// // //                       <p className="text-sm text-red-600">{duplicateError}</p>
// // //                     </div>
// // //                   )}
// // //                   <div className="space-y-2">
// // //                     <label className="text-sm font-medium text-gray-700">Select Institute</label>
// // //                     <Select
// // //                       value={selectedInstitute}
// // //                       onValueChange={(value) => {
// // //                         setSelectedInstitute(value)
// // //                         setDuplicateError("")
// // //                       }}
// // //                     >
// // //                       <SelectTrigger className="border-blue-200 focus:border-blue-400">
// // //                         <SelectValue placeholder="Choose an institute" />
// // //                       </SelectTrigger>
// // //                       <SelectContent>
// // //                         {institutes.map((institute) => (
// // //                           <SelectItem key={institute} value={institute}>
// // //                             {institute}
// // //                           </SelectItem>
// // //                         ))}
// // //                       </SelectContent>
// // //                     </Select>
// // //                   </div>
// // //                   <div className="space-y-2">
// // //                     <label className="text-sm font-medium text-gray-700">Select Department</label>
// // //                     <Select
// // //                       value={selectedDepartment}
// // //                       onValueChange={(value) => {
// // //                         setSelectedDepartment(value)
// // //                         setDuplicateError("")
// // //                       }}
// // //                     >
// // //                       <SelectTrigger className="border-blue-200 focus:border-blue-400">
// // //                         <SelectValue placeholder="Choose a department" />
// // //                       </SelectTrigger>
// // //                       <SelectContent>
// // //                         {departments.map((department) => (
// // //                           <SelectItem key={department} value={department}>
// // //                             {department}
// // //                           </SelectItem>
// // //                         ))}
// // //                       </SelectContent>
// // //                     </Select>
// // //                   </div>
// // //                   <Button
// // //                     onClick={handleAddPreference}
// // //                     className="w-full bg-blue-600 hover:bg-blue-700 text-white"
// // //                     disabled={!selectedInstitute || !selectedDepartment}
// // //                   >
// // //                     Add Preference
// // //                   </Button>
// // //                 </div>
// // //               </DialogContent>
// // //             </Dialog>
// // //           </div>
// // //         </CardHeader>
// // //         <CardContent>
// // //           <p className="text-blue-600">Set your college and department preferences in order of priority.</p>
// // //         </CardContent>
// // //       </Card>

// // //       <Dialog open={deleteConfirmOpen} onOpenChange={setDeleteConfirmOpen}>
// // //         <DialogContent className="sm:max-w-md">
// // //           <DialogHeader>
// // //             <DialogTitle className="text-red-800 flex items-center gap-2">
// // //               <AlertTriangle className="h-5 w-5" />
// // //               Confirm Deletion
// // //             </DialogTitle>
// // //           </DialogHeader>
// // //           <div className="py-4">
// // //             <p className="text-gray-700">
// // //               Are you sure you want to delete this preference? This action cannot be undone.
// // //             </p>
// // //           </div>
// // //           <div className="flex justify-end gap-3">
// // //             <Button variant="outline" onClick={() => setDeleteConfirmOpen(false)} className="border-gray-300">
// // //               Cancel
// // //             </Button>
// // //             <Button onClick={confirmDelete} className="bg-red-600 hover:bg-red-700 text-white">
// // //               Delete
// // //             </Button>
// // //           </div>
// // //         </DialogContent>
// // //       </Dialog>

// // //       <Card>
// // //         <CardHeader>
// // //           <CardTitle className="text-gray-800 flex items-center gap-2">
// // //             <School className="h-5 w-5" />
// // //             Your Preferences ({preferences.length})
// // //           </CardTitle>
// // //         </CardHeader>
// // //         <CardContent>
// // //           {preferences.length === 0 ? (
// // //             <div className="text-center py-8">
// // //               <School className="h-12 w-12 text-gray-300 mx-auto mb-4" />
// // //               <p className="text-gray-500 text-lg">No preferences added yet</p>
// // //               <p className="text-gray-400 text-sm mt-2">Click "Add Preference" to get started</p>
// // //             </div>
// // //           ) : (
// // //             <div className="space-y-3">
// // //               {preferences.map((preference, index) => (
// // //                 <div
// // //                   key={preference.id}
// // //                   className={`flex items-center justify-between p-4 bg-white border rounded-lg hover:border-blue-200 transition-all duration-300 ${
// // //                     highlightedPreference === preference.id
// // //                       ? "border-blue-400 border-2 shadow-md bg-blue-50"
// // //                       : "border-blue-100"
// // //                   }`}
// // //                 >
// // //                   <div className="flex items-center gap-4">
// // //                     <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-800 rounded-full font-semibold text-sm">
// // //                       {index + 1}
// // //                     </div>
// // //                     <div>
// // //                       <p className="font-semibold text-gray-800">{preference.institute}</p>
// // //                       <p className="text-sm text-gray-600">{preference.department}</p>
// // //                     </div>
// // //                   </div>
// // //                   <div className="flex items-center gap-2">
// // //                     <Button
// // //                       variant="outline"
// // //                       size="sm"
// // //                       onClick={() => handleMoveUp(index)}
// // //                       disabled={index === 0}
// // //                       className="border-blue-200 hover:bg-blue-50 hover:border-blue-300"
// // //                     >
// // //                       <ChevronUp className="h-4 w-4" />
// // //                     </Button>
// // //                     <Button
// // //                       variant="outline"
// // //                       size="sm"
// // //                       onClick={() => handleMoveDown(index)}
// // //                       disabled={index === preferences.length - 1}
// // //                       className="border-blue-200 hover:bg-blue-50 hover:border-blue-300"
// // //                     >
// // //                       <ChevronDown className="h-4 w-4" />
// // //                     </Button>
// // //                     <Button
// // //                       variant="outline"
// // //                       size="sm"
// // //                       onClick={() => handleDeletePreference(preference.id)}
// // //                       className="border-red-200 hover:bg-red-50 hover:border-red-300 text-red-600"
// // //                     >
// // //                       <Trash2 className="h-4 w-4" />
// // //                     </Button>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           )}
// // //         </CardContent>
// // //       </Card>
// // //     </div>
// // //   )
// // // }


// // "use client"

// // import { useState,useEffect } from "react"
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// // import { Button } from "@/components/ui/button"
// // import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// // import { Plus, Trash2, ChevronUp, ChevronDown, Settings, School, AlertTriangle } from "lucide-react"

// // export default function PreferencePage() {
// //   const [preferences, setPreferences] = useState([])
// //   const [isModalOpen, setIsModalOpen] = useState(false)
// //   const [selectedInstitute, setSelectedInstitute] = useState("")
// //   const [selectedDepartment, setSelectedDepartment] = useState("")
// //   const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false)
// //   const [preferenceToDelete, setPreferenceToDelete] = useState(null)
// //   const [highlightedPreference, setHighlightedPreference] = useState(null)
// //   const [duplicateError, setDuplicateError] = useState("")
// //   const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)
// //   const [isSaving, setIsSaving] = useState(false)
// //   const [institutes, setInstitutes] = useState([])
// //   const [departments, setDepartments] = useState([])

// //   const handleAddPreference = () => {
// //     if (selectedInstitute && selectedDepartment) {
// //       const isDuplicate = preferences.some(
// //         (pref) => pref.programID.collegeID.college_id === selectedInstitute && pref.department === selectedDepartment,
// //       )

// //       if (isDuplicate) {
// //         setDuplicateError("This preference already exists!")
// //         return
// //       }

// //       const newPreference = {
// //         id: Date.now().toString(),
// //         institute: selectedInstitute,
// //         department: selectedDepartment,
// //       }
// //       setPreferences([...preferences, newPreference])
// //       setHasUnsavedChanges(true)
// //       setSelectedInstitute("")
// //       setSelectedDepartment("")
// //       setDuplicateError("")
// //       setIsModalOpen(false)
// //     }
// //   }

// //   const handleDeletePreference = (id) => {
// //     setPreferenceToDelete(id)
// //     setDeleteConfirmOpen(true)
// //     setHasUnsavedChanges(true)
// //   }

// //   const confirmDelete = () => {
// //     if (preferenceToDelete) {
// //       setPreferences(preferences.filter((pref) => pref.id !== preferenceToDelete))
// //       setHasUnsavedChanges(true) // mark unsaved after confirming delete
// //       setPreferenceToDelete(null)
// //       setDeleteConfirmOpen(false)
// //     }
// //   }

// //   const handleMoveUp = (index) => {
// //     if (index > 0) {
// //       const newPreferences = [...preferences]
// //       ;[newPreferences[index], newPreferences[index - 1]] = [newPreferences[index - 1], newPreferences[index]]
// //       setPreferences(newPreferences)
// //       setHasUnsavedChanges(true)
// //       setHighlightedPreference(newPreferences[index - 1].id)
// //       setTimeout(() => setHighlightedPreference(null), 1000)
// //     }
// //   }

// //   const handleMoveDown = (index) => {
// //     if (index < preferences.length - 1) {
// //       const newPreferences = [...preferences]
// //       ;[newPreferences[index], newPreferences[index + 1]] = [newPreferences[index + 1], newPreferences[index]]
// //       setPreferences(newPreferences)
// //       setHasUnsavedChanges(true) // mark unsaved after moving down
// //       setHighlightedPreference(newPreferences[index + 1].id)
// //       setTimeout(() => setHighlightedPreference(null), 1000)
// //     }
// //   }

// //   const handleSave = async () => {
// //     setIsSaving(true)
// //     try {
// //       // simulate save
// //       await new Promise((res) => setTimeout(res, 800))
// //       setHasUnsavedChanges(false)
// //     } finally {
// //       setIsSaving(false)
// //     }
// //   }

// //   useEffect(() => {
// //     const fetchInstitutes = async () => {
// //       try {
// //         const res = await fetch("http://localhost:9000/college/all")
// //         const data = await res.json()
// //         if (data.success && data.namesList) {
// //           setInstitutes(data.namesList)
// //         }
// //       } catch (error) {
// //         console.error("Error fetching institutes:", error)
// //       }
// //     }

// //     const fetchDepartments = async () => {
// //       try {
// //         const res = await fetch("http://localhost:9000/department/all")
// //         const data = await res.json()
// //         if (data.success && data.namesList) {
// //           setDepartments(data.namesList)
// //         }
// //       } catch (error) {
// //         console.error("Error fetching departments:", error)
// //       }
// //     }

// //     const fetchPreferences = async () => {
// //       try {
// //         const res = await fetch(`http://localhost:9000/preference/self/2500001`)
// //         const data = await res.json()
// //         if (data.success && data.preference) {
// //           setPreferences(data.preference)
// //         }
// //       } catch (error) {
// //         console.error("Error fetching departments:", error)
// //       }
// //     }

// //     fetchInstitutes()
// //     fetchDepartments()
// //     fetchPreferences()
// //   }, [])
  

// //   return (
// //     <div className="space-y-6">
// //       <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-white">
// //         <CardHeader className="pb-3">
// //           <div className="flex justify-between items-center">
// //             <CardTitle className="text-blue-800 flex items-center gap-2">
// //               <Settings className="h-5 w-5" />
// //               College Preferences
// //             </CardTitle>
// //             <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
// //               <DialogTrigger asChild>
// //                 <Button className="bg-blue-600 hover:bg-blue-700 text-white">
// //                   <Plus className="h-4 w-4 mr-2" />
// //                   Add Preference
// //                 </Button>
// //               </DialogTrigger>
// //               <DialogContent className="sm:max-w-md">
// //                 <DialogHeader>
// //                   <DialogTitle className="text-blue-800">Add New Preference</DialogTitle>
// //                 </DialogHeader>
// //                 <div className="space-y-4 py-4">
// //                   {duplicateError && (
// //                     <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-md">
// //                       <AlertTriangle className="h-4 w-4 text-red-600" />
// //                       <p className="text-sm text-red-600">{duplicateError}</p>
// //                     </div>
// //                   )}
// //                   <div className="space-y-2">
// //                     <label className="text-sm font-medium text-gray-700">Select Institute</label>
// //                     <Select
// //                       value={selectedInstitute}
// //                       onValueChange={(value) => {
// //                         setSelectedInstitute(value)
// //                         setDuplicateError("")
// //                       }}
// //                     >
// //                       <SelectTrigger className="border-blue-200 focus:border-blue-400">
// //                         <SelectValue placeholder="Choose an institute" />
// //                       </SelectTrigger>
// //                       <SelectContent>
// //                         {institutes.map((institute) => (
// //                           <SelectItem key={institute.id} value={institute.id}>
// //                             {institute.name}
// //                           </SelectItem>
// //                         ))}
// //                       </SelectContent>
// //                     </Select>
// //                   </div>
// //                   <div className="space-y-2">
// //                     <label className="text-sm font-medium text-gray-700">Select Department</label>
// //                     <Select
// //                       value={selectedDepartment}
// //                       onValueChange={(value) => {
// //                         setSelectedDepartment(value)
// //                         setDuplicateError("")
// //                       }}
// //                     >
// //                       <SelectTrigger className="border-blue-200 focus:border-blue-400">
// //                         <SelectValue placeholder="Choose a department" />
// //                       </SelectTrigger>
// //                       <SelectContent>
// //                         {console.log("sieuiudr",departments)}
// //                         {departments.map((department) => (
// //                           <SelectItem key={department.id} value={department.id}>
// //                             {department.name}
// //                           </SelectItem>
// //                         ))}
// //                       </SelectContent>
// //                     </Select>
// //                   </div>
// //                   <Button
// //                     onClick={handleAddPreference}
// //                     className="w-full bg-blue-600 hover:bg-blue-700 text-white"
// //                     disabled={!selectedInstitute || !selectedDepartment}
// //                   >
// //                     Add Preference
// //                   </Button>
// //                 </div>
// //               </DialogContent>
// //             </Dialog>
// //           </div>
// //         </CardHeader>
// //         <CardContent>
// //           <p className="text-blue-600">Set your college and department preferences in order of priority.</p>
// //         </CardContent>
// //       </Card>

// //       <Dialog open={deleteConfirmOpen} onOpenChange={setDeleteConfirmOpen}>
// //         <DialogContent className="sm:max-w-md">
// //           <DialogHeader>
// //             <DialogTitle className="text-red-800 flex items-center gap-2">
// //               <AlertTriangle className="h-5 w-5" />
// //               Confirm Deletion
// //             </DialogTitle>
// //           </DialogHeader>
// //           <div className="py-4">
// //             <p className="text-gray-700">
// //               Are you sure you want to delete this preference? This action cannot be undone.
// //             </p>
// //           </div>
// //           <div className="flex justify-end gap-3">
// //             <Button variant="outline" onClick={() => setDeleteConfirmOpen(false)} className="border-gray-300">
// //               Cancel
// //             </Button>
// //             <Button onClick={confirmDelete} className="bg-red-600 hover:bg-red-700 text-white">
// //               Delete
// //             </Button>
// //           </div>
// //         </DialogContent>
// //       </Dialog>

// //       <Card>
// //         <CardHeader className="flex items-center justify-between">
// //           <CardTitle className="text-gray-800 flex items-center gap-2">
// //             <School className="h-5 w-5" />
// //             Your Preferences ({preferences.length})
// //           </CardTitle>
// //           <Button
// //             onClick={handleSave}
// //             className="bg-blue-600 hover:bg-blue-700 text-white"
// //             disabled={!hasUnsavedChanges || isSaving}
// //           >
// //             {isSaving ? "Saving..." : "Save Changes"}
// //           </Button>
// //         </CardHeader>
// //         <CardContent>
// //           {console.log("hello",preferences)}
// //           {preferences.length === 0 ? (
// //             <div className="text-center py-8">
// //               <School className="h-12 w-12 text-gray-300 mx-auto mb-4" />
// //               <p className="text-gray-500 text-lg">No preferences added yet</p>
// //               <p className="text-gray-400 text-sm mt-2">Click "Add Preference" to get started</p>
// //             </div>
// //           ) : (
// //             <div className="space-y-3">
// //               {preferences.map((preference, index) => (
// //                 <div
// //                   key={preference.preference_number}
// //                   className={`flex items-center justify-between p-4 bg-white border rounded-lg hover:border-blue-200 transition-all duration-300 ${
// //                     highlightedPreference === preference.preference_number
// //                       ? "border-blue-400 border-2 shadow-md bg-blue-50"
// //                       : "border-blue-100"
// //                   }`}
// //                 >
// //                   <div className="flex items-center gap-4">
// //                     <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-800 rounded-full font-semibold text-sm">
// //                       {index + 1}
// //                     </div>
// //                     <div>
// //                       <p className="font-semibold text-gray-800">{preference.programID.collegeID.college_name}</p>
// //                       <p className="text-sm text-gray-600">{preference.programID.deptID.department_name}</p>
// //                     </div>
// //                   </div>
// //                   <div className="flex items-center gap-2">
// //                     <Button
// //                       variant="outline"
// //                       size="sm"
// //                       onClick={() => handleMoveUp(index)}
// //                       disabled={index === 0}
// //                       className="border-blue-200 hover:bg-blue-50 hover:border-blue-300"
// //                     >
// //                       <ChevronUp className="h-4 w-4" />
// //                     </Button>
// //                     <Button
// //                       variant="outline"
// //                       size="sm"
// //                       onClick={() => handleMoveDown(index)}
// //                       disabled={index === preferences.length - 1}
// //                       className="border-blue-200 hover:bg-blue-50 hover:border-blue-300"
// //                     >
// //                       <ChevronDown className="h-4 w-4" />
// //                     </Button>
// //                     <Button
// //                       variant="outline"
// //                       size="sm"
// //                       onClick={() => handleDeletePreference(preference.preference_number)}
// //                       className="border-red-200 hover:bg-red-50 hover:border-red-300 text-red-600"
// //                     >
// //                       <Trash2 className="h-4 w-4" />
// //                     </Button>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           )}
// //         </CardContent>
// //       </Card>

// //       {/* {hasUnsavedChanges && (
// //         <div className="flex justify-end">
// //           <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700 text-white">
// //             {isSaving ? "Saving..." : "Save Changes"}
// //           </Button>
// //         </div>
// //       )} */}
// //     </div>
// //   )
// // }



// "use client"

// import { useState, useEffect } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Plus, Trash2, ChevronUp, ChevronDown, Settings, School, AlertTriangle } from "lucide-react"

// export default function PreferencePage() {
//   const [preferences, setPreferences] = useState([])
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [selectedInstitute, setSelectedInstitute] = useState("")
//   const [selectedDepartment, setSelectedDepartment] = useState("")
//   const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false)
//   const [preferenceToDelete, setPreferenceToDelete] = useState(null)
//   const [highlightedPreference, setHighlightedPreference] = useState(null)
//   const [duplicateError, setDuplicateError] = useState("")
//   const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)
//   const [isSaving, setIsSaving] = useState(false)
//   const [institutes, setInstitutes] = useState([])
//   const [departments, setDepartments] = useState([])

//   const handleAddPreference = () => {
//     if (selectedInstitute && selectedDepartment) {
//       const collegeId = Number(selectedInstitute)
//       const deptId = Number(selectedDepartment)

//       const isDuplicate = preferences.some(
//         (pref) => Number(pref.college_id) === collegeId && Number(pref.department_id) === deptId,
//       )

//       if (isDuplicate) {
//         setDuplicateError("This preference already exists!")
//         return
//       }

//       const college = institutes.find((i) => String(i.id) === String(collegeId))
//       const dept = departments.find((d) => String(d.id) === String(deptId))

//       const newPreference = {
//         preference_number: preferences.length + 1,
//         college_id: collegeId,
//         college_name: college?.name || "",
//         department_id: deptId,
//         department_name: dept?.name || "",
//         created_at: new Date().toISOString(),
//       }

//       setPreferences([...preferences, newPreference])
//       setHasUnsavedChanges(true)
//       setSelectedInstitute("")
//       setSelectedDepartment("")
//       setDuplicateError("")
//       setIsModalOpen(false)
//     }
//   }

//   const handleDeletePreference = (preference_number) => {
//     setPreferenceToDelete(preference_number)
//     setDeleteConfirmOpen(true)
//     setHasUnsavedChanges(true)
//   }

//   const confirmDelete = () => {
//     if (preferenceToDelete != null) {
//       const filtered = preferences.filter((p) => p.preference_number !== preferenceToDelete)
//       const reindexed = filtered.map((p, i) => ({ ...p, preference_number: i + 1 }))
//       setPreferences(reindexed)
//       setHasUnsavedChanges(true)
//       setPreferenceToDelete(null)
//       setDeleteConfirmOpen(false)
//     }
//   }

//   const handleMoveUp = (index) => {
//     if (index > 0) {
//       const swapped = [...preferences]
//       ;[swapped[index - 1], swapped[index]] = [swapped[index], swapped[index - 1]]
//       const reindexed = swapped.map((p, i) => ({ ...p, preference_number: i + 1 }))
//       setPreferences(reindexed)
//       setHasUnsavedChanges(true)
//       setHighlightedPreference(index) // item moved to index-1 => preference_number = index
//       setTimeout(() => setHighlightedPreference(null), 1000)
//     }
//   }

//   const handleMoveDown = (index) => {
//     if (index < preferences.length - 1) {
//       const swapped = [...preferences]
//       ;[swapped[index], swapped[index + 1]] = [swapped[index + 1], swapped[index]]
//       const reindexed = swapped.map((p, i) => ({ ...p, preference_number: i + 1 }))
//       setPreferences(reindexed)
//       setHasUnsavedChanges(true)
//       setHighlightedPreference(index + 2) // item moved to index+1 => preference_number = index+2
//       setTimeout(() => setHighlightedPreference(null), 1000)
//     }
//   }

//   const handleSave = async () => {
//     setIsSaving(true)
//     try {
//       // simulate save
//       await new Promise((res) => setTimeout(res, 800))
//       setHasUnsavedChanges(false)
//     } finally {
//       setIsSaving(false)
//     }
//   }

//   useEffect(() => {
//     const fetchInstitutes = async () => {
//       try {
//         const res = await fetch("http://localhost:9000/college/all")
//         const data = await res.json()
//         if (data.success && data.namesList) {
//           setInstitutes(data.namesList)
//         }
//       } catch (error) {
//         console.error("Error fetching institutes:", error)
//       }
//     }

//     const fetchDepartments = async () => {
//       try {
//         const res = await fetch("http://localhost:9000/department/all")
//         const data = await res.json()
//         if (data.success && data.namesList) {
//           setDepartments(data.namesList)
//         }
//       } catch (error) {
//         console.error("Error fetching departments:", error)
//       }
//     }

//     const fetchPreferences = async () => {
//       try {
//         const res = await fetch(`http://localhost:9000/preference/self/2500001`)
//         const data = await res.json()
//         if (data.success && data.preference) {
//           const normalized = data.preference.map((p, idx) => {
//             const college_id = p?.programID?.collegeID?.college_id ?? p?.college_id ?? null
//             const college_name = p?.programID?.collegeID?.college_name ?? p?.college_name ?? ""
//             const department_id = p?.programID?.deptID?.department_id ?? p?.department_id ?? null
//             const department_name = p?.programID?.deptID?.department_name ?? p?.department_name ?? ""
//             const created_at = p?.created_at ?? new Date().toISOString()

//             return {
//               preference_number: p?.preference_number ?? idx + 1,
//               college_id,
//               college_name,
//               department_id,
//               department_name,
//               created_at,
//             }
//           })
//           // ensure strictly sequential numbering starting at 1
//           const reindexed = normalized.map((p, i) => ({ ...p, preference_number: i + 1 }))
//           setPreferences(reindexed)
//         }
//       } catch (error) {
//         console.error("Error fetching departments:", error)
//       }
//     }

//     fetchInstitutes()
//     fetchDepartments()
//     fetchPreferences()
//   }, [])

//   return (
//     <div className="space-y-6">
//       <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-white">
//         <CardHeader className="pb-3">
//           <div className="flex justify-between items-center">
//             <CardTitle className="text-blue-800 flex items-center gap-2">
//               <Settings className="h-5 w-5" />
//               College Preferences
//             </CardTitle>
//             <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
//               <DialogTrigger asChild>
//                 <Button className="bg-blue-600 hover:bg-blue-700 text-white">
//                   <Plus className="h-4 w-4 mr-2" />
//                   Add Preference
//                 </Button>
//               </DialogTrigger>
//               <DialogContent className="sm:max-w-md">
//                 <DialogHeader>
//                   <DialogTitle className="text-blue-800">Add New Preference</DialogTitle>
//                 </DialogHeader>
//                 <div className="space-y-4 py-4">
//                   {duplicateError && (
//                     <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-md">
//                       <AlertTriangle className="h-4 w-4 text-red-600" />
//                       <p className="text-sm text-red-600">{duplicateError}</p>
//                     </div>
//                   )}
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-gray-700">Select Institute</label>
//                     <Select
//                       value={selectedInstitute}
//                       onValueChange={(value) => {
//                         setSelectedInstitute(value)
//                         setDuplicateError("")
//                       }}
//                     >
//                       <SelectTrigger className="border-blue-200 focus:border-blue-400">
//                         <SelectValue placeholder="Choose an institute" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         {institutes.map((institute) => (
//                           <SelectItem key={String(institute.id)} value={String(institute.id)}>
//                             {institute.name}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-gray-700">Select Department</label>
//                     <Select
//                       value={selectedDepartment}
//                       onValueChange={(value) => {
//                         setSelectedDepartment(value)
//                         setDuplicateError("")
//                       }}
//                     >
//                       <SelectTrigger className="border-blue-200 focus:border-blue-400">
//                         <SelectValue placeholder="Choose a department" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         {console.log("sieuiudr", departments)}
//                         {departments.map((department) => (
//                           <SelectItem key={String(department.id)} value={String(department.id)}>
//                             {department.name}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   </div>
//                   <Button
//                     onClick={handleAddPreference}
//                     className="w-full bg-blue-600 hover:bg-blue-700 text-white"
//                     disabled={!selectedInstitute || !selectedDepartment}
//                   >
//                     Add Preference
//                   </Button>
//                 </div>
//               </DialogContent>
//             </Dialog>
//           </div>
//         </CardHeader>
//         <CardContent>
//           <p className="text-blue-600">Set your college and department preferences in order of priority.</p>
//         </CardContent>
//       </Card>

//       <Dialog open={deleteConfirmOpen} onOpenChange={setDeleteConfirmOpen}>
//         <DialogContent className="sm:max-w-md">
//           <DialogHeader>
//             <DialogTitle className="text-red-800 flex items-center gap-2">
//               <AlertTriangle className="h-5 w-5" />
//               Confirm Deletion
//             </DialogTitle>
//           </DialogHeader>
//           <div className="py-4">
//             <p className="text-gray-700">
//               Are you sure you want to delete this preference? This action cannot be undone.
//             </p>
//           </div>
//           <div className="flex justify-end gap-3">
//             <Button variant="outline" onClick={() => setDeleteConfirmOpen(false)} className="border-gray-300">
//               Cancel
//             </Button>
//             <Button onClick={confirmDelete} className="bg-red-600 hover:bg-red-700 text-white">
//               Delete
//             </Button>
//           </div>
//         </DialogContent>
//       </Dialog>

//       <Card>
//         <CardHeader className="flex items-center justify-between">
//           <CardTitle className="text-gray-800 flex items-center gap-2">
//             <School className="h-5 w-5" />
//             Your Preferences ({preferences.length})
//           </CardTitle>
//           <Button
//             onClick={handleSave}
//             className="bg-blue-600 hover:bg-blue-700 text-white"
//             disabled={!hasUnsavedChanges || isSaving}
//           >
//             {isSaving ? "Saving..." : "Save Changes"}
//           </Button>
//         </CardHeader>
//         <CardContent>
//           {console.log("hello", preferences)}
//           {preferences.length === 0 ? (
//             <div className="text-center py-8">
//               <School className="h-12 w-12 text-gray-300 mx-auto mb-4" />
//               <p className="text-gray-500 text-lg">No preferences added yet</p>
//               <p className="text-gray-400 text-sm mt-2">Click "Add Preference" to get started</p>
//             </div>
//           ) : (
//             <div className="space-y-3">
//               {preferences.map((preference, index) => (
//                 <div
//                   key={preference.preference_number}
//                   className={`flex items-center justify-between p-4 bg-white border rounded-lg hover:border-blue-200 transition-all duration-300 ${
//                     highlightedPreference === preference.preference_number
//                       ? "border-blue-400 border-2 shadow-md bg-blue-50"
//                       : "border-blue-100"
//                   }`}
//                 >
//                   <div className="flex items-center gap-4">
//                     <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-800 rounded-full font-semibold text-sm">
//                       {index + 1}
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-800">{preference.college_name}</p>
//                       <p className="text-sm text-gray-600">{preference.department_name}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       onClick={() => handleMoveUp(index)}
//                       disabled={index === 0}
//                       className="border-blue-200 hover:bg-blue-50 hover:border-blue-300"
//                     >
//                       <ChevronUp className="h-4 w-4" />
//                     </Button>
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       onClick={() => handleMoveDown(index)}
//                       disabled={index === preferences.length - 1}
//                       className="border-blue-200 hover:bg-blue-50 hover:border-blue-300"
//                     >
//                       <ChevronDown className="h-4 w-4" />
//                     </Button>
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       onClick={() => handleDeletePreference(preference.preference_number)}
//                       className="border-red-200 hover:bg-red-50 hover:border-red-300 text-red-600"
//                     >
//                       <Trash2 className="h-4 w-4" />
//                     </Button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </CardContent>
//       </Card>

//       {/* {hasUnsavedChanges && (
//         <div className="flex justify-end">
//           <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700 text-white">
//             {isSaving ? "Saving..." : "Save Changes"}
//           </Button>
//         </div>
//       )} */}
//     </div>
//   )
// }




"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Trash2, ChevronUp, ChevronDown, Settings, School, AlertTriangle } from "lucide-react"

export default function PreferencePage() {
  const [preferences, setPreferences] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedInstitute, setSelectedInstitute] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("")
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false)
  const [preferenceToDelete, setPreferenceToDelete] = useState(null)
  const [highlightedPreference, setHighlightedPreference] = useState(null)
  const [duplicateError, setDuplicateError] = useState("")
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [institutes, setInstitutes] = useState([])
  const [departments, setDepartments] = useState([])

  const handleAddPreference = () => {
    if (selectedInstitute && selectedDepartment) {
      const collegeId = Number(selectedInstitute)
      const deptId = Number(selectedDepartment)

      const isDuplicate = preferences.some(
        (pref) => Number(pref.college_id) === collegeId && Number(pref.department_id) === deptId,
      )

      if (isDuplicate) {
        setDuplicateError("This preference already exists!")
        return
      }

      const college = institutes.find((i) => String(i.id) === String(collegeId))
      const dept = departments.find((d) => String(d.id) === String(deptId))

      const newPreference = {
        preference_number: preferences.length + 1,
        college_id: collegeId,
        college_name: college?.name || "",
        department_id: deptId,
        department_name: dept?.name || "",
        created_at: new Date().toISOString(),
      }

      setPreferences([...preferences, newPreference])
      setHasUnsavedChanges(true)
      setSelectedInstitute("")
      setSelectedDepartment("")
      setDuplicateError("")
      setIsModalOpen(false)
    }
  }

  const handleDeletePreference = (preference_number) => {
    setPreferenceToDelete(preference_number)
    setDeleteConfirmOpen(true)
    setHasUnsavedChanges(true)
  }

  const confirmDelete = () => {
    if (preferenceToDelete != null) {
      const filtered = preferences.filter((p) => p.preference_number !== preferenceToDelete)
      const reindexed = filtered.map((p, i) => ({ ...p, preference_number: i + 1 }))
      setPreferences(reindexed)
      setHasUnsavedChanges(true)
      setPreferenceToDelete(null)
      setDeleteConfirmOpen(false)
    }
  }

  const handleMoveUp = (index) => {
    if (index > 0) {
      const swapped = [...preferences]
      ;[swapped[index - 1], swapped[index]] = [swapped[index], swapped[index - 1]]
      const reindexed = swapped.map((p, i) => ({ ...p, preference_number: i + 1 }))
      setPreferences(reindexed)
      setHasUnsavedChanges(true)
      setHighlightedPreference(index) // item moved to index-1 => preference_number = index
      setTimeout(() => setHighlightedPreference(null), 1000)
    }
  }

  const handleMoveDown = (index) => {
    if (index < preferences.length - 1) {
      const swapped = [...preferences]
      ;[swapped[index], swapped[index + 1]] = [swapped[index + 1], swapped[index]]
      const reindexed = swapped.map((p, i) => ({ ...p, preference_number: i + 1 }))
      setPreferences(reindexed)
      setHasUnsavedChanges(true)
      setHighlightedPreference(index + 2) // item moved to index+1 => preference_number = index+2
      setTimeout(() => setHighlightedPreference(null), 1000)
    }
  }

  const handleSave = async () => {
    setIsSaving(true)
    try {
      const payload = {
        studentId: 2500001,
        preferences: preferences.map((p) => ({
          college_id: Number(p.college_id),
          department_id: Number(p.department_id),
        })),
      }

      const res = await fetch("http://localhost:9000/preference/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await res.json().catch(() => null)

      if (res.ok && data?.success) {
        setHasUnsavedChanges(false)
      } else {
        console.error("[v0] Save failed", { status: res.status, data })
      }
    } catch (error) {
      console.error("[v0] Error saving preferences:", error)
    } finally {
      setIsSaving(false)
    }
  }

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

    const fetchPreferences = async () => {
      try {
        const res = await fetch(`http://localhost:9000/preference/self/2500001`)
        const data = await res.json()
        if (data.success && data.preference) {
          const normalized = data.preference.map((p, idx) => {
            const college_id = p?.programID?.collegeID?.college_id ?? p?.college_id ?? null
            const college_name = p?.programID?.collegeID?.college_name ?? p?.college_name ?? ""
            const department_id = p?.programID?.deptID?.department_id ?? p?.department_id ?? null
            const department_name = p?.programID?.deptID?.department_name ?? p?.department_name ?? ""
            const created_at = p?.created_at ?? new Date().toISOString()

            return {
              preference_number: p?.preference_number ?? idx + 1,
              college_id,
              college_name,
              department_id,
              department_name,
              created_at,
            }
          })
          // ensure strictly sequential numbering starting at 1
          const reindexed = normalized.map((p, i) => ({ ...p, preference_number: i + 1 }))
          setPreferences(reindexed)
        }
      } catch (error) {
        console.error("Error fetching departments:", error)
      }
    }

    fetchInstitutes()
    fetchDepartments()
    fetchPreferences()
  }, [])

  return (
    <div className="space-y-6">
      <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-white">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <CardTitle className="text-blue-800 flex items-center gap-2">
              <Settings className="h-5 w-5" />
              College Preferences
            </CardTitle>
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Preference
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-blue-800">Add New Preference</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  {duplicateError && (
                    <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-md">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                      <p className="text-sm text-red-600">{duplicateError}</p>
                    </div>
                  )}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Select Institute</label>
                    <Select
                      value={selectedInstitute}
                      onValueChange={(value) => {
                        setSelectedInstitute(value)
                        setDuplicateError("")
                      }}
                    >
                      <SelectTrigger className="border-blue-200 focus:border-blue-400">
                        <SelectValue placeholder="Choose an institute" />
                      </SelectTrigger>
                      <SelectContent>
                        {institutes.map((institute) => (
                          <SelectItem key={String(institute.id)} value={String(institute.id)}>
                            {institute.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Select Department</label>
                    <Select
                      value={selectedDepartment}
                      onValueChange={(value) => {
                        setSelectedDepartment(value)
                        setDuplicateError("")
                      }}
                    >
                      <SelectTrigger className="border-blue-200 focus:border-blue-400">
                        <SelectValue placeholder="Choose a department" />
                      </SelectTrigger>
                      <SelectContent>
                        {console.log("sieuiudr", departments)}
                        {departments.map((department) => (
                          <SelectItem key={String(department.id)} value={String(department.id)}>
                            {department.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    onClick={handleAddPreference}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    disabled={!selectedInstitute || !selectedDepartment}
                  >
                    Add Preference
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-blue-600">Set your college and department preferences in order of priority.</p>
        </CardContent>
      </Card>

      <Dialog open={deleteConfirmOpen} onOpenChange={setDeleteConfirmOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-red-800 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Confirm Deletion
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-gray-700">
              Are you sure you want to delete this preference? This action cannot be undone.
            </p>
          </div>
          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setDeleteConfirmOpen(false)} className="border-gray-300">
              Cancel
            </Button>
            <Button onClick={confirmDelete} className="bg-red-600 hover:bg-red-700 text-white">
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="text-gray-800 flex items-center gap-2">
            <School className="h-5 w-5" />
            Your Preferences ({preferences.length})
          </CardTitle>
          <Button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white"
            disabled={!hasUnsavedChanges || isSaving}
          >
            {isSaving ? "Saving..." : "Save Changes"}
          </Button>
        </CardHeader>
        <CardContent>
          {console.log("hello", preferences)}
          {preferences.length === 0 ? (
            <div className="text-center py-8">
              <School className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No preferences added yet</p>
              <p className="text-gray-400 text-sm mt-2">Click "Add Preference" to get started</p>
            </div>
          ) : (
            <div className="space-y-3">
              {preferences.map((preference, index) => (
                <div
                  key={preference.preference_number}
                  className={`flex items-center justify-between p-4 bg-white border rounded-lg hover:border-blue-200 transition-all duration-300 ${
                    highlightedPreference === preference.preference_number
                      ? "border-blue-400 border-2 shadow-md bg-blue-50"
                      : "border-blue-100"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-800 rounded-full font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{preference.college_name}</p>
                      <p className="text-sm text-gray-600">{preference.department_name}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleMoveUp(index)}
                      disabled={index === 0}
                      className="border-blue-200 hover:bg-blue-50 hover:border-blue-300"
                    >
                      <ChevronUp className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleMoveDown(index)}
                      disabled={index === preferences.length - 1}
                      className="border-blue-200 hover:bg-blue-50 hover:border-blue-300"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeletePreference(preference.preference_number)}
                      className="border-red-200 hover:bg-red-50 hover:border-red-300 text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* {hasUnsavedChanges && (
        <div className="flex justify-end">
          <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700 text-white">
            {isSaving ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      )} */}
    </div>
  )
}
