'use client'

import { notFound } from 'next/navigation'
import { use, useState, useEffect, useRef } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CalendlyButton } from '@/components/calendly-button'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MessageSquare, Layout, Layers, Pencil, LineChart, Target, Compass, Box, Image as ImageIcon, Sparkles, Palette, Type, ShoppingBag } from 'lucide-react'

// --- Global CTA ---
function DesignCTA() {
  return (
    <div className="w-full relative py-24 px-6 lg:px-8 mt-24">
      <div className="max-w-4xl mx-auto relative z-10 p-12 md:p-20 rounded-[3rem] border border-white/20 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] overflow-hidden">
        {/* Soft Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-400/40 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-400/40 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen" />
        </div>
        
        <div className="text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 font-serif">
            Let's Design Your Digital Future.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton 
              text="Start a Design Project" 
              className="w-full sm:w-auto px-8 py-4 text-base font-medium rounded-full bg-foreground text-background hover:scale-105 transition-transform"
            />
            <a
              href="https://wa.me/212635278125"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium bg-[#25D366] text-white rounded-full hover:scale-105 transition-transform shadow-[0_10px_20px_rgba(37,211,102,0.2)]"
            >
              <MessageSquare className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// --- Layout 1: UX/UI Prototyping ---
function UxUiPrototyping() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleDrag = (e: any) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
    setSliderPosition((x / rect.width) * 100)
  }

  return (
    <div className="pt-32 pb-16 lg:pt-40 lg:pb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            Interfaces Engineered for User Retention.
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            We design intuitive, pixel-perfect user interfaces for complex SaaS and ERP platforms. Functionality meets flawless aesthetics.
          </p>
        </div>

        {/* Wireframe-to-Reality Slider */}
        <div 
          ref={containerRef}
          className="w-full max-w-5xl mx-auto h-[400px] md:h-[600px] relative rounded-3xl overflow-hidden cursor-ew-resize border border-border shadow-2xl mb-24 select-none touch-none"
          onPointerMove={(e) => e.buttons === 1 && handleDrag(e)}
          onPointerDown={handleDrag}
        >
           {/* High-Fidelity Dashboard (Background) */}
           <div className="absolute inset-0 bg-slate-900 text-slate-100 p-8 flex flex-col gap-6">
              <div className="h-12 border-b border-slate-700 flex justify-between items-center px-4">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                 </div>
                 <div className="font-bold text-cyan-400">Dashboard Pro</div>
              </div>
              <div className="flex-1 flex gap-6">
                 <div className="w-1/4 bg-slate-800 rounded-xl p-4 flex flex-col gap-4 border border-slate-700 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                    <div className="h-8 w-full bg-cyan-500/20 text-cyan-400 rounded flex items-center px-2 text-xs font-bold border border-cyan-500/30">Overview</div>
                    <div className="h-8 w-full bg-slate-700/50 rounded" />
                    <div className="h-8 w-full bg-slate-700/50 rounded" />
                 </div>
                 <div className="flex-1 flex flex-col gap-6">
                    <div className="flex gap-6 h-32">
                       <div className="flex-1 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-4 shadow-lg shadow-purple-500/20">
                          <div className="text-white/70 text-sm">Revenue</div>
                          <div className="text-3xl font-bold text-white mt-2">$45,231</div>
                       </div>
                       <div className="flex-1 bg-slate-800 rounded-xl p-4 border border-slate-700">
                          <div className="text-slate-400 text-sm">Users</div>
                          <div className="text-3xl font-bold text-slate-100 mt-2">1,204</div>
                       </div>
                    </div>
                    <div className="flex-1 bg-slate-800 rounded-xl border border-slate-700 relative overflow-hidden p-6">
                       <div className="absolute inset-0 opacity-20">
                          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100"><path d="M0,100 L0,50 Q25,20 50,50 T100,30 L100,100 Z" fill="#06b6d4" /></svg>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Low-Fidelity Wireframe (Foreground/Clipped) */}
           <div 
             className="absolute inset-0 bg-neutral-100 p-8 flex flex-col gap-6 border-r-4 border-foreground"
             style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
           >
              <div className="h-12 border-b-2 border-neutral-300 flex justify-between items-center px-4 border-dashed">
                 <div className="w-24 h-4 bg-neutral-300" />
                 <div className="w-32 h-6 bg-neutral-300" />
              </div>
              <div className="flex-1 flex gap-6">
                 <div className="w-1/4 border-2 border-neutral-300 border-dashed rounded-xl p-4 flex flex-col gap-4">
                    <div className="h-8 w-full bg-neutral-300" />
                    <div className="h-8 w-full bg-neutral-200" />
                    <div className="h-8 w-full bg-neutral-200" />
                 </div>
                 <div className="flex-1 flex flex-col gap-6">
                    <div className="flex gap-6 h-32">
                       <div className="flex-1 border-2 border-neutral-300 border-dashed rounded-xl flex items-center justify-center">
                          <div className="text-neutral-400 font-mono text-xl">Card</div>
                       </div>
                       <div className="flex-1 border-2 border-neutral-300 border-dashed rounded-xl flex items-center justify-center">
                          <div className="text-neutral-400 font-mono text-xl">Card</div>
                       </div>
                    </div>
                    <div className="flex-1 border-2 border-neutral-300 border-dashed rounded-xl flex items-center justify-center relative overflow-hidden">
                       <div className="w-full h-[2px] bg-neutral-300 absolute rotate-[-20deg]" />
                       <div className="w-full h-[2px] bg-neutral-300 absolute rotate-[20deg]" />
                       <div className="bg-neutral-100 p-2 z-10 text-neutral-400 font-mono text-xl">Chart Area</div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Slider Handle */}
           <div 
             className="absolute top-0 bottom-0 w-8 -ml-4 flex items-center justify-center cursor-ew-resize pointer-events-none"
             style={{ left: `${sliderPosition}%` }}
           >
              <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center shadow-lg border-2 border-background">
                 <div className="flex gap-1">
                    <div className="w-0.5 h-3 bg-background rounded-full" />
                    <div className="w-0.5 h-3 bg-background rounded-full" />
                 </div>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-card border border-border p-8 rounded-3xl">
              <Pencil className="w-10 h-10 text-secondary mb-6" />
              <h3 className="text-xl font-bold mb-3">Interactive Prototyping</h3>
              <p className="text-muted-foreground">High-fidelity Figma prototypes to test user flows before a single line of code is written.</p>
           </div>
           <div className="bg-card border border-border p-8 rounded-3xl">
              <Layout className="w-10 h-10 text-secondary mb-6" />
              <h3 className="text-xl font-bold mb-3">Enterprise Dashboards</h3>
              <p className="text-muted-foreground">Clean, clutter-free UI design for systems with massive data output.</p>
           </div>
           <div className="bg-card border border-border p-8 rounded-3xl">
              <Layers className="w-10 h-10 text-secondary mb-6" />
              <h3 className="text-xl font-bold mb-3">Design Systems</h3>
              <p className="text-muted-foreground">Scalable component libraries ensuring absolute brand consistency across platforms.</p>
           </div>
        </div>
      </div>
    </div>
  )
}

