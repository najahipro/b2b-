"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/hooks/use-language";

export default function TermsPage() {
  const { language } = useLanguage();

  if (language === "fr") {
    return (
      <>
        <Header />
        <main className="pt-20">
          <section className="py-24 lg:py-32 bg-background">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
              <h1 className="text-4xl font-bold tracking-tight text-foreground">
                Conditions d'utilisation
              </h1>
              <p className="mt-4 text-muted-foreground">
                Dernière mise à jour : 1er janvier 2026
              </p>

              <div className="mt-12 prose prose-neutral max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground">
                <h2>1. Acceptation des conditions</h2>
                <p>
                  En accédant à notre site web ou en utilisant nos services, vous acceptez d'être lié par ces conditions d'utilisation. Si vous n'acceptez pas une partie de ces conditions, vous ne pouvez pas accéder à nos services.
                </p>

                <h2>2. Services</h2>
                <p>
                  Idmisk fournit des services de développement de logiciels sur mesure, y compris, mais sans s'y limiter, des plateformes SaaS, des systèmes ERP, des applications mobiles et du conseil en infrastructure cloud.
                </p>

                <h2>3. Accords de projet</h2>
                <p>
                  Tous les projets de développement sont régis par des accords de projet distincts qui définissent la portée, le calendrier, les livrables et les conditions de paiement. Ces accords de projet complètent les présentes conditions générales d'utilisation.
                </p>

                <h2>4. Propriété intellectuelle</h2>
                <p>
                  Dès le paiement intégral, les clients reçoivent la propriété exclusive de toute propriété intellectuelle, de tout code source et de tous les actifs associés créés pour leur projet. Idmisk ne conserve aucun droit sur les codes ou conceptions spécifiques au client.
                </p>
                <p>
                  Idmisk peut conserver le droit d'utiliser des connaissances générales, des techniques et des composants non exclusifs développés lors de projets pour des travaux futurs.
                </p>

                <h2>5. Confidentialité</h2>
                <p>
                  Les deux parties s'engagent à préserver la confidentialité des informations exclusives partagées au cours de la collaboration. Cela comprend les stratégies commerciales, les spécifications techniques et toute information désignée comme confidentielle.
                </p>

                <h2>6. Conditions de paiement</h2>
                <p>
                  Les conditions de paiement sont spécifiées dans les accords de projet individuels. Les retards de paiement peuvent entraîner des frais supplémentaires et la suspension des services.
                </p>

                <h2>7. Limitation de responsabilité</h2>
                <p>
                  Idmisk ne sera pas responsable des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs résultant de l'utilisation de nos services. Notre responsabilité totale ne dépassera pas le montant payé pour les services spécifiques en question.
                </p>

                <h2>8. Résiliation</h2>
                <p>
                  Chaque partie peut résilier un accord de projet moyennant un préavis écrit tel que spécifié dans l'accord. En cas de résiliation, les clients reçoivent tous les travaux et codes terminés jusqu'à cette date.
                </p>

                <h2>9. Droit applicable</h2>
                <p>
                  Les présentes conditions sont régies et interprétées conformément aux lois en vigueur. Les litiges seront résolus par voie de négociation d'abord, puis par arbitrage contraignant si nécessaire.
                </p>

                <h2>10. Modifications des conditions</h2>
                <p>
                  Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications seront publiées sur cette page avec une date de révision mise à jour. L'utilisation continue de nos services constitue l'acceptation des conditions modifiées.
                </p>

                <h2>11. Contact</h2>
                <p>
                  Pour toute question concernant ces conditions d'utilisation, veuillez nous contacter à legal@Idmisk.com.
                </p>
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
              Terms of Service
            </h1>
            <p className="mt-4 text-muted-foreground">
              Last updated: January 1, 2026
            </p>

            <div className="mt-12 prose prose-neutral max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground">
              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing our website or engaging our services, you agree to
                be bound by these Terms of Service. If you disagree with any
                part of these terms, you may not access our services.
              </p>

              <h2>2. Services</h2>
              <p>
                Idmisk provides custom software development services including,
                but not limited to, SaaS platforms, ERP systems, mobile
                applications, and cloud infrastructure consulting.
              </p>

              <h2>3. Project Agreements</h2>
              <p>
                All development projects are governed by separate project
                agreements that outline scope, timeline, deliverables, and
                payment terms. These project agreements supplement these general
                Terms of Service.
              </p>

              <h2>4. Intellectual Property</h2>
              <p>
                Upon full payment, clients receive complete ownership of all
                intellectual property, source code, and related assets created
                during their project. Idmisk retains no rights to
                client-specific code or designs.
              </p>
              <p>
                Idmisk may retain the right to use general knowledge,
                techniques, and non-proprietary components developed during
                projects for future work.
              </p>

              <h2>5. Confidentiality</h2>
              <p>
                Both parties agree to maintain confidentiality of proprietary
                information shared during the engagement. This includes business
                strategies, technical specifications, and any information marked
                as confidential.
              </p>

              <h2>6. Payment Terms</h2>
              <p>
                Payment terms are specified in individual project agreements.
                Late payments may incur additional fees and may result in
                suspension of services.
              </p>

              <h2>7. Limitation of Liability</h2>
              <p>
                Idmisk shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages resulting from the
                use of our services. Our total liability shall not exceed the
                amount paid for the specific services in question.
              </p>

              <h2>8. Termination</h2>
              <p>
                Either party may terminate a project agreement with written
                notice as specified in the agreement. Upon termination, clients
                receive all completed work and code up to that point.
              </p>

              <h2>9. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance
                with applicable laws. Disputes shall be resolved through
                negotiation first, then binding arbitration if necessary.
              </p>

              <h2>10. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes
                will be posted on this page with an updated revision date.
                Continued use of our services constitutes acceptance of modified
                terms.
              </p>

              <h2>11. Contact</h2>
              <p>
                For questions about these Terms of Service, please contact us at
                legal@Idmisk.com.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
