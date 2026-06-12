'use client'

import { CalendlyButton } from './calendly-button'
import { useLanguage } from '@/hooks/use-language'

export function Capabilities() {
  const { t } = useLanguage()

  const capabilities = [
    {
      title: t('capabilities.saasTitle'),
      description: t('capabilities.saasDesc'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      title: t('capabilities.erpTitle'),
      description: t('capabilities.erpDesc'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: t('capabilities.mobileTitle'),
      description: t('capabilities.mobileDesc'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: t('capabilities.cloudTitle'),
      description: t('capabilities.cloudDesc'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-secondary">
            {t('capabilities.label')}
          </p>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance">
            {t('capabilities.title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {t('capabilities.description')}
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="group relative p-8 lg:p-10 bg-card rounded-2xl border border-border hover:border-secondary/50 transition-colors"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                {capability.icon}
              </div>

              {/* Content */}
              <h3 className="mt-6 text-xl font-semibold text-foreground">
                {capability.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {capability.description}
              </p>

              {/* Arrow */}
              <div className="mt-6 flex items-center text-sm font-medium text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                <span>{t('common.learnMore')}</span>
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
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex justify-center">
          <CalendlyButton 
            text={t('common.bookCall')} 
            className="px-8 py-4 text-base rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
