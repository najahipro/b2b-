'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'

export function Faq() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  const faqs = [
    {
      q: t('faq.q1'),
      a: t('faq.a1'),
    },
    {
      q: t('faq.q2'),
      a: t('faq.a2'),
    },
    {
      q: t('faq.q3'),
      a: t('faq.a3'),
    },
    {
      q: t('faq.q4'),
      a: t('faq.a4'),
    },
    {
      q: t('faq.q5'),
      a: t('faq.a5'),
    },
    {
      q: t('faq.q6'),
      a: t('faq.a6'),
    },
    {
      q: t('faq.q7'),
      a: t('faq.a7'),
    },
    {
      q: t('faq.q8'),
      a: t('faq.a8'),
    },
  ]

  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-20 bg-background border-t border-border overflow-hidden">
      {/* Geometric Grid Background matching Hero */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground" style={{ fontFamily: 'Georgia, serif' }}>
            {t('faq.title')}
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full" />
        </div>

        {/* Accordion Container */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div 
                key={index} 
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 bg-card ${isOpen ? 'border-secondary/50 shadow-sm' : 'border-border'}`}
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex items-center justify-between px-6 py-5 lg:p-8 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                >
                  <span className="text-lg lg:text-xl font-medium text-foreground pr-8">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-secondary text-secondary-foreground' : 'bg-muted text-muted-foreground'}`}
                  >
                    <Plus className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 lg:px-8 lg:pb-8 pt-0">
                        <p className="text-base lg:text-lg font-light text-muted-foreground leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
