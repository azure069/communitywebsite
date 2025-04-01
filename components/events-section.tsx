"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  image: string
  link: string
  upcoming: boolean
}

export function EventsSection() {
  const [timeLeft, setTimeLeft] = useState("")
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
  const cardsY = useTransform(scrollYProgress, [0.1, 0.6], ["20%", "0%"])
  const cardsOpacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1])

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date("2025-04-13T18:00:00")
      const now = new Date()
      const difference = eventDate.getTime() - now.getTime()

      if (difference <= 0) {
        setTimeLeft("Event has started")
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))

      setTimeLeft(`${days}d ${hours}h ${minutes}m`)
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 60000)

    return () => clearInterval(timer)
  }, [])

  const events: Event[] = [
    {
      id: "nepali-new-year-2082",
      title: "Nepali New Year 2082 Celebration",
      date: "April 13, 2025",
      time: "6:00 PM - 12:00 AM",
      location: "Gerry Masterson Township of Thurlow Community Centre",
      description:
        "Join us for a vibrant celebration of the Nepali New Year with traditional food, music, dance performances, and cultural activities for all ages.",
      image: "https://raw.githubusercontent.com/azure069/Comm-Web/main/images/Banner_New_Year_WEBSITE.png",
      link: "https://forms.gle/c75HMpHbAv1D7X5u5",
      upcoming: true,
    },
    {
      id: "summer-festival-2025",
      title: "Summer Festival 2025",
      date: "TBD",
      time: "2:00 PM - 8:00 PM",
      location: "Zwick's Park, Belleville",
      description:
        "A day of outdoor fun with Nepali games, picnic, music, and community bonding activities for families and friends.",
      image: "https://raw.githubusercontent.com/azure069/Comm-Web/main/images/Summer_event.jpg",
      link: "#contact",
      upcoming: true,
    },
    {
      id: "dashain-tihar-2025",
      title: "Dashain & Tihar Celebration",
      date: "TBD",
      time: "5:00 PM - 11:00 PM",
      location: "Belleville Recreation Center",
      description:
        "Experience the biggest festivals of Nepal with traditional rituals, feasting, and cultural performances celebrating victory of good over evil.",
      image: "https://github.com/azure069/Comm-Web/blob/main/images/dashain-tihar.jpg",
      link: "#contact",
      upcoming: true,
    },
  ]

  return (
    <section id="events" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Subtle animated background */}
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-b from-background to-secondary/10 dark:from-background dark:to-secondary/5"
        style={{ y: backgroundY }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-12"
        >
          <h2 className="heading-lg">
            Upcoming <span className="text-gradient">Events</span>
          </h2>
          <p className="paragraph">
            Join us for these exciting community gatherings and cultural celebrations. Connect with fellow community
            members and experience the rich traditions of Nepal.
          </p>
        </motion.div>

        {/* Featured Event */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="overflow-hidden border-none shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src="https://raw.githubusercontent.com/azure069/Comm-Web/main/images/Banner_New_Year_WEBSITE.png"
                  alt="Nepali New Year 2082 Celebration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="bg-primary/10 text-primary">
                      {timeLeft} remaining
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold">Nepali New Year 2082 Celebration</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">April 13, 2025</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">6:00 PM - 12:00 AM</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">Gerry Masterson Township of Thurlow Community Centrer</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Join us for a vibrant celebration of the Nepali New Year with traditional food, music, dance
                    performances, and cultural activities for all ages.
                  </p>
                </div>
                <Button asChild className="mt-6 rounded-full">
                  <a href="https://forms.gle/c75HMpHbAv1D7X5u5" target="_blank" rel="noopener noreferrer">
                    Register Now
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Other Events */}
        <motion.div
          ref={cardsRef}
          style={{
            y: cardsY,
            opacity: cardsOpacity,
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {events.slice(1).map((event, index) => (
            <motion.div key={event.id} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
              <Card className="overflow-hidden h-full">
                <div className="relative h-48">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                  {!event.upcoming && (
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
                      <Badge variant="outline" className="bg-secondary text-secondary-foreground">
                        Coming Soon
                      </Badge>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">{event.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full rounded-full">
                    <a href={event.link}>Learn More</a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

