"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function About() {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { ref: contentRef, inView: contentInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24 bg-secondary/50 dark:bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={cn(
            "text-center mb-12 transition-all duration-1000",
            titleInView ? "opacity-100" : "opacity-0 translate-y-10",
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Nepali Community of Belleville, Canada</h3>
        </div>

        <div
          ref={contentRef}
          className={cn(
            "max-w-4xl mx-auto space-y-8 transition-all duration-1000 delay-300",
            contentInView ? "opacity-100" : "opacity-0 translate-y-10",
          )}
        >
          <p className="text-base md:text-lg">
            The Nepali Community of Belleville is a vibrant and growing group of individuals and families who share a
            deep-rooted connection to Nepal while embracing life in Belleville, Ontario. Our community is built on
            values of unity, cultural heritage, and mutual support, creating a welcoming space for Nepalese immigrants,
            students, and professionals.
          </p>

          <div>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-base md:text-lg">
              Our mission is to create a welcoming and inclusive environment for Nepali residents in Belleville by
              fostering a strong sense of community and cultural identity. We aim to promote cultural exchange, provide
              support for newcomers, and organize engaging events that celebrate Nepali heritage. By bringing people
              together through shared traditions, music, and experiences, we strive to strengthen the bonds within the
              Nepali diaspora and encourage meaningful connections with the broader Canadian society.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">What We Do</h3>
            <div className="space-y-4">
              <div>
                <p className="text-base md:text-lg">
                  <strong>Cultural Events & Heritage Promotion:</strong> We celebrate major Nepali festivals such as
                  Dashain, Tihar, Holi, and Nepali New Year, bringing together families and friends to share traditions,
                  music, and food. Our goal is to keep Nepali culture alive within the diaspora and introduce it to the
                  broader Canadian community.
                </p>
              </div>

              <div>
                <p className="text-base md:text-lg">
                  <strong>Community Support & Integration:</strong> Moving to a new country presents many challenges,
                  and we aim to make the transition smoother for new immigrants. Our Community Support Program provides
                  essential resources on housing, employment, healthcare, and education, ensuring newcomers can settle
                  comfortably in Belleville.
                </p>
              </div>

              <div>
                <p className="text-base md:text-lg">
                  <strong>Networking, Education & Career Growth:</strong> We actively create opportunities for
                  professionals, students, and entrepreneurs to network, share experiences, and grow within the
                  community.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center pt-6">
            <h3 className="text-xl font-semibold mb-4">Join Us!</h3>
            <p className="text-base md:text-lg mb-4">
              Whether you are a new immigrant, a student, or a long-time resident, we welcome you to be a part of the{" "}
              <br /> <strong>Nepali Community of Belleville</strong>. <br />
              Stay connected, celebrate our culture, and grow together in a supportive environment.
            </p>
            <p className="text-base md:text-lg mb-6">
              <strong>📍 Location:</strong> Belleville, Ontario, Canada
            </p>

            <Button asChild className="rounded-full">
              <Link href="#contact">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

