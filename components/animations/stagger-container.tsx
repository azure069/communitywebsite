"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  delay?: number
  staggerDelay?: number
  threshold?: number
  once?: boolean
}

export function StaggerContainer({
  children,
  className = "",
  delay = 0,
  staggerDelay = 0.1,
  threshold = 0.1,
  once = true,
}: StaggerContainerProps) {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  )
}

