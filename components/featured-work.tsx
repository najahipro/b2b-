'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight, Lock } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { CalendlyButton } from './calendly-button'
import { useLanguage } from '@/hooks/use-language'
import { ProjectMockup } from './project-mockup'

export function FeaturedWork() {
  const { language, t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { key: 'all', label: language === 'fr' ? 'Tous' : 'All' },
    { key: 'saas', label: 'SaaS & ERP' },
    { key: 'web', label: language === 'fr' ? 'Web & Mobile' : 'Web & Mobile' },
    { key: 'data', label: language === 'fr' ? 'Data & IA' : 'Data & AI' },
    { key: 'ecommerce', label: 'E-commerce' },
  ]

  const projects = [
    {
      key: 'alloclients',
      title: t("portfolioPage.projects.alloclients.title"),
      category: t("portfolioPage.projects.alloclients.category"),
      description: t("portfolioPage.projects.alloclients.description"),
      techStack: ['Laravel', 'React.js', 'MySQL'],
      href: 'https://app.allo-clients.com/lp',
      featured: true,
      categoryKey: 'saas'
    },
    {
      key: 'numa',
      title: t("portfolioPage.projects.numa.title"),
      category: t("portfolioPage.projects.numa.category"),
      description: t("portfolioPage.projects.numa.description"),
      techStack: ['Next.js', 'Laravel', 'PostgreSQL'],
      href: '',
      featured: true,
      categoryKey: 'saas'
    },
    {
      key: 'ohm',
      title: t("portfolioPage.projects.ohm.title"),
      category: t("portfolioPage.projects.ohm.category"),
      description: t("portfolioPage.projects.ohm.description"),
      techStack: ['Angular', 'Strapi CMS', 'TypeScript'],
      href: 'https://ohm.ma/Home',
      featured: true,
      categoryKey: 'web'
    },
    {
      key: 'africaTenders',
      title: t("portfolioPage.projects.africaTenders.title"),
      category: t("portfolioPage.projects.africaTenders.category"),
      description: t("portfolioPage.projects.africaTenders.description"),
      techStack: ['Python', 'NLP', 'Selenium', 'ML'],
      href: 'https://morocco.ai/events/conferences/MoroccoAI-Conference-2022/',
      featured: false,
      categoryKey: 'data'
    },
    {
      key: 'infiniPrint',
      title: t("portfolioPage.projects.infiniPrint.title"),
      category: t("portfolioPage.projects.infiniPrint.category"),
      description: t("portfolioPage.projects.infiniPrint.description"),
      techStack: ['WordPress', 'WooCommerce', 'Laravel'],
      href: 'https://infiniprint.ma/',
      featured: false,
      categoryKey: 'ecommerce'
    },
    {
      key: 'cyberScale',
      title: t("portfolioPage.projects.cyberScale.title"),
      category: t("portfolioPage.projects.cyberScale.category"),
      description: t("portfolioPage.projects.cyberScale.description"),
      techStack: ['Laravel', 'React.js', 'React Native'],
      href: 'https://www.cyber-scale.me/etudes-de-cas/',
      featured: false,
      categoryKey: 'web'
    },
    {
      key: 'getProcure',
      title: t("portfolioPage.projects.getProcure.title"),
      category: t("portfolioPage.projects.getProcure.category"),
      description: t("portfolioPage.projects.getProcure.description"),
      techStack: ['React', 'Laravel', 'Python', 'Scrapy'],
      href: '',
      featured: false,
      categoryKey: 'data'
    },
  ]

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.categoryKey === activeCategory)

  return (
    <section className="py-24 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-4">
            {t('featured.label')}
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground text-balance leading-tight">
            {t('featured.title')}
          </h2>
          <div className="mt-6 flex items-center justify-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors group"
            >
              {t('featured.viewAll')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-secondary border-secondary text-secondary-foreground shadow-md shadow-secondary/20'
                  : 'bg-card border-border text-muted-foreground hover:text-foreground hover:border-foreground/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const CardContent = (
                <>
                  {/* Visual Banner */}
                  <div className="overflow-hidden">
                    <ProjectMockup projectKey={project.key} />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    {/* Category + Badge row */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        {project.featured
                          ? (language === 'fr' ? 'Projet Phare' : 'Featured')
                          : (language === 'fr' ? 'Projet' : 'Project')
                        }
                      </span>
                      <span className="text-[10px] font-semibold text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-full">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-secondary transition-colors leading-snug">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/60">
                      {/* Link or NDA */}
                      {project.href ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary group-hover:gap-2 transition-all">
                          {language === 'fr' ? 'Voir le projet' : 'View Project'}
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                          <Lock className="w-3 h-3" />
                          NDA
                        </span>
                      )}

                      {/* Tech pills */}
                      <div className="flex flex-wrap justify-end gap-1.5">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )

              const cardClasses = "group flex flex-col bg-card rounded-2xl border border-border overflow-hidden hover:border-secondary/30 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 h-full"

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  key={project.key}
                >
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cardClasses}
                    >
                      {CardContent}
                    </a>
                  ) : (
                    <div className={cardClasses}>
                      {CardContent}
                    </div>
                  )}
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-16 flex justify-center">
          <CalendlyButton 
            text={t('common.bookCall')} 
            className="px-8 py-4 text-base rounded-xl"
          />
        </div>

      </div>
    </section>
  )
}
