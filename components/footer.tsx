"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Facebook, Instagram, Mail, Phone, ExternalLink } from "lucide-react"

export function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const domain = "https://www.nepalicommunityofbelleville.ca"

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: `${domain}/` },
        { label: "About Us", href: `${domain}/about` },
        { label: "Events", href: `${domain}/events` },
        { label: "Gallery", href: `${domain}/gallery` },
        { label: "Community", href: `${domain}/community` },
        { label: "Support Us", href: `${domain}/support` },
        { label: "Contact", href: `${domain}/contact` },
        { label: "Quick Links", href: `${domain}/quick-links` },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Nepal Embassy", href: "https://ca.nepalembassy.gov.np/", external: true },
        {
          label: "Immigration Canada",
          href: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
          external: true,
        },
        { label: "Settlement.Org", href: "https://settlement.org/", external: true },
        { label: "Quinte Immigration Services", href: "https://www.quinteimmigrationservices.ca/", external: true },
      ],
    },
    {
      title: "Community",
      links: [
        { label: "Upcoming Events", href: `${domain}/events` },
        { label: "Photo Gallery", href: `${domain}/gallery` },
        { label: "Make a Donation", href: `${domain}/support` },
        { label: "Join Our Community", href: `${domain}/contact` },
      ],
    },
  ]

  return (
    <footer ref={ref} className="bg-secondary/50 dark:bg-secondary/10 pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Nepali Community of Belleville</h3>
            <p className="text-sm text-muted-foreground">
              A vibrant community of Nepali individuals and families in Belleville, Ontario, celebrating our culture and
              building connections.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1K7LLKYv8r/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/nepalicommunityofbelleville"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:nepalicommunityofbelleville@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="tel:+16138485968"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links Columns */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                      >
                        {link.label} <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-border pt-6 text-center"
        >
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Nepali Community of Belleville. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

