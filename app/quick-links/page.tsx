import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"
import { QuickLinksSection } from "@/components/quick-links-section"

export default function QuickLinksPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="pt-20">
        <QuickLinksSection />
      </div>
      <Footer />
      <ScrollToTopButton />
    </main>
  )
}

