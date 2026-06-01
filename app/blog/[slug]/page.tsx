import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const articles = {
  'multi-tenant-architecture-patterns': {
    title: 'Multi-tenant Architecture: Patterns for Scale',
    category: 'System Architecture',
    author: 'Salah',
    authorRole: 'Lead Architect',
    date: 'Jan 15, 2026',
    readTime: '12 min read',
    excerpt: 'A deep dive into database isolation strategies, tenant-aware middleware, and horizontal scaling patterns for SaaS platforms.',
    content: `
## Introduction

Building multi-tenant SaaS applications presents unique architectural challenges. You need to balance data isolation, performance, and cost efficiency while maintaining a single codebase that serves hundreds or thousands of customers.

In this article, I'll share the patterns we've developed over years of building enterprise SaaS platforms, including the specific approaches we used for AlloClients and other large-scale systems.

## Database Isolation Strategies

### 1. Shared Database, Shared Schema

The simplest approach: all tenants share the same database and tables, with a \`tenant_id\` column distinguishing data.

**Pros:**
- Lowest infrastructure cost
- Simple to implement and maintain
- Easy to run analytics across all tenants

**Cons:**
- Risk of data leakage if queries aren't properly scoped
- One tenant's heavy usage can impact others
- Harder to meet compliance requirements

### 2. Shared Database, Separate Schemas

Each tenant gets their own PostgreSQL schema within a shared database instance.

**Pros:**
- Better logical isolation
- Easier to backup/restore individual tenants
- Schema-level security policies

**Cons:**
- Schema migrations become complex
- Still shares compute resources
- Connection pooling challenges

### 3. Separate Databases

Each tenant gets their own database instance. We typically reserve this for enterprise customers with specific compliance needs.

**Pros:**
- Complete isolation
- Per-tenant performance tuning
- Simplest compliance story

**Cons:**
- Highest cost
- Complex deployment automation required
- Cross-tenant analytics require data aggregation layer

## Row-Level Security in PostgreSQL

For most applications, we recommend the shared schema approach with PostgreSQL Row-Level Security (RLS). Here's a simplified example:

\`\`\`sql
-- Enable RLS on the table
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Create a policy that restricts access based on tenant_id
CREATE POLICY tenant_isolation_policy ON projects
  USING (tenant_id = current_setting('app.current_tenant')::uuid);

-- Set the tenant context in your application
SET app.current_tenant = 'tenant-uuid-here';
\`\`\`

The key is to set the tenant context at the beginning of each request in your middleware, ensuring every subsequent query is automatically scoped.

## Tenant-Aware Middleware

In Next.js, we implement tenant resolution in middleware:

\`\`\`typescript
export async function middleware(request: NextRequest) {
  // Resolve tenant from subdomain or custom domain
  const tenant = await resolveTenant(request.headers.get('host'))
  
  if (!tenant) {
    return NextResponse.redirect('/not-found')
  }
  
  // Add tenant context to headers for downstream use
  const response = NextResponse.next()
  response.headers.set('x-tenant-id', tenant.id)
  
  return response
}
\`\`\`

## Horizontal Scaling Patterns

### Connection Pooling

With thousands of tenants, database connections become a bottleneck. We use PgBouncer in transaction pooling mode:

- Each application instance connects to PgBouncer
- PgBouncer maintains a smaller pool of actual database connections
- Connections are shared across tenants for efficiency

### Read Replicas

For read-heavy workloads, we route read queries to replicas:

- Write operations go to the primary
- Read operations are distributed across replicas
- We use application-level routing based on the operation type

### Sharding Strategy

For extremely large scale, we shard tenants across multiple database clusters:

- Tenant-to-shard mapping stored in a central registry
- Consistent hashing for even distribution
- Cross-shard queries aggregated at the application layer

## Conclusion

Multi-tenant architecture is all about making the right tradeoffs for your specific requirements. Start with the simplest approach that meets your needs, and evolve as you scale.

The patterns described here have served us well across dozens of enterprise deployments. The key is to build flexibility into your architecture from the start, so you can adapt as requirements change.
    `,
  },
  'zero-downtime-deployments': {
    title: 'Zero-Downtime Deployments with Kubernetes',
    category: 'DevOps & Infrastructure',
    author: 'Salah',
    authorRole: 'Lead Architect',
    date: 'Jan 8, 2026',
    readTime: '8 min read',
    excerpt: 'How we achieve seamless deployments using blue-green strategies, rolling updates, and automated rollback mechanisms.',
    content: `
## Introduction

Downtime during deployments is no longer acceptable for production systems. Your users expect 24/7 availability, and any interruption can mean lost revenue and damaged trust.

In this article, I'll walk through the deployment strategies we use to achieve true zero-downtime deployments on Kubernetes.

## Rolling Updates

Kubernetes rolling updates are the foundation of zero-downtime deployments. The basic strategy:

1. Start new pods with the updated version
2. Wait for new pods to pass health checks
3. Gradually terminate old pods
4. Repeat until all pods are updated

Here's a deployment configuration that ensures smooth rollouts:

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-server
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  template:
    spec:
      containers:
      - name: api
        readinessProbe:
          httpGet:
            path: /health
            port: 8080
          initialDelaySeconds: 5
          periodSeconds: 5
        livenessProbe:
          httpGet:
            path: /health
            port: 8080
          initialDelaySeconds: 15
          periodSeconds: 20
\`\`\`

The key settings:
- \`maxUnavailable: 0\` ensures we never have fewer pods than desired
- \`maxSurge: 1\` allows one extra pod during the update
- Proper health checks prevent routing traffic to unhealthy pods

## Blue-Green Deployments

For major releases or when you need instant rollback capability, we use blue-green deployments:

1. Deploy the new version alongside the existing one
2. Run smoke tests against the new version
3. Switch the load balancer to the new version
4. Keep the old version running for quick rollback

We implement this using Kubernetes services:

\`\`\`yaml
# Blue deployment (current)
apiVersion: v1
kind: Service
metadata:
  name: api-production
spec:
  selector:
    app: api
    version: blue  # Switch to 'green' for cutover
  ports:
  - port: 80
    targetPort: 8080
\`\`\`

## Database Migrations

Database schema changes are often the trickiest part of zero-downtime deployments. Our approach:

### Expand-Contract Pattern

1. **Expand**: Add new columns/tables without removing old ones
2. **Migrate**: Update application to use new schema
3. **Contract**: Remove old columns/tables after full rollout

### Example Migration Sequence

Adding a new \`full_name\` column to replace \`first_name\` and \`last_name\`:

**Phase 1: Expand**
\`\`\`sql
ALTER TABLE users ADD COLUMN full_name VARCHAR(255);
-- Keep writing to both old and new columns
\`\`\`

**Phase 2: Backfill**
\`\`\`sql
UPDATE users SET full_name = first_name || ' ' || last_name
WHERE full_name IS NULL;
\`\`\`

**Phase 3: Switch reads**
Deploy application version that reads from \`full_name\`

**Phase 4: Contract**
\`\`\`sql
ALTER TABLE users DROP COLUMN first_name;
ALTER TABLE users DROP COLUMN last_name;
\`\`\`

## Automated Rollbacks

We use Argo Rollouts for automated rollback based on metrics:

\`\`\`yaml
apiVersion: argoproj.io/v1alpha1
kind: Rollout
spec:
  strategy:
    canary:
      steps:
      - setWeight: 10
      - pause: {duration: 5m}
      - setWeight: 50
      - pause: {duration: 10m}
      - setWeight: 100
      analysis:
        templates:
        - templateName: success-rate
        startingStep: 1
\`\`\`

If the success rate drops below threshold during any step, the rollout automatically reverts.

## Conclusion

Zero-downtime deployments require careful orchestration of application updates, database migrations, and traffic management. The patterns described here have allowed us to deploy multiple times per day without any user-facing impact.
    `,
  },
  'llm-integration-enterprise': {
    title: 'Integrating LLMs in Enterprise Applications',
    category: 'LLM & Automation',
    author: 'Salah',
    authorRole: 'Lead Architect',
    date: 'Dec 28, 2025',
    readTime: '15 min read',
    excerpt: 'Practical patterns for adding AI capabilities to existing systems: RAG pipelines, prompt management, and cost optimization.',
    content: `
## Introduction

Large Language Models are transforming enterprise applications, but integrating them effectively requires careful architecture. In this article, I'll share practical patterns we've developed for adding AI capabilities to existing systems.

## RAG Pipeline Architecture

Retrieval-Augmented Generation (RAG) combines your proprietary data with LLM capabilities. Here's our production architecture:

### Document Ingestion Pipeline

1. **Extract**: Parse documents (PDF, Word, HTML)
2. **Chunk**: Split into semantic sections
3. **Embed**: Generate vector embeddings
4. **Store**: Index in vector database

\`\`\`typescript
async function ingestDocument(doc: Document) {
  // Extract text content
  const text = await extractText(doc)
  
  // Split into chunks with overlap
  const chunks = splitIntoChunks(text, {
    chunkSize: 1000,
    overlap: 200,
  })
  
  // Generate embeddings
  const embeddings = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: chunks.map(c => c.text),
  })
  
  // Store in vector database
  await vectorStore.upsert(
    chunks.map((chunk, i) => ({
      id: \`\${doc.id}-\${i}\`,
      values: embeddings.data[i].embedding,
      metadata: {
        documentId: doc.id,
        text: chunk.text,
        section: chunk.section,
      },
    }))
  )
}
\`\`\`

### Query Pipeline

1. **Embed query**: Convert user question to vector
2. **Retrieve**: Find relevant document chunks
3. **Rerank**: Order by relevance
4. **Generate**: Send context + query to LLM

## Prompt Management

For production systems, hardcoded prompts quickly become unmanageable. We use a structured approach:

### Prompt Templates

\`\`\`typescript
const prompts = {
  documentQA: {
    system: \`You are a helpful assistant that answers questions based on the provided context.
    
Rules:
- Only answer based on the provided context
- If the answer isn't in the context, say "I don't have enough information"
- Cite the source document when possible\`,
    
    user: \`Context:
{context}

Question: {question}

Answer:\`,
  },
}
\`\`\`

### Version Control

We version prompts and track performance metrics:

- A/B test prompt variations
- Track response quality scores
- Roll back problematic changes

## Cost Optimization

LLM costs can spiral quickly. Here are strategies we use:

### Caching

Cache identical or semantically similar queries:

\`\`\`typescript
async function queryWithCache(question: string) {
  // Check exact match cache
  const cached = await cache.get(question)
  if (cached) return cached
  
  // Check semantic similarity cache
  const embedding = await embed(question)
  const similar = await findSimilarCachedQuery(embedding, 0.95)
  if (similar) return similar.response
  
  // Generate new response
  const response = await generateResponse(question)
  await cache.set(question, response)
  return response
}
\`\`\`

### Model Selection

Use the right model for the task:

- **GPT-4**: Complex reasoning, important outputs
- **GPT-3.5**: Simple queries, bulk processing
- **Fine-tuned models**: Specialized, repetitive tasks

### Token Optimization

- Truncate context intelligently
- Use structured output formats
- Implement streaming for long responses

## Error Handling & Fallbacks

LLMs can fail or produce poor results. Build resilience:

\`\`\`typescript
async function robustQuery(question: string) {
  try {
    const response = await queryLLM(question, {
      timeout: 30000,
      retries: 2,
    })
    
    // Validate response quality
    if (!isValidResponse(response)) {
      return fallbackResponse(question)
    }
    
    return response
  } catch (error) {
    logger.error('LLM query failed', { error, question })
    return fallbackResponse(question)
  }
}
\`\`\`

## Conclusion

Successfully integrating LLMs into enterprise applications requires thoughtful architecture around retrieval, prompt management, cost control, and reliability. These patterns have served us well across multiple production deployments.
    `,
  },
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const article = articles[slug as keyof typeof articles]
  
  if (!article) {
    return { title: 'Article Not Found' }
  }
  
  return {
    title: `${article.title} | DigitoMaroc Insights`,
    description: article.excerpt,
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = articles[slug as keyof typeof articles]

  if (!article) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to Insights
            </Link>

            <span className="text-sm font-medium uppercase tracking-wider text-secondary">
              {article.category}
            </span>
            <h1 className="mt-4 text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance leading-tight">
              {article.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {article.excerpt}
            </p>

            {/* Author & Meta */}
            <div className="mt-8 flex items-center gap-4 pt-8 border-t border-border">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <span className="text-lg font-semibold text-secondary">
                  {article.author[0]}
                </span>
              </div>
              <div>
                <div className="font-medium text-foreground">{article.author}</div>
                <div className="text-sm text-muted-foreground">{article.authorRole}</div>
              </div>
              <div className="ml-auto text-sm text-muted-foreground">
                <span>{article.date}</span>
                <span className="mx-2">·</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-24 lg:pb-32 bg-background">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <article className="prose prose-lg prose-neutral max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-code:text-secondary prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-foreground prose-pre:text-primary-foreground prose-li:text-muted-foreground prose-ul:my-6 prose-ol:my-6">
              <div dangerouslySetInnerHTML={{ __html: formatContent(article.content) }} />
            </article>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground text-balance">
              Need help implementing these patterns?
            </h2>
            <p className="mt-4 text-muted-foreground">
              We can architect and build systems using these exact approaches for your business.
            </p>
            <div className="mt-8">
              <Link
                href="/start"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-foreground text-primary-foreground rounded-lg hover:bg-foreground/90 transition-colors"
              >
                Start a Conversation
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

function formatContent(content: string): string {
  // Simple markdown-like formatting
  return content
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
}
