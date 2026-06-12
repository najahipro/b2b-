'use client'

import { motion } from 'framer-motion'
import { 
  Database, Cloud, CreditCard, Github, Box, Globe, 
  Cpu, Workflow, Terminal, Wind, Monitor, Layers, Figma, Slack, CloudRain, Server, Code 
} from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'

// Inner Orbit (8 items)
const innerOrbitItems = [
  { name: 'React', icon: <Globe className="w-5 h-5 text-foreground" /> },
  { name: 'Node.js', icon: <Cpu className="w-5 h-5 text-foreground" /> },
  { name: 'Laravel', icon: <Terminal className="w-5 h-5 text-foreground" /> },
  { name: 'Python', icon: <Code className="w-5 h-5 text-foreground" /> },
  { name: 'PostgreSQL', icon: <Database className="w-5 h-5 text-foreground" /> },
  { name: 'Vercel', icon: <Workflow className="w-5 h-5 text-foreground" /> },
  { name: 'Tailwind', icon: <Wind className="w-5 h-5 text-foreground" /> },
  { name: 'Next.js', icon: <Monitor className="w-5 h-5 text-foreground" /> },
]

// Outer Orbit (12 items)
const outerOrbitItems = [
  { name: 'Docker', icon: <Box className="w-5 h-5 text-foreground" /> },
  { name: 'AWS', icon: <Cloud className="w-5 h-5 text-foreground" /> },
  { name: 'Stripe', icon: <CreditCard className="w-5 h-5 text-foreground" /> },
  { name: 'GitHub', icon: <Github className="w-5 h-5 text-foreground" /> },
  { name: 'Slack', icon: <Slack className="w-5 h-5 text-foreground" /> },
  { name: 'MySQL', icon: <Database className="w-5 h-5 text-foreground" /> },
  { name: 'Redis', icon: <Layers className="w-5 h-5 text-foreground" /> },
  { name: 'Linux', icon: <Terminal className="w-5 h-5 text-foreground" /> },
  { name: 'Figma', icon: <Figma className="w-5 h-5 text-foreground" /> },
  { name: 'Cloudflare', icon: <CloudRain className="w-5 h-5 text-foreground" /> },
  { name: 'Nginx', icon: <Server className="w-5 h-5 text-foreground" /> },
  { name: 'MongoDB', icon: <Database className="w-5 h-5 text-foreground" /> },
]

function OrbitItem({ 
  item, 
  index, 
  total, 
  duration, 
  reverse 
}: { 
  item: { name: string, icon: React.ReactNode }, 
  index: number, 
  total: number, 
  duration: number,
  reverse: boolean
}) {
  const angle = (index * 360) / total;
  
  return (
    <div 
      className="absolute inset-0"
      style={{ transform: `rotate(${angle}deg)` }}
    >
      {/* Positioned at the top edge of the circle */}
      <div className="absolute top-0 left-1/2 -ml-6 -mt-6 w-12 h-12">
        {/* Counter-rotation for the animation */}
        <motion.div
          className="w-full h-full"
          animate={{ rotate: reverse ? 360 : -360 }}
          transition={{ repeat: Infinity, duration, ease: "linear" }}
        >
          {/* Counter-rotation for the initial placement angle */}
          <div className="w-full h-full" style={{ transform: `rotate(${-angle}deg)` }}>
            <div className="flex items-center justify-center w-12 h-12 bg-background border border-border shadow-sm rounded-xl group relative hover:border-secondary transition-colors cursor-default">
              {item.icon}
              {/* Tooltip on hover */}
              <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity -bottom-10 whitespace-nowrap text-xs font-medium bg-foreground text-primary-foreground px-3 py-1.5 rounded-md pointer-events-none z-50">
                {item.name}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export function OrbitalIntegrations() {
  const { t } = useLanguage()

  return (
    <section className="py-24 lg:py-32 overflow-hidden bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Container for the orbital animation */}
        <div className="relative flex items-center justify-center min-h-[40rem] lg:min-h-[45rem]">
          
          {/* Central Text Block */}
          <div className="relative z-10 text-center max-w-[14rem] lg:max-w-[16rem] pointer-events-none">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-2 text-balance">
              {t('ecosystem.title')}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t('ecosystem.subtitle')}
            </p>
          </div>

          {/* Outer Orbit */}
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
            className="absolute left-1/2 top-1/2 w-[32rem] h-[32rem] lg:w-[42rem] lg:h-[42rem] -ml-[16rem] -mt-[16rem] lg:-ml-[21rem] lg:-mt-[21rem] border border-dashed border-border/60 rounded-full"
          >
            {outerOrbitItems.map((item, i) => (
              <OrbitItem 
                key={item.name} 
                item={item} 
                index={i} 
                total={outerOrbitItems.length} 
                duration={45}
                reverse={true} // outer circle goes CCW (-360), so items go CW (360)
              />
            ))}
          </motion.div>

          {/* Inner Orbit */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="absolute left-1/2 top-1/2 w-[20rem] h-[20rem] lg:w-[28rem] lg:h-[28rem] -ml-[10rem] -mt-[10rem] lg:-ml-[14rem] lg:-mt-[14rem] border border-dashed border-border/60 rounded-full"
          >
            {innerOrbitItems.map((item, i) => (
              <OrbitItem 
                key={item.name} 
                item={item} 
                index={i} 
                total={innerOrbitItems.length} 
                duration={30}
                reverse={false} // inner circle goes CW (360), so items go CCW (-360)
              />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
