import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const values = [
  {
    title: 'Technical Excellence',
    description: 'I write code I\'m proud of. Every system is architected for scale, maintainability, and performance from day one.',
  },
  {
    title: 'Direct Communication',
    description: 'No account managers or intermediaries. You work directly with the engineer building your system.',
  },
  {
    title: 'Full Transparency',
    description: 'Repository access from sprint one. You see every commit, every decision, every line of code as it\'s written.',
  },
  {
    title: 'Complete Ownership',
    description: 'Your code, your infrastructure, your IP. I build systems that you fully own and control.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-wider text-secondary">
                About
              </p>
              <h1 className="mt-4 text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
                Senior System Architect & Lead Engineer
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                DigitoMaroc is led by a dedicated technical expert. You're not working with an agency with layers of management—you work directly with the architect designing and building your systems.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="pb-24 lg:pb-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-6">
                  Engineering Philosophy
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    My engineering philosophy is built on technical autonomy, clean architecture, and rapid delivery. Over the past few years, I have successfully bridged the gap between complex business requirements and robust technical execution. 
                  </p>
                  <p>
                    From building single-handedly massive enterprise SaaS ERP platforms to acting as a CTO for multi-tenant ecosystems, the goal is always complete end-to-end ownership.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-6">
                  Why Morocco?
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Based in Morocco, I operate in a timezone that overlaps with both European 
                    and American business hours. This means real-time collaboration without the 
                    delays of traditional offshore development.
                  </p>
                  <p>
                    Morocco's growing tech ecosystem has produced world-class engineering talent. 
                    I bring that expertise to global clients at competitive rates without 
                    compromising on quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Architect Section */}
        <section className="py-24 lg:py-32 bg-muted relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16 text-center">
              <p className="text-sm font-medium uppercase tracking-wider text-secondary">
                The Architect
              </p>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                Meet your Architect
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="p-8 lg:p-12 bg-card rounded-3xl border border-border shadow-sm flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Profile Image */}
                <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-2xl bg-secondary/10 flex items-center justify-center border-2 border-secondary/20 overflow-hidden relative">
                  <Image 
                    src="/salah-profile.jpg" 
                    alt="Salah E. - Lead Full-Stack Engineer" 
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-foreground">Salah E.</h3>
                  <p className="text-secondary font-medium mt-1">Lead Full-Stack Engineer & System Architect</p>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Specializing in building scalable SaaS platforms, enterprise ERPs, and AI-integrated digital ecosystems from the ground up. Architect of the Numa ERP platform (140+ database tables), Lead Developer for the AlloClients multi-tenant SaaS, and 1st Prize Winner at the MoroccoAI Hackathon for NLP pipelines.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2">
                    {['Laravel', 'React.js', 'Node.js', 'Python', 'Cloud VPS & DevOps', 'System Architecture'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-medium bg-muted rounded-full text-foreground/80 border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="mb-16">
              <p className="text-sm font-medium uppercase tracking-wider text-secondary">
                Our Values
              </p>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                What I stand for
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value) => (
                <div key={value.title} className="p-8 bg-card rounded-2xl border border-border shadow-sm">
                  <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32 bg-foreground text-primary-foreground">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance">
              Ready to work with me?
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Let's discuss your project and see if I'm the right fit for your team.
            </p>
            <div className="mt-10">
              <Link
                href="/start"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
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
