import { images } from './site-config'

export type ServiceIcon = 'plane' | 'ship' | 'truck' | 'warehouse' | 'file'

export type Service = {
  slug: string
  title: string
  shortTitle: string
  icon: ServiceIcon
  image: string
  imageAlt: string
  summary: string
  intro: string
  overview: string[]
  features: string[]
  benefits: { title: string; description: string }[]
  faqs: { question: string; answer: string }[]
}

export const services: Service[] = [
  {
    slug: 'air-freight',
    title: 'Air Freight',
    shortTitle: 'Air Freight',
    icon: 'plane',
    image: images.airFreight,
    imageAlt: 'Cargo aircraft being loaded with air freight pallets on an airport apron',
    summary:
      'Time-critical cargo flown on scheduled and charter capacity to major airports worldwide.',
    intro:
      'When deadlines are tight, our air freight team secures capacity on leading carriers and charters, handling everything from booking and screening to customs and final delivery.',
    overview: [
      'We consolidate and book cargo across a global network of airline partners, giving you a choice of express, standard and deferred services to balance speed with cost.',
      'Every shipment is screened, documented and monitored from origin airport to destination, with proactive alerts if a flight is rerouted or delayed.',
    ],
    features: [
      'Express, standard and economy service levels',
      'Airport-to-airport and door-to-door options',
      'Dangerous goods and temperature-controlled handling',
      'Charter solutions for oversized or urgent cargo',
      'Airway bill and security screening management',
      'Live milestone tracking on every consignment',
    ],
    benefits: [
      { title: 'Fastest transit', description: 'Intercontinental delivery in as little as 1–3 days.' },
      { title: 'High security', description: 'Screened, sealed and monitored cargo handling.' },
      { title: 'Global reach', description: 'Capacity to and from major airports worldwide.' },
    ],
    faqs: [
      {
        question: 'What is the maximum size for air freight?',
        answer:
          'Limits depend on aircraft type. Standard freighters accept pallets up to roughly 3 m in height; oversized cargo can be moved on charter aircraft.',
      },
      {
        question: 'Can you ship dangerous goods by air?',
        answer:
          'Yes. Our certified staff prepare IATA-compliant documentation, packaging and labelling for permitted dangerous goods classes.',
      },
    ],
  },
  {
    slug: 'ocean-freight',
    title: 'Ocean Freight',
    shortTitle: 'Ocean Freight',
    icon: 'ship',
    image: images.oceanFreight,
    imageAlt: 'Container ship loaded with containers sailing across the ocean',
    summary:
      'Cost-efficient FCL and LCL sea freight across the world’s major trade lanes.',
    intro:
      'Move high volumes economically with full container (FCL) and consolidated (LCL) services, backed by long-standing carrier relationships and port expertise.',
    overview: [
      'We secure space with leading ocean carriers on the world’s busiest trade lanes, offering weekly sailings and competitive contract and spot rates.',
      'From container stuffing and port handling to bill of lading issuance and destination delivery, a single team manages your shipment end to end.',
    ],
    features: [
      'Full container load (FCL) and less than container load (LCL)',
      'Reefer, open-top and flat-rack equipment',
      'Port-to-port and door-to-door delivery',
      'Bill of lading and cargo insurance arrangement',
      'Vessel schedule and transshipment monitoring',
      'Consolidation at origin hubs',
    ],
    benefits: [
      { title: 'Lowest cost per kg', description: 'The most economical mode for large volumes.' },
      { title: 'Any cargo type', description: 'Specialist equipment for every commodity.' },
      { title: 'Reliable schedules', description: 'Weekly departures on major trade lanes.' },
    ],
    faqs: [
      {
        question: 'Should I choose FCL or LCL?',
        answer:
          'FCL is typically more economical above around 13–15 cubic metres. Below that, LCL lets you pay only for the space you use.',
      },
      {
        question: 'How long does ocean freight take?',
        answer:
          'Transit times range from about 10 to 45 days depending on the trade lane, transshipment and port congestion.',
      },
    ],
  },
  {
    slug: 'heavy-machinery',
    title: 'Heavy Machinery Transport',
    shortTitle: 'Heavy Machinery',
    icon: 'truck',
    image: images.heavyMachinery,
    imageAlt: 'Excavator loaded onto a heavy haulage lowboy trailer',
    summary:
      'Engineered transport for oversized, overweight and out-of-gauge equipment.',
    intro:
      'From excavators and turbines to complete production lines, our project cargo specialists plan and execute heavy-lift moves safely and on schedule.',
    overview: [
      'Every move starts with a route survey, load calculation and permit plan. We select the right trailer, crane and escort configuration for the cargo.',
      'Our team coordinates with authorities, ports and site managers to keep oversized cargo moving through every stage of the journey.',
    ],
    features: [
      'Route surveys and feasibility studies',
      'Lowboy, extendable and modular trailers',
      'Crane, rigging and lashing coordination',
      'Oversize permits and police escorts',
      'Roll-on/roll-off and breakbulk shipping',
      'On-site loading supervision',
    ],
    benefits: [
      { title: 'Engineered planning', description: 'Load and route calculations for every move.' },
      { title: 'Full compliance', description: 'Permits, escorts and authority liaison handled.' },
      { title: 'Specialist fleet', description: 'Access to multi-axle and modular equipment.' },
    ],
    faqs: [
      {
        question: 'What counts as out-of-gauge cargo?',
        answer:
          'Any load that exceeds standard container or trailer dimensions or weight limits, requiring special equipment or permits.',
      },
    ],
  },
  {
    slug: 'warehousing',
    title: 'Warehousing',
    shortTitle: 'Warehousing',
    icon: 'warehouse',
    image: images.warehouse,
    imageAlt: 'Warehouse interior with tall pallet racks and a forklift',
    summary:
      'Secure storage, inventory management and fulfilment from strategic hubs.',
    intro:
      'Our bonded and general warehouses give you flexible capacity close to ports, airports and key markets, with inventory visibility you can rely on.',
    overview: [
      'Store pallets, cartons or bulk goods short or long term with WMS-driven inventory control, cycle counts and real-time stock reporting.',
      'Value-added services such as pick and pack, kitting, labelling and cross-docking help you get products to market faster.',
    ],
    features: [
      'Bonded and general storage',
      'Pick, pack and order fulfilment',
      'Cross-docking and transloading',
      'Inventory reporting and cycle counts',
      '24/7 security and CCTV monitoring',
      'Temperature-controlled zones',
    ],
    benefits: [
      { title: 'Flexible capacity', description: 'Scale storage up or down as demand changes.' },
      { title: 'Inventory accuracy', description: 'Warehouse management system visibility.' },
      { title: 'Strategic hubs', description: 'Facilities near major ports and airports.' },
    ],
    faqs: [
      {
        question: 'Do you offer short-term storage?',
        answer: 'Yes. We offer storage from a few days to long-term contracts, billed per pallet or per square metre.',
      },
    ],
  },
  {
    slug: 'customs-clearance',
    title: 'Customs Clearance & Documentation',
    shortTitle: 'Customs Clearance',
    icon: 'file',
    image: images.customs,
    imageAlt: 'Customs officer reviewing shipping documents beside containers',
    summary:
      'Licensed brokerage, tariff classification and compliant trade documentation.',
    intro:
      'Avoid costly delays at the border. Our licensed customs brokers prepare, submit and follow up on declarations so your cargo clears quickly and compliantly.',
    overview: [
      'We classify goods, calculate duties and taxes, and lodge import and export declarations electronically with the relevant authorities.',
      'Our documentation team checks every invoice, packing list and certificate before cargo departs, reducing the risk of holds and penalties.',
    ],
    features: [
      'Import and export declarations',
      'HS tariff classification',
      'Duty and tax calculation',
      'Certificates of origin',
      'Permits and licence coordination',
      'Bonded transit and temporary import',
    ],
    benefits: [
      { title: 'Faster clearance', description: 'Pre-checked documentation reduces holds.' },
      { title: 'Compliance first', description: 'Licensed brokers and up-to-date regulations.' },
      { title: 'Cost control', description: 'Accurate duty and tax calculations upfront.' },
    ],
    faqs: [
      {
        question: 'What documents do I need for customs?',
        answer:
          'Typically a commercial invoice, packing list and transport document (bill of lading or airway bill). Some goods also need certificates of origin, permits or licences.',
      },
    ],
  },
]

