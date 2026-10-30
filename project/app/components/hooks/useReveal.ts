"use client";

import { useEffect } from "react";

/**
 * Scroll reveal sekali saja. Elemen baru (mis. setelah filter) ikut diamati.
 * prefers-reduced-motion: semua langsung terlihat.
 */
export function useReveal() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }),
      { threshold: 0.15, rootMargin: "0px 0px -40px" }
    );

    const observeAll = () =>
      document.querySelectorAll(".reveal:not(.is-in)").forEach((el) => io.observe(el));
    observeAll();

    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
