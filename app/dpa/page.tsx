"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/hooks/use-language";

export default function DPAPage() {
  const { language } = useLanguage();

  if (language === "fr") {
    return (
      <>
        <Header />
        <main className="pt-20">
          <section className="py-24 lg:py-32 bg-background">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
              <h1 className="text-4xl font-bold tracking-tight text-foreground">
                Accord de traitement des données (DPA)
              </h1>
              <p className="mt-4 text-muted-foreground">
                Dernière mise à jour : 1er janvier 2026
              </p>

              <div className="mt-12 prose prose-neutral max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground">
                <h2>1. Objet</h2>
                <p>
                  Le présent accord de traitement des données (&quot;DPA&quot;) fait partie intégrante de l'accord conclu entre Idmisk (&quot;Sous-traitant&quot;) et le Client (&quot;Responsable du traitement&quot;) pour la fourniture de services de développement de logiciels. Ce DPA définit les conditions applicables lorsque des données personnelles sont traitées par le Sous-traitant pour le compte du Responsable du traitement.
                </p>

                <h2>2. Définitions</h2>
                <ul>
                  <li>
                    <strong>Données personnelles :</strong> Toute information relative à une personne physique identifiée ou identifiable.
                  </li>
                  <li>
                    <strong>Traitement :</strong> Toute opération effectuée sur des données personnelles.
                  </li>
                  <li>
                    <strong>Personne concernée :</strong> La personne physique à laquelle se rapportent les données personnelles.
                  </li>
                  <li>
                    <strong>RGPD :</strong> Règlement général sur la protection des données (UE) 2016/679.
                  </li>
                </ul>

                <h2>3. Traitement des données personnelles</h2>
                <p>
                  Le Sous-traitant ne traitera les données personnelles que sur instructions documentées du Responsable du traitement, à moins qu'il n'y soit tenu par la loi applicable. Le Sous-traitant informera immédiatement le Responsable du traitement s'il estime qu'une instruction enfreint la législation sur la protection des données.
                </p>

                <h2>4. Confidentialité</h2>
                <p>
                  Le Sous-traitant veille à ce que toutes les personnes autorisées à traiter les données personnelles se soient engagées à respecter la confidentialité ou soient soumises à une obligation légale de confidentialité appropriée.
                </p>

                <h2>5. Mesures de sécurité</h2>
                <p>
                  Le Sous-traitant met en œuvre les mesures techniques et organisationnelles appropriées, notamment :
                </p>
                <ul>
                  <li>Le chiffrement des données personnelles</li>
                  <li>
                    La capacité de garantir la confidentialité, l'intégrité et la disponibilité constantes des systèmes
                  </li>
                  <li>
                    La capacité de rétablir la disponibilité des données personnelles et l'accès à celles-ci dans des délais appropriés
                  </li>
                  <li>Des tests et évaluations réguliers des mesures de sécurité</li>
                </ul>

                <h2>6. Sous-traitants ultérieurs</h2>
                <p>
                  Le Sous-traitant ne peut pas engager un autre sous-traitant sans l'autorisation écrite préalable, spécifique ou générale, du Responsable du traitement. Une liste des sous-traitants agréés est disponible sur demande.
                </p>

                <h2>7. Droits des personnes concernées</h2>
                <p>
                  Le Sous-traitant assiste le Responsable du traitement à répondre aux demandes des personnes concernées exerçant leurs droits en vertu de la loi sur la protection des données, y compris les demandes d'accès, de rectification, d'effacement et de portabilité.
                </p>

                <h2>8. Notification de violation de données</h2>
                <p>
                  Le Sous-traitant notifie au Responsable du traitement toute violation de données personnelles dans les meilleurs délais après en avoir pris connaissance, en fournissant des informations suffisantes pour lui permettre de remplir ses obligations de signalement ou d'information.
                </p>

                <h2>9. Suppression des données</h2>
                <p>
                  À la fin des services, le Sous-traitant supprime ou renvoie, au choix du Responsable du traitement, toutes les données personnelles et supprime les copies existantes, à moins que la conservation ne soit requise par la loi applicable.
                </p>

                <h2>10. Droits d'audit</h2>
                <p>
                  Le Sous-traitant met à la disposition du Responsable du traitement toutes les informations nécessaires pour démontrer le respect du présent DPA et permet la réalisation d'audits par le Responsable du traitement ou un auditeur mandaté.
                </p>

                <h2>11. Transferts internationaux</h2>
                <p>
                  Le Sous-traitant ne transfère pas de données personnelles en dehors de l'Espace économique européen sans garanties appropriées, telles que des clauses contractuelles types ou des décisions d'adéquation.
                </p>

                <h2>12. Contact</h2>
                <p>
                  Pour toute question concernant ce DPA ou pour demander une copie signée pour votre organisation, veuillez nous contacter à dpa@Idmisk.com.
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
              Data Processing Agreement
            </h1>
            <p className="mt-4 text-muted-foreground">
              Last updated: January 1, 2026
            </p>

            <div className="mt-12 prose prose-neutral max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground">
              <h2>1. Purpose</h2>
              <p>
                This Data Processing Agreement (&quot;DPA&quot;) forms part of
                the agreement between Idmisk (&quot;Processor&quot;) and the
                Client (&quot;Controller&quot;) for the provision of software
                development services. This DPA sets out the terms that apply
                when Personal Data is processed by the Processor on behalf of
                the Controller.
              </p>

              <h2>2. Definitions</h2>
              <ul>
                <li>
                  <strong>Personal Data:</strong> Any information relating to an
                  identified or identifiable natural person
                </li>
                <li>
                  <strong>Processing:</strong> Any operation performed on
                  Personal Data
                </li>
                <li>
                  <strong>Data Subject:</strong> The individual to whom Personal
                  Data relates
                </li>
                <li>
                  <strong>GDPR:</strong> General Data Protection Regulation (EU)
                  2016/679
                </li>
              </ul>

              <h2>3. Processing of Personal Data</h2>
              <p>
                The Processor shall only process Personal Data on documented
                instructions from the Controller, unless required to do so by
                applicable law. The Processor shall immediately inform the
                Controller if it believes an instruction infringes data
                protection legislation.
              </p>

              <h2>4. Confidentiality</h2>
              <p>
                The Processor shall ensure that all personnel authorized to
                process Personal Data have committed themselves to
                confidentiality or are under an appropriate statutory obligation
                of confidentiality.
              </p>

              <h2>5. Security Measures</h2>
              <p>
                The Processor shall implement appropriate technical and
                organizational measures including:
              </p>
              <ul>
                <li>Encryption of Personal Data</li>
                <li>
                  Ability to ensure ongoing confidentiality, integrity, and
                  availability
                </li>
                <li>
                  Ability to restore availability and access to Personal Data in
                  a timely manner
                </li>
                <li>Regular testing and evaluation of security measures</li>
              </ul>

              <h2>6. Sub-processors</h2>
              <p>
                The Processor shall not engage another processor without prior
                specific or general written authorization of the Controller. A
                list of approved sub-processors is available upon request.
              </p>

              <h2>7. Data Subject Rights</h2>
              <p>
                The Processor shall assist the Controller in responding to
                requests from Data Subjects exercising their rights under
                applicable data protection law, including access, rectification,
                erasure, and portability requests.
              </p>

              <h2>8. Data Breach Notification</h2>
              <p>
                The Processor shall notify the Controller without undue delay
                after becoming aware of a Personal Data breach, providing
                sufficient information to enable the Controller to meet any
                obligations to report or inform Data Subjects.
              </p>

              <h2>9. Data Deletion</h2>
              <p>
                Upon termination of services, the Processor shall, at the choice
                of the Controller, delete or return all Personal Data and delete
                existing copies unless storage is required by applicable law.
              </p>

              <h2>10. Audit Rights</h2>
              <p>
                The Processor shall make available to the Controller all
                information necessary to demonstrate compliance with this DPA
                and allow for and contribute to audits conducted by the
                Controller or a mandated auditor.
              </p>

              <h2>11. International Transfers</h2>
              <p>
                The Processor shall not transfer Personal Data outside the
                European Economic Area without appropriate safeguards in place,
                such as Standard Contractual Clauses or adequacy decisions.
              </p>

              <h2>12. Contact</h2>
              <p>
                For questions about this DPA or to request a signed copy for
                your organization, please contact dpa@Idmisk.com.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
