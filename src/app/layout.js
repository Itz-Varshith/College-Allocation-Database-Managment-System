
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "College Allocation System",
  description: "College Allocation Database Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}




// // import { GeistSans } from "geist/font/sans"
// // import { GeistMono } from "geist/font/mono"
// import { Geist, Geist_Mono } from "next/font/google";
// import { Analytics } from "@vercel/analytics/react"
// import Sidebar from "@/components/sidebar"
// import "./globals.css"
// import { Suspense } from "react"

// export const metadata = {
//   title: "Student Dashboard - College Allocation System",
//   description: "Student portal for college seat allocation and management",
//   generator: "v0.app",
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
//         <div className="min-h-screen bg-gray-50">
//           <Sidebar />
//           <div className="lg:ml-64">
//             <main className="p-6 lg:p-8">
//               <div className="max-w-6xl mx-auto pt-16 lg:pt-0">
//                 <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
//               </div>
//             </main>
//           </div>
//         </div>
//         <Analytics />
//       </body>
//     </html>
//   )
// }
