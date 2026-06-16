import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-col divide-y divide-brown/10">
      {items.map((item, i) => (
        <div key={i}>
          <button
            className="w-full flex items-center justify-between gap-4 py-5 text-left group"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="font-display text-lg font-semibold text-brown group-hover:text-turquoise transition-colors">
              {item.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-turquoise flex-shrink-0 transition-transform duration-300 ${
                openIndex === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? 'max-h-96 pb-5' : 'max-h-0'
            }`}
          >
            <p className="text-brown-light leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
