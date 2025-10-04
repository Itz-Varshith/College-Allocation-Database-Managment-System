


// "use client"

// import { useEffect, useState } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { User, Lock } from "lucide-react"

// export default function ProfilePage() {
//   const [student, setStudent] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [currentPassword, setCurrentPassword] = useState("")
//   const [newPassword, setNewPassword] = useState("")
//   const [confirmPassword, setConfirmPassword] = useState("")
//   const [message, setMessage] = useState("")

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await fetch("http://localhost:9000/api/profile", {
//           method: "GET",
//           credentials: "include",
//         })
//         const data = await res.json()
//         if (res.ok) setStudent(data.student)
//         else console.error(data.message)
//       } catch (error) {
//         console.error("Error fetching profile:", error)
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchProfile()
//   }, [])

//   const handleChangePassword = async () => {
//     setMessage("")
//     try {
//       const res = await fetch("http://localhost:9000/api/change-password", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//         body: JSON.stringify({ currentPassword, newPassword, confirmPassword }),
//       })
//       const data = await res.json()
//       setMessage(data.message)
//       if (res.ok) {
//         setCurrentPassword(""); setNewPassword(""); setConfirmPassword("")
//       }
//     } catch (err) {
//       console.error(err)
//       setMessage("Something went wrong")
//     }
//   }

//   if (loading) return <p>Loading...</p>
//   if (!student) return <p>No student data found.</p>

//   return (
//     <div className="space-y-6">
//       <Card className="border-blue-200 p-0">
//         <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b border-blue-100 pt-5 mt-0 rounded-t-xl">
//           <CardTitle className="text-blue-800 flex items-center gap-2">
//             <User className="h-5 w-5" /> Student Profile
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="p-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <Label className="text-blue-700 font-medium">Registration Number</Label>
//               <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
//                 <p className="font-semibold text-gray-800">{student.student_id}</p>
//               </div>
//             </div>
//             <div className="space-y-2">
//               <Label className="text-blue-700 font-medium">Full Name</Label>
//               <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
//                 <p className="font-semibold text-gray-800">{student.name}</p>
//               </div>
//             </div>
//             <div className="space-y-2">
//               <Label className="text-blue-700 font-medium">Email Address</Label>
//               <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
//                 <p className="font-semibold text-gray-800">{student.email}</p>
//               </div>
//             </div>
//             <div className="space-y-2">
//               <Label className="text-blue-700 font-medium">Mobile Number</Label>
//               <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
//                 <p className="font-semibold text-gray-800">{student.mobile_number}</p>
//               </div>
//             </div>
//             <div className="space-y-2">
//               <Label className="text-blue-700 font-medium">Current Status</Label>
//               <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
//                 <p className="font-semibold text-gray-800">{student.current_status}</p>
//               </div>
//             </div>
//             <div className="space-y-2">
//               <Label className="text-blue-700 font-medium">Gender</Label>
//               <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
//                 <p className="font-semibold text-gray-800">{student.gender}</p>
//               </div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       <Card className="border-blue-200 p-0">
//         <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b border-blue-100 pt-5 mt-0 rounded-t-xl">
//           <CardTitle className="text-blue-800 flex items-center gap-2">
//             <Lock className="h-5 w-5" /> Change Password
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="p-6">
//           <div className="max-w-md space-y-4">
//             {message && <p className="text-red-600">{message}</p>}
//             <div className="space-y-2">
//               <Label htmlFor="current-password" className="text-blue-700 font-medium">Current Password</Label>
//               <Input
//                 id="current-password"
//                 type="password"
//                 value={currentPassword}
//                 onChange={(e) => setCurrentPassword(e.target.value)}
//                 className="border-blue-200 focus:border-blue-400 focus:ring-blue-200"
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="new-password" className="text-blue-700 font-medium">New Password</Label>
//               <Input
//                 id="new-password"
//                 type="password"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 className="border-blue-200 focus:border-blue-400 focus:ring-blue-200"
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="confirm-password" className="text-blue-700 font-medium">Confirm New Password</Label>
//               <Input
//                 id="confirm-password"
//                 type="password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className="border-blue-200 focus:border-blue-400 focus:ring-blue-200"
//               />
//             </div>
//             <Button onClick={handleChangePassword} className="bg-blue-600 hover:bg-blue-700 text-white">Update Password</Button>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }






"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User, Lock } from "lucide-react"

export default function ProfilePage() {
  const [student, setStudent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("http://localhost:9000/api/profile", {
          method: "GET",
          credentials: "include",
        })
        const data = await res.json()
        if (res.ok) setStudent(data.student)
        else console.error(data.message)
      } catch (error) {
        console.error("Error fetching profile:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchProfile()
  }, [])

  const handleChangePassword = async () => {
    setMessage("")
    try {
      const res = await fetch("http://localhost:9000/api/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ currentPassword, newPassword, confirmPassword }),
      })
      const data = await res.json()
      setMessage(data.message)
      if (res.ok) {
        setCurrentPassword(""); setNewPassword(""); setConfirmPassword("")
      }
    } catch (err) {
      console.error(err)
      setMessage("Something went wrong")
    }
  }

  if (loading) return <p>Loading...</p>
  if (!student) return <p>No student data found.</p>

  const categoryNames = {
    1: "OPEN",
    2: "OPEN-FEMALE",
    3: "OPEN-PWD",
    4: "OPEN-PWD-FEMALE",
    5: "EWS",
    6: "EWS-FEMALE",
    7: "EWS-PWD",
    8: "OBC-NCL",
    9: "OBC-NCL-FEMALE",
    10: "OBC-NCL-PWD",
    11: "SC",
    12: "SC-FEMALE",
    13: "SC-PWD",
    14: "ST",
    15: "ST-FEMALE",
    16: "ST-PWD",
    
  }
  const categoryName = categoryNames[student.category_id] || "Unknown"

  return (
    <div className="space-y-6">
      <Card className="border-blue-200 p-0">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b border-blue-100 pt-5 mt-0 rounded-t-xl">
          <CardTitle className="text-blue-800 flex items-center gap-2">
            <User className="h-5 w-5" /> Student Profile
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-blue-700 font-medium">Registration Number</Label>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="font-semibold text-gray-800">{student.student_id}</p>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-blue-700 font-medium">Full Name</Label>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="font-semibold text-gray-800">{student.name}</p>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-blue-700 font-medium">Email Address</Label>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="font-semibold text-gray-800">{student.email}</p>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-blue-700 font-medium">Mobile Number</Label>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="font-semibold text-gray-800">{student.mobile_number}</p>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-blue-700 font-medium">Current Status</Label>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="font-semibold text-gray-800">{student.current_status}</p>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-blue-700 font-medium">Category Name</Label>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="font-semibold text-gray-800">{categoryName}</p>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-blue-700 font-medium">General Rank</Label>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="font-semibold text-gray-800">{student.general_rank}</p>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-blue-700 font-medium">Category Rank</Label>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="font-semibold text-gray-800">{student.category_rank}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-200 p-0">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b border-blue-100 pt-5 mt-0 rounded-t-xl">
          <CardTitle className="text-blue-800 flex items-center gap-2">
            <Lock className="h-5 w-5" /> Change Password
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="max-w-md space-y-4">
            {message && <p className="text-red-600">{message}</p>}
            <div className="space-y-2">
              <Label htmlFor="current-password" className="text-blue-700 font-medium">Current Password</Label>
              <Input
                id="current-password"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="border-blue-200 focus:border-blue-400 focus:ring-blue-200"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password" className="text-blue-700 font-medium">New Password</Label>
              <Input
                id="new-password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="border-blue-200 focus:border-blue-400 focus:ring-blue-200"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-blue-700 font-medium">Confirm New Password</Label>
              <Input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border-blue-200 focus:border-blue-400 focus:ring-blue-200"
              />
            </div>
            <Button onClick={handleChangePassword} className="bg-blue-600 hover:bg-blue-700 text-white">Update Password</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
