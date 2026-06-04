'use client'

import { Star } from 'lucide-react'

const testimonialsRow1 = [
  {
    name: 'Adam R.',
    title: 'Tech Lead',
    text: 'Working with Salah completely transformed our platform. He took our complex requirements and architected a highly scalable SaaS solution from scratch. Delivery was on time and the code quality is exceptional.',
    initials: 'AR',
  },
  {
    name: 'Sarah M.',
    title: 'Operations Director',
    text: 'Finding a single architect capable of building an entire enterprise ERP system is rare. He delivered a massive platform with over 140 database tables flawlessly. Highly recommend for serious engineering projects.',
    initials: 'SM',
  },
  {
    name: 'David K.',
    title: 'Startup Founder',
    text: 'The communication was excellent. No account managers or middle-men, just direct contact with the engineer building our system. The final product exceeded our expectations in terms of speed.',
    initials: 'DK',
  },
]

const testimonialsRow2 = [
  {
    name: 'Youssef B.',
    title: 'Product Manager',
    text: 'Exceptional technical expertise. The transition from our messy legacy codebase to a modern React/Laravel architecture was smooth and perfectly documented. A true professional.',
    initials: 'YB',
  },
  {
    name: 'Elena T.',
    title: 'Data Director',
    text: 'Built an incredible data scraping and NLP pipeline for our team. The automated workflows and clean architecture saved us hundreds of manual hours every week. Worth every penny.',
    initials: 'ET',
  },
  {
    name: 'Marc V.',
    title: 'CTO',
    text: 'If you need enterprise-grade software built right the first time, this is the team. Complete transparency, zero friction, and incredibly robust cloud infrastructure deployment.',
    initials: 'MV',
  },
]

function TestimonialCard({ name, title, text, initials }: { name: string, title: string, text: string, initials: string }) {
  return (
    <div className="w-80 md:w-96 shrink-0 bg-card rounded-2xl border border-border p-6 shadow-sm flex flex-col h-full">
      {/* Header: Avatar, Name, Title, and Google Icon placeholder */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary font-bold flex items-center justify-center text-lg shrink-0">
          {initials}
        </div>
        <div>
          <h4 className="font-semibold text-foreground text-sm">{name}</h4>
          <p className="text-xs text-muted-foreground">{title}</p>
        </div>
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Content */}
      <p className="text-sm text-foreground/80 leading-relaxed flex-1">
        "{text}"
      </p>
    </div>
  )
}

export function Testimonials() {
  return (
    <>
      <section className="pt-16 lg:pt-20 pb-24 lg:pb-32 bg-muted relative overflow-hidden">
        <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(calc(-50% - 1rem)); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 20s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 20s linear infinite;
        }
        .marquee-hover:hover .animate-marquee-left,
        .marquee-hover:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
          Real impact from enterprise systems
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Hear from founders, CTOs, and product leaders who built their platforms with DigitoMaroc.
        </p>
        <div className="mt-6 flex items-center justify-center gap-2">
          <span className="text-2xl font-bold text-foreground">4.9</span>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="flex flex-col gap-8 marquee-hover">
        {/* Row 1: Right to Left */}
        <div className="flex w-max gap-8 animate-marquee-left">
          {[...testimonialsRow1, ...testimonialsRow1, ...testimonialsRow1, ...testimonialsRow1].map((testimonial, i) => (
            <TestimonialCard key={`row1-${i}`} {...testimonial} />
          ))}
        </div>

        {/* Row 2: Left to Right */}
        <div className="flex w-max gap-8 animate-marquee-right">
          {[...testimonialsRow2, ...testimonialsRow2, ...testimonialsRow2, ...testimonialsRow2].map((testimonial, i) => (
            <TestimonialCard key={`row2-${i}`} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
