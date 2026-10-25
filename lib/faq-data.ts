export type FaqItem = { question: string; answer: string }

export const faqs: FaqItem[] = [
  {
    question: 'How quickly can you deliver my shipment?',
    answer:
      'Transit times depend on the mode and lane. Air freight typically takes 1–5 days, road freight 1–7 days regionally, and ocean freight 10–45 days. We confirm an estimated delivery date with every quote.',
  },
  {
    question: 'Can I track my shipment in real time?',
    answer:
      'Yes. Enter your tracking number on the Track & Trace page to see the current status, location on our interactive globe, route and every milestone event.',
  },
  {
    question: 'What countries do you serve?',
    answer:
      'We move cargo to and from most countries through our own offices and a vetted partner network. Contact our team to confirm coverage for a specific lane.',
  },
  {
    question: 'What documents are required?',
    answer:
      'Most international shipments require a commercial invoice, packing list and transport document. Certain goods also need certificates of origin, permits or licences. Our documentation team will advise you before departure.',
  },
  {
    question: 'Do you handle customs clearance?',
    answer:
      'Yes. Our licensed customs brokers handle import and export declarations, tariff classification and duty calculations so your cargo clears without unnecessary delays.',
  },
  {
    question: 'What happens if my shipment is delayed?',
    answer:
      'Our operations team monitors every consignment. If a delay occurs, we notify you proactively, explain the cause and share a revised estimated delivery date along with any recovery options.',
  },
]
