"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface SkillProgressProps {
  name: string
  percentage: number
  className?: string
  delay?: number
}

export function SkillProgress({ name, percentage, className, delay = 0 }: SkillProgressProps) {
  const [width, setWidth] = useState(0)
  const progressRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (progressRef.current) {
      observer.observe(progressRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(percentage)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [isVisible, percentage, delay])

  return (
    <div className={cn("space-y-2", className)} ref={progressRef}>
      <div className="flex justify-between items-center">
        <span className="text-sm font-mono text-slate-lighter">{name}</span>
        <span className="text-sm font-mono text-highlight">{percentage}%</span>
      </div>
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  )
}
