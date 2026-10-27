# design.md: Landing Page Kang Dimmy (v3, neo-brutalism)
**Design system, komponen, dan aturan ajakan yang tenang**
Konten: `content_of_landing.md` · Strategi dan struktur: `LP-KangDimmy.md` (v3) · Diperbarui: 26 Okt 2026

> **Sumber referensi.**
> 1. **Gambar "Blossom" yang Anda lampirkan** → arah visual.
> 2. **nisakusnadi.space** → pola struktur satu halaman (hanya struktur dan copy yang terbaca; gayanya tidak terbaca).
>
> Dari gambar saya hanya mengambil **gaya dan pola**, bukan merek, foto, logo, avatar, atau rating-nya. Warna dari gambar adalah perkiraan visual, bukan nilai hasil ekstraksi.
> Label: ✓ teramati di referensi · ▢ rancangan untuk Kang Dimmy.

---

## 1. Apa yang Diambil dari Referensi Gambar

| Teramati di gambar ✓ | Dipakai di Kang Dimmy ▢ |
|---|---|
| Eyebrow dalam kurung siku, mis. `[ BEST SOLUTIONS ]` | `[ TENTANG SAYA ]` di tiap section |
| Headline huruf kapital besar dan tebal | H1 "HEY, SAYA / KANG DIMMY / & PUBLIC SPEAKER" |
| Kata kunci dalam **kotak sorot kuning** bergaris, dihubungkan **garis tipis** antar-kotak | Maksimal 2 kotak sorot di H1, garis penghubung dekoratif |
| Kartu putih bergaris dengan sudut membulat, tersusun seperti bento | Hero dan Sekilas memakai tata letak bento |
| Tombol hitam berbentuk pil | Tombol utama (satu per section) |
| Tombol putar bulat berwarna kuning | Poster video perkenalan |
| Blok kuning penuh (bleed) sebagai pemisah section | Section Sekilas dan Sapa Saya |
| Panel lavender di belakang potret, sudut kuning segitiga | Frame potret |
| Kartu angka dengan tumpukan avatar, rating bintang | **Tidak dipakai.** Itu data milik merek lain; Kang Dimmy memakai fakta sendiri (tahun, kota, sektor) |
| Header berupa kartu bergaris dengan tombol hitam di kanan | Navbar bergaris dengan tombol "Sapa Saya" |

**Dari gambar ke neo-brutalism.** Gambar bergaya "bersih tipis". Untuk neo-brutalism, garis ditebalkan, ditambah bayangan keras tanpa blur, dan warna dipakai datar. Hasilnya tetap rapi, tidak norak, supaya cocok untuk audiens HR, instansi, dan sekolah.

---

## 2. Prinsip Desain

**Berani, tetapi tertata. Hangat, bukan memaksa.**

| Prinsip | Artinya |
|---|---|
| **Garis tebal dan bayangan keras** | Bentuk terbaca jelas tanpa dekorasi tambahan |
| **Warna datar, dibatasi** | Kuning, lavender, hitam, krem. Satu section memakai maksimal dua warna aksen |
| **Satu sorotan per judul** | Kotak kuning menandai kata penting, bukan seluruh kalimat |
| **Perkenalan dulu** | Tombol sedikit dan tenang. Tidak ada bar melayang, pop-up, atau penghitung waktu |
| **Foto asli** | Foto sesi dan potret di dalam frame bergaris |
| **Ruang napas** | Neo-brutalism cenderung ramai; di sini sengaja diberi jarak lega supaya tetap profesional |

---

## 3. Token

