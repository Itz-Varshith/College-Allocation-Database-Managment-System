// // "use client"

// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// // import { Button } from "@/components/ui/button"
// // import Link from "next/link"
// // import { Grid3X3, History, Settings, TrendingUp, School, BookOpen } from "lucide-react"
// // import { useEffect } from "react"

// // const quickActions = [
// //   {
// //     id: "seatmatrix",
// //     label: "View Seat Matrix",
// //     icon: Grid3X3,
// //     description: "Check available seats by college and department",
// //     href: "/student/seatmatrix",
// //   },
// //   {
// //     id: "previous-allocation",
// //     label: "Previous Allocations",
// //     icon: History,
// //     description: "View your allocation history",
// //     href: "/student/previous-allocation",
// //   },
// //   {
// //     id: "preference",
// //     label: "Set Preferences",
// //     icon: Settings,
// //     description: "Update your college preferences",
// //     href: "/student/preference",
// //   },
// //   {
// //     id: "prediction",
// //     label: "Rank Prediction",
// //     icon: TrendingUp,
// //     description: "Predict your chances",
// //     href: "/student/prediction",
// //   },
// // ]






// // export default function HomePage() {
// //   const recentAllocation = {
// //     roundNumber: "-",
// //     allocatedCollege: "-",
// //     department: "-",
// //     status: "Process not started",
// //   }

// //   useEffect(() => {
// //     const fetchProfile = async () => {
// //       try {
// //         const res = await fetch("http://localhost:9000/student/getAllocationDetails", {
// //           method: "POST",
// //           credentials: "include",
// //         })
// //         const data = await res.json()
// //         if (res.ok) console.log(data)
// //         else console.error(data.message)
// //       } catch (error) {
// //         console.error("Error fetching profile:", error)
// //       } finally {
// //         // setLoading(false)
// //       }
// //     }
// //     fetchProfile()
// //   }, [])




// //   return (
// //     <div className="space-y-6">
// //       <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-white">
// //         <CardHeader className="pb-3">
// //           <CardTitle className="text-blue-800 flex items-center gap-2">
// //             <School className="h-5 w-5" />
// //             {/* Recent Seat Allocation - Round {recentAllocation.roundNumber} */}
// //             Recent Seat Allocation
// //           </CardTitle>
// //         </CardHeader>
// //         <CardContent className="space-y-3">
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //             <div className="bg-white p-4 rounded-lg border border-blue-100">
// //               <p className="text-sm text-blue-600 font-medium">Round Number</p>
// //               <p className="text-2xl font-bold text-blue-800">{recentAllocation.roundNumber}</p>
// //             </div>
// //             <div className="bg-white p-4 rounded-lg border border-blue-100">
// //               <p className="text-sm text-blue-600 font-medium">Allocated College</p>
// //               <p className="text-lg font-semibold text-gray-800">{recentAllocation.allocatedCollege}</p>
// //             </div>
// //             <div className="bg-white p-4 rounded-lg border border-blue-100">
// //               <p className="text-sm text-blue-600 font-medium">Department</p>
// //               <p className="text-lg font-semibold text-gray-800">{recentAllocation.department}</p>
// //             </div>
// //           </div>
// //           <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
// //             <p className="text-green-800 font-medium">Status: {recentAllocation.status}</p>
// //           </div>
// //         </CardContent>
// //       </Card>

// //       <Card>
// //         <CardHeader>
// //           <CardTitle className="text-gray-800 flex items-center gap-2">
// //             <BookOpen className="h-5 w-5" />
// //             Quick Actions
// //           </CardTitle>
// //         </CardHeader>
// //         <CardContent>
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //             {quickActions.map((action) => {
// //               const IconComponent = action.icon
// //               return (
// //                 <Link key={action.id} href={action.href}>
// //                   <Button
// //                     variant="outline"
// //                     className="h-auto p-4 justify-start border-blue-200 hover:bg-blue-50 hover:border-blue-300 bg-transparent w-full"
// //                   >
// //                     <div className="flex items-start gap-3 text-left text-wrap">
// //                       <IconComponent className="h-5 w-5 text-blue-600 mt-0.5" />
// //                       <div>
// //                         <p className="font-medium text-gray-800">{action.label}</p>
// //                         <p className="text-sm text-gray-600 mt-1">{action.description}</p>
// //                       </div>
// //                     </div>
// //                   </Button>
// //                 </Link>
// //               )
// //             })}
// //           </div>
// //         </CardContent>
// //       </Card>
// //     </div>
// //   )
// // }



