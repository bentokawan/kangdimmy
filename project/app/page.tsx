"use client";

import { useState } from "react";
import { useReveal } from "./components/hooks/useReveal";
import { Aktivitas } from "./components/sections/Aktivitas";
import { Footer } from "./components/sections/Footer";
import { Hero } from "./components/sections/Hero";
import { Kerja } from "./components/sections/Kerja";
import { Konten } from "./components/sections/Konten";
import { Navbar } from "./components/sections/Navbar";
import { Perjalanan } from "./components/sections/Perjalanan";
import { Portofolio } from "./components/sections/Portofolio";
import { SapaSaya } from "./components/sections/SapaSaya";
import { Sekilas } from "./components/sections/Sekilas";
import { Tentang } from "./components/sections/Tentang";
import { VideoModal } from "./components/ui/VideoModal";
import { SITE } from "./lib/site";

export default function LandingPage() {
  const [videoOpen, setVideoOpen] = useState(false);
  useReveal();

  const openVideo = SITE.video ? () => setVideoOpen(true) : undefined;

  return (
    <div className="min-h-screen bg-[#FBFAF4] text-[#111111]">
      <a href="#main" className="skip-link">
        Langsung ke konten
      </a>

      <Navbar />

      <main id="main">
        <Hero onPlayVideo={openVideo} />
        <Sekilas />
        <Tentang />
        <Kerja />
        <Portofolio onPlayVideo={openVideo} />
        <Perjalanan />
        <Aktivitas />
        <SapaSaya />
      </main>

      <Footer />

      {SITE.video && (
        <VideoModal video={SITE.video} open={videoOpen} onClose={() => setVideoOpen(false)} />
      )}
    </div>
  );
}
