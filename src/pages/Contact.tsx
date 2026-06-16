import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6 text-turquoise" />,
    label: 'Phone',
    value: '(555) 000-0000',
    href: 'tel:5550000000',
    note: 'Call to schedule a free 15-minute consultation',
  },
  {
    icon: <Mail className="w-6 h-6 text-turquoise" />,
    label: 'Email',
    value: 'info@essentialwellnessmedical.com',
    href: 'mailto:info@essentialwellnessmedical.com',
    note: 'We respond within one business day',
  },
  {
    icon: <MapPin className="w-6 h-6 text-turquoise" />,
    label: 'Address',
    value: '123 Wellness Drive, Suite 100',
    href: undefined,
    note: 'City, State 00000',
  },
  {
    icon: <Clock className="w-6 h-6 text-turquoise" />,
    label: 'Office Hours',
    value: 'Mon–Fri: 9am – 5pm',
    href: undefined,
    note: 'Sat: 10am – 2pm · Sun: Closed',
  },
]

export default function Contact() {
  return (
    <>
      <title>Contact Us | Essential Wellness Medical</title>

      {/* Page Header */}
      <section className="bg-brown-bg py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-turquoise" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #F5F0E8 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-turquoise text-xs font-semibold uppercase tracking-[0.2em] mb-4">Contact Us</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-cream mb-6">
            Get in Touch
          </h1>
          <p className="text-cream/65 text-xl max-w-xl mx-auto">
            We'd love to hear from you. Call to schedule or send us a message and we'll respond within one business day.
          </p>
        </div>
      </section>

      {/* Main contact section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left: contact info */}
            <div>
              <p className="text-turquoise text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Contact Information
              </p>
              <h2 className="font-display text-3xl font-bold text-brown mb-8">
                We're Here to Help
              </h2>

              <div className="flex flex-col gap-6 mb-12">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-turquoise/10 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-turquoise mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-semibold text-brown hover:text-turquoise transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-brown">{item.value}</p>
                      )}
                      <p className="text-brown-light text-sm mt-0.5">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to action box */}
              <div className="bg-brown-bg rounded-2xl p-8">
                <p className="text-turquoise text-xs font-semibold uppercase tracking-widest mb-3">
                  Prefer to Call?
                </p>
                <p className="font-display text-2xl font-bold text-cream mb-2">(555) 000-0000</p>
                <p className="text-cream/60 text-sm mb-5">
                  Ask about our free 15-minute phone consultation for all services except cannabis.
                </p>
                <a
                  href="tel:5550000000"
                  className="inline-flex items-center gap-2 bg-turquoise text-cream px-6 py-3 rounded-full text-sm font-semibold hover:bg-turquoise-dark transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-brown/10 bg-offwhite aspect-video flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-turquoise/40 mx-auto mb-2" />
                  <p className="text-brown-light/40 text-sm">Map Coming Soon</p>
                </div>
              </div>
            </div>

            {/* Right: contact form */}
            <div>
              <p className="text-turquoise text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Send a Message
              </p>
              <h2 className="font-display text-3xl font-bold text-brown mb-8">
                We'll Get Back to You
              </h2>

              <form className="flex flex-col gap-5" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-brown mb-1.5">
                      First Name <span className="text-turquoise">*</span>
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      required
                      className="w-full rounded-xl border border-brown/15 bg-offwhite px-4 py-3 text-brown placeholder-brown/30 focus:outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise/20 transition-colors text-sm"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-brown mb-1.5">
                      Last Name <span className="text-turquoise">*</span>
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      required
                      className="w-full rounded-xl border border-brown/15 bg-offwhite px-4 py-3 text-brown placeholder-brown/30 focus:outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise/20 transition-colors text-sm"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brown mb-1.5">
                    Email Address <span className="text-turquoise">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-brown/15 bg-offwhite px-4 py-3 text-brown placeholder-brown/30 focus:outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise/20 transition-colors text-sm"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brown mb-1.5">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full rounded-xl border border-brown/15 bg-offwhite px-4 py-3 text-brown placeholder-brown/30 focus:outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise/20 transition-colors text-sm"
                    placeholder="(555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-brown mb-1.5">
                    I'm Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full rounded-xl border border-brown/15 bg-offwhite px-4 py-3 text-brown focus:outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise/20 transition-colors text-sm appearance-none"
                  >
                    <option value="">Select a service...</option>
                    <option value="weight-loss">Weight Loss</option>
                    <option value="wellness">Wellness + Longevity</option>
                    <option value="aesthetics">Aesthetics</option>
                    <option value="cannabis">Cannabis Consultation</option>
                    <option value="hormone">Hormone Therapy</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brown mb-1.5">
                    Message <span className="text-turquoise">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full rounded-xl border border-brown/15 bg-offwhite px-4 py-3 text-brown placeholder-brown/30 focus:outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise/20 transition-colors text-sm resize-none"
                    placeholder="Tell us a little about what brings you in..."
                  />
                </div>

                <p className="text-brown-light/60 text-xs leading-relaxed">
                  This form is for general inquiries only. Please do not include medical history or personal health information. For medical questions, call us directly.
                </p>

                <button
                  type="submit"
                  className="w-full bg-turquoise text-cream py-4 rounded-full font-semibold hover:bg-turquoise-dark transition-colors text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
