"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [formMessage, setFormMessage] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormMessage({ type: "error", text: "Please fill in all required fields." })
      return
    }

    setIsLoading(true)
    setFormMessage(null)

    // Simulate API call
    setTimeout(() => {
      setFormMessage({ type: "success", text: "Message sent! We'll get back to you soon." })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setIsLoading(false)
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Input name="name" placeholder="Your Name *" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <Input
            type="email"
            name="email"
            placeholder="Your Email *"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
        </div>
        <div>
          <Textarea
            name="message"
            placeholder="Your Message *"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
          />
        </div>
      </div>
      {formMessage && (
        <p className={`text-sm ${formMessage.type === "error" ? "text-red-500" : "text-green-500"}`}>
          {formMessage.text}
        </p>
      )}
      <Button type="submit" isLoading={isLoading} size="lg" className="w-full">
        Send Message
      </Button>
    </form>
  )
}
