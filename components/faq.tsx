'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const faqs = [
  {
    q: 'Are you a traditional agency or independent contractors?',
    a: 'We are a dedicated two-person senior engineering team. You work directly with the architects writing your code, eliminating agency bloat, middlemen, and miscommunication.',
  },
  {
    q: 'Do you offshore or outsource the development?',
    a: 'Never. 100% of the system architecture, backend logic, and frontend design is built entirely in-house by us.',
  },
  {
    q: 'How do we communicate and track progress?',
    a: 'We bypass slow email chains. All clients get a dedicated, private Discord server for real-time communication, paired with agile sprint tracking.',
  },
  {
    q: 'Who owns the code and Intellectual Property (IP)?',
    a: 'You do. Upon final payment, 100% IP rights, full Git repository access, and cloud infrastructure ownership are permanently transferred to you.',
  },
  {
    q: 'Will our internal team be able to maintain the system after handoff?',
    a: 'Absolutely. We architect using modern, industry-standard stacks (like Next.js, React, Node.js, and PostgreSQL). We enforce clean code practices and comprehensive documentation to ensure a seamless transition to your internal engineers.',
  },
  {
    q: 'Do you offer ongoing support after the platform launches?',
    a: 'Yes. While we ensure a smooth day-one handoff, we also offer dedicated post-launch support retainers to handle infrastructure scaling, continuous integration, and feature updates as your enterprise grows.',
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
