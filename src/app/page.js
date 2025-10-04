"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const features = [
  // {
  //   title: "Preferences & Allocation",
  //   desc: "Students can add preferences and participate in the allocation process.",
  //   href: "/preference",
  // },
  {
    title: "Student Dashboard",
    desc: "Manage activities, track progress, and view important updates in one place.",
    href: "/dashboard",
  },
  {
    title: "Seat Matrix",
    desc: "View seat availability across institutes and departments with filters.",
    href: "/seat-matrix",
  },
  {
    title: "Previous Allocation",
    desc: "Explore opening and closing ranks from previous allocations.",
    href: "/previous-allocation",
  },
  {
    title: "Add Preference",
    desc: "Choose colleges and departments in your preferred order.",
    href: "/preference",
  },
  {
    title: "College Predictor",
    desc: "Get predicted departments based on your rank.",
    href: "/prediction",
  },
  {
    title: "Profile",
    desc: "View student details securely.",
    href: "/profile",
  },
]

export default function LandingPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      {/* Top Navigation */}
      <header className="border-b border-border">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="font-semibold tracking-tight">
            <span className="text-pretty text-lg  text-blue-600">College Connect</span>
          </Link>
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <section className="mx-auto max-w-6xl px-4 py-10 md:py-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Smart College Allocation Made Simple
            </h1>
            <p className="mt-3 text-pretty text-sm text-muted-foreground md:text-base">
              Plan your preferences, explore seat matrices, review past allocations, and use our predictor — all in one
              student-friendly dashboard.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Button asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/seat-matrix">Explore Seat Matrix</Link>
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-pretty text-base md:text-lg">{f.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-pretty text-sm text-muted-foreground">{f.desc}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer (simple, consistent)
      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} College Allocation. All rights reserved.
        </div>
      </footer> */}
    </div>
  )
}
