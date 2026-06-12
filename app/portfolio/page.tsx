"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Lock, ArrowRight, Layers, Zap, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useLanguage } from '@/hooks/use-language';
import { CallToActionSection } from '@/components/cta-section';
import { ProjectMockup } from '@/components/project-mockup';

export default function PortfolioPage() {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { key: 'all', label: language === 'fr' ? 'Tous les projets' : 'All Projects' },
    { key: 'saas', label: 'SaaS & ERP' },
    { key: 'web', label: language === 'fr' ? 'Web & Mobile' : 'Web & Mobile' },
    { key: 'data', label: language === 'fr' ? 'Data & IA' : 'Data & AI' },
    { key: 'ecommerce', label: 'E-commerce' },
    { key: 'devops', label: 'DevOps & Cloud' },
    { key: 'fintech', label: 'Fintech' },
  ];

  const projects = [
    {
      key: 'alloclients',
      title: t("portfolioPage.projects.alloclients.title"),
      category: t("portfolioPage.projects.alloclients.category"),
      description: t("portfolioPage.projects.alloclients.description"),
      techStack: ['Laravel', 'React.js', 'MySQL'],
      href: 'https://app.allo-clients.com/lp',
      featured: true,
      filterKey: 'saas',
    },
    {
      key: 'numa',
      title: t("portfolioPage.projects.numa.title"),
      category: t("portfolioPage.projects.numa.category"),
      description: t("portfolioPage.projects.numa.description"),
      techStack: ['Next.js', 'Laravel', 'PostgreSQL'],
      href: '',
      featured: true,
      filterKey: 'saas',
    },
    {
      key: 'ohm',
      title: t("portfolioPage.projects.ohm.title"),
      category: t("portfolioPage.projects.ohm.category"),
      description: t("portfolioPage.projects.ohm.description"),
      techStack: ['Angular', 'Strapi CMS', 'TypeScript'],
      href: 'https://ohm.ma/Home',
      featured: true,
      filterKey: 'web',
    },
    {
      key: 'vaultPay',
      title: t("portfolioPage.projects.vaultPay.title"),
      category: t("portfolioPage.projects.vaultPay.category"),
      description: t("portfolioPage.projects.vaultPay.description"),
      techStack: ['Node.js', 'Stripe', 'PostgreSQL'],
      href: '',
      featured: true,
      filterKey: 'fintech',
    },
    {
      key: 'africaTenders',
      title: t("portfolioPage.projects.africaTenders.title"),
      category: t("portfolioPage.projects.africaTenders.category"),
      description: t("portfolioPage.projects.africaTenders.description"),
      techStack: ['Python', 'NLP', 'Selenium'],
      href: 'https://morocco.ai/events/conferences/MoroccoAI-Conference-2022/',
      featured: false,
      filterKey: 'data',
    },
    {
      key: 'dataForge',
      title: t("portfolioPage.projects.dataForge.title"),
      category: t("portfolioPage.projects.dataForge.category"),
      description: t("portfolioPage.projects.dataForge.description"),
      techStack: ['Spark', 'Airflow', 'Python'],
      href: '',
      featured: false,
      filterKey: 'data',
    },
    {
      key: 'infiniPrint',
      title: t("portfolioPage.projects.infiniPrint.title"),
      category: t("portfolioPage.projects.infiniPrint.category"),
      description: t("portfolioPage.projects.infiniPrint.description"),
      techStack: ['WordPress', 'WooCommerce', 'Laravel'],
      href: 'https://infiniprint.ma/',
      featured: false,
      filterKey: 'ecommerce',
    },
    {
      key: 'cyberScale',
      title: t("portfolioPage.projects.cyberScale.title"),
      category: t("portfolioPage.projects.cyberScale.category"),
      description: t("portfolioPage.projects.cyberScale.description"),
      techStack: ['Laravel', 'React.js', 'React Native'],
      href: 'https://www.cyber-scale.me/etudes-de-cas/',
      featured: false,
      filterKey: 'web',
    },
    {
      key: 'cloudShift',
      title: t("portfolioPage.projects.cloudShift.title"),
      category: t("portfolioPage.projects.cloudShift.category"),
      description: t("portfolioPage.projects.cloudShift.description"),
      techStack: ['Terraform', 'AWS', 'Docker'],
      href: '',
      featured: false,
      filterKey: 'devops',
    },
    {
      key: 'getProcure',
      title: t("portfolioPage.projects.getProcure.title"),
      category: t("portfolioPage.projects.getProcure.category"),
      description: t("portfolioPage.projects.getProcure.description"),
      techStack: ['React', 'Laravel', 'Scrapy'],
      href: '',
      featured: false,
      filterKey: 'data',
    },
    {
      key: 'fleetPulse',
      title: t("portfolioPage.projects.fleetPulse.title"),
      category: t("portfolioPage.projects.fleetPulse.category"),
      description: t("portfolioPage.projects.fleetPulse.description"),
      techStack: ['React', 'Node.js', 'MQTT'],
      href: '',
      featured: false,
      filterKey: 'web',
    },
    {
      key: 'signalHub',
      title: t("portfolioPage.projects.signalHub.title"),
      category: t("portfolioPage.projects.signalHub.category"),
      description: t("portfolioPage.projects.signalHub.description"),
      techStack: ['Go', 'Redis', 'RabbitMQ'],
      href: '',
      featured: false,
      filterKey: 'devops',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.filterKey === activeFilter);

  const stats = [
    { value: '40+', label: language === 'fr' ? 'Projets livrés' : 'Projects Delivered' },
    { value: '12+', label: language === 'fr' ? 'Clients satisfaits' : 'Happy Clients' },
    { value: '99.9%', label: language === 'fr' ? 'Disponibilité' : 'Uptime' },
    { value: '5+', label: language === 'fr' ? 'Ans d\'expérience' : 'Years Experience' },
  ];

  return (
    <>
      <Header />
      <main className="pt-20">

        {/* Hero Section — Light, clean, premium */}
        <section className="relative py-24 lg:py-36 bg-background overflow-hidden border-b border-border">
          {/* Background texture */}
          <div className="absolute inset-0 opacity-[0.05]" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold tracking-wider uppercase mb-8">
                  <Layers className="w-3.5 h-3.5" />
                  {t("portfolioPage.badge")}
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                  {language === 'fr'
                    ? <>Des systèmes réels.<br /><span className="text-secondary">Un impact réel.</span></>
                    : <>Real systems.<br /><span className="text-secondary">Real impact.</span></>
                  }
                </h1>

                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  {t("portfolioPage.subheadline")}
                </p>
              </motion.div>
            </div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-border"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="md:px-8 first:md:pl-0 last:md:pr-0">
                  <div className="text-3xl lg:text-4xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Filter Bar — Sticky */}
        <section className="sticky top-14 lg:top-16 z-30 bg-background/80 backdrop-blur-xl border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-2 py-4 overflow-x-auto no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveFilter(cat.key)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap border transition-all duration-200 cursor-pointer flex-shrink-0 ${
                    activeFilter === cat.key
                      ? 'bg-secondary border-secondary text-secondary-foreground shadow-sm'
                      : 'bg-transparent border-border text-muted-foreground hover:text-foreground hover:border-foreground/20'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            {/* Results count */}
            <div className="flex items-center justify-between mb-10">
              <p className="text-sm text-muted-foreground">
                {language === 'fr'
                  ? <>{filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} trouvé{filteredProjects.length > 1 ? 's' : ''}</>
                  : <>{filteredProjects.length} project{filteredProjects.length > 1 ? 's' : ''} found</>
                }
              </p>
              {activeFilter !== 'all' && (
                <button
                  onClick={() => setActiveFilter('all')}
                  className="text-xs font-semibold text-secondary hover:text-secondary/80 transition-colors cursor-pointer inline-flex items-center gap-1"
                >
                  {language === 'fr' ? 'Tout voir' : 'Show all'}
                  <ArrowRight className="w-3 h-3" />
                </button>
              )}
            </div>

            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                    key={project.key}
                  >
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col bg-card rounded-2xl border border-border overflow-hidden hover:border-secondary/30 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 h-full"
                      >
                        <ProjectCard project={project} language={language} t={t} />
                      </a>
                    ) : (
                      <div className="group flex flex-col bg-card rounded-2xl border border-border overflow-hidden hover:border-secondary/30 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 h-full">
                        <ProjectCard project={project} language={language} t={t} />
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Empty state */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <Globe className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-muted-foreground">
                  {language === 'fr' ? 'Aucun projet dans cette catégorie.' : 'No projects in this category.'}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Capabilities Banner */}
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-card rounded-2xl border border-border p-8 md:p-12">
              <div className="flex-1">
                <div className="flex items-center gap-2 text-secondary mb-3">
                  <Zap className="w-5 h-5" />
                  <span className="text-sm font-semibold uppercase tracking-wider">
                    {language === 'fr' ? 'Prêt pour votre projet ?' : 'Ready for your project?'}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                  {language === 'fr'
                    ? 'Transformons votre vision en réalité.'
                    : "Let's turn your vision into reality."}
                </h3>
                <p className="text-muted-foreground max-w-xl">
                  {language === 'fr'
                    ? 'De la conception à la mise en production, nous architecturons des systèmes qui durent.'
                    : 'From concept to production, we architect systems built to last.'}
                </p>
              </div>
              <Link
                href="/start"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-semibold hover:bg-secondary/90 transition-colors flex-shrink-0"
              >
                {language === 'fr' ? 'Démarrer un projet' : 'Start a Project'}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <CallToActionSection />
      </main>
      <Footer />
    </>
  );
}

/* Extracted Card Component for cleanliness */
function ProjectCard({ project, language, t }: {
  project: { key: string; title: string; category: string; description: string; techStack: string[]; href: string; featured: boolean };
  language: string;
  t: (key: string) => string;
}) {
  return (
    <>
      {/* Visual Banner */}
      <div className="overflow-hidden">
        <ProjectMockup projectKey={project.key} />
      </div>

      <div className="flex flex-col flex-1 p-6">
        {/* Badge row */}
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
        <div className="flex items-center justify-between pt-4 border-t border-border/60 mt-auto">
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
  );
}
