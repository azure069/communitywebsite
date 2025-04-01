"use client"

import type React from "react"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { toast } = useToast()
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // This would normally be a fetch to your form submission endpoint
      // For demo purposes, we're just simulating a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      })

      setFormData({
        name: "",
        email: "",
        message: "",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <h2
          className={cn(
            "text-3xl md:text-4xl font-bold text-center mb-8 transition-all duration-1000",
            inView ? "opacity-100" : "opacity-0 translate-y-10",
          )}
        >
          Contact Us
        </h2>

        <form
          onSubmit={handleSubmit}
          className={cn(
            "space-y-6 transition-all duration-1000 delay-300",
            inView ? "opacity-100" : "opacity-0 translate-y-10",
          )}
        >
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="rounded-lg"
            />
          </div>

          <div>
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-lg"
            />
          </div>

          <div>
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="rounded-lg min-h-[150px]"
            />
          </div>

          <div className="flex justify-center">
            <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto px-8 rounded-full">
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

