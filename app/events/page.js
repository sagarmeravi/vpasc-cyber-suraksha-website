import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Users, Download, Flag } from "lucide-react"

export default function EventsPage() {
  const years = ["2025", "2024", "2023", "2022"]

  const events = [
    //2025
    {
      id: 0,
      title: "Impact Activity on Guru Purnima",
      date: "July 10, 2025",
      venue: "VPASC Campus",
      description:
        "We celebrated Guru Purnima by making a photo point where teachers were greeted & invited to take a photo with their students.",
      image: "/placeholder.svg?height=300&width=500",
      year: "2025",
      report: "#",
    },
    {
      id: 0,
      title: "Introduction & Training Program",
      date: "July 8, 2025",
      venue: "VPASC Auditorium",
      description:
        "Training program for the new team of Cyber Warriors.",
      image: "/placeholder.svg?height=300&width=500",
      year: "2025",
      report: "#",
    },
    {
      id: 0,
      title: "Cyber Wari",
      date: "June 26, 2025",
      venue: "Palkhi Mahamargh, Baramati",
      description:
        "Took part in the Palkhi and informed the Warkaris about the world of Cyber Security.",
      image: "/placeholder.svg?height=300&width=500",
      year: "2025",
      report: "#",
    },

    //2024
    {
      id: 0,
      title: "Mass Activity at Textile Park",
      date: "placeholder, 2024",
      venue: "High-Tech Textile Park, Baramati",
      description:
        "On the occasion of Ganesh Chaturthi, we visited the High-Tech Textile Park & informed the rural women about Cyber Security.",
      image: "/placeholder.svg?height=300&width=500",
      year: "2024",
      report: "#",
    },
    {
      id: 0,
      title: "Mass Activity at Subhadra Mall",
      date: "placeholder, 2024",
      venue: "Subhadra Mall, Baramati",
      description:
        "We organized a Pathnatya(street act) to inform the general population about Cyber Security through an engaging & educational performance.",
      image: "/placeholder.svg?height=300&width=500",
      year: "2024",
      report: "#",
    },
    {
      id: 0,
      title: "Special Activity in Vidya Pratishthan's Hostels",
      date: "placeholder, 2024",
      venue: "Vidya Pratishthan's Hostels, Baramati",
      description:
        "We organized a Street play to inform the young students about Cyber Security.",
      image: "/placeholder.svg?height=300&width=500",
      year: "2024",
      report: "#",
    },
    {
      id: 0,
      title: "Impact Activity on Cyber Awareness Day",
      date: "placeholder, 2024",
      venue: "VPASC campus",
      description:
        "We celebrated Cyber Awareness Day by empowering our security guards with essential cyber awareness skills. Together, we our defenses of both worlds.",
      image: "/placeholder.svg?height=300&width=500",
      year: "2024",
      report: "#",
    },
    {
      id: 0,
      title: "Impact Activity on Guru Purnima",
      date: "placeholder, 2024",
      venue: "VPASC campus",
      description:
        "We celebrated Guru Purnima by empowering minds with essential Cyber Security knowledge. Together, we build a safer digital future.",
      image: "/placeholder.svg?height=300&width=500",
      year: "2024",
      report: "#",
    },
    {
      id: 0,
      title: "Impact Activity at Phaltan Sakhar-Karkhana",
      date: "placeholder, 2024",
      venue: "Shri Dutt India Pvt. Ltd. Sugar Factory, Phaltan",
      description:
        "We visited the Sugar Factory to inform the workers about Cyber Security.",
      image: "/placeholder.svg?height=300&width=500",
      year: "2024",
      report: "#",
    },
    {
      id: 0,
      title: "Impact Activity in Suryanagri Mandai",
      date: "placeholder, 2024",
      venue: "Baramati",
      description:
        "We visited the local vegetable market to inform the farmers, vendors & shoppers about Cyber Security.",
      image: "/placeholder.svg?height=300&width=500",
      year: "2024",
      report: "#",
    },
    
    {
      id: 0,
      title: "Impact Activity at Bori",
      date: "placeholder, 2024",
      venue: "Baramati",
      description:
        "We visited Bori to inform the villagers about Cyber Security.",
      image: "/placeholder.svg?height=300&width=500",
      year: "2024",
      report: "#",
    },
    {
      id: 0,
      title: "Cyber Dindi",
      date: "placeholder, 2024",
      venue: "Baramati",
      description:
        "We organized a play to inform the Warkaris about Cyber Security.",
      image: "/placeholder.svg?height=300&width=500",
      year: "2024",
      report: "#",
    },
    {
      id: 0,
      title: "Cyber Wari",
      date: "placeholder, 2024",
      venue: "Baramati",
      description:
        "Took part in the Palkhi and informed the Warkaris about the world of Cyber Security.",
      image: "/placeholder.svg?height=300&width=500",
      year: "2024",
      report: "#",
    },
    {
      id: 0,
      title: "Introduction & Training Program",
      date: "placeholder, 2024",
      venue: "VPASC Auditorium",
      description:
        "Training program for the new team of Cyber Warriors.",
      image: "/placeholder.svg?height=300&width=500",
      year: "2024",
      report: "#",
    },

    //2023
    {
      id: 0,
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
      id: 0,
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
      id: 0,
      title: "Digital Privacy Camp",
      date: "August 20, 2023",
      venue: "VPASC Campus",
      description:
        "A two-day camp focused on digital privacy tools, encryption basics, and protecting personal information online.",
      image: "/placeholder.svg?height=300&width=500",
      year: "2023",
      report: "#",
    },

    //2022
    {
      id: 0,
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
      id: 0,
      title: "Cybersecurity Hackathon",
      date: "October 15, 2022",
      venue: "VPASC Tech Lab",
      description: 
        "A 24-hour hackathon where participants worked on solving real-world cybersecurity  challenges.",
      image: "/placeholder.svg?height=300&width=500",
      year: "2022",
      report: "#",
    },
    {
      id: 0,
      title: "Data Protection Seminar",
      date: "September 5, 2022",
      venue: "Virtual Event",
      description:
        "An online seminar covering data protection regulations, best practices for organizations, and individual rights.",
      image: "/placeholder.svg?height=300&width=500",
      year: "2022",
      report: "#",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 py-16 md:py-11">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Events & Activities</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore our past cybersecurity events, workshops & activities that have helped thousands learn about digital safety.
          </p>
        </div>
      </section>

      {/* Events Filter & Listing */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="2025" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                {years.map((year) => (
                  <TabsTrigger key={year} value={year} className="bg-blue-600 hover:bg-orange-500 focus:bg-orange-500 text-white">
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
                              <Link href={`/events/${event.id}`} className="bg-blue-600 hover:bg-orange-500 text-white">View Details</Link>
                            </Button>
                            {/* <Button asChild variant="ghost" size="sm">
                              <Link href={event.report}>
                                <Download className="h-4 w-4 mr-1"/> Report
                              </Link>
                            </Button> */}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
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
                  <h3 className="text-2xl font-bold mb-2">Mass Activity on Krishna Janmasthmi</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>August 16, 2025</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>TBD</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      {/* <Flag className="h-4 w-4 mr-2" /> */}
                      {/* <span>Expected Participants: 500+</span> */}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">
                    Join us in our Dahihandi event & spread the word of cybersecurity.
                  </p>
                  <Button className="text-white bg-blue-600 hover:bg-orange-500">Learn More</Button>
                </div>
              </div>
            </CardContent>
          </Card>

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
                  <h3 className="text-2xl font-bold mb-2">Mass Activity on Ganesh Chaturthi</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>October 27 - September 10, 2025</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>TBD</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      {/* <Flag className="h-4 w-4 mr-2" /> */}
                      {/* <span>Expected Participants: 500+</span> */}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">
                    Join us as we celebrate the auspicious festival of Ganesh Chaturthi & inform our fellow Bappa bhakts about the cyberworld.
                  </p>
                  <Button className="text-white bg-blue-600 hover:bg-orange-500">Learn More</Button>
                </div> 
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
