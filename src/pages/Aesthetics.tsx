import { CheckCircle, Sparkles } from 'lucide-react'
import Hero from '../components/ui/Hero'
import FAQAccordion from '../components/ui/FAQAccordion'
import CTABanner from '../components/ui/CTABanner'

const treatments = [
  {
    title: 'Neurotoxin Injections (Botox / Dysport)',
    desc: 'Smooth fine lines and wrinkles around the forehead, eyes, and mouth with precision-placed neurotoxin treatments.',
  },
  {
    title: 'Dermal Fillers',
    desc: 'Restore volume and contour to the face with hyaluronic acid fillers for lips, cheeks, jawline, and under-eye areas.',
  },
  {
    title: 'Skin Rejuvenation',
    desc: 'Medical-grade treatments to improve skin tone, texture, pigmentation, and overall radiance.',
  },
  {
    title: 'PDO Thread Lifts',
    desc: 'A minimally invasive lifting treatment that tightens and rejuvenates skin using dissolvable threads.',
  },
  {
    title: 'Medical-Grade Chemical Peels',
    desc: 'Physician-strength peels that address acne, sun damage, hyperpigmentation, and uneven skin texture.',
  },
  {
    title: 'Personalized Skincare Consulting',
    desc: 'Physician guidance on medical-grade skincare products and routines tailored to your skin type and goals.',
  },
]

const outcomes = [
  'Natural-looking results that enhance — not alter — your appearance',
  'Treatments performed or directly supervised by a licensed physician',
  'Customized approach based on your facial anatomy and aesthetic goals',
  'Minimal downtime with most treatments taking under an hour',
  'Clear pre- and post-care instructions for optimal results',
]

const faqs = [
  {
    question: 'What aesthetic treatments do you offer?',
    answer: 'We offer neurotoxin injections (Botox/Dysport), dermal fillers, skin rejuvenation treatments, PDO thread lifts, chemical peels, and personalized skincare consulting. During your consultation, your physician will recommend the most appropriate options for your specific goals.',
  },
  {
    question: 'Are the treatments painful?',
    answer: 'Most patients describe injectable treatments as minor discomfort rather than pain. We use fine needles, topical numbing agents when appropriate, and gentle techniques to minimize discomfort. Most treatments are well-tolerated and completed within 30–60 minutes.',
  },
  {
    question: 'How long do results last?',
    answer: 'Results vary by treatment. Neurotoxins typically last 3–4 months. Dermal fillers last 6–18 months depending on the product and area treated. Thread lifts can last 12–18 months. Your physician will provide realistic expectations specific to your treatment plan.',
  },
  {
    question: 'Is there downtime after treatment?',
    answer: 'Most aesthetic treatments involve minimal to no downtime. You may experience mild swelling, redness, or bruising at injection sites for 24–72 hours. We\'ll provide detailed aftercare instructions and schedule a follow-up to ensure you\'re happy with your results.',
  },
  {
    question: 'How do I know which treatment is right for me?',
    answer: 'That\'s exactly what your consultation is for. Your physician will assess your facial structure, skin quality, and aesthetic goals to recommend a personalized treatment plan. We never push unnecessary treatments — only what will genuinely benefit you.',
  },
]

function ImagePlaceholder() {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-brown-bg aspect-[4/3] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-brown-bg to-[#4A3020]" />
      <div className="relative text-center px-8">
        <div className="w-20 h-20 rounded-full border border-cream/15 flex items-center justify-center mx-auto mb-4">
          <Sparkles className="w-8 h-8 text-turquoise/50" />
        </div>
        <p className="text-cream/25 text-sm">Photo Coming Soon</p>
      </div>
    </div>
  )
}

export default function Aesthetics() {
  return (
    <>
      <title>Aesthetic Treatments | Essential Wellness Medical</title>

      <Hero
        tag="Aesthetics"
        title="Look Your Best,"
        titleItalic="Feel It Too."
        subtitle="Medical-grade aesthetic treatments delivered with precision, artistry, and a physician's eye — for results that look natural and last."
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
                Aesthetic Medicine, Done Right
              </h2>
              <p className="text-brown-light leading-relaxed mb-5">
                Aesthetic medicine is about enhancing what makes you uniquely you — not changing who you are. At Essential Wellness Medical, every aesthetic treatment is approached with a physician's understanding of anatomy, safety, and artistry.
              </p>
              <p className="text-brown-light leading-relaxed">
                Whether you want to smooth a few lines, restore youthful volume, or refresh your skin's overall appearance, we'll develop a plan that respects your natural features and delivers results you'll love.
              </p>
            </div>
            <ImagePlaceholder />
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-24 bg-tan">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-turquoise text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Treatments
            </p>
            <h2 className="font-display text-4xl font-bold text-brown">
              Available Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((t, i) => (
              <div key={i} className="bg-offwhite rounded-2xl p-7 border border-brown/10">
                <div className="w-8 h-8 rounded-lg bg-turquoise/20 flex items-center justify-center mb-4">
                  <Sparkles className="w-4 h-4 text-turquoise" />
                </div>
                <h3 className="font-display text-lg font-semibold text-brown mb-2">{t.title}</h3>
                <p className="text-brown-light text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-turquoise text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              What to Expect
            </p>
            <h2 className="font-display text-4xl font-bold text-brown">
              Expected Outcomes
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {outcomes.map((o, i) => (
              <div key={i} className="flex items-start gap-4 bg-offwhite rounded-xl p-5 border border-brown/5">
                <CheckCircle className="w-5 h-5 text-turquoise flex-shrink-0 mt-0.5" />
                <p className="text-brown-light text-sm leading-relaxed">{o}</p>
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
