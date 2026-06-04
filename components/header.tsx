'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CalendlyButton } from './calendly-button'
import { ChevronDown } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/' },
  { 
    name: 'Engineering & Development', 
    href: '#',
    items: [
      { name: 'Enterprise SaaS Platforms', href: '/services/enterprise-saas' },
      { name: 'Custom ERP & CRM Systems', href: '/services/erp-crm' },
      { name: 'Scalable Backend & APIs (Node.js/Laravel)', href: '/services/backend-apis' },
      { name: 'Modern Frontend (React/Vue.js)', href: '/services/modern-frontend' },
      { name: 'Secure E-commerce Operations', href: '/services/secure-ecommerce' }
    ]
  },
  {
    name: 'Cloud & Infrastructure',
    href: '#',
    items: [
      { name: 'Cloud Server Management (VPS/Docker)', href: '/cloud/server-management' },
      { name: 'Database Architecture & Optimization', href: '/cloud/database-architecture' },
      { name: 'CI/CD Pipelines & Deployments', href: '/cloud/cicd-pipelines' },
      { name: 'Zero-Downtime Migrations', href: '/cloud/zero-downtime' }
    ]
  },
  {
    name: 'AI & Automations',
    href: '#',
    items: [
      { name: 'NLP Data Pipelines', href: '/ai/nlp-pipelines' },
      { name: 'Autonomous LLM Agents (GPT/Gemini)', href: '/ai/llm-agents' },
      { name: 'Custom WhatsApp Bot Workflows', href: '/ai/whatsapp-bots' },
      { name: 'Business Process Automation', href: '/ai/process-automation' }
    ]
  },
  {
    name: 'Design & Strategy',
    href: '#',
    items: [
      { name: 'UX/UI Prototyping', href: '/design/ux-ui-prototyping' },
      { name: 'Digital Product Strategy', href: '/design/product-strategy' },
      { name: '3D Assets & Visual Marketing', href: '/design/3d-assets' },
      { name: 'E-commerce Branding', href: '/design/ecommerce-branding' }
    ]
  },
  { name: 'Work', href: '/portfolio' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl lg:text-2xl font-bold tracking-tight text-foreground">
              Digito<span className="text-secondary">Maroc</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.items ? (
                  <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
                    {item.name}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.items && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="p-2 bg-background border border-border rounded-xl shadow-lg flex flex-col gap-1">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <CalendlyButton text="Book a Call" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.name} className="flex flex-col">
                  {item.items ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex flex-col pl-4 gap-2 mt-2 overflow-hidden"
                          >
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                onClick={() => setIsOpen(false)}
                                className="py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="py-2 block text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div onClick={() => setIsOpen(false)} className="pt-4">
                <CalendlyButton className="w-full px-5 py-3 text-sm rounded-lg" text="Book a Call" />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
