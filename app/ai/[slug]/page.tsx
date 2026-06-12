'use client'

import { notFound } from 'next/navigation'
import { use, useState, useEffect } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CallToActionSection } from '@/components/cta-section'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { MessageSquare, Brain, Database, Settings, Zap, Bot, Terminal, FileText, Layers } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'

// --- Layout 1: NLP Pipelines ---
function NlpPipelines() {
  const { t } = useLanguage()
  const { scrollYProgress } = useScroll()
  const opacityText = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const opacityTable = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])
  const yTable = useTransform(scrollYProgress, [0.2, 0.5], [50, 0])

  return (
    <div className="pt-32 pb-16 lg:pt-40 lg:pb-0 bg-[#020617] text-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-32 max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            {t('aiServicePage.nlpTitle')}
          </h1>
          <p className="text-lg lg:text-xl text-slate-400 leading-relaxed">
            {t('aiServicePage.nlpDesc')}
          </p>
        </div>

        {/* Data Matrix Animation */}
        <div className="w-full h-[600px] relative flex items-center justify-center overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 mb-32">
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
           
           {/* Unstructured Text (Fades out) */}
           <motion.div style={{ opacity: opacityText }} className="absolute inset-0 p-8 overflow-hidden blur-[1px]">
             {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="text-slate-700 font-mono text-xs md:text-sm whitespace-nowrap mb-2">
                   {'{'} "raw_input": "user_${i} sent a message regarding order #88${i} requesting a refund because the item arrived late." {'}'}
                </div>
             ))}
           </motion.div>

           {/* 3D Data Funnel & Table (Fades in) */}
           <motion.div style={{ opacity: opacityTable, y: yTable }} className="absolute z-10 flex flex-col items-center">
              <div className="w-32 h-32 border-4 border-cyan-500/30 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.2)] mb-8 bg-slate-950">
                 <FilterIcon className="w-12 h-12 text-cyan-400" />
              </div>
              
              <div className="bg-slate-950 border border-slate-700 rounded-xl overflow-hidden shadow-2xl">
                 <div className="bg-slate-900 px-6 py-3 border-b border-slate-700 flex gap-12 font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider">
                    <span className="w-24">Entity ID</span>
                    <span className="w-32">Intent</span>
                    <span className="w-32">Sentiment</span>
                 </div>
                 <div className="px-6 py-4 flex gap-12 font-mono text-sm border-b border-slate-800">
                    <span className="w-24 text-slate-300">ORD_880</span>
                    <span className="w-32 text-purple-400">Refund</span>
                    <span className="w-32 text-red-400">Negative</span>
                 </div>
                 <div className="px-6 py-4 flex gap-12 font-mono text-sm">
                    <span className="w-24 text-slate-300">ORD_881</span>
                    <span className="w-32 text-purple-400">Inquiry</span>
                    <span className="w-32 text-green-400">Neutral</span>
                 </div>
              </div>
           </motion.div>
         </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
              <FileText className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">{t('aiServicePage.nlpFeature1Title')}</h3>
              <p className="text-slate-400">{t('aiServicePage.nlpFeature1Desc')}</p>
           </div>
           <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
              <Brain className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">{t('aiServicePage.nlpFeature2Title')}</h3>
              <p className="text-slate-400">{t('aiServicePage.nlpFeature2Desc')}</p>
           </div>
           <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
              <Database className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">{t('aiServicePage.nlpFeature3Title')}</h3>
              <p className="text-slate-400">{t('aiServicePage.nlpFeature3Desc')}</p>
           </div>
        </div>
      </div>
    </div>
  )
}

function FilterIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}

