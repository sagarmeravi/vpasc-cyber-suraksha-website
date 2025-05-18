import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GalleryContent from "@/components/gallery/gallery-content"

export default function GalleryPage() {
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
              <GalleryContent year="2023" />
            </TabsContent>

            <TabsContent value="2022">
              <GalleryContent year="2022" />
            </TabsContent>

            <TabsContent value="2021">
              <GalleryContent year="2021" />
            </TabsContent>

            <TabsContent value="2020">
              <GalleryContent year="2020" />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
