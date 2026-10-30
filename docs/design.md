# design.md: Landing Page Kang Dimmy (v4.1 — "clean neo-brutalism")
**Design system, komponen, animasi, dan aturan ajakan yang tenang**
Konten: `content_of_landing_v4.md` (v4.1) · Diperbarui: 26 Okt 2026

> **Referensi: gambar "Blossom".** v3 menebalkan semua garis dan memakai bayangan keras ekstrem
> (`6px 6px 0`) — itu brutalism klasik, dan berbeda dari gambar yang Anda tunjuk. Gambar Blossom
> justru **tipis, bersih, dan lapang**: garis 1.5px, sudut membulat besar, tanpa bayangan keras,
> warna datar, banyak ruang. v4 mengikuti gambar: **simple, clean, minimalist, elegan** — tetap
> dengan DNA brutalism (kotak sorot kuning bergaris, tipografi kapital besar, blok kuning bleed).
> Label: ✓ teramati di gambar · ▢ rancangan untuk Kang Dimmy.

## 1. Apa yang Diambil dari Referensi (v4 revisi)

| Teramati di gambar ✓ | Dipakai ▢ |
|---|---|
| Garis tipis (±1.5px) pada semua kartu, tombol, chip | Semua komponen memakai `--line: 1.5px` |
| Sudut membulat besar (±16–24px), tanpa bayangan keras | Radius 16px kartu, 999px pil; bayangan hanya offset kecil pada elemen aktif |
| Kotak sorot kuning dengan **garis penghubung tipis** antar-kata di H1 | Maks 2 kotak sorot di H1, garis penghubung SVG tipis |
| Eyebrow `[ KAPITAL ]` dalam kurung siku | Di tiap section |
| Latar abu-abu sage di sekitar "kertas" putih | Halaman krem `#FBFAF4` berperan sebagai kertas; section kuning bleed |
| Blok kuning penuh dengan konten hitam | Sekilas dan Sapa Saya |
| Tombol hitam kecil berbentuk pill, ikon putar kuning | Tombol utama + "Tonton Perkenalan" |
| Panel lavender di belakang potret dengan segitiga kuning di sudut | Frame foto hero |
| Foto dalam kartu bergaris dengan radius besar | Kartu aktivitas |
| Banyak ruang kosong; satu fokus per layar | Jarak antar section 112px; satu fokus per section |
| Rating bintang, avatar bertumpuk, angka merek lain | **Tidak dipakai.** Kang Dimmy memakai fakta sendiri |

## 2. Prinsip

**Bersih dan tipis, bukan tebal dan berat. Hangat, bukan memaksa.**

| Prinsip | Artinya |
|---|---|
| Garis tipis, tanpa bayangan keras | Bentuk terbaca dari garis + ruang, bukan dari bayangan. Neo-brutalism versi elegan |
| Warna datar, dibatasi | Kuning, lavender, hitam, krem. Maks 2 aksen per section |
| Satu sorotan per judul | Kotak kuning menandai kata penting, bukan seluruh kalimat |
| Perkenalan dulu | Ajakan sedikit dan tenang; tidak ada urgensi |
| Ruang napas | Jarak lega adalah bagian dari identitas, bukan sisa |

## 3. Token (v4 — diubah dari v3)

```css
:root {
  /* warna — sama seperti v3 */
  --paper:      #FBFAF4;
  --paper-2:    #F1EFE6;
  --ink:        #111111;
  --ink-soft:   #3A3A3A;
  --muted:      #5E5E5E;   /* hanya di atas --paper / --paper-2. Di atas kuning: pakai --ink-soft */
  --yellow:     #FFE94A;
  --lilac:      #CDBEFF;
  --focus:      #2F5BEA;

  /* garis — TIPIS, mengikuti referensi */
  --line:       1.5px;
  --shadow-sm:  0 2px 0 var(--ink);            /* hanya elemen interaktif */
  --shadow:     0 3px 0 var(--ink);            /* hover tombol */

  /* bentuk — radius besar seperti gambar */
  --radius:       18px;
  --radius-chip:  10px;
  --radius-pill:  999px;

  /* tipografi */
  --font-display: "Space Grotesk", system-ui, sans-serif;
  --font-body:    "Inter", system-ui, sans-serif;

  /* ritme */
  --space-2: 16px; --space-3: 24px; --space-4: 32px;
  --space-6: 48px; --space-8: 64px; --space-14: 112px;
  --container: 1200px;
  --measure: 64ch;
  --dur: .15s;
}
```

