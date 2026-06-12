'use client'

import Link from 'next/link'
import { MessageSquare, Calendar } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'
import { motion } from 'framer-motion'

export function CallToActionSection() {
  const { language } = useLanguage()

  const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '212635278125'
  const welcomeMessage = language === 'fr'
    ? `Bonjour l'équipe Idmisk, je souhaite lancer mon projet digital.`
    : `Hello Idmisk team, I want to launch my digital project.`
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(welcomeMessage)}`

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-background border-t border-border">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-card border border-border/80 rounded-[2.5rem] p-8 md:p-16 text-center shadow-xl overflow-hidden group"
        >
          {/* Decorative gradients */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-secondary/15 transition-all duration-700" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#25D366]/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            {language === 'fr' 
              ? "Prêt à transformer votre entreprise ?"
              : "Ready to Transform Your Business?"}
          </h2>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed font-light mb-12">
            {language === 'fr'
              ? "Que vous ayez besoin d'un site internet captivant, d'un CRM/ERP sur mesure, d'une application mobile ou d'automatisations IA/WhatsApp — nous créons votre produit digital de A à Z."
              : "Whether you need a high-converting website, custom CRM/ERP system, mobile app, or AI & WhatsApp automation workflows — we engineer your digital product from start to finish."}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <Calendar className="w-5 h-5" />
              {language === 'fr' ? "Réserver un Appel Gratuit" : "Book a Free Consultation"}
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-background border border-border text-foreground hover:bg-muted rounded-2xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5 text-[#25D366]" />
              {language === 'fr' ? "Discuter sur WhatsApp" : "Chat on WhatsApp"}
            </a>
          </div>

          {/* Quick contact details below buttons */}
          <div className="mt-8 flex justify-center gap-6 text-sm text-muted-foreground">
            <span>
              Email: <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@idmisk.com'}`} className="hover:text-foreground underline transition-colors">{process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@idmisk.com'}</a>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
