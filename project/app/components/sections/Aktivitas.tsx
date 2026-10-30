"use client";

import { useState } from "react";
import { ACTIVITIES, ACTIVITY_FILTERS } from "../../data/activities";
import { Eyebrow, SectionHeading } from "../ui/Heading";

type Filter = (typeof ACTIVITY_FILTERS)[number];

export function Aktivitas() {
  const [filter, setFilter] = useState<Filter>("Semua");
  const visible = ACTIVITIES.filter((item) => filter === "Semua" || item.category === filter);

  return (
    <section id="aktivitas" className="section section--lilac">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="max-w-[640px] reveal">
          <Eyebrow>Di Lapangan</Eyebrow>
          <SectionHeading>Cerita terbaru dari sesi dan komunitas</SectionHeading>
          <p className="text-sm text-[#3A3A3A]">Diperbarui secara berkala.</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-8 reveal" role="group" aria-label="Saring aktivitas">
          {ACTIVITY_FILTERS.map((option) => (
            <button
              key={option}
              type="button"
              className="chip chip--link"
              aria-pressed={filter === option}
              onClick={() => setFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {visible.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {visible.map((activity, index) => (
              <article
                key={activity.id}
                className="card reveal"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <span className="chip !bg-[#FFE94A] !mb-3">{activity.category}</span>
                <h3 className="font-display font-bold text-[#111111] text-lg leading-snug">
                  {activity.title}
                </h3>
                <p className="text-[14px] text-[#5E5E5E] mt-2">{activity.meta}</p>
                <p className="text-sm text-[#3A3A3A] mt-3 leading-relaxed">
                  {activity.summary}
                  {activity.instagram && (
                    <>
                      {" "}
                      <a
                        href="https://instagram.com/kangdimmy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                      >
                        @kangdimmy
                      </a>
                    </>
                  )}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div className="placeholder reveal mt-8">
            <p className="text-[#3A3A3A]">
              Catatan terbaru sedang disiapkan. Sementara itu, cerita lapangannya ada di{" "}
              <a
                href="https://instagram.com/kangdimmy"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Instagram @kangdimmy
              </a>
              .
            </p>
          </div>
        )}

        <p className="mt-8 reveal">
          <a
            href="https://instagram.com/kangdimmy"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Lihat aktivitas lain di Instagram →
          </a>
        </p>
      </div>
    </section>
  );
}