**Kontras (verifikasi dengan alat kontras sebelum tayang):**

| Pasangan | Perkiraan |
|---|---|
| `--ink` di atas `--yellow` | ±15:1 |
| `--ink-soft` di atas `--yellow` | ±9:1 — **wajib untuk teks sekunder di section kuning** (v3 memakai `--muted` ≈3.9:1, gagal AA) |
| `--paper` di atas `--ink` | ±17:1 |
| `--muted` di atas `--paper` | ±6:1 |

Tidak ada mode gelap di fase 1.

## 4. Tipografi

| Elemen | Font | Ukuran | Weight | Catatan |
|---|---|---|---|---|
| H1 | Space Grotesk | `clamp(2.5rem, 6.5vw, 4.5rem)` | 700 | Kapital, line-height 1.05, tracking -0.01em |
| H2 | Space Grotesk | `clamp(1.6rem, 3.5vw, 2.6rem)` | 700 | |
| H3 | Space Grotesk | 20–22px | 700 | |
| Eyebrow | Space Grotesk | 13px, tracking .08em | 500 | Kapital, `[ ... ]` |
| Body | Inter | 17–18 / 16px | 400 | Line-height 1.65, maks 64ch |
| Angka fakta | Space Grotesk, `tabular-nums` | 44–56px | 700 | |

Dua keluarga font, maksimal tiga weight, `font-display: swap`.

### Kotak sorot (dari referensi)

```css
.hl {
  display: inline-block;
  background: var(--yellow);
  border: var(--line) solid var(--ink);
  border-radius: 10px;
  padding: .02em .2em;
  line-height: 1.08;
}
```
Maks 2 kotak sorot per H1, 1 per H2. Garis penghubung: SVG tipis 1.5px `--ink`, `aria-hidden`, disembunyikan < 768px.

## 5. Grid dan Jarak

- Kontainer 1200px, gutter 24px (mobile 16px).
- Jarak antar section **112px** desktop, 64px mobile (lebih lega dari v3 — inti "clean").
- Pemisah section: pergantian latar atau garis tipis `1.5px` (bukan 2.5px).
- Breakpoint: 640 / 768 / 1024 / 1280.
- Mobile: satu kolom, stiker tanpa rotasi.

## 6. Komponen

### 6.1 Tombol

| Tingkat | Tampilan | Pemakaian |
|---|---|---|
| Utama | Pil hitam kecil, teks krem, garis `--ink`, shadow `0 2px 0` | Satu per section |
| Kedua | Pil krem, garis `--ink` | Navbar, Unduh CV, Tonton |
| Kuning | Pil kuning, garis `--ink` | Dipakai untuk titik timeline & sorot; tombol kuning dihapus di v4.1 (tanpa WA) |
| Tautan | Teks + garis bawah tipis; hover: latar kuning | "Lihat semua →", "Ikuti →" |
| Chip | Krem, garis 1.5px; hover kuning; terpilih hitam | Filter, topik |

**Status interaksi:**

| Status | Perilaku |
|---|---|
| Hover | `translateY(-1px)`, shadow `0 3px 0` |
| Aktif | `translateY(1px)`, shadow hilang |
| Fokus | `outline: 3px solid var(--focus); outline-offset: 3px` |
| Reduced motion | Tanpa pergeseran, hanya warna |

### 6.2 Navbar
Bar putih bergaris tipis (sticky, radius bawah), logo teks, empat tautan, tombol "Sapa Saya" outline. Mobile: tombol "Menu" membuka daftar penuh.

### 6.3 Hero (mengikuti komposisi gambar)

```
┌──────────────────────────────┬───────────────────┐
│ [ PUBLIC SPEAKING TRAINER …] │ ┌───────────────┐ │
│ [HEY, SAYA]──┐               │ │ potret 3:4    │ │
│ KANG DIMMY   │garis penghubung│ │ panel lilac,  │ │
│ & PUBLIC     ┘SPEAKER        │ │ segitiga kuning│ │
│ sub-headline (maks 64ch)     │ │ di sudut      │ │
│ [Kenali ↓]  ▶ Tonton         │ └───────────────┘ │
├──────────────┬───────────────┴───────────────────┤
│ 10+ tahun    │ Hampir 40 kota                    │
└──────────────┴───────────────────────────────────┘
```
Kartu fakta di bawah, dipisah garis tipis. Tidak ada avatar, rating, atau angka selain fakta sendiri.

