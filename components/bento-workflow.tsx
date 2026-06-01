'use client'

import { motion } from 'framer-motion'
import { Github, CheckCircle } from 'lucide-react'

// ─────────────────────────────────────────────
// Card 1: AutoPilot Network
// ─────────────────────────────────────────────
function CardDirectAccess() {
  const profiles = [
    {
      initial: 'S',
      name: 'Sarah K.',
      rating: '4.9',
      tag: 'OpenAI',
      color: 'bg-violet-500/20 text-violet-600',
      ring: 'ring-violet-400/30',
    },
    {
      initial: 'M',
      name: 'Marcus T.',
      rating: '5.0',
      tag: 'UiPath',
      color: 'bg-sky-500/20 text-sky-700',
      ring: 'ring-sky-400/30',
    },
    {
      initial: 'P',
      name: 'Priya L.',
      rating: '4.8',
      tag: 'Snowflake',
      color: 'bg-rose-500/20 text-rose-700',
      ring: 'ring-rose-400/30',
    },
  ]

  return (
    <motion.div
      whileHover={{ y: -3, boxShadow: '0 24px 48px -12px rgba(0,0,0,0.08)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col"
    >
      {/* Card Header bar */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-muted/30">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          AutoPilot Network
        </span>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-[10px] font-bold tracking-widest text-green-600">LIVE</span>
        </div>
      </div>

      {/* Profile list */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        {profiles.map((p) => (
          <div
            key={p.name}
            className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-background border border-border/60 hover:border-border transition-colors group"
          >
            <div className="flex items-center gap-3 min-w-0">
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div className={`w-9 h-9 rounded-full ring-2 ${p.ring} flex items-center justify-center text-sm font-bold ${p.color}`}>
                  {p.initial}
                </div>
              </div>
              {/* Name & rating */}
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground leading-none">{p.name}</p>
                <div className="flex items-center gap-1 mt-1">
                  <svg className="w-3 h-3 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-[11px] font-medium text-muted-foreground">{p.rating}</span>
                </div>
              </div>
            </div>
            {/* Tag pill */}
            <span className="flex-shrink-0 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border whitespace-nowrap">
              {p.tag}
            </span>
          </div>
        ))}
      </div>

      {/* Footer text */}
      <div className="px-5 pb-5 mt-auto">
        <p className="text-xs text-muted-foreground leading-relaxed">
          Direct Discord access to the architects building your system.
        </p>
      </div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────
// Card 2: Tech Stack Matrix
// ─────────────────────────────────────────────
const techItems = [
  {
    label: 'React',
    gradient: 'from-sky-50 to-cyan-50',
    border: 'border-sky-200/60',
    icon: (
      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <circle cx="20" cy="20" r="3.5" fill="#38BDF8" />
        <ellipse cx="20" cy="20" rx="17" ry="6.5" stroke="#38BDF8" strokeWidth="1.8" fill="none" />
        <ellipse cx="20" cy="20" rx="17" ry="6.5" stroke="#38BDF8" strokeWidth="1.8" fill="none" transform="rotate(60 20 20)" />
        <ellipse cx="20" cy="20" rx="17" ry="6.5" stroke="#38BDF8" strokeWidth="1.8" fill="none" transform="rotate(120 20 20)" />
      </svg>
    ),
  },
  {
    label: 'Node.js',
    gradient: 'from-green-50 to-emerald-50',
    border: 'border-green-200/60',
    icon: (
      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <path d="M20 4L33 11.5V28.5L20 36L7 28.5V11.5L20 4Z" fill="#4ADE80" fillOpacity="0.3" stroke="#22C55E" strokeWidth="1.8" />
        <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" fontSize="10" fontWeight="700" fill="#16A34A">N</text>
      </svg>
    ),
  },
  {
    label: 'Laravel',
    gradient: 'from-red-50 to-rose-50',
    border: 'border-red-200/60',
    icon: (
      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <path d="M34 8C34 8 22 14 20 20C18 26 22 32 22 32L8 24C8 24 12 18 14 12C16 6 34 8 34 8Z" fill="#FCA5A5" stroke="#EF4444" strokeWidth="1.5" />
        <path d="M8 24L22 32L20 20L8 24Z" fill="#FECACA" stroke="#EF4444" strokeWidth="1" />
      </svg>
    ),
  },
  {
    label: 'Docker',
    gradient: 'from-blue-50 to-indigo-50',
    border: 'border-blue-200/60',
    icon: (
      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <rect x="6" y="18" width="6" height="5" rx="1" fill="#93C5FD" stroke="#3B82F6" strokeWidth="1.4" />
        <rect x="14" y="18" width="6" height="5" rx="1" fill="#93C5FD" stroke="#3B82F6" strokeWidth="1.4" />
        <rect x="14" y="11" width="6" height="5" rx="1" fill="#BFDBFE" stroke="#3B82F6" strokeWidth="1.4" />
        <rect x="22" y="18" width="6" height="5" rx="1" fill="#93C5FD" stroke="#3B82F6" strokeWidth="1.4" />
        <path d="M33 20c0-3-4-3-4-3s0-3-4-3" stroke="#3B82F6" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M6 24c0 4 6 6 14 6s14-2 14-6" stroke="#3B82F6" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    label: 'AWS',
    gradient: 'from-orange-50 to-amber-50',
    border: 'border-orange-200/60',
    icon: (
      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <path d="M7 28l5-14 5 14M9 24h6" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M23 14v14M20 24l3 4 3-4" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 22c2-1 3-4 1-6-1-1-3-2-5-1" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Stripe',
    gradient: 'from-purple-50 to-fuchsia-50',
    border: 'border-purple-200/60',
    icon: (
      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <rect x="6" y="10" width="28" height="20" rx="4" fill="#E9D5FF" stroke="#A855F7" strokeWidth="1.5" />
        <path d="M16 20c1-4 8-4 8 0s-7 4-8 8" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
]

function CardTechMatrix() {
  return (
    <motion.div
      whileHover={{ y: -3, boxShadow: '0 24px 48px -12px rgba(0,0,0,0.08)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col"
    >
      {/* Card Header bar */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-muted/30">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          Tech Stack Matrix
        </span>
        <span className="text-[10px] font-bold tracking-widest text-muted-foreground/60 bg-muted px-2 py-0.5 rounded-md border border-border">
          20+ TOOLS
        </span>
      </div>

      {/* 3×2 icon grid */}
      <div className="grid grid-cols-3 gap-3 p-5 flex-1">
        {techItems.map((t) => (
          <motion.div
            key={t.label}
            whileHover={{ scale: 1.06, boxShadow: '0 8px 20px -6px rgba(0,0,0,0.12)' }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className={`relative flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-br ${t.gradient} border ${t.border} cursor-default`}
          >
            {t.icon}
            <span className="text-[10px] font-semibold text-foreground/70">{t.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Footer text */}
      <div className="px-5 pb-5">
        <p className="text-xs text-muted-foreground leading-relaxed">
          Enterprise-grade technologies tailored for scalable architecture.
        </p>
      </div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────
// Card 3: Proof-of-Work Verified
// ─────────────────────────────────────────────
function CardOwnership() {
  return (
    <motion.div
      whileHover={{ y: -3, boxShadow: '0 24px 48px -12px rgba(0,0,0,0.08)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col p-6"
    >
      <div className="flex justify-between items-start mb-8">
        <span className="font-mono text-[10px] font-bold text-muted-foreground bg-muted px-2 py-1 rounded border border-border tracking-wider">
          0x7f3a...c8e1
        </span>
        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center border border-green-200">
          <CheckCircle className="w-5 h-5 text-green-600" />
        </div>
      </div>

      <div className="flex-1">
        <h3 className="text-xl font-bold text-foreground mb-1">Proof-of-Work Verified</h3>
        <p className="text-sm text-muted-foreground">Verified deliverable</p>
        <p className="text-sm text-muted-foreground">Signed Apr 2026</p>
      </div>

      <div className="mt-8 mb-4">
        <span className="text-[11px] font-bold tracking-widest text-muted-foreground">
          BLOCK #1,284,932
        </span>
      </div>

      {/* Footer text */}
      <div className="px-5 pb-5 border-t border-border pt-4 -mx-6 mt-auto">
        <p className="text-xs text-muted-foreground leading-relaxed px-6">
          100% IP and repository ownership transferred to you from day one.
        </p>
      </div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────
// Card 4: Escrow-Protected Delivery
// ─────────────────────────────────────────────
function CardPipeline() {
  return (
    <motion.div
      whileHover={{ y: -3, boxShadow: '0 24px 48px -12px rgba(0,0,0,0.08)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col"
    >
      {/* Card Header bar */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-muted/30">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          Escrow-Protected Delivery
        </span>
        <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-muted-foreground bg-muted border border-border px-2 py-1 rounded-md">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          $1,200 HELD
        </span>
      </div>

      {/* Timeline visual */}
      <div className="flex-1 flex flex-col justify-center px-6 py-8">
        {/* Track */}
        <div className="relative flex items-center justify-between w-full h-2">
          {/* Background line */}
          <div className="absolute left-3 right-3 top-1/2 -translate-y-1/2 h-1 bg-border rounded-full" />
          
          {/* Progress fill */}
          <div className="absolute left-3 top-1/2 -translate-y-1/2 h-1 bg-green-500 rounded-full" style={{ width: 'calc(66.66% - 1.5rem)' }} />

          {/* Node 1 */}
          <div className="relative z-10 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
            <CheckCircle className="w-4 h-4 text-white" />
          </div>
          {/* Node 2 */}
          <div className="relative z-10 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
             <CheckCircle className="w-4 h-4 text-white" />
          </div>
          {/* Node 3 (Active) */}
          <div className="relative z-10 w-6 h-6 rounded-full bg-background border-2 border-orange-500 flex items-center justify-center">
             <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
             {/* Radiating pulse animation */}
             <motion.div
               className="absolute inset-0 rounded-full bg-orange-500/30"
               animate={{ scale: [1, 2.5], opacity: [1, 0] }}
               transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
             />
          </div>
          {/* Node 4 */}
          <div className="relative z-10 w-4 h-4 rounded-full bg-muted border-2 border-border flex items-center justify-center" />
        </div>
      </div>

      {/* Footer text */}
      <div className="px-5 pb-5">
        <p className="text-xs text-muted-foreground leading-relaxed">
          Transparent milestone tracking and agile sprint delivery.
        </p>
      </div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────
// Root Section
// ─────────────────────────────────────────────
export function BentoWorkflow() {
  return (
    <section className="relative py-24 bg-background border-b border-border/50 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-14">
          <p className="text-sm font-medium uppercase tracking-wider text-secondary">
            Client Workflow
          </p>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            How we communicate &amp; deliver
          </h2>
        </div>

        {/* 2 × 2 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CardDirectAccess />
          <CardTechMatrix />
          <CardOwnership />
          <CardPipeline />
        </div>

      </div>
    </section>
  )
}