```css
:root {
  /* warna */
  --paper:      #FBFAF4;   /* latar halaman (krem) */
  --paper-2:    #F1EFE6;   /* latar kartu sekunder */
  --ink:        #111111;   /* teks, garis, bayangan */
  --ink-soft:   #3A3A3A;
  --muted:      #5E5E5E;   /* teks sekunder (±6:1 di atas --paper) */
  --yellow:     #FFE94A;   /* sorotan utama (perkiraan dari gambar) */
  --lilac:      #CDBEFF;   /* panel potret, testimoni */
  --focus:      #2F5BEA;   /* cincin fokus */

  /* garis dan bayangan */
  --line:       2.5px;
  --line-thin:  1.5px;
  --shadow-sm:  3px 3px 0 var(--ink);
  --shadow:     6px 6px 0 var(--ink);
  --shadow-lg:  10px 10px 0 var(--ink);

  /* bentuk */
  --radius:       14px;
  --radius-chip:  10px;
  --radius-pill:  999px;

  /* tipografi */
  --font-display: "Space Grotesk", system-ui, sans-serif;
  --font-body:    "Inter", system-ui, sans-serif;

  /* ritme */
  --space-1: 8px;  --space-2: 16px; --space-3: 24px; --space-4: 32px;
  --space-6: 48px; --space-8: 64px; --space-12: 96px; --space-16: 128px;
  --container: 1200px;
  --measure: 66ch;
  --dur: .12s;
  --ease: ease-out;
}
```

**Kontras (perkiraan, verifikasi dengan alat kontras sebelum tayang):**

| Pasangan | Perkiraan rasio |
|---|---|
| `--ink` di atas `--yellow` | ±15:1 |
| `--ink` di atas `--lilac` | ±11:1 |
| `--paper` di atas `--ink` | ±17:1 |
| `--muted` di atas `--paper` | ±6:1 |

Tidak ada mode gelap di fase 1, agar identitas visual konsisten.

---

## 4. Tipografi

| Elemen | Font | Desktop / Mobile | Weight | Catatan |
|---|---|---|---|---|
| H1 | Space Grotesk | `clamp(2.5rem, 7vw, 5rem)` | 700 | Kapital, line-height 1.02, tracking -0.02em |
| H2 | Space Grotesk | `clamp(1.75rem, 4vw, 3rem)` | 700 | Huruf judul biasa (bukan kapital semua) |
| H3 | Space Grotesk | 20–24px | 700 | |
| Eyebrow | Space Grotesk | 13px, tracking .08em | 500 | Kapital, dalam kurung siku `[ ... ]` |
| Body | Inter | 17–18 / 16px | 400 | Line-height 1.65, lebar maks 66ch |
| Angka fakta | Space Grotesk, `tabular-nums` | 48–64px | 700 | |

Dua keluarga font saja, muat hanya weight yang dipakai, `font-display: swap`.

### Pola kotak sorot (dari referensi)

```css
.hl {
  display: inline-block;
  background: var(--yellow);
  border: var(--line) solid var(--ink);
  border-radius: var(--radius-chip);
  padding: .02em .22em;
  line-height: 1.05;
}
```
Maksimal **2 kotak sorot per H1**, dan 1 per H2. Garis penghubung antar-kotak adalah SVG dekoratif (`aria-hidden="true"`), 2px `--ink`, disembunyikan di bawah 768px.

---

## 5. Grid, Jarak, dan Garis

- Kontainer maks 1200px, 12 kolom, gutter 24px (mobile 16px), margin sisi 16px.
- Jarak antar section 96–128px desktop, 64px mobile.
- Setiap section dipisah garis penuh `2.5px --ink` atau pergantian warna latar.
- Breakpoint: 640 / 768 / 1024 / 1280.
- Di mobile: satu kolom, bayangan mengecil ke `--shadow-sm`, rotasi stiker dimatikan.

---

## 6. Komponen

### 6.1 Tombol (ajakan yang tenang)

