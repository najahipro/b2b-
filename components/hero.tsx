'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { CalendlyButton } from './calendly-button'
import { useLanguage } from '@/hooks/use-language'

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  
  const numMatch = value.match(/(\d+)(.*)/)
  const num = numMatch ? parseInt(numMatch[1], 10) : 0
  const suffix = numMatch ? numMatch[2] : ''

  useEffect(() => {
    if (inView && num > 0) {
      const controls = animate(0, num, {
        duration: 2,
        ease: "easeOut",
        onUpdate(v) {
          if (ref.current) {
            ref.current.textContent = Math.round(v).toString() + suffix
          }
        }
      })
      return () => controls.stop()
    }
  }, [inView, num, suffix])

  return <span ref={ref}>{num === 0 ? value : `0${suffix}`}</span>
}

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative flex items-center justify-center pt-24 lg:pt-32 pb-8 lg:pb-12">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-secondary">
              {t('hero.badge')}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className={`font-bold tracking-tight text-foreground leading-[1.1] text-balance transition-all duration-300 ${t('hero.titleSpan').length > 25 ? 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl' : 'text-4xl sm:text-5xl lg:text-7xl'}`}>
            {t('hero.title')}
            <span className="text-secondary block sm:inline mt-2 sm:mt-0">{t('hero.titleSpan')}</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            {t('hero.subheadline')}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton 
              text={t('common.bookCall')} 
              className="w-full sm:w-auto px-8 py-4 text-base rounded-lg"
            />
            <Link
              href="/portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-transparent text-foreground border border-border rounded-lg hover:bg-muted transition-colors"
            >
              {t('common.viewWork')}
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: '60+', label: t('hero.stat1Label') },
              { value: '30+', label: t('hero.stat2Label') },
              { value: '5+', label: t('hero.stat3Label') },
              { value: '100%', label: t('hero.stat4Label') },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl lg:text-6xl font-extrabold text-foreground">
                  <AnimatedNumber value={stat.value} />
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Dummy comment to force a commit
