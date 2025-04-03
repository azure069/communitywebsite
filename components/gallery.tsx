"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { AnimatePresence } from "framer-motion"
import { X, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GalleryImage {
  src: string
  alt: string
}

interface GalleryVideo {
  src: string
  title: string
}

export function Gallery() {
  const [currentImage, setCurrentImage] = useState<GalleryImage | null>(null)
  const [currentVideo, setCurrentVideo] = useState<GalleryVideo | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (currentImage || currentVideo) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [currentImage, currentVideo])

  const openLightbox = (image: GalleryImage) => {
    setCurrentImage(image)
  }

  const openVideoLightbox = (video: GalleryVideo) => {
    setCurrentVideo(video)
  }

  const closeLightbox = () => {
    setCurrentImage(null)
    setCurrentVideo(null)
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

  const video: GalleryVideo = {
    src: "https://www.dropbox.com/scl/fi/fyp811eadjrjww6d1btu7/Video.mp4?rlkey=xseg0a4rwxyrchbaup88ms9e3&raw=1",
    title: "Community Event Highlights",
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

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
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

        {/* Video Section */}
        <div className={cn("mb-12 transition-all duration-1000", inView ? "opacity-100" : "opacity-0 translate-y-10")}>
          <h3 className="text-2xl font-semibold mb-6 text-center">Community Video</h3>
          <div className="max-w-4xl mx-auto">
            <div
              className="relative aspect-video rounded-xl overflow-hidden cursor-pointer shadow-lg bg-black"
              onClick={() => openVideoLightbox(video)}
            >
              <div className="absolute inset-0 bg-black flex flex-col items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm p-5 rounded-full">
                  <Play className="h-10 w-10 text-white" />
                </div>
                <h4 className="mt-4 text-white text-xl font-semibold">{video.title}</h4>
                <p className="text-white/80 mt-2">Click to play video</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Lightbox */}
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

        {/* Video Lightbox */}
        <AnimatePresence>
          {currentVideo && (
            <div className="fixed inset-0 z-50 touch-none">
              <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={closeLightbox} />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="relative w-full max-w-5xl">
                  <div className="relative w-full aspect-video">
                    <video
                      ref={videoRef}
                      src={currentVideo.src}
                      className="w-full h-full rounded-lg"
                      controls
                      autoPlay
                      playsInline
                    >
                      Your browser does not support the video tag.
                    </video>
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

