import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EventsSection } from "@/components/events-section"
import { GallerySection } from "@/components/gallery-section"
import { CommunitySection } from "@/components/community-section"
import { SupportSection } from "@/components/support-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <GallerySection />
      <CommunitySection />
      <SupportSection />
      <ContactSection />
      <Footer />
      <ScrollToTopButton />
    </main>
  )
}

