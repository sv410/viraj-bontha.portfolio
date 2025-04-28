"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProfileImageProps {
  src: string
  alt: string
  className?: string
  size?: number
}

export function ProfileImage({ src, alt, className, size = 320 }: ProfileImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        "relative rounded-full overflow-hidden border-4 border-highlight/20 shadow-lg shadow-highlight/10 transition-all duration-500",
        isHovered && "scale-[1.03] border-highlight/30",
        className,
      )}
      style={{ width: size, height: size }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-navy-light rounded-full flex items-center justify-center">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className={cn(
            "object-cover transition-all duration-700",
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-110",
          )}
          priority
          onLoadingComplete={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-navy/40 to-transparent mix-blend-overlay"></div>
      </div>
      <div
        className={cn(
          "absolute inset-0 border-4 border-highlight/10 rounded-full transition-opacity duration-500",
          isHovered ? "opacity-100" : "opacity-50",
        )}
      ></div>

      {/* Animated glow effect on hover */}
      <div
        className={cn(
          "absolute inset-0 bg-highlight/5 rounded-full opacity-0 transition-opacity duration-500",
          isHovered && "opacity-100",
        )}
      ></div>
    </div>
  )
}
