import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-700 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Have questions or want to collaborate? Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                Fill out the form below and we'll get back to you as soon as possible. We're always looking for
                feedback, questions, and collaboration opportunities.
              </p>

              <ContactForm />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Email</h3>
                        <p className="text-gray-700">info@vpasccybersuraksha.org</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Phone</h3>
                        <p className="text-gray-700">+91 98765 43210</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Address</h3>
                        <p className="text-gray-700">
                          VPASC Campus, Main Building
                          <br />
                          123 College Road
                          <br />
                          City, State 123456
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
                        <Facebook className="h-5 w-5 text-blue-600" />
                      </a>
                      <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
                        <Twitter className="h-5 w-5 text-blue-400" />
                      </a>
                      <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
                        <Instagram className="h-5 w-5 text-pink-600" />
                      </a>
                      <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
                        <Linkedin className="h-5 w-5 text-blue-700" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>
          <div className="h-96 bg-gray-300 rounded-lg overflow-hidden">
            {/* In a real app, you would embed a Google Map here */}
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p className="text-gray-600">Google Map would be embedded here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
