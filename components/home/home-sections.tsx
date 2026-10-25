import Image from 'next/image'
import { Check } from 'lucide-react'
import { images, processSteps, statistics, siteConfig } from '@/lib/site-config'
import { featuredServiceSlugs, getService, type Service } from '@/lib/services-data'
import { faqs } from '@/lib/faq-data'
import { Container, CtaButton, SectionHeading } from '@/components/shared/primitives'
import { ServiceCard } from '@/components/services/service-card'
import { Accordion } from '@/components/shared/accordion'

const aboutPoints = [
  'Dedicated account managers',
  'In-house customs brokerage',
  'Vetted global carrier network',
  'Transparent, all-in quotes',
]

export function AboutPreview() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <div className="relative grid grid-cols-2 gap-4 pb-10 sm:gap-5">
          <div className="relative row-span-2 aspect-[3/4] overflow-hidden rounded-md">
            <Image
              src={images.warehouse}
              alt="Warehouse with tall pallet racking and a forklift"
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-md">
            <Image
              src={images.truck}
              alt="Semi-truck hauling a container on a highway"
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-md">
            <Image
              src={images.oceanFreight}
              alt="Container ship loaded with cargo at sea"
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-1/2 grid h-36 w-36 -translate-x-1/2 place-items-center rounded-full border-[6px] border-white bg-brand text-center text-white shadow-xl sm:h-40 sm:w-40">
            <div>
              <p className="text-4xl font-black leading-none sm:text-5xl">{siteConfig.company.foundedYearsAgo}+</p>
              <p className="mt-1 text-[11px] font-bold uppercase leading-tight tracking-wider">
                Years of
                <br />
                Experience
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="About Us"
            title="Your trusted partner for global freight & logistics"
            description="We combine the reach of an international network with the attention of a dedicated team. Every shipment is planned, monitored and delivered by specialists who understand your cargo, your deadlines and your customers."
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {aboutPoints.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[15px] font-semibold text-navy">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand text-white">
                  <Check className="h-3 w-3" aria-hidden="true" />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <CtaButton href="/about">More About Us</CtaButton>
          </div>
        </div>
      </Container>
    </section>
  )
}

export function FeaturedServices() {
  const featured = featuredServiceSlugs.map(getService).filter((s): s is Service => Boolean(s))
  return (
    <section className="bg-surface py-20 lg:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Our Services"
          title="Specialist logistics services"
          description="From time-critical air freight to engineered heavy-lift moves, we match every shipment with the right mode, equipment and team."
          align="center"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        <div className="flex justify-center">
          <CtaButton href="/services" variant="outline-dark">
            View All Services
          </CtaButton>
        </div>
      </Container>
    </section>
  )
}

export function ProcessSection() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-md lg:order-2">
          <Image
            src={images.process}
            alt="Warehouse worker scanning a package barcode before dispatch"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-10 lg:order-1">
          <SectionHeading
            eyebrow="How It Works"
            title="A simple, transparent shipping process"
            description="Four clear stages — each with live updates so you always know where your cargo is."
          />
          <ol className="flex flex-col gap-8">
            {processSteps.map((step, i) => (
              <li key={step.number} className="relative flex gap-5">
                {i < processSteps.length - 1 && (
                  <span aria-hidden="true" className="absolute top-14 bottom-[-2rem] left-7 w-px bg-border" />
                )}
                <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full bg-brand text-lg font-black text-white shadow-[0_6px_18px_rgba(242,107,29,0.35)]">
                  {step.number}
                </span>
                <div className="pt-1.5">
                  <h3 className="text-lg font-extrabold text-navy">{step.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}

export function StatisticsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-20 lg:py-28" aria-labelledby="stats-heading">
      <Image src={images.statsBackground} alt="" fill sizes="100vw" className="-z-20 object-cover" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy/80" />
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Our Track Record"
          title={<span id="stats-heading">What We&apos;ve Accomplished</span>}
          tone="light"
          align="center"
        />
        <dl className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {statistics.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1.5 rounded-md bg-white px-4 py-7 text-center shadow-lg">
              <dt className="order-2 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground sm:text-[13px]">
                {s.label}
              </dt>
              <dd className="order-1 text-3xl font-black text-navy sm:text-4xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}

export function OpportunitySection() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Turning logistics challenges into business opportunities"
            description="Supply chains are complex. We simplify them with proactive planning, clear communication and a network you can rely on — so you can focus on growing your business while we move it."
          />
          <dl className="grid grid-cols-2 gap-6 border-t border-border pt-6">
            <div>
              <dt className="text-sm font-semibold text-muted-foreground">Countries served</dt>
              <dd className="text-3xl font-black text-brand">150+</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-muted-foreground">Shipment support</dt>
              <dd className="text-3xl font-black text-brand">24/7</dd>
            </div>
          </dl>
        </div>
        <div className="relative aspect-[16/11] overflow-hidden rounded-md">
          <Image
            src={images.truck}
            alt="Freight truck transporting a shipping container on an open highway"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  )
}

export function FaqPreview() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Quick answers to the questions we hear most. Can’t find what you need? Our team is happy to help."
          />
          <div>
            <CtaButton href="/faq" variant="dark">
              View All FAQs
            </CtaButton>
          </div>
        </div>
        <Accordion items={faqs.slice(0, 4).map((f) => ({ title: f.question, content: f.answer }))} />
      </Container>
    </section>
  )
}
