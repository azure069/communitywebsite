"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  }

  const scrollIndicatorVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    bounce: {
      y: [0, -10, 0],
      transition: {
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
        delay: 1,
      },
    },
  }

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        ref={backgroundRef}
        className="absolute inset-0 z-0"
        style={{
          y: backgroundY,
          opacity: backgroundOpacity,
          backgroundImage: "url('https://raw.githubusercontent.com/azure069/Comm-Web/main/images/Hero_bg_2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)",
        }}
      />

      {/* Content */}
      <motion.div
        ref={contentRef}
        className="container-custom relative z-10 text-center"
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
      >
        <motion.h1
          className="heading-xl text-white max-w-4xl mx-auto text-balance"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          Celebrating Nepali Culture in <span className="text-gradient">Belleville</span>
        </motion.h1>

        <motion.p
          className="text-xl text-white/80 max-w-2xl mx-auto mt-6"
          initial="hidden"
          animate="visible"
          variants={subtitleVariants}
        >
          Join our vibrant community as we share traditions, build connections, and create a home away from home.
        </motion.p>

        <motion.div className="mt-8" initial="hidden" animate="visible" variants={buttonVariants}>
          <Button size="lg" className="rounded-full text-base px-8" asChild>
            <Link href="/events">Explore Events</Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator - Fixed centering */}
      <div className="absolute bottom-8 left-0 right-0 mx-auto w-full flex justify-center items-center z-10">
        <motion.button
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            })
          }}
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
          initial="hidden"
          animate={["visible", "bounce"]}
          variants={scrollIndicatorVariants}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="h-5 w-5" />
        </motion.button>
      </div>
    </section>
  )
}

