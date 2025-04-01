"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Users, Heart, Globe } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function AboutSection() {
  const features = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Community Support",
      description: "Resources for Nepali immigrants and students",
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Cultural Preservation",
      description: "Celebrating Nepali traditions and festivals",
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Cultural Exchange",
      description: "Connecting Nepali and Canadian communities",
    },
  ]

  return (
    <section id="about" className="section-padding bg-secondary/30 dark:bg-secondary/10 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true, amount: 0.05 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h2 className="heading-lg">
                About <span className="text-gradient">Our Community</span>
              </h2>
              <p className="paragraph">
                The Nepali Community of Belleville is a vibrant group of individuals and families who share a
                deep-rooted connection to Nepal while embracing life in Belleville, Ontario.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="heading-sm">Our Mission</h3>
              <p className="paragraph">
                We create a welcoming environment for Nepali residents by fostering community and cultural identity,
                promoting cultural exchange, and providing support for newcomers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-background rounded-lg p-4 shadow-sm h-full">
                  <div className="mb-3">{feature.icon}</div>
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button asChild className="rounded-full">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true, amount: 0.05 }}
            className="h-[500px]"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://raw.githubusercontent.com/azure069/Comm-Web/main/images/Group_photo.jpeg"
                alt="Nepali Community of Belleville"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Our Growing Family</h3>
                <p className="text-sm text-white/80">Join our community and be part of our journey.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

