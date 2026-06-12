"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/hooks/use-language";

export default function LegalPage() {
  const { language } = useLanguage();

  if (language === "fr") {
    return (
      <>
        <Header />
        <main className="pt-20">
          <section className="py-24 lg:py-32 bg-background">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
              <h1 className="text-4xl font-bold tracking-tight text-foreground">
                Mentions légales
              </h1>
              <p className="mt-4 text-muted-foreground">Impressum</p>

              <div className="mt-12 prose prose-neutral max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground">
                <h2>Informations sur l'entreprise</h2>
                <p>
                  <strong>Idmisk</strong>
                  <br />
                  Développement et conseil en logiciels
                </p>
                <p>
                  <strong>Adresse :</strong>
                  <br />
                  Casablanca, Maroc
                </p>
                <p>
                  <strong>E-mail :</strong> contact@Idmisk.com
                  <br />
                  <strong>Site web :</strong> www.Idmisk.com
                </p>

                <h2>Représenté par</h2>
                <p>
                  Idmisk est représenté par ses associés fondateurs qui sont responsables du contenu de ce site web.
                </p>

                <h2>Informations professionnelles</h2>
                <p>
                  <strong>Activité professionnelle :</strong> Développement de logiciels et conseil en informatique
                  <br />
                  <strong>Réglementations professionnelles :</strong> Droit commercial marocain applicable
                </p>

                <h2>Responsabilité du contenu</h2>
                <p>
                  Le contenu de nos pages a été créé avec le plus grand soin. Cependant, nous ne pouvons garantir l'exactitude, l'exhaustivité et l'actualité du contenu. En tant que prestataire de services, nous sommes responsables de nos propres contenus sur ces pages conformément aux lois générales. Cependant, nous ne sommes pas obligés de surveiller les informations tierces transmises ou stockées, ni d'enquêter sur les circonstances indiquant une activité illégale.
                </p>

                <h2>Responsabilité des liens</h2>
                <p>
                  Notre site web contient des liens vers des sites web externes de tiers sur le contenu desquels nous n'avons aucune influence. Par conséquent, nous ne pouvons assumer aucune responsabilité quant à ces contenus externes. Le fournisseur ou l'exploitant respectif des pages liées est toujours responsable de leur contenu.
                </p>

                <h2>Droits d'auteur</h2>
                <p>
                  Le contenu et les œuvres créés par les exploitants du site sur ces pages sont soumis à la législation sur le droit d'auteur. La reproduction, le traitement, la distribution et tout type d'exploitation en dehors des limites du droit d'auteur nécessitent le consentement écrit de l'auteur ou du créateur respectif.
                </p>

                <h2>Résolution des litiges</h2>
                <p>
                  Nous ne sommes pas disposés ni obligés de participer à des procédures de résolution de litiges devant un conseil d'arbitrage de la consommation.
                </p>

                <h2>Contact pour les questions juridiques</h2>
                <p>Pour toutes les demandes d'ordre juridique, veuillez nous contacter à legal@Idmisk.com.</p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-24 lg:py-32 bg-background">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">
              Legal Notice
            </h1>
            <p className="mt-4 text-muted-foreground">Impressum</p>

            <div className="mt-12 prose prose-neutral max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground">
              <h2>Company Information</h2>
              <p>
                <strong>Idmisk</strong>
                <br />
                Software Development & Consulting
              </p>
              <p>
                <strong>Address:</strong>
                <br />
                Casablanca, Morocco
              </p>
              <p>
                <strong>Email:</strong> contact@Idmisk.com
                <br />
                <strong>Website:</strong> www.Idmisk.com
              </p>

              <h2>Represented By</h2>
              <p>
                Idmisk is represented by its founding partners who are
                responsible for the content of this website.
              </p>

              <h2>Professional Information</h2>
              <p>
                <strong>Professional Activity:</strong> Software Development and
                IT Consulting
                <br />
                <strong>Professional Regulations:</strong> Applicable Moroccan
                commercial law
              </p>

              <h2>Liability for Content</h2>
              <p>
                The contents of our pages were created with the utmost care.
                However, we cannot guarantee the accuracy, completeness, and
                timeliness of the content. As a service provider, we are
                responsible for our own content on these pages according to
                general laws. However, we are not obligated to monitor
                transmitted or stored third-party information or to investigate
                circumstances that indicate illegal activity.
              </p>

              <h2>Liability for Links</h2>
              <p>
                Our website contains links to external websites of third parties
                over whose content we have no influence. Therefore, we cannot
                assume any liability for these external contents. The respective
                provider or operator of the pages is always responsible for the
                contents of the linked pages.
              </p>

              <h2>Copyright</h2>
              <p>
                The content and works created by the site operators on these
                pages are subject to copyright law. Duplication, processing,
                distribution, and any kind of exploitation outside the limits of
                copyright law require the written consent of the respective
                author or creator.
              </p>

              <h2>Dispute Resolution</h2>
              <p>
                We are not willing or obliged to participate in dispute
                resolution proceedings before a consumer arbitration board.
              </p>

              <h2>Contact for Legal Matters</h2>
              <p>For all legal inquiries, please contact legal@Idmisk.com.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
