'use client'

import Link from 'next/link'
import { motion, useInView, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'

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
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 lg:pt-0">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-secondary">
              Available for Q1 2026 Projects
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] text-balance">
            We Architect & Build{' '}
            <span className="text-secondary">Enterprise SaaS</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            No middlemen. No agency bloat. Just two senior engineers delivering 
            production-grade systems directly to global enterprises.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/start"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-foreground text-primary-foreground rounded-lg hover:bg-foreground/90 transition-colors"
            >
              Request Private Discord
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-transparent text-foreground border border-border rounded-lg hover:bg-muted transition-colors"
            >
              View Our Work
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: '5+', label: 'Enterprise Platforms Built' },
              { value: '140+', label: 'Database Tables Architected' },
              { value: '100%', label: 'IP Ownership Transfer' },
              { value: '0', label: 'Outsourced Code' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-foreground">
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
