"use client";

import { Star } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

function TestimonialCard({
  name,
  title,
  text,
  initials,
}: {
  name: string;
  title: string;
  text: string;
  initials: string;
}) {
  return (
    <div className="w-80 md:w-96 shrink-0 bg-card rounded-2xl border border-border p-6 shadow-sm flex flex-col h-full">
      {/* Header: Avatar, Name, Title */}
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
  );
}

export function Testimonials() {
  const { t } = useLanguage()

  const testimonialsRow1 = [
    {
      name: "Adam R.",
      title: "Tech Lead",
      text: t('testimonials.adamText'),
      initials: "AR",
    },
    {
      name: "Sarah M.",
      title: "Operations Director",
      text: t('testimonials.sarahText'),
      initials: "SM",
    },
    {
      name: "David K.",
      title: "Startup Founder",
      text: t('testimonials.davidText'),
      initials: "DK",
    },
  ];

  const testimonialsRow2 = [
    {
      name: "Youssef B.",
      title: "Product Manager",
      text: t('testimonials.youssefText'),
      initials: "YB",
    },
    {
      name: "Elena T.",
      title: "Data Director",
      text: t('testimonials.elenaText'),
      initials: "ET",
    },
    {
      name: "Marc V.",
      title: "CTO",
      text: t('testimonials.marcText'),
      initials: "MV",
    },
  ];

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
            {t('testimonials.title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="text-2xl font-bold text-foreground">4.9</span>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Marquee Container */}
        <div className="flex flex-col gap-8 marquee-hover">
          {/* Row 1: Right to Left */}
          <div className="flex w-max gap-8 animate-marquee-left">
            {[
              ...testimonialsRow1,
              ...testimonialsRow1,
              ...testimonialsRow1,
              ...testimonialsRow1,
            ].map((testimonial, i) => (
              <TestimonialCard key={`row1-${i}`} {...testimonial} />
            ))}
          </div>

          {/* Row 2: Left to Right */}
          <div className="flex w-max gap-8 animate-marquee-right">
            {[
              ...testimonialsRow2,
              ...testimonialsRow2,
              ...testimonialsRow2,
              ...testimonialsRow2,
            ].map((testimonial, i) => (
              <TestimonialCard key={`row2-${i}`} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
