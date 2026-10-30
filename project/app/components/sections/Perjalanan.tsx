"use client";

import { useRef } from "react";
import { EDUCATION } from "../../data/education";
import { EXPERIENCE } from "../../data/experience";
import { ROLES } from "../../data/work";
import { VOLUNTEERING } from "../../data/volunteering";
import { SITE } from "../../lib/site";
import { useTimelineProgress } from "../hooks/useTimelineProgress";
import { Chip } from "../ui/Chip";
import { GroupTimeline } from "../ui/GroupTimeline";
import { Eyebrow, SectionHeading } from "../ui/Heading";

const LOCAL_NAV = [
  { label: "Pengalaman", href: "#pengalaman" },
  { label: "Relawan & Komunitas", href: "#relawan" },
  { label: "Pendidikan", href: "#pendidikan" },
];

export function Perjalanan() {
  const experienceRef = useRef<HTMLDivElement>(null);
  const volunteeringRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  useTimelineProgress(experienceRef);
  useTimelineProgress(volunteeringRef);
  useTimelineProgress(educationRef);

  return (
    <section id="perjalanan" className="section">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal">
          <div className="max-w-[640px]">
            <Eyebrow>Perjalanan</Eyebrow>
            <SectionHeading>Jejak sepuluh tahun</SectionHeading>
            <p className="text-[#3A3A3A]">Tiga jalur yang membentuk cara saya bekerja.</p>
          </div>

          {SITE.cvUrl ? (
            <a href={SITE.cvUrl} className="btn shrink-0" download>
              Unduh CV (PDF)
            </a>
          ) : (
            <p className="text-sm text-[#5E5E5E] shrink-0"></p>
          )}
        </div>

        <nav aria-label="Bagian perjalanan" className="flex flex-wrap gap-2 mt-8">
          {LOCAL_NAV.map((item) => (
            <a key={item.href} href={item.href} className="chip chip--link">
              {item.label}
            </a>
          ))}
        </nav>

        <div id="pengalaman" className="mt-14">
          <h3 className="font-display font-bold text-[#111111] text-xl mb-1 reveal">Pengalaman</h3>
          <p className="text-sm text-[#5E5E5E] mb-6 reveal">Pekerjaan dan peran profesional.</p>
          <GroupTimeline items={EXPERIENCE} innerRef={experienceRef} />
        </div>

        <div id="relawan" className="mt-16">
          <h3 className="font-display font-bold text-[#111111] text-xl mb-1 reveal">Relawan &amp; Komunitas</h3>
          <p className="text-sm text-[#5E5E5E] mb-6 reveal">Peran di luar pekerjaan utama.</p>
          <GroupTimeline items={VOLUNTEERING} innerRef={volunteeringRef} />
        </div>

        <div id="pendidikan" className="mt-16">
          <h3 className="font-display font-bold text-[#111111] text-xl mb-1 reveal">Pendidikan</h3>
          <p className="text-sm text-[#5E5E5E] mb-6 reveal">Jalur formal dan pembelajaran terstruktur.</p>
          <GroupTimeline items={EDUCATION} innerRef={educationRef} />
        </div>

        <div className="card reveal mt-12">
          <p className="text-[.8125rem] font-semibold uppercase tracking-[0.1em] text-[#5E5E5E] mb-3">
            Ringkas
          </p>
          <div className="flex flex-wrap gap-2">
            {ROLES.map((role) => (
              <Chip key={role}>{role}</Chip>
            ))}
          </div>
        </div>

        <p className="mt-8 reveal">
          <a href="#aktivitas" className="link">
            Lihat sesi yang pernah saya bawakan →
          </a>
        </p>
      </div>
    </section>
  );
}
