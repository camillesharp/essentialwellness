import { CheckCircle, Scale, Dumbbell, Apple, ClipboardList } from 'lucide-react'
import Hero from '../components/ui/Hero'
import FAQAccordion from '../components/ui/FAQAccordion'
import CTABanner from '../components/ui/CTABanner'

const benefits = [
  'Physician-supervised care tailored to your metabolism and health history',
  'Access to FDA-approved weight loss medications when appropriate',
  'Sustainable strategies — not crash diets or gimmicks',
  'Regular check-ins and adjustments to keep you on track',
  'Nutritional guidance and lifestyle support built into your plan',
  'Discreet, non-judgmental care in a supportive environment',
]

const process = [
  {
    icon: <ClipboardList className="w-7 h-7 text-turquoise" />,
    title: 'Initial Consultation',
    desc: 'We start with a thorough review of your health history, current weight, lifestyle, and goals to build a complete picture.',
  },
  {
    icon: <Scale className="w-7 h-7 text-turquoise" />,
    title: 'Personalized Plan',
    desc: 'Your physician designs a program that may include medications, nutritional guidelines, and behavioral strategies tailored specifically to you.',
  },
  {
    icon: <Apple className="w-7 h-7 text-turquoise" />,
    title: 'Guided Implementation',
    desc: 'You receive clear instructions and support as you begin your program, with easy access to your care team for questions.',
  },
  {
    icon: <Dumbbell className="w-7 h-7 text-turquoise" />,
    title: 'Ongoing Monitoring',
    desc: 'Regular follow-ups allow us to track progress, celebrate wins, and adjust your plan to maximize results over time.',
  },
]

const faqs = [
  {
    question: 'Who is a good candidate for medical weight loss?',
    answer: 'Medical weight loss is ideal for adults who have struggled to lose weight through diet and exercise alone, those with a BMI of 27 or higher (especially with weight-related health conditions), and anyone looking for a physician-guided, evidence-based approach rather than fad diets.',
  },
  {
    question: 'What medications might be part of my plan?',
    answer: 'Depending on your health profile and goals, your physician may discuss FDA-approved options such as GLP-1 receptor agonists (like semaglutide), appetite suppressants, or other evidence-based medications. All prescriptions are made on a case-by-case basis after a thorough evaluation.',
  },
  {
    question: 'How quickly will I see results?',
    answer: 'Most patients begin noticing changes within the first 4–8 weeks. Sustainable weight loss typically progresses at 1–2 pounds per week on average. Results vary based on individual factors including starting weight, metabolism, adherence, and the specific treatment approach.',
  },
  {
    question: 'Is medical weight loss covered by insurance?',
    answer: 'Coverage varies by plan. Our team can help you understand what may be covered. We also offer transparent self-pay pricing for those without coverage.',
  },
  {
    question: 'Will I have to follow a strict diet or exercise plan?',
    answer: 'Your plan will include nutritional guidance and activity recommendations, but we focus on sustainable lifestyle changes rather than extreme restrictions. We work with your preferences and current fitness level to build habits that last.',
  },
]

function ImagePlaceholder() {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-brown-bg aspect-[4/3] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-brown-bg to-[#4A3020]" />
      <div className="relative text-center px-8">
        <div className="w-20 h-20 rounded-full border border-cream/15 flex items-center justify-center mx-auto mb-4">
          <Scale className="w-8 h-8 text-turquoise/50" />
        </div>
        <p className="text-cream/25 text-sm">Photo Coming Soon</p>
      </div>
    </div>
  )
}

export default function WeightLoss() {
  return (
    <>
      <title>Medically Supervised Weight Loss | Essential Wellness Medical</title>

      <Hero
        tag="Weight Loss"
        title="Lose Weight."
        titleItalic="Keep It Off."
        subtitle="Medically supervised programs that go beyond the scale — addressing the root causes of weight gain with science-backed treatments and compassionate care."
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
                A Smarter Approach to Weight Loss
              </h2>
              <p className="text-brown-light leading-relaxed mb-5">
                Weight loss is not simply about willpower. Hormones, metabolism, genetics, and lifestyle all play a role. Our physician-guided program addresses these factors directly, using clinically proven tools to help you achieve and maintain a healthy weight.
              </p>
              <p className="text-brown-light leading-relaxed">
                Whether you're exploring GLP-1 medications, looking for structured nutritional support, or simply want medical guidance on your weight loss journey, we're here to help you build a plan that fits your life.
              </p>
            </div>
            <ImagePlaceholder />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-tan">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-turquoise text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Benefits
            </p>
            <h2 className="font-display text-4xl font-bold text-brown">
              What You Can Expect
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 bg-offwhite rounded-xl p-5 border border-brown/10">
                <CheckCircle className="w-5 h-5 text-turquoise flex-shrink-0 mt-0.5" />
                <p className="text-brown-light text-sm leading-relaxed">{b}</p>
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
              Your Path to Results
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
            <p className="text-turquoise text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              FAQ
            </p>
            <h2 className="font-display text-4xl font-bold text-brown">
              Common Questions
            </h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner variant="call" />
    </>
  )
}
