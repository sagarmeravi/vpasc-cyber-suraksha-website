"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export default function GalleryPage() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentImages, setCurrentImages] = useState([])

  // Sample data - in a real app, this would come from a database
  const galleryData = {
    2023: [
      {
        id: 1,
        title: "Cybersecurity Awareness Workshop",
        date: "November 15, 2023",
        images: Array.from({ length: 8 }, (_, i) => ({
          id: `2023-1-${i + 1}`,
          src: `/placeholder.svg?height=600&width=800`,
          alt: `Cybersecurity Awareness Workshop image ${i + 1}`,
        })),
      },
      {
        id: 2,
        title: "Ethical Hacking Seminar",
        date: "October 5, 2023",
        images: Array.from({ length: 6 }, (_, i) => ({
          id: `2023-2-${i + 1}`,
          src: `/placeholder.svg?height=600&width=800`,
          alt: `Ethical Hacking Seminar image ${i + 1}`,
        })),
      },
    ],
    2022: [
      {
        id: 3,
        title: "Cyber Safety for Parents",
        date: "December 10, 2022",
        images: Array.from({ length: 5 }, (_, i) => ({
          id: `2022-1-${i + 1}`,
          src: `/placeholder.svg?height=600&width=800`,
          alt: `Cyber Safety for Parents image ${i + 1}`,
        })),
      },
      {
        id: 4,
        title: "Cybersecurity Hackathon",
        date: "October 15, 2022",
        images: Array.from({ length: 7 }, (_, i) => ({
          id: `2022-2-${i + 1}`,
          src: `/placeholder.svg?height=600&width=800`,
          alt: `Cybersecurity Hackathon image ${i + 1}`,
        })),
      },
    ],
    2021: [
      {
        id: 5,
        title: "Data Protection Seminar",
        date: "September 5, 2021",
        images: Array.from({ length: 4 }, (_, i) => ({
          id: `2021-1-${i + 1}`,
          src: `/placeholder.svg?height=600&width=800`,
          alt: `Data Protection Seminar image ${i + 1}`,
        })),
      },
    ],
    2020: [],
  }

  const openLightbox = (images, index) => {
    setCurrentImages(images)
    setCurrentImageIndex(index)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
  }

  const goToPrevious = (e) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1))
  }

  const goToNext = (e) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev === currentImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-700 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Photo Gallery</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Browse through photos from our past cybersecurity events, workshops, and activities.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="2023" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="2023">2023</TabsTrigger>
                <TabsTrigger value="2022">2022</TabsTrigger>
                <TabsTrigger value="2021">2021</TabsTrigger>
                <TabsTrigger value="2020">2020</TabsTrigger>
              </TabsList>
            </div>

            {Object.keys(galleryData).map((year) => (
              <TabsContent key={year} value={year}>
                {galleryData[year].length > 0 ? (
                  <div className="space-y-12">
                    {galleryData[year].map((album) => (
                      <div key={album.id}>
                        <h3 className="text-2xl font-bold mb-4">{album.title}</h3>
                        <p className="text-gray-600 mb-6">{album.date}</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          {album.images.map((image, index) => (
                            <div
                              key={image.id}
                              className="aspect-square relative overflow-hidden rounded-md cursor-pointer hover:opacity-90 transition-opacity shadow-sm hover:shadow-md"
                              onClick={() => openLightbox(album.images, index)}
                            >
                              <Image
                                src={image.src || "/placeholder.svg"}
                                alt={image.alt}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No photo albums found for {year}.</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={isLightboxOpen} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-4xl p-0 bg-black/90">
          <div className="relative h-[80vh] flex items-center justify-center">
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-10 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="h-5 w-5" />
            </Button>

            {/* Navigation buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 z-10 text-white hover:bg-white/20"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 z-10 text-white hover:bg-white/20"
              onClick={goToNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Current image */}
            {currentImages[currentImageIndex] && (
              <div className="relative w-full h-full">
                <Image
                  src={currentImages[currentImageIndex].src || "/placeholder.svg"}
                  alt={currentImages[currentImageIndex].alt}
                  fill
                  className="object-contain"
                />
              </div>
            )}

            {/* Image counter */}
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              {currentImageIndex + 1} / {currentImages.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
