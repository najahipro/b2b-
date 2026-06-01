import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Data Processing Agreement | DigitoMaroc',
  description: 'Data Processing Agreement for DigitoMaroc - our commitments for handling your data.',
}

export default function DPAPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-24 lg:py-32 bg-background">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">Data Processing Agreement</h1>
            <p className="mt-4 text-muted-foreground">Last updated: January 1, 2026</p>

            <div className="mt-12 prose prose-neutral max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground">
              <h2>1. Purpose</h2>
              <p>
                This Data Processing Agreement (&quot;DPA&quot;) forms part of the agreement between DigitoMaroc 
                (&quot;Processor&quot;) and the Client (&quot;Controller&quot;) for the provision of software development 
                services. This DPA sets out the terms that apply when Personal Data is processed by 
                the Processor on behalf of the Controller.
              </p>

              <h2>2. Definitions</h2>
              <ul>
                <li><strong>Personal Data:</strong> Any information relating to an identified or identifiable natural person</li>
                <li><strong>Processing:</strong> Any operation performed on Personal Data</li>
                <li><strong>Data Subject:</strong> The individual to whom Personal Data relates</li>
                <li><strong>GDPR:</strong> General Data Protection Regulation (EU) 2016/679</li>
              </ul>

              <h2>3. Processing of Personal Data</h2>
              <p>
                The Processor shall only process Personal Data on documented instructions from the 
                Controller, unless required to do so by applicable law. The Processor shall immediately 
                inform the Controller if it believes an instruction infringes data protection legislation.
              </p>

              <h2>4. Confidentiality</h2>
              <p>
                The Processor shall ensure that all personnel authorized to process Personal Data have 
                committed themselves to confidentiality or are under an appropriate statutory obligation 
                of confidentiality.
              </p>

              <h2>5. Security Measures</h2>
              <p>The Processor shall implement appropriate technical and organizational measures including:</p>
              <ul>
                <li>Encryption of Personal Data</li>
                <li>Ability to ensure ongoing confidentiality, integrity, and availability</li>
                <li>Ability to restore availability and access to Personal Data in a timely manner</li>
                <li>Regular testing and evaluation of security measures</li>
              </ul>

              <h2>6. Sub-processors</h2>
              <p>
                The Processor shall not engage another processor without prior specific or general 
                written authorization of the Controller. A list of approved sub-processors is available 
                upon request.
              </p>

              <h2>7. Data Subject Rights</h2>
              <p>
                The Processor shall assist the Controller in responding to requests from Data Subjects 
                exercising their rights under applicable data protection law, including access, 
                rectification, erasure, and portability requests.
              </p>

              <h2>8. Data Breach Notification</h2>
              <p>
                The Processor shall notify the Controller without undue delay after becoming aware 
                of a Personal Data breach, providing sufficient information to enable the Controller 
                to meet any obligations to report or inform Data Subjects.
              </p>

              <h2>9. Data Deletion</h2>
              <p>
                Upon termination of services, the Processor shall, at the choice of the Controller, 
                delete or return all Personal Data and delete existing copies unless storage is 
                required by applicable law.
              </p>

              <h2>10. Audit Rights</h2>
              <p>
                The Processor shall make available to the Controller all information necessary to 
                demonstrate compliance with this DPA and allow for and contribute to audits conducted 
                by the Controller or a mandated auditor.
              </p>

              <h2>11. International Transfers</h2>
              <p>
                The Processor shall not transfer Personal Data outside the European Economic Area 
                without appropriate safeguards in place, such as Standard Contractual Clauses or 
                adequacy decisions.
              </p>

              <h2>12. Contact</h2>
              <p>
                For questions about this DPA or to request a signed copy for your organization, 
                please contact dpa@digitomaroc.com.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
