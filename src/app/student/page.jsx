import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Grid3X3, History, Settings, TrendingUp, School, BookOpen } from "lucide-react"

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
  const recentAllocation = {
    roundNumber: "-",
    allocatedCollege: "-",
    department: "-",
    status: "Process not started",
  }

  return (
    <div className="space-y-6">
      <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-white">
        <CardHeader className="pb-3">
          <CardTitle className="text-blue-800 flex items-center gap-2">
            <School className="h-5 w-5" />
            {/* Recent Seat Allocation - Round {recentAllocation.roundNumber} */}
            Recent Seat Allocation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <p className="text-sm text-blue-600 font-medium">Round Number</p>
              <p className="text-2xl font-bold text-blue-800">{recentAllocation.roundNumber}</p>
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
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-medium">Status: {recentAllocation.status}</p>
          </div>
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
    </div>
  )
}
