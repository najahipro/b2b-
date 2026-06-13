'use client'

import { notFound } from 'next/navigation'
import Image from 'next/image'
import { use, useState, useEffect } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CallToActionSection } from '@/components/cta-section'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MessageSquare, Server, Database, Box, Cloud, Network, RefreshCw, Settings, Code2, ShieldCheck, Zap } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'

// --- Layout 1: Server Management ---
function ServerManagement() {
  const { t } = useLanguage()

  return (
    <div className="pt-32 pb-16 lg:pt-40 lg:pb-0 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Floating 3D Parallax Hero */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="flex-1 text-left relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                {t('cloudServicePage.serverTitle')}
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                {t('cloudServicePage.serverDesc')}
              </p>
            </motion.div>
          </div>
          
          <div className="flex-1 w-full relative flex justify-center">
             <Image
                src="/assets/cloud-infrastructure.webp"
                alt="Cloud Infrastructure"
                width={800}
                height={800}
                loading="lazy"
                className="w-full max-w-sm mx-auto aspect-square object-contain rounded-2xl shadow-xl"
             />
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <motion.div 
             whileHover={{ y: -10 }}
             className="bg-card border border-border p-8 rounded-3xl shadow-sm"
           >
              <Box className="w-10 h-10 text-secondary mb-6" />
              <h3 className="text-xl font-bold mb-3">{t('cloudServicePage.serverFeature1Title')}</h3>
              <p className="text-muted-foreground">{t('cloudServicePage.serverFeature1Desc')}</p>
           </motion.div>
           <motion.div 
             whileHover={{ y: -10 }}
             className="bg-card border border-border p-8 rounded-3xl shadow-sm"
           >
              <Settings className="w-10 h-10 text-secondary mb-6" />
              <h3 className="text-xl font-bold mb-3">{t('cloudServicePage.serverFeature2Title')}</h3>
              <p className="text-muted-foreground">{t('cloudServicePage.serverFeature2Desc')}</p>
           </motion.div>
           <motion.div 
             whileHover={{ y: -10 }}
             className="bg-card border border-border p-8 rounded-3xl shadow-sm"
           >
              <Cloud className="w-10 h-10 text-secondary mb-6" />
              <h3 className="text-xl font-bold mb-3">{t('cloudServicePage.serverFeature3Title')}</h3>
              <p className="text-muted-foreground">{t('cloudServicePage.serverFeature3Desc')}</p>
           </motion.div>
        </div>
      </div>
    </div>
  )
}

// --- Layout 2: Database Architecture ---
function DatabaseArchitecture() {
  const { t } = useLanguage()

  return (
    <div className="pt-32 pb-16 lg:pt-40 lg:pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-24">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
          {t('cloudServicePage.dbTitle')}
        </h1>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {t('cloudServicePage.dbDesc')}
        </p>
      </div>

      {/* 3D Database Video */}
      <div className="w-full relative flex items-center justify-center mb-12">
         <video 
           src="/assets/database-3d-loop.mp4" 
           autoPlay 
           loop 
           muted 
           playsInline 
           className="w-full max-w-lg mx-auto object-cover mix-blend-multiply dark:mix-blend-screen"
         />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-card border border-border p-8 rounded-3xl shadow-sm text-center">
              <h3 className="text-xl font-bold mb-3">{t('cloudServicePage.dbFeature1Title')}</h3>
              <p className="text-muted-foreground">{t('cloudServicePage.dbFeature1Desc')}</p>
           </div>
           <div className="bg-card border border-border p-8 rounded-3xl shadow-sm text-center">
              <h3 className="text-xl font-bold mb-3">{t('cloudServicePage.dbFeature2Title')}</h3>
              <p className="text-muted-foreground">{t('cloudServicePage.dbFeature2Desc')}</p>
           </div>
           <div className="bg-card border border-border p-8 rounded-3xl shadow-sm text-center">
              <h3 className="text-xl font-bold mb-3">{t('cloudServicePage.dbFeature3Title')}</h3>
              <p className="text-muted-foreground">{t('cloudServicePage.dbFeature3Desc')}</p>
           </div>
        </div>
      </div>
    </div>
  )
}

