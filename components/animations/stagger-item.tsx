"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

type AnimationDirection = "up" | "down" | "left" | "right" | "scale" | "opacity"

interface StaggerItemProps {
  children: ReactNode
  direction?: AnimationDirection
  className?: string
  duration?: number
}

export function StaggerItem({ children, direction = "up", className = "", duration = 0.5 }: StaggerItemProps) {
  const getVariants = () => {
    const baseVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration,
          ease: [0.43, 0.13, 0.23, 0.96],
        },
      },
    }

    switch (direction) {
      case "up":
        return {
          hidden: { ...baseVariants.hidden, y: 30 },
          visible: { ...baseVariants.visible, y: 0 },
        }
      case "down":
        return {
          hidden: { ...baseVariants.hidden, y: -30 },
          visible: { ...baseVariants.visible, y: 0 },
        }
      case "left":
        return {
          hidden: { ...baseVariants.hidden, x: 30 },
          visible: { ...baseVariants.visible, x: 0 },
        }
      case "right":
        return {
          hidden: { ...baseVariants.hidden, x: -30 },
          visible: { ...baseVariants.visible, x: 0 },
        }
      case "scale":
        return {
          hidden: { ...baseVariants.hidden, scale: 0.9 },
          visible: { ...baseVariants.visible, scale: 1 },
        }
      case "opacity":
      default:
        return baseVariants
    }
  }

  return (
    <motion.div className={className} variants={getVariants()}>
      {children}
    </motion.div>
  )
}

