const fs = require("fs");
const path = require("path");
const { compile } = require("tailwindcss");

/** Semua berkas app/ — kelas Tailwind kini tersebar di banyak komponen. */
function collectSources(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) collectSources(full, files);
    else if (/\.(tsx|ts)$/.test(entry.name)) files.push(full);
  }
  return files;
}

/** Ambil token dari setiap string literal; token non-utility diabaikan Tailwind. */
function collectClasses(source) {
  const classes = new Set();
  const literals = source.match(/"[^"\n]*"|'[^'\n]*'|`[^`]*`/g) ?? [];
  for (const literal of literals) {
    for (const token of literal.slice(1, -1).split(/\s+/)) {
      if (token) classes.add(token);
    }
  }
  return classes;
}

async function buildCss() {
  const indexCss = fs.readFileSync(
    path.join(__dirname, "node_modules", "tailwindcss", "index.css"),
    "utf8"
  );

  const compiler = await compile(indexCss, {
    base: __dirname,
    loadStylesheet: async () => ({ content: "", base: __dirname }),
  });

  const source = collectSources(path.join(__dirname, "app"))
    .map((file) => fs.readFileSync(file, "utf8"))
    .join("\n");

  const classes = collectClasses(source);

  // Kelas dinamis & utilitas dasar yang selalu dipakai.
  [
    "flex", "grid", "hidden", "block", "inline-block", "inline-flex", "relative", "absolute",
    "fixed", "sticky", "w-full", "h-full", "w-fit", "shrink-0", "mx-auto", "sr-only",
    "items-center", "items-start", "items-baseline", "justify-between", "justify-center",
    "rounded-full", "border", "border-t", "border-b", "border-l", "border-r", "border-y",
    "transition-all", "transition-colors", "transition-transform", "duration-300",
    "object-cover", "object-contain", "object-top", "tabular-nums", "italic", "uppercase",
    "backdrop-blur-sm", "md:col-span-2", "lg:col-span-3", "!bg-white",
    "btn--gmail", "btn--linkedin", "btn--instagram", "btn--threads", "btn--tiktok",
  ].forEach((name) => classes.add(name));

  const builtTailwind = compiler.build(Array.from(classes));

  // Token & elemen dasar duduk di @layer base; komponen di @layer components.
  // Utilitas Tailwind tetap menang, jadi `hidden`, `md:hidden`, `p-5` bisa menimpa komponen.
  const finalCss = `
${builtTailwind}

@layer base {
  :root {
    --paper: #FBFAF4;
    --paper-2: #F1EFE6;
    --white: #FFFFFF;
    --ink: #111111;
    --ink-soft: #3A3A3A;
    --muted: #5E5E5E;      /* hanya di atas paper; di atas kuning pakai --ink-soft */
    --yellow: #FFE94A;
    --lilac: #CDBEFF;
    --lilac-35: #EAE3FF;
    --focus: #2F5BEA;
    --line: 1.5px;
    --radius: 18px;
    --radius-chip: 10px;
    --radius-pill: 999px;
    --dur: .15s;
  }

  body {
    background-color: var(--paper);
    color: var(--ink);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 1.0625rem;
    line-height: 1.65;
    margin: 0;
  }

  *, *::before, *::after { box-sizing: border-box; }

  .font-display { font-family: 'Inter', system-ui, sans-serif; }

  ::selection { background: var(--yellow); color: var(--ink); }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: var(--paper); }
  ::-webkit-scrollbar-thumb { background: #D8D4C8; border-radius: 999px; }

  :where(a, button, [tabindex]):focus-visible {
    outline: 3px solid var(--focus);
    outline-offset: 3px;
  }

  html { scroll-behavior: smooth; scroll-padding-top: 0; }
  section[id], #pengalaman, #relawan, #pendidikan { scroll-margin-top: 90px; }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
  }
}

@layer components {
  .skip-link {
    position: absolute;
    top: 8px;
    left: 8px;
    z-index: 60;
    transform: translateY(-200%);
    background: var(--yellow);
    border: var(--line) solid var(--ink);
    border-radius: var(--radius-pill);
    padding: .6rem 1rem;
    font-weight: 600;
    font-size: .9375rem;
    text-decoration: none;
  }

  .skip-link:focus { transform: none; }

  /* ── Section & ritme ── */
  .section {
    padding-block: 64px;
    border-bottom: var(--line) solid var(--ink);
  }

  @media (min-width: 1024px) {
    .section { padding-block: 112px; }
  }

  .section--yellow { background: var(--yellow); }
  .section--yellow .text-secondary { color: var(--ink-soft); }
  .section--lilac { background: var(--lilac-35); }

  /* ── Eyebrow: garis 24px, tanpa kurung siku ── */
  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: 'Inter', system-ui, sans-serif;
    font-size: .8125rem;
    font-weight: 500;
    letter-spacing: .08em;
    text-transform: uppercase;
  }

  .eyebrow::before {
    content: "";
    width: 24px;
    height: var(--line);
    background: currentColor;
    flex-shrink: 0;
  }

  /* ── Kotak sorot ── */
  .hl {
    background: var(--yellow);
    border: var(--line) solid var(--ink);
    border-radius: var(--radius-chip);
    padding: .02em .2em;
    line-height: 1.08;
  }

  .hl-anim {
    background-image: linear-gradient(var(--yellow), var(--yellow));
    background-repeat: no-repeat;
    animation: hl-draw .5s ease-out .2s both;
  }

  /* ── Stiker ── */
  .sticker { transform: rotate(-2deg); box-shadow: 0 2px 0 var(--ink); }

  .sticker-now {
    background: var(--yellow);
    border: var(--line) solid var(--ink);
    border-radius: var(--radius-chip);
    padding: .05em .6em;
    font-family: 'Inter', system-ui, sans-serif;
    font-size: .75rem;
    font-weight: 600;
    transform: rotate(-2deg);
    display: inline-block;
  }

  /* Segitiga kuning di sudut potret hero */
  .hero-triangle {
    position: absolute;
    right: -12px;
    bottom: -12px;
    width: 56px;
    height: 56px;
    background: var(--yellow);
    border-right: var(--line) solid var(--ink);
    border-bottom: var(--line) solid var(--ink);
    border-bottom-right-radius: var(--radius);
    clip-path: polygon(100% 0, 100% 100%, 0 100%);
  }

  /* ── Tombol ── */
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
    min-height: 48px;
    padding: 0 1.5rem;
    font-weight: 600;
    font-size: .9375rem;
    line-height: 1;
    border: var(--line) solid var(--ink);
    border-radius: var(--radius-pill);
    text-decoration: none;
    cursor: pointer;
    background: var(--paper);
    color: var(--ink);
    box-shadow: 0 2px 0 var(--ink);
    white-space: nowrap;
    flex-shrink: 0;
    transition: transform var(--dur) ease-out, box-shadow var(--dur) ease-out, background var(--dur) ease-out;
  }

  .btn:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }
  .btn--primary { background: var(--ink); color: var(--paper); }
  .btn--gmail { background: #EA4335; color: #FFFFFF; }
  .btn--gmail:hover { background: #d93025; }
  .btn--linkedin { background: #0A66C2; color: #FFFFFF; }
  .btn--linkedin:hover { background: #084e96; }
  .btn--instagram { background: #C9245B; color: #FFFFFF; }
  .btn--instagram:hover { background: #A61B4C; }
  .btn--threads { background: #111111; color: #FFFFFF; }
  .btn--threads:hover { background: #222222; }
  .btn--tiktok { background: #000000; color: #FFFFFF; }
  .btn--tiktok:hover { background: #1a1a1a; }
  .btn:hover { transform: translateY(-1px); box-shadow: 0 3px 0 var(--ink); }
  .btn:active { transform: translateY(1px); box-shadow: 0 0 0 var(--ink); }

  @media (prefers-reduced-motion: reduce) {
    .btn { transition: none; }
    .btn:hover, .btn:active { transform: none; }
  }

  /* ── Tautan teks ── */
  .link {
    color: inherit;
    font-weight: 600;
    text-decoration: underline;
    text-decoration-thickness: 1.5px;
    text-underline-offset: 4px;
  }
  .link:hover { background: var(--yellow); }

  /* ── Navigasi ── */
  .brand, .nav__link, .footer-nav a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
  }

  .nav__link { border-radius: 6px; padding-inline: 4px; }
  .nav__link:hover { background: var(--yellow); }
  .footer-nav { row-gap: 0; }

  /* ── Chip ── */
  .chip {
    display: inline-flex;
    align-items: center;
    min-height: 34px;
    padding: 0 .9rem;
    font-size: .8125rem;
    font-weight: 500;
    background: var(--paper);
    color: var(--ink);
    border: var(--line) solid var(--ink);
    border-radius: var(--radius-pill);
    cursor: default;
  }

  .chip--link {
    min-height: 44px;
    cursor: pointer;
    text-decoration: none;
    transition: background var(--dur) ease-out, color var(--dur) ease-out;
  }

  .chip--link:hover { background: var(--yellow); }

  .chip--hover {
    transition: background var(--dur) ease-out;
  }

  .chip--hover:hover { background: var(--yellow); }

  .chip[aria-pressed="true"],
  .chip[aria-selected="true"] {
    background: var(--ink);
    color: var(--paper);
    border-color: var(--ink);
  }

  /* ── Kartu ── */
  .card {
    background: #fff;
    border: var(--line) solid var(--ink);
    border-radius: var(--radius);
    padding: 1.5rem;
  }

  .quote {
    background: var(--lilac-35);
    border-radius: var(--radius);
    padding: 2rem 1.5rem;
    font-family: 'Inter', system-ui, sans-serif;
    font-weight: 500;
    font-size: clamp(1.5rem, 3vw, 2.25rem);
    line-height: 1.25;
    color: var(--ink);
    border-left: var(--line) solid var(--ink);
  }

  @media (min-width: 768px) {
    .quote { padding: 2.5rem 3rem; }
  }

  /* ── Ikon kerja ── */
  .work-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: var(--yellow);
    border: var(--line) solid var(--ink);
    border-radius: 12px;
  }

  .work-icon svg { width: 24px; height: 24px; }

  /* ── Ajakan video ── */
  .video-cta {
    display: inline-flex;
    align-items: center;
    gap: .625rem;
    min-height: 44px;
    padding: 0;
    border: 0;
    background: none;
    font: inherit;
    font-size: .9375rem;
    font-weight: 600;
    color: var(--ink);
    cursor: pointer;
    text-align: left;
  }

  .video-cta__dot {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 999px;
    background: var(--yellow);
    border: var(--line) solid var(--ink);
    font-size: .75rem;
  }

  .video-cta:hover .video-cta__dot { background: #FFD91A; }
  .video-cta--off { color: var(--muted); cursor: default; }
  .video-cta--off .video-cta__dot { background: var(--paper-2); color: var(--muted); }

  /* ── Poster video ── */
  .video-poster {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    border: var(--line) solid var(--ink);
    border-radius: var(--radius);
    overflow: hidden;
    background: var(--paper-2);
  }

  .video-poster__play {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    width: 72px;
    height: 72px;
    border-radius: 999px;
    background: var(--yellow);
    border: var(--line) solid var(--ink);
    font-size: 1.25rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 0 var(--ink);
    transition: transform var(--dur) ease-out, box-shadow var(--dur) ease-out;
  }

  .video-poster__play:hover { transform: translateY(-2px); box-shadow: 0 4px 0 var(--ink); }
  .video-poster__play:active { transform: translateY(1px); box-shadow: none; }

  .video-poster__duration {
    position: absolute;
    right: 12px;
    bottom: 12px;
    background: var(--paper);
    border: var(--line) solid var(--ink);
    border-radius: var(--radius-chip);
    padding: .15em .6em;
    font-size: .75rem;
    font-weight: 600;
  }

  /* ── Keadaan belum tersedia ── */
  .placeholder {
    border: var(--line) solid var(--ink);
    border-radius: var(--radius);
    background: var(--paper-2);
    padding: 1.5rem;
  }

  @media (min-width: 768px) {
    .placeholder { padding: 2rem; }
  }

  /* ── Galeri dokumentasi (masonry, rasio asli) ── */
  .photo-grid { columns: 1; column-gap: 16px; }

  @media (min-width: 640px) { .photo-grid { columns: 2; } }
  @media (min-width: 1024px) { .photo-grid { columns: 3; } }

  .photo-grid__item {
    position: relative;
    break-inside: avoid;
    margin: 0 0 16px;
    border: var(--line) solid var(--ink);
    border-radius: var(--radius);
    overflow: hidden;
    background: var(--paper-2);
  }

  .photo-grid__button { display: block; width: 100%; border: 0; padding: 0; background: none; cursor: zoom-in; }
  .photo-grid__button img { display: block; width: 100%; height: auto; transition: transform .3s ease-out; }
  .photo-grid__button:hover img { transform: scale(1.03); }

  .photo-grid__caption {
    background: var(--paper);
    border-top: var(--line) solid var(--ink);
    padding: .5rem .75rem;
    font-size: .875rem;
  }

  @media (prefers-reduced-motion: reduce) {
    .photo-grid__button img { transition: none; }
    .photo-grid__button:hover img { transform: none; }
  }

  /* ── Tab peta jejak ── */
  .tabs__list { display: flex; flex-wrap: wrap; gap: 8px; }
  .tabs__tab { min-height: 44px; }

  .tabs__panel {
    margin-top: 20px;
    background: #fff;
    border: var(--line) solid var(--ink);
    border-radius: var(--radius);
    padding: 1.25rem;
    animation: fade-in .15s ease-out;
  }

  @media (min-width: 768px) {
    .tabs__panel { padding: 1.75rem 2rem; }
  }

  /* ── Baris tautan Konten ── */
  .channel-row {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: .5rem 1rem;
    padding-block: 1.25rem;
    border-bottom: var(--line) solid var(--ink);
    text-decoration: none;
    transition: background var(--dur) ease-out, padding var(--dur) ease-out;
  }

  .channel-row:hover { background: var(--yellow); padding-inline: .75rem; }

  /* ── Modal (lightbox & video) ── */
  .modal {
    position: fixed;
    inset: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background: rgba(17, 17, 17, .72);
    animation: fade-in .15s ease-out;
  }

  .modal__dialog {
    position: relative;
    width: 100%;
    max-width: 900px;
    max-height: 90vh;
    overflow: auto;
    background: var(--paper);
    border: var(--line) solid var(--ink);
    border-radius: var(--radius);
    padding: 16px;
  }

  .modal__dialog--image { max-width: 1000px; }
  .modal__video { width: 100%; border-radius: 10px; display: block; background: #000; }
  .modal__caption { margin-top: 12px; font-size: .875rem; line-height: 1.55; }

  .modal__close {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 1;
    width: 44px;
    height: 44px;
    border-radius: 999px;
    background: var(--paper);
    border: var(--line) solid var(--ink);
    font-size: 1.5rem;
    line-height: 1;
    cursor: pointer;
  }

  /* ── Tombol kontak Sapa Saya ── */
  .hello-btns { display: flex; flex-direction: column; align-items: center; gap: .75rem; }
  .hello-btns .btn { width: 100%; }

  @media (min-width: 640px) {
    .hello-btns { flex-direction: row; flex-wrap: wrap; justify-content: center; gap: 1rem; }
    .hello-btns .btn { width: auto; }
  }

  /* ── Timeline ── */
  .timeline {
    position: relative;
    padding-left: 40px;
  }

  .timeline::before {
    content: "";
    position: absolute;
    left: 12px;
    top: 0;
    bottom: 0;
    width: var(--line);
    background: var(--ink);
    transform-origin: top;
    transform: scaleY(var(--progress, 1));
  }

  .timeline__item {
    position: relative;
    padding-block: 12px;
    display: grid;
    grid-template-columns: 130px 1fr;
    gap: 12px;
    align-items: start;
  }

  .timeline__item::before {
    content: "";
    position: absolute;
    left: -33.5px;
    top: 26px;
    width: 12px;
    height: 12px;
    background: var(--paper);
    border: var(--line) solid var(--ink);
  }

  .timeline__item.is-in::before { background: var(--yellow); }

  .timeline__period { font-size: .8125rem; font-weight: 500; font-variant-numeric: tabular-nums; padding-top: 4px; }

  @media (max-width: 640px) {
    .timeline { padding-left: 28px; }
    .timeline__item { grid-template-columns: 1fr; gap: 4px; }
    .timeline__item::before { left: -21.5px; }
  }

  /* ── Scroll reveal ── */
  .reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity .5s ease-out, transform .5s ease-out;
  }

  .reveal.is-in { opacity: 1; transform: none; }

  @media (prefers-reduced-motion: reduce) {
    .reveal { opacity: 1; transform: none; transition: none; }
  }
}

@keyframes hl-draw {
  from { background-size: 0% 100%; }
  to { background-size: 100% 100%; }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .hl-anim { animation: none; background-image: none; }
  .modal, .tabs__panel { animation: none; }
}
`;

  fs.writeFileSync(path.join(__dirname, "app", "globals.css"), finalCss.trim());
  console.log("globals.css updated. Bytes:", finalCss.length);
}

buildCss().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
