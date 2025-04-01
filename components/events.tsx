"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

interface Event {
  id: string
  title: string
  date: string
  time?: string
  image: string
  link: string
  linkText: string
  countdown?: boolean
}

export function Events() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const events: Event[] = [
    {
      id: "new-year-2082",
      title: "Nepali New Year-2082 Celebration",
      date: "April 13, 2025",
      time: "6:00 PM - 12:00 AM",
      location: "Gerry Masterson Township of Thurlow Community Centre",
      image: "https://raw.githubusercontent.com/azure069/Comm-Web/main/images/Banner_New_Year_WEBSITE.png",
      link: "https://forms.gle/c75HMpHbAv1D7X5u5",
      linkText: "Register Now",
      countdown: true,
    },
    {
      id: "summer-event",
      title: "Summer Event-2025",
      date: "Stay tuned for updates on date, venue, and activities.",
      image: "https://raw.githubusercontent.com/azure069/Comm-Web/main/images/Summer_event.jpg",
      link: "#contact",
      linkText: "Learn More",
    },
  ]

  return (
    <section id="events" className="py-16 md:py-24 bg-background">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={cn(
            "text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-1000",
            inView ? "opacity-100" : "opacity-0 translate-y-10",
          )}
        >
          Upcoming Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function EventCard({ event, index, inView }: { event: Event; index: number; inView: boolean }) {
  const [timeLeft, setTimeLeft] = useState<string>("")

  useEffect(() => {
    if (!event.countdown) return

    const calculateTimeLeft = () => {
      const eventDate = new Date("2025-04-13T18:00:00")
      const now = new Date()
      const difference = eventDate.getTime() - now.getTime()

      if (difference <= 0) {
        setTimeLeft("Event has ended")
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s left`)
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [event.countdown])

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-1000 hover:shadow-lg transform hover:-translate-y-1",
        inView ? "opacity-100" : "opacity-0 translate-y-10",
        inView ? `delay-${index * 200}` : "",
      )}
    >
      <div className="relative h-48 w-full">
        <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
        <CardDescription>{event.date}</CardDescription>
        {event.time && <CardDescription>{event.time}</CardDescription>}
      </CardHeader>
      <CardContent>
        {event.countdown && <p className="text-sm font-medium text-muted-foreground">{timeLeft}</p>}
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full rounded-full">
          <Link href={event.link}>{event.linkText}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

