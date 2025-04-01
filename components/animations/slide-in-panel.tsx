"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

type Direction = "left" | "right" | "top" | "bottom"

interface SlideInPanelProps {
  children: ReactNode
  direction?: Direction
  className?: string
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
}

export function SlideInPanel({
  children,
  direction = "left",
  className = "",
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  once = true,
}: SlideInPanelProps) {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold,
  })

  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { x: "-100%", y: 0 }
      case "right":
        return { x: "100%", y: 0 }
      case "top":
        return { x: 0, y: "-100%" }
      case "bottom":
        return { x: 0, y: "100%" }
      default:
        return { x: "-100%", y: 0 }
    }
  }

  const variants = {
    hidden: {
      ...getInitialPosition(),
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

