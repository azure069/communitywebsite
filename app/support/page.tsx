import { Navbar } from "@/components/navbar"
import { SupportSection } from "@/components/support-section"
import { Footer } from "@/components/footer"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"

export default function SupportPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="pt-20">
        <SupportSection />
      </div>
      <Footer />
      <ScrollToTopButton />
    </main>
  )
}

