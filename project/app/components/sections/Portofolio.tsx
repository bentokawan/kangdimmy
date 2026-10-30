"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { PORTFOLIO_TABS } from "../../data/portfolio-tabs";
import { TRAINED_CHIPS } from "../../data/work";
import { SITE } from "../../lib/site";
import { Chip } from "../ui/Chip";
import { Eyebrow, SectionHeading } from "../ui/Heading";
import { Lightbox } from "../ui/Lightbox";

export function Portofolio({ onPlayVideo }: { onPlayVideo?: () => void }) {
  const [activeTab, setActiveTab] = useState(PORTFOLIO_TABS[0].id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const video = SITE.video;
  const active = PORTFOLIO_TABS.find((tab) => tab.id === activeTab) ?? PORTFOLIO_TABS[0];

  const onTabKeyDown = (event: React.KeyboardEvent, index: number) => {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % PORTFOLIO_TABS.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + PORTFOLIO_TABS.length) % PORTFOLIO_TABS.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = PORTFOLIO_TABS.length - 1;
    else return;

    event.preventDefault();
    setActiveTab(PORTFOLIO_TABS[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="portofolio" className="section">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="max-w-[720px] reveal">
          <Eyebrow>Portofolio</Eyebrow>
          <SectionHeading>Melihat sesi dari dekat</SectionHeading>
          <p className="text-[#3A3A3A]">
            Cuplikan mentoring, beberapa dokumentasi, dan siapa saja yang pernah belajar
            bersama saya.
          </p>
          <div className="flex flex-wrap gap-2 items-center mt-6">
            <span className="text-sm font-semibold text-[#111111] mr-2">Yang sering saya latih:</span>
            {TRAINED_CHIPS.map((chip) => (
              <Chip key={chip} hover>{chip}</Chip>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-display font-bold text-xl mb-5 reveal">Sekilas mentoring</h3>

          {video ? (
            <div className="video-poster reveal">
              <Image
                src={video.poster}
                alt="Kang Dimmy mendampingi sesi mentoring public speaking"
                fill
                sizes="(min-width: 1200px) 1152px, 100vw"
                className="object-cover"
              />
              <button
                type="button"
                className="video-poster__play"
                onClick={onPlayVideo}
                aria-label={`Putar video sekilas mentoring, ${video.duration}`}
              >
                ▶
              </button>
              <span className="video-poster__duration">{video.duration}</span>
            </div>
          ) : (
            <div className="placeholder reveal">
              <p className="font-display font-bold text-[#111111]">Video sedang disiapkan</p>
              <p className="text-sm text-[#3A3A3A] mt-1">
                Cuplikan mentoring 45–60 detik akan tampil di sini. Sementara itu, cerita
                lapangannya ada di{" "}
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
        </div>

        <div className="mt-16">
          <h3 className="font-display font-bold text-xl mb-5 reveal">Sesi dalam gambar</h3>

          {SITE.photos.length > 0 ? (
            <div className="photo-grid">
              {SITE.photos.map((photo, index) => (
                <figure key={photo.src} className="photo-grid__item reveal" style={{ transitionDelay: `${Math.min(index, 5) * 60}ms` }}>
                  <button
                    type="button"
                    className="photo-grid__button"
                    onClick={() => setLightboxIndex(index)}
                    aria-label={`Perbesar foto: ${photo.alt}`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={photo.width}
                      height={photo.height}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      loading="lazy"
                    />
                  </button>
                  {photo.caption && <figcaption className="photo-grid__caption">{photo.caption}</figcaption>}
                </figure>
              ))}
            </div>
          ) : (
            <div className="placeholder reveal">
              <p className="font-display font-bold text-[#111111]">Dokumentasi sedang disiapkan</p>
              <p className="text-sm text-[#3A3A3A] mt-1">
                Tiga sampai lima foto sesi akan tampil di sini setelah izin peserta dan berkas
                fotonya siap.
              </p>
            </div>
          )}
        </div>

        <div className="mt-16">
          <h3 className="font-display font-bold text-xl reveal">Kelompok peserta yang pernah saya latih</h3>
          <p className="text-[#3A3A3A] text-sm mt-2 mb-6 reveal">
            Beberapa nama di antara 100+ sesi. Pilih kelompok untuk melihat lebih dekat.
          </p>

          <div className="tabs reveal">
            <div role="tablist" aria-label="Kelompok peserta" className="tabs__list">
              {PORTFOLIO_TABS.map((tab, index) => (
                <button
                  key={tab.id}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={tab.id === activeTab}
                  aria-controls={`panel-${tab.id}`}
                  tabIndex={tab.id === activeTab ? 0 : -1}
                  className="chip tabs__tab"
                  onClick={() => setActiveTab(tab.id)}
                  onKeyDown={(event) => onTabKeyDown(event, index)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div
              role="tabpanel"
              id={`panel-${active.id}`}
              aria-labelledby={`tab-${active.id}`}
              tabIndex={0}
              className="tabs__panel"
            >
              <p className="text-sm text-[#3A3A3A] mb-4">{active.context}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                {active.items.map((item) => (
                  <li key={item} className="text-[15px] text-[#111111] flex gap-2">
                    <span aria-hidden="true" className="w-1.5 h-1.5 bg-[#111111] rounded-full mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-6 reveal">
            <a href="#sapa" className="link">
              Dan masih banyak lagi. Kalau konteks Anda mirip salah satunya, kita bisa ngobrol
              dulu →
            </a>
          </p>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          photos={SITE.photos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}
