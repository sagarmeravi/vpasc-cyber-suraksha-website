"use client"

import GalleryLightbox from "./gallery-lightbox"

export default function GalleryAlbum({ albumId }) {
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
