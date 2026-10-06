"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      }}
      className="fixed bottom-20 right-4 z-30 inline-flex h-11 items-center gap-2 rounded-md bg-navy px-4 text-sm font-semibold text-white shadow-lift md:bottom-6"
    >
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
      Back to top
    </button>
  );
}
