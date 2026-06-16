import { Star } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  name: string
  detail: string
  rating?: number
}

export default function TestimonialCard({
  quote,
  name,
  detail,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="bg-offwhite rounded-2xl p-8 flex flex-col gap-5 border border-brown/5">
      <div className="flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-turquoise text-turquoise" />
        ))}
      </div>
      <p className="text-brown-light leading-relaxed italic font-display text-lg">
        "{quote}"
      </p>
      <div>
        <p className="font-semibold text-brown text-sm">{name}</p>
        <p className="text-brown-light/60 text-xs mt-0.5">{detail}</p>
      </div>
    </div>
  )
}
