"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ───────────────────────── Data ───────────────────────── */

const NAV = [
  { label: "About", href: "#tentang" },
  { label: "Work", href: "#kerja" },
  { label: "Journey", href: "#perjalanan" },
  { label: "Activities", href: "#aktivitas" },
];

const SECTORS = [
  "Corporations", "Government Institutions", "Banking", "F&B", "Organizations",
  "Schools", "Universities", "Islamic Boarding Schools", "Communities",
];

const AFFILIATIONS = [
  "motivacenter", "ADZ Training", "Indonesia Speak Up",
  "Panggung Kreator", "Elite Circle Bandung Raya", "Forum Indonesia Muda",
];

const WORK = [
  {
    title: "Public Speaking Training",
    desc: "Interactive training with plenty of practice: the basics of public speaking, managing nervousness, structuring a message, storytelling, and presentation — adapted to each audience.",
    emoji: "🎤",
  },
  {
    title: "Speaking on Stage",
    desc: "Talks and sharing sessions for events, campuses, and communities. Themes: communication, self-development, and stories from the field.",
    emoji: "💡",
  },
  {
    title: "One-on-One Coaching",
    desc: "Personal coaching to build confidence and readiness to speak, from preparing the material to rehearsal runs.",
    emoji: "🧭",
  },
  {
    title: "Growing Communities",
    desc: "Supporting social programs and human resource development in communities, including Indonesia Speak Up Goes To Masjid.",
    emoji: "🤝",
  },
];

const TRAINED_CHIPS = [
  "Opening a presentation", "Managing nervousness", "Structuring a message",
  "Answering questions", "Voice & body language",
];

const PROCESS = [
  { no: "01", title: "Know the audience", desc: "Who they are and what they want to take home." },
  { no: "02", title: "Build the material", desc: "Language, examples, and exercises shaped to their context — not a template." },
  { no: "03", title: "Practice together", desc: "Sessions run with plenty of hands-on practice." },
  { no: "04", title: "Notes afterward", desc: "A short summary and steps they can do on their own." },
];

const EXPERIENCE: TimelineItem[] = [
  { period: "Jan 2024 – Present", role: "Professional Trainer", org: "motivacenter · Full-time", location: "Bandung, West Java, Indonesia", current: true },
  { period: "Jan 2017 – Present", role: "Training and Development Specialist", org: "ADZ Training · 9 yrs 10 mos", current: true },
  { period: "Feb 2017 – 2023", role: "Professional Trainer", org: "ADZ Training · Full-time", location: "Bandung, West Java, Indonesia", current: false, note: "Public Speaking Training, Komunikasi and +1 skill." },
  { period: "2013 – 2016", role: "Public Relations Specialist", org: "Yayasan Al Hilal · Full-time", location: "Bandung, West Java, Indonesia", current: false },
  { period: "2008 – 2012", role: "Human Resources Manager", org: "Al-Azhar Syifa Budi Legenda Bekasi · Full-time", location: "Bekasi, West Java, Indonesia", current: false },
];

const VOLUNTEERING: TimelineItem[] = [
  { period: "Dec 2025 – Present", role: "Alumni FIM 27", org: "Forum Indonesia Muda", location: "Jakarta", current: true, note: "Alumni of Forum Indonesia Muda class 27, themed \"Public Policy\", held in Jakarta on 12–14 December 2025." },
  { period: "Sep 2023 – Present", role: "Public Relations Specialist", org: "Indonesia Speak Up", location: "Social Services", current: true },
  { period: "Aug 2025 – Present", role: "Alumnus", org: "Sekolah Pemikiran Islam", location: "Education", current: true },
  { period: "Dec 2021 – Present", role: "Regional Admin, Bandung Raya", org: "Elite Circle", current: true },
  { period: "Aug 2025 – Present", role: "Advisor", org: "Panggung Kreator", current: true },
];

const EDUCATION: TimelineItem[] = [
  { period: "1999 – 2003", role: "BA in Public Administration", org: "Universitas Padjadjaran", current: false },
];

