"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

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

  // Lock/unlock body scroll when lightbox opens/closes
  useEffect(() => {
    if (currentImage) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [currentImage])

  // Function to open the lightbox
  const openLightbox = (image: GalleryImage) => {
    setCurrentImage(image)
  }

  // Function to close the lightbox
  const closeLightbox = () => {
    setCurrentImage(null)
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
            <div className="fixed inset-0 z-50 touch-none">
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeLightbox} />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="relative w-full max-w-4xl">
                  <div className="relative w-full h-[70vh] md:h-[80vh]">
                    <Image
                      src={currentImage.src || "/placeholder.svg"}
                      alt={currentImage.alt}
                      fill
                      className="object-contain"
                      priority
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white rounded-full h-10 w-10 shadow-md z-20"
                      onClick={(e) => {
                        e.stopPropagation()
                        closeLightbox()
                      }}
                      aria-label="Close"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

