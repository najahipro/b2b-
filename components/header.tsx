'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CalendlyButton } from './calendly-button'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'
import { Logo } from './logo'

const navItems = [
  { 
    nameKey: 'header.engineering', 
    href: '#',
    items: [
      { nameKey: 'header.saas', href: '/services/enterprise-saas' },
      { nameKey: 'header.erp', href: '/services/erp-crm' },
      { nameKey: 'header.backend', href: '/services/backend-apis' },
      { nameKey: 'header.frontend', href: '/services/modern-frontend' },
      { nameKey: 'header.ecommerce', href: '/services/secure-ecommerce' }
    ]
  },
  {
    nameKey: 'header.cloud',
    href: '#',
    items: [
      { nameKey: 'header.cloudServer', href: '/cloud/server-management' },
      { nameKey: 'header.database', href: '/cloud/database-architecture' },
      { nameKey: 'header.cicd', href: '/cloud/cicd-pipelines' },
      { nameKey: 'header.zeroDowntime', href: '/cloud/zero-downtime' }
    ]
  },
  {
    nameKey: 'header.ai',
    href: '#',
    items: [
      { nameKey: 'header.nlp', href: '/ai/nlp-pipelines' },
      { nameKey: 'header.llm', href: '/ai/llm-agents' },
      { nameKey: 'header.whatsapp', href: '/ai/whatsapp-bots' },
      { nameKey: 'header.automation', href: '/ai/process-automation' }
    ]
  },
  {
    nameKey: 'header.design',
    href: '#',
    items: [
      { nameKey: 'header.uxui', href: '/design/ux-ui-prototyping' },
      { nameKey: 'header.productStrategy', href: '/design/product-strategy' },
      { nameKey: 'header.assets3d', href: '/design/3d-assets' },
      { nameKey: 'header.branding', href: '/design/ecommerce-branding' }
    ]
  },
  { nameKey: 'header.work', href: '/portfolio' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDropdown = (nameKey: string) => {
    setOpenDropdown(openDropdown === nameKey ? null : nameKey)
  }

  const renderLanguageSelector = () => (
    <div className="flex items-center gap-1 bg-muted/60 border border-border p-1 rounded-full text-[11px] font-semibold">
      <button 
        suppressHydrationWarning
        onClick={() => setLanguage('en')} 
        className={`px-2 py-0.5 rounded-full transition-all duration-200 ${language === 'en' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
      >
        EN
      </button>
      <button 
        suppressHydrationWarning
        onClick={() => setLanguage('fr')} 
        className={`px-2 py-0.5 rounded-full transition-all duration-200 ${language === 'fr' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
      >
        FR
      </button>
    </div>
  )

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-lg shadow-black/5' : 'bg-background/40 backdrop-blur-sm border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-14 lg:h-16' : 'h-16 lg:h-20'}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Logo className="w-auto h-10 lg:h-12 object-contain transition-all duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.nameKey} className="relative group">
                {item.items ? (
                  <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
                    {t(item.nameKey)}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    {t(item.nameKey)}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.items && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="p-2 bg-background border border-border rounded-xl shadow-lg flex flex-col gap-1">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.nameKey}
                          href={subItem.href}
                          className="px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                        >
                          {t(subItem.nameKey)}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA & Language Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            {renderLanguageSelector()}
            <CalendlyButton text={t('header.bookCall')} />
          </div>

          {/* Mobile Menu Button + Language Switcher */}
          <div className="flex items-center gap-3 lg:hidden">
            {renderLanguageSelector()}
            <button
              suppressHydrationWarning
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
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
                <div key={item.nameKey} className="flex flex-col">
                  {item.items ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.nameKey)}
                        className="flex items-center justify-between py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {t(item.nameKey)}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.nameKey ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.nameKey && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex flex-col pl-4 gap-2 mt-2 overflow-hidden"
                          >
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.nameKey}
                                href={subItem.href}
                                onClick={() => setIsOpen(false)}
                                className="py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                              >
                                {t(subItem.nameKey)}
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
                      {t(item.nameKey)}
                    </Link>
                  )}
                </div>
              ))}
              <div onClick={() => setIsOpen(false)} className="pt-4">
                <CalendlyButton className="w-full px-5 py-3 text-sm rounded-lg" text={t('header.bookCall')} />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
