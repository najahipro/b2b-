export const CLARITY_PROJECT_ID = "xait9t7qkn";

// Initialize Clarity only once
export const initClarity = () => {
  if (typeof window === "undefined") return;
  if ((window as any).clarity) return;

  (function(c: any, l: any, a: string, r: string, i: string, t?: any, y?: any){
    c[a] = c[a] || function(){(c[a].q = c[a].q || []).push(arguments)};
    t = l.createElement(r);
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0];
    if (y && y.parentNode) {
      y.parentNode.insertBefore(t, y);
    }
  })(window, document, "clarity", "script", CLARITY_PROJECT_ID);
};

export const trackPageView = (url: string) => {
  if (typeof window !== "undefined" && (window as any).clarity) {
    // Clarity automatically tracks page views, but we can set a custom tag for SPA routing
    (window as any).clarity("set", "page", url);
    // Or send a custom event for page view
    (window as any).clarity("event", "page_view", { url });
  }
};

export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof window !== "undefined" && (window as any).clarity) {
    (window as any).clarity("event", eventName);
    if (eventData) {
      // You can also pass additional custom tags if needed
      Object.entries(eventData).forEach(([key, value]) => {
        (window as any).clarity("set", key, value);
      });
    }
  }
};