// --- Layout 2: LLM Agents ---
function LlmAgents() {
  const { t } = useLanguage()

  return (
    <div className="pt-32 pb-16 lg:pt-40 lg:pb-0 overflow-hidden relative">
      {/* Background Neural Net */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="net" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M100 50L0 50M50 100L50 0" stroke="currentColor" strokeWidth="0.5" className="text-purple-500" />
              <circle cx="50" cy="50" r="2" className="fill-purple-500" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#net)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24 max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            {t('aiServicePage.llmTitle')}
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            {t('aiServicePage.llmDesc')}
          </p>
        </div>

        {/* Glowing AI Core & Code Snippets */}
        <div className="relative w-full h-[600px] flex items-center justify-center mb-24">
           {/* Central Core */}
           <motion.div 
             animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             className="w-48 h-48 rounded-full bg-purple-500/20 shadow-[0_0_100px_rgba(168,85,247,0.6)] flex items-center justify-center border border-purple-500/50 backdrop-blur-md relative z-20"
           >
              <Brain className="w-20 h-20 text-purple-500" />
           </motion.div>
           
           {/* Floating Code Snippet 1 (Python) */}
           <motion.div 
             animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-1/4 left-1/4 md:left-1/3 -translate-x-full bg-[#1e1e1e] border border-[#333] p-4 rounded-xl shadow-2xl font-mono text-xs md:text-sm text-green-400 z-10"
           >
              <span className="text-purple-400">import</span> openai<br/>
              response = openai.ChatCompletion.create(<br/>
              &nbsp;&nbsp;model=<span className="text-yellow-300">"gpt-4"</span>,<br/>
              &nbsp;&nbsp;messages=[...]<br/>
              )
           </motion.div>

           {/* Floating Code Snippet 2 (Node.js) */}
           <motion.div 
             animate={{ y: [15, -15, 15], x: [10, -10, 10] }}
             transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
             className="absolute bottom-1/4 right-1/4 md:right-1/3 translate-x-full bg-[#1e1e1e] border border-[#333] p-4 rounded-xl shadow-2xl font-mono text-xs md:text-sm text-blue-300 z-10"
           >
              <span className="text-purple-400">const</span> {'{'} GoogleGenerativeAI {'}'} = <span className="text-purple-400">require</span>(<span className="text-yellow-300">"@google/generative-ai"</span>);<br/>
              <span className="text-purple-400">const</span> genAI = <span className="text-blue-400">new</span> GoogleGenerativeAI(API_KEY);<br/>
              <span className="text-purple-400">const</span> model = genAI.getGenerativeModel({'{'} model: <span className="text-yellow-300">"gemini-pro"</span> {'}'});
           </motion.div>
           
           {/* Connection Lines (Abstract CSS) */}
           <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30 z-0">
             <div className="w-[600px] h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent rotate-45" />
             <div className="w-[600px] h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent -rotate-45" />
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-card border border-border p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-3">{t('aiServicePage.llmFeature1Title')}</h3>
              <p className="text-muted-foreground">{t('aiServicePage.llmFeature1Desc')}</p>
           </div>
           <div className="bg-card border border-border p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-3">{t('aiServicePage.llmFeature2Title')}</h3>
              <p className="text-muted-foreground">{t('aiServicePage.llmFeature2Desc')}</p>
           </div>
           <div className="bg-card border border-border p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-3">{t('aiServicePage.llmFeature3Title')}</h3>
              <p className="text-muted-foreground">{t('aiServicePage.llmFeature3Desc')}</p>
           </div>
        </div>
      </div>
    </div>
  )
}

// --- Layout 3: WhatsApp Bots ---
function WhatsappBots() {
  const { t } = useLanguage()
  const [messages, setMessages] = useState<number>(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setMessages(prev => (prev >= 3 ? 0 : prev + 1))
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="pt-32 pb-16 lg:pt-40 lg:pb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            {t('aiServicePage.whatsappTitle')}
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-12">
            {t('aiServicePage.whatsappDesc')}
          </p>
          <div className="space-y-6">
             <div className="flex gap-4 items-start">
               <div className="mt-1 w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0">
                 <Zap className="w-4 h-4 text-[#25D366]" />
               </div>
               <div>
                 <h4 className="font-bold">{t('aiServicePage.whatsappFeature1Title')}</h4>
                 <p className="text-muted-foreground text-sm">{t('aiServicePage.whatsappFeature1Desc')}</p>
               </div>
             </div>
             <div className="flex gap-4 items-start">
               <div className="mt-1 w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0">
                 <Brain className="w-4 h-4 text-[#25D366]" />
               </div>
               <div>
                 <h4 className="font-bold">{t('aiServicePage.whatsappFeature2Title')}</h4>
                 <p className="text-muted-foreground text-sm">{t('aiServicePage.whatsappFeature2Desc')}</p>
               </div>
             </div>
             <div className="flex gap-4 items-start">
               <div className="mt-1 w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0">
                 <Database className="w-4 h-4 text-[#25D366]" />
               </div>
               <div>
                 <h4 className="font-bold">{t('aiServicePage.whatsappFeature3Title')}</h4>
                 <p className="text-muted-foreground text-sm">{t('aiServicePage.whatsappFeature3Desc')}</p>
               </div>
             </div>
          </div>
        </div>

        {/* Mobile UI Mockup */}
        <div className="flex-1 w-full max-w-sm mx-auto">
           <div className="w-full aspect-[9/19] bg-card border-[8px] border-border rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col">
              {/* Header */}
              <div className="h-16 bg-muted border-b border-border flex items-center px-6 gap-4">
                 <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-secondary" />
                 </div>
                 <div>
                    <div className="font-bold text-sm">AI Assistant</div>
                    <div className="text-xs text-green-500">{t('aiServicePage.whatsappOnline')}</div>
                 </div>
              </div>
              
              {/* Chat Area */}
              <div className="flex-1 bg-background/50 p-4 flex flex-col justify-end gap-4 overflow-hidden relative">
                 <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,rgba(37,211,102,0.5)_0%,transparent_70%)] pointer-events-none" />
                 
                 <AnimatePresence>
                   {messages >= 1 && (
                     <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="self-end bg-secondary text-secondary-foreground px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%] text-sm shadow-sm">
                       {t('aiServicePage.whatsappMsg1')}
                     </motion.div>
                   )}
                   {messages >= 2 && (
                     <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="self-start bg-card border border-border px-4 py-2 rounded-2xl rounded-tl-sm max-w-[80%] text-sm shadow-sm">
                       <span className="flex gap-1 items-center mb-1 text-xs text-muted-foreground"><Bot className="w-3 h-3"/> {t('aiServicePage.whatsappChecked')}</span>
                       {t('aiServicePage.whatsappMsg2')}
                     </motion.div>
                   )}
                   {messages >= 3 && (
                     <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="self-end bg-secondary text-secondary-foreground px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%] text-sm shadow-sm">
                       {t('aiServicePage.whatsappMsg3')}
                     </motion.div>
                   )}
                   {messages === 3 && (
                     <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="self-start bg-card border border-border px-4 py-2 rounded-2xl rounded-tl-sm max-w-[80%] text-sm shadow-sm flex gap-1">
                       <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                       <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                       <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                     </motion.div>
                   )}
                 </AnimatePresence>
              </div>

              {/* Input Area */}
              <div className="h-16 bg-card border-t border-border flex items-center px-4">
                 <div className="h-10 flex-1 bg-background border border-border rounded-full flex items-center px-4 text-muted-foreground text-sm">
                    {t('aiServicePage.whatsappType')}
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  )
}

