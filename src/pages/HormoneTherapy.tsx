import { CheckCircle, Zap, Activity } from 'lucide-react'
import Hero from '../components/ui/Hero'
import FAQAccordion from '../components/ui/FAQAccordion'
import CTABanner from '../components/ui/CTABanner'

const symptoms = [
  'Persistent fatigue and low energy', 'Unexplained weight gain or loss',
  'Brain fog and difficulty concentrating', 'Mood swings, anxiety, or depression',
  'Low libido or sexual dysfunction', 'Poor sleep quality or insomnia',
  'Hot flashes or night sweats', 'Loss of muscle mass or bone density',
]

const process = [
  {
    icon: <Activity className="w-7 h-7 text-turquoise" />,
    title: 'Comprehensive Lab Panel',
    desc: 'We start with detailed bloodwork to measure key hormone levels including testosterone, estrogen, progesterone, thyroid, cortisol, and more.',
  },
  {
    icon: <Zap className="w-7 h-7 text-turquoise" />,
    title: 'Physician Consultation',
    desc: 'Your doctor reviews your labs alongside your symptoms and health history to create a personalized hormone optimization plan.',
  },
  {
    icon: <CheckCircle className="w-7 h-7 text-turquoise" />,
    title: 'Customized Treatment',
    desc: 'Treatments may include bioidentical hormones, lifestyle modifications, nutritional support, or other evidence-based interventions.',
  },
  {
    icon: <Activity className="w-7 h-7 text-turquoise" />,
    title: 'Ongoing Monitoring',
    desc: 'Regular follow-up labs and check-ins ensure your levels remain optimized and your plan evolves with your body\'s needs.',
  },
]

const faqs = [
  {
    question: 'How do I know if I have a hormone imbalance?',
    answer: 'Common signs include persistent fatigue, weight changes, mood fluctuations, brain fog, sleep problems, low libido, and other symptoms listed above. The only way to confirm a hormonal imbalance is through lab testing — a quick blood draw that we can order at your initial consultation.',
  },
  {
    question: 'What hormones do you evaluate and treat?',
    answer: 'We evaluate a comprehensive panel including testosterone, estrogen, progesterone, DHEA, thyroid hormones (TSH, T3, T4), cortisol, insulin, and more. Treatment is tailored to your specific deficiencies and health goals.',
  },
  {
    question: 'Are bioidentical hormones safe?',
    answer: 'Bioidentical hormone therapy (BHRT) has been used for decades and has a strong safety record when properly monitored by a physician. Your physician will discuss the risks and benefits specific to your health profile and ensure appropriate monitoring throughout your treatment.',
  },
  {
    question: 'How long until I notice results?',
    answer: 'Many patients notice improvements in energy and mood within 4–6 weeks. Sleep quality and libido often improve in the first 2–3 months. Full optimization typically takes 3–6 months as dosing is adjusted based on follow-up labs and your response to treatment.',
  },
  {
    question: 'Is hormone therapy only for women going through menopause?',
    answer: 'Not at all. We treat men and women of all ages. Men frequently benefit from testosterone optimization, while women may need support at various life stages — not only during menopause. Anyone experiencing hormone-related symptoms is a candidate for evaluation.',
  },
]

function ImagePlaceholder() {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-brown-bg aspect-[4/3] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-brown-bg to-[#4A3020]" />
      <div className="relative text-center px-8">
        <div className="w-20 h-20 rounded-full border border-cream/15 flex items-center justify-center mx-auto mb-4">
          <Zap className="w-8 h-8 text-turquoise/50" />
        </div>
        <p className="text-cream/25 text-sm">Photo Coming Soon</p>
      </div>
    </div>
  )
}

export default function HormoneTherapy() {
  return (
    <>
      <title>Hormone Therapy | Essential Wellness Medical</title>

      <Hero
        tag="Hormone Therapy"
        title="Restore Balance."
        titleItalic="Reclaim Your Energy."
        subtitle="Personalized hormone optimization that addresses the root cause of fatigue, mood changes, and declining vitality — so you can feel like yourself again."
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
                Hormone Optimization for Men & Women
              </h2>
              <p className="text-brown-light leading-relaxed mb-5">
                Hormones regulate nearly every function in the body — energy, mood, metabolism, sleep, and more. When levels fall out of balance, the effects can be profound and far-reaching. Yet hormone imbalances are frequently overlooked or misdiagnosed.
              </p>
              <p className="text-brown-light leading-relaxed">
                Our physician takes a data-driven, whole-person approach: comprehensive lab testing, careful clinical evaluation, and a personalized treatment plan designed to restore your hormones to optimal levels — and keep them there.
              </p>
            </div>
            <ImagePlaceholder />
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-24 bg-tan">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-turquoise text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Signs You May Benefit
            </p>
            <h2 className="font-display text-4xl font-bold text-brown">
              Symptoms We Address
            </h2>
            <p className="text-brown-light mt-4 max-w-xl mx-auto">
              If you're experiencing any of the following, a hormone evaluation may be the answer you've been looking for.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {symptoms.map((s, i) => (
              <div key={i} className="flex items-start gap-3 bg-offwhite rounded-xl p-4 border border-brown/10">
                <CheckCircle className="w-4 h-4 text-turquoise flex-shrink-0 mt-0.5" />
                <span className="text-brown-light text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-turquoise text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              The Process
            </p>
            <h2 className="font-display text-4xl font-bold text-brown">
              How Hormone Therapy Works
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <div key={i} className="bg-offwhite rounded-2xl p-7 border border-brown/5">
                <div className="mb-4">{step.icon}</div>
                <h3 className="font-display text-lg font-semibold text-brown mb-2">{step.title}</h3>
                <p className="text-brown-light text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
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
