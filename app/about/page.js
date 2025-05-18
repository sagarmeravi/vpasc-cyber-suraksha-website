import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Shivani Chede",
      role: "President",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sagar",
      role: "Secratary",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Mahesh Kandekar",
      role: "Media Director",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Vinaya Lakhe",
      role: "Activity Director",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const partners = [
    { name: "QuickHeal Foundation", logo: "/placeholder.svg?height=100&width=200" }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-700 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Learn about our mission to promote cybersecurity awareness and digital literacy across educational
            institutions.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Vision</h2>
              <p className="text-lg text-gray-700">
                To create a digitally literate and cyber-aware society where individuals can confidently navigate the
                online world while protecting themselves from cyber threats.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">VPASC Cyber Suraksha is committed to:</p>
              <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
                <li>Educating students, teachers, and communities about cybersecurity best practices</li>
                <li>Conducting hands-on workshops and training sessions on digital safety</li>
                <li>Creating awareness about emerging cyber threats and prevention measures</li>
                <li>Building a network of cyber-aware individuals who can further spread knowledge</li>
                <li>Collaborating with educational institutions to integrate cybersecurity into curriculum</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="text-center py-4">
                  <h3 className="font-semibold text-xl">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                VPASC Cyber Suraksha was Introduced in 2022 by Colaboration of QuickHeal Foundation
              </p>
              <p className="text-lg text-gray-700 mb-4">
                What started as small workshops in a few colleges has now grown into a comprehensive program reaching
                thousands of students across multiple institutions. Our team has expanded to include experts from
                various domains of cybersecurity, education, and digital media.
              </p>
              <p className="text-lg text-gray-700">
                Over the years, we have continuously evolved our approach and content to address the latest cyber
                threats and challenges, ensuring that our audience receives the most relevant and up-to-date
                information.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Our journey"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Collaborations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[2/1] relative">
                  <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
                </div>
                <p className="text-center mt-4 font-medium">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
