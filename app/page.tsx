import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { BentoWorkflow } from '@/components/bento-workflow'
import { TrustMarquee } from '@/components/trust-marquee'
import { Capabilities } from '@/components/capabilities'
import { OrbitalIntegrations } from '@/components/orbital-integrations'
import { FeaturedWork } from '@/components/featured-work'
import { HowWeWork } from '@/components/how-we-work'
import { Faq } from '@/components/faq'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BentoWorkflow />
        <TrustMarquee />
        <Capabilities />
        <OrbitalIntegrations />
        <FeaturedWork />
        <HowWeWork />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
