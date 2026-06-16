import { Scale, Heart, Sparkles, Leaf, Zap, CheckCircle, Shield, Users, Award, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Hero from '../components/ui/Hero'
import ServiceCard from '../components/ui/ServiceCard'
import TestimonialCard from '../components/ui/TestimonialCard'
import CTABanner from '../components/ui/CTABanner'

const services = [
  {
    icon: <Scale className="w-6 h-6" />,
    title: 'Weight Loss',
    description: 'Medically supervised programs combining FDA-approved treatments, nutrition guidance, and ongoing support to help you lose weight and keep it off.',
    to: '/weight-loss',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Wellness + Longevity',
    description: 'Proactive, preventative care designed to optimize your long-term health — so you can thrive at every stage of life.',
    to: '/wellness',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Aesthetics',
    description: 'Medical-grade aesthetic treatments delivered with precision and artistry for natural, confidence-boosting results.',
    to: '/aesthetics',
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: 'Cannabis',
    description: 'Compassionate, evidence-based medical cannabis consultations. Book online and get your physician recommendation in a 15-minute phone call.',
    to: '/cannabis',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Hormone Therapy',
    description: 'Restore energy, mood, and vitality with personalized hormone optimization tailored to your unique biology and goals.',
    to: '/hormone-therapy',
  },
]

const steps = [
  {
    num: '01',
    title: 'Call or Schedule Online',
    desc: 'Reach out by phone for a free 15-minute consultation, or book a cannabis appointment directly online.',
  },
  {
    num: '02',
    title: 'Meet Your Doctor',
    desc: 'Speak one-on-one with our physician to discuss your health history, goals, and the best treatment options for you.',
  },
  {
    num: '03',
    title: 'Start Your Journey',
    desc: 'Receive a personalized care plan and ongoing support every step of the way toward your health goals.',
  },
]

const stats = [
  { value: '10+', label: 'Years of Experience', icon: <Award className="w-6 h-6" /> },
  { value: '2,000+', label: 'Patients Served', icon: <Users className="w-6 h-6" /> },
  { value: '5', label: 'Specialty Services', icon: <CheckCircle className="w-6 h-6" /> },
  { value: '100%', label: 'Board Certified', icon: <Shield className="w-6 h-6" /> },
]

const testimonials = [
  {
    quote: "I lost 34 pounds in four months under their care. The doctor genuinely listened and the program felt completely tailored to me — not a one-size-fits-all approach.",
    name: 'Sarah M.',
    detail: 'Weight Loss Patient',
  },
  {
    quote: "Getting my medical cannabis card was painless. The whole consultation was 15 minutes, the doctor was knowledgeable and non-judgmental, and I had my recommendation the same day.",
    name: 'James R.',
    detail: 'Cannabis Consultation Patient',
  },
  {
    quote: "My hormone levels were completely off and I had no idea. After just two months on therapy I feel like myself again — more energy, better sleep, better mood. Life-changing.",
    name: 'Linda K.',
    detail: 'Hormone Therapy Patient',
  },
]

export default function Home() {
  return (
    <>
      <title>Essential Wellness Medical | Expert Care for Weight Loss, Wellness & More</title>

      {/* Hero */}
      <Hero
        tag="Essential Wellness Medical"
        title="Your Health,"
        titleItalic="Optimized."
        subtitle="Science-backed, personalized medical care for weight loss, wellness, aesthetics, cannabis, and hormone therapy — all in one practice."
        ctaText="Schedule a Consultation"
        ctaTo="/contact"
        showPhone
        size="full"
      />

      {/* Services */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-turquoise text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Our Services
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-brown">
              Comprehensive Care,<br className="hidden sm:block" /> One Practice
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <ServiceCard key={s.to} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-tan">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-turquoise text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Simple Process
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-brown">
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
            <div className="hidden md:block absolute top-8 left-1/3 right-1/3 h-px bg-turquoise/40" />
            {steps.map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-brown/10 border border-brown/20 flex items-center justify-center mx-auto mb-6">
                  <span className="font-display text-xl font-bold text-turquoise">{step.num}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-brown mb-3">{step.title}</h3>
                <p className="text-brown-light text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-turquoise text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Why Choose Us
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-brown mb-6">
                Medicine That Puts You First
              </h2>
              <p className="text-brown-light leading-relaxed mb-6">
                At Essential Wellness Medical, we believe healthcare should be personal. We take the time to understand your unique situation, goals, and concerns — then build a plan that actually works for your life.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  'Board-certified physician with 10+ years of experience',
                  'Evidence-based treatments with proven outcomes',
                  'Personalized care plans — no cookie-cutter solutions',
                  'Discreet, judgment-free environment',
                  'Easy scheduling with same-day availability',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-brown-light">
                    <CheckCircle className="w-5 h-5 text-turquoise flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-turquoise font-semibold hover:gap-3 transition-all"
              >
                Meet Your Doctor <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-offwhite rounded-2xl p-8 flex flex-col items-center text-center border border-brown/5"
                >
                  <div className="text-turquoise mb-3">{stat.icon}</div>
                  <p className="font-display text-4xl font-bold text-brown mb-1">{stat.value}</p>
                  <p className="text-brown-light text-xs uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-turquoise text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Patient Stories
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-brown">
              Real Results, Real People
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner variant="call" />
    </>
  )
}