| Tingkat | Tampilan | Pemakaian |
|---|---|---|
| **Utama** | Pil hitam, teks krem, border `--ink`, bayangan kuning `4px 4px 0 var(--yellow)` | **Satu per section**: "Kenali Perjalanan Saya" |
| **Kedua** | Pil krem, border `--ink`, bayangan `--shadow-sm` | "Tonton Perkenalan", "Unduh CV (PDF)", "Sapa Saya" di navbar |
| **Kuning** | Pil kuning, border `--ink`, bayangan `--shadow-sm` | Hanya di Sapa Saya: "Ngobrol di WhatsApp" |
| **Tautan** | Teks dengan sorotan kuning di setengah bawah (efek stabilo); penuh saat hover | "Lihat semua aktivitas →", "Ikuti →" |
| **Chip topik** | Krem, border 2px; hover kuning; terpilih hitam | Filter dan topik opsional di Sapa Saya |

**Status interaksi:**

| Status | Perilaku |
|---|---|
| Diam | Bayangan keras |
| Hover | Bergeser `translate(-2px,-2px)`, bayangan membesar 2px |
| Aktif (ditekan) | Bergeser `translate(3px,3px)`, bayangan hilang |
| Fokus | `outline: 3px solid var(--focus); outline-offset: 3px` |
| Nonaktif | Latar `--paper-2`, teks `--muted`, tanpa bayangan |
| Reduced motion | Tanpa pergeseran; hanya perubahan warna |

### 6.2 Navbar
Kartu bergaris di bagian atas (sticky), logo "Kang Dimmy" sebagai stiker bergaris, lima tautan, dan tombol "Sapa Saya" (tingkat kedua). Di mobile menjadi tombol "Menu" yang membuka daftar tautan penuh.

### 6.3 Hero (bento)
```
┌───────────────────────────┬──────────────────────┐
│ [ PUBLIC SPEAKING … ]     │  ┌────────────────┐  │
│ HEY, SAYA                 │  │ potret (frame  │  │
│ [KANG DIMMY]──┐           │  │ lilac + sudut  │  │
│ & [PUBLIC     ┘SPEAKER]   │  │ kuning)        │  │
│ sub-headline              │  └────────────────┘  │
│ [Kenali… ↓] [▶ Tonton…]   │   stiker: Bandung    │
├───────────────┬───────────┴──────────────────────┤
│ 10+ tahun     │ Hampir 40 kota                   │
└───────────────┴──────────────────────────────────┘
```
Dua kartu fakta saja. Tidak ada avatar, rating, atau penghitung.

### 6.4 Kartu fakta (Sekilas)
Latar section kuning penuh. Empat kartu putih bergaris, bayangan `--shadow`, angka besar, label kecil. Di bawahnya baris chip sektor (putih, border 2px) dan baris afiliasi dalam teks.

### 6.5 Kartu bidang kerja
Kartu putih bergaris, ikon di kotak kuning (stroke 2px), judul, deskripsi. **Tanpa tombol.** Seluruh kartu tidak dapat diklik.

### 6.6 Langkah bernomor
Angka besar `01–04` dalam kotak kuning bergaris, di samping judul dan deskripsi. Horizontal di desktop, vertikal di mobile.

### 6.7 Timeline CV
Garis vertikal `2.5px --ink`; setiap titik berupa kotak 14px bergaris; peran yang masih berjalan diberi stiker "Sekarang" (kuning, rotasi -2°). Detail dalam accordion dengan ikon plus/minus.

### 6.8 Kartu aktivitas
Foto 16:9 dalam frame bergaris, chip jenis, tanggal dan kota (teks `--muted`), judul maks 2 baris, ringkasan maks 2 baris. Seluruh kartu dapat diklik ke halaman detail. Kartu sorotan lebih besar dengan latar lavender.

### 6.9 Poster video
Poster 16:9 bergaris dengan tombol putar bulat kuning (ikon ▶ hitam) di tengah, label durasi di sudut ("90 dtk"). Setelah video selesai tidak ada ajakan tambahan.

### 6.10 Testimoni (opsional)
Kartu lavender, kutipan 18–20px, nama dan organisasi di bawah. Section disembunyikan bila belum ada 3 testimoni asli.

### 6.11 FAQ
Accordion kartu putih bergaris, pertanyaan tebal, ikon plus di kotak kuning.

