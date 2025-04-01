"use client"

import { type ReactNode, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down" | "left" | "right"
}

export function ParallaxSection({ children, className = "", speed = 0.2, direction = "up" }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const transformUp = useTransform(scrollYProgress, [0, 1], ["0%", `${-speed * 100}%`])
  const transformDown = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])
  const transformLeft = useTransform(scrollYProgress, [0, 1], ["0%", `${-speed * 100}%`])
  const transformRight = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])

  const transform =
    direction === "up"
      ? transformUp
      : direction === "down"
        ? transformDown
        : direction === "left"
          ? transformLeft
          : transformRight

  const style = direction === "up" || direction === "down" ? { y: transform } : { x: transform }

  return (
    <div ref={ref} className={className}>
      <motion.div style={style}>{children}</motion.div>
    </div>
  )
}

