import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Legal Notice | DigitoMaroc',
  description: 'Legal Notice (Impressum) for DigitoMaroc - company information and legal disclosures.',
}

export default function LegalPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-24 lg:py-32 bg-background">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">Legal Notice</h1>
            <p className="mt-4 text-muted-foreground">Impressum</p>

            <div className="mt-12 prose prose-neutral max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground">
              <h2>Company Information</h2>
              <p>
                <strong>DigitoMaroc</strong><br />
                Software Development & Consulting
              </p>
              <p>
                <strong>Address:</strong><br />
                Casablanca, Morocco
              </p>
              <p>
                <strong>Email:</strong> contact@digitomaroc.com<br />
                <strong>Website:</strong> www.digitomaroc.com
              </p>

              <h2>Represented By</h2>
              <p>
                DigitoMaroc is represented by its founding partners who are responsible for the 
                content of this website.
              </p>

              <h2>Professional Information</h2>
              <p>
                <strong>Professional Activity:</strong> Software Development and IT Consulting<br />
                <strong>Professional Regulations:</strong> Applicable Moroccan commercial law
              </p>

              <h2>Liability for Content</h2>
              <p>
                The contents of our pages were created with the utmost care. However, we cannot 
                guarantee the accuracy, completeness, and timeliness of the content. As a service 
                provider, we are responsible for our own content on these pages according to general 
                laws. However, we are not obligated to monitor transmitted or stored third-party 
                information or to investigate circumstances that indicate illegal activity.
              </p>

              <h2>Liability for Links</h2>
              <p>
                Our website contains links to external websites of third parties over whose content 
                we have no influence. Therefore, we cannot assume any liability for these external 
                contents. The respective provider or operator of the pages is always responsible 
                for the contents of the linked pages.
              </p>

              <h2>Copyright</h2>
              <p>
                The content and works created by the site operators on these pages are subject to 
                copyright law. Duplication, processing, distribution, and any kind of exploitation 
                outside the limits of copyright law require the written consent of the respective 
                author or creator.
              </p>

              <h2>Dispute Resolution</h2>
              <p>
                We are not willing or obliged to participate in dispute resolution proceedings 
                before a consumer arbitration board.
              </p>

              <h2>Contact for Legal Matters</h2>
              <p>
                For all legal inquiries, please contact legal@digitomaroc.com.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
