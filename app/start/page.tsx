'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MessageSquare } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'
import { trackEvent } from '@/lib/clarity'

// Simple SVG for Discord icon
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
  </svg>
)

export default function StartProjectPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    trackEvent("contact_form_submission", { service: formData.service, budget: formData.budget })
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "659a5acb-2a26-4a1e-b2b6-6d9cd6a3ec71",
          ...formData
        }),
      })
      const result = await response.json()
      if (result.success) {
        setIsSuccess(true)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 lg:pt-24 bg-background">
        
        {/* Dark Header Section */}
        <section className="bg-slate-950 py-20 lg:py-28 px-6 lg:px-8 border-b border-border text-center relative overflow-hidden">
          {/* Subtle grid pattern for the header */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
            >
              {t("startPage.title")}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg lg:text-xl text-slate-300 leading-relaxed"
            >
              {t("startPage.subheadline")}
            </motion.p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 lg:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Card 1: Simple Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card border border-border rounded-3xl p-8 lg:p-10 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{t("startPage.formTitle")}</h2>
                </div>

                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-secondary/10 border border-secondary/20 rounded-2xl p-8 text-center"
                  >
                    <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{t("startPage.successTitle")}</h3>
                    <p className="text-muted-foreground">{t("startPage.successDesc")}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input type="hidden" name="access_key" value="659a5acb-2a26-4a1e-b2b6-6d9cd6a3ec71" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium text-foreground">{t("startPage.firstName")}</label>
                        <input 
                          type="text" 
                          id="firstName" 
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all" 
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium text-foreground">{t("startPage.lastName")}</label>
                        <input 
                          type="text" 
                          id="lastName" 
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all" 
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">{t("startPage.email")}</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all" 
                          placeholder="john@company.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-foreground">{t("startPage.phone")}</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all" 
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-foreground">{t("startPage.company")}</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all" 
                        placeholder="Acme Corp"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-medium text-foreground">{t("startPage.serviceRequired")}</label>
                        <select 
                          id="service" 
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all appearance-none" 
                        >
                          <option value="" disabled>{t("startPage.selectService")}</option>
                          <option value="Creation Site Web">Création Site Web / Website Creation</option>
                          <option value="Marketing Digital">Marketing Digital / Digital Marketing</option>
                          <option value="SaaS Development">{t("startPage.saasDev")}</option>
                          <option value="Enterprise ERP System">{t("startPage.erpSystem")}</option>
                          <option value="Mobile Application">{t("startPage.mobileApp")}</option>
                          <option value="Cloud Infrastructure / DevOps">{t("startPage.cloudDevOps")}</option>
                          <option value="Other">{t("startPage.other")}</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="budget" className="text-sm font-medium text-foreground">{t("startPage.estimatedBudget")}</label>
                        <select 
                          id="budget" 
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          required
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all appearance-none" 
                        >
                          <option value="" disabled>{t("startPage.selectBudget")}</option>
                          <option value="Under $10k">{t("startPage.under10k")}</option>
                          <option value="$10k - $25k">{t("startPage.budget10_25")}</option>
                          <option value="$25k - $50k">{t("startPage.budget25_50")}</option>
                          <option value="$50k+">{t("startPage.budget50plus")}</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">{t("startPage.message")}</label>
                      <textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all resize-none" 
                        placeholder={t("startPage.messagePlaceholder")}
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-foreground text-background hover:bg-foreground/90 font-medium py-3.5 px-6 rounded-xl transition-colors mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? t("startPage.sendingBtn") : t("startPage.sendBtn")}
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Card 2: Direct Contact & Discord */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col gap-8"
              >
                {/* Discord Block */}
                <div className="bg-card border border-border rounded-3xl p-8 lg:p-10 shadow-sm flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">{t("startPage.connectDirectly")}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {t("startPage.discordDesc")}
                  </p>
                  
                  <a 
                    href="https://discord.gg/yourserver" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full gap-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-medium py-4 px-6 rounded-xl transition-colors shadow-sm mb-10"
                  >
                    <DiscordIcon className="w-5 h-5" />
                    <span>{t("startPage.joinDiscord")}</span>
                  </a>

                  {/* Contact Details */}
                  <div className="space-y-6 pt-8 border-t border-border">
                    <a href="mailto:contact@idmisk.com" className="flex items-center gap-4 group" onClick={() => trackEvent("email_click", { email: "contact@idmisk.com" })}>
                      <div className="w-12 h-12 rounded-full border border-border bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-secondary/10 group-hover:text-secondary group-hover:border-secondary/30 transition-all">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">{t("common.email")}</p>
                        <p className="text-foreground font-medium group-hover:text-secondary transition-colors">contact@idmisk.com</p>
                      </div>
                    </a>
                    
                    <a href="tel:+212604545894" className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-full border border-border bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-secondary/10 group-hover:text-secondary group-hover:border-secondary/30 transition-all">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">{t("common.phone")}</p>
                        <p className="text-foreground font-medium group-hover:text-secondary transition-colors">+212 604 545 894</p>
                      </div>
                    </a>
                  </div>
                </div>

              </motion.div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
