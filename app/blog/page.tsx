import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const categories = [
  { name: 'All', slug: 'all' },
  { name: 'System Architecture', slug: 'system-architecture' },
  { name: 'SaaS & ERP Development', slug: 'saas-erp' },
  { name: 'DevOps & Infrastructure', slug: 'devops' },
  { name: 'LLM & Automation', slug: 'llm-automation' },
]

const articles = [
  {
    slug: 'multi-tenant-architecture-patterns',
    title: 'Multi-tenant Architecture: Patterns for Scale',
    category: 'System Architecture',
    categorySlug: 'system-architecture',
    excerpt: 'A deep dive into database isolation strategies, tenant-aware middleware, and horizontal scaling patterns for SaaS platforms.',
    author: 'Salah',
    date: 'Jan 15, 2026',
    readTime: '12 min read',
    featured: true,
  },
  {
    slug: 'zero-downtime-deployments',
    title: 'Zero-Downtime Deployments with Kubernetes',
    category: 'DevOps & Infrastructure',
    categorySlug: 'devops',
    excerpt: 'How we achieve seamless deployments using blue-green strategies, rolling updates, and automated rollback mechanisms.',
    author: 'Salah',
    date: 'Jan 8, 2026',
    readTime: '8 min read',
    featured: true,
  },
  {
    slug: 'llm-integration-enterprise',
    title: 'Integrating LLMs in Enterprise Applications',
    category: 'LLM & Automation',
    categorySlug: 'llm-automation',
    excerpt: 'Practical patterns for adding AI capabilities to existing systems: RAG pipelines, prompt management, and cost optimization.',
    author: 'Salah',
    date: 'Dec 28, 2025',
    readTime: '15 min read',
    featured: true,
  },
  {
    slug: 'row-level-security-postgresql',
    title: 'Row-Level Security in PostgreSQL for Multi-tenant Apps',
    category: 'System Architecture',
    categorySlug: 'system-architecture',
    excerpt: 'Implementing bulletproof data isolation using PostgreSQL RLS policies with practical examples and performance considerations.',
    author: 'Salah',
    date: 'Dec 20, 2025',
    readTime: '10 min read',
    featured: false,
  },
  {
    slug: 'stripe-subscription-patterns',
    title: 'Building Subscription Billing with Stripe',
    category: 'SaaS & ERP Development',
    categorySlug: 'saas-erp',
    excerpt: 'Complete guide to implementing usage-based billing, prorations, trial periods, and dunning management in SaaS applications.',
    author: 'Salah',
    date: 'Dec 12, 2025',
    readTime: '14 min read',
    featured: false,
  },
  {
    slug: 'kubernetes-cost-optimization',
    title: 'Kubernetes Cost Optimization Strategies',
    category: 'DevOps & Infrastructure',
    categorySlug: 'devops',
    excerpt: 'Techniques for reducing cloud costs without sacrificing reliability: right-sizing, spot instances, and resource quotas.',
    author: 'Salah',
    date: 'Dec 5, 2025',
    readTime: '9 min read',
    featured: false,
  },
  {
    slug: 'real-time-analytics-timescaledb',
    title: 'Real-time Analytics with TimescaleDB',
    category: 'System Architecture',
    categorySlug: 'system-architecture',
    excerpt: 'Building high-performance analytics dashboards using time-series data with continuous aggregates and compression.',
    author: 'Salah',
    date: 'Nov 28, 2025',
    readTime: '11 min read',
    featured: false,
  },
  {
    slug: 'api-rate-limiting-patterns',
    title: 'API Rate Limiting: From Basics to Advanced Patterns',
    category: 'SaaS & ERP Development',
    categorySlug: 'saas-erp',
    excerpt: 'Implementing fair usage policies with token buckets, sliding windows, and distributed rate limiting using Redis.',
    author: 'Salah',
    date: 'Nov 20, 2025',
    readTime: '13 min read',
    featured: false,
  },
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-wider text-secondary">
                Insights
              </p>
              <h1 className="mt-4 text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
                Technical leadership from the architects
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Deep technical content on system architecture, SaaS development, DevOps, 
                and emerging technologies. Written by engineers, for engineers.
              </p>
            </div>

            {/* Category Filters */}
            <div className="mt-12 flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.slug}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    category.slug === 'all'
                      ? 'bg-foreground text-primary-foreground'
                      : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="pb-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-xl font-semibold text-foreground mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {articles
                .filter((a) => a.featured)
                .map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group flex flex-col p-6 lg:p-8 bg-card rounded-2xl border border-border hover:border-secondary/50 transition-colors"
                  >
                    <span className="text-xs font-medium uppercase tracking-wider text-secondary">
                      {article.category}
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-secondary transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                      {article.excerpt}
                    </p>
                    <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">{article.author}</span>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{article.date}</span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* All Articles */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-xl font-semibold text-foreground mb-8">All Articles</h2>
            <div className="space-y-6">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group flex flex-col lg:flex-row lg:items-center gap-6 p-6 lg:p-8 bg-card rounded-2xl border border-border hover:border-secondary/50 transition-colors"
                >
                  <div className="flex-1">
                    <span className="text-xs font-medium uppercase tracking-wider text-secondary">
                      {article.category}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-secondary transition-colors">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="flex lg:flex-col items-center lg:items-end gap-4 lg:gap-2 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{article.author}</span>
                    <div className="flex items-center gap-2 text-xs">
                      <span>{article.date}</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance">
              Stay updated on enterprise architecture
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Get our latest technical insights delivered to your inbox. No spam, just valuable content.
            </p>
            <form className="mt-10 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 text-sm font-medium bg-foreground text-primary-foreground rounded-lg hover:bg-foreground/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
