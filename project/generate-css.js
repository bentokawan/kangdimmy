const fs = require('fs');
const path = require('path');
const { compile } = require('tailwindcss');

async function buildCss() {
  const indexCss = fs.readFileSync(path.join(__dirname, 'node_modules', 'tailwindcss', 'index.css'), 'utf8');

  const compiler = await compile(indexCss, {
    base: __dirname,
    loadStylesheet: async () => ({ content: '', base: __dirname })
  });

  const page = fs.readFileSync(path.join(__dirname, 'app', 'page.tsx'), 'utf8');
  const layout = fs.readFileSync(path.join(__dirname, 'app', 'layout.tsx'), 'utf8');

  const classes = new Set();
  const regex = /className=["'`]([^"'`]+)["'`]/g;
  let match;

  [page, layout].forEach(content => {
    while ((match = regex.exec(content)) !== null) {
      match[1].split(/\s+/).filter(Boolean).forEach(c => classes.add(c));
    }
  });

  // Base utilities we always want
  [
    'flex', 'grid', 'hidden', 'block', 'inline-block', 'inline-flex', 'relative', 'absolute', 'fixed', 'sticky',
    'w-full', 'h-full', 'w-fit', 'w-5', 'h-5', 'w-4', 'h-4', 'w-6', 'h-6', 'shrink-0',
    'max-w-[1200px]', 'max-w-[960px]', 'max-w-[840px]', 'max-w-[720px]', 'max-w-[640px]', 'mx-auto',
    'px-4', 'px-5', 'px-6', 'py-2', 'py-2.5', 'py-3', 'py-12', 'py-20', 'py-24',
    'gap-2', 'gap-2.5', 'gap-3', 'gap-4', 'gap-5', 'gap-6', 'gap-x-4', 'gap-x-6', 'gap-y-3', 'gap-y-4',
    'mb-2', 'mb-3', 'mb-4', 'pb-3', 'pb-4',
    'text-center', 'text-left', 'text-right', 'items-center', 'items-start', 'justify-between', 'justify-center',
    'rounded-full', 'rounded-xl', 'rounded-2xl', 'rounded-3xl', 'border', 'border-t', 'border-b',
    'border-l', 'border-r', 'border-l-2', 'border-y', 'shadow-sm', 'shadow-xs',
    'transition-all', 'transition-colors', 'transition-transform', 'duration-300',
    'animate-ping', 'scale-110', 'ring-4', 'opacity-75', 'opacity-50', 'object-cover', 'object-top',
    'cursor-default', 'whitespace-nowrap',
    'hover:-translate-y-1', 'hover:-translate-y-0.5', 'hover:translate-y-[1px]',
    'backdrop-blur-sm', 'sr-only', 'tabular-nums', 'italic',
  ].forEach(c => classes.add(c));

  const builtTailwind = compiler.build(Array.from(classes));

  // Design system v4.1 — clean neo-brutalism (docs/design_v4.md)
  // Paper: #FBFAF4 · Ink: #111111 · Yellow: #FFE94A · Lilac: #CDBEFF
  // Fonts: Space Grotesk (display) + Inter (body)
  const finalCss = `
${builtTailwind}

/* ── Design tokens (design_v4.md §3) ── */
:root {
  --paper: #FBFAF4;
  --paper-2: #F1EFE6;
  --ink: #111111;
  --ink-soft: #3A3A3A;
  --muted: #5E5E5E;      /* hanya di atas paper; di atas kuning pakai --ink-soft */
  --yellow: #FFE94A;
  --lilac: #CDBEFF;
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

.font-display { font-family: 'Space Grotesk', system-ui, sans-serif; }

::selection { background: var(--yellow); color: var(--ink); }

/* Scrollbar tipis */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--paper); }
::-webkit-scrollbar-thumb { background: #D8D4C8; border-radius: 999px; }

/* ── Eyebrow: [ KAPITAL ] ── */
.eyebrow {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-size: .8125rem; font-weight: 500;
  letter-spacing: .08em; text-transform: uppercase;
}
.eyebrow::before { content: "[ "; }
.eyebrow::after { content: " ]"; }

/* ── Kotak sorot (referensi Blossom) ── */
.hl {
  background: var(--yellow);
  border: var(--line) solid var(--ink);
  border-radius: var(--radius-chip);
  padding: .02em .2em;
  line-height: 1.08;
}
@keyframes hl-draw {
  from { background-size: 0% 100%; }
  to { background-size: 100% 100%; }
}
.hl-anim {
  background-image: linear-gradient(var(--yellow), var(--yellow));
  background-repeat: no-repeat;
  animation: hl-draw .5s ease-out .2s both;
}
@media (prefers-reduced-motion: reduce) {
  .hl-anim { animation: none; background-image: none; }
}

/* ── Stiker kecil (rotasi -2°) ── */
.sticker { transform: rotate(-2deg); box-shadow: 0 2px 0 var(--ink); }
.sticker-now {
  background: var(--yellow); border: var(--line) solid var(--ink);
  border-radius: var(--radius-chip); padding: .05em .6em;
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-size: .75rem; font-weight: 600;
  transform: rotate(-2deg); display: inline-block;
}

/* ── Say Hello buttons: full-width di mobile, mengiring di desktop ── */
.hello-btns { display: flex; flex-direction: column; align-items: center; gap: .75rem; }
.hello-btns .btn { width: 100%; }
@media (min-width: 640px) {
  .hello-btns { flex-direction: row; flex-wrap: wrap; justify-content: center; gap: 1rem; }
  .hello-btns .btn { width: auto; }
}

/* ── Tombol ── */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  min-height: 46px;
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
.btn--instagram { background: #E1306C; color: #FFFFFF; }
.btn--instagram:hover { background: #c9245b; }
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
  color: inherit; font-weight: 600;
  text-decoration: underline; text-decoration-thickness: 1.5px; text-underline-offset: 4px;
}
.link:hover { background: var(--yellow); }

/* ── Chip ── */
.chip {
  display: inline-flex; align-items: center;
  min-height: 34px; padding: 0 .9rem;
  font-size: .8125rem; font-weight: 500;
  background: var(--paper); color: var(--ink);
  border: var(--line) solid var(--ink);
  border-radius: var(--radius-pill);
  cursor: default;
}

/* ── Kartu: garis TIPIS, radius besar, tanpa bayangan keras ── */
.card {
  background: #fff;
  border: var(--line) solid var(--ink);
  border-radius: var(--radius);
  padding: 1.5rem;
}

/* ── Input ── */
.input {
  width: 100%; min-height: 46px; padding: .6rem .9rem;
  font: inherit; font-weight: 400;
  background: var(--paper);
  border: var(--line) solid var(--ink);
  border-radius: 12px;
  color: var(--ink);
}
.input::placeholder { color: var(--muted); }
.input:focus-visible { outline: 3px solid var(--focus); outline-offset: 2px; }

/* ── Timeline dengan garis visual (design_v4.md §6.7) ── */
.timeline {
  position: relative;
  padding-left: 40px;
}
.timeline::before {
  content: ""; position: absolute; left: 12px; top: 0; bottom: 0;
  width: var(--line); background: var(--ink);
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
  content: ""; position: absolute; left: -33.5px; top: 26px;
  width: 12px; height: 12px;
  background: var(--yellow);
  border: var(--line) solid var(--ink);
}
.timeline__period { font-size: .8125rem; font-weight: 500; font-variant-numeric: tabular-nums; padding-top: 4px; }
@media (max-width: 640px) {
  .timeline { padding-left: 28px; }
  .timeline__item { grid-template-columns: 1fr; gap: 4px; }
  .timeline__item::before { left: -21.5px; }
}

/* ── Scroll reveal (design_v4.md §6.12) ── */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity .5s ease-out, transform .5s ease-out;
}
.reveal.is-in { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
}

/* ── Smooth scroll: anchor berhenti di bawah navbar ── */
html { scroll-behavior: smooth; scroll-padding-top: 0; }
section[id] { scroll-margin-top: 95px; }
@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }

`;

  fs.writeFileSync(path.join(__dirname, 'app', 'globals.css'), finalCss.trim());
  console.log('globals.css updated with design system v4.1 (Space Grotesk + Inter, clean neo-brutalism). Bytes:', finalCss.length);
}

buildCss().catch(console.error);
