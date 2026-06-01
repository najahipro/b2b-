import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Cookie Policy | DigitoMaroc',
  description: 'Cookie Policy for DigitoMaroc - how we use cookies on our website.',
}

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-24 lg:py-32 bg-background">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">Cookie Policy</h1>
            <p className="mt-4 text-muted-foreground">Last updated: January 1, 2026</p>

            <div className="mt-12 prose prose-neutral max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground">
              <h2>What Are Cookies</h2>
              <p>
                Cookies are small text files that are stored on your device when you visit a website. 
                They help websites remember your preferences and improve your browsing experience.
              </p>

              <h2>How We Use Cookies</h2>
              <p>DigitoMaroc uses cookies for the following purposes:</p>

              <h3 className="text-lg font-semibold text-foreground mt-6">Essential Cookies</h3>
              <p>
                These cookies are necessary for the website to function properly. They enable core 
                functionality such as security, network management, and accessibility.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">Analytics Cookies</h3>
              <p>
                We use analytics cookies to understand how visitors interact with our website. This 
                helps us improve our site and provide a better user experience. These cookies collect 
                information in an anonymous form.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">Preference Cookies</h3>
              <p>
                These cookies allow our website to remember choices you make (such as your language 
                preference) and provide enhanced, more personalized features.
              </p>

              <h2>Third-Party Cookies</h2>
              <p>We may use third-party services that set their own cookies, including:</p>
              <ul>
                <li>Vercel Analytics for website performance monitoring</li>
                <li>Google Analytics for visitor behavior analysis</li>
              </ul>

              <h2>Managing Cookies</h2>
              <p>
                You can control and manage cookies through your browser settings. Please note that 
                removing or blocking cookies may impact your user experience and some functionality 
                may no longer be available.
              </p>
              <p>
                Most browsers allow you to:
              </p>
              <ul>
                <li>See what cookies you have and delete them individually</li>
                <li>Block third-party cookies</li>
                <li>Block cookies from particular sites</li>
                <li>Block all cookies</li>
                <li>Delete all cookies when you close your browser</li>
              </ul>

              <h2>Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time. Any changes will be posted on 
                this page with an updated revision date.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions about our use of cookies, please contact us at privacy@digitomaroc.com.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
