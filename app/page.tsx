import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { BentoWorkflow } from '@/components/bento-workflow'
import { TrustMarquee } from '@/components/trust-marquee'
import { Capabilities } from '@/components/capabilities'
import { OrbitalIntegrations } from '@/components/orbital-integrations'
import { FeaturedWork } from '@/components/featured-work'
import { Faq } from '@/components/faq'
import { BlogPreview } from '@/components/blog-preview'
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
        <BlogPreview />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
