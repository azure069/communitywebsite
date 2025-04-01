import { Navbar } from "@/components/navbar"
import { GallerySection } from "@/components/gallery-section"
import { Footer } from "@/components/footer"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"

export default function GalleryPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="pt-20">
        <GallerySection />
      </div>
      <Footer />
      <ScrollToTopButton />
    </main>
  )
}

