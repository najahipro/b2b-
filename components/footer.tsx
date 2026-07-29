"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Globe, Github, Linkedin, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { Logo } from "./logo";
import { trackEvent } from "@/lib/clarity";

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
  </svg>
);

export function Footer() {
  const { t } = useLanguage()

  return (
    <>
      <footer className="bg-background text-foreground border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Left Column (Brand) */}
            <div>
              <Link href="/" className="block mb-6 gap-2">
                <Logo className="h-12 w-auto object-contain" />
              </Link>
              <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
                {t('footer.desc')}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="https://idmisk.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-secondary transition-colors"
                  aria-label="Website"
                  onClick={() => trackEvent("external_link_click", { url: "https://idmisk.com/" })}
                >
                  <Globe className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/idmisk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-secondary transition-colors"
                  aria-label="GitHub"
                  onClick={() => trackEvent("github_click", { url: "https://github.com/idmisk" })}
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/idmisk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-secondary transition-colors"
                  aria-label="LinkedIn"
                  onClick={() => trackEvent("linkedin_click", { url: "https://www.linkedin.com/company/idmisk" })}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/devstudio130/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-secondary transition-colors"
                  aria-label="Instagram"
                  onClick={() => trackEvent("external_link_click", { url: "https://www.instagram.com/devstudio130/" })}
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://discord.gg/yourserver"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-secondary transition-colors"
                  aria-label="Discord"
                  onClick={() => trackEvent("external_link_click", { url: "https://discord.gg/yourserver" })}
                >
                  <DiscordIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61591365110950"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-secondary transition-colors"
                  aria-label="Facebook"
                  onClick={() => trackEvent("external_link_click", { url: "https://www.facebook.com/profile.php?id=61591365110950" })}
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Middle Column (Contact Us) */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4 relative inline-block">
                {t('footer.contactUs')}
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-secondary"></span>
              </h3>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Phone className="w-5 h-5 text-secondary shrink-0" />
                  <a href="tel:+212604545894" className="hover:text-foreground transition-colors">+212 604 545 894</a>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Mail className="w-5 h-5 text-secondary shrink-0" />
                  <a href="mailto:contact@idmisk.com" className="hover:text-foreground transition-colors">contact@idmisk.com</a>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground text-sm">
                  <MapPin className="w-5 h-5 text-secondary shrink-0" />
                  <span>Casablanca, Morocco</span>
                </li>
              </ul>
            </div>

            {/* Legal & Company Info */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4 relative inline-block">
                {t('footer.registeredOffice')}
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-secondary"></span>
              </h3>
              <ul className="mt-6 space-y-2 text-sm text-gray-400">
                <li className="font-medium text-foreground">Idmisk Agency</li>
                <li>(Création Site Web & Marketing Digital)</li>
                <li>HAY IFRIQUIA RUE 21 N 06, Casablanca – Maroc</li>
                <li className="pt-2">ICE : 003734117000059</li>
                <li>IF : 66291238</li>
                <li>Patente : 37301578</li>
              </ul>
            </div>

            {/* Right Column (Newsletter) */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4 relative inline-block">
                {t('footer.newsletter')}
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-secondary"></span>
              </h3>
              <p className="mt-6 text-sm text-muted-foreground mb-4 leading-relaxed">
                {t('footer.newsletterDesc')}
              </p>
              <form className="space-y-3" onSubmit={(e) => {
                e.preventDefault();
                trackEvent("newsletter_subscribe_attempt");
              }}>
                <input
                  suppressHydrationWarning
                  type="email"
                  required
                  placeholder={t('footer.newsletterPlaceholder')}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                />
                <button
                  suppressHydrationWarning
                  type="submit"
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-medium py-3 rounded-lg transition-colors text-sm"
                >
                  {t('footer.subscribe')}
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-center items-center">
            <p className="text-sm text-muted-foreground">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
