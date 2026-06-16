import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const serviceLinks = [
  { to: '/weight-loss', label: 'Weight Loss' },
  { to: '/wellness', label: 'Wellness + Longevity' },
  { to: '/cannabis', label: 'Cannabis' },
  { to: '/aesthetics', label: 'Aesthetics' },
  { to: '/hormone-therapy', label: 'Hormone Therapy' },
]

const topLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brown-bg shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <span className="font-display text-base lg:text-lg font-semibold text-cream tracking-wide whitespace-nowrap">
              Essential Wellness Medical
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7 mx-8">
            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium text-cream/80 hover:text-cream transition-colors"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-cream rounded-2xl shadow-xl border border-brown/10 py-2 min-w-52 z-50">
                  {/* Arrow pointer */}
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-cream rotate-45 border-l border-t border-brown/10" />
                  {serviceLinks.map(link => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="flex items-center px-5 py-2.5 text-sm text-brown hover:text-turquoise hover:bg-brown/5 transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Top-level links */}
            {topLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-turquoise' : 'text-cream/80 hover:text-cream'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right: phone + CTA */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <a
              href="tel:5550000000"
              className="flex items-center gap-2 text-cream/75 hover:text-cream text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              (555) 000-0000
            </a>
            <Link
              to="/contact"
              className="bg-turquoise text-cream px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-turquoise-dark transition-colors whitespace-nowrap"
            >
              Schedule Consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-cream p-2 -mr-2"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-brown-bg border-t border-cream/10">
          <div className="px-4 pt-2 pb-5 flex flex-col">
            {/* Services toggle */}
            <button
              className="flex items-center justify-between px-3 py-3 text-sm font-medium text-cream/80 rounded-lg hover:bg-cream/5 transition-colors"
              onClick={() => setMobileServicesOpen(prev => !prev)}
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="ml-4 flex flex-col border-l border-cream/10 pl-3 mb-1">
                {serviceLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block px-3 py-2.5 text-sm text-cream/70 hover:text-cream transition-colors rounded-lg hover:bg-cream/5"
                    onClick={() => { setMenuOpen(false); setMobileServicesOpen(false) }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            {topLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `block px-3 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-turquoise bg-cream/5'
                      : 'text-cream/80 hover:text-cream hover:bg-cream/5'
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}

            <div className="mt-4 pt-4 border-t border-cream/10 flex flex-col gap-3">
              <a
                href="tel:5550000000"
                className="flex items-center gap-2 text-cream/75 text-sm px-3"
              >
                <Phone className="w-4 h-4" />
                (555) 000-0000
              </a>
              <Link
                to="/contact"
                className="bg-turquoise text-cream px-5 py-3 rounded-full text-sm font-semibold text-center hover:bg-turquoise-dark transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
