'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Code2, ArrowRight } from 'lucide-react'
import { CalendlyButton } from '@/components/calendly-button'

const processTabs = [
  {
    id: 'discovery',
    phase: 'Phase A',
    tabTitle: 'Discovery & Architecture',
    title: 'System Blueprint & Database Design',
    content: 'We start by analyzing your business logic to architect a robust foundation. We design the database schema, multi-tenant architecture, and define the exact API endpoints before a single line of code is written.',
    tools: ['Figma', 'Draw.io', 'Notion'],
  },
  {
    id: 'development',
    phase: 'Phase B',
    tabTitle: 'Full-Stack Development',
    title: 'Agile Development & API Integration',
    content: 'We build the core system using modern, scalable frameworks. From complex backend logic and role-based access control (RBAC) to pixel-perfect, responsive frontend dashboards.',
    tools: ['React.js', 'Laravel', 'Node.js', 'MySQL/PostgreSQL'],
  },
  {
    id: 'deployment',
    phase: 'Phase C',
    tabTitle: 'DevOps & Deployment',
    title: 'Cloud Infrastructure & CI/CD',
    content: 'Your system is deployed on secure, high-availability infrastructure. We set up automated deployment pipelines, horizontal scaling rules, and ensure zero-downtime updates.',
    tools: ['GitHub Actions', 'Linux VPS', 'Docker', 'Cloudflare'],
  },
]

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(processTabs[0].id)

  const activeContent = processTabs.find((t) => t.id === activeTab)!

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              
              {/* Text Content */}
              <motion.div 
                className="flex-1 text-center lg:text-left"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                  <Code2 className="w-4 h-4" />
                  Services & Process
                </div>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground text-balance">
                  Our Engineering Process
                </h1>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  At DigitoMaroc, we don't just write code; we architect scalable systems. Our methodical approach ensures high-performance SaaS and ERP platforms delivered with zero friction.
                </p>
              </motion.div>

              {/* Images */}
              <motion.div 
                className="flex-1 relative w-full max-w-lg lg:max-w-none"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
              >
                <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full">
                  <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-3xl overflow-hidden border-8 border-background shadow-2xl z-10">
                    <Image
                      src="/architecture.jpg"
                      alt="Engineering Architecture"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-2/3 rounded-3xl overflow-hidden border-8 border-background shadow-2xl z-20 bg-background">
                    <Image
                      src="/development.jpg"
                      alt="Code IDE"
                      width={1200}
                      height={800}
                      className="w-full h-auto block"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Interactive Process Section */}
        <section className="py-24 lg:py-32 bg-muted/50 border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
              
              {/* Vertical Tabs */}
              <div className="w-full lg:w-1/3 flex flex-col gap-4">
                {processTabs.map((tab) => {
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`text-left p-6 rounded-2xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-card shadow-md border border-border ring-1 ring-secondary/50' 
                          : 'hover:bg-card/50 text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <span className={`text-xs font-bold uppercase tracking-wider mb-2 block ${isActive ? 'text-secondary' : 'text-muted-foreground'}`}>
                        {tab.phase}
                      </span>
                      <h3 className={`text-lg font-semibold ${isActive ? 'text-foreground' : ''}`}>
                        {tab.tabTitle}
                      </h3>
                    </button>
                  )
                })}
              </div>

              {/* Tab Content */}
              <div className="w-full lg:w-2/3 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="bg-card border border-border rounded-3xl p-8 lg:p-12 shadow-sm w-full"
                  >
                    <h2 className="text-3xl font-bold text-foreground mb-6">
                      {activeContent.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                      {activeContent.content}
                    </p>
                    
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                        Tools & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {activeContent.tools.map((tool) => (
                          <span 
                            key={tool} 
                            className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-foreground/80 border border-border"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 to-indigo-950 text-white relative overflow-hidden">
          {/* subtle overlay pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-balance mb-8">
              Ready to architect your next big platform?
            </h2>
            <CalendlyButton 
              text="Book a Discovery Call" 
              className="px-8 py-4 text-base rounded-xl"
            />
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
