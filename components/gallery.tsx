"use client"

import { useState } from "react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

interface GalleryImage {
  src: string
  alt: string
}

export function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState<GalleryImage | null>(null)

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

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

  const openLightbox = (image: GalleryImage) => {
    setCurrentImage(image)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = "auto"
  }

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
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && currentImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative w-full max-w-4xl max-h-[80vh] aspect-auto">
              <Image
                src={currentImage.src || "/placeholder.svg"}
                alt={currentImage.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

