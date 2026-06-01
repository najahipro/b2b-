'use client'

import { motion } from 'framer-motion'

const techStack = [
  { name: 'Google Cloud', icon: 'GCP' },
  { name: 'Vercel', icon: 'Vercel' },
  { name: 'Docker', icon: 'Docker' },
  { name: 'Bitbucket', icon: 'Bitbucket' },
  { name: 'Stripe', icon: 'Stripe' },
  { name: 'PostgreSQL', icon: 'PostgreSQL' },
  { name: 'Next.js', icon: 'Next.js' },
  { name: 'TypeScript', icon: 'TypeScript' },
  { name: 'Kubernetes', icon: 'K8s' },
  { name: 'Redis', icon: 'Redis' },
  { name: 'AWS', icon: 'AWS' },
  { name: 'Terraform', icon: 'Terraform' },
]

function TechLogo({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex items-center gap-3 px-6 py-3 bg-card rounded-lg border border-border">
      <span className="text-sm font-medium text-secondary">{icon}</span>
      <span className="text-sm font-medium text-foreground whitespace-nowrap">{name}</span>
    </div>
  )
}

export function TrustMarquee() {
  return (
    <section className="py-12 overflow-hidden bg-muted">
      <div className="mb-8 text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Trusted Technologies & Integration Partners
        </p>
      </div>
      
      <div className="relative">
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted to-transparent z-10" />
        
        {/* Marquee container */}
        <div className="flex">
          <motion.div
            className="flex gap-4"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 40,
                ease: 'linear',
              },
            }}
          >
            {/* Double the items for seamless loop */}
            {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, index) => (
              <TechLogo key={`${tech.name}-${index}`} name={tech.name} icon={tech.icon} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
