'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const faqs = [
  {
    q: 'What payment methods do you accept, and is there a refund policy?',
    a: 'We accept major credit cards, PayPal, and bank transfers. We also offer a 30-day money-back guarantee on all hosting plans.',
  },
  {
    q: 'Do you offer website migration services or assistance?',
    a: 'Yes, our team can handle full website migration from your current host with minimal downtime. Just reach out and we\'ll manage the process.',
  },
  {
    q: 'What is your customer support like, and how can I get in touch with you?',
    a: 'Our support team is available 24/7 via email, phone, and live chat. We also maintain a knowledge base for self-service help.',
  },
  {
    q: 'What security measures do you have in place to protect my website and data?',
    a: 'We use SSL encryption, firewalls, intrusion detection, and regular backups to keep your website and data fully protected.',
  },
  {
    q: 'What programming languages and technologies do you specialize in?',
    a: 'We work with HTML, CSS, JavaScript, PHP, Python, Laravel, React, and more — plus CMS platforms like WordPress and e-commerce tools like Shopify.',
  },
  {
    q: 'What is your development process like, and how long does it typically take to complete a project?',
    a: 'We follow a collaborative agile process with regular updates. Timelines depend on project scope and complexity — we\'ll provide a clear plan upfront.',
  },
  {
    q: 'What is your pricing model, and what are your rates for development services?',
    a: 'We offer both fixed-price and hourly models with competitive, transparent rates tailored to your project scope and budget.',
  },
  {
    q: 'Can you develop a website or application that meets my specific requirements?',
    a: 'Absolutely. We specialize in custom websites and applications built to match your exact requirements and business goals.',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-20 bg-background border-t border-border overflow-hidden">
      {/* Geometric Grid Background matching Hero */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground" style={{ fontFamily: 'Georgia, serif' }}>
            Frequently Asked Questions
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
