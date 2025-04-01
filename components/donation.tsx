"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"

export function Donation() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="donation" className="py-16 md:py-24 bg-highlight text-highlight-foreground">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div
          className={cn(
            "text-center mb-8 transition-all duration-1000",
            inView ? "opacity-100" : "opacity-0 translate-y-10",
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Us</h2>
          <p className="text-lg mb-6">
            As we step into <strong>Nepali New Year 2082</strong>, we are excited to bring our community together for a
            vibrant and joyful celebration. Your contributions will help cover venue costs, cultural performances, food,
            decorations, and other event expenses.
          </p>
        </div>

        <div
          className={cn(
            "flex justify-center transition-all duration-1000 delay-300",
            inView ? "opacity-100" : "opacity-0 translate-y-10",
          )}
        >
          <Button
            onClick={() => setIsDialogOpen(true)}
            size="lg"
            className="rounded-full text-lg px-8 bg-highlight-foreground text-highlight hover:bg-highlight-foreground/90"
          >
            Donate via E-Transfer
          </Button>
        </div>

        <div
          className={cn(
            "mt-8 text-center transition-all duration-1000 delay-500",
            inView ? "opacity-100" : "opacity-0 translate-y-10",
          )}
        >
          <p className="mb-2">
            For any inquiries, feel free to contact us at <strong>nepalicommunityofbelleville@gmail.com</strong> or call{" "}
            <strong>+1 (613) 848-5968</strong>.
          </p>
          <p className="text-lg font-bold">Thank you for your generosity!</p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-md rounded-xl">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">Interac E-Transfer Details</DialogTitle>
              <DialogDescription>Please send your donation via Interac e-Transfer to:</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <p className="font-semibold">Legal Name:</p>
                <p>Jenish Aatreya</p>
              </div>
              <div>
                <p className="font-semibold">Email for E-Transfer:</p>
                <p>nepalicommunityofbelleville@gmail.com</p>
              </div>
              <p>Once completed, you'll receive a confirmation email.</p>
            </div>
            <DialogClose asChild>
              <Button className="w-full rounded-full">Close</Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

