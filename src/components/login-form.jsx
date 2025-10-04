// "use client"

// import React from "react"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Eye, EyeOff } from "lucide-react"

// export function LoginForm() {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [isLoading, setIsLoading] = useState(false)
//   const [showPassword, setShowPassword] = useState(false)

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsLoading(true)

//     await new Promise((resolve) => setTimeout(resolve, 1000))

//     console.log("Login attempt:", { email, password })
//     setIsLoading(false)
//   }

//   return (
//     <Card className="w-full bg-card border-border shadow-sm">
//       <CardHeader className="space-y-2 text-center">
//         <CardTitle className="text-xl font-semibold text-card-foreground">Sign In</CardTitle>
//         <CardDescription className="text-muted-foreground">Enter your credentials to access the system</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="email" className="text-sm font-medium text-foreground">
//               Email
//             </Label>
//             <Input
//               id="email"
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-ring"
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="password" className="text-sm font-medium text-foreground">
//               Password
//             </Label>
//             <div className="relative">
//               <Input
//                 id="password"
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-ring pr-10"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground transition-colors"
//                 aria-label={showPassword ? "Hide password" : "Show password"}
//               >
//                 {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//               </button>
//             </div>
//           </div>

//           <Button
//             type="submit"
//             className="w-full bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-ring"
//             disabled={isLoading}
//           >
//             {isLoading ? "Signing in..." : "Sign In"}
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   )
// }






"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff } from "lucide-react"

export function LoginForm() {
  const router = useRouter() 
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")

    try {
      const response = await fetch("http://localhost:9000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      })

      const data = await response.json()
      console.log(data)
      if (response.ok) {
        setMessage(data.message)
        router.push("/student")
      } else {
        setMessage(data.message || "Login failed")
      }
    } catch (error) {
      console.error(error)
      setMessage("Something went wrong. Try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full bg-card border-border shadow-sm">
      <CardHeader className="space-y-2 text-center">
        <CardTitle className="text-xl font-semibold text-card-foreground">Sign In</CardTitle>
        <CardDescription className="text-muted-foreground">Enter your credentials to access the system</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-ring"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-foreground">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-ring pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {message && (
            <p className="text-center text-sm mt-1 text-red-500">
              {message}
            </p>
          )}

          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-ring"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
