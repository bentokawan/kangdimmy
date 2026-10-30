"use client";

import Image from "next/image";

const FACTS = [
  { value: "10+", label: "tahun berbagi" },
  { value: "Hampir 40", label: "kota di Indonesia" },
];

export function Hero({ onPlayVideo }: { onPlayVideo?: () => void }) {
  return (
    <section className="pt-12 pb-16 md:pt-20 md:pb-24 border-b-[1.5px] border-[#111111]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 reveal is-in">
            <p className="eyebrow text-[#5E5E5E] mb-6">
              Public Speaking Trainer · Coach · Community Specialist
            </p>

            <h1 className="font-display font-bold uppercase text-[#111111] text-[clamp(2rem,8.5vw,4.5rem)] leading-[1.05] tracking-[-0.01em]">
              <span className="block">Hey, saya</span>
              <span className="hl hl-anim inline-block mt-1">Kang Dimmy</span>
            </h1>

            <p className="mt-6 max-w-[64ch] text-[clamp(1rem,2.5vw,1.0625rem)] leading-[1.65] text-[#3A3A3A]">
              Saya seorang trainer public speaking dari Bandung. Sejak 2017 saya menemani
              karyawan, mahasiswa, guru, santri, dan komunitas belajar berbicara dengan lebih tenang.
              Sudah hampir di 40 kota.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#tentang" className="btn btn--primary">
                Kenali Perjalanan Saya ↓
              </a>

              {onPlayVideo ? (
                <button type="button" className="video-cta" onClick={onPlayVideo}>
                  <span className="video-cta__dot" aria-hidden="true">
                    ▶
                  </span>
                  Lihat Sekilas Mentoring
                </button>
              ) : (
                <span className="video-cta video-cta--off">
                  <span className="video-cta__dot" aria-hidden="true">
                    ▶
                  </span>
                  Sekilas mentoring segera hadir
                </span>
              )}
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end reveal is-in" style={{ transitionDelay: "120ms" }}>
            <div className="relative">
              <div className="relative w-[280px] h-[373px] sm:w-[340px] sm:h-[453px] lg:w-[420px] lg:h-[560px] rounded-[18px] overflow-hidden border-[1.5px] border-[#111111] bg-[#CDBEFF]">
                <Image
                  src="/image.jpg"
                  alt="Kang Dimmy, trainer public speaking dari Bandung"
                  fill
                  sizes="(min-width: 1024px) 420px, (min-width: 640px) 340px, 280px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <span className="sticker absolute -top-3.5 -left-4 bg-[#FFE94A] border-[1.5px] border-[#111111] rounded-[10px] px-3 py-1.5 text-xs font-semibold">
                Bandung, Jawa Barat
              </span>
              <span className="hero-triangle" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
