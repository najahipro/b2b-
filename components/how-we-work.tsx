'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MessageCircle, Users, PencilRuler, Code2, CheckCircle, Rocket } from 'lucide-react'

const steps = [
  {
    title: 'Initial Contact',
    description: 'We start with a simple chat to understand your high-level needs and business goals.',
    icon: <MessageCircle className="w-5 h-5 text-secondary" />,
  },
  {
    title: 'Strategy Meeting',
    description: 'A deep dive via Zoom or Discord to discuss your exact requirements and vision.',
    icon: <Users className="w-5 h-5 text-secondary" />,
  },
  {
    title: 'Project Blueprint',
    description: 'You share your detailed plan, and we design the technical architecture and roadmap.',
    icon: <PencilRuler className="w-5 h-5 text-secondary" />,
  },
  {
    title: 'Iterative Development',
    description: 'We start building. We maintain continuous communication so you can see progress at every stage.',
    icon: <Code2 className="w-5 h-5 text-secondary" />,
  },
  {
    title: 'Review & Testing',
    description: 'We provide a live staging link. You test the features, review the progress, and give feedback.',
    icon: <CheckCircle className="w-5 h-5 text-secondary" />,
  },
  {
    title: 'Deployment & Go Live',
    description: 'Final polish, custom domain linking, and officially launching your project to the world!',
    icon: <Rocket className="w-5 h-5 text-secondary" />,
  },
]

export function HowWeWork() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A clear, step-by-step process from our first chat to your project going live.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[23px] lg:left-1/2 lg:-ml-px top-2 bottom-2 w-0.5 bg-border rounded-full" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0

              return (
                <div
                  key={step.title}
                  className={`relative flex flex-col lg:flex-row items-start lg:items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Icon Node */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
                    className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-card border-2 border-border shadow-sm z-10 group-hover:border-secondary transition-colors"
                  >
                    {step.icon}
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className={`pl-20 lg:pl-0 lg:w-1/2 flex ${
                      isEven ? 'lg:pr-12 justify-end text-left lg:text-right' : 'lg:pl-12 justify-start text-left'
                    }`}
                  >
                    <div className="bg-card border border-border p-8 lg:p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow hover:border-secondary/30 group cursor-default w-full max-w-xl">
                      <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-3 block">
                        Step 0{index + 1}
                      </span>
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        {step.title}
                      </h3>
                      <p className="text-base font-light text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 lg:mt-24 flex justify-center"
        >
          <Link
            href="/start"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
          >
            Start a Project
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