### 6.4 Sekilas (kuning penuh)
Empat kartu putih bergaris tipis radius 18px, angka besar `tabular-nums`, label kecil. Di bawahnya chip sektor dan baris afiliasi teks. Teks sekunder di section ini memakai `--ink-soft` (bukan `--muted`).

### 6.5 Kartu bidang kerja
Kartu putih bergaris tipis, ikon outline 2px di kotak kuning kecil, judul, deskripsi. **Tanpa tombol**, tidak dapat diklik.

### 6.6 Strip "Cara saya bekerja" (v4: bukan section terpisah)
Baris 01–04 di akhir section Kerja: angka di kotak kuning kecil + judul tebal + satu kalimat. Horizontal desktop, vertikal mobile.

### 6.7 Timeline dengan garis visual (v4.1)

Struktur: dua kolom — kolom kiri sempit berisi periode (teks `--muted`, `tabular-nums`), kolom kanan berisi kartu entri. Di antara keduanya **garis vertikal menerus**:

```css
.timeline { position: relative; padding-left: 40px; }
.timeline::before {
  content: ""; position: absolute; left: 12px; top: 0; bottom: 0;
  width: 1.5px; background: var(--ink);
  transform-origin: top;
  transform: scaleY(var(--progress, 0));      /* dianimasikan via scroll, lihat §6.14 */
}
.timeline__item { position: relative; padding-block: var(--space-3); }
.timeline__item::before {                      /* titik kotak bergaris */
  content: ""; position: absolute; left: -34px; top: 26px;
  width: 12px; height: 12px; background: var(--yellow);
  border: var(--line) solid var(--ink);
}
.timeline__item--now::after {                  /* stiker "Sekarang" */
  content: "Sekarang"; margin-left: 12px;
  background: var(--yellow); border: var(--line) solid var(--ink);
  border-radius: var(--radius-chip); padding: .1em .6em;
  font: 600 .75rem var(--font-display); transform: rotate(-2deg); display: inline-block;
}
```

- Entri berjalan ("– kini") dapat stiker "Sekarang".
- Mobile: kolom periode pindah ke dalam kartu; garis tetap di kiri, padding 28px.
- Sub-section **Pendidikan** memakai timeline mini yang sama, dipisah heading H3 "Pendidikan" (v4.1: tidak lagi satu tabel dengan pekerjaan).

### 6.8 Kartu aktivitas
Foto 16:9 bergaris radius besar, chip jenis, tanggal + kota (`--muted`), judul maks 2 baris. Kartu sorotan latar lavender.

### 6.9 Poster video
16:9 bergaris, tombol putar bulat kuning (▶ hitam), label durasi. `aria-label="Putar video perkenalan, 90 detik"`.

### 6.10 Sapa Saya
Latar kuning penuh, satu kartu putih di tengah: dua cara menyapa (email, Instagram — v4.1 tanpa WhatsApp), chip topik, formulir 3 kolom (email-only). Tombol utama formulir hitam.

### 6.11 Footer
Hitam, teks krem, tagline, tautan, ikon sosial border krem.

### 6.12 Animasi (v4.1 — baru)

Prinsip: **animasi menjelaskan, bukan menghibur.** Satu pola reveal di seluruh halaman, plus dua momen khusus. `prefers-reduced-motion: reduce` → tanpa animasi, elemen langsung terlihat.

**1. Scroll reveal (semua section)** — tiap blok konten (heading, kartu, chip-row) fade-up sekali saat masuk viewport, dengan stagger antar saudara:

```css
.reveal { opacity: 0; transform: translateY(24px);
          transition: opacity .5s ease-out, transform .5s ease-out; }
.reveal.is-in { opacity: 1; transform: none; }
/* stagger: anak ke-n delay n*60ms, maks 5 */
```

```js
const io = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
}), { threshold: 0.15, rootMargin: "0px 0px -40px" });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
```

- Threshold 0.15 + rootMargin negatif: mulai saat elemen benar-benar terlihat.
- `unobserve` → animasi sekali, tidak mengulang saat scroll naik-turun.
- Kartu dalam grid: stagger 60ms per kartu; heading tanpa stagger.

**2. Garis timeline tumbuh** — garis vertikal timeline (§6.7) memakai `scaleY(var(--progress))`. Tiap entri yang masuk viewport menaikkan `--progress` satu langkah (rAF/scroll). Titik kotak tiap entri berubah krem → kuning saat garis melewatinya.

