"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { initClarity, trackPageView } from "@/lib/clarity";

function ClarityTrackerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialize Clarity on component mount
    initClarity();
  }, []);

  useEffect(() => {
    // Track page views on route changes (SPA tracking)
    if (pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
      trackPageView(url);
    }
  }, [pathname, searchParams]);

  return null;
}

export function ClarityTracker() {
  return (
    <Suspense fallback={null}>
      <ClarityTrackerInner />
    </Suspense>
  );
}
