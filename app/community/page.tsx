import { Navbar } from "@/components/navbar"
import { CommunitySection } from "@/components/community-section"
import { Footer } from "@/components/footer"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"

export default function CommunityPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="pt-20">
        <CommunitySection />
      </div>
      <Footer />
      <ScrollToTopButton />
    </main>
  )
}

