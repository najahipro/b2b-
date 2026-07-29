"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/hooks/use-language";
import { motion, AnimatePresence } from "framer-motion";

export default function BookCallPage() {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-32 pb-16 lg:pt-40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              {t("bookPage.title")}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t("bookPage.subtitle")}
            </p>
          </div>

          <div className="relative border border-border rounded-2xl bg-card shadow-xl overflow-hidden min-h-[700px] flex items-center justify-center">
            {/* Loader Animation */}
            <AnimatePresence>
              {!isLoaded && (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 z-50 bg-background flex flex-col items-center justify-center gap-4"
                >
                  <div className="relative flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border-4 border-muted animate-spin border-t-secondary" />
                    <div className="absolute w-8 h-8 rounded-full bg-secondary/10 animate-pulse" />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground animate-pulse mt-2">
                    {t("bookPage.loading")}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Calendly Iframe */}
            <iframe
              src="https://calendly.com/idmisk-agency/30min?hide_event_type_details=1&hide_gdpr_banner=1"
              width="100%"
              height="700px"
              frameBorder="0"
              scrolling="yes"
              onLoad={() => setIsLoaded(true)}
              className="w-full h-[700px]"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
