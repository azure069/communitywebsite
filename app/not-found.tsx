import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="max-w-md w-full bg-card rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl mb-8 text-muted-foreground">Oops! The page you're looking for doesn't exist.</p>
        <Button asChild className="rounded-full px-8">
          <Link href="/">Go Back Home</Link>
        </Button>
      </div>
    </div>
  )
}

