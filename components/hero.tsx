"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

export function Hero() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrollPosition = window.scrollY
        backgroundRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Parallax Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://raw.githubusercontent.com/azure069/Comm-Web/main/images/Hero_bg_2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.5)",
        }}
      />

      {/* Content */}
      <div ref={ref} className="container relative z-10 text-center px-4 sm:px-6 lg:px-8 space-y-8">
        <h1
          className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold text-white transition-all duration-1000 delay-100",
            inView ? "opacity-100" : "opacity-0 translate-y-10",
          )}
        >
          Welcome to the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
            Nepali Community of Belleville
          </span>
        </h1>

        <p
          className={cn(
            "text-xl md:text-2xl text-white/90 max-w-3xl mx-auto transition-all duration-1000 delay-300",
            inView ? "opacity-100" : "opacity-0 translate-y-10",
          )}
        >
          Experience the beauty of Nepalese culture, traditions, and togetherness in the heart of Belleville.
        </p>

        <div
          className={cn(
            "flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500",
            inView ? "opacity-100" : "opacity-0 translate-y-10",
          )}
        >
          <Button
            asChild
            size="lg"
            className="rounded-full text-lg px-8 bg-highlight text-highlight-foreground hover:bg-highlight/90"
          >
            <Link href="#events">Join Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

