'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { TrustMarquee } from '@/components/trust-marquee'

const faqs = [
  {
    question: 'Are you an agency or independent contractors?',
    answer: 'We are a dedicated two-person senior engineering team. You work directly with the architects who write your code, eliminating agency bloat and miscommunication.',
  },
  {
    question: 'Do you offshore or outsource the development?',
    answer: 'No. 100% of the system architecture, backend logic, and frontend design is built in-house by us.',
  },
  {
    question: 'How do we communicate and track progress?',
    answer: 'We bypass slow email chains. All clients get a dedicated, private Discord channel for real-time communication, paired with a live board to track sprint progress.',
  },
  {
    question: 'Who owns the code and Intellectual Property (IP)?',
    answer: 'You do. Upon final payment, full IP rights, repository access, and infrastructure ownership are transferred to you.',
  },
]

export default function StartPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    projectScope: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal Header - No Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-foreground">
                Digito<span className="text-secondary">Maroc</span>
              </span>
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#E5E4E0_1px,transparent_1px),linear-gradient(to_bottom,#E5E4E0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />
          
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] text-balance"
            >
              We Architect & Build{' '}
              <span className="text-secondary">Enterprise SaaS</span>.{' '}
              <br className="hidden lg:block" />
              No Middlemen. Just Senior Engineers.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Direct access to the architects who design and build your system. 
              Zero outsourced code. 100% ownership transfer.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10"
            >
              <a
                href="#apply"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
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
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Trust Marquee */}
        <TrustMarquee />

        {/* Agitation Section - Why Agencies Fail */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-medium uppercase tracking-wider text-secondary">
                The Problem
              </p>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance">
                Why traditional agencies fail enterprise clients
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Traditional Agency */}
              <div className="p-8 lg:p-10 bg-foreground/5 rounded-2xl border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Traditional Agency</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'Account managers who don\'t understand your code',
                    'Junior developers learning on your project',
                    'Offshore teams with communication gaps',
                    'Slow email chains and missed deadlines',
                    'Black-box development with no visibility',
                    'Vendor lock-in and IP complications',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-destructive flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* DigitoMaroc Approach */}
              <div className="p-8 lg:p-10 bg-secondary/5 rounded-2xl border border-secondary/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">DigitoMaroc Approach</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'Direct access to the architects writing your code',
                    '12+ years combined senior engineering experience',
                    '100% in-house development, zero outsourcing',
                    'Real-time Discord communication and live progress',
                    'Full transparency with repository access from day one',
                    'Complete IP and infrastructure ownership transfer',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Proof of Execution */}
        <section className="py-24 lg:py-32 bg-muted">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-secondary">
                  Case Study
                </p>
                <h2 className="mt-4 text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance">
                  How we architected a multi-tenant ERP handling $2M+ in transactions
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  AlloClients needed a complete client management system that could scale 
                  across 500+ service agencies while maintaining strict data isolation and 
                  compliance requirements.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-6">
                  {[
                    { value: '500+', label: 'Active Organizations' },
                    { value: '99.9%', label: 'Uptime SLA' },
                    { value: '10TB', label: 'Data Processed' },
                    { value: '45%', label: 'Cost Reduction' },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl lg:text-3xl font-bold text-foreground">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    href="/portfolio/alloclients-erp"
                    className="inline-flex items-center text-sm font-medium text-secondary hover:text-secondary/80 transition-colors"
                  >
                    Read the full case study
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] bg-card rounded-2xl border border-border overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-foreground/5 rounded-lg border border-border flex items-center justify-center">
                      <span className="text-6xl font-bold text-secondary/20">AC</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Handoff Guarantee */}
        <section className="py-24 lg:py-32 bg-foreground text-primary-foreground">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-8">
              <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance">
              The Handoff Guarantee
            </h2>
            
            <p className="mt-6 text-lg text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
              You own 100% of the intellectual property, the Git repositories, and the 
              cloud infrastructure from day one. No lock-in. No surprises. Full transparency.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { icon: '01', title: 'Full IP Rights', description: 'All code and designs belong to you' },
                { icon: '02', title: 'Repository Access', description: 'GitHub/GitLab access from sprint one' },
                { icon: '03', title: 'Infrastructure Ownership', description: 'Your cloud accounts, your control' },
              ].map((item) => (
                <div key={item.title}>
                  <div className="text-4xl font-bold text-secondary mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-primary-foreground/60">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-medium uppercase tracking-wider text-secondary">
                Questions & Answers
              </p>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                Frequently asked questions
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="p-6 lg:p-8 bg-card rounded-2xl border border-border"
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="py-24 lg:py-32 bg-muted">
          <div className="max-w-2xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-medium uppercase tracking-wider text-secondary">
                Start Your Project
              </p>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance">
                Request your private Discord channel
              </h2>
              <p className="mt-4 text-muted-foreground">
                Submit your details and we&apos;ll generate your exclusive invite link.
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 lg:p-12 bg-card rounded-2xl border border-secondary/20 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Application Received</h3>
                <p className="mt-4 text-muted-foreground">
                  Check your email for your private Discord invite link. We typically respond within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 lg:p-12 bg-card rounded-2xl border border-border">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                      placeholder="Acme Corp"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                      placeholder="john@acmecorp.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectScope" className="block text-sm font-medium text-foreground mb-2">
                      Project Scope
                    </label>
                    <textarea
                      id="projectScope"
                      required
                      rows={4}
                      value={formData.projectScope}
                      onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors resize-none"
                      placeholder="Tell us about your project: What are you building? What's your timeline? Any specific technical requirements?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 text-base font-medium bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()} DigitoMaroc. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
