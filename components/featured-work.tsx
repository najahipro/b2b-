import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

const projects = [
  {
    href: 'https://app.allo-clients.com/lp',
    title: 'AlloClients SaaS Ecosystem',
    role: 'Solo Architect · Freelance',
    description: 'Architected a highly scalable, multi-tenant ERP ecosystem. Engineered complex core modules for automated financial workflows, strict RBAC, and real-time bidirectional data synchronization.',
    techStack: ['Laravel', 'React.js', 'MySQL', 'Stripe'],
  },
  {
    href: '',
    title: 'Numa ERP Platform',
    role: 'Acting CTO · France',
    description: 'Single-handedly architected and built a massive enterprise SaaS ERP platform (140+ database tables). Features comprehensive modules for Finance, Advanced Stock Control, CRM, and HR management.',
    techStack: ['Next.js', 'Laravel', 'PostgreSQL', 'Cloud VPS'],
  },
  {
    href: 'https://ohm.ma/Home',
    title: 'OHM - INRH Portal',
    role: 'Archipel Digital · Morocco',
    description: 'Developed the frontend interface for INRH\'s OHM platform. Built with Angular and TypeScript, featuring pixel-perfect responsive design and seamless Strapi CMS integration for dynamic content.',
    techStack: ['Angular', 'Strapi CMS', 'TypeScript'],
  },
]

export function FeaturedWork() {
  return (
    <section className="py-24 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-secondary">
              Featured Projects
            </p>
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance">
              Systems we&apos;ve architected and shipped
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors pb-1 border-b border-secondary/30 hover:border-secondary"
          >
            View all projects
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => {
            const CardContent = (
              <>
                {/* Header: Featured Project + Role Pill */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    Featured Project
                  </span>
                  <span className="text-[10px] font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full whitespace-nowrap">
                    {project.role}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 group-hover:text-secondary transition-colors text-balance">
                  {project.title}
                </h3>

                {/* Description Card (Premium White) */}
                <div className="bg-background rounded-2xl p-6 mb-8 flex-1 border border-border shadow-sm">
                  <p className="text-sm font-light text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Footer: Tech Stack + Icon */}
                <div className="flex items-end justify-between mt-auto">
                  <div className="flex flex-col gap-1 mr-4">
                    {project.href && (
                      <div className="flex items-center gap-2 text-muted-foreground group-hover:text-secondary transition-colors font-medium text-sm">
                        <ArrowUpRight className="w-4 h-4" />
                        <span>Visit Live Project</span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap justify-end gap-x-3 gap-y-2 max-w-[60%]">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[12px] font-medium text-foreground/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            );

            const cardClasses = "group flex flex-col p-8 bg-card rounded-[2rem] border border-border hover:border-secondary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1";

            return project.href ? (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClasses}
              >
                {CardContent}
              </a>
            ) : (
              <div key={project.title} className={cardClasses}>
                {CardContent}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  )
}
