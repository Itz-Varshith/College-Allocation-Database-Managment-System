import { LoginForm } from "@/components/login-form"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="w-full py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
            College Allocation Database Management
          </h1>
          <p className="text-muted-foreground mt-2 text-sm md:text-base">
            Secure access to the college allocation system
          </p>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </main>

    </div>
  )
}
