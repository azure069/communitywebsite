"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GalleryImage {
  id: string
  src: string
  alt: string
  width: number
  height: number
}

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"])
  const galleryScale = useTransform(scrollYProgress, [0.1, 0.6], [0.8, 1])
  const galleryOpacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1])

  // Lock/unlock body scroll when lightbox opens/closes
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [selectedImage])

  // Function to open the lightbox
  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image)
  }

  // Function to close the lightbox
  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const galleryImages: GalleryImage[] = [
    {
      id: "image-1",
      src: "https://raw.githubusercontent.com/azure069/Comm-Web/main/images/Group_photo.jpeg",
      alt: "Community Group Photo",
      width: 4,
      height: 3,
    },
    {
      id: "image-2",
      src: "https://raw.githubusercontent.com/azure069/Comm-Web/main/images/1.jpg",
      alt: "Community Event 1",
      width: 3,
      height: 4,
    },
    {
      id: "image-3",
      src: "https://raw.githubusercontent.com/azure069/Comm-Web/main/images/3.jpg",
      alt: "Community Event 2",
      width: 4,
      height: 3,
    },
    {
      id: "image-4",
      src: "https://raw.githubusercontent.com/azure069/Comm-Web/main/images/Group_photo_1.jpg",
      alt: "Community Group Photo 2",
      width: 4,
      height: 3,
    },
  ]

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="section-padding bg-secondary/30 dark:bg-secondary/10 relative overflow-hidden"
    >
      {/* Subtle animated background */}
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-b from-secondary/30 to-secondary/10 dark:from-secondary/10 dark:to-secondary/5"
        style={{ y: backgroundY }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <h2 className="heading-lg">
            Our <span className="text-gradient">Gallery</span>
          </h2>
          <p className="paragraph">
            Glimpses of our community events, celebrations, and gatherings that showcase our vibrant culture and strong
            bonds.
          </p>
        </motion.div>

        <motion.div
          ref={galleryRef}
          style={{
            scale: galleryScale,
            opacity: galleryOpacity,
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openLightbox(image)}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <div className="fixed inset-0 z-50 touch-none">
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeLightbox} />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="relative w-full max-w-5xl">
                  <div className="relative w-full h-[70vh] md:h-[80vh]">
                    <Image
                      src={selectedImage.src || "/placeholder.svg"}
                      alt={selectedImage.alt}
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

