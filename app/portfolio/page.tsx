import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const projects = [
  {
    title: 'AlloClients SaaS Ecosystem',
    category: 'Multi-tenant ERP',
    description: 'Architected a highly scalable, multi-tenant ERP ecosystem. Engineered complex core modules for automated financial workflows, strict RBAC, and real-time bidirectional data synchronization.',
    techStack: ['Laravel', 'React.js', 'MySQL'],
    href: 'https://app.allo-clients.com/lp',
    featured: true,
  },
  {
    title: 'Numa ERP System',
    category: 'SaaS Platform',
    description: 'Single-handedly architected and built a massive enterprise SaaS ERP platform (140+ database tables). Features comprehensive modules for Finance, Advanced Stock Control, CRM, and HR management.',
    techStack: ['Next.js', 'Laravel', 'PostgreSQL'],
    href: '',
    featured: true,
  },
  {
    title: 'OHM Web Platform',
    category: 'Frontend Interface',
    description: 'Developed the frontend interface for INRH\'s OHM platform. Built with Angular and TypeScript, featuring pixel-perfect responsive design and seamless Strapi CMS integration.',
    techStack: ['Angular', 'Strapi CMS', 'TypeScript'],
    href: 'https://ohm.ma/Home',
    featured: true,
  },
  {
    title: 'Africa Tenders Data Platform',
    category: 'Data Platform',
    description: '1st Prize at MoroccoAI Hackathon 2022. Automated platform for scraping and analyzing African government public procurement contracts using advanced NLP techniques.',
    techStack: ['Python', 'NLP', 'Selenium', 'Machine Learning'],
    href: 'https://morocco.ai/events/conferences/MoroccoAI-Conference-2022/',
    featured: false,
  },
  {
    title: 'InfiniPrint E-commerce & Automation',
    category: 'E-commerce',
    description: 'Built a digital printing e-commerce platform with automated product management, featuring a WooCommerce storefront, Laravel admin dashboard, and Python-based supplier integration.',
    techStack: ['WordPress', 'WooCommerce', 'Laravel', 'Python'],
    href: 'https://infiniprint.ma/',
    featured: false,
  },
  {
    title: 'ZemExpress & Klaid (CyberScale)',
    category: 'Web & Mobile Apps',
    description: 'Delivered multiple full-stack web and mobile applications as part of the CyberScale agency (France), including logistics platforms and enterprise connectivity services.',
    techStack: ['Laravel', 'React.js', 'React Native', 'MySQL'],
    href: 'https://www.cyber-scale.me/etudes-de-cas/',
    featured: false,
  },
  {
    title: 'GetProcure Platform',
    category: 'Tender Management',
    description: 'Built a tender management platform that aggregates public and private tenders globally with advanced search, smart matching, and automated scraping.',
    techStack: ['React', 'Laravel', 'Python', 'Scrapy'],
    href: 'https://www.hugedomains.com/domain_profile.cfm?d=getprocure.com',
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
              {projects.map((project) => {
                const CardInner = (
                  <>
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full shadow-sm">
                          Featured
                        </span>
                      </div>
                    )}

                    {/* Project Preview */}
                    <div className="aspect-[4/3] bg-foreground/5 flex items-center justify-center border-b border-border">
                      <div className="w-3/4 h-3/4 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center shadow-inner">
                        <span className="text-4xl font-bold text-secondary/30">
                          {project.title[0]}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-6 lg:p-8">
                      <span className="text-xs font-medium uppercase tracking-wider text-secondary">
                        {project.category}
                      </span>
                      <h2 className="mt-2 text-xl font-semibold text-foreground group-hover:text-secondary transition-colors">
                        {project.title}
                      </h2>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mt-auto pt-6">
                        {/* Visit Live Project */}
                        {project.href && (
                          <div className="flex items-center gap-2 mb-6 text-sm font-medium text-muted-foreground group-hover:text-secondary transition-colors">
                            <ArrowUpRight className="w-4 h-4" />
                            <span>Visit Live Project</span>
                          </div>
                        )}

                        {/* Tech Stack */}
                        <div className="pt-6 border-t border-border">
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
                    </div>
                  </>
                );

                const baseClasses = "group relative flex flex-col bg-card rounded-2xl border border-border overflow-hidden hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full";

                return project.href ? (
                  <a
                    key={project.title}
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={baseClasses}
                  >
                    {CardInner}
                  </a>
                ) : (
                  <div key={project.title} className={baseClasses}>
                    {CardInner}
                  </div>
                );
              })}
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
