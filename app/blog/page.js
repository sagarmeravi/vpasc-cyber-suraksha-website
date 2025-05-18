import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Cybersecurity Tips for Students",
      excerpt: "Learn the most important cybersecurity practices that every student should follow to stay safe online.",
      date: "December 5, 2023",
      author: "Dr. Jane Smith",
      category: "Cyber Safety Tips",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 2,
      title: "Understanding Phishing Attacks and How to Avoid Them",
      excerpt:
        "A comprehensive guide to recognizing phishing attempts and protecting yourself from these common cyber threats.",
      date: "November 20, 2023",
      author: "Prof. John Doe",
      category: "Digital Literacy",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 3,
      title: "The Importance of Strong Passwords in the Digital Age",
      excerpt:
        "Why password security matters more than ever and how to create and manage strong, unique passwords for all your accounts.",
      date: "October 15, 2023",
      author: "Sarah Johnson",
      category: "Cyber Safety Tips",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 4,
      title: "Social Media Privacy: What You Need to Know",
      excerpt:
        "Protect your personal information on social media platforms with these essential privacy settings and best practices.",
      date: "September 28, 2023",
      author: "Michael Chen",
      category: "Digital Literacy",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 5,
      title: "Cybersecurity for Remote Learning: Keeping Students Safe",
      excerpt:
        "Essential security measures for students and educators participating in online and remote learning environments.",
      date: "August 10, 2023",
      author: "Dr. Jane Smith",
      category: "Education",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 6,
      title: "The Rise of Ransomware: What You Should Know",
      excerpt:
        "Understanding the growing threat of ransomware attacks and how individuals and organizations can protect themselves.",
      date: "July 5, 2023",
      author: "Prof. John Doe",
      category: "News",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  const categories = ["All", "Cyber Safety Tips", "Digital Literacy", "Education", "News"]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-700 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Blog & Resources</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Stay informed with our latest articles, guides, and news on cybersecurity and digital safety.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="text-sm py-1 px-3 cursor-pointer"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-2">{post.category}</Badge>
                  <h3 className="text-xl font-bold mb-2">
                    <Link href={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm mb-3 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <Button asChild variant="outline">
                    <Link href={`/blog/${post.id}`}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-1">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-blue-50">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Cybersecurity Handbook</h3>
                <p className="text-gray-700 mb-4">
                  A comprehensive guide to personal cybersecurity, covering everything from password management to safe
                  browsing practices.
                </p>
                <Button asChild>
                  <Link href="#">Download PDF</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Digital Safety Checklist</h3>
                <p className="text-gray-700 mb-4">
                  A printable checklist for students and teachers to ensure they're following best practices for online
                  safety.
                </p>
                <Button asChild>
                  <Link href="#">Download PDF</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Cybersecurity Presentation</h3>
                <p className="text-gray-700 mb-4">
                  A ready-to-use presentation for educators to teach students about the basics of cybersecurity.
                </p>
                <Button asChild>
                  <Link href="#">Download PPT</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
