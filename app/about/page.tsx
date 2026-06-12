"use client";

import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/hooks/use-language";
import { CallToActionSection } from "@/components/cta-section";

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      title: t("aboutPage.value1Title"),
      description: t("aboutPage.value1Desc"),
    },
    {
      title: t("aboutPage.value2Title"),
      description: t("aboutPage.value2Desc"),
    },
    {
      title: t("aboutPage.value3Title"),
      description: t("aboutPage.value3Desc"),
    },
    {
      title: t("aboutPage.value4Title"),
      description: t("aboutPage.value4Desc"),
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-wider text-secondary">
                {t("aboutPage.badge")}
              </p>
              <h1 className="mt-4 text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
                {t("aboutPage.title")}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {t("aboutPage.subheadline")}
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 lg:py-32 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-6">
                  {t("aboutPage.philosophyTitle")}
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>{t("aboutPage.philosophyDesc1")}</p>
                  <p>{t("aboutPage.philosophyDesc2")}</p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-6">
                  {t("aboutPage.moroccoTitle")}
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>{t("aboutPage.moroccoDesc1")}</p>
                  <p>{t("aboutPage.moroccoDesc2")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Architect Section */}
        <section className="py-24 lg:py-32 bg-muted relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16 text-center">
              <p className="text-sm font-medium uppercase tracking-wider text-secondary">
                {t("aboutPage.architectBadge")}
              </p>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                {t("aboutPage.architectTitle")}
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="p-8 lg:p-12 bg-card rounded-3xl border border-border shadow-sm flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Profile Image */}
                <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-2xl bg-secondary/10 flex items-center justify-center border-2 border-secondary/20 overflow-hidden relative">
                  <Image
                    src="/salah-profile.jpg"
                    alt="Salah E. - Lead Full-Stack Engineer"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-foreground">
                    Salah E.
                  </h3>
                  <p className="text-secondary font-medium mt-1">
                    {t("aboutPage.architectRole")}
                  </p>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {t("aboutPage.architectDesc")}
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2">
                    {[
                      "Laravel",
                      "React.js",
                      "Node.js",
                      "Python",
                      "Cloud VPS & DevOps",
                      "System Architecture",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-medium bg-muted rounded-full text-foreground/80 border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="mb-16">
              <p className="text-sm font-medium uppercase tracking-wider text-secondary">
                {t("aboutPage.valuesBadge")}
              </p>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                {t("aboutPage.valuesTitle")}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-8 bg-card rounded-2xl border border-border shadow-sm"
                >
                  <h3 className="text-xl font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CallToActionSection />
      </main>
      <Footer />
    </>
  );
}
