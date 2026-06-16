import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  to: string
}

export default function ServiceCard({ icon, title, description, to }: ServiceCardProps) {
  return (
    <div className="group bg-offwhite rounded-2xl p-8 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300 border border-brown/5">
      <div className="w-12 h-12 rounded-xl bg-turquoise/10 flex items-center justify-center text-turquoise">
        {icon}
      </div>
      <h3 className="font-display text-xl font-semibold text-brown">{title}</h3>
      <p className="text-brown-light text-sm leading-relaxed flex-1">{description}</p>
      <Link
        to={to}
        className="relative overflow-hidden w-full text-center bg-turquoise text-cream py-3 px-6 rounded-full text-sm font-semibold mt-2 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-brown-bg before:to-brown before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
      >
        <span className="relative z-10">Learn More</span>
      </Link>
    </div>
  )
}
