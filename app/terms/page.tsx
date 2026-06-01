import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Terms of Service | DigitoMaroc',
  description: 'Terms of Service for DigitoMaroc - the agreement governing our services.',
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-24 lg:py-32 bg-background">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">Terms of Service</h1>
            <p className="mt-4 text-muted-foreground">Last updated: January 1, 2026</p>

            <div className="mt-12 prose prose-neutral max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground">
              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing our website or engaging our services, you agree to be bound by these 
                Terms of Service. If you disagree with any part of these terms, you may not access 
                our services.
              </p>

              <h2>2. Services</h2>
              <p>
                DigitoMaroc provides custom software development services including, but not limited to, 
                SaaS platforms, ERP systems, mobile applications, and cloud infrastructure consulting.
              </p>

              <h2>3. Project Agreements</h2>
              <p>
                All development projects are governed by separate project agreements that outline scope, 
                timeline, deliverables, and payment terms. These project agreements supplement these 
                general Terms of Service.
              </p>

              <h2>4. Intellectual Property</h2>
              <p>
                Upon full payment, clients receive complete ownership of all intellectual property, 
                source code, and related assets created during their project. DigitoMaroc retains no 
                rights to client-specific code or designs.
              </p>
              <p>
                DigitoMaroc may retain the right to use general knowledge, techniques, and non-proprietary 
                components developed during projects for future work.
              </p>

              <h2>5. Confidentiality</h2>
              <p>
                Both parties agree to maintain confidentiality of proprietary information shared during 
                the engagement. This includes business strategies, technical specifications, and any 
                information marked as confidential.
              </p>

              <h2>6. Payment Terms</h2>
              <p>
                Payment terms are specified in individual project agreements. Late payments may incur 
                additional fees and may result in suspension of services.
              </p>

              <h2>7. Limitation of Liability</h2>
              <p>
                DigitoMaroc shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages resulting from the use of our services. Our total liability shall 
                not exceed the amount paid for the specific services in question.
              </p>

              <h2>8. Termination</h2>
              <p>
                Either party may terminate a project agreement with written notice as specified in the 
                agreement. Upon termination, clients receive all completed work and code up to that point.
              </p>

              <h2>9. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with applicable laws. 
                Disputes shall be resolved through negotiation first, then binding arbitration if necessary.
              </p>

              <h2>10. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be posted on this 
                page with an updated revision date. Continued use of our services constitutes acceptance 
                of modified terms.
              </p>

              <h2>11. Contact</h2>
              <p>
                For questions about these Terms of Service, please contact us at legal@digitomaroc.com.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