// "use client"

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { Grid3X3, History, Settings, TrendingUp, School, BookOpen } from "lucide-react"
// import { useEffect, useState } from "react"

// const quickActions = [
//   {
//     id: "seatmatrix",
//     label: "View Seat Matrix",
//     icon: Grid3X3,
//     description: "Check available seats by college and department",
//     href: "/student/seatmatrix",
//   },
//   {
//     id: "previous-allocation",
//     label: "Previous Allocations",
//     icon: History,
//     description: "View your allocation history",
//     href: "/student/previous-allocation",
//   },
//   {
//     id: "preference",
//     label: "Set Preferences",
//     icon: Settings,
//     description: "Update your college preferences",
//     href: "/student/preference",
//   },
//   {
//     id: "prediction",
//     label: "Rank Prediction",
//     icon: TrendingUp,
//     description: "Predict your chances",
//     href: "/student/prediction",
//   },
// ]

// export default function HomePage() {
//   const [recentAllocation, setRecentAllocation] = useState({
//     roundNumber: "-",
//     allocatedCollege: "-",
//     department: "-",
//     preferenceNumber: "-",
//     status: "Process not started",
//     isAllocated: false,
//   })
//   const [confirmDialog, setConfirmDialog] = useState({ open: false, action: null })

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await fetch("http://localhost:9000/student/getAllocationDetails", {
//           method: "POST",
//           credentials: "include",
//         })
//         const data2 = await res.json(),
//         data=data2[0]
//         if (res.ok) {
//           console.log(data)
//           setRecentAllocation({
//             roundNumber: data.round_id || "-",
//             allocatedCollege: data.college_name || "-",
//             department: data.department_name || "-",
//             preferenceNumber: data.preference_number || "-",
//             status: data.college_name ? "Allocated" : "Not Allocated",
//             isAllocated: !!data.college_name,
//           })
//         } else {
//           console.error(data.message)
//         }
//       } catch (error) {
//         console.error("Error fetching profile:", error)
//       }
//     }
//     fetchProfile()
//   }, [])

//   const handleActionClick = (action) => {
//     setConfirmDialog({ open: true, action })
//   }

//   const handleConfirm = () => {
//     if (confirmDialog.action) {
//       console.log(`Action confirmed: ${confirmDialog.action}`)
//       // TODO: Add API call for the action here
//     }
//     setConfirmDialog({ open: false, action: null })
//   }

//   const handleCancel = () => {
//     setConfirmDialog({ open: false, action: null })
//   }

//   return (
//     <div className="space-y-6">
//       <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-white">
//         <CardHeader className="pb-3">
//           <CardTitle className="text-blue-800 flex items-center gap-2">
//             <School className="h-5 w-5" />
//             Recent Seat Allocation
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-3">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//             <div className="bg-white p-4 rounded-lg border border-blue-100">
//               <p className="text-sm text-blue-600 font-medium">Round Number</p>
//               <p className="text-2xl font-bold text-blue-800">{recentAllocation.roundNumber}</p>
//             </div>
//             <div className="bg-white p-4 rounded-lg border border-blue-100">
//               <p className="text-sm text-blue-600 font-medium">Preference Number</p>
//               <p className="text-2xl font-bold text-blue-800">{recentAllocation.preferenceNumber}</p>
//             </div>
//             <div className="bg-white p-4 rounded-lg border border-blue-100">
//               <p className="text-sm text-blue-600 font-medium">Allocated College</p>
//               <p className="text-lg font-semibold text-gray-800">{recentAllocation.allocatedCollege}</p>
//             </div>
//             <div className="bg-white p-4 rounded-lg border border-blue-100">
//               <p className="text-sm text-blue-600 font-medium">Department</p>
//               <p className="text-lg font-semibold text-gray-800">{recentAllocation.department}</p>
//             </div>
//           </div>
//           <div
//             className={`mt-4 p-3 rounded-lg border font-medium ${
//               recentAllocation.isAllocated
//                 ? "bg-green-50 border-green-200 text-green-800"
//                 : "bg-red-50 border-red-200 text-red-800"
//             }`}
//           >
//             Status: {recentAllocation.status}
//           </div>
//           {recentAllocation.isAllocated && (
//             <div className="mt-4 flex gap-3">
//               <Button onClick={() => handleActionClick("freeze")} className="bg-blue-600 hover:bg-blue-700 text-white">
//                 Freeze
//               </Button>
//               <Button
//                 onClick={() => handleActionClick("float")}
//                 className="bg-purple-600 hover:bg-purple-700 text-white"
//               >
//                 Float
//               </Button>
//               <Button onClick={() => handleActionClick("withdraw")} className="bg-red-600 hover:bg-red-700 text-white">
//                 Withdraw
//               </Button>
//             </div>
//           )}
//         </CardContent>
//       </Card>

//       <Card>
//         <CardHeader>
//           <CardTitle className="text-gray-800 flex items-center gap-2">
//             <BookOpen className="h-5 w-5" />
//             Quick Actions
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {quickActions.map((action) => {
//               const IconComponent = action.icon
//               return (
//                 <Link key={action.id} href={action.href}>
//                   <Button
//                     variant="outline"
//                     className="h-auto p-4 justify-start border-blue-200 hover:bg-blue-50 hover:border-blue-300 bg-transparent w-full"
//                   >
//                     <div className="flex items-start gap-3 text-left text-wrap">
//                       <IconComponent className="h-5 w-5 text-blue-600 mt-0.5" />
//                       <div>
//                         <p className="font-medium text-gray-800">{action.label}</p>
//                         <p className="text-sm text-gray-600 mt-1">{action.description}</p>
//                       </div>
//                     </div>
//                   </Button>
//                 </Link>
//               )
//             })}
//           </div>
//         </CardContent>
//       </Card>

//       <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
//         <p className="text-sm text-gray-700 mb-2">Need help understanding the allocation process?</p>
//         <a
//           href="/docs/allocation-key-terms.pdf"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-600 hover:text-blue-800 font-medium underline"
//         >
//           Open Key Terms Guide (PDF)
//         </a>
//       </div>

//       {confirmDialog.open && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//           <Card className="w-96">
//             <CardHeader>
//               <CardTitle>Confirm Action</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <p className="text-gray-700">Are you sure you want to {confirmDialog.action} your allocation?</p>
//               <div className="flex gap-3 justify-end">
//                 <Button
//                   onClick={handleCancel}
//                   variant="outline"
//                   className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
//                 >
//                   Cancel
//                 </Button>
//                 <Button onClick={handleConfirm} className="bg-blue-600 hover:bg-blue-700 text-white">
//                   Confirm
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       )}
//     </div>
//   )
// }




"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Grid3X3, History, Settings, TrendingUp, School, BookOpen } from "lucide-react"
import { useEffect, useState } from "react"

const quickActions = [
  {
    id: "seatmatrix",
    label: "View Seat Matrix",
    icon: Grid3X3,
    description: "Check available seats by college and department",
    href: "/student/seatmatrix",
  },
  {
    id: "previous-allocation",
    label: "Previous Allocations",
    icon: History,
    description: "View your allocation history",
    href: "/student/previous-allocation",
  },
  {
    id: "preference",
    label: "Set Preferences",
    icon: Settings,
    description: "Update your college preferences",
    href: "/student/preference",
  },
  {
    id: "prediction",
    label: "Rank Prediction",
    icon: TrendingUp,
    description: "Predict your chances",
    href: "/student/prediction",
  },
]

export default function HomePage() {
  const [recentAllocation, setRecentAllocation] = useState({
    roundNumber: "-",
    allocatedCollege: "-",
    department: "-",
    preferenceNumber: "-",
    status: "Process not started",
    isAllocated: false,
  })
  const [confirmDialog, setConfirmDialog] = useState({ open: false, action: null })

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("http://localhost:9000/student/getAllocationDetails", {
          method: "POST",
          credentials: "include",
        })
        const data2 = await res.json(),
          data = data2[0]
        if (res.ok) {
          console.log(data)
          setRecentAllocation({
            roundNumber: data.round_id || "-",
            allocatedCollege: data.college_name || "-",
            department: data.department_name || "-",
            preferenceNumber: data.preference_number || "-",
            status: data.college_name ? "Allocated" : "Not Allocated",
            isAllocated: !!data.college_name,
          })
        } else {
          console.error(data.message)
        }
      } catch (error) {
        console.error("Error fetching profile:", error)
      }
    }
    fetchProfile()
  }, [])

  const handleActionClick = (action) => {
    setConfirmDialog({ open: true, action })
  }

  // ✅ Updated part starts here
  const handleConfirm = async () => {
    if (confirmDialog.action) {
      console.log(`Action confirmed: ${confirmDialog.action}`)
      try {
        const res = await fetch("http://localhost:9000/student/changeStatus", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ statusChangeTo: confirmDialog.action }),
        })

        const data = await res.json()
        if (res.ok) {
          console.log("Status change successful:", data)
          alert(`Successfully changed status to ${confirmDialog.action}`)
        } else {
          console.error("Status change failed:", data.message)
          alert(`Failed to change status: ${data.message}`)
        }
      } catch (error) {
        console.error("Error changing status:", error)
        alert("An error occurred while changing status.")
      }
    }
    setConfirmDialog({ open: false, action: null })
  }
  // ✅ Updated part ends here

  const handleCancel = () => {
    setConfirmDialog({ open: false, action: null })
  }

  return (
    <div className="space-y-6">
      <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-white">
        <CardHeader className="pb-3">
          <CardTitle className="text-blue-800 flex items-center gap-2">
            <School className="h-5 w-5" />
            Recent Seat Allocation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <p className="text-sm text-blue-600 font-medium">Round Number</p>
              <p className="text-2xl font-bold text-blue-800">{recentAllocation.roundNumber}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <p className="text-sm text-blue-600 font-medium">Preference Number</p>
              <p className="text-2xl font-bold text-blue-800">{recentAllocation.preferenceNumber}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <p className="text-sm text-blue-600 font-medium">Allocated College</p>
              <p className="text-lg font-semibold text-gray-800">{recentAllocation.allocatedCollege}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <p className="text-sm text-blue-600 font-medium">Department</p>
              <p className="text-lg font-semibold text-gray-800">{recentAllocation.department}</p>
            </div>
          </div>
          <div
            className={`mt-4 p-3 rounded-lg border font-medium ${
              recentAllocation.isAllocated
                ? "bg-green-50 border-green-200 text-green-800"
                : "bg-red-50 border-red-200 text-red-800"
            }`}
          >
            Status: {recentAllocation.status}
          </div>
          {recentAllocation.isAllocated && (
            <div className="mt-4 flex gap-3">
              <Button onClick={() => handleActionClick("freeze")} className="bg-blue-600 hover:bg-blue-700 text-white">
                Freeze
              </Button>
              <Button
                onClick={() => handleActionClick("float")}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                Float
              </Button>
              <Button onClick={() => handleActionClick("withdraw")} className="bg-red-600 hover:bg-red-700 text-white">
                Withdraw
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-gray-800 flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickActions.map((action) => {
              const IconComponent = action.icon
              return (
                <Link key={action.id} href={action.href}>
                  <Button
                    variant="outline"
                    className="h-auto p-4 justify-start border-blue-200 hover:bg-blue-50 hover:border-blue-300 bg-transparent w-full"
                  >
                    <div className="flex items-start gap-3 text-left text-wrap">
                      <IconComponent className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800">{action.label}</p>
                        <p className="text-sm text-gray-600 mt-1">{action.description}</p>
                      </div>
                    </div>
                  </Button>
                </Link>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-sm text-gray-700 mb-2">Need help understanding the allocation process?</p>
        <a
          href="/docs/allocation-key-terms.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 font-medium underline"
        >
          Open Key Terms Guide (PDF)
        </a>
      </div>

      {confirmDialog.open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-96">
            <CardHeader>
              <CardTitle>Confirm Action</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">Are you sure you want to {confirmDialog.action} your allocation?</p>
              <div className="flex gap-3 justify-end">
                <Button
                  onClick={handleCancel}
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                >
                  Cancel
                </Button>
                <Button onClick={handleConfirm} className="bg-blue-600 hover:bg-blue-700 text-white">
                  Confirm
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
