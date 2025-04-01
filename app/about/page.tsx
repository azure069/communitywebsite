import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"
import { FullAboutSection } from "@/components/full-about-section"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="pt-20">
        <FullAboutSection />
      </div>
      <Footer />
      <ScrollToTopButton />
    </main>
  )
}

