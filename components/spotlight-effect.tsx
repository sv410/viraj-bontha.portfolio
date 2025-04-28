"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface SpotlightProps {
  children: React.ReactNode
  className?: string
}

export function SpotlightEffect({ children, className }: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  useEffect(() => {
    // Add initial animation
    const timer = setTimeout(() => {
      setOpacity(0.8)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="spotlight absolute pointer-events-none"
        style={
          {
            "--x": `${position.x}px`,
            "--y": `${position.y}px`,
            opacity: opacity,
            transition: "opacity 0.3s ease",
          } as React.CSSProperties
        }
      />
      {children}
    </div>
  )
}
