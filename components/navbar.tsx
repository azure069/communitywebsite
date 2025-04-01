"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"

const domain = "https://www.nepalicommunityofbelleville.ca"

const navLinks = [
  { href: `${domain}/`, label: "Home" },
  { href: `${domain}/about`, label: "About" },
  { href: `${domain}/events`, label: "Events" },
  { href: `${domain}/gallery`, label: "Gallery" },
  { href: `${domain}/community`, label: "Community" },
  { href: `${domain}/support`, label: "Support" },
  { href: `${domain}/contact`, label: "Contact" },
  { href: `${domain}/quick-links`, label: "Quick Links" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMobileMenuOpen])

  const closeMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm py-4"
            : pathname === "/" || pathname === `${domain}/`
              ? "bg-transparent py-6"
              : "bg-background/95 backdrop-blur-md shadow-sm py-4",
        )}
      >
        <div className="container-custom flex items-center justify-between">
          <a href={domain} className="flex items-center gap-2 z-[100]">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-primary">
              <Image
                src="https://raw.githubusercontent.com/azure069/Comm-Web/main/images/Logo_jpg.jpg"
                alt="Nepali Community Belleville Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span
              className={cn(
                "font-bold text-lg transition-colors hidden md:inline-block",
                isScrolled || isMobileMenuOpen || (pathname !== "/" && pathname !== `${domain}/`)
                  ? "text-foreground"
                  : "text-white",
              )}
            >
              Nepali Community of Belleville
            </span>
            <span
              className={cn(
                "font-bold text-lg transition-colors md:hidden",
                isScrolled || isMobileMenuOpen || (pathname !== "/" && pathname !== `${domain}/`)
                  ? "text-foreground"
                  : "text-white",
              )}
            >
              NCOB
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isScrolled || (pathname !== "/" && pathname !== `${domain}/`) ? "text-foreground" : "text-white",
                  (pathname === link.href || pathname === link.href.replace(domain, "")) &&
                    "text-primary font-semibold",
                )}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle
              variant={isScrolled || (pathname !== "/" && pathname !== `${domain}/`) ? "default" : "outline"}
            />
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-2 md:hidden z-[100]">
            <ThemeToggle
              variant={
                isScrolled || isMobileMenuOpen || (pathname !== "/" && pathname !== `${domain}/`)
                  ? "default"
                  : "outline"
              }
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className={cn(
                isScrolled || isMobileMenuOpen || (pathname !== "/" && pathname !== `${domain}/`)
                  ? "text-foreground"
                  : "text-white",
              )}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu - Separated from header for better positioning */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[90] md:hidden">
          <div className="flex items-center justify-center h-full">
            <nav className="flex flex-col items-center justify-center gap-8 p-8 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-white text-2xl font-medium hover:text-primary transition-colors",
                    (pathname === link.href || pathname === link.href.replace(domain, "")) &&
                      "text-primary font-semibold",
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