### 6.12 Sapa Saya (kontak)
Latar kuning penuh, satu kartu putih bergaris di tengah memuat: judul, sub, tiga cara menyapa, chip topik opsional, dan formulir 3 kolom. Tombol WhatsApp berbentuk pil kuning (tingkat "Kuning").

### 6.13 Footer
Latar hitam, teks krem, tagline, tautan, ikon sosial dengan border krem.

### 6.14 Stiker dan dekorasi
Rotasi `-2°` hanya pada label kecil (lokasi, "Sekarang"). Dekorasi geometris (segitiga kuning, kotak lavender) maksimal dua per layar, `aria-hidden`. Ornamen tidak boleh menutupi teks.

---

## 7. Pemetaan Section

| Section | Latar | Perlakuan |
|---|---|---|
| Hero | Krem | Bento, kotak sorot, potret dalam frame lavender |
| Sekilas | **Kuning penuh** | 4 kartu fakta, chip sektor |
| Tentang | Krem | Teks 7 kolom, nilai kerja di kartu, poster video |
| Kerja | Krem | 4 kartu bidang, chip "Yang sering saya latih" |
| Cara Saya Bekerja | Krem-2 | 4 langkah bernomor |
| Perjalanan | Krem | Timeline, filter chip, tombol unduh CV |
| Aktivitas | Lavender muda (`--lilac` 35%) | Grid kartu, filter chip |
| Konten | Krem | 4 kanal sebagai kartu kecil, poster cuplikan |
| Kata Mereka | Lavender | Hanya bila ada testimoni |
| Seputar Saya | Krem | Accordion |
| Sapa Saya | **Kuning penuh** | Satu kartu putih di tengah |
| Footer | **Hitam** | Teks krem |

Ritme warna: krem → kuning → krem → krem-2 → krem → lavender → krem → (lavender) → krem → kuning → hitam. Dua blok kuning penuh cukup; tambahan membuat halaman terasa ramai.

---

## 8. Ajakan yang Tenang

Halaman ini memperkenalkan Kang Dimmy, jadi ajakannya ibarat "silakan lihat-lihat", bukan "ayo pesan".

| Aturan | Penjelasan |
|---|---|
| Satu tombol hitam per section | Terdapat di hero saja |
| Tombol kontak hanya di Sapa Saya | Di navbar hanya "Sapa Saya" (tingkat kedua) |
| Tidak ada bar melayang, pop-up, urgensi | Tidak ada "terbatas", "sekarang", atau penghitung |
| Label berawalan kata kerja ramah | Kenali, Tonton, Ikuti, Sapa, Ngobrol |
| Tidak ada tombol di kartu bidang kerja | Pengunjung membaca dulu |
| Satu pintu kontak | WhatsApp, email, Instagram, formulir, semuanya di Sapa Saya |

**Daftar ajakan** (dari ±25 di v2 menjadi ±10):

| Section | Ajakan |
|---|---|
| Navbar | Sapa Saya |
| Hero | Kenali Perjalanan Saya ↓ · ▶ Tonton Perkenalan |
| Perjalanan | Unduh CV (PDF) · Lihat sesi yang pernah saya bawakan → |
| Aktivitas | Lihat semua aktivitas → |
| Konten | Ikuti (tautan teks ×4) |
| Detail aktivitas | Sapa saya → |
| Sapa Saya | Ngobrol di WhatsApp · Email · Sapa di Instagram · Kirim Pesan |

**Dihapus dari v2:** tombol di tiap kartu layanan, Minta Penawaran, Unduh Profil & Katalog, PathChooser 4 ubin, Sebelum/Sesudah, bar melayang, "Minta Kontak Referensi", kalimat ketersediaan.

---

## 9. Implementasi

### 9.1 Gaya dasar

