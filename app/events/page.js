import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin} from "lucide-react"
import { events } from "@/lib/eventData"

export default function EventsPage() {
  const years = ["2025", "2024", "2023"]
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
