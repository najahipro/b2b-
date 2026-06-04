'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export function CalendlyButton({ 
  className = "px-5 py-2.5 text-sm rounded-lg", 
  text = "Book a Call" 
}: { 
  className?: string, 
  text?: string 
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={`inline-flex items-center justify-center font-medium bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors shadow-sm hover:shadow-md hover:-translate-y-0.5 duration-300 ${className}`}
      >
        {text}
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden z-10"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-6 w-10 h-10 bg-background/80 backdrop-blur-md rounded-full border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors z-20 shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="w-full h-[650px] bg-background">
                <iframe 
                src="https://calendly.com/salah-elhint-dev/30min?hide_event_type_details=1&hide_gdpr_banner=1" 
                width="100%" 
                height="1000px" 
                frameBorder="0"
                scrolling="yes"
              ></iframe>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
