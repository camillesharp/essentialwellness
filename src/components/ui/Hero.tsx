import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'

interface HeroProps {
  tag?: string
  title: string
  titleItalic?: string
  subtitle: string
  ctaText?: string
  ctaTo?: string
  ctaHref?: string
  showPhone?: boolean
  size?: 'full' | 'compact'
  children?: ReactNode
}

export default function Hero({
  tag,
  title,
  titleItalic,
  subtitle,
  ctaText = 'Schedule Consultation',
  ctaTo = '/contact',
  ctaHref,
  showPhone = true,
  size = 'full',
  children,
}: HeroProps) {
  const isFullHeight = size === 'full'

  return (
    <section
      className={`relative flex items-center overflow-hidden bg-tan ${
        isFullHeight ? 'min-h-[90vh]' : 'py-24 lg:py-32'
      }`}
    >
      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle, #2C1A0E 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Turquoise accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-turquoise" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {tag && (
            <p className="text-turquoise text-xs font-semibold uppercase tracking-[0.2em] mb-5">
              {tag}
            </p>
          )}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-brown leading-tight mb-6">
            {title}
            {titleItalic && (
              <>
                {' '}
                <em className="text-turquoise not-italic font-normal">{titleItalic}</em>
              </>
            )}
          </h1>
          <p className="text-brown-light text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            {ctaHref ? (
              <a
                href={ctaHref}
                className="inline-flex items-center justify-center gap-2 bg-turquoise text-cream px-8 py-4 rounded-full text-base font-semibold hover:bg-turquoise-dark transition-colors shadow-sm"
              >
                {ctaText}
              </a>
            ) : (
              <Link
                to={ctaTo}
                className="inline-flex items-center justify-center gap-2 bg-turquoise text-cream px-8 py-4 rounded-full text-base font-semibold hover:bg-turquoise-dark transition-colors shadow-sm"
              >
                {ctaText}
              </Link>
            )}
            {showPhone && (
              <a
                href="tel:5550000000"
                className="inline-flex items-center gap-2 text-brown/60 hover:text-brown transition-colors text-sm py-4"
              >
                <Phone className="w-4 h-4" />
                (555) 000-0000
              </a>
            )}
          </div>
          {children}
        </div>
      </div>
    </section>
  )
}
