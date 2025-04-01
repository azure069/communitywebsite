import { Navbar } from "@/components/navbar"
import { EventsSection } from "@/components/events-section"
import { Footer } from "@/components/footer"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"

export default function EventsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="pt-20">
        <EventsSection />
      </div>
      <Footer />
      <ScrollToTopButton />
    </main>
  )
}

