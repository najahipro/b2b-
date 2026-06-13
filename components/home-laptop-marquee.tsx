'use client'

import { useLanguage } from '@/hooks/use-language'
import Image from 'next/image'
interface LaptopMockupProps {
  imageSrc: string
  duration: string
  delay: string
}

function LaptopMockup({ imageSrc, duration, delay }: LaptopMockupProps) {
  return (
    <div className="w-[320px] shrink-0 flex justify-center items-end group">
      {/* Laptop Frame */}
      <div className="relative w-full mx-auto bg-neutral-800 rounded-t-xl border-x-[6px] border-t-[6px] border-neutral-800 shadow-2xl flex flex-col">
        {/* Camera Dot */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-neutral-950 rounded-full flex items-center justify-center">
           <div className="w-0.5 h-0.5 bg-white/20 rounded-full" />
        </div>
        
        {/* Screen Area */}
        <div className="relative w-full aspect-video bg-neutral-950 overflow-hidden mt-3 rounded-sm border border-neutral-900 group-hover:shadow-inner">
          {/* Screenshot Image */}
          <div
            className="absolute top-0 left-0 w-full h-[500%] object-cover"
            style={{
              animation: `pan-vertical ${duration} ease-in-out ${delay} infinite`
            }}
          >
            <Image 
              src={imageSrc} 
              alt="Project Mockup" 
              fill
              loading="lazy"
              className="object-cover object-top"
            />
          </div>
        </div>
        
        {/* Bottom Lip (Keyboard base) */}
        <div className="relative w-[114%] -ml-[7%] h-3 bg-neutral-300 dark:bg-neutral-600 rounded-t-md mt-1 shadow-lg border-b-2 border-neutral-400 dark:border-neutral-700 flex justify-center">
           <div className="w-16 h-1 bg-neutral-400 dark:bg-neutral-700 rounded-b-md" />
        </div>
      </div>
    </div>
  )
}

export function HomeLaptopMarquee() {
  const { t } = useLanguage()

  const showcaseItems = [
    { src: '/assets/project-getprocure.webp', duration: '12s', delay: '0s' },
    { src: '/assets/project-alloclients-app.webp', duration: '16s', delay: '-5s' },
    { src: '/assets/project-cyberscale.webp', duration: '20s', delay: '-10s' },
    { src: '/assets/project-inrh.webp', duration: '25s', delay: '-2s' },
    { src: '/assets/project-alloclients-main.webp', duration: '14s', delay: '-7s' },
    { src: '/assets/project-nexuserp.webp', duration: '18s', delay: '-12s' },
    { src: '/assets/project-ecoportal.webp', duration: '22s', delay: '-4s' },
    { src: '/assets/project-printflow.webp', duration: '15s', delay: '-9s' },
  ]

  return (
    <section className="py-24 lg:py-32 bg-muted overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-4">
            {t('featured.label')}
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground text-balance leading-tight">
            {t('featured.title')}
          </h2>
        </div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full mt-16 flex before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-muted before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-muted after:to-transparent">
        <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused] pb-8 pt-4 px-10">
          {[...showcaseItems, ...showcaseItems].map((item, index) => (
            <div key={index} className="flex-shrink-0">
              <div className="block">
                <div className="w-[320px] transition-transform hover:scale-105 duration-300">
                  <LaptopMockup imageSrc={item.src} duration={item.duration} delay={item.delay} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-8 mb-8 flex flex-col items-center gap-6">
        <a 
          href="https://wa.me/212631378800"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 rounded-full font-semibold shadow-xl hover:scale-105 transition-transform inline-block"
        >
          Book a Discovery Call
        </a>
      </div>

      {/* Custom CSS for marquee animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1.25rem)); }
        }
        @keyframes pan-vertical {
          0%, 10% { transform: translateY(0); }
          45%, 55% { transform: translateY(calc(-100% + 173px)); }
          90%, 100% { transform: translateY(0); }
        }
        .animate-marquee {
          animation: marquee 55s linear infinite;
        }
      `}} />
    </section>
  )
}
