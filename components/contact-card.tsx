import type { ReactNode } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Card3D } from "@/components/card-3d"

interface ContactCardProps {
  icon: ReactNode
  title: string
  value: string
  href: string
}

export default function ContactCard({ icon, title, value, href }: ContactCardProps) {
  return (
    <Card3D className="w-full sm:w-64">
      <Card className="bg-navy-light border-navy-lighter">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-navy-lighter flex items-center justify-center mb-4 text-highlight">
            {icon}
          </div>
          <h3 className="font-medium text-slate-lighter mb-1">{title}</h3>
          <Link
            href={href}
            className="text-slate hover:text-highlight transition-colors"
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {value}
          </Link>
        </CardContent>
      </Card>
    </Card3D>
  )
}