// --- Layout 2: Digital Product Strategy ---
function ProductStrategy() {
  const { scrollYProgress } = useScroll()
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div className="pt-32 pb-16 lg:pt-40 lg:pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            Strategy Before Execution.
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            We align your business goals with technical realities to create a foolproof roadmap for your digital product.
          </p>
        </div>

        {/* Curved Stepper Roadmap */}
        <div className="relative max-w-4xl mx-auto py-20 min-h-[800px]">
           {/* SVG Path Background */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[4px] h-full bg-muted/50 rounded-full" />
           
           {/* Animated Glowing Path */}
           <motion.div 
             className="absolute top-0 left-1/2 -translate-x-1/2 w-[4px] bg-secondary rounded-full origin-top shadow-[0_0_20px_rgba(var(--secondary),1)]"
             style={{ scaleY: pathLength }}
           />

           {/* Nodes */}
           <div className="space-y-48 relative z-10">
              {/* Milestone 1 */}
              <div className="flex items-center justify-between w-full">
                 <div className="w-5/12 text-right pr-12">
                    <h3 className="text-2xl font-bold mb-2">Technical Discovery</h3>
                    <p className="text-muted-foreground">Mapping out exact database and logic requirements.</p>
                 </div>
                 <div className="w-10 h-10 rounded-full bg-card border-4 border-secondary flex items-center justify-center shadow-[0_0_15px_rgba(var(--secondary),0.5)] z-10">
                    <Compass className="w-4 h-4 text-secondary" />
                 </div>
                 <div className="w-5/12 pl-12 opacity-50">
                    <div className="w-32 h-20 bg-muted/20 border border-border rounded-xl" />
                 </div>
              </div>

              {/* Milestone 2 */}
              <div className="flex items-center justify-between w-full">
                 <div className="w-5/12 pr-12 opacity-50 flex justify-end">
                    <div className="w-32 h-32 rounded-full border border-border" />
                 </div>
                 <div className="w-10 h-10 rounded-full bg-card border-4 border-secondary flex items-center justify-center shadow-[0_0_15px_rgba(var(--secondary),0.5)] z-10">
                    <LineChart className="w-4 h-4 text-secondary" />
                 </div>
                 <div className="w-5/12 pl-12">
                    <h3 className="text-2xl font-bold mb-2">Conversion Optimization</h3>
                    <p className="text-muted-foreground">Strategic placement of elements to drive B2B and e-commerce conversions.</p>
                 </div>
              </div>

              {/* Milestone 3 */}
              <div className="flex items-center justify-between w-full">
                 <div className="w-5/12 text-right pr-12">
                    <h3 className="text-2xl font-bold mb-2">Feature Prioritization</h3>
                    <p className="text-muted-foreground">Defining the MVP for rapid, cost-effective market entry.</p>
                 </div>
                 <div className="w-10 h-10 rounded-full bg-card border-4 border-secondary flex items-center justify-center shadow-[0_0_15px_rgba(var(--secondary),0.5)] z-10">
                    <Target className="w-4 h-4 text-secondary" />
                 </div>
                 <div className="w-5/12 pl-12 opacity-50">
                    <div className="w-24 h-24 rotate-45 bg-muted/20 border border-border rounded-lg" />
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}

// --- Layout 3: 3D Assets ---
function Assets3D() {
  return (
    <div className="pt-32 pb-16 lg:pt-40 lg:pb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            Stand Out with Premium 3D Marketing.
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Elevate your ad campaigns and landing pages with custom 3D assets and high-end visual content.
          </p>
        </div>

        {/* Immersive 3D Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
           {/* Item 1 */}
           <motion.div 
             whileHover={{ rotateX: 10, rotateY: -10, z: 50 }}
             className="bg-card border border-border rounded-3xl h-80 shadow-lg relative overflow-hidden group perspective-1000 transform-style-3d"
           >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center transform group-hover:translate-z-20 transition-transform duration-500">
                 <div className="w-32 h-32 bg-purple-500/20 rounded-full blur-xl absolute" />
                 <div className="w-24 h-24 border-[8px] border-foreground rounded-full relative z-10 animate-[spin_10s_linear_infinite]" />
              </div>
              <div className="absolute bottom-6 left-6 font-bold tracking-widest uppercase text-sm">Abstract Spline Elements</div>
           </motion.div>

           {/* Item 2 */}
           <motion.div 
             whileHover={{ rotateX: 10, rotateY: 10, z: 50 }}
             className="bg-card border border-border rounded-3xl h-80 shadow-lg relative overflow-hidden group perspective-1000 transform-style-3d"
           >
              <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center transform group-hover:translate-z-20 transition-transform duration-500">
                 <div className="w-32 h-32 bg-cyan-500/20 rounded-full blur-xl absolute" />
                 <div className="w-24 h-32 bg-foreground/10 border border-foreground/30 backdrop-blur-md rounded-2xl relative z-10 rotate-12 shadow-2xl" />
              </div>
              <div className="absolute bottom-6 left-6 font-bold tracking-widest uppercase text-sm">Glassmorphic UI Mockups</div>
           </motion.div>

           {/* Item 3 */}
           <motion.div 
             whileHover={{ rotateX: -10, rotateY: 0, z: 50 }}
             className="bg-card border border-border rounded-3xl h-80 shadow-lg relative overflow-hidden group perspective-1000 transform-style-3d md:col-span-2 lg:col-span-1"
           >
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center transform group-hover:translate-z-20 transition-transform duration-500">
                 <div className="w-48 h-20 bg-pink-500/20 rounded-full blur-2xl absolute" />
                 <div className="flex gap-4">
                    <div className="w-16 h-16 bg-foreground rounded-xl shadow-xl rotate-45" />
                    <div className="w-16 h-16 bg-foreground rounded-xl shadow-xl rotate-45 translate-y-4" />
                 </div>
              </div>
              <div className="absolute bottom-6 left-6 font-bold tracking-widest uppercase text-sm">Product Visualization</div>
           </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-background border border-border p-8 rounded-3xl">
              <Box className="w-10 h-10 text-secondary mb-6" />
              <h3 className="text-xl font-bold mb-3">Spline 3D Integration</h3>
              <p className="text-muted-foreground">Web-optimized, interactive 3D elements that engage users without slowing down your site.</p>
           </div>
           <div className="bg-background border border-border p-8 rounded-3xl">
              <ImageIcon className="w-10 h-10 text-secondary mb-6" />
              <h3 className="text-xl font-bold mb-3">Product Visualization</h3>
              <p className="text-muted-foreground">Abstract, high-end rendering of products (e.g., tech accessories, premium gear).</p>
           </div>
           <div className="bg-background border border-border p-8 rounded-3xl">
              <Sparkles className="w-10 h-10 text-secondary mb-6" />
              <h3 className="text-xl font-bold mb-3">Ad Creatives</h3>
              <p className="text-muted-foreground">Scroll-stopping visual assets engineered strictly for high CTR (Click-Through Rate).</p>
           </div>
        </div>
      </div>
    </div>
  )
}

// --- Layout 4: E-commerce Branding ---
function EcommerceBranding() {
  return (
    <div className="pt-32 pb-16 lg:pt-40 lg:pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6 font-serif">
            Brands That Command Trust.
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            We craft cohesive, high-trust brand identities specifically tailored for e-commerce and digital platforms.
          </p>
        </div>

        {/* Moodboard / Brand Book Canvas */}
        <div className="w-full min-h-[600px] bg-card border border-border rounded-[3rem] shadow-xl p-8 md:p-12 mb-24 relative overflow-hidden">
           <div className="absolute inset-0 bg-[#f8f9fa] dark:bg-[#09090b] pointer-events-none" />
           <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }} />

           <div className="relative z-10 w-full h-full min-h-[500px]">
              {/* Color Swatches */}
              <motion.div 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-0 right-10 flex flex-col gap-2 bg-background p-4 rounded-2xl shadow-lg border border-border"
              >
                 <div className="w-16 h-16 rounded-xl bg-neutral-900" />
                 <div className="w-16 h-16 rounded-xl bg-neutral-500" />
                 <div className="w-16 h-16 rounded-xl bg-[#c5a365]" />
                 <div className="w-16 h-16 rounded-xl bg-white border border-border" />
              </motion.div>

              {/* Typography Scale */}
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute top-10 left-10 bg-background p-8 rounded-2xl shadow-lg border border-border max-w-xs"
              >
                 <div className="font-serif text-4xl mb-4">Aa</div>
                 <div className="font-serif text-2xl font-bold mb-2">Playfair Display</div>
                 <div className="text-sm text-muted-foreground font-sans">Used for primary headings and brand messaging to convey elegance.</div>
              </motion.div>

              {/* Packaging Mockup (Abstract Box) */}
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute bottom-10 right-1/3 w-64 h-64 bg-background border border-border shadow-2xl flex items-center justify-center p-8 transform rotate-3"
              >
                 {/* Top Flap */}
                 <div className="absolute -top-12 left-0 w-full h-12 bg-muted border-t border-x border-border origin-bottom rotate-x-45" />
                 {/* Logo placeholder */}
                 <div className="font-serif text-2xl tracking-widest uppercase">BRAND</div>
              </motion.div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-background border border-border p-8 rounded-3xl">
              <Palette className="w-10 h-10 text-secondary mb-6" />
              <h3 className="text-xl font-bold mb-3">Visual Identity</h3>
              <p className="text-muted-foreground">Modern logo design, typography scales, and specific brand guidelines.</p>
           </div>
           <div className="bg-background border border-border p-8 rounded-3xl">
              <Type className="w-10 h-10 text-secondary mb-6" />
              <h3 className="text-xl font-bold mb-3">High-Converting Aesthetics</h3>
              <p className="text-muted-foreground">Designing the visual layout of product pages to maximize Cash On Delivery (COD) trust.</p>
           </div>
           <div className="bg-background border border-border p-8 rounded-3xl">
              <ShoppingBag className="w-10 h-10 text-secondary mb-6" />
              <h3 className="text-xl font-bold mb-3">Packaging Mockups</h3>
              <p className="text-muted-foreground">Translating your digital brand into premium physical packaging concepts.</p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default function DesignServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)

  const validSlugs = ['ux-ui-prototyping', 'product-strategy', '3d-assets', 'ecommerce-branding']
  
  if (!validSlugs.includes(slug)) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {slug === 'ux-ui-prototyping' && <UxUiPrototyping />}
        {slug === 'product-strategy' && <ProductStrategy />}
        {slug === '3d-assets' && <Assets3D />}
        {slug === 'ecommerce-branding' && <EcommerceBranding />}
        <DesignCTA />
      </main>
      <Footer />
    </>
  )
}
