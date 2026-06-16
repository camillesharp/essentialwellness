import { Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

interface CTABannerProps {
  variant?: 'call' | 'book'
  title?: string
  subtitle?: string
}

export default function CTABanner({
  variant = 'call',
  title,
  subtitle,
}: CTABannerProps) {
  const isBook = variant === 'book'

  const defaultTitle = isBook
    ? 'Ready to Book Your Cannabis Consultation?'
    : 'Ready to Take the First Step?'

  const defaultSubtitle = isBook
    ? 'Schedule your 15-minute phone consultation online today. Just $70 — collected securely at booking.'
    : 'Call us for a free 15-minute phone consultation and find out how we can help you reach your health goals.'

  return (
    <section className="bg-brown-bg py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream mb-4">
          {title ?? defaultTitle}
        </h2>
        <p className="text-cream/65 text-lg mb-10 max-w-2xl mx-auto">
          {subtitle ?? defaultSubtitle}
        </p>

        {isBook ? (
          <Link
            to="/cannabis"
            className="inline-flex items-center gap-2 bg-turquoise text-cream px-9 py-4 rounded-full text-base font-semibold hover:bg-turquoise-dark transition-colors shadow-lg"
          >
            Book Cannabis Consultation — $70
          </Link>
        ) : (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:5550000000"
              className="inline-flex items-center gap-2 bg-turquoise text-cream px-9 py-4 rounded-full text-base font-semibold hover:bg-turquoise-dark transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call to Schedule Free Consultation
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-cream/30 text-cream px-9 py-4 rounded-full text-base font-semibold hover:border-cream/60 transition-colors"
            >
              Send Us a Message
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
