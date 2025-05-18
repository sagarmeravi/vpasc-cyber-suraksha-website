"use client"

import GalleryAlbum from "./gallery-album"

export default function GalleryContent({ year }) {
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
