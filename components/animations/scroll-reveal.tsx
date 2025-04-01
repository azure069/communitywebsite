"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

type AnimationDirection = "up" | "down" | "left" | "right" | "scale" | "opacity"
type AnimationVariant = "fade" | "slide" | "bounce" | "zoom"

interface ScrollRevealProps {
  children: ReactNode
  direction?: AnimationDirection
  variant?: AnimationVariant
  delay?: number
  duration?: number
  threshold?: number
  className?: string
  once?: boolean
}

export function ScrollReveal({
  children,
  direction = "up",
  variant = "fade",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold,
  })

  const getVariants = () => {
    const baseVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: variant === "bounce" ? [0.175, 0.885, 0.32, 1.275] : [0.43, 0.13, 0.23, 0.96],
        },
      },
    }

    switch (direction) {
      case "up":
        return {
          hidden: { ...baseVariants.hidden, y: 50 },
          visible: { ...baseVariants.visible, y: 0 },
        }
      case "down":
        return {
          hidden: { ...baseVariants.hidden, y: -50 },
          visible: { ...baseVariants.visible, y: 0 },
        }
      case "left":
        return {
          hidden: { ...baseVariants.hidden, x: 50 },
          visible: { ...baseVariants.visible, x: 0 },
        }
      case "right":
        return {
          hidden: { ...baseVariants.hidden, x: -50 },
          visible: { ...baseVariants.visible, x: 0 },
        }
      case "scale":
        return {
          hidden: { ...baseVariants.hidden, scale: variant === "bounce" ? 0.8 : 0.95 },
          visible: { ...baseVariants.visible, scale: 1 },
        }
      case "opacity":
      default:
        return baseVariants
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  )
}

