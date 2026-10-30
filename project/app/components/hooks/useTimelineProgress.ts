"use client";

import { useEffect } from "react";

/** Mengisi --progress sesuai posisi elemen di viewport. Satu hook per timeline. */
export function useTimelineProgress(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--progress", "1");
      return;
    }

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const visible = Math.min(Math.max(window.innerHeight * 0.75 - rect.top, 0), rect.height);
      el.style.setProperty("--progress", String(rect.height > 0 ? visible / rect.height : 0));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref]);
}
