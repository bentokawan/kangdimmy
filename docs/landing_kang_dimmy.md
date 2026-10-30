# Landing Page Kang Dimmy · Spesifikasi v5.1
**Satu dokumen: arah, copy final, struktur data, dan sistem desain neo-brutalism**

| | |
|---|---|
| Versi | 5.1 · 29 Okt 2026 |
| Menggantikan | v5.0, `content_of_landing.md`, `design.md` |
| Sumber data | CV portofolio "Terupdate", konten v4.1, design v4.1 |
| Gaya | Neo-brutalism, mengikuti `design.md`: garis tipis 1.5px, sudut membulat, warna datar, kotak sorot kuning |
| Fokus | Profil personal yang padat data, rapi, nyaman dibaca, tidak monoton |

**Daftar isi**
[1 Arah](#1-arah) · [2 Struktur & ritme](#2-struktur--ritme-halaman) · [3 Copy & konten](#3-copy--konten-per-section) · [4 Bank data](#4-bank-data-dari-cv) · [5 Desain](#5-sistem-desain-neo-brutalism) · [6 Gerak](#6-gerak) · [7 Teknis](#7-teknis--aksesibilitas) · [8 Keputusan](#8-yang-perlu-diputuskan-sebelum-tayang)

> **Revisi v5.1:** (1) gaya neo-brutalism mengikuti design.md · (2) video perkenalan diganti **video sekilas mentoring** di section Portofolio · (3) slot untuk **3–5 foto dokumentasi** · (4) eyebrow tanpa tanda kurung siku · (5) Perjalanan dipisah: **Pengalaman, Relawan & Komunitas, Pendidikan** · (6) desain **Sapa Saya dikunci**, tidak diubah.

---

## 1. Arah

### 1.1 Satu kalimat positioning
> **Trainer public speaking dari Bandung yang sudah sepuluh tahun belajar bersama orang-orang yang berbeda: karyawan, santri, mahasiswa, guru, dan komunitas.**

Pembeda Kang Dimmy adalah **rentang audiens**, bukan satu gelar. Halaman membuktikannya lewat daftar nyata, bukan klaim.

### 1.2 Suara tulisan (soft-selling)

| Lakukan | Hindari |
|---|---|
| Bercerita dari pengalaman: "Saya belajar bahwa…" | Superlatif kosong: "terbaik", "nomor satu", "terjamin" |
| Ajakan seperti undangan: "Kalau Anda penasaran…" | Urgensi: "Segera!", "Slot terbatas!" |
| Nama klien, kota, dan jumlah yang bisa diperiksa | Angka tanpa sumber |
| Kalimat pendek, satu gagasan per kalimat | Paragraf lebih dari 4 baris |
| Sapaan hangat "saya" | Bahasa brosur "Kami menyediakan solusi…" |
| Kutipan yang benar-benar dari Kang Dimmy | Kutipan karangan, frasa klise ("perjalanan tak ada akhir") |

**Tiga pilar personal branding:**

| Pilar | Pesan | Bukti di halaman |
|---|---|---|
| **Mendengar dulu** | Materi disusun dari siapa pesertanya, bukan template | Strip "Cara saya bekerja", sektor beragam |
| **Berlatih, bukan ceramah** | Peserta pulang membawa sesuatu yang bisa dicoba | Video sekilas mentoring, foto dokumentasi |
| **Bahasa yang membumi** | Dari ruang rapat bank sampai pesantren, bahasanya menyesuaikan | Peta jejak per kelompok |

### 1.3 Prinsip tampilan

| Prinsip | Penerapan |
|---|---|
| Padat data, tapi berlapis | Ringkasan dulu, rincian menyusul (tab, accordion, "lihat semua") |
| Tiap section punya bentuk sendiri | Tidak ada dua section berturut-turut dengan tata letak sama (§2) |
| Mata diberi jeda | Pergantian latar, kutipan besar, ruang kosong |
| Satu sorotan per layar | Kotak kuning hanya untuk kata penting |
| Tenang | Tanpa pop-up, bar melayang, atau hitung mundur |

---

## 2. Struktur & Ritme Halaman

| # | Section | Latar | Bentuk | Kepadatan | Fungsi |
|---|---|---|---|---|---|
| 1 | Hero | Krem | Dua kolom: teks + potret di panel lilac | Lega | Kesan pertama |
| 2 | Sekilas | **Kuning penuh** | Strip angka + chip | Sedang | Bukti cepat |
| 3 | Tentang | Krem | Cerita + kutipan besar + 3 nilai | Lega | Karakter |
| 4 | Kerja | Krem | **Bento** 4 kartu + strip proses | Sedang | Yang ditawarkan |
| 5 | **Portofolio** | Krem | **Video mentoring + galeri 3–5 foto + peta jejak bertab** | **Padat** | Bukti nyata |
| 6 | **Perjalanan** | Krem | **Tiga timeline terpisah** | **Padat** | Latar profesional |
| 7 | Aktivitas | **Lilac** | Kartu foto | Sedang | Terbaru |
| 8 | Konten | Krem | Baris tautan | Lega | Ikut belajar |
| 9 | Sapa Saya | **Kuning penuh** | Satu kartu putih (**dikunci**) | Lega | Ajakan akhir |
| 10 | Footer | **Hitam** | Satu baris | Lega | Penutup |

Ritme warna: krem → kuning → krem ×4 → lilac → krem → kuning → hitam.

**Navbar:** Tentang · Kerja · Portofolio · Perjalanan · Aktivitas · tombol **Sapa Saya** (outline) → `#sapa`.

---

## 3. Copy & Konten per Section

### 3.0 Metadata

| Field | Isi |
|---|---|
| `<title>` | Kang Dimmy \| Trainer Public Speaking & Community Specialist, Bandung |
| Meta description | Kang Dimmy (A Dimmy Zulhifansyah), trainer public speaking dari Bandung. Sepuluh tahun berbagi di hampir 40 kota, dari ruang rapat bank sampai pesantren. |
| OG title | Kang Dimmy: Trainer Public Speaking dari Bandung |
| Canonical | `https://[domain]/` ❌ |
| Schema `Person` | name A Dimmy Zulhifansyah · alternateName Kang Dimmy · jobTitle Public Speaking Trainer, Coach, Community Specialist · address Bandung · sameAs LinkedIn, Instagram, TikTok |

> **Jangan dipublikasikan:** nomor WhatsApp dan tanggal lahir lengkap di CV.

---

### 3.1 Hero

**Eyebrow:** PUBLIC SPEAKING TRAINER · COACH · COMMUNITY SPECIALIST

**H1:**
```
HEY, SAYA
[KANG DIMMY]      ← kotak sorot kuning + garis penghubung tipis
& PUBLIC SPEAKER
```

**Sub-headline:**
Sejak 2017 saya menemani karyawan, mahasiswa, guru, santri, dan komunitas belajar berbicara dengan lebih tenang. Sudah hampir 40 kota.

| Elemen | Isi |
|---|---|
| Tombol utama (pil hitam) | Kenali Perjalanan Saya ↓ → `#tentang` |
| Tombol kedua (teks + ikon putar kuning) | **Lihat Sekilas Mentoring** → membuka video di modal (video yang sama dengan Portofolio) |
| Stiker | Bandung, Jawa Barat |
| Kartu fakta | **10+** tahun berbagi · **Hampir 40** kota |
| Foto | Potret 3:4, panel lilac, segitiga kuning di sudut ❌ |
| Alt foto | *Kang Dimmy sedang berbagi tentang public speaking di [acara/kota]* |

---

### 3.2 Sekilas (kuning penuh)

| Angka | Label | Sumber |
|---|---|---|
| **10+** | Tahun berbagi | Sejak 2017 |
| **Hampir 40** | Kota | LinkedIn |
| **100+** | Sesi pelatihan | CV: "100+ Training/Workshop" |
| **9** | Sektor | Daftar di bawah |

Pengikut LinkedIn (5.550, Okt 2026) dipindah ke section Konten.

**Chip sektor:** Korporasi · Instansi Pemerintah · Perbankan · F&B · Organisasi · Sekolah · Universitas · Pesantren · Komunitas

**Afiliasi:** motivacenter · ADZ Training · Indonesia Speak Up · Panggung Kreator · Elite Circle Bandung Raya · Forum Indonesia Muda

Teks sekunder di atas kuning memakai `--ink-soft`.

---

### 3.3 Tentang

**Eyebrow:** TENTANG SAYA
**Heading:** Dari ruang HR ke ruang pelatihan

> Saya mulai dari dunia kerja yang sunyi: **HR Manager** (2008–2012), lalu **Public Relations** (2013–2016). Dari dua peran itu saya belajar satu hal sederhana: banyak persoalan di organisasi bermula dari komunikasi yang kurang jelas.

> Sejak 2017 saya menekuni public speaking. Dalam sepuluh tahun, saya berkesempatan berbagi bersama karyawan perusahaan dan bank, instansi pemerintah, kampus, sekolah, pesantren, dan komunitas. Kadang sebagai personal brand, kadang bersama vendor atau lembaga pelatihan. Saat ini saya juga **Professional Trainer di motivacenter, Bandung**.

> Di luar ruang pelatihan, saya menjadi Public Relations di Indonesia Speak Up, serta penasihat dan relawan di beberapa komunitas Bandung. Tips singkatnya saya bagikan lewat Instagram Reels dan TikTok, supaya keterampilan berkomunikasi bisa dipelajari siapa saja.

**Kutipan besar** (jeda visual, latar `--lilac-35`, diambil dari narasi Kang Dimmy sendiri di atas):
> Banyak persoalan di organisasi bermula dari komunikasi yang kurang jelas.

**Tiga nilai kerja:**

| Nilai | Kalimat |
|---|---|
| **Praktis** | Setiap sesi berakhir dengan sesuatu yang bisa langsung dicoba. |
| **Sesuai audiens** | Materi untuk karyawan bank berbeda dengan materi untuk santri atau mahasiswa, jadi saya menyesuaikannya. |
| **Bermanfaat** | Berbicara adalah alat untuk bekerja dan melayani dengan lebih baik. |

> Video perkenalan **dihapus** dari section ini. Video kini ada di Portofolio (§3.5).

---

### 3.4 Kerja

**Eyebrow:** YANG SAYA KERJAKAN
**Heading:** Melatih, berbagi, mendampingi, menggerakkan

Bento: kartu 1 lebih lebar, kartu 2–4 lebih kecil. Kartu tidak bisa diklik.

| # | Judul | Deskripsi |
|---|---|---|
| 1 | **Melatih** | Pelatihan interaktif dengan banyak praktik. Tema yang pernah saya bawakan: public speaking, service excellence, komunikasi, negosiasi, selling skill, storytelling, dan motivasi kerja. Selalu disesuaikan dengan latar peserta. |
| 2 | **Berbagi di panggung** | Talk, sharing session, dan peran sebagai MC untuk acara, kampus, dan komunitas. |
| 3 | **Mendampingi** | Coaching dan mentoring personal untuk membangun percaya diri dan kesiapan tampil, dari menyusun materi sampai latihan simulasi. |
| 4 | **Menggerakkan komunitas** | Pendampingan program sosial dan pengembangan SDM, termasuk Indonesia Speak Up Goes To Masjid. |

Topik kartu 1 berdasarkan sesi nyata di CV (§4.1). Peran MC juga dari CV; konfirmasi bila tidak ingin ditonjolkan.

**Strip "Cara saya bekerja":** judul + empat kolom. Angka 01–04 abu besar di atas judul dan deskripsi; saat item di-hover, angka berubah jadi hitam. Garis tipis 1.5px memisahkan strip ini dari bento di atasnya.

| 01 Kenali audiensnya | 02 Susun materinya | 03 Berlatih bersama | 04 Catatan sesudahnya |
|---|---|---|---|
| Siapa pesertanya dan apa yang ingin mereka bawa pulang | Bahasa, contoh, dan latihan sesuai konteks | Sesi berjalan dengan banyak praktik | Ringkasan dan langkah yang bisa dilakukan sendiri |

⚠️ Konfirmasi bahwa ini proses nyata.

---

### 3.5 Portofolio *(video mentoring + galeri + peta jejak)*

**Eyebrow:** PORTOFOLIO
**Heading:** Melihat sesi dari dekat
**Pembuka:** *Cuplikan mentoring, beberapa dokumentasi, dan siapa saja yang pernah belajar bersama saya.*

**Chip "Yang sering saya latih":** Membuka presentasi · Mengelola rasa gugup · Menyusun pesan · Storytelling · Menjual dengan percaya diri · Negosiasi · Pelayanan prima

Tiga blok berurutan, dipisah H3 dan jarak 64px:

#### A. Sekilas mentoring (video)

| Elemen | Spesifikasi |
|---|---|
| Judul H3 | Sekilas mentoring |
| Poster | 16:9, bergaris 1.5px, radius 18px, tombol putar bulat kuning (▶ hitam), label durasi di sudut |
| Durasi | 45–60 detik ⚠️ perlu produksi |
| Isi yang disarankan | Momen mentoring nyata: arahan satu-satu, latihan tampil, umpan balik. Bukan ucapan "halo perkenalkan saya" |
| Teks pendamping | 1–2 kalimat: *"Mentoring yang saya jalankan dengan [audiens/lembaga]. Topik: [1 hal]."* ❌ |
| Pemutaran | Tidak autoplay. Video hanya dimuat saat diklik (poster saja di awal) |
| Aksesibilitas | Subtitle bawaan + transkrip ringkas di bawah video; `aria-label="Putar video sekilas mentoring, [durasi]"` |
| Tombol hero | "Lihat Sekilas Mentoring" membuka video yang sama di modal |

#### B. Dokumentasi (3–5 foto)

**H3:** Sesi dalam gambar

| Aturan | Isi |
|---|---|
| Jumlah | 3 sampai 5 foto (saat ini 5: 2 landscape, 3 portrait) |
| Tata letak | Masonry 1/2/3 kolom dengan rasio asli foto, tidak dipotong (`object-cover` dihapus) |
| Bingkai | Garis 1.5px, radius 18px, tanpa bayangan |
| Keterangan | Opsional, satu baris: *"[Jenis sesi] bersama [audiens], [kota]"* |
| Klik | Membuka lightbox (panah kiri/kanan, Esc menutup); rasio kotak modal mengikuti portrait/landscape |
| Berkas | `width`/`height` diisi, `loading="lazy"`; idealnya WebP ≤ 150 KB (foto asli masih JPEG besar, diperkecil oleh `next/image`) |
| Alt | *"Kang Dimmy [aktivitas] bersama [audiens] di [kota]"*; jangan hanya "dokumentasi" |

**Foto terpasang** (`public/documentation/`):

| # | Berkas | Orientasi | Ukuran asli |
|---|---|---|---|
| 1 | `20241008083943_IMG_2567.JPG.jpeg` | Landscape | 1920×1280 |
| 2 | `IMG-20250730-WA0034.jpg.jpeg` | Portrait | 1200×1600 |
| 3 | `IMG-20250730-WA0043.jpg.jpeg` | Portrait | 1200×1600 |
| 4 | `IMG_4353 (1).jpg.jpeg` | Landscape | 5108×3405 |
| 5 | `Pic 10 (1).jpg.jpeg` | Portrait | 4096×5120 |

Keterangan tiap foto masih kosong — isi setelah kota/audiensnya dipastikan.

> Wajah peserta, terutama anak sekolah: pastikan ada izin atau pakai foto dari belakang/samping.

#### C. Peta jejak (siapa saja yang pernah belajar bersama saya)

**H3:** Kelompok peserta yang pernah saya latih
**Pembuka:** *Beberapa nama di antara 100+ sesi. Pilih kelompok untuk melihat lebih dekat.*

**Tab (8):** Perbankan · Korporasi · Pemerintah · Kesehatan · Sekolah & Guru · Kampus · Pesantren & Dakwah · Komunitas & Event

Tiap tab: satu kalimat konteks + daftar nama dua kolom (maks 8; sisanya "lihat semua"). Data di §4.

**Penutup:** *Dan masih banyak lagi. Kalau konteks Anda mirip salah satunya, kita bisa ngobrol dulu.* → `#sapa` (tautan teks, bukan tombol)

---

### 3.6 Perjalanan *(tiga bagian terpisah)*

**Eyebrow:** PERJALANAN
**Heading:** Jejak sepuluh tahun
**Pembuka:** *Tiga jalur yang membentuk cara saya bekerja.*

Navigasi lokal (tiga chip tautan, bukan filter): **Pengalaman · Relawan & Komunitas · Pendidikan**. Tiap bagian punya H3, timeline bergaris sendiri, dan urutan terbaru di atas.

**Tombol:** Unduh CV (PDF) ❌ perlu file
**Kotak ringkas:** Professional Trainer · Public Speaker · Coach · Community Specialist · Berbagi sejak 2017 · Bandung

#### 6a. Pengalaman (H3)
*Pekerjaan dan peran profesional.*

| Periode | Peran | Organisasi |
|---|---|---|
| Jan 2024 – kini | Professional Trainer | motivacenter, Bandung |
| 2017 – kini | Training & Development Specialist; Professional Trainer | ADZ Training, Bandung |
| 2013 – 2016 | Public Relations Specialist | Yayasan Al Hilal, Bandung |
| 2008 – 2012 | Human Resources Manager | Al-Azhar Syifa Budi Legenda, Bekasi |

> ⚠️ Dua entri ADZ Training dari v4.1 (Jan 2017 – kini dan Feb 2017 – 2023) saling tumpang tindih, jadi digabung. Pisahkan lagi bila memang dua peran berbeda.
> Peran **dosen praktisi / pengajar tamu** (Inaba, Universitas Muhammadiyah, Pesantren Ajar) ada di CV tetapi periodenya belum diketahui. Tambahkan bila ingin ditonjolkan.

#### 6b. Relawan & Komunitas (H3)
*Peran di luar pekerjaan utama.*

| Periode | Peran | Organisasi |
|---|---|---|
| Des 2025 – kini | Alumni angkatan 27 (Kebijakan Publik, Jakarta, 12–14 Des 2025) | Forum Indonesia Muda |
| Ags 2025 – kini | Advisor | Panggung Kreator |
| Sep 2023 – kini | Public Relations Specialist; Project Manager "Indonesia Speak Up Goes To Masjid" | Indonesia Speak Up |

> ⚠️ Elite Circle Bandung Raya ada di daftar afiliasi tetapi belum punya entri di sini. Tambahkan setelah peran dan periodenya dipastikan.

**Accordion untuk 6a dan 6b** (isi ❌): Konteks (1 kalimat) · Yang dikerjakan (2–3 poin) · Yang dipelajari (1 kalimat reflektif, bukan klaim hasil).

#### 6c. Pendidikan (H3)
*Timeline mini, tanpa accordion.*

| Periode | Program | Institusi |
|---|---|---|
| 1999 – 2003 | S1 Administrasi Publik | Universitas Padjadjaran |
| Ags 2025 – kini | Alumni | Sekolah Pemikiran Islam |
| [tahun] ❌ | Penerima Beasiswa Bright Scholarship, Batch 2 | Universitas Padjadjaran |

> ⚠️ Jurusan di CV tertulis "Administrasi **Negara**", di konten v4.1 "Administrasi **Publik**". Samakan sesuai ijazah di seluruh halaman dan schema.
> ⚠️ Baris Bright Scholarship diambil dari CV (Awardee Batch 2); tahunnya belum ada. Hapus bila tidak ingin ditampilkan.

**Tautan penutup:** Lihat sesi yang pernah saya bawakan → `#aktivitas`

---

### 3.7 Aktivitas & Jejak

**Eyebrow:** DI LAPANGAN
**Heading:** Cerita terbaru dari sesi dan komunitas
**Sub:** Diperbarui secara berkala.
**Filter:** Semua · Training · Komunitas · Konten
**Empty state:** *Catatan terbaru sedang disiapkan. Sementara itu, cerita lapangannya ada di Instagram [@kangdimmy](https://instagram.com/kangdimmy).*

**Kartu awal** (⚠️ lengkapi tahun dan ringkasan):

| Kartu | Isi |
|---|---|
| Pembinaan Brighter 11 | 6 Sep [tahun] · YBM Brilian · Universitas. Sesi untuk mahasiswa penerima Bright Scholarship ITB dan Universitas Padjadjaran. |
| Bersama Komuniclub / Komunihub | 12 Okt [tahun] · [ringkasan] |

**Pola ringkasan:** *"[Jenis sesi] bersama [audiens] di [kota]. Topik: [1 hal]. [1 momen berkesan]."* Hindari "Alhamdulillah telah terlaksana…".

**Penutup:** Lihat semua aktivitas → `/aktivitas`

---

### 3.8 Konten & Komunitas

**Eyebrow:** IKUT BELAJAR
**Heading:** Tips singkat untuk dicoba hari ini

| Kanal | Isi | Handle |
|---|---|---|
| Instagram | Reels tips public speaking, cuplikan sesi | @kangdimmy |
| TikTok | Tips komunikasi singkat | @kangdimmy |
| Threads | Catatan dan diskusi | @kangdimmy |
| LinkedIn | Kegiatan profesional · 5.500+ pengikut | /in/kangdimmy |

Tampilan: empat baris tautan besar dengan garis bawah tipis.

---

### 3.9 Sapa Saya (kuning penuh) 🔒 **DESAIN DIKUNCI**

> Section ini **tidak diubah** dari v4.1: latar kuning penuh, satu kartu putih di tengah, dua cara menyapa, chip topik, formulir tiga kolom, tombol utama hitam. Satu-satunya penyesuaian adalah eyebrow tanpa tanda kurung siku, sesuai aturan global revisi 4.

**Eyebrow:** MARI BERKENALAN
**Heading:** *Sapa saya.*
**Sub:** *Tidak harus ada keperluan. Kenalan, bertanya, atau sekadar bertukar cerita juga boleh.*

**Dua cara menyapa (tanpa WhatsApp):**

| Cara | Label | Target | Status |
|---|---|---|---|
| Email | **Kirim Email** | `mailto:[email]` | ❌ |
| Instagram | **Sapa di Instagram** | instagram.com/kangdimmy | ✅ |

**Formulir "Sapa Saya" (jalur utama):**

| # | Field | Wajib | Placeholder |
|---|---|---|---|
| 1 | Nama | ✓ | Nama Anda |
| 2 | Email | ✓ | alamat@email.com |
| 3 | Pesan | ✓ | Tulis apa saja… |
| ✓ | Persetujuan data (UU No. 27/2022) | ✓ | Saya setuju data ini dipakai untuk membalas pesan saya. |

**Topik opsional (chip, mengisi awal kolom Pesan):** Sekadar kenalan · Tanya soal pelatihan · Undangan mengisi acara · Belajar public speaking · Kolaborasi komunitas

**Kirim:** `Kirim Pesan` · **Sukses:** *Terima kasih sudah menyapa. Pesan Anda sudah masuk dan akan saya balas.*

---

### 3.10 Footer (hitam)
*Belajar bersama, tumbuh bersama.* · Tentang · Kerja · Portofolio · Perjalanan · Aktivitas · Sapa · IG · TikTok · Threads · LinkedIn · © 2026 A Dimmy Zulhifansyah (Kang Dimmy)

---

## 4. Bank Data dari CV

Dipakai untuk tab §3.5C. **Izin menyebut nama klien perlu dipastikan** (§8).

### 4.1 Topik yang pernah dibawakan

| Topik | Contoh sesi di CV |
|---|---|
| Public speaking | Banyak sesi: kampus, sekolah, komunitas, korporasi |
| Storytelling | "Creating and Deliver Story Telling", Pusdiklat PLN, Jakarta |
| Negosiasi | Class of Negotiation Skills, BNI JPK Bandung |
| Selling skill | Kepala Cabang BRC se-Kota Bandung; Public Speaking for Sales People, Pegadaian, Jakarta |
| Motivasi kerja | Achievement Motivation, BNI Cianjur; "Bahagia dalam Bekerja", Sekda Kab. Bekasi |
| Komunikasi bisnis | Dosen praktisi, Teknik Industri Universitas Muhammadiyah |
| Kepemimpinan | Tahfidz Leadership Bandung (batch 6–11), Sekolah Pemimpin Muda batch 3 |
| Kewirausahaan | Expo Santri Mandiri, Sukabumi |

### 4.2 Peta jejak per kelompok

| Kelompok | Contoh nama (maks 8 per tab) |
|---|---|
| **Perbankan & keuangan** | Bank BNI (Cianjur, JPK Bandung, JPK Perintis Kemerdekaan) · Bank bjb Cabang Tamansari (bersama Mitra Unggul) · Pegadaian (Jakarta) · Kepala Cabang BRC Bandung |
| **Korporasi & bisnis** | PT Amanah Mitra Mandiri (site RS Al Islam, Pusat Survei Geologi) · PT Atrya Swascipta Rekayasa (staf dan manajer) · Mitratex Jakarta · PT Super Unggas Jaya · Footstep · Steak Ranjang · Solusi Pest Control · Infaq Berkah Qurani |
| **Pemerintah & BUMN** | Sekretariat DPRD Kota Bekasi · Sekda Kab. Bekasi · DPRD Kab. Kendal · Disparbudpora Kab. Pacitan · Kemenkeu Mengajar Tasikmalaya · Kemenpora (atlet junior Jawa Timur, Surabaya) · Pusdiklat PLN · UMKM Purwakarta |
| **Kesehatan** | RS Al Islam Bandung · RSUP Hasan Sadikin (brand ambassador) · RS Mekarsari Bekasi · Klinik AMMYN Sukabumi · Klinik Seno Medika |
| **Sekolah & guru** | Guru SD Rabbani · Guru SMPIT Insan Rahayu · Guru SMK Teknologi Mandiri Garut · Teacher Competency Development, Djalaludin Pane Foundation · SMK Plus Al Ghifari · SMAN 1 Cisarua · SMA/SMK Sodonghilir |
| **Kampus** | UIN Sunan Gunung Djati (Humas, Manajemen, HMJ) · UPI (LDK, PPG PGSD) · Itenas · Unikom · Universitas Pasundan · Universitas Mataram (NTB) · Universitas Indonesia Membangun · Universitas Muhammadiyah |
| **Pesantren & dakwah** | Daarut Tauhid (Khatib Masjid Tangguh, Imam Muda) · Tahfidz Leadership Bandung · Kampung Quran Learning Centre · Mihrab Quran Al Fatih · Pesantren Ajar, Purwakarta · DKM Masjid Al Murabbi · 400 siswa Rohis se-Kota Bandung (Hirokoba) |
| **Komunitas & event** | True Path Community · Raimuna Daerah Jabar · Divers Clean Action (Marunda, Jakarta) · Karang Taruna Derwati · Kader Pintar & Aisyiyah Sumedang · Speak Up Room · Ruang Progress & Muda Movement · Festival Trainer Nasional (Cikarang) · Trainer Muda Management (Malang) |

### 4.3 Kota yang tersebut di CV
Bandung · Jakarta · Bekasi · Cikarang · Bogor (Cisarua, Puncak) · Sukabumi · Purwakarta · Garut · Tasikmalaya · Cianjur · Sumedang · Jatinangor · Kendal · Pacitan · Surabaya · Malang · Mataram

> Baru **17 kota** eksplisit di CV, sedangkan klaim "hampir 40 kota" dari LinkedIn. Pakai klaim tanpa daftar, atau lengkapi daftarnya.

---

## 5. Sistem Desain: Neo-Brutalism

Mengikuti `design.md` v4.1 ("clean neo-brutalism"): kerangka brutalism (kapital besar, kotak sorot kuning, blok warna penuh, garis hitam terlihat) dengan garis tipis, sudut membulat, dan ruang lapang.

### 5.1 Ciri yang dipakai

| Ciri | Penerapan |
|---|---|
| Garis hitam terlihat di semua kartu, tombol, chip | `--line: 1.5px solid var(--ink)` |
| Sudut membulat besar | Kartu 18px, chip 10px, tombol pil |
| Bayangan hanya offset kecil pada elemen interaktif | `0 2px 0`, hover `0 3px 0`, aktif tanpa bayangan |
| Warna datar, dibatasi | Kuning, lilac, hitam, krem; maks 2 aksen per section |
| H1 kapital besar dengan **kotak sorot kuning** + garis penghubung SVG tipis | Maks 2 kotak sorot di H1, 1 di H2 |
| Blok kuning penuh berisi konten hitam | Sekilas dan Sapa Saya |
| Tombol pil hitam dengan ikon putar kuning | Tombol utama hero dan poster video |
| Panel lilac di belakang potret, segitiga kuning di sudut | Frame foto hero |
| Foto dalam kartu bergaris radius besar | Galeri dan kartu aktivitas |
| Ruang kosong lega | 112px antar section desktop, 64px mobile |

### 5.2 Token

```css
:root {
  /* warna */
  --paper:    #FBFAF4;
  --paper-2:  #F1EFE6;
  --white:    #FFFFFF;
  --ink:      #111111;
  --ink-soft: #3A3A3A;   /* wajib untuk teks sekunder di atas kuning */
  --muted:    #5E5E5E;   /* hanya di atas paper */
  --yellow:   #FFE94A;
  --lilac:    #CDBEFF;
  --lilac-35: #EAE3FF;
  --focus:    #2F5BEA;

  /* garis & bentuk */
  --line: 1.5px;
  --radius: 18px; --radius-chip: 10px; --radius-pill: 999px;
  --shadow-sm: 0 2px 0 var(--ink);
  --shadow:    0 3px 0 var(--ink);

  /* tipografi */
  --font-display: "Inter", system-ui, sans-serif;
  --font-body:    "Inter", system-ui, sans-serif;

  /* ruang */
  --space-2: 16px; --space-3: 24px; --space-4: 32px;
  --space-6: 48px; --space-8: 64px; --space-14: 112px;
  --container: 1200px; --measure: 64ch; --dur: .15s;
}
```

### 5.3 Tipografi

| Elemen | Font | Ukuran | Catatan |
|---|---|---|---|
| H1 | Inter 700 | `clamp(2.5rem, 6.5vw, 4.5rem)` | Kapital, line-height 1.05 |
| H2 | Inter 700 | `clamp(1.6rem, 3.5vw, 2.6rem)` | |
| H3 | Inter 700 | 20–22px | |
| **Eyebrow** | Inter 500 | 13px, tracking .08em | Kapital, **tanpa kurung siku** (lihat bawah) |
| Body | Inter 400 | 17px, line-height 1.65 | Maks 64ch; ukuran sama di mobile |
| Teks sekunder | Inter 400 | 13–14px | Deskripsi kartu, keterangan foto, meta |
| Label mikro | Inter 600 | 12px | Batas bawah; jangan di bawah 12px |
| Angka | Inter 700 tabular | 44–56px | |
| Kutipan besar | Inter 500 | `clamp(1.5rem, 3vw, 2.25rem)` | Satu per halaman |

**Eyebrow (revisi 4):** teks kapital biasa dengan garis pendek 24px di depannya. Tidak ada `[ ]`.

```css
.eyebrow {
  display: inline-flex; align-items: center; gap: 10px;
  font: 500 .8125rem/1.4 var(--font-display);
  letter-spacing: .08em; text-transform: uppercase;
}
.eyebrow::before { content: ""; width: 24px; height: var(--line); background: currentColor; }
```

**Kotak sorot:**
```css
.hl { display: inline-block; background: var(--yellow);
      border: var(--line) solid var(--ink); border-radius: 10px;
      padding: .02em .2em; line-height: 1.08; }
```

### 5.4 Komponen

| Komponen | Pemakaian | Bentuk |
|---|---|---|
| Angka besar | Sekilas | Kartu putih bergaris, angka 56px |
| Bento | Kerja | Kartu 1 lebar, 2–4 sempit; ikon outline 2px di kotak kuning kecil |
| Kutipan besar | Tentang | Teks besar di atas `--lilac-35`, tanpa kartu |
| Poster video | Portofolio | 16:9 bergaris, tombol putar bulat kuning, label durasi |
| Galeri | Portofolio | Foto bergaris radius 18px, grid §3.5B |
| Tab + daftar dua kolom | Portofolio | Tab bergaris tipis, panel putih |
| Timeline bergaris (×3) | Perjalanan | Garis vertikal, titik kotak, stiker "Sekarang" |
| Kartu foto | Aktivitas | 16:9, chip jenis, tanggal + kota |
| Baris tautan | Konten | Teks besar + garis bawah tipis |
| Kartu tengah | Sapa Saya | **Dikunci**, sesuai design.md §6.10 |

**Tombol:** utama = pil hitam, teks krem, `box-shadow: 0 2px 0` (hero dan formulir). Kedua = pil krem bergaris. Tautan = underline 1.5px, hover latar kuning. Chip = krem bergaris, hover kuning, terpilih hitam. Tinggi 48px. Hover `translateY(-1px)` + shadow `0 3px 0`; aktif `translateY(1px)` tanpa shadow; fokus outline biru 3px.

**Timeline** (dipakai tiga kali di Perjalanan, tiap bagian dengan garis sendiri):
```css
.timeline { position: relative; padding-left: 40px; }
.timeline::before {
  content: ""; position: absolute; left: 12px; top: 0; bottom: 0;
  width: 1.5px; background: var(--ink);
  transform-origin: top; transform: scaleY(var(--progress, 0));
}
.timeline__item { position: relative; padding-block: var(--space-3); }
.timeline__item::before {
  content: ""; position: absolute; left: -34px; top: 26px;
  width: 12px; height: 12px; background: var(--paper);
  border: var(--line) solid var(--ink);
}
.timeline__item.is-in::before { background: var(--yellow); }
.timeline__item--now::after {
  content: "Sekarang"; margin-left: 12px; display: inline-block;
  background: var(--yellow); border: var(--line) solid var(--ink);
  border-radius: var(--radius-chip); padding: .1em .6em;
  font: 600 .75rem var(--font-display); transform: rotate(-2deg);
}
```
Mobile: kolom periode pindah ke dalam kartu; garis tetap di kiri.

### 5.5 Dekorasi
Rotasi −2° hanya pada stiker kecil. Maksimal dua ornamen geometris per layar (segitiga kuning, garis penghubung), `aria-hidden`, tidak menutupi teks.

---

## 6. Gerak

> Animasi menjelaskan, bukan menghibur. Satu pola di seluruh halaman. `prefers-reduced-motion: reduce` mematikan semuanya.

| Gerak | Aturan |
|---|---|
| Scroll reveal | Fade-up 24px, 500ms `ease-out`, sekali saja; stagger 60ms per kartu, maks 5 |
| Garis timeline tumbuh | `--progress` naik per entri yang masuk viewport; titik krem → kuning. Berlaku di ketiga timeline |
| Stabilo hero | Kotak sorot "digambar" 0 → 100% selama 500ms, 200ms setelah teks muncul |
| Galeri | Reveal biasa dengan stagger; lightbox fade 150ms |
| Tab dan accordion | Fade 150ms / 200ms |

Tidak ada parallax, scroll-jacking, animasi berulang, atau autoplay video.

```js
const io = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
}), { threshold: 0.15, rootMargin: "0px 0px -40px" });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
```

---

## 7. Teknis & Aksesibilitas

| Area | Aturan |
|---|---|
| Kontras | Teks ≥ 4.5:1; teks sekunder di kuning memakai `--ink-soft` |
| Sentuh | Target ≥ 44×44px |
| Fokus | Outline biru 3px, offset 3px |
| Tab Portofolio | Pola ARIA tabs (panah kiri/kanan, `aria-selected`) |
| Lightbox | Fokus terkunci di dalam, Esc menutup, fokus kembali ke foto asal |
| Video | Dimuat saat diklik; subtitle + transkrip; `aria-label` |
| Struktur | Satu H1, skip link "Langsung ke konten", dekorasi `aria-hidden` |
| Formulir | Edge Function + Turnstile, simpan ke `inquiries` (kolom `email`), tanpa WhatsApp |
| Pelacakan | Satu event `cta_click` dengan `cta_id`; scroll depth, putar video mentoring, klik Sapa Saya |
| Gambar | WebP, hero ≤ 200 KB, galeri ≤ 150 KB |
| Mode gelap | Tidak ada di fase 1 |

---

## 8. Yang Perlu Diputuskan Sebelum Tayang

### 8.1 Konflik data

| # | Masalah | Saran |
|---|---|---|
| 1 | Jurusan S1: "Administrasi Negara" (CV) vs "Administrasi Publik" (konten) | Samakan sesuai ijazah |
| 2 | Dua entri ADZ Training tumpang tindih | Sudah digabung; pisahkan bila dua peran |
| 3 | "Hampir 40 kota" vs 17 kota di CV | Pakai klaim tanpa daftar, atau lengkapi |
| 4 | "9 sektor" belum memuat Kesehatan dan Pariwisata | Tetap 9, atau naikkan jadi 11 |
| 5 | Nomor WA dan tanggal lahir di CV | Tidak ditampilkan |

### 8.2 Izin dan verifikasi

| Item | Mengapa |
|---|---|
| Nama klien (BNI, bjb, Pegadaian, PLN, RSHS, dll.) | Pastikan boleh dicantumkan; bila ragu, tulis jenisnya ("bank BUMN") |
| Wajah peserta di video dan foto | Terutama anak sekolah dan santri |
| Strip "Cara saya bekerja" | Harus sesuai proses nyata |
| Baris Bright Scholarship di Pendidikan | Tahun belum ada |
| Entri Elite Circle Bandung Raya | Peran dan periode belum ada |

### 8.3 Aset yang masih kosong ❌

Email · domain · potret hero · **video sekilas mentoring (45–60 dtk) + subtitle** · **3–5 foto dokumentasi (slot §3.5B)** · file CV PDF · 3–5 aktivitas lengkap · kebijakan privasi · isi accordion Pengalaman dan Relawan.

### 8.4 Urutan pengerjaan

| # | Pekerjaan | Usaha |
|---|---|---|
| 1 | Token, tipografi, komponen dasar (termasuk eyebrow baru) | Rendah |
| 2 | Navbar + Hero | Sedang |
| 3 | Sekilas, Tentang, Kerja | Sedang |
| 4 | **Portofolio:** video, galeri + lightbox, tab peta jejak | Sedang–tinggi |
| 5 | **Perjalanan:** tiga timeline + accordion | Sedang |
| 6 | Aktivitas + database | Sedang |
| 7 | Konten, Sapa Saya (tanpa perubahan desain), footer, animasi | Rendah |
| 8 | Uji mobile, kontras (terutama di kuning), performa | Rendah |
| 9 | Produksi video mentoring | Perlu produksi |

---

## Lampiran · Perubahan v5.0 → v5.1

| # | Permintaan | Perubahan |
|---|---|---|
| 1 | Gaya neo-brutalism sesuai design.md | Bagian desain ditulis ulang dari design.md v4.1: token, ciri brutalism, tombol, kotak sorot, timeline kembali ke spesifikasi aslinya |
| 2 | Video perkenalan → sekilas mentoring | Video perkenalan dihapus dari Tentang dan hero. Tombol hero jadi "Lihat Sekilas Mentoring". Video dipindah ke Portofolio blok A |
| 3 | 3–5 gambar dokumentasi | Blok galeri di Portofolio dengan tata letak per jumlah foto, slot, ukuran berkas, alt, dan lightbox |
| 4 | Eyebrow tanpa `[ ]` | Semua eyebrow memakai teks kapital + garis pendek. CSS `::before/::after` kurung dihapus |
| 5 | Pisah education, experience, volunteering | Perjalanan menjadi tiga bagian: Pengalaman, Relawan & Komunitas, Pendidikan. Filter chip diganti navigasi lokal |
| 6 | Sapa Saya jangan diubah | Dikunci seperti v4.1; hanya eyebrow yang mengikuti aturan #4 |
| Tambahan | Mengurangi kesan "AI" | Kutipan karangan di Tentang diganti kalimat dari narasi Kang Dimmy sendiri; frasa klise di hero dipangkas |
| Tambahan | Section Dipercaya | Diganti nama dan digabung ke Portofolio |