const CHANNELS = [
  {
    name: "Gmail",
    handle: "email@example.com",
    desc: "Direct inquiry & collaboration",
    url: "mailto:email@example.com",
    cta: "Send Me an Email",
    btnClass: "btn--gmail",
    isSocial: false,
  },
  {
    name: "LinkedIn",
    handle: "/in/kangdimmy",
    desc: "Professional updates",
    url: "https://www.linkedin.com/in/kangdimmy",
    cta: "Connect on LinkedIn",
    btnClass: "btn--linkedin",
    isSocial: true,
  },
  {
    name: "Instagram",
    handle: "@kangdimmy",
    desc: "Reels on public speaking tips, session highlights",
    url: "https://instagram.com/kangdimmy",
    cta: "Say hi on Instagram",
    btnClass: "btn--instagram",
    isSocial: true,
  },
  {
    name: "Threads",
    handle: "@kangdimmy",
    desc: "Notes and discussions",
    url: "https://threads.net/@kangdimmy",
    cta: "Chat on Threads",
    btnClass: "btn--threads",
    isSocial: true,
  },
  {
    name: "TikTok",
    handle: "@kangdimmy",
    desc: "Short communication tips",
    url: "https://tiktok.com/@kangdimmy",
    cta: "Watch tips on TikTok",
    btnClass: "btn--tiktok",
    isSocial: true,
  },
];

function SocialIcon({ name, className }: { name: string; className?: string }) {
  const c = className ?? "w-5 h-5 shrink-0";
  const iconProps = {
    className: c,
    width: 20,
    height: 20,
    style: { width: 20, height: 20, minWidth: 20, flexShrink: 0 },
    "aria-hidden": "true" as const,
  };
  switch (name) {
    case "Gmail":
    case "Email":
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    case "Instagram":
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4.2" />
          <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "TikTok":
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.6 3c.4 2.1 1.8 3.6 4 3.9v3c-1.6 0-3-.5-4-1.3v6.1c0 3.4-2.4 5.8-5.6 5.8A5.5 5.5 0 0 1 5.5 15c0-3.2 2.5-5.6 5.9-5.5v3.1c-1.6-.3-2.9.8-2.9 2.4 0 1.5 1.1 2.6 2.5 2.6 1.5 0 2.6-1.1 2.6-2.8V3h3z" />
        </svg>
      );
    case "Threads":
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.2 21.5c-2.7 0-4.8-.9-6.2-2.6C4.7 17.3 4 15 4 12.1c0-2.9.7-5.2 2-6.8C7.4 3.5 9.5 2.6 12.2 2.6c2.4 0 4.3.7 5.7 2.2 1.2 1.2 1.9 2.9 2.2 4.9l-2.6.4c-.4-2.7-1.9-4.6-5.2-4.6-1.9 0-3.3.6-4.3 1.8-.9 1.2-1.4 2.9-1.4 5s.5 3.7 1.5 4.9c1 1.2 2.4 1.8 4.2 1.8 1.6 0 2.8-.4 3.7-1.2.8-.7 1.2-1.5 1.2-2.4 0-.7-.3-1.3-.8-1.8-.3.9-.8 1.6-1.5 2.1-.8.6-1.8.9-3 .9-1.1 0-2-.3-2.8-.8a2.9 2.9 0 0 1-1.3-2.5c0-1.1.5-2 1.4-2.6.9-.6 2.1-.9 3.7-.9h2.1c-.1-.8-.4-1.4-.9-1.8-.5-.4-1.2-.6-2.1-.6-1.1 0-2 .3-2.9.8l-1.1-2.2c1.2-.7 2.5-1 4-1 3.4 0 5.3 1.8 5.4 5.1l.1 3.3c0 1.7-.6 3.1-1.9 4.2-1.3 1.1-3 1.7-5.2 1.7zm.3-8.1c-1.9 0-2.9.5-2.9 1.5 0 .9.8 1.4 2 1.4 1.5 0 2.6-.8 2.8-2.7-.5-.1-1.1-.2-1.9-.2z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H9z" />
        </svg>
      );
    default:
      return null;
  }
}

