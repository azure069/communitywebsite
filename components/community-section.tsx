"use client"

import type React from "react"

import { useRef } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Heart, Globe, Calendar, BookOpen, Handshake } from "lucide-react"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { SlideInPanel } from "@/components/animations/slide-in-panel"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CommunityActivity {
  icon: React.ReactNode
  title: string
  description: string
}

export function CommunitySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.1])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.6, 1, 1])

  const activities: CommunityActivity[] = [
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Cultural Events",
      description:
        "We celebrate major Nepali festivals like Dashain, Tihar, and Nepali New Year with traditional food, music, and performances.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Community Support",
      description:
        "We provide resources on housing, employment, healthcare, and education to help newcomers settle comfortably in Belleville.",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Language & Culture",
      description:
        "We offer Nepali language classes for children and cultural workshops to preserve our heritage and traditions.",
    },
    {
      icon: <Handshake className="h-8 w-8 text-primary" />,
      title: "Networking",
      description:
        "We create opportunities for professionals, students, and entrepreneurs to connect and grow within the community.",
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Charity Initiatives",
      description:
        "We engage in fundraising activities to support causes in both Belleville and Nepal, including disaster relief efforts.",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Cultural Exchange",
      description:
        "We participate in multicultural events to share Nepali culture with the broader Belleville community.",
    },
  ]

  return (
    <section id="community" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="heading-lg">
            Community <span className="text-gradient">Activities</span>
          </h2>
          <p className="paragraph">
            Our community engages in various activities throughout the year to foster connection, preserve our culture,
            and support our members.
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          delay={0.1}
          staggerDelay={0.08}
        >
          {activities.map((activity, index) => (
            <StaggerItem key={index} direction="up">
              <Card className="h-full card-hover border-none shadow-md">
                <CardHeader>
                  <motion.div
                    className="mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {activity.icon}
                  </motion.div>
                  <CardTitle>{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <SlideInPanel direction="bottom" className="relative rounded-2xl overflow-hidden">
          <motion.div
            ref={imageRef}
            className="relative h-80"
            style={{
              scale: imageScale,
              opacity: imageOpacity,
            }}
          >
            <Image
              src="https://raw.githubusercontent.com/azure069/Comm-Web/main/images/Group_photo_1.jpg"
              alt="Community Gathering"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Join Our Community</h3>
              <p className="text-white/80 max-w-2xl mb-4">
                Whether you're a new immigrant, a student, or a long-time resident, we welcome you to be a part of the
                Nepali Community of Belleville.
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 border-none">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </motion.div>
        </SlideInPanel>
      </div>
    </section>
  )
}

