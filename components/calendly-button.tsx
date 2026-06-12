'use client'

import Link from 'next/link'

export function CalendlyButton({ 
  className = "px-5 py-2.5 text-sm rounded-lg", 
  text = "Book a Call" 
}: { 
  className?: string, 
  text?: string 
}) {
  return (
    <Link 
      href="/book"
      className={`inline-flex items-center justify-center font-medium bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 duration-300 ${className}`}
    >
      {text}
    </Link>
  )
}
