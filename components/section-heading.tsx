import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  number?: number
}

export default function SectionHeading({ title, subtitle, className, number }: SectionHeadingProps) {
  return (
    <div className={cn("mb-10", className)}>
      <div className="flex items-center mb-2">
        {number !== undefined && <span className="text-highlight font-mono mr-2">0{number}.</span>}
        <h2 className="text-2xl md:text-3xl font-bold text-slate-lighter">{title}</h2>
        <div className="ml-4 h-px bg-navy-lighter flex-grow max-w-[300px]"></div>
      </div>
      {subtitle && <p className="text-slate mt-2 max-w-2xl">{subtitle}</p>}
    </div>
  )
}
