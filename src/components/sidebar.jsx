"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Grid3X3, History, Settings, TrendingUp, User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const sidebarItems = [
  { id: "home", label: "Home", icon: Home, href: "/student" },
  { id: "seatmatrix", label: "Seat Matrix", icon: Grid3X3, href: "/student/seatmatrix" },
  { id: "previous-allocation", label: "Previous Seat Allocation", icon: History, href: "/student/previous-allocation" },
  { id: "preference", label: "Preference", icon: Settings, href: "/student/preference" },
  { id: "prediction", label: "Prediction", icon: TrendingUp, href: "/student/prediction" },
  { id: "profile", label: "Profile", icon: User, href: "/student/profile" },
]

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const SidebarContent = () => (
    <>
      <div className="p-6 border-b border-blue-200">
        <h1 className="text-xl font-bold text-blue-800">Student Dashboard</h1>
        <p className="text-sm text-blue-600 mt-1">College Allocation System</p>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          {sidebarItems.map((item) => {
            const IconComponent = item.icon
            const isActive = pathname === item.href
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    isActive
                      ? "bg-blue-100 text-blue-800 border border-blue-200"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <IconComponent className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleMobileMenu}
          // className="bg-white border-blue-200 hover:bg-blue-50"
          className={
            isMobileMenuOpen ? "bg-white border-blue-200 hover:bg-blue-50 hidden" :"bg-white border-blue-200 hover:bg-blue-50"
          }
        >
          {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-64 bg-white border-r border-blue-200 min-h-screen fixed left-0 top-0">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div className="fixed inset-0 bg-black/10" onClick={toggleMobileMenu} />
          <div className="fixed left-0 top-0 w-64 bg-white border-r border-blue-200 min-h-screen z-50">
            <SidebarContent />
          </div>
        </div>
      )}
    </>
  )
}
