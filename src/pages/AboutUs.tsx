import { Award, GraduationCap, Heart, Shield, User } from 'lucide-react'
import CTABanner from '../components/ui/CTABanner'

const credentials = [
  { icon: <GraduationCap className="w-5 h-5" />, label: 'Medical Degree', detail: 'Doctor of Medicine (MD)' },
  { icon: <Award className="w-5 h-5" />, label: 'Board Certified', detail: 'American Board of [Specialty]' },
  { icon: <Shield className="w-5 h-5" />, label: 'Licensed', detail: 'State Medical License' },
  { icon: <Heart className="w-5 h-5" />, label: 'Experience', detail: '10+ Years in Practice' },
]

const values = [
  {
    title: 'Patient-First Care',
    desc: 'Every decision we make starts with you. We take the time to understand your full picture — not just your symptoms.',
  },
  {
    title: 'Evidence-Based Medicine',
    desc: 'We rely on peer-reviewed research, not trends, to guide every treatment recommendation we make.',
  },
  {
    title: 'Whole-Person Approach',
    desc: 'Your health is more than a diagnosis. We address the physical, emotional, and lifestyle factors that shape how you feel.',
  },
  {
    title: 'Radical Transparency',
    desc: 'We explain everything clearly — what we recommend, why we recommend it, and what you can realistically expect.',
  },
]

function PhotoPlaceholder({ label }: { label: string }) {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-brown-bg flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-brown-bg to-[#4A3020]" />
      <div className="relative py-24 text-center px-8">
        <div className="w-24 h-24 rounded-full border border-cream/15 flex items-center justify-center mx-auto mb-4">
          <User className="w-10 h-10 text-turquoise/40" />
        </div>
        <p className="text-cream/25 text-sm">{label}</p>
      </div>
    </div>
  )
}

export default function AboutUs() {
  return (
    <>
      <title>About Us | Essential Wellness Medical</title>

      {/* Page Header */}
      <section className="bg-brown-bg py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-turquoise" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #F5F0E8 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-turquoise text-xs font-semibold uppercase tracking-[0.2em] mb-4">About Us</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-cream mb-6">
            Meet Your Doctor
          </h1>
          <p className="text-cream/65 text-xl max-w-2xl mx-auto leading-relaxed">
            A physician dedicated to helping patients look, feel, and live their best through personalized, evidence-based medicine.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <PhotoPlaceholder label="Doctor Photo Coming Soon" />
            <div>
              <p className="text-turquoise text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Biography
              </p>
              <h2 className="font-display text-4xl font-bold text-brown mb-2">
                Dr. [First Last], MD
              </h2>
              <p className="text-turquoise font-medium mb-6">Founder, Essential Wellness Medical</p>
              <div className="flex flex-col gap-4 text-brown-light leading-relaxed">
                <p>
                  Dr. [Last Name] founded Essential Wellness Medical with a simple belief: every patient deserves a physician who listens, thinks critically, and puts their goals first. With over a decade of clinical experience, Dr. [Last Name] brings deep expertise across weight management, hormone optimization, aesthetic medicine, and cannabis therapeutics.
                </p>
                <p>
                  After years in traditional medical settings, Dr. [Last Name] recognized that the standard model of care — rushed appointments and one-size-fits-all protocols — was leaving patients underserved. Essential Wellness Medical was built as an alternative: a practice where patients receive the time, attention, and personalized care they deserve.
                </p>
                <p>
                  Dr. [Last Name] is passionate about preventative medicine and helping patients not just avoid disease, but genuinely thrive. Whether a patient is seeking to lose weight, restore hormonal balance, or explore medical cannabis, the approach is always the same: thorough, evidence-based, and completely tailored to the individual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((c, i) => (
              <div key={i} className="bg-cream rounded-xl p-6 flex flex-col items-center text-center gap-3 border border-brown/5">
                <div className="w-10 h-10 rounded-full bg-turquoise/10 flex items-center justify-center text-turquoise">
                  {c.icon}
                </div>
                <div>
                  <p className="font-semibold text-brown text-sm">{c.label}</p>
                  <p className="text-brown-light text-xs mt-0.5">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-tan">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-turquoise text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Our Philosophy
              </p>
              <h2 className="font-display text-4xl font-bold text-brown mb-6">
                Medicine the Way It Should Be
              </h2>
              <p className="text-brown-light leading-relaxed mb-6">
                We built Essential Wellness Medical on the conviction that excellent healthcare requires time, curiosity, and genuine partnership between doctor and patient. Our practice is structured to give every patient the attention they need — not the minimum that's possible in a 10-minute appointment.
              </p>
              <p className="text-brown-light leading-relaxed">
                We're proud to serve a diverse patient community and maintain a judgment-free environment for all services, including cannabis and hormone therapy. Your health journey is your own — we're here to support it.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((v, i) => (
                <div key={i} className="bg-offwhite rounded-xl p-6 border border-brown/10">
                  <h3 className="font-display text-base font-semibold text-brown mb-2">{v.title}</h3>
                  <p className="text-brown-light text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Second photo section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-turquoise text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Our Practice
              </p>
              <h2 className="font-display text-4xl font-bold text-brown mb-6">
                A Space Built for You
              </h2>
              <p className="text-brown-light leading-relaxed mb-5">
                Essential Wellness Medical is designed to feel different from the moment you walk in. Calm, welcoming, and unhurried — our environment reflects our commitment to care that goes beyond the transactional.
              </p>
              <p className="text-brown-light leading-relaxed">
                Whether you're coming in for an aesthetic treatment, a wellness consultation, or a follow-up on your weight loss program, you can expect the same warm, attentive experience every time.
              </p>
            </div>
            <PhotoPlaceholder label="Office Photo Coming Soon" />
          </div>
        </div>
      </section>

      <CTABanner
        variant="call"
        title="Ready to Meet Dr. [Last Name]?"
        subtitle="Call us to schedule your free 15-minute phone consultation and find out how we can help."
      />
    </>
  )
}
