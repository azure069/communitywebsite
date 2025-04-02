"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface GalleryImage {
  src: string
  alt: string
}

export function Gallery() {
  const [currentImage, setCurrentImage] = useState<GalleryImage | null>(null)

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  // Function to handle closing the lightbox
  const closeLightbox = () => {
    setCurrentImage(null)
    document.body.style.overflow = "auto"
  }

  // Function to handle image click to prevent propagation
  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  // Function to open the lightbox
  const openLightbox = (image: GalleryImage) => {
    setCurrentImage(image)
    document.body.style.overflow = "hidden"
  }

  const images: GalleryImage[] = [
    {
      src: "https://raw.githubusercontent.com/azure069/Comm-Web/main/images/Group_photo.jpeg",
      alt: "Community Group Photo",
    },
    {
      src: "https://raw.githubusercontent.com/azure069/Comm-Web/main/images/1.jpg",
      alt: "Community Event 1",
    },
    {
      src: "https://raw.githubusercontent.com/azure069/Comm-Web/main/images/3.jpg",
      alt: "Community Event 2",
    },
    {
      src: "https://raw.githubusercontent.com/azure069/Comm-Web/main/images/Group_photo_1.jpg",
      alt: "Community Group Photo 2",
    },
  ]

  return (
    <section id="gallery" className="py-16 md:py-24 bg-secondary/50 dark:bg-secondary/10">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold mb-2 transition-all duration-1000",
              inView ? "opacity-100" : "opacity-0 translate-y-10",
            )}
          >
            Gallery
          </h2>
          <h3
            className={cn(
              "text-xl md:text-2xl font-semibold transition-all duration-1000 delay-200",
              inView ? "opacity-100" : "opacity-0 translate-y-10",
            )}
          >
            Community Glimpses
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={cn(
                "relative aspect-square overflow-hidden rounded-lg cursor-pointer transition-all duration-1000 transform hover:scale-105",
                inView ? "opacity-100" : "opacity-0 translate-y-10",
                inView ? `delay-${(index % 4) * 100 + 300}` : "",
              )}
              onClick={() => openLightbox(image)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300 font-medium">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Lightbox */}
        <AnimatePresence>
          {currentImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
              onKeyDown={(e) => e.key === "Escape" && closeLightbox()}
              tabIndex={0}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-4xl max-h-[80vh] aspect-auto"
                onClick={handleImageClick}
              >
                <Image
                  src={currentImage.src || "/placeholder.svg"}
                  alt={currentImage.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

