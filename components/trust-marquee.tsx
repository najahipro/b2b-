'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/hooks/use-language'
import { ReactNode } from 'react'

// --- Custom Brand SVGs ---
const GcpLogo = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <path d="M12.014 9.613l-4.004-6.936h8.008l-4.004 6.936z" fill="#EA4335" />
    <path d="M7.994 2.677L3.99 9.613H12l-4.006-6.936z" fill="#4285F4" />
    <path d="M3.99 9.613l4.004 6.936h-8.01l4.006-6.936z" fill="#34A853" />
    <path d="M7.994 16.549l4.006-6.936h8.01l-4.006 6.936z" fill="#FBBC05" />
  </svg>
)

const VercelLogo = () => (
  <svg className="w-5 h-5 dark:fill-white fill-black" viewBox="0 0 24 24">
    <path d="M24 22.525H0L12 1.748l12 20.777z" />
  </svg>
)

const DockerLogo = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#2496ED">
    <path d="M13.983 11.078h2.119v-2.006h-2.119zm-2.523 0h2.118V9.072h-2.118zm-2.5 0h2.119V9.072H8.96zm-2.523 0h2.119V9.072H6.437zm0-2.434h2.119V6.638H6.437zm2.5 0h2.119V6.638H8.96zm2.5 0h2.118V6.638h-2.118zm2.523 0h2.119V6.638h-2.119zm-10.046 4.868h2.119v-2.006H3.891zm2.523 0h2.119v-2.006H6.414zm2.5 0h2.119v-2.006H8.914zm2.5 0h2.118v-2.006h-2.118zm2.523 0h2.119v-2.006h-2.119zm2.523 0h2.119v-2.006h-2.119zm2.5 0h2.119v-2.006h-2.119zM23.99 12.395c-.356-.817-1.162-1.344-1.954-1.344h-.056a8.21 8.21 0 00-.363-2.176 1.48 1.48 0 00-.73-.805 1.5 1.5 0 00-1.293-.058 5.75 5.75 0 00-1.802 1.4 7.6 7.6 0 00-2.3-1.637 11.644 11.644 0 00-4.043-.63h-.326v8.43h.084c.33.01.666.023.997.05a8.68 8.68 0 014.28 1.764c.732.593 1.442 1.29 2.052 2.083.56.732 1.05 1.516 1.463 2.344.426.852 1.157 1.348 2.072 1.348h.083c.92-.01 1.71-.563 2.114-1.42 1.002-2.132.894-4.805-.296-7.382z"/>
  </svg>
)

const BitbucketLogo = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0052CC">
    <path d="M22.3 3.3c-.2-.2-.5-.3-.9-.3H2.6c-.4 0-.7.1-.9.3-.2.2-.3.5-.2.9l2.2 16.2c.1.5.5.9.9.9h14.8c.5 0 .8-.4.9-.9l2.2-16.2c.1-.4 0-.7-.2-.9zM15 15.3H9L7.8 8.8h8.4L15 15.3z"/>
  </svg>
)

const StripeLogo = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#635BFF">
    <path d="M13.962 10.3c0-1.077-.816-1.54-2.1-1.54-1.528 0-2.923.518-4.004 1.181l-.837-2.112c1.336-.717 3.228-1.2 5.093-1.2 3.2 0 5.166 1.621 5.166 4.355 0 3.731-5.112 4.17-5.112 5.588 0 .584.524.896 1.312.896 1.758 0 3.32-.67 4.544-1.41l.79 2.072c-1.39.957-3.481 1.493-5.556 1.493-3.328 0-5.419-1.54-5.419-4.305 0-3.974 5.122-4.436 5.122-5.718z"/>
  </svg>
)

const PostgresqlLogo = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#336791">
    <path d="M12 11.5c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6zm-3.5 4.5h-.7c-.8 0-1.5-.7-1.5-1.5V6.7c0-.8.7-1.5 1.5-1.5H9L12.5 9V4c0-.8-.7-1.5-1.5-1.5H2C1.2 2.5.5 3.2.5 4v12c0 .8.7 1.5 1.5 1.5h8.5L9 16z"/>
  </svg>
)

