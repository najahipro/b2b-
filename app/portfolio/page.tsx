import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const projects = [
  {
    slug: 'alloclients-erp',
    title: 'AlloClients',
    category: 'Multi-tenant ERP',
    description: 'Complete client management system with invoicing, project tracking, and team collaboration for service agencies.',
    metrics: ['500+ Active Users', '99.9% Uptime', '10TB Data Processed'],
    techStack: ['Next.js', 'PostgreSQL', 'Stripe', 'Vercel'],
    featured: true,
  },
  {
    slug: 'numa-platform',
    title: 'Numa Platform',
    category: 'SaaS Platform',
    description: 'Enterprise inventory and supply chain management with real-time analytics and predictive restocking.',
    metrics: ['$2M+ Transactions', '45% Cost Reduction', '12 Integrations'],
    techStack: ['React', 'Node.js', 'Redis', 'GCP'],
    featured: true,
  },
  {
    slug: 'medtrack-mobile',
    title: 'MedTrack',
    category: 'Mobile Application',
    description: 'Healthcare compliance tracking app with offline sync, biometric auth, and HIPAA-compliant data handling.',
    metrics: ['50K+ Downloads', '4.8 App Rating', 'HIPAA Certified'],
    techStack: ['React Native', 'Firebase', 'AWS'],
    featured: true,
  },
  {
    slug: 'finserve-dashboard',
    title: 'FinServe Dashboard',
    category: 'Analytics Platform',
    description: 'Real-time financial analytics dashboard with custom reporting, automated alerts, and regulatory compliance.',
    metrics: ['$50M+ AUM Tracked', '200+ Reports/Day', 'SOC 2 Compliant'],
    techStack: ['Next.js', 'TimescaleDB', 'Chart.js', 'AWS'],
    featured: false,
  },
  {
    slug: 'logisync-api',
    title: 'LogiSync API',
    category: 'API Infrastructure',
    description: 'High-throughput logistics API handling route optimization, fleet tracking, and delivery scheduling.',
    metrics: ['1M+ API Calls/Day', '99.99% Uptime', '50ms Avg Response'],
    techStack: ['Go', 'PostgreSQL', 'Redis', 'Kubernetes'],
    featured: false,
  },
  {
    slug: 'edulearn-lms',
    title: 'EduLearn LMS',
    category: 'Learning Platform',
    description: 'Enterprise learning management system with video streaming, assessments, and certification tracking.',
    metrics: ['100K+ Students', '5000+ Courses', '98% Completion Rate'],
    techStack: ['Next.js', 'Mux', 'PostgreSQL', 'Vercel'],
    featured: false,
  },
]

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-wider text-secondary">
                Our Work
              </p>
              <h1 className="mt-4 text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
                Systems we&apos;ve architected and shipped
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                From multi-tenant ERPs to mobile applications, explore the enterprise-grade 
                systems we&apos;ve designed and built for clients worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-24 lg:pb-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/portfolio/${project.slug}`}
                  className="group relative flex flex-col bg-card rounded-2xl border border-border overflow-hidden hover:border-secondary/50 transition-colors"
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Project Preview */}
                  <div className="aspect-[4/3] bg-foreground/5 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                      <span className="text-4xl font-bold text-secondary/30">
                        {project.title[0]}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 lg:p-8">
                    <span className="text-xs font-medium uppercase tracking-wider text-secondary">
                      {project.category}
                    </span>
                    <h2 className="mt-2 text-xl font-semibold text-foreground group-hover:text-secondary transition-colors">
                      {project.title}
                    </h2>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="px-3 py-1 text-xs font-medium bg-muted rounded-full text-muted-foreground"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-medium text-foreground/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32 bg-muted">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance">
              Ready to build something exceptional?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Let&apos;s discuss your project requirements and create a system tailored to your business needs.
            </p>
            <div className="mt-10">
              <Link
                href="/start"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-foreground text-primary-foreground rounded-lg hover:bg-foreground/90 transition-colors"
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
