"use client";

import Image from "next/image";
import { useLanguage } from "@/hooks/use-language";
import { CallToActionSection } from "@/components/cta-section";
import {
  Database,
  Layout,
  Server,
  Settings,
  ShieldCheck,
  Terminal,
  MessageSquare,
} from "lucide-react";

// --- Layout 1: Enterprise SaaS ---
function EnterpriseSaas() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-16 lg:pt-40 lg:pb-0">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-24">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
          {t("servicesDetailPage.saasTitle")}
        </h1>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-16">
          {t("servicesDetailPage.saasDesc")}
        </p>

        {/* Hero Image */}
        <div className="w-full max-w-5xl mx-auto px-4 md:px-0">
          <Image
            src="/assets/saas-dashboard-hero.png"
            alt="SaaS Dashboard Preview"
            width={1200}
            height={800}
            priority
            className="w-full max-w-5xl mx-auto rounded-2xl shadow-xl"
          />
        </div>
      </div>

      {/* Z-Pattern Section 1: Text Left, Image Right */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        <div className="flex-1 space-y-6">
          <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {t("servicesDetailPage.saasFeature1Title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("servicesDetailPage.saasFeature1Desc")}
          </p>
        </div>
        <div className="flex-1 w-full h-80 rounded-2xl bg-card border border-border shadow-md flex items-center justify-center p-8 relative overflow-hidden">
          {/* Abstract 3D Server Blocks */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="relative z-10 flex gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-16 h-32 md:w-24 md:h-48 bg-background border-2 border-secondary/20 rounded-lg shadow-xl translate-y-[10px] hover:-translate-y-2 transition-transform duration-500 flex flex-col p-2 gap-2"
              >
                <div className="w-full h-2 bg-secondary/40 rounded-full" />
                <div className="w-2/3 h-2 bg-foreground/20 rounded-full" />
                <div className="w-full h-full bg-secondary/5 rounded-md mt-auto flex items-end justify-center pb-2">
                  <Database className="w-6 h-6 text-secondary/50" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Z-Pattern Section 2: Image Left, Text Right */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
        <div className="flex-1 space-y-6">
          <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
            <Settings className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {t("servicesDetailPage.saasFeature2Title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("servicesDetailPage.saasFeature2Desc")}
          </p>
        </div>
        <div className="flex-1 w-full h-80 rounded-2xl bg-background border border-border shadow-lg flex flex-col overflow-hidden relative">
          {/* UI Mockup Dashboard */}
          <div className="h-10 w-full border-b border-border bg-card flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="h-4 w-32 bg-muted rounded mx-auto" />
          </div>
          <div className="flex-1 p-6 flex gap-6">
            <div className="w-1/3 space-y-3 border-r border-border pr-4">
              <div className="h-6 w-full bg-muted rounded-md" />
              <div className="h-6 w-3/4 bg-muted/50 rounded-md" />
              <div className="h-6 w-4/5 bg-muted/50 rounded-md" />
            </div>
            <div className="w-2/3 space-y-4">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <div className="h-5 w-24 bg-foreground/20 rounded" />
                <div className="h-6 w-12 bg-secondary/20 rounded-full" />
              </div>
              <div className="flex justify-between items-center border-b border-border pb-2">
                <div className="h-5 w-32 bg-foreground/20 rounded" />
                <div className="h-6 w-12 bg-secondary rounded-full relative">
                  <div className="w-4 h-4 bg-background rounded-full absolute right-1 top-1" />
                </div>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-2">
                <div className="h-5 w-20 bg-foreground/20 rounded" />
                <div className="h-6 w-12 bg-secondary rounded-full relative">
                  <div className="w-4 h-4 bg-background rounded-full absolute right-1 top-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Layout 2: Custom ERP & CRM ---
function ErpCrm() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-16 lg:pt-40 lg:pb-0">
      {/* 50/50 Split Hero */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-24 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 lg:pr-8">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            {t("servicesDetailPage.erpTitle")}
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            {t("servicesDetailPage.erpDesc")}
          </p>
        </div>
        <div className="flex-1 w-full h-[400px] bg-card border border-border shadow-2xl rounded-2xl overflow-hidden flex flex-col">
          {/* ERP Dashboard Mockup */}
          <div className="h-12 w-full border-b border-border flex items-center px-6 justify-between bg-background">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-secondary/20 rounded" />
              <div className="h-4 w-24 bg-foreground/20 rounded" />
            </div>
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-muted" />
              <div className="w-6 h-6 rounded-full bg-muted" />
            </div>
          </div>
          <div className="flex-1 flex p-6 gap-6 bg-card/50">
            <div className="w-1/4 flex flex-col gap-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-8 w-full bg-background border border-border rounded-md"
                />
              ))}
            </div>
            <div className="w-3/4 flex flex-col gap-6">
              <div className="flex gap-4 h-24">
                <div className="flex-1 bg-background border border-border rounded-xl p-4 flex flex-col justify-between">
                  <div className="h-3 w-16 bg-muted rounded" />
                  <div className="h-6 w-24 bg-secondary/40 rounded" />
                </div>
                <div className="flex-1 bg-background border border-border rounded-xl p-4 flex flex-col justify-between">
                  <div className="h-3 w-16 bg-muted rounded" />
                  <div className="h-6 w-20 bg-foreground/40 rounded" />
                </div>
              </div>
              <div className="flex-1 bg-background border border-border rounded-xl p-4">
                <div className="h-full w-full border-b-2 border-l-2 border-muted relative">
                  <svg
                    className="absolute inset-0 w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,80 Q50,20 100,50 T200,30 T300,60"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="text-secondary"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="bg-muted/30 border-y border-border py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <Database className="w-10 h-10 text-secondary mb-6" />
              <h3 className="text-xl font-bold mb-3">
                {t("servicesDetailPage.erpCard1Title")}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("servicesDetailPage.erpCard1Desc")}
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <Layout className="w-10 h-10 text-secondary mb-6" />
              <h3 className="text-xl font-bold mb-3">
                {t("servicesDetailPage.erpCard2Title")}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("servicesDetailPage.erpCard2Desc")}
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <svg
                className="w-10 h-10 text-secondary mb-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <h3 className="text-xl font-bold mb-3">
                {t("servicesDetailPage.erpCard3Title")}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("servicesDetailPage.erpCard3Desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Layout 3: Scalable Backend ---
function BackendApis() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-32 pb-16 lg:pt-40 lg:pb-0 bg-[#09090b] text-neutral-50 dark relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Dark Hero */}
        <div className="text-center mb-16 relative">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-white text-balance">
            {t("servicesDetailPage.backendTitle")}
          </h1>
          <p className="text-lg lg:text-xl text-neutral-400 max-w-2xl mx-auto">
            {t("servicesDetailPage.backendDesc")}
          </p>
        </div>

        {/* Code Editor Window */}
        <div className="max-w-4xl mx-auto bg-[#0d1117] border border-neutral-800 rounded-2xl overflow-hidden shadow-[0_0_50px_-12px_rgba(var(--secondary),0.3)] font-mono">
          <div className="h-12 bg-[#161b22] border-b border-neutral-800 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-neutral-700" />
            <div className="w-3 h-3 rounded-full bg-neutral-700" />
            <div className="w-3 h-3 rounded-full bg-neutral-700" />
            <div className="mx-auto text-xs text-neutral-400 flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              infrastructure.ts
            </div>
          </div>
          <div className="p-6 md:p-10 text-sm md:text-base leading-relaxed text-neutral-300 overflow-x-auto">
            <p>
              <span className="text-purple-400">import</span> {"{"}{" "}
              BackendArchitecture {"}"}{" "}
              <span className="text-purple-400">from</span>{" "}
              <span className="text-green-300">'@Idmisk/core'</span>;
            </p>
            <br />
            <p>
              <span className="text-blue-400">const</span> infrastructure ={" "}
              <span className="text-blue-400">new</span> BackendArchitecture(
              {"{"}
            </p>
            <div className="pl-6 md:pl-12 space-y-4 my-4 border-l-2 border-neutral-800 ml-2">
              <div className="flex items-start gap-4">
                <span className="text-red-300">features:</span>
                <ul className="text-neutral-400 space-y-2">
                  <li>
                    <span className="text-blue-300">
                      "{t("servicesDetailPage.backendFeature1Title")}"
                    </span>
                    ,{" "}
                    <span className="text-neutral-500">
                      // {t("servicesDetailPage.backendFeature1Desc")}
                    </span>
                  </li>
                  <li>
                    <span className="text-blue-300">
                      "{t("servicesDetailPage.backendFeature2Title")}"
                    </span>
                    ,{" "}
                    <span className="text-neutral-500">
                      // {t("servicesDetailPage.backendFeature2Desc")}
                    </span>
                  </li>
                  <li>
                    <span className="text-blue-300">
                      "{t("servicesDetailPage.backendFeature3Title")}"
                    </span>
                    ,{" "}
                    <span className="text-neutral-500">
                      // {t("servicesDetailPage.backendFeature3Desc")}
                    </span>
                  </li>
                  <li>
                    <span className="text-blue-300">
                      "{t("servicesDetailPage.backendFeature4Title")}"
                    </span>
                    ,{" "}
                    <span className="text-neutral-500">
                      // {t("servicesDetailPage.backendFeature4Desc")}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <p>{"}"});</p>
            <br />
            <p>
              <span className="text-blue-400">await</span> infrastructure.
              <span className="text-yellow-200">deploy</span>();{" "}
              <span className="text-neutral-500">// Ready for scale 🚀</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Layout 4: Modern Frontend ---
function ModernFrontend() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-16 lg:pt-40 lg:pb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            {t("servicesDetailPage.frontendTitle")}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t("servicesDetailPage.frontendDesc")}
          </p>
        </div>

        {/* Asymmetric Grid Section */}
        <div className="relative">
          {/* Purple Glow Effect */}
          <div className="absolute inset-0 bg-purple-400/10 blur-[100px] -z-10 rounded-full" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {/* Rectangular Card (Left) */}
            <div className="md:col-span-2 rounded-3xl shadow-lg bg-white/80 dark:bg-card/80 backdrop-blur-sm p-6 flex flex-col justify-between border border-border">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3">
                  {t("servicesDetailPage.frontendCard1Title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("servicesDetailPage.frontendCard1Desc")}
                </p>
              </div>
              {/* Wide rectangular image */}
              <div className="w-full h-64 bg-muted/50 rounded-2xl relative overflow-hidden flex items-center justify-center border border-border/50">
                 <Image
                   src="/assets/frontend-speed-hero.png"
                   alt="Fast Loading Pages"
                   width={800}
                   height={400}
                   className="w-full h-full object-cover"
                 />
              </div>
            </div>

            {/* Square Card (Right) */}
            <div className="md:col-span-1 rounded-3xl shadow-lg bg-white/80 dark:bg-card/80 backdrop-blur-sm p-6 flex flex-col justify-between border border-border">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">
                  {t("servicesDetailPage.frontendCard2Title")}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t("servicesDetailPage.frontendCard2Desc")}
                </p>
              </div>
              {/* Square image */}
              <div className="w-full aspect-square bg-muted/50 rounded-2xl relative overflow-hidden flex items-center justify-center border border-border/50">
                 <Image
                   src="/assets/frontend-dashboard-square.png"
                   alt="Interactive Dashboards"
                   width={400}
                   height={400}
                   className="w-full h-full object-cover"
                 />
              </div>
            </div>

            {/* Medium Tile 2 */}
            <div className="md:col-span-3 bg-card border border-border rounded-3xl p-8 shadow-sm flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
              <div className="md:w-1/2 relative z-10">
                <h3 className="text-2xl font-bold mb-3">
                  {t("servicesDetailPage.frontendCard3Title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("servicesDetailPage.frontendCard3Desc")}
                </p>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0 flex justify-end relative">
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-medium shadow-lg hover:scale-105 transition-transform">
                    Idmisk
                  </button>
                  <div className="px-6 py-3 bg-background border border-border rounded-full flex items-center justify-center opacity-50">
                    <div className="w-16 h-2 bg-muted rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Layout 5: Secure E-commerce ---
function SecureEcommerce() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-16 lg:pt-40 lg:pb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            {t("servicesDetailPage.ecommerceTitle")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("servicesDetailPage.ecommerceDesc")}
          </p>
        </div>

        {/* Step-by-Step Flowchart Pipeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[23px] top-10 bottom-10 w-0.5 bg-border z-0" />

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="flex gap-8 relative z-10">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-card border-2 border-secondary flex items-center justify-center shadow-lg">
                <Server className="w-5 h-5 text-secondary" />
              </div>
              <div className="pt-2">
                <div className="text-sm font-bold text-secondary tracking-widest uppercase mb-2">
                  Step 1
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  {t("servicesDetailPage.ecommerceStep1Title")}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {t("servicesDetailPage.ecommerceStep1Desc")}
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-8 relative z-10">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-card border-2 border-secondary flex items-center justify-center shadow-lg">
                <svg
                  className="w-5 h-5 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="pt-2">
                <div className="text-sm font-bold text-secondary tracking-widest uppercase mb-2">
                  Step 2
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  {t("servicesDetailPage.ecommerceStep2Title")}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {t("servicesDetailPage.ecommerceStep2Desc")}
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-8 relative z-10">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-card border-2 border-[#25D366] flex items-center justify-center shadow-lg">
                <MessageSquare className="w-5 h-5 text-[#25D366]" />
              </div>
              <div className="pt-2">
                <div className="text-sm font-bold text-[#25D366] tracking-widest uppercase mb-2">
                  Step 3
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  {t("servicesDetailPage.ecommerceStep3Title")}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {t("servicesDetailPage.ecommerceStep3Desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServiceDetailContent({ slug }: { slug: string }) {
  return (
    <>
      <main className="min-h-screen">
        {slug === "enterprise-saas" && <EnterpriseSaas />}
        {slug === "erp-crm" && <ErpCrm />}
        {slug === "backend-apis" && <BackendApis />}
        {slug === "modern-frontend" && <ModernFrontend />}
        {slug === "secure-ecommerce" && <SecureEcommerce />}
        <CallToActionSection />
      </main>
    </>
  );
}