```css
body { background: var(--paper); color: var(--ink); font: 400 1.0625rem/1.65 var(--font-body); }
h1, h2, h3 { font-family: var(--font-display); font-weight: 700; margin: 0; }
h1 { font-size: clamp(2.5rem, 7vw, 5rem); line-height: 1.02; letter-spacing: -.02em; text-transform: uppercase; }
h2 { font-size: clamp(1.75rem, 4vw, 3rem); line-height: 1.1; }

.eyebrow { font: 500 .8125rem/1.4 var(--font-display); letter-spacing: .08em; text-transform: uppercase; }
.eyebrow::before { content: "[ "; } .eyebrow::after { content: " ]"; }

.card {
  background: #fff; border: var(--line) solid var(--ink);
  border-radius: var(--radius); box-shadow: var(--shadow); padding: var(--space-4);
}
.section        { padding-block: var(--space-12); border-bottom: var(--line) solid var(--ink); }
.section--yellow{ background: var(--yellow); }
.section--ink   { background: var(--ink); color: var(--paper); }
```

### 9.2 Tombol

```css
.btn {
  display: inline-flex; align-items: center; gap: .5rem;
  min-height: 48px; padding: 0 1.4rem;
  font: 600 1rem/1 var(--font-body);
  border: var(--line) solid var(--ink); border-radius: var(--radius-pill);
  text-decoration: none; cursor: pointer;
  transition: transform var(--dur) var(--ease), box-shadow var(--dur) var(--ease);
}
.btn:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }

.btn--primary { background: var(--ink); color: var(--paper); box-shadow: 4px 4px 0 var(--yellow); }
.btn--ghost   { background: var(--paper); color: var(--ink); box-shadow: var(--shadow-sm); }
.btn--yellow  { background: var(--yellow); color: var(--ink); box-shadow: var(--shadow-sm); }

.btn:hover  { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 var(--ink); }
.btn--primary:hover { box-shadow: 6px 6px 0 var(--yellow); }
.btn:active { transform: translate(3px, 3px); box-shadow: 0 0 0 var(--ink); }

.link {
  color: inherit; font-weight: 600; text-decoration: none;
  background: linear-gradient(transparent 55%, var(--yellow) 55%);
  transition: background-size var(--dur) var(--ease);
}
.link:hover { background: var(--yellow); }

@media (prefers-reduced-motion: reduce) {
  .btn, .link { transition: none; }
  .btn:hover, .btn:active { transform: none; }
}
```

### 9.3 H1 dengan kotak sorot

```html
<h1>
  <span>Hey, saya</span><br>
  <span class="hl">Kang Dimmy</span><br>
  <span>&amp; <span class="hl">Public Speaker</span></span>
</h1>
<!-- garis penghubung dekoratif, desktop saja -->
<svg class="connector" aria-hidden="true" focusable="false" viewBox="0 0 120 80">
  <polyline points="0,10 60,10 60,70 120,70" fill="none" stroke="#111" stroke-width="2"/>
</svg>
```

### 9.4 Tautan WhatsApp dengan pesan terisi (hanya di Sapa Saya)

```js
const WA_NUMBER = "62XXXXXXXXXX";   // [ISI] format internasional

const templates = {
  kenalan:   "Halo Kang Dimmy, saya [nama]. Saya ingin berkenalan dan ngobrol sebentar.",
  pelatihan: "Halo Kang Dimmy, saya [nama] dari [organisasi]. Saya ingin bertanya soal pelatihan public speaking.",
  acara:     "Halo Kang Dimmy, saya [nama]. Kami sedang menyiapkan [nama acara]. Boleh ngobrol soal kemungkinan Kang Dimmy mengisi sesi?",
  belajar:   "Halo Kang Dimmy, saya [nama]. Saya ingin belajar public speaking dan mau tanya-tanya dulu.",
  komunitas: "Halo Kang Dimmy, saya [nama] dari [komunitas]. Boleh ngobrol soal kolaborasi?",
  aktivitas: (judul) => `Halo Kang Dimmy, saya melihat sesi "${judul}". Boleh bertanya lebih lanjut?`,
};

export const waLink = (msg) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
```

