'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '@/lib/translations'

type Language = 'en' | 'fr'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (path: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Detect language from localStorage or browser preferences
    const storedLang = localStorage.getItem('language') as Language
    let detectedLang: Language = 'en'
    if (storedLang === 'en' || storedLang === 'fr') {
      detectedLang = storedLang
      setLanguageState(storedLang)
    } else {
      const browserLang = navigator.language.split('-')[0]
      if (browserLang === 'fr') {
        detectedLang = 'fr'
        setLanguageState('fr')
      }
    }
    document.documentElement.lang = detectedLang
    setMounted(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
    // Update HTML lang attribute for accessibility/SEO purposes dynamically
    document.documentElement.lang = lang
  };

  // Helper to translate nested object path (e.g. "header.home")
  const t = (path: string): string => {
    const keys = path.split('.')
    let current: any = translations[language]

    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key]
      } else {
        // Fallback to English if key doesn't exist in current language
        let fallback: any = translations['en']
        for (const fallbackKey of keys) {
          if (fallback && typeof fallback === 'object' && fallbackKey in fallback) {
            fallback = fallback[fallbackKey]
          } else {
            return path // Return original path as fallback
          }
        }
        return typeof fallback === 'string' ? fallback : path
      }
    }

    return typeof current === 'string' ? current : path
  }

  // To prevent flash of untranslated content, we can serve default language ('en')
  // while mounting on the client.
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
