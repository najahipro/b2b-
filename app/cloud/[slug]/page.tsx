'use client'

import { notFound } from 'next/navigation'
import { use, useState, useEffect } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CalendlyButton } from '@/components/calendly-button'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MessageSquare, Server, Database, GitBranch, ArrowRight, Shield, Zap, Box, Cloud, Network, RefreshCw, Settings, Code2, ShieldCheck } from 'lucide-react'

// --- Global CTA ---
function CloudCTA() {
  return (
    <div className="w-full relative overflow-hidden bg-neutral-950 text-white py-24 px-6 lg:px-8 mt-24">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-blue-600/30 animate-[gradient_8s_linear_infinite] bg-[length:200%_auto]" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
          Secure Your Digital Infrastructure Today.
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CalendlyButton 
            text="Schedule a Technical Audit" 
            className="w-full sm:w-auto px-8 py-4 text-base font-medium rounded-lg bg-white text-neutral-950 hover:bg-neutral-200 transition-colors"
          />
          <a
            href="https://wa.me/212635278125"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium bg-[#25D366] text-white rounded-lg hover:bg-[#20bd5a] transition-colors shadow-lg shadow-[#25D366]/20"
          >
            <MessageSquare className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

// --- Layout 1: Server Management ---
function ServerManagement() {
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
                Enterprise-Grade Cloud Hosting & Containerization.
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                High-availability server management. We containerize your infrastructure for ultimate scalability and security.
              </p>
            </motion.div>
          </div>
          
          <div className="flex-1 w-full h-[500px] relative perspective-1000">
             {/* Floating Server Stacks */}
             <motion.div 
               animate={{ y: [-10, 10, -10], rotateX: [10, 5, 10], rotateY: [-10, -5, -10] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 transform-style-3d"
             >
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i} 
                    className="absolute w-full h-16 bg-card border border-secondary/30 rounded-xl shadow-[0_0_30px_rgba(var(--secondary),0.2)] backdrop-blur-md flex items-center px-4 gap-4"
                    style={{ transform: `translateZ(${i * 60 - 120}px) translateY(${i * 20 - 40}px)` }}
                  >
                     <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                     <div className="flex-1 h-2 bg-muted rounded-full" />
                     <Server className="w-6 h-6 text-secondary opacity-50" />
                  </div>
                ))}
             </motion.div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <motion.div 
             whileHover={{ y: -10 }}
             className="bg-card border border-border p-8 rounded-3xl shadow-sm"
           >
              <Box className="w-10 h-10 text-secondary mb-6" />
              <h3 className="text-xl font-bold mb-3">Docker Containerization</h3>
              <p className="text-muted-foreground">Isolated, lightweight, and perfectly replicated environments ensuring parity across all stages.</p>
           </motion.div>
           <motion.div 
             whileHover={{ y: -10 }}
             className="bg-card border border-border p-8 rounded-3xl shadow-sm"
           >
              <Settings className="w-10 h-10 text-secondary mb-6" />
              <h3 className="text-xl font-bold mb-3">Custom VPS & PaaS</h3>
              <p className="text-muted-foreground">Expertise in Linux, Nginx, and Coolify setups. Giving you total control without vendor lock-in.</p>
           </motion.div>
           <motion.div 
             whileHover={{ y: -10 }}
             className="bg-card border border-border p-8 rounded-3xl shadow-sm"
           >
              <Cloud className="w-10 h-10 text-secondary mb-6" />
              <h3 className="text-xl font-bold mb-3">GCP & AWS Architecture</h3>
              <p className="text-muted-foreground">Architecting robust cloud-native ecosystems utilizing the most powerful platforms available.</p>
           </motion.div>
        </div>
      </div>
    </div>
  )
}

// --- Layout 2: Database Architecture ---
function DatabaseArchitecture() {
  return (
    <div className="pt-32 pb-16 lg:pt-40 lg:pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-24">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
          Rock-Solid Database Architecture.
        </h1>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          We design, structure, and optimize massive relational databases that handle millions of rows without breaking a sweat.
        </p>
      </div>

      {/* Hub and Spoke Animation */}
      <div className="w-full h-[600px] relative flex items-center justify-center">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--secondary),0.1)_0%,transparent_70%)]" />
         
         {/* Central Cylinder */}
         <motion.div 
           animate={{ rotateY: 360 }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           className="relative z-10 w-48 h-64"
         >
            <div className="absolute inset-0 bg-card border-2 border-secondary/50 rounded-[40px_40px_40px_40px/20px_20px_20px_20px] shadow-[0_0_50px_rgba(var(--secondary),0.3)] flex flex-col items-center justify-center">
               <Database className="w-16 h-16 text-secondary opacity-80" />
            </div>
            {/* Top Lid */}
            <div className="absolute top-0 w-full h-10 border-b-2 border-secondary/50 bg-secondary/10 rounded-[50%]" />
         </motion.div>

         {/* Particles flowing in */}
         {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <div key={i} className="absolute top-1/2 left-1/2 w-full max-w-[800px] h-0" style={{ transform: `translate(-50%, -50%) rotate(${deg}deg)` }}>
               <motion.div 
                 animate={{ left: ['0%', '40%'], opacity: [0, 1, 0] }}
                 transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeIn" }}
                 className="absolute top-0 w-4 h-4 bg-secondary rounded-full shadow-[0_0_10px_rgba(var(--secondary),1)]"
               />
               <div className="absolute top-0 left-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent to-secondary/30" />
            </div>
         ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-card border border-border p-8 rounded-3xl shadow-sm text-center">
              <h3 className="text-xl font-bold mb-3">Relational Database Mastery</h3>
              <p className="text-muted-foreground">Deep expertise in MySQL and PostgreSQL. ACID compliance and data integrity guaranteed.</p>
           </div>
           <div className="bg-card border border-border p-8 rounded-3xl shadow-sm text-center">
              <h3 className="text-xl font-bold mb-3">Massive Scale</h3>
              <p className="text-muted-foreground">Proven experience architecting massive structures (e.g., 140+ interconnected tables).</p>
           </div>
           <div className="bg-card border border-border p-8 rounded-3xl shadow-sm text-center">
              <h3 className="text-xl font-bold mb-3">Query Optimization</h3>
              <p className="text-muted-foreground">Drastically reducing load times with advanced indexing and query restructuring.</p>
           </div>
        </div>
      </div>
    </div>
  )
}

