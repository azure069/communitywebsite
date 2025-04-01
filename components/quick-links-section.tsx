"use client"

import type React from "react"

import { useRef } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ExternalLink,
  Mail,
  Phone,
  Calendar,
  Users,
  Heart,
  FileText,
  MapPin,
  Facebook,
  Instagram,
  Globe,
  BookOpen,
  GraduationCap,
  Briefcase,
  Home,
  FileCheck,
  Stethoscope,
} from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"

interface QuickLink {
  title: string
  description: string
  icon: React.ReactNode
  url: string
  isExternal?: boolean
}

export function QuickLinksSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])

  const communityLinks: QuickLink[] = [
    {
      title: "About Us",
      description: "Learn about our mission, vision, and community activities",
      icon: <Users className="h-6 w-6 text-primary" />,
      url: "/about",
    },
    {
      title: "Events",
      description: "Upcoming community events and celebrations",
      icon: <Calendar className="h-6 w-6 text-primary" />,
      url: "/events",
    },
    {
      title: "Gallery",
      description: "Photos from our community gatherings and events",
      icon: <FileText className="h-6 w-6 text-primary" />,
      url: "/gallery",
    },
    {
      title: "Support Us",
      description: "Ways to contribute to our community initiatives",
      icon: <Heart className="h-6 w-6 text-primary" />,
      url: "/support",
    },
  ]

  const contactLinks: QuickLink[] = [
    {
      title: "Email",
      description: "nepalicommunityofbelleville@gmail.com",
      icon: <Mail className="h-6 w-6 text-primary" />,
      url: "mailto:nepalicommunityofbelleville@gmail.com",
      isExternal: true,
    },
    {
      title: "Phone",
      description: "+1 (613) 848-5968",
      icon: <Phone className="h-6 w-6 text-primary" />,
      url: "tel:+16138485968",
      isExternal: true,
    },
    {
      title: "Location",
      description: "Belleville, Ontario, Canada",
      icon: <MapPin className="h-6 w-6 text-primary" />,
      url: "https://maps.google.com/?q=Belleville,Ontario,Canada",
      isExternal: true,
    },
    {
      title: "Contact Form",
      description: "Send us a message through our contact form",
      icon: <Mail className="h-6 w-6 text-primary" />,
      url: "/contact",
    },
  ]

  const socialLinks: QuickLink[] = [
    {
      title: "Facebook",
      description: "Follow us on Facebook for updates and announcements",
      icon: <Facebook className="h-6 w-6 text-primary" />,
      url: "https://www.facebook.com/share/1K7LLKYv8r/?mibextid=wwXIfr",
      isExternal: true,
    },
    {
      title: "Instagram",
      description: "Follow our Instagram page for photos and stories",
      icon: <Instagram className="h-6 w-6 text-primary" />,
      url: "https://www.instagram.com/nepalicommunityofbelleville",
      isExternal: true,
    },
  ]

  const governmentLinks: QuickLink[] = [
    {
      title: "Nepal Embassy in Canada",
      description: "Official website of the Embassy of Nepal in Canada",
      icon: <Globe className="h-6 w-6 text-primary" />,
      url: "https://ca.nepalembassy.gov.np/",
      isExternal: true,
    },
    {
      title: "City of Belleville",
      description: "Official website of the City of Belleville",
      icon: <Globe className="h-6 w-6 text-primary" />,
      url: "https://www.belleville.ca/",
      isExternal: true,
    },
    {
      title: "Immigration Canada",
      description: "Official immigration and citizenship information",
      icon: <FileCheck className="h-6 w-6 text-primary" />,
      url: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
      isExternal: true,
    },
    {
      title: "Service Ontario",
      description: "Provincial government services for Ontario residents",
      icon: <Globe className="h-6 w-6 text-primary" />,
      url: "https://www.ontario.ca/page/serviceontario",
      isExternal: true,
    },
  ]

  const immigrationLinks: QuickLink[] = [
    {
      title: "Settlement.Org",
      description: "Resources for newcomers settling in Ontario",
      icon: <Home className="h-6 w-6 text-primary" />,
      url: "https://settlement.org/",
      isExternal: true,
    },
    {
      title: "IRCC Processing Times",
      description: "Check application processing times for immigration services",
      icon: <FileCheck className="h-6 w-6 text-primary" />,
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html",
      isExternal: true,
    },
    {
      title: "Quinte Immigration Services",
      description: "Local immigration support services in the Quinte region",
      icon: <Users className="h-6 w-6 text-primary" />,
      url: "https://www.quinteimmigration.ca/",
      isExternal: true,
    },
    {
      title: "Newcomer Information Centre",
      description: "Resources and information for newcomers to Belleville",
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      url: "https://www.quis-immigration.org/",
      isExternal: true,
    },
  ]

  const educationEmploymentLinks: QuickLink[] = [
    {
      title: "Loyalist College",
      description: "Local college offering various programs for international students",
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      url: "https://www.loyalistcollege.com/",
      isExternal: true,
    },
    {
      title: "Job Bank Canada",
      description: "Search for jobs and explore careers in Canada",
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      url: "https://www.jobbank.gc.ca/",
      isExternal: true,
    },
    {
      title: "Credential Assessment",
      description: "Get your international credentials assessed for Canadian equivalency",
      icon: <FileCheck className="h-6 w-6 text-primary" />,
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/prepare-life-canada/prepare-work/credential-assessment.html",
      isExternal: true,
    },
    {
      title: "Employment Ontario",
      description: "Employment and training services in Ontario",
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      url: "https://www.ontario.ca/page/employment-ontario",
      isExternal: true,
    },
  ]

  const healthServicesLinks: QuickLink[] = [
    {
      title: "Ontario Health Insurance",
      description: "Information about OHIP coverage and eligibility",
      icon: <Stethoscope className="h-6 w-6 text-primary" />,
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      isExternal: true,
    },
    {
      title: "Quinte Health Care",
      description: "Local healthcare services in the Quinte region",
      icon: <Stethoscope className="h-6 w-6 text-primary" />,
      url: "https://www.qhc.on.ca/",
      isExternal: true,
    },
    {
      title: "Find a Doctor",
      description: "Search for doctors accepting new patients in Ontario",
      icon: <Stethoscope className="h-6 w-6 text-primary" />,
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      isExternal: true,
    },
    {
      title: "Mental Health Resources",
      description: "Mental health support services for newcomers to Canada",
      icon: <Heart className="h-6 w-6 text-primary" />,
      url: "https://www.cicscanada.com/en/content/130/newcomer-mental-health-services",
      isExternal: true,
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-b from-background to-secondary/10 dark:from-background dark:to-secondary/5"
        style={{ y: backgroundY }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Quick Links</h1>
          <p className="text-lg text-muted-foreground">
            Find all the important links and resources for our community in one place.
          </p>
        </ScrollReveal>

        <div className="space-y-16">
          {/* Community Links */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Community</h2>
            <StaggerContainer
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              delay={0.1}
              staggerDelay={0.1}
            >
              {communityLinks.map((link, index) => (
                <LinkCard key={index} link={link} />
              ))}
            </StaggerContainer>
          </div>

          {/* Contact Links */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <StaggerContainer
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              delay={0.1}
              staggerDelay={0.1}
            >
              {contactLinks.map((link, index) => (
                <LinkCard key={index} link={link} />
              ))}
            </StaggerContainer>
          </div>

          {/* Government & Official Resources */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Government & Official Resources</h2>
            <StaggerContainer
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              delay={0.1}
              staggerDelay={0.1}
            >
              {governmentLinks.map((link, index) => (
                <LinkCard key={index} link={link} />
              ))}
            </StaggerContainer>
          </div>

          {/* Immigration & Settlement */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Immigration & Settlement</h2>
            <StaggerContainer
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              delay={0.1}
              staggerDelay={0.1}
            >
              {immigrationLinks.map((link, index) => (
                <LinkCard key={index} link={link} />
              ))}
            </StaggerContainer>
          </div>

          {/* Education & Employment */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Education & Employment</h2>
            <StaggerContainer
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              delay={0.1}
              staggerDelay={0.1}
            >
              {educationEmploymentLinks.map((link, index) => (
                <LinkCard key={index} link={link} />
              ))}
            </StaggerContainer>
          </div>

          {/* Health Services */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Health Services</h2>
            <StaggerContainer
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              delay={0.1}
              staggerDelay={0.1}
            >
              {healthServicesLinks.map((link, index) => (
                <LinkCard key={index} link={link} />
              ))}
            </StaggerContainer>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Social Media</h2>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6" delay={0.1} staggerDelay={0.1}>
              {socialLinks.map((link, index) => (
                <LinkCard key={index} link={link} />
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}

function LinkCard({ link }: { link: QuickLink }) {
  return (
    <StaggerItem direction="up">
      <Card className="h-full hover:shadow-md transition-shadow">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-full">{link.icon}</div>
            <CardTitle className="text-xl">{link.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base mb-4">
            {link.title === "Email" ? <span className="break-all">{link.description}</span> : link.description}
          </CardDescription>
          {link.isExternal ? (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center"
            >
              Visit <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          ) : (
            <Link href={link.url} className="text-primary hover:underline">
              View
            </Link>
          )}
        </CardContent>
      </Card>
    </StaggerItem>
  )
}