/* ───────────────────────── Reveal helper ───────────────────────── */

function useReveal() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15, rootMargin: "0px 0px -40px" }
    );

    const observeAll = () =>
      document.querySelectorAll(".reveal:not(.is-in)").forEach((el) => io.observe(el));
    observeAll();

    // Re-rendered .reveal elements (e.g. after a filter change) get observed too.
    const mo = new MutationObserver(() => observeAll());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}

/* Timeline: line grows as you scroll */
function useTimelineProgress(ref: React.RefObject<HTMLDivElement | null>, count: number) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      el.style.setProperty("--progress", "1");
      return;
    }
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const visible = Math.min(Math.max(vh * 0.75 - rect.top, 0), rect.height);
      const p = rect.height > 0 ? visible / rect.height : 0;
      el.style.setProperty("--progress", String(Math.min(p, 1)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref, count]);
}

/* ───────────────────────── Small components ───────────────────────── */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-display font-medium text-[.8125rem] uppercase tracking-[0.08em] text-[#5E5E5E] mb-4">{children}</p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display font-bold text-[#111111] leading-[1.1] text-[clamp(1.6rem,3.5vw,2.6rem)] mb-4">
      {children}
    </h2>
  );
}

type TimelineItem = { period: string; role: string; org: string; location?: string; note?: string; current: boolean };

