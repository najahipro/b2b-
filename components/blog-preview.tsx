import Link from 'next/link'

const articles = [
  {
    slug: 'multi-tenant-architecture-patterns',
    title: 'Multi-tenant Architecture: Patterns for Scale',
    category: 'System Architecture',
    excerpt: 'A deep dive into database isolation strategies, tenant-aware middleware, and horizontal scaling patterns for SaaS platforms.',
    author: 'Salah',
    date: 'Jan 15, 2026',
    readTime: '12 min read',
  },
  {
    slug: 'zero-downtime-deployments',
    title: 'Zero-Downtime Deployments with Kubernetes',
    category: 'DevOps & Infrastructure',
    excerpt: 'How we achieve seamless deployments using blue-green strategies, rolling updates, and automated rollback mechanisms.',
    author: 'Salah',
    date: 'Jan 8, 2026',
    readTime: '8 min read',
  },
  {
    slug: 'llm-integration-enterprise',
    title: 'Integrating LLMs in Enterprise Applications',
    category: 'LLM & Automation',
    excerpt: 'Practical patterns for adding AI capabilities to existing systems: RAG pipelines, prompt management, and cost optimization.',
    author: 'Salah',
    date: 'Dec 28, 2025',
    readTime: '15 min read',
  },
]

export function BlogPreview() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-secondary">
              Technical Leadership
            </p>
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance">
              Latest architecture insights
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Deep technical content on building and scaling enterprise systems.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-medium text-secondary hover:text-secondary/80 transition-colors"
          >
            View all articles
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group flex flex-col p-6 lg:p-8 bg-card rounded-2xl border border-border hover:border-secondary/50 transition-colors"
            >
              {/* Category */}
              <span className="text-xs font-medium uppercase tracking-wider text-secondary">
                {article.category}
              </span>

              {/* Title */}
              <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-secondary transition-colors leading-snug">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                {article.excerpt}
              </p>

              {/* Meta */}
              <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">
                  {article.author}
                </span>
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
  )
}
