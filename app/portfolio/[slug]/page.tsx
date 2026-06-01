import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const projects = {
  'alloclients-erp': {
    title: 'AlloClients',
    category: 'Multi-tenant ERP',
    description: 'Complete client management system with invoicing, project tracking, and team collaboration for service agencies.',
    heroDescription: 'We architected and built a complete enterprise resource planning system that enables service agencies to manage their entire client lifecycle—from lead capture to invoicing—in a single, unified platform.',
    challenge: 'Our client needed to consolidate five disparate tools (CRM, invoicing, project management, time tracking, and reporting) into a single platform that could scale across hundreds of agencies while maintaining strict data isolation and compliance with European GDPR requirements.',
    solution: 'We designed a multi-tenant architecture using PostgreSQL row-level security for data isolation, implemented a real-time collaboration engine using WebSockets, and built a custom invoicing module with Stripe integration that handles multiple currencies and tax jurisdictions.',
    results: [
      { value: '500+', label: 'Active Organizations', description: 'Agencies using the platform daily' },
      { value: '99.9%', label: 'Uptime SLA', description: 'Achieved over 24 months' },
      { value: '10TB', label: 'Data Processed', description: 'Client and transaction data managed' },
      { value: '45%', label: 'Time Saved', description: 'Average reduction in admin overhead' },
    ],
    techStack: ['Next.js', 'PostgreSQL', 'Redis', 'Stripe', 'Vercel', 'WebSockets'],
    features: [
      'Multi-tenant architecture with row-level security',
      'Real-time collaboration and notifications',
      'Custom invoicing with multi-currency support',
      'Advanced reporting and analytics dashboard',
      'Role-based access control system',
      'API for third-party integrations',
    ],
    timeline: '8 months',
    teamSize: '2 engineers',
  },
  'numa-platform': {
    title: 'Numa Platform',
    category: 'SaaS Platform',
    description: 'Enterprise inventory and supply chain management with real-time analytics and predictive restocking.',
    heroDescription: 'We built a comprehensive inventory management platform that uses machine learning to predict stock requirements and automate reordering across multiple warehouses and suppliers.',
    challenge: 'The client was losing millions in overstocking and stockouts due to manual inventory management. They needed a system that could integrate with their existing ERP, provide real-time visibility, and use predictive analytics to optimize stock levels.',
    solution: 'We developed a cloud-native platform on GCP with real-time inventory tracking, ML-powered demand forecasting, and automated purchase order generation. The system integrates with major suppliers and provides a unified dashboard for multi-warehouse management.',
    results: [
      { value: '$2M+', label: 'Transactions', description: 'Monthly order volume processed' },
      { value: '45%', label: 'Cost Reduction', description: 'Decrease in carrying costs' },
      { value: '12', label: 'Integrations', description: 'Connected supplier systems' },
      { value: '98%', label: 'Forecast Accuracy', description: 'ML prediction accuracy' },
    ],
    techStack: ['React', 'Node.js', 'Redis', 'Google Cloud Platform', 'BigQuery', 'TensorFlow'],
    features: [
      'Real-time inventory tracking across warehouses',
      'ML-powered demand forecasting',
      'Automated purchase order generation',
      'Supplier portal and EDI integration',
      'Mobile barcode scanning app',
      'Custom reporting and alerts',
    ],
    timeline: '10 months',
    teamSize: '2 engineers',
  },
  'medtrack-mobile': {
    title: 'MedTrack',
    category: 'Mobile Application',
    description: 'Healthcare compliance tracking app with offline sync, biometric auth, and HIPAA-compliant data handling.',
    heroDescription: 'We designed and developed a mobile-first healthcare compliance application that enables medical professionals to track certifications, continuing education, and compliance requirements while maintaining HIPAA compliance.',
    challenge: 'Healthcare organizations struggled to track employee certifications and compliance across multiple facilities. They needed a mobile solution that could work offline in areas with poor connectivity while maintaining strict HIPAA compliance.',
    solution: 'We built a React Native application with offline-first architecture, biometric authentication, and encrypted local storage. The backend uses AWS with HIPAA-compliant infrastructure, and all data is encrypted at rest and in transit.',
    results: [
      { value: '50K+', label: 'Downloads', description: 'App store downloads' },
      { value: '4.8', label: 'App Rating', description: 'Average user rating' },
      { value: 'HIPAA', label: 'Certified', description: 'Full compliance achieved' },
      { value: '60%', label: 'Admin Reduction', description: 'Time saved on compliance tracking' },
    ],
    techStack: ['React Native', 'Firebase', 'AWS', 'Node.js', 'PostgreSQL'],
    features: [
      'Offline-first architecture with sync',
      'Biometric authentication',
      'HIPAA-compliant data handling',
      'Push notifications for expiring certifications',
      'Document scanning and OCR',
      'Admin dashboard for organizations',
    ],
    timeline: '6 months',
    teamSize: '2 engineers',
  },
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const project = projects[slug as keyof typeof projects]
  
  if (!project) {
    return { title: 'Project Not Found' }
  }
  
  return {
    title: `${project.title} | DigitoMaroc Portfolio`,
    description: project.description,
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const project = projects[slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl">
              <Link
                href="/portfolio"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Back to Portfolio
              </Link>

              <span className="text-sm font-medium uppercase tracking-wider text-secondary">
                {project.category}
              </span>
              <h1 className="mt-4 text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
                {project.title}
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed">
                {project.heroDescription}
              </p>

              {/* Quick Stats */}
              <div className="mt-12 flex flex-wrap gap-8">
                <div>
                  <span className="text-sm text-muted-foreground">Timeline</span>
                  <p className="mt-1 text-lg font-semibold text-foreground">{project.timeline}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Team</span>
                  <p className="mt-1 text-lg font-semibold text-foreground">{project.teamSize}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Preview */}
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="aspect-[16/9] bg-card rounded-2xl border border-border overflow-hidden flex items-center justify-center">
              <div className="w-1/2 h-1/2 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                <span className="text-8xl font-bold text-secondary/30">
                  {project.title[0]}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-12">
              Results & Impact
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {project.results.map((result) => (
                <div key={result.label} className="p-6 bg-card rounded-xl border border-border">
                  <div className="text-3xl lg:text-4xl font-bold text-secondary">
                    {result.value}
                  </div>
                  <div className="mt-2 text-sm font-medium text-foreground">
                    {result.label}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {result.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="py-24 lg:py-32 bg-muted">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-6">
                  The Challenge
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-6">
                  Our Solution
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features & Tech Stack */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Features */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-8">
                  Key Features
                </h2>
                <ul className="space-y-4">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg className="mt-1 w-5 h-5 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-8">
                  Technology Stack
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-sm font-medium bg-card rounded-lg border border-border text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32 bg-foreground text-primary-foreground">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance">
              Want similar results for your project?
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Let&apos;s discuss how we can architect and build a system tailored to your specific needs.
            </p>
            <div className="mt-10">
              <Link
                href="/start"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
              >
                Start Your Project
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
