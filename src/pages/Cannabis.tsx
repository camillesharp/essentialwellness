import { CheckCircle, Leaf, Phone, CreditCard, Calendar, MessageSquare } from 'lucide-react'
import { Link } from 'react-router-dom'
import Hero from '../components/ui/Hero'
import FAQAccordion from '../components/ui/FAQAccordion'
import CTABanner from '../components/ui/CTABanner'

const processSteps = [
  {
    icon: <Calendar className="w-7 h-7 text-turquoise" />,
    title: 'Book Online',
    desc: 'Select a time that works for you through our Acuity scheduling portal. Appointments are available as soon as the next business day.',
  },
  {
    icon: <CreditCard className="w-7 h-7 text-turquoise" />,
    title: 'Pay Securely',
    desc: 'A $70 consultation fee is collected at the time of booking through our secure Stripe payment system. No surprise charges.',
  },
  {
    icon: <Phone className="w-7 h-7 text-turquoise" />,
    title: '15-Minute Phone Call',
    desc: 'Your physician calls you at the scheduled time to review your health history and qualifying conditions.',
  },
  {
    icon: <MessageSquare className="w-7 h-7 text-turquoise" />,
    title: 'Receive Your Recommendation',
    desc: 'If you qualify, your physician issues a medical cannabis recommendation. Instructions for registration are provided immediately after.',
  },
]

const conditions = [
  'Chronic pain', 'Anxiety', 'PTSD', 'Insomnia / sleep disorders',
  'Nausea and appetite issues', 'Multiple sclerosis', 'Epilepsy / seizure disorders',
  'Cancer-related symptoms', 'Inflammatory conditions', 'And more',
]

const faqs = [
  {
    question: 'Who qualifies for a medical cannabis recommendation?',
    answer: 'Qualification depends on your state\'s approved conditions list. Common qualifying conditions include chronic pain, anxiety, PTSD, insomnia, nausea, cancer, epilepsy, and more. During your 15-minute consultation, our physician will review your medical history and determine if you meet the criteria.',
  },
  {
    question: 'What happens if I don\'t qualify?',
    answer: 'If our physician determines you do not meet the qualifying criteria for your state, you will receive a full refund of the $70 consultation fee. We never issue recommendations unless they are clinically appropriate.',
  },
  {
    question: 'How do I pay and when?',
    answer: 'Payment is collected securely at the time of booking through Stripe. The $70 fee covers your 15-minute consultation with our physician. There are no additional fees for the recommendation itself.',
  },
  {
    question: 'Will I receive my recommendation the same day?',
    answer: 'In most cases, yes. If you qualify, your physician issues the recommendation during or immediately following your consultation. You will receive detailed instructions on how to register with your state\'s medical cannabis program.',
  },
  {
    question: 'Is my information kept private?',
    answer: 'Absolutely. All consultations are conducted in full compliance with HIPAA regulations. Your medical information is never shared without your explicit consent.',
  },
  {
    question: 'Can I reschedule or cancel my appointment?',
    answer: 'Yes. You can reschedule or cancel through the confirmation email you receive at booking. Please review the cancellation policy in your confirmation for refund eligibility details.',
  },
]

export default function Cannabis() {
  return (
    <>
      <title>Medical Cannabis Consultations | Essential Wellness Medical</title>

      <Hero
        tag="Medical Cannabis"
        title="Your Cannabis Card,"
        titleItalic="Made Simple."
        subtitle="A 15-minute phone consultation with a licensed physician. Book online, pay securely, and get your medical cannabis recommendation — all for $70."
        ctaText="Book Consultation — $70"
        ctaTo="/cannabis#schedule"
        showPhone={false}
        size="compact"
      />

      {/* Overview */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-turquoise text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                About This Service
              </p>
              <h2 className="font-display text-4xl font-bold text-brown mb-6">
                Compassionate Cannabis Care
              </h2>
              <p className="text-brown-light leading-relaxed mb-5">
                Medical cannabis can provide meaningful relief for a wide range of conditions — from chronic pain and anxiety to insomnia and PTSD. Our physician brings an evidence-based, judgment-free approach to every consultation.
              </p>
              <p className="text-brown-light leading-relaxed mb-8">
                The entire process is designed to be fast, easy, and discreet. Book online, pay securely, and speak with our doctor by phone — no in-person visit required.
              </p>
              <div className="bg-turquoise/10 border border-turquoise/20 rounded-2xl p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-turquoise mb-2">Consultation Fee</p>
                <p className="font-display text-5xl font-bold text-brown mb-1">$70</p>
                <p className="text-brown-light text-sm">15-minute phone consultation · Secure online payment · Same-day recommendation if qualified</p>
              </div>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-brown mb-5">Commonly Qualifying Conditions</h3>
              <div className="grid grid-cols-2 gap-2">
                {conditions.map((c, i) => (
                  <div key={i} className="flex items-center gap-2 bg-offwhite rounded-lg px-4 py-3 border border-brown/5">
                    <CheckCircle className="w-4 h-4 text-turquoise flex-shrink-0" />
                    <span className="text-brown-light text-sm">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-tan">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-turquoise text-xs font-semibold uppercase tracking-[0.2em] mb-3">How It Works</p>
            <h2 className="font-display text-4xl font-bold text-brown">
              From Booking to Recommendation in 4 Steps
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className="bg-offwhite rounded-2xl p-7 border border-brown/10 relative">
                <div className="absolute top-5 right-5 font-display text-4xl font-bold text-brown/5">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="mb-4">{step.icon}</div>
                <h3 className="font-display text-lg font-semibold text-brown mb-2">{step.title}</h3>
                <p className="text-brown-light text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scheduler Placeholder */}
      <section id="schedule" className="py-24 bg-cream scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-turquoise text-xs font-semibold uppercase tracking-[0.2em] mb-3">Book Now</p>
          <h2 className="font-display text-4xl font-bold text-brown mb-4">Schedule Your Consultation</h2>
          <p className="text-brown-light mb-10">
            Select a time below and complete your $70 payment to reserve your appointment.
          </p>
          {/* Acuity Scheduler Placeholder */}
          <div className="bg-offwhite rounded-2xl border-2 border-dashed border-brown/15 p-16 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-turquoise/10 flex items-center justify-center">
              <Leaf className="w-7 h-7 text-turquoise" />
            </div>
            <p className="font-display text-xl font-semibold text-brown">Acuity Scheduler</p>
            <p className="text-brown-light text-sm max-w-sm">
              The Acuity Scheduling widget with Stripe payment integration will be embedded here.
            </p>
            <Link
              to="/contact"
              className="mt-2 bg-turquoise text-cream px-8 py-3 rounded-full text-sm font-semibold hover:bg-turquoise-dark transition-colors"
            >
              Contact Us to Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-turquoise text-xs font-semibold uppercase tracking-[0.2em] mb-3">FAQ</p>
            <h2 className="font-display text-4xl font-bold text-brown">Common Questions</h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner variant="book" />
    </>
  )
}
