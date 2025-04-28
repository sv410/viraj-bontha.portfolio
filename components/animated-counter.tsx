"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps {
  end: number
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
  decimals?: number
}

export function AnimatedCounter({
  end,
  duration = 2000,
  className,
  prefix = "",
  suffix = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    // Reset when end value changes
    countRef.current = 0
    startTimeRef.current = null

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp
      }

      const progress = timestamp - startTimeRef.current
      const percentage = Math.min(progress / duration, 1)

      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4)

      countRef.current = easeOutQuart * end
      setCount(countRef.current)

      if (percentage < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration])

  // Format the number with commas and decimals
  const formattedCount = () => {
    const fixed = count.toFixed(decimals)
    const parts = fixed.split(".")
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    const decimalPart = parts.length > 1 ? `.${parts[1]}` : ""
    return `${prefix}${integerPart}${decimalPart}${suffix}`
  }

  return <span className={cn("font-mono", className)}>{formattedCount()}</span>
}
