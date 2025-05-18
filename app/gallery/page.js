import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GalleryLightbox from "@/components/gallery-lightbox"

export default function GalleryPage() {
  // This would normally be server-side data, but we're using client-side state for the lightbox
  // In a real app, you'd fetch this data server-side
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

            <TabsContent value="2023">
              <GalleryYear year="2023" />
            </TabsContent>

            <TabsContent value="2022">
              <GalleryYear year="2022" />
            </TabsContent>

            <TabsContent value="2021">
              <GalleryYear year="2021" />
            </TabsContent>

            <TabsContent value="2020">
              <GalleryYear year="2020" />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

function GalleryYear({ year }) {
  const albums = [
    {
      id: 1,
      title: "Cybersecurity Awareness Workshop",
      date: "November 15, 2023",
      cover: "/placeholder.svg?height=300&width=500",
      year: "2023",
    },
    {
      id: 2,
      title: "Ethical Hacking Seminar",
      date: "October 5, 2023",
      cover: "/placeholder.svg?height=300&width=500",
      year: "2023",
    },
    {
      id: 3,
      title: "Digital Privacy Camp",
      date: "August 20, 2023",
      cover: "/placeholder.svg?height=300&width=500",
      year: "2023",
    },
    {
      id: 4,
      title: "Cyber Safety for Parents",
      date: "December 10, 2022",
      cover: "/placeholder.svg?height=300&width=500",
      year: "2022",
    },
    {
      id: 5,
      title: "Cybersecurity Hackathon",
      date: "October 15, 2022",
      cover: "/placeholder.svg?height=300&width=500",
      year: "2022",
    },
    {
      id: 6,
      title: "Data Protection Seminar",
      date: "September 5, 2021",
      cover: "/placeholder.svg?height=300&width=500",
      year: "2021",
    },
  ]

  const filteredAlbums = albums.filter((album) => album.year === year)

  return (
    <div>
      {filteredAlbums.length > 0 ? (
        <div className="space-y-12">
          {filteredAlbums.map((album) => (
            <div key={album.id}>
              <h3 className="text-2xl font-bold mb-4">{album.title}</h3>
              <p className="text-gray-600 mb-6">{album.date}</p>
              <GalleryAlbum albumId={album.id} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">No photo albums found for {year}.</p>
        </div>
      )}
    </div>
  )
}

function GalleryAlbum({ albumId }) {
  // In a real app, you'd fetch these images based on the albumId
  const images = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    src: `/placeholder.svg?height=600&width=800`,
    alt: `Gallery image ${i + 1}`,
    width: 800,
    height: 600,
  }))

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <GalleryLightbox images={images} />
    </div>
  )
}
