/**
 * Central brand + company configuration.
 * Change values here to rebrand the entire website.
 */
export const siteConfig = {
  company: {
    name: 'COMPANY NAME',
    shortName: 'COMPANY',
    logoMark: 'CN',
    logo: null as string | null,
    tagline: 'Reliable logistics, delivered worldwide.',
    description:
      'An international freight forwarding and logistics partner moving cargo by air, ocean and road — with end-to-end visibility from pickup to proof of delivery.',
    email: 'operations@company-name.com',
    phone: '+1 (000) 000-0000',
    address: '100 Harbour Gateway, Suite 400',
    headquarters: 'Global Headquarters, Port District',
    businessHours: [
      { days: 'Monday – Friday', hours: '08:00 – 18:00' },
      { days: 'Saturday', hours: '09:00 – 14:00' },
      { days: 'Sunday', hours: 'Closed' },
    ],
    supportNote: '24/7 shipment support for active consignments.',
    social: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'linkedin' },
      { label: 'Facebook', href: 'https://www.facebook.com', icon: 'facebook' },
      { label: 'X', href: 'https://x.com', icon: 'x' },
      { label: 'Instagram', href: 'https://www.instagram.com', icon: 'instagram' },
    ] as const,
    foundedYearsAgo: 30,
  },
  brand: {
    primary: '#F26B1D',
    dark: '#0B1A2B',
  },
  tracking: {
    prefix: 'PRL',
    placeholder: 'PRL-7425487-570',
  },
  url: 'https://www.company-name.com',
}

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'All Services', href: '/services' },
      { label: 'Air Freight', href: '/services/air-freight' },
      { label: 'Ocean Freight', href: '/services/ocean-freight' },
      { label: 'Heavy Machinery Transport', href: '/services/heavy-machinery' },
      { label: 'Warehousing', href: '/services/warehousing' },
      { label: 'Customs Clearance', href: '/services/customs-clearance' },
      { label: 'Service Comparison', href: '/service-comparison' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  { label: 'Track & Trace', href: '/track' },
  { label: 'Contact', href: '/contact' },
] as const

/** All imagery in one place so it can be swapped without touching components. */
export const images = {
  heroPort: '/images/hero-port.jpg',
  warehouse: '/images/warehouse.jpg',
  truck: '/images/truck.jpg',
  oceanFreight: '/images/ocean-freight.jpg',
  airFreight: '/images/air-freight.jpg',
  heavyMachinery: '/images/heavy-machinery.jpg',
  customs: '/images/customs.jpg',
  statsBackground: '/images/stats-bg.jpg',
  ctaBackground: '/images/cta-bg.jpg',
  trackHero: '/images/track-hero.jpg',
  contactHero: '/images/contact-hero.jpg',
  process: '/images/process.jpg',
}

export const statistics = [
  { value: '10,000+', label: 'Shipments Delivered' },
  { value: '500+', label: 'Happy Clients' },
  { value: '28', label: 'Years of Experience' },
  { value: '99.8%', label: 'On-Time Delivery' },
]

export const processSteps = [
  {
    number: '01',
    title: 'Pick & Secure Package',
    description:
      'Our crews collect your cargo, verify documentation and secure every item with the right packaging, lashing and labelling for its journey.',
  },
  {
    number: '02',
    title: 'Real-Time Tracking & Transport',
    description:
      'Your consignment moves through our network of carriers and hubs while milestone updates flow into Track & Trace in real time.',
  },
  {
    number: '03',
    title: 'Safe Delivery',
    description:
      'Final-mile teams coordinate delivery windows, site access and unloading so cargo arrives intact and on schedule.',
  },
  {
    number: '04',
    title: 'Delivery Confirmation',
    description:
      'Proof of delivery, signatures and condition reports are recorded and shared with you the moment the shipment is handed over.',
  },
]
