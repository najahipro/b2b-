'use client'

import { Calendar, Database, Layers, Cpu, ShoppingCart, Truck, Search, Gauge, Workflow, CreditCard, CloudCog, Bell, Smartphone } from 'lucide-react'

interface ProjectMockupProps {
  projectKey: string
}

const configs: Record<string, {
  icon: typeof Calendar
  gradient: string
  glowColor: string
  stat1: { value: string; label: string }
  stat2: { value: string; label: string }
}> = {
  alloclients: {
    icon: Calendar,
    gradient: 'from-indigo-600 via-violet-600 to-purple-700',
    glowColor: 'bg-indigo-500/20',
    stat1: { value: '500+', label: 'Active Orgs' },
    stat2: { value: '99.9%', label: 'Uptime' },
  },
  numa: {
    icon: Database,
    gradient: 'from-emerald-600 via-teal-600 to-cyan-700',
    glowColor: 'bg-emerald-500/20',
    stat1: { value: '140+', label: 'DB Tables' },
    stat2: { value: '$2M+', label: 'Processed' },
  },
  ohm: {
    icon: Layers,
    gradient: 'from-cyan-600 via-blue-600 to-indigo-700',
    glowColor: 'bg-cyan-500/20',
    stat1: { value: '0.4s', label: 'Load Time' },
    stat2: { value: 'SEO', label: 'Optimized' },
  },
  africaTenders: {
    icon: Cpu,
    gradient: 'from-amber-500 via-orange-600 to-red-700',
    glowColor: 'bg-amber-500/20',
    stat1: { value: '1st', label: 'Prize AI' },
    stat2: { value: '94.8%', label: 'Accuracy' },
  },
  infiniPrint: {
    icon: ShoppingCart,
    gradient: 'from-fuchsia-600 via-pink-600 to-rose-700',
    glowColor: 'bg-fuchsia-500/20',
    stat1: { value: '2K+', label: 'Products' },
    stat2: { value: 'Auto', label: 'Fulfillment' },
  },
  cyberScale: {
    icon: Truck,
    gradient: 'from-rose-600 via-red-600 to-orange-700',
    glowColor: 'bg-rose-500/20',
    stat1: { value: 'GPS', label: 'Real-time' },
    stat2: { value: '3', label: 'Apps Shipped' },
  },
  getProcure: {
    icon: Search,
    gradient: 'from-slate-600 via-zinc-600 to-neutral-700',
    glowColor: 'bg-slate-500/20',
    stat1: { value: '12', label: 'Crawlers' },
    stat2: { value: '50K+', label: 'Contracts' },
  },
  medtrack: {
    icon: Smartphone,
    gradient: 'from-sky-600 via-blue-600 to-indigo-700',
    glowColor: 'bg-sky-500/20',
    stat1: { value: '50K+', label: 'Downloads' },
    stat2: { value: 'HIPAA', label: 'Certified' },
  },
  fleetPulse: {
    icon: Gauge,
    gradient: 'from-lime-600 via-green-600 to-emerald-700',
    glowColor: 'bg-lime-500/20',
    stat1: { value: '200+', label: 'Vehicles' },
    stat2: { value: 'Live', label: 'GPS Feed' },
  },
  dataForge: {
    icon: Workflow,
    gradient: 'from-violet-600 via-purple-600 to-fuchsia-700',
    glowColor: 'bg-violet-500/20',
    stat1: { value: '50M+', label: 'Records/Day' },
    stat2: { value: '99.7%', label: 'Data Quality' },
  },
  vaultPay: {
    icon: CreditCard,
    gradient: 'from-yellow-500 via-amber-600 to-orange-700',
    glowColor: 'bg-yellow-500/20',
    stat1: { value: 'PCI', label: 'Compliant' },
    stat2: { value: '<50ms', label: 'Latency' },
  },
  cloudShift: {
    icon: CloudCog,
    gradient: 'from-blue-600 via-sky-600 to-cyan-700',
    glowColor: 'bg-blue-500/20',
    stat1: { value: '0', label: 'Downtime' },
    stat2: { value: 'IaC', label: 'Templates' },
  },
  signalHub: {
    icon: Bell,
    gradient: 'from-orange-500 via-red-600 to-rose-700',
    glowColor: 'bg-orange-500/20',
    stat1: { value: '1M+', label: 'Msgs/Day' },
    stat2: { value: '99.99%', label: 'Delivery' },
  },
}

export function ProjectMockup({ projectKey }: ProjectMockupProps) {
  const config = configs[projectKey]

  if (!config) {
    return (
      <div className="w-full aspect-[16/10] bg-muted flex items-center justify-center">
        <span className="text-muted-foreground/40 text-sm">—</span>
      </div>
    )
  }

  const Icon = config.icon

  return (
    <div className={`relative w-full aspect-[16/10] bg-gradient-to-br ${config.gradient} overflow-hidden`}>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />

      {/* Large glow behind icon */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 ${config.glowColor} rounded-full blur-3xl`} />

      {/* Central icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl">
          <Icon className="w-8 h-8 text-white/90" strokeWidth={1.5} />
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="absolute bottom-0 inset-x-0 bg-black/20 backdrop-blur-sm border-t border-white/10">
        <div className="flex items-center justify-around py-2.5 px-4">
          <div className="text-center">
            <div className="text-sm font-bold text-white leading-none">{config.stat1.value}</div>
            <div className="text-[10px] text-white/60 mt-0.5">{config.stat1.label}</div>
          </div>
          <div className="w-px h-6 bg-white/15" />
          <div className="text-center">
            <div className="text-sm font-bold text-white leading-none">{config.stat2.value}</div>
            <div className="text-[10px] text-white/60 mt-0.5">{config.stat2.label}</div>
          </div>
        </div>
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-white/30" />
      <div className="absolute top-3 right-7 w-1.5 h-1.5 rounded-full bg-white/15" />
    </div>
  )
}