// --- Layout 3: CI/CD Pipelines ---
function CicdPipelines() {
  const { t } = useLanguage()
  const { scrollYProgress } = useScroll()
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div className="pt-32 pb-16 lg:pt-40 lg:pb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-32 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
          {t('cloudServicePage.cicdTitle1')}<br />
          <span className="text-secondary">{t('cloudServicePage.cicdTitle2')}</span>
        </h1>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {t('cloudServicePage.cicdDesc')}
        </p>
      </div>

      {/* Animated Horizontal Pipeline */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative py-20">
         {/* Background Track */}
         <div className="absolute top-1/2 left-6 right-6 h-2 bg-muted -translate-y-1/2 rounded-full overflow-hidden">
            {/* Animated Fill */}
            <motion.div 
               className="h-full bg-secondary"
               style={{ width: lineWidth }}
            />
         </div>
         
         <div className="relative z-10 flex justify-between">
            {['Code', 'Build', 'Test', 'Deploy'].map((step, i) => (
               <motion.div 
                 key={step}
                 initial={{ opacity: 0.5, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ margin: "-20% 0px -20% 0px" }}
                 className="flex flex-col items-center gap-4"
               >
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-card border-4 border-background shadow-xl rounded-full flex items-center justify-center ring-4 ring-secondary/20">
                     {i === 0 && <Code2 className="w-8 h-8 text-secondary" />}
                     {i === 1 && <Box className="w-8 h-8 text-secondary" />}
                     {i === 2 && <ShieldCheck className="w-8 h-8 text-secondary" />}
                     {i === 3 && <Zap className="w-8 h-8 text-secondary" />}
                  </div>
                  <div className="font-bold text-lg md:text-xl">{step}</div>
               </motion.div>
            ))}
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-card border border-border p-8 rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">{t('cloudServicePage.cicdFeature1Title')}</h3>
              <p className="text-muted-foreground">{t('cloudServicePage.cicdFeature1Desc')}</p>
           </div>
           <div className="bg-card border border-border p-8 rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">{t('cloudServicePage.cicdFeature2Title')}</h3>
              <p className="text-muted-foreground">{t('cloudServicePage.cicdFeature2Desc')}</p>
           </div>
           <div className="bg-card border border-border p-8 rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">{t('cloudServicePage.cicdFeature3Title')}</h3>
              <p className="text-muted-foreground">{t('cloudServicePage.cicdFeature3Desc')}</p>
           </div>
        </div>
      </div>
    </div>
  )
}

// --- Layout 4: Zero-Downtime ---
function ZeroDowntime() {
  const { t } = useLanguage()


  return (
    <div className="pt-32 pb-16 lg:pt-40 lg:pb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            {t('cloudServicePage.downtimeTitle1')}<br />{t('cloudServicePage.downtimeTitle2')}
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('cloudServicePage.downtimeDesc')}
          </p>
        </div>

        {/* Video Background */}
        <div className="w-full max-w-4xl mx-auto rounded-2xl shadow-xl overflow-hidden border border-border aspect-[16/9] relative">
           <video 
             src="/assets/zero-downtime.mp4" 
             autoPlay 
             loop 
             muted 
             playsInline 
             className="absolute inset-0 w-full h-full object-cover"
           />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
           <div className="bg-card border border-border p-8 rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">{t('cloudServicePage.downtimeFeature1Title')}</h3>
              <p className="text-muted-foreground">{t('cloudServicePage.downtimeFeature1Desc')}</p>
           </div>
           <div className="bg-card border border-border p-8 rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">{t('cloudServicePage.downtimeFeature2Title')}</h3>
              <p className="text-muted-foreground">{t('cloudServicePage.downtimeFeature2Desc')}</p>
           </div>
           <div className="bg-card border border-border p-8 rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">{t('cloudServicePage.downtimeFeature3Title')}</h3>
              <p className="text-muted-foreground">{t('cloudServicePage.downtimeFeature3Desc')}</p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default function CloudServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)

  const validSlugs = ['server-management', 'database-architecture', 'cicd-pipelines', 'zero-downtime']
  
  if (!validSlugs.includes(slug)) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {slug === 'server-management' && <ServerManagement />}
        {slug === 'database-architecture' && <DatabaseArchitecture />}
        {slug === 'cicd-pipelines' && <CicdPipelines />}
        {slug === 'zero-downtime' && <ZeroDowntime />}
        <CallToActionSection />
      </main>
      <Footer />
    </>
  )
}
