"use client"

import { useState, useEffect, useRef } from "react"

export default function ImpactCounter({ number, label }) {
  const [count, setCount] = useState(0)
  const counterRef = useRef(null)
  const countedRef = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !countedRef.current) {
          countedRef.current = true
          let start = 0
          const duration = 2000 // 2 seconds
          const step = Math.ceil(number / (duration / 16)) // 16ms per frame (approx 60fps)

          const timer = setInterval(() => {
            start += step
            if (start > number) {
              setCount(number)
              clearInterval(timer)
            } else {
              setCount(start)
            }
          }, 16)
        }
      },
      { threshold: 0.1 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [number])

  return (
    <div ref={counterRef} className="text-center">
      <div className="text-4xl md:text-5xl font-bold mb-2">{count.toLocaleString()}</div>
      <p className="text-blue-100">{label}</p>
    </div>
  )
}