function GroupTimeline({
  items,
  innerRef,
}: {
  items: TimelineItem[];
  innerRef?: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="timeline" ref={innerRef}>
      {items.map((item, i) => (
        <div key={`${item.role}-${item.org}-${i}`} className="timeline__item reveal" style={{ transitionDelay: `${Math.min(i, 5) * 60}ms` }}>
          <span className="timeline__period text-[#5E5E5E]">{item.period}</span>
          <div className="card !p-5">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display font-bold text-[#111111] text-lg">{item.role}</h3>
              {item.current && <span className="sticker-now">Now</span>}
            </div>
            <p className="text-sm text-[#5E5E5E] mt-1">
              {item.org}
              {item.location ? ` · ${item.location}` : ""}
            </p>
            {item.note && <p className="text-sm text-[#3A3A3A] mt-2 leading-relaxed">{item.note}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ───────────────────────── Page ───────────────────────── */

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  useReveal();
  useTimelineProgress(timelineRef, EXPERIENCE.length);

  return (
    <div className="min-h-screen bg-[#FBFAF4] text-[#111111]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-[#FFE94A] focus:border-[1.5px] focus:border-[#111111] focus:rounded-full focus:px-4 focus:py-2 text-sm font-semibold"
      >
        Skip to content
      </a>

      {/* ───────── NAVBAR ───────── */}
      <header className="sticky top-0 z-40 bg-[#FBFAF4]/95 backdrop-blur-sm border-b-[1.5px] border-[#111111]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
          <a href="#main" className="font-display font-bold text-xl tracking-tight">
            Kang Dimmy
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold" style={{ marginLeft: "auto" }}>
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:bg-[#FFE94A] px-1 rounded transition-colors">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3" style={{ marginLeft: "24px" }}>
            <a href="#sosmed" className="btn hidden sm:inline-flex px-2 py-1">
              Let&rsquo;s Connect
            </a>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t-[1.5px] border-[#111111] bg-[#FBFAF4] px-6 py-6 flex flex-col gap-4 text-base font-semibold">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)}>
                {n.label}
              </a>
            ))}
            <a href="#sosmed" onClick={() => setMenuOpen(false)} className="btn w-full justify-center">
              Let&rsquo;s Connect
            </a>
          </div>
        )}
      </header>

      <main id="main">
        {/* ───────── HERO ───────── */}
        <section className="pt-12 pb-16 md:pt-20 md:pb-24 border-b-[1.5px] border-[#111111]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center" style={{ columnGap: "8px" }}>
              {/* Foto — tampil dulu di mobile */}
              <div className="flex justify-center lg:order-2 lg:justify-end is-in reveal" style={{ transitionDelay: "120ms" }}>
                <div className="relative">
                  <div className="relative w-[260px] h-[347px] sm:w-[340px] sm:h-[453px] lg:w-[420px] lg:h-[560px] rounded-[18px] overflow-hidden border-[1.5px] border-[#111111] bg-[#CDBEFF]">
                    <Image
                      src="/image.jpg"
                      alt="Kang Dimmy, public speaking trainer from Bandung"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  {/* location sticker */}
                  <span
                    className="sticker bg-[#FFE94A] border-[1.5px] border-[#111111] rounded-[10px] px-3 py-1.5 text-xs font-semibold"
                    style={{ position: "absolute", top: "-14px", left: "-16px" }}
                  >
                    Bandung, West Java
                  </span>
                  {/* yellow corner, decoration */}
                  <span
                    aria-hidden="true"
                    className="bg-[#FFE94A] border-[1.5px] border-[#111111] rounded-tl-[18px]"
                    style={{ position: "absolute", bottom: "-12px", right: "-12px", width: "48px", height: "48px" }}
                  />
                </div>
              </div>

              {/* Teks */}
              <div className="reveal is-in lg:order-1 text-center lg:text-left">
                <p className="font-display font-medium text-[clamp(.6875rem,2.4vw,.8125rem)] uppercase tracking-[0.08em] text-[#5E5E5E] mb-6">
                  Public Speaking Trainer · Coach · Community Specialist
                </p>
                <h1 className="font-display font-bold uppercase text-[#111111] text-[clamp(2rem,8.5vw,4.5rem)] leading-[1.05] tracking-[-0.01em] relative">
                  <span className="block">Hey, I&rsquo;m</span>
                  <span className="hl hl-anim inline-block mt-1">Kang Dimmy</span>
                  {/* decorative connector line */}
                </h1>

                <p className="mt-6 max-w-[64ch] text-[clamp(1rem,2.5vw,1.0625rem)] leading-[1.65] text-[#3A3A3A] mx-auto lg:mx-0">
                  A public speaking trainer from Bandung. Since 2017 I have shared what I know in
                  nearly 40 cities across Indonesia, with employees, students, santri, and
                  communities.
                </p>

                <div className="mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-4">
                  <a href="#tentang" className="btn btn--primary">
                    Get to Know My Journey ↓
                  </a>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold">
                    <span className="w-9 h-9 rounded-full bg-[#FFE94A] border-[1.5px] border-[#111111] flex items-center justify-center text-xs" aria-hidden="true">
                      ▶
                    </span>
                    Watch the Introduction
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ───────── AT A GLANCE (yellow) Kuning ───────── */}
        <section className="py-14 md:py-20 bg-[#FFE94A] border-b-[1.5px] border-[#111111]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

            {/* ── Stats row ── */}
            <p className="font-display font-semibold text-[.75rem] uppercase tracking-[0.1em] text-[#3A3A3A] reveal">
              At a Glances
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
              {[
                { value: "10+", label: "Years", sub: "of public speaking training (2017 – present)" },
                { value: "Nearly 40", label: "Cities", sub: "across Indonesia, from Sabang to Merauke" },
                { value: "9", label: "Sectors", sub: "corporates to Islamic boarding schools" },
                { value: "5,500+", label: "LinkedIn Followers", sub: "professional network & community" },
              ].map((f, i) => (
                <div
                  key={f.label}
                  className="card reveal flex flex-col justify-between"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div>
                    <span className="font-display font-bold text-[#111111] text-[clamp(1.9rem,3vw,2.75rem)] leading-none tabular-nums block">
                      {f.value}
                    </span>
                    <p className="text-sm font-semibold text-[#111111] mt-1.5">{f.label}</p>
                  </div>
                  <p className="text-[.75rem] leading-snug text-[#3A3A3A]/70 mt-3">{f.sub}</p>
                </div>
              ))}
            </div>

            {/* ── Sectors ── */}
            <div className="reveal mt-10 pt-8 border-t-[1.5px] border-[#111111]/15">
              <p className="font-display font-semibold text-[.75rem] uppercase tracking-[0.1em] text-[#3A3A3A]">
                Sectors I Work With
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {SECTORS.map((s) => (
                  <span key={s} className="chip !bg-white">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Affiliations ── */}
            <div className="reveal mt-10 pt-8 border-t-[1.5px] border-[#111111]/15">
              <p className="font-display font-semibold text-[.75rem] uppercase tracking-[0.1em] text-[#3A3A3A]">
                Affiliations
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4">
                {AFFILIATIONS.map((a) => (
                  <span key={a} className="text-[.875rem] font-medium text-[#111111]">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ───────── ABOUT ───────── */}
        <section id="tentang" className="py-16 md:py-24 border-b-[1.5px] border-[#111111]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="max-w-[640px] reveal">
              <Eyebrow>About Me</Eyebrow>
              <SectionHeading>
                From the HR room to the <span className="hl inline-block">training room</span>
              </SectionHeading>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-10">
              <div className="lg:col-span-7 flex flex-col gap-5 text-[17px] leading-[1.65] text-[#3A3A3A] max-w-[64ch] reveal">
                <p>
                  I graduated in Public Administration from Universitas Padjadjaran. My career began
                  in human resources as an HR Manager (2008–2012), then continued into public
                  relations as a PR Specialist (2013–2016). From those two roles I learned one thing:
                  many problems in organizations start with unclear communication.
                </p>
                <p>
                  Since 2017 I have focused on public speaking. In ten years, I have had the chance to
                  share in nearly 40 cities, with company employees and bankers, government
                  institutions, campuses, schools, Islamic boarding schools, and communities. I work
                  in several ways: as a personal brand, with vendors, or as an associate of several
                  training institutions. I am currently also a Professional Trainer at motivacenter,
                  Bandung.
                </p>
                <p>
                  Outside the training room, I serve as Public Relations at Indonesia Speak Up, and as
                  an advisor and volunteer in several communities in Bandung. I also share short tips
                  through Instagram Reels and TikTok, so that communication skills can be learned by
                  anyone.
                </p>

                {/* Video poster */}
                <div className="mt-4 card !p-4 flex items-center gap-4 max-w-[420px]">
                  <span
                    className="shrink-0 w-14 h-14 rounded-full bg-[#FFE94A] border-[1.5px] border-[#111111] flex items-center justify-center"
                    role="button"
                    tabIndex={0}
                    aria-label="Play the introduction video, 90 seconds"
                  >
                    ▶
                  </span>
                  <div>
                    <p className="font-semibold text-[#111111]">Introduction, 90 seconds</p>
                    <p className="text-sm text-[#5E5E5E]">The video is being prepared.</p>
                  </div>
                </div>
              </div>

              {/* Working values */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                {[
                  { title: "Practical", desc: "Every session ends with something you can try right away." },
                  { title: "Audience first", desc: "Material for bank employees differs from material for santri or students, so I adapt it." },
                  { title: "Useful", desc: "Speaking is a tool to work and serve better." },
                ].map((v, i) => (
                  <div key={v.title} className="card reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                    <h3 className="font-display font-bold text-[#111111]">{v.title}</h3>
                    <p className="text-sm text-[#3A3A3A] mt-1 leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ───────── WORK ───────── */}
        <section id="kerja" className="py-16 md:py-24 border-b-[1.5px] border-[#111111]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="max-w-[640px] reveal">
              <Eyebrow>What I Do</Eyebrow>
              <SectionHeading>Four things that fill my days</SectionHeading>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
              {WORK.map((w, i) => (
                <div key={w.title} className="card reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                  <span className="inline-flex w-12 h-12 rounded-[12px] bg-[#FFE94A] border-[1.5px] border-[#111111] items-center justify-center text-xl mb-4" aria-hidden="true">
                    {w.emoji}
                  </span>
                  <h3 className="font-display font-bold text-[#111111] text-lg">{w.title}</h3>
                  <p className="text-sm text-[#3A3A3A] mt-2 leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>

            <div className="reveal mt-10 flex flex-wrap gap-2 items-center">
              <span className="text-sm font-semibold text-[#111111] mr-2">What I often train:</span>
              {TRAINED_CHIPS.map((c) => (
                <span key={c} className="chip">{c}</span>
              ))}
            </div>

            {/* How I work strip */}
            <div className="mt-14 pt-10 border-t-[1.5px] border-[#111111]">
              <p className="font-display font-medium text-[.8125rem] uppercase tracking-[0.08em] text-[#5E5E5E] mb-6 reveal">How I Work</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                {PROCESS.map((p, i) => (
                  <div key={p.no} className="card reveal !p-5" style={{ transitionDelay: `${i * 60}ms` }}>
                    <div className="flex items-start gap-3">
                      <span className="shrink-0 w-10 h-10 rounded-[10px] bg-[#FFE94A] border-[1.5px] border-[#111111] flex items-center justify-center font-display font-bold text-base tabular-nums">
                        {p.no}
                      </span>
                      <div>
                        <h3 className="font-display font-bold text-[#111111] text-[15px]">{p.title}</h3>
                        <p className="text-sm text-[#5E5E5E] mt-1.5 leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ───────── JOURNEY ───────── */}
        <section id="perjalanan" className="py-16 md:py-24 border-b-[1.5px] border-[#111111]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal">
              <div className="max-w-[640px]">
                <Eyebrow>Journey</Eyebrow>
                <SectionHeading>From HR and PR to the training room</SectionHeading>
                <p className="text-sm text-[#5E5E5E]">Three fields, one thread: people and communication.</p>
              </div>
              <a href="#sapa" className="btn shrink-0">Download CV (PDF)</a>
            </div>

            {/* Experience */}
            <div className="mt-14">
              <div className="flex items-center gap-3 mb-6 reveal">
                <span className="inline-block w-2.5 h-2.5 bg-[#FFE94A] border-[1.5px] border-[#111111] rounded-[4px]" aria-hidden="true" />
                <h3 className="font-display font-bold text-[#111111] text-xl">Experience</h3>
              </div>
              <GroupTimeline items={EXPERIENCE} innerRef={timelineRef} />
            </div>

            {/* Volunteering */}
            <div className="mt-16">
              <div className="flex items-center gap-3 mb-6 reveal">
                <span className="inline-block w-2.5 h-2.5 bg-[#CDBEFF] border-[1.5px] border-[#111111] rounded-[4px]" aria-hidden="true" />
                <h3 className="font-display font-bold text-[#111111] text-xl">Volunteering</h3>
              </div>
              <GroupTimeline items={VOLUNTEERING} />
            </div>

            {/* Education */}
            <div className="mt-16">
              <div className="flex items-center gap-3 mb-6 reveal">
                <span className="inline-block w-2.5 h-2.5 bg-[#FBFAF4] border-[1.5px] border-[#111111] rounded-[4px]" aria-hidden="true" />
                <h3 className="font-display font-bold text-[#111111] text-xl">Education</h3>
              </div>
              <GroupTimeline items={EDUCATION} />
            </div>

            <p className="mt-10 reveal">
              <a href="#aktivitas" className="link">See the sessions I have given →</a>
            </p>
          </div>
        </section>

        {/* ───────── ACTIVITIES (lilac) ───────── */}
        <section
          id="aktivitas"
          className="py-16 md:py-24 border-b-[1.5px] border-[#111111] bg-[#E4DBFF]"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="max-w-[640px] reveal">
              <Eyebrow>In the Field</Eyebrow>
              <SectionHeading>Notes from the training room, the stage, and communities</SectionHeading>
              <p className="text-sm text-[#3A3A3A]">Updated regularly.</p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
              <article className="card reveal !p-5">
                <span className="chip !bg-[#FFE94A] !mb-3">Training</span>
                <h3 className="font-display font-bold text-[#111111] text-lg leading-snug">
                  Brighter 11 Coaching: Self Development, Public Speaking
                </h3>
                <p className="text-xs text-[#5E5E5E] mt-2">Sep 6 · YBM Brilian · University</p>
                <p className="text-sm text-[#3A3A3A] mt-3 leading-relaxed">
                  A session for Bright Scholarship recipients from ITB and Universitas Padjadjaran.
                </p>
              </article>

              <article className="card reveal !p-5" style={{ transitionDelay: "80ms" }}>
                <span className="chip !bg-[#FFE94A] !mb-3">Community</span>
                <h3 className="font-display font-bold text-[#111111] text-lg leading-snug">
                  With the Friends of Komuniclub / Komunihub
                </h3>
                <p className="text-xs text-[#5E5E5E] mt-2">Oct 12</p>
                <p className="text-sm text-[#3A3A3A] mt-3 leading-relaxed">
                  New notes are being prepared. Meanwhile, field stories live on Instagram{" "}
                  <a href="https://instagram.com/kangdimmy" target="_blank" rel="noopener noreferrer" className="link">
                    @kangdimmy
                  </a>
                  .
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ───────── SAY HELLO (yellow) ───────── */}
        <section id="sosmed" className="py-14 md:py-20">
          <div className="max-w-[960px] mx-auto px-4 sm:px-6">
            <div className="!p-6 sm:!p-10 text-center">
              <div className="max-w-[560px] mx-auto">
                <p className="font-display font-medium text-[.8125rem] uppercase tracking-[0.08em] text-[#3A3A3A] reveal">Let&rsquo;s Meet</p>
                <h2 className="font-display font-bold text-[#111111] text-[clamp(1.6rem,5vw,2.6rem)] mt-2 reveal">
                  Say hello.
                </h2>
                <p className="text-[clamp(.9375rem,2.5vw,1rem)] text-[#3A3A3A] mt-2 leading-relaxed reveal">
                  No agenda needed. Introducing yourself, asking something, or just swapping stories is
                  welcome too.
                </p>
              </div>

              <div className="hello-btns mt-8 reveal">
                {CHANNELS.map((c) => {
                  const isMail = c.url.startsWith("mailto:");
                  return (
                    <a
                      key={c.name}
                      href={c.url}
                      {...(!isMail ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className={`btn ${c.btnClass} justify-center`}
                    >
                      <SocialIcon name={c.name} />
                      {c.cta}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ───────── FOOTER ───────── */}
      <footer className="py-12 bg-[#111111] text-[#FBFAF4]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/15">
            <div>
              <span className="font-display font-bold text-lg">Kang Dimmy</span>
              <p className="text-sm text-[#B9B6AE] italic mt-1">Learn together, grow together.</p>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#B9B6AE]">
              <a href="#tentang" className="hover:text-white">About</a>
              <a href="#kerja" className="hover:text-white">Work</a>
              <a href="#perjalanan" className="hover:text-white">Journey</a>
              <a href="#aktivitas" className="hover:text-white">Activities</a>
              <a href="#sapa" className="hover:text-white">Say Hello</a>
            </nav>
          </div>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A877F]">
            <p>© 2026 A Dimmy Zulhifansyah (Kang Dimmy). All rights reserved.</p>
            <div className="flex gap-4">
              <a href="https://instagram.com/kangdimmy" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
              <a href="https://tiktok.com/@kangdimmy" target="_blank" rel="noopener noreferrer" className="hover:text-white">TikTok</a>
              <a href="https://threads.net/@kangdimmy" target="_blank" rel="noopener noreferrer" className="hover:text-white">Threads</a>
              <a href="https://www.linkedin.com/in/kangdimmy" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