**3. Kotak sorot hero** — `.hl` masuk dengan efek "stabilo tergambar": `background-size: 0% 100% → 100% 100%`, 500ms, 200ms setelah teks muncul. Sekali saja. Satu-satunya momen display; hero halaman brand.

**Batas:**
- Level gerak L2 (reveal halus). Durasi tunggal 500ms, easing `ease-out`.
- Tidak ada parallax, scroll-jacking, atau looping. Navbar tanpa animasi masuk. Accordion 200ms.
- Dekorasi `aria-hidden` ikut reveal induknya, tanpa animasi sendiri.

### 6.13 Dekorasi
Rotasi -2° hanya pada stiker kecil. Ornamen geometris (segitiga kuning, garis penghubung) maks dua per layar, `aria-hidden`, tidak menutupi teks.

## 7. Pemetaan Section

| Section | Latar | Perlakuan |
|---|---|---|
| Hero | Krem | Bento tipis, kotak sorot, potret lilac |
| Sekilas | **Kuning** | 4 kartu fakta + chip sektor |
| Tentang | Krem | Cerita + video + 3 nilai |
| Kerja | Krem | 4 kartu + chip latihan + **strip 01–04** (v4) |
| Perjalanan | Krem | Timeline, filter, unduh CV |
| Aktivitas | Lilac 35% | Grid kartu, filter |
| Konten | Krem | 4 kanal |
| Kata Mereka | Lilac | **Dihapus di v4.1** |
| Seputar Saya | Krem | Accordion |
| Sapa Saya | **Kuning** | Satu kartu putih |
| Footer | **Hitam** | Teks krem |

Ritme: krem → kuning → krem ×3 → lilac → krem ×2 → kuning → hitam.

## 8. Ajakan yang Tenang

Sama seperti v3: satu tombol hitam per section (hanya hero), tombol kontak hanya di Sapa Saya, tanpa bar melayang/pop-up/urgensi, label berawalan kata kerja ramah (Kenali, Tonton, Ikuti, Sapa, Ngobrol), kartu kerja tanpa tombol. Total ±10 ajakan.

## 9. Implementasi

### 9.1 Gaya dasar

```css
body { background: var(--paper); color: var(--ink); font: 400 1.0625rem/1.65 var(--font-body); }
h1, h2, h3 { font-family: var(--font-display); font-weight: 700; margin: 0; }
h1 { font-size: clamp(2.5rem, 6.5vw, 4.5rem); line-height: 1.05; letter-spacing: -.01em; text-transform: uppercase; }

.eyebrow { font: 500 .8125rem/1.4 var(--font-display); letter-spacing: .08em; text-transform: uppercase; }
.eyebrow::before { content: "[ "; } .eyebrow::after { content: " ]"; }

.card {
  background: #fff; border: var(--line) solid var(--ink);
  border-radius: var(--radius); padding: var(--space-4);
}
.section         { padding-block: var(--space-14); border-bottom: var(--line) solid var(--ink); }
.section--yellow { background: var(--yellow); }
.section--yellow .text-secondary { color: var(--ink-soft); }  /* bukan --muted */
.section--ink    { background: var(--ink); color: var(--paper); }
```

### 9.2 Tombol

```css
.btn {
  display: inline-flex; align-items: center; gap: .5rem;
  min-height: 48px; padding: 0 1.4rem;
  font: 600 1rem/1 var(--font-body);
  border: var(--line) solid var(--ink); border-radius: var(--radius-pill);
  text-decoration: none; cursor: pointer; background: var(--paper); color: var(--ink);
  box-shadow: 0 2px 0 var(--ink);
  transition: transform var(--dur) ease-out, box-shadow var(--dur) ease-out;
}
.btn:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }
.btn--primary { background: var(--ink); color: var(--paper); }
.btn--yellow  { background: var(--yellow); }
.btn:hover  { transform: translateY(-1px); box-shadow: 0 3px 0 var(--ink); }
.btn:active { transform: translateY(1px); box-shadow: 0 0 0 var(--ink); }

.link { color: inherit; font-weight: 600; text-decoration: underline;
        text-decoration-thickness: 1.5px; text-underline-offset: 4px; }
.link:hover { background: var(--yellow); }
/* v3 memakai gradien + transisi background-size yang tidak pernah beranimasi;
   v4 memakai underline biasa + hover latar kuning. Lebih sederhana dan sesuai referensi. */

@media (prefers-reduced-motion: reduce) {
  .btn { transition: none; }
  .btn:hover, .btn:active { transform: none; }
}
```

