'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/hooks/use-language'

const row1 = [
  { name: 'PCA', src: '/companies/PCA.png' },
  { name: 'APC', src: '/companies/apc.png' },
  { name: 'Artimes', src: '/companies/artimes.jpg' },
  { name: 'Bank of Africa', src: '/companies/bankafrika.jpg' },
  { name: 'Bank Assafa', src: '/companies/bankassafa.jpg' },
  { name: 'Bidawa', src: '/companies/bidawa.jpg' },
  { name: 'Caisse de Dépôt', src: '/companies/caisse.jpg' },
  { name: 'CDG', src: '/companies/cdg.jpg' },
  { name: 'Centre', src: '/companies/centre.jpg' },
  { name: 'CGEM', src: '/companies/cgem.png' },
  { name: 'CGI', src: '/companies/cgi.png' },
  { name: 'Chergui', src: '/companies/chergui.jpg' },
  { name: 'CNSS', src: '/companies/cnss.jpg' },
  { name: 'Edito', src: '/companies/edito.jpg' },
  { name: 'Maroc Telecom', src: '/companies/iam.png' },
]

const row2 = [
  { name: 'INRH', src: '/companies/inrh.jpg' },
  { name: 'Invest Morocco', src: '/companies/investmorroco.jpg' },
  { name: 'Kiabi', src: '/companies/kiabi.jpg' },
  { name: 'Marjane', src: '/companies/marjane.png' },
  { name: 'Marrakech', src: '/companies/marrakech.jpg' },
  { name: 'MyCloud', src: '/companies/mycloud.png' },
  { name: 'Nexum', src: '/companies/nexum.png' },
  { name: 'Richbond', src: '/companies/richbond.jpg' },
  { name: 'Sorec', src: '/companies/sorec.png' },
  { name: 'Taj Bladi', src: '/companies/tajbladi.png' },
  { name: 'Vidal', src: '/companies/vidal.jpg' },
  { name: 'VQR', src: '/companies/vqr.png' },
  { name: 'Zenata', src: '/companies/zenata.png' },
  { name: 'Zoo', src: '/companies/zoo.jpg' },
]

function ClientLogo({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex items-center justify-center px-8 py-4 bg-card rounded-xl border border-border h-16 w-40 shrink-0 group hover:border-secondary/35 transition-colors">
      <img
        src={src}
        alt={`${name} logo`}
        className="max-h-full max-w-full object-contain filter grayscale contrast-[0.8] opacity-60 group-hover:grayscale-0 group-hover:opacity-100 dark:group-hover:invert-0 transition-all duration-300"
      />
    </div>
  )
}

export function ClientMarquee() {
  const { t } = useLanguage()

  return (
    <section className="py-20 overflow-hidden bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
          {t('clientMarquee.title')}
        </h2>
        <div className="mt-2 w-16 h-1 bg-secondary mx-auto rounded-full" />
      </div>

      <div className="flex flex-col gap-6 relative">
        {/* Gradient shadows for smooth fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Row 1: Left scrolling */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-6 pr-6"
            animate={{ x: [0, -1800] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 35,
                ease: 'linear',
              },
            }}
          >
            {[...row1, ...row1, ...row1, ...row1].map((logo, index) => (
              <ClientLogo key={`r1-${logo.name}-${index}`} name={logo.name} src={logo.src} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right scrolling */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-6 pr-6"
            animate={{ x: [-1800, 0] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 35,
                ease: 'linear',
              },
            }}
          >
            {[...row2, ...row2, ...row2, ...row2].map((logo, index) => (
              <ClientLogo key={`r2-${logo.name}-${index}`} name={logo.name} src={logo.src} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
