import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Users, Download } from "lucide-react"

export default function EventsPage() {
  const years = ["2025", "2024", "2023", "2022"]

  const events = [
    {
      id: 1,
      title: "Cybersecurity Awareness Workshop",
      date: "November 15, 2023",
      venue: "VPASC Auditorium",
      description:
        "A comprehensive workshop covering the basics of cybersecurity, password management, and safe browsing practices for students.",
      image: "/placeholder.svg?height=300&width=500",
      year: "2023",
      report: "#",
    },
    {
      id: 2,
      title: "Seminar at Sharda Academy",
      date: "October 5, 2023",
      venue: "Sharda Academy",
      description:
        "An interactive seminar on ethical hacking principles and practices, featuring demonstrations by industry experts.",
      image: "/placeholder.svg?height=300&width=500",
      year: "2023",
      report: "#",
    },
    {
      id: 3,
      title: "Digital Privacy Camp",
      date: "August 20, 2023",
      venue: "VPASC Campus",
      description:
        "A two-day camp focused on digital privacy tools, encryption basics, and protecting personal information online.",
      image: "/placeholder.svg?height=300&width=500",
      year: "2023",
      report: "#",
    },
    {
      id: 4,
      title: "Cyber Safety for Parents",
      date: "December 10, 2022",
      venue: "Community Center",
      description:
        "A workshop designed specifically for parents to understand online risks for children and how to ensure their safety.",
      image: "/placeholder.svg?height=300&width=500",
      year: "2022",
      report: "#",
    },
    {
      id: 5,
      title: "Cybersecurity Hackathon",
      date: "October 15, 2022",
      venue: "VPASC Tech Lab",
      description: "A 24-hour hackathon where participants worked on solving real-world cybersecurity challenges.",
      image: "/placeholder.svg?height=300&width=500",
      year: "2022",
      report: "#",
    },
    {
      id: 6,
      title: "Data Protection Seminar",
      date: "September 5, 2021",
      venue: "Virtual Event",
      description:
        "An online seminar covering data protection regulations, best practices for organizations, and individual rights.",
      image: "/placeholder.svg?height=300&width=500",
      year: "2021",
      report: "#",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-700 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Events & Activities</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore our past cybersecurity events, workshops, and activities that have helped thousands learn about
            digital safety.
          </p>
        </div>
      </section>

      {/* Events Filter & Listing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="2023" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                {years.map((year) => (
                  <TabsTrigger key={year} value={year}>
                    {year}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {years.map((year) => (
              <TabsContent key={year} value={year}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {events
                    .filter((event) => event.year === year)
                    .map((event) => (
                      <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="aspect-video relative">
                          <Image
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center text-gray-600">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <MapPin className="h-4 w-4 mr-2" />
                              <span>{event.venue}</span>
                            </div>
                          </div>
                          <p className="text-gray-700 mb-4">{event.description}</p>
                          <div className="flex justify-between items-center">
                            <Button asChild variant="outline" size="sm">
                              <Link href={`/events/${event.id}`}>View Details</Link>
                            </Button>
                            <Button asChild variant="ghost" size="sm">
                              <Link href={event.report}>
                                <Download className="h-4 w-4 mr-1" /> Report
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
                {events.filter((event) => event.year === year).length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No events found for {year}.</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Upcoming Events</h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="aspect-square relative rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Upcoming Event"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-2">Annual Cybersecurity Conference 2024</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>January 20-21, 2024</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>VPASC Main Auditorium</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>Expected Participants: 500+</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">
                    Join us for our annual cybersecurity conference featuring keynote speakers from the industry,
                    hands-on workshops, panel discussions, and networking opportunities. This year's theme is "Securing
                    the Digital Future."
                  </p>
                  <Button>Register Now</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
