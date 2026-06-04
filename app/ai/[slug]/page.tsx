'use client'

import { notFound } from 'next/navigation'
import { use, useState, useEffect } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CalendlyButton } from '@/components/calendly-button'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { MessageSquare, Brain, Code, Database, Network, Settings, Zap, Bot, Smartphone, Terminal, FileText, Layers, RefreshCw } from 'lucide-react'

// --- Global CTA ---
function AiCTA() {
  return (
    <div className="w-full relative overflow-hidden bg-neutral-950 text-white py-24 px-6 lg:px-8 mt-24 border-t border-purple-500/30">
      {/* Deep futuristic gradient background with neon border glow */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.4)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent shadow-[0_0_20px_rgba(168,85,247,1)]" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
          Ready to Automate Your Workflows?
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CalendlyButton 
            text="Discuss Your AI Project" 
            className="w-full sm:w-auto px-8 py-4 text-base font-medium rounded-lg bg-purple-600 text-white hover:bg-purple-500 transition-colors shadow-[0_0_30px_rgba(147,51,234,0.4)]"
          />
          <a
            href="https://wa.me/212635278125"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium bg-[#25D366] text-white rounded-lg hover:bg-[#20bd5a] transition-colors shadow-[0_0_30px_rgba(37,211,102,0.2)]"
          >
            <MessageSquare className="w-5 h-5" />
            Message on WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

// --- Layout 1: NLP Pipelines ---
function NlpPipelines() {
  const { scrollYProgress } = useScroll()
  const opacityText = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const opacityTable = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])
  const yTable = useTransform(scrollYProgress, [0.2, 0.5], [50, 0])

  return (
    <div className="pt-32 pb-16 lg:pt-40 lg:pb-0 bg-[#020617] text-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-32 max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Turn Unstructured Text into Actionable Data.
          </h1>
          <p className="text-lg lg:text-xl text-slate-400 leading-relaxed">
            Award-winning Natural Language Processing (NLP) pipelines that scrape, parse, and structure massive amounts of complex data automatically.
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
              <h3 className="text-xl font-bold mb-3">Intelligent Data Extraction</h3>
              <p className="text-slate-400">Automated scraping pipelines for complex web sources and documents.</p>
           </div>
           <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
              <Brain className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">Semantic Structuring</h3>
              <p className="text-slate-400">Using NLP algorithms to clean and organize messy text for deep analysis.</p>
           </div>
           <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
              <Database className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">Big Data Ready</h3>
              <p className="text-slate-400">Pipelines engineered to handle enterprise-level data loads securely.</p>
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
            Power Your Business with Custom LLMs.
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            We integrate advanced Large Language Models (Gemini, GPT) directly into your software to create agents that reason, assist, and execute tasks autonomously.
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
              <h3 className="text-xl font-bold mb-3">Custom AI Agents</h3>
              <p className="text-muted-foreground">Tailored to your internal knowledge base for instant employee support or client interaction.</p>
           </div>
           <div className="bg-card border border-border p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-3">API Integration Mastery</h3>
              <p className="text-muted-foreground">Seamless connection to Google AI Studio and OpenAI endpoints.</p>
           </div>
           <div className="bg-card border border-border p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-3">Dynamic Decision Making</h3>
              <p className="text-muted-foreground">AI that doesn't just chat, but triggers actions within your ERP or CRM.</p>
           </div>
        </div>
      </div>
    </div>
  )
}

// --- Layout 3: WhatsApp Bots ---
function WhatsappBots() {
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
            Automate Customer Interactions on WhatsApp.
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-12">
            Engineered specifically for e-commerce and B2B services. We build smart WhatsApp bots that handle real-time interactions without human intervention.
          </p>
          <div className="space-y-6">
             <div className="flex gap-4 items-start">
               <div className="mt-1 w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0">
                 <Zap className="w-4 h-4 text-[#25D366]" />
               </div>
               <div>
                 <h4 className="font-bold">Cash On Delivery (COD) Automation</h4>
                 <p className="text-muted-foreground text-sm">Automated order confirmation workflows that drastically reduce return rates.</p>
               </div>
             </div>
             <div className="flex gap-4 items-start">
               <div className="mt-1 w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0">
                 <Brain className="w-4 h-4 text-[#25D366]" />
               </div>
               <div>
                 <h4 className="font-bold">AI-Powered Support</h4>
                 <p className="text-muted-foreground text-sm">Bots that understand context and answer complex queries instantly.</p>
               </div>
             </div>
             <div className="flex gap-4 items-start">
               <div className="mt-1 w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0">
                 <Database className="w-4 h-4 text-[#25D366]" />
               </div>
               <div>
                 <h4 className="font-bold">ERP/CRM Sync</h4>
                 <p className="text-muted-foreground text-sm">Every WhatsApp interaction automatically updates your central database.</p>
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
                    <div className="text-xs text-green-500">Online</div>
                 </div>
              </div>
              
              {/* Chat Area */}
              <div className="flex-1 bg-background/50 p-4 flex flex-col justify-end gap-4 overflow-hidden relative">
                 <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,rgba(37,211,102,0.5)_0%,transparent_70%)] pointer-events-none" />
                 
                 <AnimatePresence>
                   {messages >= 1 && (
                     <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="self-end bg-secondary text-secondary-foreground px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%] text-sm shadow-sm">
                       Hi, I'd like to check the status of my order #8849.
                     </motion.div>
                   )}
                   {messages >= 2 && (
                     <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="self-start bg-card border border-border px-4 py-2 rounded-2xl rounded-tl-sm max-w-[80%] text-sm shadow-sm">
                       <span className="flex gap-1 items-center mb-1 text-xs text-muted-foreground"><Bot className="w-3 h-3"/> System checked</span>
                       Your order #8849 is out for delivery today. It will arrive between 2 PM and 4 PM. 📦
                     </motion.div>
                   )}
                   {messages >= 3 && (
                     <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="self-end bg-secondary text-secondary-foreground px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%] text-sm shadow-sm">
                       Great, thanks!
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
                    Type a message...
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
  return (
    <div className="pt-32 pb-16 lg:pt-40 lg:pb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            Eliminate Manual Work. Scale Operations.
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground">
            We connect your disjointed systems, build custom scripts, and automate repetitive tasks so your team can focus on growth.
          </p>
        </div>

        {/* Interlocking Gears & Workflow Canvas */}
        <div className="w-full h-[500px] bg-card border border-border rounded-3xl shadow-xl mb-24 relative overflow-hidden flex items-center justify-center">
           <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]" />
           
           <div className="relative z-10 w-[600px] h-[300px]">
              {/* Gear 1 */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute top-10 left-10 text-secondary opacity-20">
                 <Settings className="w-32 h-32" />
              </motion.div>
              {/* Gear 2 */}
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute top-24 left-36 text-secondary opacity-30">
                 <Settings className="w-24 h-24" />
              </motion.div>

              {/* Workflow Nodes */}
              <div className="absolute inset-0 flex items-center justify-between px-10">
                 <div className="w-20 h-20 bg-background border-2 border-border rounded-2xl shadow-lg flex items-center justify-center z-20">
                    <Database className="w-8 h-8 text-foreground" />
                 </div>
                 
                 {/* Connection Path */}
                 <div className="flex-1 h-1 bg-border relative">
                    <motion.div animate={{ left: ['0%', '100%'] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-secondary rounded-full shadow-[0_0_10px_rgba(var(--secondary),1)]" />
                 </div>

                 <div className="w-20 h-20 bg-background border-2 border-border rounded-2xl shadow-lg flex items-center justify-center z-20">
                    <Terminal className="w-8 h-8 text-foreground" />
                 </div>

                 {/* Connection Path */}
                 <div className="flex-1 h-1 bg-border relative">
                    <motion.div animate={{ left: ['0%', '100%'] }} transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }} className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-secondary rounded-full shadow-[0_0_10px_rgba(var(--secondary),1)]" />
                 </div>

                 <div className="w-20 h-20 bg-background border-2 border-secondary rounded-2xl shadow-lg flex items-center justify-center z-20 bg-secondary/10">
                    <Layers className="w-8 h-8 text-secondary" />
                 </div>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-background border border-border p-8 rounded-3xl text-center shadow-sm">
              <h3 className="text-xl font-bold mb-3">End-to-End Automation</h3>
              <p className="text-muted-foreground">Connecting CRMs, payment gateways, and communication tools flawlessly.</p>
           </div>
           <div className="bg-background border border-border p-8 rounded-3xl text-center shadow-sm">
              <h3 className="text-xl font-bold mb-3">Custom Scripting</h3>
              <p className="text-muted-foreground">Python and Node.js scripts designed for complex, specific operational needs.</p>
           </div>
           <div className="bg-background border border-border p-8 rounded-3xl text-center shadow-sm">
              <h3 className="text-xl font-bold mb-3">Error Reduction</h3>
              <p className="text-muted-foreground">Removing manual data entry bottlenecks to ensure 100% operational accuracy.</p>
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
        <AiCTA />
      </main>
      <Footer />
    </>
  )
}
