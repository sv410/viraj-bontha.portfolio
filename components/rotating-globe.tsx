"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface RotatingGlobeProps {
  className?: string
  size?: number
  color?: string
}

export function RotatingGlobe({ className, size = 300, color = "#64FFDA" }: RotatingGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with device pixel ratio for sharp rendering
    const pixelRatio = window.devicePixelRatio || 1
    canvas.width = size * pixelRatio
    canvas.height = size * pixelRatio
    canvas.style.width = `${size}px`
    canvas.style.height = `${size}px`
    ctx.scale(pixelRatio, pixelRatio)

    // Globe parameters
    const radius = size * 0.4
    const center = { x: size / 2, y: size / 2 }

    // Create grid of points on the sphere
    const points: { x: number; y: number; z: number }[] = []
    const latitudeBands = 20
    const longitudeBands = 30

    for (let lat = 0; lat <= latitudeBands; lat++) {
      const theta = (lat * Math.PI) / latitudeBands
      const sinTheta = Math.sin(theta)
      const cosTheta = Math.cos(theta)

      for (let lon = 0; lon <= longitudeBands; lon++) {
        const phi = (lon * 2 * Math.PI) / longitudeBands
        const sinPhi = Math.sin(phi)
        const cosPhi = Math.cos(phi)

        const x = cosPhi * sinTheta
        const y = cosTheta
        const z = sinPhi * sinTheta

        points.push({ x, y, z })
      }
    }

    // Animation variables
    let rotationY = 0
    const rotationX = Math.PI / 10 // Slight tilt

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Rotate the globe
      rotationY += 0.005

      // Draw the globe
      drawGlobe()

      requestAnimationFrame(animate)
    }

    // Draw the globe with points and connections
    const drawGlobe = () => {
      // Draw points
      points.forEach((point) => {
        // Apply rotation
        const rotatedPoint = rotatePoint(point, rotationX, rotationY)

        // Only draw points on the front half of the sphere
        if (rotatedPoint.z < 0) return

        // Project 3D point to 2D
        const projectedPoint = projectPoint(rotatedPoint)

        // Calculate opacity based on z-position (depth)
        const opacity = 0.3 + rotatedPoint.z * 0.7

        // Draw point
        ctx.beginPath()
        ctx.fillStyle = `${color}${Math.round(opacity * 255)
          .toString(16)
          .padStart(2, "0")}`
        ctx.arc(projectedPoint.x, projectedPoint.y, 1, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw connections between nearby points
      for (let i = 0; i < points.length; i++) {
        const pointA = rotatePoint(points[i], rotationX, rotationY)

        // Skip points on the back side
        if (pointA.z < 0) continue

        const projectedA = projectPoint(pointA)

        for (let j = i + 1; j < points.length; j++) {
          const pointB = rotatePoint(points[j], rotationX, rotationY)

          // Skip points on the back side
          if (pointB.z < 0) continue

          // Calculate 3D distance
          const dx = pointA.x - pointB.x
          const dy = pointA.y - pointB.y
          const dz = pointA.z - pointB.z
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

          // Only connect nearby points
          if (distance < 0.3) {
            const projectedB = projectPoint(pointB)

            // Calculate opacity based on average z-position and distance
            const avgZ = (pointA.z + pointB.z) / 2
            const opacity = (0.2 + avgZ * 0.5) * (1 - distance / 0.3)

            // Draw connection
            ctx.beginPath()
            ctx.strokeStyle = `${color}${Math.round(opacity * 255)
              .toString(16)
              .padStart(2, "0")}`
            ctx.lineWidth = 0.5
            ctx.moveTo(projectedA.x, projectedA.y)
            ctx.lineTo(projectedB.x, projectedB.y)
            ctx.stroke()
          }
        }
      }
    }

    // Rotate a point around the X and Y axes
    const rotatePoint = (point: { x: number; y: number; z: number }, rotX: number, rotY: number) => {
      // Rotate around X axis
      const cosX = Math.cos(rotX)
      const sinX = Math.sin(rotX)
      const y1 = point.y * cosX - point.z * sinX
      const z1 = point.y * sinX + point.z * cosX

      // Rotate around Y axis
      const cosY = Math.cos(rotY)
      const sinY = Math.sin(rotY)
      const x2 = point.x * cosY + z1 * sinY
      const z2 = -point.x * sinY + z1 * cosY

      return { x: x2, y: y1, z: z2 }
    }

    // Project a 3D point to 2D space
    const projectPoint = (point: { x: number; y: number; z: number }) => {
      // Simple perspective projection
      const scale = 1.5 / (1.5 + point.z)
      const x = center.x + point.x * radius * scale
      const y = center.y + point.y * radius * scale

      return { x, y }
    }

    // Start animation
    animate()

    // No cleanup needed for this component
  }, [size, color])

  return <canvas ref={canvasRef} className={cn("", className)} style={{ width: size, height: size }} />
}
