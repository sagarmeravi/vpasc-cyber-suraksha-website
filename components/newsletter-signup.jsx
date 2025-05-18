"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email) {
      setMessage({ type: "error", text: "Please enter your email address." })
      return
    }

    setIsLoading(true)
    setMessage(null)

    // Simulate API call
    setTimeout(() => {
      setMessage({ type: "success", text: "You've been subscribed to our newsletter." })
      setEmail("")
      setIsLoading(false)
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
          required
        />
        <Button type="submit" variant="primary" isLoading={isLoading} size="md">
          Subscribe
        </Button>
      </div>
      {message && (
        <p className={`text-sm ${message.type === "error" ? "text-red-500" : "text-green-500"}`}>{message.text}</p>
      )}
      <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
    </form>
  )
}
