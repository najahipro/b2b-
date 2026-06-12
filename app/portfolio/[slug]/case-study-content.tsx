"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useLanguage } from "@/hooks/use-language";

export default function CaseStudyContent({ slug }: { slug: string }) {
  const { t } = useLanguage();

  const projectKeyMap: Record<string, string> = {
    "alloclients-erp": "alloclients",
    "numa-platform": "numa",
    "medtrack-mobile": "medtrack",
  };

  const key = projectKeyMap[slug];
  if (!key) {
    notFound();
  }

  // Define static parts that are not translated or are array structures
  const techStacks: Record<string, string[]> = {
    "alloclients-erp": [
      "Next.js",
      "PostgreSQL",
      "Redis",
      "Stripe",
      "Vercel",
      "WebSockets",
    ],
    "numa-platform": [
      "React",
      "Node.js",
      "Redis",
      "Google Cloud Platform",
      "BigQuery",
      "TensorFlow",
    ],
    "medtrack-mobile": ["React Native", "Firebase", "AWS", "Node.js", "PostgreSQL"],
  };

  const techStack = techStacks[slug] || [];

  // Since translations might have dynamic arrays, let's fetch them using t()
  const title = t(`portfolioPage.projects.${key}.title`);
  const category = t(`portfolioPage.projects.${key}.category`);
  const heroDescription = t(`portfolioPage.projects.${key}.heroDescription`);
  const challenge = t(`portfolioPage.projects.${key}.challenge`);
  const solution = t(`portfolioPage.projects.${key}.solution`);
  const timeline = t(`portfolioPage.projects.${key}.timeline`);
  
  // Results can be mapped
  // Note: we have 4 results for each
  const results = [
    {
      value: key === "alloclients" ? "500+" : key === "numa" ? "$2M+" : "50K+",
      label: t(`portfolioPage.projects.${key}.results.0.label`),
      description: t(`portfolioPage.projects.${key}.results.0.description`),
    },
    {
      value: key === "alloclients" ? "99.9%" : key === "numa" ? "45%" : "4.8",
      label: t(`portfolioPage.projects.${key}.results.1.label`),
      description: t(`portfolioPage.projects.${key}.results.1.description`),
    },
    {
      value: key === "alloclients" ? "10TB" : key === "numa" ? "12" : "HIPAA",
      label: t(`portfolioPage.projects.${key}.results.2.label`),
      description: t(`portfolioPage.projects.${key}.results.2.description`),
    },
    {
      value: key === "alloclients" ? "45%" : key === "numa" ? "98%" : "60%",
      label: t(`portfolioPage.projects.${key}.results.3.label`),
      description: t(`portfolioPage.projects.${key}.results.3.description`),
    },
  ];

  // Features count: alloclients (6), numa (6), medtrack (6)
  const features = [];
  for (let i = 0; i < 6; i++) {
    const featureText = t(`portfolioPage.projects.${key}.features.${i}`);
    if (featureText && featureText !== `portfolioPage.projects.${key}.features.${i}`) {
      features.push(featureText);
    }
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <svg
                className="mr-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              {t("portfolioPage.backToPortfolio")}
            </Link>

            <span className="text-sm font-medium uppercase tracking-wider text-secondary">
              {category}
            </span>
            <h1 className="mt-4 text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              {title}
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed">
              {heroDescription}
            </p>

            {/* Quick Stats */}
            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <span className="text-sm text-muted-foreground">
                  {t("portfolioPage.timeline")}
                </span>
                <p className="mt-1 text-lg font-semibold text-foreground">
                  {timeline}
                </p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">
                  {t("portfolioPage.team")}
                </span>
                <p className="mt-1 text-lg font-semibold text-foreground">
                  {t("portfolioPage.teamSizeVal")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Preview */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="aspect-[16/9] bg-card rounded-2xl border border-border overflow-hidden flex items-center justify-center">
            <div className="w-1/2 h-1/2 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
              <span className="text-8xl font-bold text-secondary/30">
                {title ? title[0] : ""}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-12">
            {t("portfolioPage.resultsImpact")}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result) => (
              <div
                key={result.label}
                className="p-6 bg-card rounded-xl border border-border"
              >
                <div className="text-3xl lg:text-4xl font-bold text-secondary">
                  {result.value}
                </div>
                <div className="mt-2 text-sm font-medium text-foreground">
                  {result.label}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {result.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-24 lg:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-6">
                {t("portfolioPage.theChallenge")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {challenge}
              </p>
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-6">
                {t("portfolioPage.ourSolution")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Tech Stack */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Features */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-8">
                {t("portfolioPage.keyFeatures")}
              </h2>
              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="mt-1 w-5 h-5 text-secondary flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-8">
                {t("portfolioPage.techStack")}
              </h2>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm font-medium bg-card rounded-lg border border-border text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-foreground text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance">
            {t("portfolioPage.wantSimilarResults")}
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            {t("portfolioPage.wantSimilarDesc")}
          </p>
          <div className="mt-10">
            <Link
              href="/start"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
            >
              {t("portfolioPage.startProject")}
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