### 9.5 Chip topik (Sapa Saya)

```html
<fieldset class="topics">
  <legend>Mau ngobrol soal apa? (boleh dilewati)</legend>
  <button type="button" class="chip" data-topic="kenalan"   aria-pressed="false">Sekadar kenalan</button>
  <button type="button" class="chip" data-topic="pelatihan" aria-pressed="false">Tanya soal pelatihan</button>
  <button type="button" class="chip" data-topic="acara"     aria-pressed="false">Undangan mengisi acara</button>
  <button type="button" class="chip" data-topic="belajar"   aria-pressed="false">Belajar public speaking</button>
  <button type="button" class="chip" data-topic="komunitas" aria-pressed="false">Kolaborasi komunitas</button>
</fieldset>
```
Memilih chip hanya mengubah tautan tombol WhatsApp ke templat yang sesuai. Tidak membuka apa pun secara otomatis.

### 9.6 Formulir "Sapa Saya"
Tiga kolom (nama, email atau WhatsApp, pesan) dan kotak persetujuan. Tersimpan ke tabel `inquiries` yang sudah ada di LP-KangDimmy.md (Bagian 4). Nilai `need_type` default `kenalan`, dan kolom `source` bisa diisi dari asal klik, tetapi tidak wajib.

### 9.7 Pelacakan (ringan)
- Satu event `cta_click` dengan `cta_id` (mis. `hero_kenali`, `sapa_wa`).
- Metrik yang dilihat: kedalaman scroll sampai Aktivitas, jumlah pemutaran video, klik "Sapa Saya", pesan yang masuk.
- Tidak ada pelacakan antar-situs atau retargeting.
- Traffic situs pribadi biasanya kecil: baca angka sebagai arah, bukan bukti statistik.

---

## 10. Aksesibilitas
- Garis tebal dan bayangan keras memperjelas batas elemen, tetapi tetap pastikan kontras teks ≥ 4.5:1.
- Target sentuh minimal 44×44px; tombol 48px.
- Fokus keyboard terlihat (cincin biru 3px), tidak bergantung pada bayangan.
- Efek bergeser saat hover dimatikan bila `prefers-reduced-motion`.
- Tombol putar video memakai `aria-label` ("Putar video perkenalan, 90 detik") dan sediakan transkrip ringkas.
- Garis penghubung, segitiga, dan stiker dekoratif memakai `aria-hidden="true"`.
- Satu `<h1>`; heading berurutan; skip link ke konten utama.
- Rotasi stiker tidak boleh membuat teks sulit dibaca; hindari rotasi pada teks lebih dari 3 kata.

---

## 11. Urutan Pengerjaan

| Urutan | Pekerjaan | Usaha |
|---|---|---|
| 1 | Token, tipografi, kelas dasar (`.card`, `.btn`, `.hl`, `.link`) | Rendah |
| 2 | Navbar dan Hero (bento + kotak sorot) | Sedang |
| 3 | Sekilas, Tentang, Kerja, Cara Saya Bekerja | Sedang |
| 4 | Perjalanan (timeline, filter, accordion) | Sedang |
| 5 | Aktivitas (kartu, filter, halaman detail) terhubung database | Sedang |
| 6 | Konten, FAQ, Sapa Saya (formulir) | Rendah |
| 7 | Footer, uji mobile, kontras, performa | Rendah |
| 8 | Video perkenalan dan cuplikan | Perlu produksi |

## 12. Data yang Masih Dibutuhkan

| Kebutuhan | Dipakai untuk |
|---|---|
| Foto potret dan dokumentasi tampil | Frame potret dan kartu aktivitas |
| Video perkenalan 90 detik | Poster video |
| Nomor WhatsApp dan email | Sapa Saya |
| Konfirmasi warna kuning sebagai identitas (atau pilih alternatif) | Token `--yellow` |
| Konfirmasi tanpa mode gelap di fase 1 | Token |
