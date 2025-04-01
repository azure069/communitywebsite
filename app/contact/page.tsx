import { Navbar } from "@/components/navbar"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
      <ScrollToTopButton />
    </main>
  )
}

