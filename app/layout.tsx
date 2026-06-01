import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'DigitoMaroc | Enterprise SaaS Architecture & Development',
  description: 'Elite two-person engineering team building custom SaaS platforms, multi-tenant ERPs, and mobile applications for global enterprise clients. Direct access to senior architects, zero agency bloat.',
  keywords: ['SaaS development', 'enterprise software', 'custom ERP', 'system architecture', 'DevOps', 'cloud infrastructure'],
  authors: [{ name: 'DigitoMaroc' }],
  openGraph: {
    title: 'DigitoMaroc | Enterprise SaaS Architecture & Development',
    description: 'Elite two-person engineering team building custom SaaS platforms for global enterprise clients.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
