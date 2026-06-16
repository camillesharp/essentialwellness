import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const services = [
  { to: '/weight-loss', label: 'Weight Loss' },
  { to: '/wellness', label: 'Wellness + Longevity' },
  { to: '/aesthetics', label: 'Aesthetics' },
  { to: '/cannabis', label: 'Cannabis' },
  { to: '/hormone-therapy', label: 'Hormone Therapy' },
]

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Footer() {
  return (
    <footer className="bg-brown-bg text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-xl font-semibold mb-3 text-cream">
              Essential Wellness Medical
            </h3>
            <p className="text-cream/60 text-sm leading-relaxed mb-6">
              Personalized, evidence-based medicine to help you look, feel, and live your best.
            </p>
            <a
              href="tel:5550000000"
              className="inline-flex items-center gap-2 bg-turquoise text-cream px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-turquoise-dark transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call to Schedule
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-turquoise mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {services.map(s => (
                <li key={s.to}>
                  <Link
                    to={s.to}
                    className="text-cream/60 hover:text-cream text-sm transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-turquoise mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(l => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-cream/60 hover:text-cream text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-turquoise mb-4">
              Contact
            </h4>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a
                  href="tel:5550000000"
                  className="flex items-center gap-3 text-cream/60 hover:text-cream text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0 text-turquoise" />
                  (555) 000-0000
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@essentialwellnessmedical.com"
                  className="flex items-center gap-3 text-cream/60 hover:text-cream text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0 text-turquoise" />
                  info@essentialwellnessmedical.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-cream/60 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0 text-turquoise mt-0.5" />
                  <span>
                    123 Wellness Drive, Suite 100<br />
                    City, State 00000
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-cream/60 text-sm">
                  <Clock className="w-4 h-4 flex-shrink-0 text-turquoise mt-0.5" />
                  <span>
                    Mon–Fri: 9am – 5pm<br />
                    Sat: 10am – 2pm<br />
                    Sun: Closed
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream/35 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Essential Wellness Medical. All rights reserved. Not a substitute for professional medical advice.
          </p>
          <p className="text-cream/35 text-xs">
            HIPAA Compliant Practice
          </p>
        </div>
      </div>
    </footer>
  )
}
