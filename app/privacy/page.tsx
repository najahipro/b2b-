"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/hooks/use-language";

export default function PrivacyPage() {
  const { language } = useLanguage();

  if (language === "fr") {
    return (
      <>
        <Header />
        <main className="pt-20">
          <section className="py-24 lg:py-32 bg-background">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
              <h1 className="text-4xl font-bold tracking-tight text-foreground">
                Politique de confidentialité
              </h1>
              <p className="mt-4 text-muted-foreground">
                Dernière mise à jour : 1er janvier 2026
              </p>

              <div className="mt-12 prose prose-neutral max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground">
                <h2>1. Introduction</h2>
                <p>
                  Idmisk (&quot;nous,&quot; &quot;notre&quot; ou &quot;nos&quot;) respecte votre vie privée et s'engage à protéger vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations lorsque vous visitez notre site web ou utilisez nos services.
                </p>

                <h2>2. Informations que nous collectons</h2>
                <p>
                  Nous collectons les informations que vous nous fournissez directement, notamment :
                </p>
                <ul>
                  <li>Coordonnées (nom, adresse e-mail, nom de l'entreprise)</li>
                  <li>Détails et exigences du projet</li>
                  <li>Historique des communications via nos canaux Discord</li>
                  <li>Informations de facturation et de paiement</li>
                </ul>

                <h2>3. Comment nous utilisons vos informations</h2>
                <p>Nous utilisons les informations collectées pour :</p>
                <ul>
                  <li>Fournir, maintenir et améliorer nos services</li>
                  <li>Communiquer avec vous au sujet des projets et des mises à jour</li>
                  <li>Traiter les paiements et envoyer les factures</li>
                  <li>Répondre à vos demandes et questions</li>
                  <li>Respecter les obligations légales</li>
                </ul>

                <h2>4. Partage des données</h2>
                <p>
                  Nous ne vendons pas vos informations personnelles. Nous pouvons partager vos données avec des prestataires de services tiers qui nous aident à exploiter notre entreprise (processeurs de paiement, hébergement cloud, etc.), mais uniquement dans la mesure nécessaire à la fourniture de leurs services.
                </p>

                <h2>5. Sécurité des données</h2>
                <p>
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
                </p>

                <h2>6. Vos droits</h2>
                <p>Selon votre situation géographique, vous pouvez avoir le droit de :</p>
                <ul>
                  <li>Accéder aux données personnelles que nous détenons à votre sujet</li>
                  <li>Demander la correction de données inexactes</li>
                  <li>Demander la suppression de vos données</li>
                  <li>Vous opposer au traitement de vos données ou le restreindre</li>
                  <li>Portabilité des données</li>
                </ul>

                <h2>7. Cookies</h2>
                <p>
                  Nous utilisons des cookies essentiels pour assurer le bon fonctionnement de notre site web. Nous pouvons également utiliser des cookies d'analyse pour comprendre comment les visiteurs interagissent avec notre site. Vous pouvez contrôler les cookies via les paramètres de votre navigateur.
                </p>

                <h2>8. Nous contacter</h2>
                <p>
                  Si vous avez des questions concernant cette politique de confidentialité ou nos pratiques en matière de données, veuillez nous contacter à privacy@Idmisk.com.
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
              Privacy Policy
            </h1>
            <p className="mt-4 text-muted-foreground">
              Last updated: January 1, 2026
            </p>

            <div className="mt-12 prose prose-neutral max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground">
              <h2>1. Introduction</h2>
              <p>
                Idmisk (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
                respects your privacy and is committed to protecting your
                personal data. This privacy policy explains how we collect, use,
                and safeguard your information when you visit our website or
                engage our services.
              </p>

              <h2>2. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us,
                including:
              </p>
              <ul>
                <li>Contact information (name, email address, company name)</li>
                <li>Project details and requirements</li>
                <li>Communication history through our Discord channels</li>
                <li>Payment and billing information</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Communicate with you about projects and updates</li>
                <li>Process payments and send invoices</li>
                <li>Respond to your inquiries and requests</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>4. Data Sharing</h2>
              <p>
                We do not sell your personal information. We may share your data
                with third-party service providers who assist us in operating
                our business (payment processors, cloud hosting, etc.), but only
                to the extent necessary for them to provide their services.
              </p>

              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures
                to protect your personal data against unauthorized access,
                alteration, disclosure, or destruction.
              </p>

              <h2>6. Your Rights</h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul>
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing of your data</li>
                <li>Data portability</li>
              </ul>

              <h2>7. Cookies</h2>
              <p>
                We use essential cookies to ensure our website functions
                properly. We may also use analytics cookies to understand how
                visitors interact with our site. You can control cookies through
                your browser settings.
              </p>

              <h2>8. Contact Us</h2>
              <p>
                If you have questions about this privacy policy or our data
                practices, please contact us at privacy@Idmisk.com.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
