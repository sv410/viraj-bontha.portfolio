"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface Card3DProps {
  children: ReactNode
  className?: string
  intensity?: number
}

export function Card3D({ children, className, intensity = 10 }: Card3DProps) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / (rect.height / 2)) * intensity
    const rotateY = ((centerX - x) / (rect.width / 2)) * intensity

    setRotate({ x: rotateX, y: rotateY })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotate({ x: 0, y: 0 })
  }

  return (
    <div
      ref={cardRef}
      className={cn("card-3d relative", className)}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
          : "perspective(1000px) rotateX(0) rotateY(0)",
        transition: isHovered ? "transform 0.1s ease" : "transform 0.5s ease",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-3d-content relative z-10">{children}</div>
    </div>
  )
}
