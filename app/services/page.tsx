import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const services = [
  {
    title: 'Custom SaaS Platforms',
    description: 'Full-stack SaaS applications with multi-tenancy, subscription billing, and scalable architecture built for growth.',
    features: [
      'Multi-tenant architecture with data isolation',
      'Subscription billing with Stripe integration',
      'Role-based access control systems',
      'Real-time collaboration features',
      'API development for third-party integrations',
      'Custom analytics and reporting dashboards',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Multi-tenant ERPs',
    description: 'Enterprise resource planning systems with complex workflows, role-based access, and real-time analytics dashboards.',
    features: [
      'Complex business workflow automation',
      'Inventory and supply chain management',
      'Financial reporting and compliance',
      'Human resource management modules',
      'Customer relationship management',
      'Business intelligence and forecasting',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps with offline-first architecture, push notifications, and seamless sync.',
    features: [
      'Cross-platform development with React Native',
      'Offline-first architecture with sync',
      'Biometric authentication integration',
      'Push notifications and real-time updates',
      'App Store and Play Store deployment',
      'Performance optimization and monitoring',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Cloud & DevOps',
    description: 'Infrastructure as code, CI/CD pipelines, container orchestration, and monitoring for production-grade deployments.',
    features: [
      'Infrastructure as Code with Terraform',
      'Kubernetes cluster setup and management',
      'CI/CD pipeline implementation',
      'Monitoring and alerting systems',
      'Security hardening and compliance',
      'Cost optimization and resource management',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We dive deep into your business requirements, technical constraints, and growth objectives to understand the full scope.',
  },
  {
    step: '02',
    title: 'Architecture',
    description: 'We design a comprehensive system architecture, database schema, and infrastructure plan tailored to your needs.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'Iterative development with weekly sprints, continuous deployment, and real-time progress visibility.',
  },
  {
    step: '04',
    title: 'Handoff',
    description: 'Complete documentation, knowledge transfer, and ongoing support to ensure your team can maintain the system.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-wider text-secondary">
                Our Services
              </p>
              <h1 className="mt-4 text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
                End-to-end engineering for complex systems
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                From initial architecture to production deployment, we handle the entire 
                technical stack so you can focus on your business.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-24 lg:pb-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="p-8 lg:p-10 bg-card rounded-2xl border border-border"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                    {service.icon}
                  </div>
                  <h2 className="mt-6 text-2xl font-semibold text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-8 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg className="mt-1 w-5 h-5 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 lg:py-32 bg-muted">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <p className="text-sm font-medium uppercase tracking-wider text-secondary">
                Our Process
              </p>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance">
                How we work with clients
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item) => (
                <div key={item.step}>
                  <div className="text-5xl font-bold text-secondary/30">{item.step}</div>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32 bg-foreground text-primary-foreground">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance">
              Ready to start your project?
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Get direct access to senior engineers who will architect and build your system from the ground up.
            </p>
            <div className="mt-10">
              <Link
                href="/start"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
              >
                Request Private Discord
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
