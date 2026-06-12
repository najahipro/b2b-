import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { ClientMarquee } from '@/components/client-marquee'
import { BentoWorkflow } from '@/components/bento-workflow'
import { TrustMarquee } from '@/components/trust-marquee'
import { Capabilities } from '@/components/capabilities'
import { OrbitalIntegrations } from '@/components/orbital-integrations'
<<<<<<< HEAD
import { HomeLaptopMarquee } from '@/components/home-laptop-marquee'
=======
import { FeaturedWork } from '@/components/featured-work'
>>>>>>> 6e8b5ab6cdc8bad5f66b8a8079f6262858c1541b
import { HowWeWork } from '@/components/how-we-work'
import { Faq } from '@/components/faq'
import { CallToActionSection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClientMarquee />
        <BentoWorkflow />
        <TrustMarquee />
        <Capabilities />
        <OrbitalIntegrations />
<<<<<<< HEAD
        <HomeLaptopMarquee />
=======
        <FeaturedWork />
>>>>>>> 6e8b5ab6cdc8bad5f66b8a8079f6262858c1541b
        <HowWeWork />
        <Faq />
        <CallToActionSection />
      </main>
      <Footer />
    </>
  )
}
