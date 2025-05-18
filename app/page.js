import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Calendar, BookOpen, ImageIcon, ArrowRight } from "lucide-react"
import NewsletterSignup from "@/components/newsletter-signup"
import ImpactCounter from "@/components/impact-counter"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20 md:py-28">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Securing the Digital Future</h1>
            <p className="text-xl text-blue-100 mb-8">
              Empowering students, teachers, and communities with cybersecurity awareness and education.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/events">Explore Events</Link>
              </Button>
              <Button asChild size="lg" variant="primary" className="bg-blue-500 hover:bg-blue-600 text-white">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-full opacity-10">
          <div className="w-full h-full bg-[url('/placeholder.svg?height=600&width=800')] bg-no-repeat bg-right-bottom bg-contain"></div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">About Cyber Suraksha</h2>
              <p className="text-lg text-gray-700 mb-6">
                VPASC Cyber Suraksha is an initiative dedicated to promoting cybersecurity awareness and digital
                literacy across educational institutions. We conduct workshops, seminars, and hands-on training sessions
                to equip students and teachers with the knowledge to stay safe online.
              </p>
              <Button asChild variant="primary" className="group">
                <Link href="/about" className="flex items-center">
                  About Us <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Cyber Security Workshop"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Our Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-3 rounded-full mb-4">
                    <Calendar className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Events & Activities</h3>
                  <p className="text-gray-600 mb-4">
                    Discover our past and upcoming cybersecurity events and workshops.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/events">View Events</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-green-100 p-3 rounded-full mb-4">
                    <BookOpen className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Blog & Resources</h3>
                  <p className="text-gray-600 mb-4">
                    Read our latest articles on cybersecurity tips and best practices.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/blog">Read Blog</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-purple-100 p-3 rounded-full mb-4">
                    <ImageIcon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Photo Gallery</h3>
                  <p className="text-gray-600 mb-4">Browse through photos from our past events and activities.</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/gallery">View Gallery</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-red-100 p-3 rounded-full mb-4">
                    <Shield className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Get Involved</h3>
                  <p className="text-gray-600 mb-4">Learn how you can participate in our cybersecurity initiatives.</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 md:py-24 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ImpactCounter number={50} label="Events Conducted" />
            <ImpactCounter number={5000} label="Students Reached" />
            <ImpactCounter number={25} label="Partner Institutions" />
            <ImpactCounter number={100} label="Workshops" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=100&width=100`}
                          alt="Testimonial"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">Student Name</h4>
                        <p className="text-sm text-gray-500">College Name</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      "The cybersecurity workshop was eye-opening. I learned so much about protecting my online presence
                      and digital footprint. Highly recommended!"
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-lg text-gray-700 mb-8">
              Subscribe to our newsletter to receive updates on upcoming events, latest blogs, and cybersecurity tips.
            </p>
            <NewsletterSignup />
          </div>
        </div>
      </section>
    </div>
  )
}