// --- Layout 4: Process Automation ---
function ProcessAutomation() {
  const { t } = useLanguage()

  return (
    <div className="pt-32 pb-16 lg:pt-40 lg:pb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            {t('aiServicePage.processTitle')}
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground">
            {t('aiServicePage.processDesc')}
          </p>
        </div>

        {/* Zigzag Timeline */}
        <div className="relative max-w-4xl mx-auto mb-24 py-12">
          {/* Connecting Dashed Line */}
          <div className="absolute top-0 bottom-0 left-[3rem] md:left-1/2 md:-translate-x-1/2 w-0 border-l-2 border-dashed border-gray-300 dark:border-gray-700 z-0" />
          
          <div className="space-y-16 relative z-10">
            {/* Step 1 */}
            <div className="relative flex justify-between w-full">
              <div className="hidden md:block w-5/12" />
              <div className="absolute left-[3rem] md:left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-background z-20" />
              <div className="w-full md:w-5/12 pl-24 md:pl-0">
                <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-6 rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="w-12 h-12 bg-orange-50 dark:bg-orange-500/10 text-orange-500 rounded-2xl flex items-center justify-center font-bold text-xl mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Trigger & Ingest</h3>
                  <p className="text-gray-500 dark:text-slate-400">Automatically capture data from emails, webhooks, or API endpoints the moment it arrives.</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex justify-between w-full">
              <div className="w-full md:w-5/12 pl-24 md:pl-0 md:text-right">
                <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-6 -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-500 rounded-2xl flex items-center justify-center font-bold text-xl mb-4 md:ml-auto">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">AI Processing</h3>
                  <p className="text-gray-500 dark:text-slate-400">Extract intent, categorize content, and validate information using custom LLM models.</p>
                </div>
              </div>
              <div className="absolute left-[3rem] md:left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-background z-20" />
              <div className="hidden md:block w-5/12" />
            </div>

            {/* Step 3 */}
            <div className="relative flex justify-between w-full">
              <div className="hidden md:block w-5/12" />
              <div className="absolute left-[3rem] md:left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-background z-20" />
              <div className="w-full md:w-5/12 pl-24 md:pl-0">
                <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-6 rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="w-12 h-12 bg-purple-50 dark:bg-purple-500/10 text-purple-500 rounded-2xl flex items-center justify-center font-bold text-xl mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Logic Routing</h3>
                  <p className="text-gray-500 dark:text-slate-400">Apply business rules to dynamically route the processed data to the correct downstream system.</p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex justify-between w-full">
              <div className="w-full md:w-5/12 pl-24 md:pl-0 md:text-right">
                <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-6 -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="w-12 h-12 bg-orange-50 dark:bg-orange-500/10 text-orange-500 rounded-2xl flex items-center justify-center font-bold text-xl mb-4 md:ml-auto">
                    4
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Execution & Sync</h3>
                  <p className="text-gray-500 dark:text-slate-400">Update databases, notify team members, and execute final API calls securely.</p>
                </div>
              </div>
              <div className="absolute left-[3rem] md:left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-background z-20" />
              <div className="hidden md:block w-5/12" />
            </div>

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-background border border-border p-8 rounded-3xl text-center shadow-sm">
              <h3 className="text-xl font-bold mb-3">{t('aiServicePage.processFeature1Title')}</h3>
              <p className="text-muted-foreground">{t('aiServicePage.processFeature1Desc')}</p>
           </div>
           <div className="bg-background border border-border p-8 rounded-3xl text-center shadow-sm">
              <h3 className="text-xl font-bold mb-3">{t('aiServicePage.processFeature2Title')}</h3>
              <p className="text-muted-foreground">{t('aiServicePage.processFeature2Desc')}</p>
           </div>
           <div className="bg-background border border-border p-8 rounded-3xl text-center shadow-sm">
              <h3 className="text-xl font-bold mb-3">{t('aiServicePage.processFeature3Title')}</h3>
              <p className="text-muted-foreground">{t('aiServicePage.processFeature3Desc')}</p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default function AiServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)

  const validSlugs = ['nlp-pipelines', 'llm-agents', 'whatsapp-bots', 'process-automation']
  
  if (!validSlugs.includes(slug)) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {slug === 'nlp-pipelines' && <NlpPipelines />}
        {slug === 'llm-agents' && <LlmAgents />}
        {slug === 'whatsapp-bots' && <WhatsappBots />}
        {slug === 'process-automation' && <ProcessAutomation />}
        <CallToActionSection />
      </main>
      <Footer />
    </>
  )
}
