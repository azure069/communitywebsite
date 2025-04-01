"use client"

import Image from "next/image"
import { Users, Heart, Globe, Calendar, BookOpen, Handshake } from "lucide-react"
import { motion } from "framer-motion"

export function FullAboutSection() {
  const activities = [
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Cultural Events",
      description:
        "We celebrate major Nepali festivals like Dashain, Tihar, and Nepali New Year with traditional food, music, and performances.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Community Support",
      description:
        "We provide resources on housing, employment, healthcare, and education to help newcomers settle comfortably in Belleville.",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Language & Culture",
      description:
        "We offer Nepali language classes for children and cultural workshops to preserve our heritage and traditions.",
    },
    {
      icon: <Handshake className="h-8 w-8 text-primary" />,
      title: "Networking",
      description:
        "We create opportunities for professionals, students, and entrepreneurs to connect and grow within the community.",
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Charity Initiatives",
      description:
        "We engage in fundraising activities to support causes in both Belleville and Nepal, including disaster relief efforts.",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Cultural Exchange",
      description:
        "We participate in multicultural events to share Nepali culture with the broader Belleville community.",
    },
  ]

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Our Community</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            The Nepali Community of Belleville is a vibrant and growing group of individuals and families who share a
            deep-rooted connection to Nepal while embracing life in Belleville, Ontario.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                Our mission is to create a welcoming and inclusive environment for Nepali residents in Belleville by
                fostering a strong sense of community and cultural identity. We aim to promote cultural exchange,
                provide support for newcomers, and organize engaging events that celebrate Nepali heritage. By bringing
                people together through shared traditions, music, and experiences, we strive to strengthen the bonds
                within the Nepali diaspora and encourage meaningful connections with the broader Canadian society.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                We envision a thriving Nepali community in Belleville that preserves its cultural heritage while fully
                integrating into Canadian society. We aspire to be a resource hub for Nepali immigrants, a cultural
                bridge between Nepal and Canada, and a supportive network that empowers our members to achieve their
                personal and professional goals.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="https://raw.githubusercontent.com/azure069/Comm-Web/main/images/Group_photo.jpeg"
              alt="Nepali Community of Belleville"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">What We Do</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Cultural Events & Heritage Promotion</h3>
              <p className="text-lg text-muted-foreground">
                We celebrate major Nepali festivals such as Dashain, Tihar, Holi, and Nepali New Year, bringing together
                families and friends to share traditions, music, and food. Our goal is to keep Nepali culture alive
                within the diaspora and introduce it to the broader Canadian community.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Community Support & Integration</h3>
              <p className="text-lg text-muted-foreground">
                Moving to a new country presents many challenges, and we aim to make the transition smoother for new
                immigrants. Our Community Support Program provides essential resources on housing, employment,
                healthcare, and education, ensuring newcomers can settle comfortably in Belleville.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Networking, Education & Career Growth</h3>
              <p className="text-lg text-muted-foreground">
                We actively create opportunities for professionals, students, and entrepreneurs to network, share
                experiences, and grow within the community. Through workshops, mentorship programs, and career fairs, we
                help our members achieve their professional goals and contribute to the local economy.
              </p>
            </div>
          </div>
        </motion.div>

        <h2 className="text-3xl font-bold mb-8 text-center">Our Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {activities.map((activity, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-md h-full">
              <div className="mb-4">{activity.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
              <p className="text-muted-foreground">{activity.description}</p>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6">Join Us!</h2>
          <p className="text-lg mb-4">
            Whether you are a new immigrant, a student, or a long-time resident, we welcome you to be a part of the{" "}
            <strong>Nepali Community of Belleville</strong>. <br />
            Stay connected, celebrate our culture, and grow together in a supportive environment.
          </p>
          <p className="text-lg mb-8">
            <strong>📍 Location:</strong> Belleville, Ontario, Canada
          </p>
        </motion.div>
      </div>
    </section>
  )
}

