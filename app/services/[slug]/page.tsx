import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CalendlyButton } from '@/components/calendly-button'
import { Database, Layout, Server, Settings, ShieldCheck, Terminal, MessageSquare } from 'lucide-react'

// --- Global CTA ---
function ServiceCTA() {
  return (
    <div className="w-full bg-foreground text-background py-20 px-6 lg:px-8 mt-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
          Ready to Architect Your Next Big System?
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CalendlyButton 
            text="Book a Discovery Call" 
            className="w-full sm:w-auto px-8 py-4 text-base font-medium rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors"
          />
          <a
            href="https://wa.me/212635278125"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium bg-[#25D366] text-white rounded-lg hover:bg-[#20bd5a] transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

// --- Layout 1: Enterprise SaaS ---
function EnterpriseSaas() {
  return (
    <div className="pt-32 pb-16 lg:pt-40 lg:pb-0">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-24">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
          Scalable Multi-Tenant SaaS Architectures
        </h1>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-16">
          We design and engineer robust, high-performance Software as a Service platforms ready for global scale. No middlemen, just senior architecture.
        </p>
        
        {/* Abstract 3D shape representation */}
        <div className="w-full max-w-4xl mx-auto h-64 md:h-96 rounded-3xl bg-gradient-to-br from-secondary/20 via-background to-border flex items-center justify-center border border-border overflow-hidden relative shadow-2xl">
           <div className="absolute w-[150%] h-[150%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#00000005_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff00_50%,#ffffff05_100%)] animate-[spin_20s_linear_infinite]" />
           <div className="w-32 h-32 md:w-48 md:h-48 border-4 border-secondary/50 rounded-2xl rotate-12 shadow-lg backdrop-blur-md bg-background/50 flex items-center justify-center z-10">
              <Server className="w-12 h-12 text-secondary" />
           </div>
           <div className="w-24 h-24 md:w-32 md:h-32 border border-foreground/20 rounded-full absolute -ml-48 mt-24 animate-pulse z-0" />
           <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-dashed border-secondary/30 rounded-xl absolute ml-56 -mt-32 rotate-45 z-0" />
        </div>
      </div>

      {/* Z-Pattern Section 1: Text Left, Image Right */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        <div className="flex-1 space-y-6">
          <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
             <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Multi-Tenant Ecosystems</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Complete data isolation and high-level security for individual tenants. 
            We engineer the database architecture to guarantee zero cross-contamination while ensuring maximum scalability.
          </p>
        </div>
        <div className="flex-1 w-full h-80 rounded-2xl bg-card border border-border shadow-md flex items-center justify-center p-8 relative overflow-hidden">
          {/* Abstract 3D Server Blocks */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="relative z-10 flex gap-4">
             {[1, 2, 3].map((i) => (
                <div key={i} className={`w-16 h-32 md:w-24 md:h-48 bg-background border-2 border-secondary/20 rounded-lg shadow-xl translate-y-[${i * 10}px] hover:-translate-y-2 transition-transform duration-500 flex flex-col p-2 gap-2`}>
                   <div className="w-full h-2 bg-secondary/40 rounded-full" />
                   <div className="w-2/3 h-2 bg-foreground/20 rounded-full" />
                   <div className="w-full h-full bg-secondary/5 rounded-md mt-auto flex items-end justify-center pb-2">
                     <Database className="w-6 h-6 text-secondary/50" />
                   </div>
                </div>
             ))}
          </div>
        </div>
      </div>

      {/* Z-Pattern Section 2: Image Left, Text Right */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
        <div className="flex-1 space-y-6">
          <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
             <Settings className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Advanced Role-Based Access Control (RBAC)</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Granular permissions designed for complex corporate hierarchies. Give admins precise control over who sees what, tailored perfectly to enterprise workflows.
          </p>
        </div>
        <div className="flex-1 w-full h-80 rounded-2xl bg-background border border-border shadow-lg flex flex-col overflow-hidden relative">
          {/* UI Mockup Dashboard */}
          <div className="h-10 w-full border-b border-border bg-card flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="h-4 w-32 bg-muted rounded mx-auto" />
          </div>
          <div className="flex-1 p-6 flex gap-6">
             <div className="w-1/3 space-y-3 border-r border-border pr-4">
                <div className="h-6 w-full bg-muted rounded-md" />
                <div className="h-6 w-3/4 bg-muted/50 rounded-md" />
                <div className="h-6 w-4/5 bg-muted/50 rounded-md" />
             </div>
             <div className="w-2/3 space-y-4">
                <div className="flex justify-between items-center border-b border-border pb-2">
                   <div className="h-5 w-24 bg-foreground/20 rounded" />
                   <div className="h-6 w-12 bg-secondary/20 rounded-full" />
                </div>
                <div className="flex justify-between items-center border-b border-border pb-2">
                   <div className="h-5 w-32 bg-foreground/20 rounded" />
                   <div className="h-6 w-12 bg-secondary rounded-full relative">
                      <div className="w-4 h-4 bg-background rounded-full absolute right-1 top-1" />
                   </div>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-2">
                   <div className="h-5 w-20 bg-foreground/20 rounded" />
                   <div className="h-6 w-12 bg-secondary rounded-full relative">
                      <div className="w-4 h-4 bg-background rounded-full absolute right-1 top-1" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// --- Layout 2: Custom ERP & CRM ---
function ErpCrm() {
  return (
    <div className="pt-32 pb-16 lg:pt-40 lg:pb-0">
      {/* 50/50 Split Hero */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-24 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 lg:pr-8">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            Centralize Your Business
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Stop relying on scattered spreadsheets. We build bespoke ERP and CRM systems tailored to your exact operational workflows.
          </p>
        </div>
        <div className="flex-1 w-full h-[400px] bg-card border border-border shadow-2xl rounded-2xl overflow-hidden flex flex-col">
          {/* ERP Dashboard Mockup */}
          <div className="h-12 w-full border-b border-border flex items-center px-6 justify-between bg-background">
             <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-secondary/20 rounded" />
                <div className="h-4 w-24 bg-foreground/20 rounded" />
             </div>
             <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-muted" />
                <div className="w-6 h-6 rounded-full bg-muted" />
             </div>
          </div>
          <div className="flex-1 flex p-6 gap-6 bg-card/50">
            <div className="w-1/4 flex flex-col gap-3">
              {[1,2,3,4,5].map(i => <div key={i} className="h-8 w-full bg-background border border-border rounded-md" />)}
            </div>
            <div className="w-3/4 flex flex-col gap-6">
              <div className="flex gap-4 h-24">
                 <div className="flex-1 bg-background border border-border rounded-xl p-4 flex flex-col justify-between">
                    <div className="h-3 w-16 bg-muted rounded" />
                    <div className="h-6 w-24 bg-secondary/40 rounded" />
                 </div>
                 <div className="flex-1 bg-background border border-border rounded-xl p-4 flex flex-col justify-between">
                    <div className="h-3 w-16 bg-muted rounded" />
                    <div className="h-6 w-20 bg-foreground/40 rounded" />
                 </div>
              </div>
              <div className="flex-1 bg-background border border-border rounded-xl p-4">
                 <div className="h-full w-full border-b-2 border-l-2 border-muted relative">
                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                       <path d="M0,80 Q50,20 100,50 T200,30 T300,60" fill="none" stroke="currentColor" strokeWidth="3" className="text-secondary" />
                    </svg>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="bg-muted/30 border-y border-border py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
               <Database className="w-10 h-10 text-secondary mb-6" />
               <h3 className="text-xl font-bold mb-3">Complex Databases</h3>
               <p className="text-muted-foreground text-sm leading-relaxed">
                 Experience architecting relational databases with over 140+ interconnected tables.
               </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
               <Layout className="w-10 h-10 text-secondary mb-6" />
               <h3 className="text-xl font-bold mb-3">Centralized Workflows</h3>
               <p className="text-muted-foreground text-sm leading-relaxed">
                 Unified modules for Inventory, HR, Treasury, and CRM—all working perfectly together.
               </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
               <svg className="w-10 h-10 text-secondary mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
               <h3 className="text-xl font-bold mb-3">Real-Time Analytics</h3>
               <p className="text-muted-foreground text-sm leading-relaxed">
                 Custom dashboards that turn raw data into executive insights automatically.
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// --- Layout 3: Scalable Backend ---
function BackendApis() {
  return (
    <div className="min-h-screen pt-32 pb-16 lg:pt-40 lg:pb-0 bg-[#09090b] text-neutral-50 dark relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Dark Hero */}
        <div className="text-center mb-16 relative">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-white">
            The Engine Behind Your Digital Products.
          </h1>
          <p className="text-lg lg:text-xl text-neutral-400 max-w-2xl mx-auto">
            Secure, lightning-fast, and scalable backend infrastructure powered by modern frameworks.
          </p>
        </div>

        {/* Code Editor Window */}
        <div className="max-w-4xl mx-auto bg-[#0d1117] border border-neutral-800 rounded-2xl overflow-hidden shadow-[0_0_50px_-12px_rgba(var(--secondary),0.3)] font-mono">
           <div className="h-12 bg-[#161b22] border-b border-neutral-800 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-neutral-700" />
              <div className="w-3 h-3 rounded-full bg-neutral-700" />
              <div className="w-3 h-3 rounded-full bg-neutral-700" />
              <div className="mx-auto text-xs text-neutral-400 flex items-center gap-2">
                 <Terminal className="w-4 h-4" />
                 infrastructure.ts
              </div>
           </div>
           <div className="p-6 md:p-10 text-sm md:text-base leading-relaxed text-neutral-300 overflow-x-auto">
              <p><span className="text-purple-400">import</span> {'{'} BackendArchitecture {'}'} <span className="text-purple-400">from</span> <span className="text-green-300">'@digitomaroc/core'</span>;</p>
              <br/>
              <p><span className="text-blue-400">const</span> infrastructure = <span className="text-blue-400">new</span> BackendArchitecture({'{'}</p>
              <div className="pl-6 md:pl-12 space-y-4 my-4 border-l-2 border-neutral-800 ml-2">
                 <div className="flex items-start gap-4">
                    <span className="text-red-300">features:</span>
                    <ul className="text-neutral-400 space-y-2">
                       <li><span className="text-blue-300">"RESTful API Development"</span>, <span className="text-neutral-500">// Connecting your software to any 3rd party</span></li>
                       <li><span className="text-blue-300">"Laravel & Node.js mastery"</span>, <span className="text-neutral-500">// High-performance logic</span></li>
                       <li><span className="text-blue-300">"High-traffic relational databases"</span>, <span className="text-neutral-500">// MySQL / PostgreSQL at scale</span></li>
                       <li><span className="text-blue-300">"Zero-Downtime deployment"</span>, <span className="text-neutral-500">// CI/CD architecture</span></li>
                    </ul>
                 </div>
              </div>
              <p>{'}'});</p>
              <br/>
              <p><span className="text-blue-400">await</span> infrastructure.<span className="text-yellow-200">deploy</span>(); <span className="text-neutral-500">// Ready for scale 🚀</span></p>
           </div>
        </div>
      </div>
    </div>
  )
}

// --- Layout 4: Modern Frontend ---
function ModernFrontend() {
  return (
    <div className="pt-32 pb-16 lg:pt-40 lg:pb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            Interfaces That Convert and Perform.
          </h1>
          <p className="text-lg text-muted-foreground">
            We build dynamic, responsive, and intuitive user experiences using the latest frontend technologies.
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
           {/* Large Tile */}
           <div className="md:col-span-2 bg-card border border-border rounded-3xl p-8 shadow-sm flex flex-col justify-between relative overflow-hidden group">
              <div className="relative z-10 max-w-sm">
                 <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6">
                    <Layout className="w-6 h-6" />
                 </div>
                 <h3 className="text-2xl font-bold mb-3">Single Page Applications (SPAs)</h3>
                 <p className="text-muted-foreground">Blazing fast load times with React.js & Vue.js logic. No frustrating reloads.</p>
              </div>
              <div className="absolute right-0 bottom-0 p-8 translate-x-1/4 translate-y-1/4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                 <div className="w-64 h-64 bg-secondary/5 rounded-full blur-3xl absolute" />
                 <div className="w-48 h-32 bg-background border border-border rounded-xl shadow-xl p-4 flex flex-col gap-3 rotate-[-10deg]">
                    <div className="w-full h-8 bg-muted rounded-md" />
                    <div className="flex gap-2">
                       <div className="w-1/2 h-8 bg-secondary/20 rounded-md" />
                       <div className="w-1/2 h-8 bg-muted rounded-md" />
                    </div>
                 </div>
              </div>
           </div>

           {/* Medium Tile 1 */}
           <div className="bg-card border border-border rounded-3xl p-8 shadow-sm flex flex-col relative overflow-hidden group">
              <div className="relative z-10">
                 <h3 className="text-xl font-bold mb-3">Complex State Management</h3>
                 <p className="text-muted-foreground text-sm">Handling real-time data flows client-side flawlessly.</p>
              </div>
              <div className="mt-auto pt-8 flex items-end justify-center">
                 <div className="flex items-end gap-2 h-24 w-full">
                    {[40, 70, 45, 90, 60].map((h, i) => (
                       <div key={i} className="flex-1 bg-secondary/20 rounded-t-sm transition-all duration-500 group-hover:bg-secondary/40" style={{ height: `${h}%` }} />
                    ))}
                 </div>
              </div>
           </div>

           {/* Medium Tile 2 */}
           <div className="md:col-span-3 bg-card border border-border rounded-3xl p-8 shadow-sm flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
              <div className="md:w-1/2 relative z-10">
                 <h3 className="text-2xl font-bold mb-3">Pixel-Perfect UI</h3>
                 <p className="text-muted-foreground">Translating brand identity into flawless, interactive code.</p>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0 flex justify-end relative">
                 <div className="flex gap-4">
                    <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-medium shadow-lg hover:scale-105 transition-transform">
                       Primary Action
                    </button>
                    <div className="px-6 py-3 bg-background border border-border rounded-full flex items-center justify-center opacity-50">
                       <div className="w-16 h-2 bg-muted rounded-full" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}

// --- Layout 5: Secure E-commerce ---
function SecureEcommerce() {
  return (
    <div className="pt-32 pb-16 lg:pt-40 lg:pb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            High-Converting E-commerce Infrastructure built for scale.
          </h1>
        </div>

        {/* Step-by-Step Flowchart Pipeline */}
        <div className="max-w-3xl mx-auto relative">
           {/* Vertical Line */}
           <div className="absolute left-[23px] top-10 bottom-10 w-0.5 bg-border z-0" />

           <div className="space-y-16">
              {/* Step 1 */}
              <div className="flex gap-8 relative z-10">
                 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-card border-2 border-secondary flex items-center justify-center shadow-lg">
                    <Server className="w-5 h-5 text-secondary" />
                 </div>
                 <div className="pt-2">
                    <div className="text-sm font-bold text-secondary tracking-widest uppercase mb-2">Step 1</div>
                    <h3 className="text-2xl font-bold mb-3">Scalable Storefront</h3>
                    <p className="text-muted-foreground text-lg">
                       Handling massive ad-driven traffic spikes without crashing. 
                       Optimized asset delivery and bulletproof caching layers.
                    </p>
                 </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-8 relative z-10">
                 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-card border-2 border-secondary flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                 </div>
                 <div className="pt-2">
                    <div className="text-sm font-bold text-secondary tracking-widest uppercase mb-2">Step 2</div>
                    <h3 className="text-2xl font-bold mb-3">Custom Cash On Delivery (COD)</h3>
                    <p className="text-muted-foreground text-lg">
                       Custom workflows designed specifically for COD market needs. Frictionless checkout experiences tailored for local logistics.
                    </p>
                 </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-8 relative z-10">
                 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-card border-2 border-[#25D366] flex items-center justify-center shadow-lg">
                    <MessageSquare className="w-5 h-5 text-[#25D366]" />
                 </div>
                 <div className="pt-2">
                    <div className="text-sm font-bold text-[#25D366] tracking-widest uppercase mb-2">Step 3</div>
                    <h3 className="text-2xl font-bold mb-3">LLM & WhatsApp Bot Automations</h3>
                    <p className="text-muted-foreground text-lg">
                       AI agents handling order confirmations instantly via WhatsApp. Drastically reduce return rates and confirm purchases on autopilot.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default async function ServicePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const slug = params.slug

  const validSlugs = ['enterprise-saas', 'erp-crm', 'backend-apis', 'modern-frontend', 'secure-ecommerce']
  
  if (!validSlugs.includes(slug)) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {slug === 'enterprise-saas' && <EnterpriseSaas />}
        {slug === 'erp-crm' && <ErpCrm />}
        {slug === 'backend-apis' && <BackendApis />}
        {slug === 'modern-frontend' && <ModernFrontend />}
        {slug === 'secure-ecommerce' && <SecureEcommerce />}
        <ServiceCTA />
      </main>
      <Footer />
    </>
  )
}
