"use client";

import { useEffect, useRef, useState } from "react";
import { AFFILIATIONS, SECTORS } from "../../data/work";
import { Chip } from "../ui/Chip";

const STATS = [
  {
    target: 10,
    prefix: "",
    suffix: "+",
    label: "Tahun Berbagi",
    sub: "Melatih public speaking sejak 2017, dari kelas kecil hingga auditorium.",
  },
  {
    target: 40,
    prefix: "Hampir ",
    suffix: "",
    label: "Kota Dijangkau",
    sub: "Dari Bandung ke Surabaya, Malang, Jakarta, Bogor, hingga Mataram.",
  },
  {
    target: 100,
    prefix: "",
    suffix: "+",
    label: "Sesi Pelatihan",
    sub: "Training, workshop, talk, dan mentoring untuk berbagai latar peserta.",
  },
  {
    target: 9,
    prefix: "",
    suffix: "",
    label: "Sektor Berbeda",
    sub: "Korporasi, perbankan, instansi pemerintah, kampus, sekolah, hingga komunitas.",
  },
];

function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 1600,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setCount(target);
      return;
    }

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setCount(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;

          const step = (now: number) => {
            if (!startTime) startTime = now;
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out cubic: 1 - (1 - t)^3
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.round(easeOut * target);

            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(step);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [target, duration]);

  return (
    <span ref={containerRef} className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export function Sekilas() {
  return (
    <section id="sekilas" className="section section--yellow">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="max-w-[680px] reveal">
          <p className="eyebrow text-[#3A3A3A]">Sekilas</p>
          <h2 className="font-display font-bold text-[#111111] text-[clamp(1.5rem,3.2vw,2.25rem)] leading-tight mt-2">
            Angka & jejak dari ruang pelatihan
          </h2>
          <p className="text-sm text-[#3A3A3A] mt-2 leading-relaxed">
            Perjalanan mendampingi audiens, merajut kolaborasi, dan menebar manfaat komunikasi di berbagai kota.
          </p>
        </div>

        {/* Bento Grid: Kiri (Kotak-kotak Stats) & Kanan (Sektor & Afiliasi) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-8 items-stretch">
          {/* Sisi Kiri: Bento Grid Kotak-Kotak Statistik */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
              {STATS.map((stat, index) => (
                <div
                  key={stat.label}
                  className="card reveal flex flex-col justify-between"
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <div>
                    <span className="font-display font-bold text-[#111111] text-[clamp(2.25rem,4vw,3.25rem)] leading-none tabular-nums block">
                      <AnimatedCounter
                        target={stat.target}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                      />
                    </span>
                    <p className="text-base font-bold text-[#111111] mt-2.5">
                      {stat.label}
                    </p>
                  </div>
                  <p className="text-[13px] leading-relaxed text-[#3A3A3A] mt-3">
                    {stat.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sisi Kanan: Sektor yang Didampingi & Afiliasi */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Card Sektor */}
            <div
              className="card reveal flex-1 flex flex-col justify-between"
              style={{ transitionDelay: "240ms" }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold text-[#111111] font-display">
                    Sektor yang Didampingi
                  </h3>
                  <span className="text-[12px] font-semibold px-2.5 py-0.5 rounded-full border border-[#111111] bg-[#FFE94A] text-[#111111]">
                    9 Sektor
                  </span>
                </div>
                <p className="text-[13px] text-[#3A3A3A] mb-3.5 leading-relaxed">
                  Setiap sektor punya cara berkomunikasi sendiri — materi selalu disesuaikan secara kontekstual.
                </p>
                <div className="flex flex-wrap gap-2">
                  {SECTORS.map((sector) => (
                    <Chip key={sector} tone="paper">
                      {sector}
                    </Chip>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Afiliasi & Komunitas */}
            <div
              className="card reveal flex-1 flex flex-col justify-between"
              style={{ transitionDelay: "300ms" }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold text-[#111111] font-display">
                    Afiliasi & Ekosistem
                  </h3>
                  <span className="text-[12px] font-semibold px-2.5 py-0.5 rounded-full border border-[#111111] bg-[#CDBEFF] text-[#111111]">
                    Partner
                  </span>
                </div>
                <p className="text-[13px] text-[#3A3A3A] mb-3.5 leading-relaxed">
                  Lembaga dan komunitas tempat saya berkarya, berbagi, dan berkolaborasi.
                </p>
                <div className="flex flex-wrap gap-2">
                  {AFFILIATIONS.map((affiliation) => (
                    <span
                      key={affiliation}
                      className="text-[13px] font-medium text-[#111111] bg-[#FBFAF4] border border-[#111111] rounded-[10px] px-3 py-1.5 inline-flex items-center"
                    >
                      {affiliation}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
