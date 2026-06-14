import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/components/sidebar"
import "../globals.css"
import { Suspense } from "react"

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
        <Sidebar />
        <div className="lg:ml-64">
        <main className="p-6 lg:p-8">
            <div className="max-w-6xl mx-auto pt-16 lg:pt-0">
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
            </div>
        </main>
        </div>
    </div>
  )
}
