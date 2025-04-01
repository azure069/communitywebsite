"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, DollarSign, Gift } from "lucide-react"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { SlideInPanel } from "@/components/animations/slide-in-panel"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"

export function SupportSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])

  const supportOptions = [
    {
      icon: <DollarSign className="h-10 w-10 text-primary" />,
      title: "Financial Support",
      description:
        "Your financial contributions help us organize cultural events, support community members in need, and fund our various initiatives.",
    },
    {
      icon: <Gift className="h-10 w-10 text-primary" />,
      title: "In-Kind Donations",
      description:
        "Donate items such as traditional clothing, musical instruments, books, or other resources that can benefit our community activities.",
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Volunteer",
      description:
        "Share your time and skills to help organize events, teach classes, or assist with administrative tasks for our community.",
    },
  ]

  return (
    <section
      id="support"
      ref={sectionRef}
      className="section-padding bg-secondary/30 dark:bg-secondary/10 relative overflow-hidden"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-b from-secondary/30 to-secondary/10 dark:from-secondary/10 dark:to-secondary/5"
        style={{ y: backgroundY }}
      />

      <div className="container-custom relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="heading-lg">
            Support <span className="text-gradient">Our Community</span>
          </h2>
          <p className="paragraph">
            Your support helps us preserve our cultural heritage, organize meaningful events, and provide assistance to
            community members in need.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" delay={0.1} staggerDelay={0.1}>
          {supportOptions.map((option, index) => (
            <StaggerItem key={index} direction="up">
              <Card className="text-center card-hover border-none shadow-md h-full">
                <CardHeader>
                  <motion.div
                    className="flex justify-center mb-4"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {option.icon}
                  </motion.div>
                  <CardTitle>{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{option.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button
                    variant={index === 0 ? "default" : "outline"}
                    className="rounded-full"
                    onClick={() => index === 0 && setIsDialogOpen(true)}
                    asChild={index !== 0}
                  >
                    {index === 0 ? "Donate Now" : <Link href="/contact">Contact Us</Link>}
                  </Button>
                </CardFooter>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <SlideInPanel direction="bottom" className="bg-primary/5 rounded-2xl p-8 text-center max-w-3xl mx-auto">
          <h3 className="heading-sm mb-4">Nepali New Year 2082 Fundraising</h3>
          <p className="paragraph mb-6">
            We are currently raising funds for our upcoming Nepali New Year celebration. Your contributions will help
            cover venue costs, cultural performances, food, decorations, and other event expenses.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="rounded-full" onClick={() => setIsDialogOpen(true)}>
              Contribute Now
            </Button>
          </motion.div>
        </SlideInPanel>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Donation Information</DialogTitle>
              <DialogDescription>
                Please use the following details to make your contribution via Interac e-Transfer.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-1">
                <p className="font-medium">Legal Name:</p>
                <p className="text-muted-foreground">Jenish Aatreya</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium">Email for E-Transfer:</p>
                <p className="text-muted-foreground">nepalicommunityofbelleville@gmail.com</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Once completed, you'll receive a confirmation email. Thank you for your generosity!
              </p>
            </div>
            <div className="space-y-1 pt-2">
              <p className="font-medium">For inquiries:</p>
              <p className="text-muted-foreground">Phone: +1 (613) 848-5968</p>
            </div>
            <DialogClose asChild>
              <Button className="w-full mt-4 rounded-full">Close</Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

