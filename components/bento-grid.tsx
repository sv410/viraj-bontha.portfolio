import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface BentoItemProps {
  children: ReactNode
  className?: string
  spanTwo?: boolean
}

export function BentoItem({ children, className, spanTwo = false }: BentoItemProps) {
  return (
    <div className={cn("bento-item bg-navy-light p-6 relative overflow-hidden group", spanTwo && "span-2", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-highlight/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {children}
    </div>
  )
}

interface BentoGridProps {
  children: ReactNode
  className?: string
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return <div className={cn("bento-grid", className)}>{children}</div>
}
