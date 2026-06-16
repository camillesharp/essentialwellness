import { CheckCircle, Heart, Sun, Activity, Brain } from 'lucide-react'
import Hero from '../components/ui/Hero'
import FAQAccordion from '../components/ui/FAQAccordion'
import CTABanner from '../components/ui/CTABanner'

const offerings = [
  {
    icon: <Heart className="w-7 h-7 text-turquoise" />,
    title: 'Cardiovascular Health',
    desc: 'Proactive monitoring and risk reduction strategies to protect your heart for the long term.',
  },
  {
    icon: <Brain className="w-7 h-7 text-turquoise" />,
    title: 'Cognitive & Mental Wellness',
    desc: 'Lifestyle and nutritional strategies to support brain health, focus, and emotional wellbeing.',
  },
  {
    icon: <Sun className="w-7 h-7 text-turquoise" />,
    title: 'Energy & Sleep Optimization',
    desc: 'Identify and address the root causes of fatigue, poor sleep, and low energy.',
  },
  {
    icon: <Activity className="w-7 h-7 text-turquoise" />,
    title: 'Metabolic Health',
    desc: 'Blood sugar regulation, inflammation reduction, and metabolic panel review to keep your body running efficiently.',
  },
]

const benefits = [
  'Comprehensive health review beyond what a standard annual physical covers',
  'Personalized longevity and prevention plan based on your biomarkers',
  'Lifestyle, nutrition, and supplement guidance from a licensed physician',
  'Ongoing support and follow-up to adapt your plan as you evolve',
  'Early detection of potential issues before they become serious',
]

const faqs = [
  {
    question: 'What does a wellness consultation include?',
    answer: 'Your consultation begins with a thorough review of your health history, current symptoms, lifestyle habits, and goals. Depending on your needs, your physician may order labs, review existing test results, and develop a personalized wellness plan covering nutrition, sleep, activity, stress, and supplementation.',
  },
  {
    question: 'How is this different from a regular primary care visit?',
    answer: 'Standard primary care visits focus on diagnosing and treating illness. Our wellness consultations focus on optimizing function and preventing disease — going deeper into biomarkers, lifestyle factors, and long-term health goals that are often overlooked in a typical 15-minute appointment.',
  },
  {
    question: 'Who should consider a wellness consultation?',
    answer: 'Anyone who wants to take a proactive approach to their health rather than waiting for problems to arise. This is especially valuable for people feeling "off" without a clear diagnosis, those with a family history of chronic disease, or anyone interested in longevity and optimizing their quality of life.',
  },
  {
    question: 'How often should I schedule wellness visits?',
    answer: 'We typically recommend an initial comprehensive consultation followed by quarterly or semi-annual check-ins to review progress, update your plan, and order any follow-up labs. The frequency depends on your health goals and any ongoing concerns.',
  },
]

function ImagePlaceholder() {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-brown-bg aspect-[4/3] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-brown-bg to-[#4A3020]" />
      <div className="relative text-center px-8">
        <div className="w-20 h-20 rounded-full border border-cream/15 flex items-center justify-center mx-auto mb-4">
          <Heart className="w-8 h-8 text-turquoise/50" />
        </div>
        <p className="text-cream/25 text-sm">Photo Coming Soon</p>
      </div>
    </div>
  )
}

export default function Wellness() {
  return (
    <>
      <title>Wellness + Longevity | Essential Wellness Medical</title>

      <Hero
        tag="Wellness + Longevity"
        title="Thrive at"
        titleItalic="Every Age."
        subtitle="Preventative care and health optimization that goes beyond treating illness — helping you build a foundation for lasting vitality and a longer, healthier life."
        ctaText="Call to Schedule Free Consultation"
        ctaHref="tel:5550000000"
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
                Invest in Your Long-Term Health
              </h2>
              <p className="text-brown-light leading-relaxed mb-5">
                Most people see a doctor when something is wrong. We believe the most powerful time to engage with your health is before problems arise. Our wellness and longevity consultations are designed to catch issues early, optimize your body's function, and give you a clear roadmap to your healthiest self.
              </p>
              <p className="text-brown-light leading-relaxed">
                From cardiovascular health and metabolic optimization to sleep, energy, and cognitive wellness — we take a whole-person approach that addresses the factors that matter most for living well.
              </p>
            </div>
            <ImagePlaceholder />
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-24 bg-tan">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-turquoise text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              What We Address
            </p>
            <h2 className="font-display text-4xl font-bold text-brown">
              Whole-Person Wellness
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((o, i) => (
              <div key={i} className="bg-offwhite rounded-2xl p-7 border border-brown/10">
                <div className="mb-4">{o.icon}</div>
                <h3 className="font-display text-lg font-semibold text-brown mb-2">{o.title}</h3>
                <p className="text-brown-light text-sm leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-turquoise text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Benefits
              </p>
              <h2 className="font-display text-4xl font-bold text-brown mb-8">
                Why Patients Choose Our Wellness Program
              </h2>
              <ul className="flex flex-col gap-4">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-turquoise flex-shrink-0 mt-0.5" />
                    <p className="text-brown-light text-sm leading-relaxed">{b}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-offwhite rounded-2xl p-10 border border-brown/5">
              <p className="font-display text-2xl font-semibold text-brown mb-4 italic">
                "Health is not merely the absence of disease — it's the presence of vitality."
              </p>
              <p className="text-brown-light text-sm">
                Our physician brings this philosophy to every consultation, helping patients move from simply feeling "okay" to genuinely thriving.
              </p>
            </div>
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

      <CTABanner variant="call" />
    </>
  )
}
