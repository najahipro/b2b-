"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/hooks/use-language";

export default function CookiesPage() {
  const { language } = useLanguage();

  if (language === "fr") {
    return (
      <>
        <Header />
        <main className="pt-20">
          <section className="py-24 lg:py-32 bg-background">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
              <h1 className="text-4xl font-bold tracking-tight text-foreground">
                Politique relative aux cookies
              </h1>
              <p className="mt-4 text-muted-foreground">
                Dernière mise à jour : 1er janvier 2026
              </p>

              <div className="mt-12 prose prose-neutral max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground">
                <h2>Que sont les cookies</h2>
                <p>
                  Les cookies sont de petits fichiers texte qui sont stockés sur votre appareil lorsque vous visitez un site web. Ils aident les sites web à mémoriser vos préférences et à améliorer votre expérience de navigation.
                </p>

                <h2>Comment nous utilisons les cookies</h2>
                <p>Idmisk utilise des cookies pour les objectifs suivants :</p>

                <h3 className="text-lg font-semibold text-foreground mt-6">
                  Cookies essentiels
                </h3>
                <p>
                  Ces cookies sont nécessaires au bon fonctionnement du site web. Ils permettent des fonctionnalités de base telles que la sécurité, la gestion du réseau et l'accessibilité.
                </p>

                <h3 className="text-lg font-semibold text-foreground mt-6">
                  Cookies d'analyse
                </h3>
                <p>
                  Nous utilisons des cookies analytiques pour comprendre comment les visiteurs interagissent avec notre site web. Cela nous aide à améliorer notre site et à offrir une meilleure expérience utilisateur. Ces cookies collectent des informations de manière anonyme.
                </p>

                <h3 className="text-lg font-semibold text-foreground mt-6">
                  Cookies de préférence
                </h3>
                <p>
                  Ces cookies permettent à notre site de mémoriser les choix que vous faites (comme vos préférences linguistiques) et d'offrir des fonctionnalités améliorées et plus personnalisées.
                </p>

                <h2>Cookies tiers</h2>
                <p>
                  Nous pouvons utiliser des services tiers qui définissent leurs propres cookies, notamment :
                </p>
                <ul>
                  <li>Vercel Analytics pour le suivi des performances du site</li>
                  <li>Google Analytics pour l'analyse du comportement des visiteurs</li>
                </ul>

                <h2>Gestion des cookies</h2>
                <p>
                  Vous pouvez contrôler et gérer les cookies à l'aide des paramètres de votre navigateur. Veuillez noter que la suppression ou le blocage des cookies peut affecter votre expérience d'utilisation et que certaines fonctionnalités pourraient ne plus être disponibles.
                </p>
                <p>La plupart des navigateurs vous permettent de :</p>
                <ul>
                  <li>Voir quels cookies vous possédez et les supprimer individuellement</li>
                  <li>Bloquer les cookies tiers</li>
                  <li>Bloquer les cookies de sites particuliers</li>
                  <li>Bloquer tous les cookies</li>
                  <li>Supprimer tous les cookies lorsque vous fermez votre navigateur</li>
                </ul>

                <h2>Mises à jour de cette politique</h2>
                <p>
                  Nous pouvons mettre à jour cette politique relative aux cookies de temps à autre. Tout changement sera publié sur cette page avec une date de révision mise à jour.
                </p>

                <h2>Contactez-nous</h2>
                <p>
                  Si vous avez des questions sur notre utilisation des cookies, veuillez nous contacter à privacy@Idmisk.com.
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
              Cookie Policy
            </h1>
            <p className="mt-4 text-muted-foreground">
              Last updated: January 1, 2026
            </p>

            <div className="mt-12 prose prose-neutral max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground">
              <h2>What Are Cookies</h2>
              <p>
                Cookies are small text files that are stored on your device when
                you visit a website. They help websites remember your
                preferences and improve your browsing experience.
              </p>

              <h2>How We Use Cookies</h2>
              <p>Idmisk uses cookies for the following purposes:</p>

              <h3 className="text-lg font-semibold text-foreground mt-6">
                Essential Cookies
              </h3>
              <p>
                These cookies are necessary for the website to function
                properly. They enable core functionality such as security,
                network management, and accessibility.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">
                Analytics Cookies
              </h3>
              <p>
                We use analytics cookies to understand how visitors interact
                with our website. This helps us improve our site and provide a
                better user experience. These cookies collect information in an
                anonymous form.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">
                Preference Cookies
              </h3>
              <p>
                These cookies allow our website to remember choices you make
                (such as your language preference) and provide enhanced, more
                personalized features.
              </p>

              <h2>Third-Party Cookies</h2>
              <p>
                We may use third-party services that set their own cookies,
                including:
              </p>
              <ul>
                <li>Vercel Analytics for website performance monitoring</li>
                <li>Google Analytics for visitor behavior analysis</li>
              </ul>

              <h2>Managing Cookies</h2>
              <p>
                You can control and manage cookies through your browser
                settings. Please note that removing or blocking cookies may
                impact your user experience and some functionality may no longer
                be available.
              </p>
              <p>Most browsers allow you to:</p>
              <ul>
                <li>See what cookies you have and delete them individually</li>
                <li>Block third-party cookies</li>
                <li>Block cookies from particular sites</li>
                <li>Block all cookies</li>
                <li>Delete all cookies when you close your browser</li>
              </ul>

              <h2>Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time. Any changes
                will be posted on this page with an updated revision date.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions about our use of cookies, please contact
                us at privacy@Idmisk.com.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
