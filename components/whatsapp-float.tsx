'use client'

import { MessageSquare } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export function WhatsAppFloat() {
  const { language } = useLanguage()
  const [showTooltip, setShowTooltip] = useState(false)

  const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '212604545894'
  
  const welcomeMessage = language === 'fr' 
    ? `Bonjour l'équipe Idmisk, je souhaite obtenir des informations sur vos services digitaux.`
    : `Hello Idmisk team, I would like to get information about your digital services.`

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(welcomeMessage)}`

  const [pulse, setPulse] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setPulse(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-2">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="px-4 py-2 bg-card border border-border text-foreground text-xs font-semibold rounded-xl shadow-lg whitespace-nowrap backdrop-blur-md"
          >
            {language === 'fr' ? 'Discuter sur WhatsApp' : 'Chat on WhatsApp'}
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        {pulse && (
          <span className="absolute inset-0 rounded-full border border-[#25D366] animate-ping opacity-75" />
        )}
        <MessageSquare className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
      </a>
    </div>
  )
}