// --- Layout 3: CI/CD Pipelines ---
function CicdPipelines() {
  const { scrollYProgress } = useScroll()
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div className="pt-32 pb-16 lg:pt-40 lg:pb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-32 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
          Automate Your Deployments.<br />
          <span className="text-secondary">Eliminate Human Error.</span>
        </h1>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Continuous Integration and Continuous Deployment (CI/CD) pipelines that deliver code to production safely and instantly.
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
              <h3 className="text-xl font-bold mb-3">Automated Workflows</h3>
              <p className="text-muted-foreground">Utilizing Bitbucket Pipelines and GitHub Actions to automate testing and build processes flawlessly.</p>
           </div>
           <div className="bg-card border border-border p-8 rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">OTA Updates</h3>
              <p className="text-muted-foreground">Pushing live updates directly to mobile apps (ZemExpress style) without app store delays.</p>
           </div>
           <div className="bg-card border border-border p-8 rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">Edge Deployments</h3>
              <p className="text-muted-foreground">Lightning-fast frontend hosting and scaling with Vercel and Edge network distributions.</p>
           </div>
        </div>
      </div>
    </div>
  )
}

// --- Layout 4: Zero-Downtime ---
function ZeroDowntime() {
  const [isMigrated, setIsMigrated] = useState(false)

  // Toggle effect for demonstration
  useEffect(() => {
    const interval = setInterval(() => {
      setIsMigrated(prev => !prev)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pt-32 pb-16 lg:pt-40 lg:pb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            Seamless Migrations.<br />Zero Seconds of Downtime.
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Upgrading your legacy systems or moving to a new cloud provider? We transfer your entire infrastructure while your business keeps running seamlessly.
          </p>
        </div>

        {/* Before & After Interactive Split */}
        <div className="w-full max-w-5xl mx-auto h-[400px] md:h-[500px] rounded-3xl overflow-hidden relative cursor-pointer border border-border shadow-2xl" onClick={() => setIsMigrated(!isMigrated)}>
           {/* Before (Messy Red) */}
           <div className="absolute inset-0 bg-neutral-950 flex flex-col items-center justify-center gap-4 transition-opacity duration-1000" style={{ opacity: isMigrated ? 0 : 1 }}>
              <div className="absolute top-4 left-4 text-red-500 font-bold uppercase tracking-widest bg-red-500/10 px-4 py-1 rounded-full text-sm border border-red-500/20">Legacy System</div>
              <Network className="w-32 h-32 text-red-500/50" />
              <div className="flex flex-wrap gap-4 justify-center w-3/4 opacity-50">
                 {[1,2,3,4,5].map(i => <div key={i} className="w-16 h-16 border-2 border-red-500/30 rounded-lg animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />)}
              </div>
           </div>
           
           {/* After (Clean Green) */}
           <div className="absolute inset-0 bg-neutral-950 flex flex-col items-center justify-center gap-8 transition-opacity duration-1000" style={{ opacity: isMigrated ? 1 : 0 }}>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.1)_0%,transparent_70%)]" />
              <div className="absolute top-4 left-4 text-green-400 font-bold uppercase tracking-widest bg-green-500/10 px-4 py-1 rounded-full text-sm border border-green-500/20">Modern Cloud</div>
              <div className="flex gap-16 relative z-10">
                 <div className="w-24 h-24 bg-green-500/10 border-2 border-green-500/50 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                    <Server className="w-10 h-10 text-green-400" />
                 </div>
                 <div className="flex items-center">
                    <div className="w-32 h-1 bg-green-500/30 relative overflow-hidden">
                       <motion.div animate={{ left: ['-100%', '100%'] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="absolute inset-0 w-full h-full bg-green-400 blur-sm" />
                    </div>
                 </div>
                 <div className="w-24 h-24 bg-green-500/10 border-2 border-green-500/50 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                    <Database className="w-10 h-10 text-green-400" />
                 </div>
              </div>
           </div>
           
           {/* Hint */}
           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/50 uppercase tracking-widest flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">
              <RefreshCw className="w-3 h-3" /> Click to migrate
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
           <div className="bg-card border border-border p-8 rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">Risk-Free Transfers</h3>
              <p className="text-muted-foreground">Meticulous planning, staging environments, and fallback protocols to ensure zero data loss.</p>
           </div>
           <div className="bg-card border border-border p-8 rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">Traffic Routing</h3>
              <p className="text-muted-foreground">Utilizing Cloudflare and load balancers to shift traffic seamlessly during the final DNS cutover.</p>
           </div>
           <div className="bg-card border border-border p-8 rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">Legacy Modernization</h3>
              <p className="text-muted-foreground">Upgrading outdated monolithic architectures to modern, microservices-ready cloud standards.</p>
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
        <CloudCTA />
      </main>
      <Footer />
    </>
  )
}