### 9.3 H1 dengan kotak sorot

```html
<h1>
  <span>Hey, saya</span><br>
  <span class="hl">Kang Dimmy</span><br>
  <span>&amp; Public Speaker</span>
</h1>
<svg class="connector" aria-hidden="true" focusable="false" viewBox="0 0 120 80">
  <polyline points="0,10 60,10 60,70 120,70" fill="none" stroke="#111" stroke-width="1.5"/>
</svg>
```

### 9.4 Formulir "Sapa Saya" (v4.1: email-only, tanpa WhatsApp)

Semua jalur WhatsApp dihapus. Tiga kolom + persetujuan (UU 27/2022), kirim ke `inquiries`:

```js
// field 2 kini selalu email → kolom `email` di tabel inquiries
```

Kirim via Edge Function + Turnstile, bukan insert langsung. Chip topik mengisi awal kolom Pesan.

### 9.6 Pelacakan (ringan)
Satu event `cta_click` dengan `cta_id`. Metrik: scroll depth, pemutaran video, klik "Sapa Saya", pesan masuk. Tanpa retargeting.

## 10. Aksesibilitas

- Kontras teks ≥ 4.5:1; **teks sekunder di section kuning memakai `--ink-soft`**.
- Target sentuh ≥ 44×44px; tombol 48px.
- Fokus keyboard: cincin biru 3px.
- `prefers-reduced-motion` mematikan pergeseran.
- Video: `aria-label` + transkrip ringkas.
- Dekorasi `aria-hidden`; satu H1; skip link.

## 11. Urutan Pengerjaan

| # | Pekerjaan | Usaha |
|---|---|---|
| 1 | Token v4, tipografi, kelas dasar (`.card`, `.btn`, `.hl`, `.link`) | Rendah |
| 2 | Navbar + Hero (bento tipis + kotak sorot) | Sedang |
| 3 | Sekilas, Tentang, Kerja (+ strip 01–04) | Sedang |
| 4 | Perjalanan (timeline, filter, accordion) | Sedang |
| 5 | Aktivitas + database | Sedang |
| 6 | Konten, Sapa Saya (formulir + pemetaan), animasi reveal | Rendah |
| 7 | Footer, uji mobile, uji kontras (terutama di kuning), performa | Rendah |
| 8 | Video perkenalan | Perlu produksi |

## 12. Data yang Masih Dibutuhkan

| Kebutuhan | Dipakai untuk |
|---|---|
| Foto potret + dokumentasi | Frame potret, kartu aktivitas |
| Video perkenalan 90 detik | Poster video |
| Email | Sapa Saya |
| Konfirmasi kuning sebagai identitas | Token `--yellow` |

## 13. Ringkasan Perubahan v3 → v4.1

| Diubah | Dari | Ke | Alasan |
|---|---|---|---|
| Garis | 2.5px + bayangan 6px keras | 1.5px, bayangan hanya di tombol | Mengikuti gambar referensi; simple & elegan |
| Radius | 14px | 18px | Sudut membulat besar di referensi |
| Teks di kuning | `--muted` | `--ink-soft` | `--muted` di kuning ≈3.9:1, gagal WCAG AA |
| `.link:hover` | gradien + transisi background-size yang mati | underline + hover kuning | Bug interaksi di v3 |
| Section "Cara Saya Bekerja" | Section sendiri | Strip di akhir Kerja | Halaman lebih pendek; konten tipis |
| Filter aktivitas | 6 chip | 4 chip | Lebih sederhana |
| **WA** (v4.1) | Tombol WA + template pesan + chip topik WA | Dihapus; kontak email + IG + formulir email-only | Permintaan |
| **Kata Mereka & FAQ** (v4.1) | Section opsional | Dihapus | Permintaan |
| **Pendidikan** (v4.1) | Satu tabel dengan pengalaman | Sub-section terpisah dengan timeline mini | Lebih rapi |
| **Timeline** (v4.1) | Tanpa garis | Garis vertikal yang tumbuh saat scroll + titik menyala | Permintaan |
| **Animasi** (v4.1) | — | Scroll reveal + stagger, garis timeline, stabilo hero, L2, reduced-motion aman | Permintaan |