export const featuredServiceSlugs = ['ocean-freight', 'heavy-machinery', 'air-freight']

export function getService(slug: string) {
  return services.find((s) => s.slug === slug)
}

export const customsDocuments = [
  {
    title: 'Commercial Invoice',
    description: 'Details the transaction, value, currency and parties involved in the sale.',
  },
  {
    title: 'Packing List',
    description: 'Itemised contents, weights, dimensions and package marks for inspection.',
  },
  {
    title: 'Bill of Lading / Airway Bill',
    description: 'The transport contract and receipt issued by the carrier for the goods.',
  },
  {
    title: 'Certificate of Origin',
    description: 'Confirms where goods were manufactured, used to apply preferential duty rates.',
  },
  {
    title: 'Import / Export Licences',
    description: 'Required for controlled, restricted or regulated commodities.',
  },
  {
    title: 'Insurance Certificate',
    description: 'Evidence of cargo insurance cover for the value of the consignment.',
  },
]

export const comparisonRows = [
  { service: 'Air Freight', speed: 5, cost: 2, capacity: 2, idealFor: 'Urgent, high-value and perishable goods' },
  { service: 'Ocean Freight', speed: 2, cost: 5, capacity: 5, idealFor: 'Large volumes and non-urgent cargo' },
  { service: 'Road Freight', speed: 4, cost: 4, capacity: 3, idealFor: 'Regional and cross-border deliveries' },
  { service: 'Heavy Machinery', speed: 2, cost: 2, capacity: 5, idealFor: 'Oversized and out-of-gauge equipment' },
  { service: 'Warehousing', speed: 3, cost: 4, capacity: 4, idealFor: 'Storage, fulfilment and distribution' },
]
