"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

export function VideoSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="py-16 md:py-24 bg-highlight text-highlight-foreground">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3
          className={cn(
            "text-2xl md:text-3xl font-semibold text-center mb-8 transition-all duration-1000",
            inView ? "opacity-100" : "opacity-0 translate-y-10",
          )}
        >
          Watch Our Community Highlights
        </h3>

        <div
          className={cn(
            "max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl transition-all duration-1000 delay-300",
            inView ? "opacity-100" : "opacity-0 translate-y-10",
          )}
        >
          <video controls className="w-full h-auto" poster="/placeholder.svg?height=720&width=1280">
            <source
              src="https://www.dropbox.com/scl/fi/fyp811eadjrjww6d1btu7/Video.mp4?rlkey=xseg0a4rwxyrchbaup88ms9e3&st=kehkklyo&raw=1"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}

