import Image from 'next/image'
import { images } from '@/lib/site-config'
import { Container, CtaButton, Eyebrow } from '@/components/shared/primitives'

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <Image
        src={images.heroPort}
        alt="Container port terminal with stacked shipping containers and gantry cranes"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/95 via-navy/75 to-navy/30" />

      <Container className="flex min-h-[560px] flex-col justify-center py-24 sm:min-h-[620px] lg:min-h-[680px]">
        <div className="flex max-w-2xl flex-col gap-6 animate-fade-up">
          <Eyebrow tone="light">Logistics Solutions</Eyebrow>
          <h1 className="text-balance text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Logistics Solutions for Your <span className="text-brand">Business</span>
          </h1>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-white/80">
            Reliable air, ocean and road transportation, warehousing and customs clearance — planned by experts and
            tracked in real time from pickup to final delivery.
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <CtaButton href="/contact">Get Quote</CtaButton>
            <CtaButton href="/services" variant="outline-light">
              Our Services
            </CtaButton>
          </div>
        </div>
      </Container>
    </section>
  )
}