const NextjsLogo = () => (
  <svg className="w-5 h-5 dark:invert" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm5.176 17.6L12.35 11.23v6.37H11.1V9h1.25l4.826 6.37V9h1.25v8.6z"/>
  </svg>
)

const TypeScriptLogo = () => (
  <svg className="w-5 h-5 rounded" viewBox="0 0 24 24" fill="#3178C6">
    <rect width="24" height="24" rx="3" />
    <text x="18" y="19" fill="white" fontSize="11" fontFamily="sans-serif" fontWeight="bold" textAnchor="end">TS</text>
  </svg>
)

const KubernetesLogo = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#326CE5">
    <path d="M12.42 0L2.94 3.44c-.58.21-.94.77-.94 1.39v9.33c0 .61.36 1.17.94 1.39l9.48 3.45c.37.13.77.13 1.14 0l9.48-3.45c.58-.21.94-.77.94-1.39V4.83c0-.61-.36-1.17-.94-1.39L13.56 0c-.36-.13-.77-.13-1.14 0zm.08 3.3l6.53 2.37-2.02 4.41c-.4-.14-.83-.22-1.28-.24V5.42L12.5 3.3zm-1 0v2.12c-.45.02-.88.1-1.28.24L8.2 5.67l6.53-2.37zm-3.26 3.5l1.9 4.14c-.23.27-.41.59-.53.94H5.4V9.6l2.84-2.8zm7.52 0l2.84 2.8v2.28h-4.23c-.12-.35-.3-.67-.53-.94l1.9-4.14zm-7.66 6.2h4.23c.2.61.64 1.1 1.22 1.34v4.54L5.4 15.68v-2.68zm8.8 0v2.68l-6.53 2.37v-4.54c.58-.24 1.02-.73 1.22-1.34h4.23-.92z"/>
  </svg>
)

const RedisLogo = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#A41E11">
    <path d="M12 0L1.7 5.9v12.2L12 24l10.3-5.9V5.9L12 0zm7.7 7.7H4.3V5.1h15.4v2.6zm0 5.2H4.3v-2.6h15.4v2.6zm0 5.1H4.3v-2.6h15.4v2.5z"/>
  </svg>
)

const AwsLogo = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#FF9900">
    <path d="M22 11.5c0-4.7-3.8-8.5-8.5-8.5S5 6.8 5 11.5 8.8 20 13.5 20s8.5-3.8 8.5-8.5zm-5 1.5h-7v-3h7v3z"/>
  </svg>
)

const TerraformLogo = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#7B42BC">
    <path d="M0 0h6.8v6.8H0V0zm8.6 8.6h6.8v6.8H8.6V8.6zm0-8.6h6.8v6.8H8.6V0zm8.6 8.6h6.8v6.8h-6.8V8.6zm-8.6 8.6h6.8v6.8H8.6v-6.8z"/>
  </svg>
)

const techStack = [
  { name: 'Google Cloud', icon: <GcpLogo /> },
  { name: 'Vercel', icon: <VercelLogo /> },
  { name: 'Docker', icon: <DockerLogo /> },
  { name: 'Bitbucket', icon: <BitbucketLogo /> },
  { name: 'Stripe', icon: <StripeLogo /> },
  { name: 'PostgreSQL', icon: <PostgresqlLogo /> },
  { name: 'Next.js', icon: <NextjsLogo /> },
  { name: 'TypeScript', icon: <TypeScriptLogo /> },
  { name: 'Kubernetes', icon: <KubernetesLogo /> },
  { name: 'Redis', icon: <RedisLogo /> },
  { name: 'AWS', icon: <AwsLogo /> },
  { name: 'Terraform', icon: <TerraformLogo /> },
]

function TechLogo({ name, icon }: { name: string; icon: ReactNode }) {
  return (
    <div className="flex items-center gap-3 px-6 py-3 bg-card rounded-lg border border-border">
      {icon}
      <span className="text-sm font-medium text-foreground whitespace-nowrap">{name}</span>
    </div>
  )
}

export function TrustMarquee() {
  const { t } = useLanguage()

  return (
    <section className="py-12 overflow-hidden bg-muted">
      <div className="mb-8 text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          {t('trust.title')}
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
