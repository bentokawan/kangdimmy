# Content of Landing Page: Kang Dimmy (v3, nada perkenalan)
**Seluruh teks, label, dan copy yang tampil di landing page**
Versi: 26 Okt 2026 · Referensi: `LP-KangDimmy.md` (v3) · Design system: `design.md` (neo-brutalism)

> **Cara membaca dokumen ini.** Setiap bagian diberi status:
> - ✅ **Siap**: data terverifikasi dari LinkedIn atau sumber nyata
> - ⚠️ **Perlu konfirmasi**: ada, tetapi perlu diverifikasi sebelum tayang
> - ❌ **Belum ada**: harus diisi sebelum tayang (ditandai `[ISI]`)

## Prinsip nada: memperkenalkan, bukan menawarkan

Halaman ini berfungsi seperti **kartu nama yang bercerita**. Pengunjung diajak mengenal Kang Dimmy dulu; urusan undangan atau kerja sama datang belakangan, dan hanya bila pengunjung sendiri yang ingin.

| Gunakan | Hindari |
|---|---|
| Bercerita sebagai "saya": apa yang dikerjakan, apa yang dipelajari | Menunjuk kebutuhan pengunjung ("Anda butuh…", "Tim Anda perlu…") |
| Fakta yang bisa dicek (tahun, kota, peran, organisasi) | Superlatif dan klaim hasil ("terbaik", "terbukti", "pasti naik") |
| Ajakan lembut: *Kenali*, *Tonton*, *Sapa*, *Ngobrol*, *Ikuti* | *Minta Penawaran*, *Konsultasi Gratis*, *Hubungi Sekarang*, *Pesan Sekarang* |
| Satu pintu kontak yang tenang di bagian akhir | Tombol kontak di setiap section, bar melayang, urgensi |
| Daftar bidang kerja secara deskriptif | Tombol terpisah di tiap layanan, formulir penawaran, katalog harga |

## Perubahan dari v2

| Dihapus | Alasan | Diganti dengan |
|---|---|---|
| CTA hero "Konsultasi via WhatsApp" dan "Unduh Profil & Katalog (PDF)" | Terlalu langsung menjual | `Kenali Perjalanan Saya` dan `Tonton Perkenalan` |
| CTA per kartu layanan (Minta Penawaran, Atur Sesi, dst.) | Nada transaksi | Kartu deskriptif tanpa tombol |
| Tiga jalur kerja sama dengan tombol unduh | Nada proposal | Satu kalimat tentang cara bekerja |
| Section "Fokus Latihan" (Sebelum/Sesudah) | Menyiratkan klaim hasil | Chip "Yang sering saya latih" di section kerja |
| Formulir penawaran 7 kolom dan PathChooser 4 ubin | Menyaring calon klien | Formulir "Sapa Saya" 3 kolom, topik opsional |
| Bar melayang mobile | Mengejar pengunjung | Dihapus |
| "Minta kontak referensi klien", kalimat ketersediaan, microcopy waktu balas | Nada penjualan | Dihapus |
| FAQ tarif dan "Tanya di WhatsApp" | Nada penjualan | FAQ seputar profil |
| Klaim "dari Sabang sampai…" di FAQ | Tidak ada di data LinkedIn | Dihapus |

**Koreksi data:** (1) "40 kota" ditulis **hampir 40**, sesuai LinkedIn. (2) motivacenter tercatat sebagai pekerjaan Full-time, bukan associate; frasa "associate" dipakai untuk "beberapa lembaga pelatihan" sesuai ringkasan LinkedIn. (3) Font H1 diganti dari Fraunces ke Space Grotesk mengikuti gaya neo-brutalism.

---

## 0. Metadata & SEO

| Field | Isi | Status |
|---|---|---|
| `<title>` | Kang Dimmy \| Public Speaking Trainer & Community Specialist, Bandung | ✅ |
| `<meta description>` | Kang Dimmy (A Dimmy Zulhifansyah), trainer public speaking dari Bandung. Sepuluh tahun berbagi di hampir 40 kota Indonesia, dari ruang rapat sampai pesantren. | ✅ |
| OG title | Kang Dimmy: Public Speaking Trainer dari Bandung | ✅ |
| OG description | Sama dengan meta description | ✅ |
| OG image alt | Kang Dimmy sedang berbagi di depan peserta di [lokasi acara] | ⚠️ Sesuaikan dengan foto asli |
| Canonical URL | `https://[domain.com]/` | ❌ Isi domain |
| Schema `Person`: name | A Dimmy Zulhifansyah | ✅ |
| Schema `Person`: alternateName | Kang Dimmy | ✅ |
| Schema `Person`: jobTitle | Public Speaking Trainer, Coach, Community Specialist | ✅ |
| Schema `Person`: address | Bandung, Jawa Barat, Indonesia | ✅ |
| Schema `Person`: sameAs | linkedin.com/in/kangdimmy, instagram.com/kangdimmy, tiktok.com/@kangdimmy | ✅ |

---

## 1. Navbar

| Elemen | Teks | Keterangan |
|---|---|---|
| Logo | **Kang Dimmy** | Stiker bergaris, Space Grotesk 700 |
| Nav 1 | Tentang | `#tentang` |
| Nav 2 | Kerja | `#kerja` |
| Nav 3 | Perjalanan | `#perjalanan` |
| Nav 4 | Aktivitas | `#aktivitas` |
| Nav 5 | Sapa | `#sapa` |
| Tombol | **Sapa Saya** | Pil outline (bukan solid), menggulir ke `#sapa` |
| Skip link | Langsung ke konten | Muncul saat fokus keyboard |

---

## 2. Hero

### Teks utama

| Elemen | Teks | Status |
|---|---|---|
| Eyebrow | `[ PUBLIC SPEAKING TRAINER · COACH · COMMUNITY SPECIALIST ]` | ✅ |
| H1, baris 1 | HEY, SAYA | ✅ |
| H1, baris 2 | **KANG DIMMY** (dalam kotak sorot kuning) | ✅ |
| H1, baris 3 | & PUBLIC SPEAKER | ✅ |
| Stiker lokasi | Bandung, Jawa Barat | ✅ |

> **Catatan tipografi:** H1 Space Grotesk Bold, huruf kapital. Hanya "KANG DIMMY" yang disorot, dan "PUBLIC SPEAKER" boleh memakai kotak sorot kedua dengan garis penghubung (lihat `design.md` bagian 4).

### Sub-headline

> Trainer public speaking dari Bandung. Sejak 2017 saya berbagi di hampir 40 kota di Indonesia, bersama karyawan, mahasiswa, santri, dan komunitas.

**Status:** ✅

### Tombol

| Tombol | Label | Jenis | Target | Status |
|---|---|---|---|---|
| Utama | **Kenali Perjalanan Saya ↓** | Pil hitam | `#tentang` | ✅ |
| Kedua | **▶ Tonton Perkenalan** | Pil outline + ikon putar kuning | Modal video | ⚠️ Perlu video |

Tidak ada microcopy waktu balas, tombol WhatsApp, atau tautan unduh di hero.

### Kartu fakta (desktop: samping foto; mobile: bawah foto)

| Angka | Label | Status |
|---|---|---|
| **10+** | tahun berbagi tentang public speaking | ✅ |
| **Hampir 40** | kota di Indonesia | ✅ |

Dua kartu kecil saja di hero. Rangkuman lengkap ada di section Sekilas.

### Foto hero

| Elemen | Spesifikasi | Status |
|---|---|---|
| Foto | Kang Dimmy saat berbagi di depan peserta (utama) atau potret santai | ❌ Perlu foto |
| Aspek rasio | 3:4 | n/a |
| Alt text | *Kang Dimmy sedang berbagi tentang public speaking di [acara/kota]* | ⚠️ Sesuaikan |
| Format | WebP, maks 200 KB | n/a |

---

## 3. Sekilas

Latar kuning penuh, kartu putih bergaris.

### Empat fakta

| Angka | Label | Keterangan |
|---|---|---|
| **10+** | Tahun | Berbagi public speaking (2017–kini) |
| **Hampir 40** | Kota | Di seluruh Indonesia |
| **9** | Sektor | Korporasi sampai pesantren |
| **5.500+** | Pengikut | Di LinkedIn |

**Status:** ✅

### Chip sektor

```
Korporasi · Instansi Pemerintah · Perbankan · F&B · Organisasi
Sekolah · Universitas · Pesantren · Komunitas
```
**Status:** ✅

### Baris afiliasi (teks, bukan logo)

```
motivacenter · ADZ Training · Indonesia Speak Up
Panggung Kreator · Elite Circle Bandung Raya · Forum Indonesia Muda
```
**Status:** ✅

---

## 4. Tentang

**Eyebrow:** `[ TENTANG SAYA ]`
**Heading:** *Dari ruang HR ke ruang pelatihan*

**Paragraf 1**
> Saya lulusan Administrasi Publik Universitas Padjadjaran. Karier saya dimulai di dunia SDM sebagai HR Manager (2008–2012), lalu berlanjut ke kehumasan sebagai Public Relations Specialist (2013–2016). Dari dua peran itu saya belajar satu hal: banyak persoalan di organisasi bermula dari komunikasi yang kurang jelas.

**Paragraf 2**
> Sejak 2017 saya menekuni public speaking. Dalam sepuluh tahun, saya berkesempatan berbagi di hampir 40 kota, bersama karyawan perusahaan dan bank, instansi pemerintah, kampus, sekolah, pesantren, dan komunitas. Saya bekerja dengan beberapa cara: sebagai personal brand, bersama vendor, atau sebagai associate beberapa lembaga pelatihan. Saat ini saya juga Professional Trainer di motivacenter, Bandung.

**Paragraf 3**
> Di luar ruang pelatihan, saya menjadi Public Relations di Indonesia Speak Up, serta penasihat dan relawan di beberapa komunitas di Bandung. Saya juga berbagi tips singkat lewat Instagram Reels dan TikTok, supaya keterampilan berkomunikasi bisa dipelajari siapa saja.

**Status:** ✅

### Video perkenalan
**Poster:** `▶ Perkenalan 90 detik` (tombol putar bulat kuning)
**Status:** ⚠️ Perlu video

### Tiga nilai kerja

| # | Judul | Deskripsi |
|---|---|---|
| 1 | **Praktis** | Setiap sesi berakhir dengan sesuatu yang bisa langsung dicoba. |
| 2 | **Sesuai audiens** | Materi untuk karyawan bank berbeda dengan materi untuk santri atau mahasiswa, jadi saya menyesuaikannya. |
| 3 | **Bermanfaat** | Berbicara adalah alat untuk bekerja dan melayani dengan lebih baik. |

**Status:** ✅

---

## 5. Kerja (Yang Saya Kerjakan)

**Eyebrow:** `[ YANG SAYA KERJAKAN ]`
**Heading:** *Empat hal yang mengisi hari-hari saya*

Empat kartu putih bergaris, tanpa tombol.

| # | Judul | Deskripsi | Status |
|---|---|---|---|
| 1 | **Melatih Public Speaking** | Pelatihan interaktif dengan banyak praktik, disesuaikan dengan latar peserta. Topik: **[ISI: mis. dasar public speaking, storytelling, presentasi]** | ⚠️ Konfirmasi topik |
| 2 | **Berbagi di Panggung** | Talk dan sharing session untuk acara, kampus, dan komunitas. Tema: **[ISI]** | ❌ |
| 3 | **Mendampingi** | Coaching personal untuk membangun kepercayaan diri dan kesiapan tampil. Format: **[ISI]** | ❌ |
| 4 | **Menggerakkan Komunitas** | Pendampingan dan penggerakan program sosial dan pengembangan SDM di komunitas, termasuk Indonesia Speak Up Goes To Masjid. | ✅ |

### Yang sering saya latih (chip, tanpa tautan)

```
Membuka presentasi · Mengelola rasa gugup · Menyusun pesan
Menjawab pertanyaan · Suara & bahasa tubuh
```
**Status:** ⚠️ Sesuaikan dengan materi yang benar-benar diajarkan

### Cara bekerja sama (satu kalimat, tanpa tombol)
> Saya bekerja dengan tiga cara: langsung, bersama vendor atau EO, atau lewat lembaga pelatihan.

**Status:** ✅

---

## 6. Cara Saya Bekerja

**Eyebrow:** `[ CARA SAYA BEKERJA ]`
**Heading:** *Dari kenalan dengan audiens sampai sesi selesai*

| # | Judul | Deskripsi |
|---|---|---|
| 01 | **Kenali audiensnya** | Saya ingin tahu siapa pesertanya, apa konteksnya, dan apa yang ingin mereka bawa pulang. |
| 02 | **Susun materinya** | Bahasa, contoh, dan latihan dipilih sesuai konteks peserta, bukan template yang sama untuk semua. |
| 03 | **Berlatih bersama** | Sesi berjalan dengan banyak praktik. Peserta mencoba langsung dan saling memberi umpan balik. |
| 04 | **Catatan sesudahnya** | Setelah sesi, ada catatan ringkas dan langkah yang bisa dilakukan sendiri. |

**Status:** ⚠️ Disimpulkan dari profil; konfirmasi dengan Kang Dimmy bahwa ini sesuai proses nyata.
Tidak ada tombol penutup.

---

## 7. Perjalanan (Interactive CV)

**Eyebrow:** `[ PERJALANAN ]`
**Heading:** *Dari HR, humas, sampai ruang pelatihan*
**Pembuka:** *Saring berdasarkan bidang, atau unduh versi ringkasnya.*

**Filter chip:** `Semua` · `Training` · `Komunitas & Relawan` · `PR & HR` · `Pendidikan`
**Tombol:** **Unduh CV (PDF)** (pil outline) · Status: ❌ Perlu file PDF

### Kotak "Sekilas"

| Label | Isi |
|---|---|
| Peran | Professional Trainer · Public Speaker · Coach · Community Specialist |
| Berbagi sejak | 2017 |
| Jangkauan | Hampir 40 kota di Indonesia |
| Pendidikan | S1 Administrasi Publik, Universitas Padjadjaran |
| Domisili | Bandung, Jawa Barat |

### Timeline (terbaru ke terlama)

| Periode | Peran | Organisasi | Kategori | Status |
|---|---|---|---|---|
| Jan 2024 – kini | Professional Trainer | motivacenter, Bandung | Training | ✅ |
| Jan 2017 – kini | Training & Development Specialist (Professional Trainer, Feb 2017–2023) | ADZ Training, Bandung | Training | ✅ ⚠️ Konfirmasi: brand pribadi? |
| Des 2025 – kini | Alumni FIM angkatan 27 (tema Kebijakan Publik, Jakarta, 12–14 Des 2025) | Forum Indonesia Muda | Komunitas | ✅ |
| Ags 2025 – kini | Advisor | Panggung Kreator | Komunitas | ✅ |
| Ags 2025 – kini | Alumni | Sekolah Pemikiran Islam | Pendidikan | ✅ |
| Sep 2023 – kini | Public Relations Specialist; Project Manager "Indonesia Speak Up Goes To Masjid" | Indonesia Speak Up | Komunitas | ✅ |
| Des 2021 – kini | Admin Regional Bandung Raya | Elite Circle | Komunitas | ✅ |
| **[ISI]** | Advisor / pengurus / relawan | **[ISI: nama komunitas di Bandung]** | Komunitas | ❌ |
| 2013 – 2016 | Public Relations Specialist | Yayasan Al Hilal, Bandung | PR & HR | ✅ |
| 2008 – 2012 | Human Resources Manager | Al-Azhar Syifa Budi Legenda Bekasi | PR & HR | ✅ |
| 1999 – 2003 | S1 Administrasi Publik | Universitas Padjadjaran | Pendidikan | ✅ |

### Isi accordion per entri
```
Konteks:       [1 kalimat: organisasi dan situasinya]
Yang dikerjakan:
  • [kata kerja + hal spesifik]
  • [kata kerja + hal spesifik]
Yang dipelajari: [1 kalimat; bukan klaim hasil]
```
> **Contoh, motivacenter:** *Konteks:* lembaga pelatihan softskill (public speaking, NLP, hypnotherapy, dll.). *Yang dikerjakan:* membawakan sesi public speaking untuk peserta dari berbagai latar. **[ISI poin lain]**

**Status:** ✅ struktur · ❌ isi accordion tiap entri

**Tautan tersier:** Lihat sesi yang pernah saya bawakan → `#aktivitas`

---

## 8. Aktivitas & Jejak

**Eyebrow:** `[ DI LAPANGAN ]`
**Heading:** *Catatan dari ruang pelatihan, panggung, dan komunitas*
**Sub:** Diperbarui secara berkala.
**Filter chip:** `Semua` · `Training` · `Talk` · `Coaching` · `Komunitas` · `Konten`
**Empty state:** *Catatan terbaru sedang disiapkan. Sementara itu, cerita lapangannya ada di Instagram [@kangdimmy](https://instagram.com/kangdimmy).*
**Tautan penutup:** Lihat semua aktivitas → `/aktivitas`

### Contoh isi awal (⚠️ verifikasi sebelum diterbitkan)

**Kartu 1: Training**
- **Judul:** Pembinaan Brighter 11: Self Development, Public Speaking
- **Tanggal:** 6 September [konfirmasi tahun]
- **Penyelenggara:** YBM Brilian · **Sektor:** Universitas
- **Ringkasan:** Sesi pembinaan untuk mahasiswa penerima Bright Scholarship ITB dan Universitas Padjadjaran, bertema self development dan dasar public speaking.
- **Status:** ⚠️ Konfirmasi tahun dan foto

**Kartu 2: Komunitas**
- **Judul:** Bersama Teman-Teman Komuniclub / Komunihub
- **Tanggal:** 12 Oktober [konfirmasi tahun]
- **Ringkasan:** **[ISI: teks postingan terpotong di tangkapan layar]**
- **Status:** ❌

### Halaman detail aktivitas
Di bagian bawah detail: *Ada yang ingin ditanyakan tentang sesi ini?* **Sapa saya →** (tautan teks, template WhatsApp `aktivitas`).

### Panduan menulis ringkasan
> Format: *"[Jenis sesi] bersama [audiens] di [kota]. Topik: [1 hal]. [1 momen yang berkesan]."*
> Hindari: "Alhamdulillah telah terlaksana…"
> Contoh bentuk: "Sesi public speaking bersama [jumlah] peserta di [kota]. Topik: menyusun presentasi singkat. Momen favorit: latihan membuka presentasi dalam 30 detik."

---

## 9. Konten & Komunitas

**Eyebrow:** `[ IKUT BELAJAR ]`
**Heading:** *Tips singkat yang bisa langsung dicoba*
**Sub:** Tips public speaking dan cerita dari lapangan. **[konfirmasi frekuensi posting]**

| Kanal | Isi | Handle | Tautan |
|---|---|---|---|
| Instagram | Reels tips public speaking, cuplikan sesi | @kangdimmy | `Ikuti →` |
| TikTok | Tips komunikasi singkat | @kangdimmy | `Ikuti →` |
| Threads | Catatan dan diskusi | @kangdimmy | `Ikuti →` |
| LinkedIn | Kegiatan profesional | /in/kangdimmy | `Ikuti →` |

**Poster video (opsional):** `▶ Cuplikan latihan` · ⚠️ Perlu video
**Status:** ✅ kanal · ⚠️ frekuensi

---

## 10. Kata Mereka (opsional)

Tampilkan section ini **hanya bila ada minimal 3 testimoni asli dengan izin tertulis.** Bila belum ada, sembunyikan seluruh section (jangan menampilkan kotak kosong).

**Eyebrow:** `[ KATA MEREKA ]`
**Heading:** *Cerita dari mereka yang pernah belajar bersama*

```
"[Kutipan asli, 1–3 kalimat, tentang apa yang dirasakan atau dipelajari]"
[Nama] · [Jabatan] · [Organisasi]
```
**Status:** ❌ Belum ada

> **Pesan permintaan testimoni:** *"Halo [Nama], terima kasih sudah mengundang saya di [acara]. Kalau berkenan, boleh saya minta 2–3 kalimat tentang pengalaman Anda di sesi itu? Dengan izin Anda, saya ingin menampilkannya di website saya."*

---

## 11. Seputar Saya (FAQ)

**Eyebrow:** `[ SEPUTAR SAYA ]`
**Heading:** *Pertanyaan yang sering muncul*

**1. Apakah materinya sama untuk semua peserta?**
> Tidak. Peserta bank, sekolah, pesantren, dan komunitas punya konteks berbeda, jadi saya menyesuaikan contoh dan cara penyampaiannya. ✅

**2. Dengan cara apa saja Kang Dimmy bekerja?**
> Langsung sebagai personal brand, bersama vendor atau EO, atau sebagai associate beberapa lembaga pelatihan. ✅

**3. Apakah bisa di luar Bandung?**
> Bisa. Saya sudah berbagi di hampir 40 kota di Indonesia. ✅

**4. Format sesinya seperti apa?**
> **[ISI: mis. tatap muka, daring, atau hybrid; durasi dari talk 60 menit sampai program beberapa sesi]** ❌

**5. Berapa jumlah peserta yang nyaman?**
> **[ISI]** ❌

**6. Bagaimana kalau ingin berdiskusi atau mengundang?**
> Sapa saya lewat WhatsApp, email, atau formulir di bagian bawah. Kita ngobrol dulu, tanpa tekanan. ✅

**7. Apakah terbuka untuk komunitas dan lembaga sosial?**
> **[ISI: jawaban sesuai kebijakan sebenarnya]** ❌

---

## 12. Sapa Saya (Kontak)

Latar kuning penuh, satu kartu putih bergaris di tengah.

**Eyebrow:** `[ MARI BERKENALAN ]`
**Heading:** *Sapa saya.*
**Sub:** *Tidak harus ada keperluan. Kenalan, bertanya, atau sekadar bertukar cerita juga boleh.*

### Tiga cara menyapa

| Cara | Label | Target | Status |
|---|---|---|---|
| WhatsApp | **Ngobrol di WhatsApp** (tombol utama kuning, hanya di section ini) | `wa.me/62XXXXXXXXXX?text=…` | ❌ Isi nomor |
| Email | **[ISI: email]** (tautan teks) | `mailto:` | ❌ |
| Instagram | **Sapa di Instagram** (tautan teks) | `instagram.com/kangdimmy` | ✅ |

### Topik opsional (chip, mengisi pesan WhatsApp secara otomatis)
> *Mau ngobrol soal apa? (boleh dilewati)*
```
Sekadar kenalan · Tanya soal pelatihan · Undangan mengisi acara · Belajar public speaking · Kolaborasi komunitas
```

### Formulir "Sapa Saya" (alternatif)

| # | Field | Tipe | Wajib | Placeholder |
|---|---|---|---|---|
| 1 | Nama | Text | ✓ | Nama Anda |
| 2 | Email atau WhatsApp | Text | ✓ | Salah satu saja |
| 3 | Pesan | Textarea | ✓ | Tulis apa saja yang ingin Anda sampaikan… |
| n/a | Persetujuan data pribadi | Checkbox | ✓ | Saya setuju data ini dipakai untuk membalas pesan saya, sesuai UU No. 27 Tahun 2022. |

**Tombol kirim:** `Kirim Pesan`
**Pesan sukses:** *Terima kasih sudah menyapa. Pesan Anda sudah masuk dan akan saya balas.*

### Baris media sosial
Ikon Instagram · TikTok · Threads · LinkedIn (@kangdimmy, /in/kangdimmy)

---

## 13. Footer

Latar hitam, teks krem.

| Elemen | Isi |
|---|---|
| Tagline | *Belajar bersama, tumbuh bersama.* |
| Tautan | Tentang · Kerja · Perjalanan · Aktivitas · Sapa |
| Sosial | Instagram · TikTok · Threads · LinkedIn |
| Hak cipta | © 2026 A Dimmy Zulhifansyah (Kang Dimmy). Semua hak dilindungi. |

Tidak ada kalimat ketersediaan atau tombol kontak tambahan.

---

## 14. Template Pesan WhatsApp

Format: `https://wa.me/62XXXXXXXXXX?text=…` · Nomor: **[ISI]** (internasional, tanpa + atau 0 di depan)

| Kunci | Pesan terisi | Dipicu dari |
|---|---|---|
| `kenalan` | Halo Kang Dimmy, saya [nama]. Saya ingin berkenalan dan ngobrol sebentar. | Tombol WhatsApp, chip "Sekadar kenalan" |
| `pelatihan` | Halo Kang Dimmy, saya [nama] dari [organisasi]. Saya ingin bertanya soal pelatihan public speaking. | Chip "Tanya soal pelatihan" |
| `acara` | Halo Kang Dimmy, saya [nama]. Kami sedang menyiapkan [nama acara]. Boleh ngobrol soal kemungkinan Kang Dimmy mengisi sesi? | Chip "Undangan mengisi acara" |
| `belajar` | Halo Kang Dimmy, saya [nama]. Saya ingin belajar public speaking dan mau tanya-tanya dulu. | Chip "Belajar public speaking" |
| `komunitas` | Halo Kang Dimmy, saya [nama] dari [komunitas]. Boleh ngobrol soal kolaborasi? | Chip "Kolaborasi komunitas" |
| `aktivitas` | Halo Kang Dimmy, saya melihat sesi "[judul]". Boleh bertanya lebih lanjut? | Detail aktivitas |

> Tanda kurung siku `[...]` sengaja dibiarkan agar pengunjung mengisinya sendiri.

---

## 15. Anggaran Tombol (jumlah ajakan di halaman)

| Section | Ajakan | Bentuk |
|---|---|---|
| Navbar | Sapa Saya | Pil outline |
| Hero | Kenali Perjalanan Saya · Tonton Perkenalan | Pil hitam · pil outline |
| Perjalanan | Unduh CV (PDF) · Lihat sesi yang pernah saya bawakan → | Pil outline · tautan teks |
| Aktivitas | Lihat semua aktivitas → | Tautan teks |
| Konten | Ikuti (4 kanal) | Tautan teks |
| Detail aktivitas | Sapa saya → | Tautan teks |
| Sapa Saya | Ngobrol di WhatsApp · Email · Sapa di Instagram · Kirim Pesan | Pil kuning · tautan · tautan · tombol formulir |

Ajakan bertombol solid hanya **satu** di hero dan **satu** di Sapa Saya. Dari v2 (sekitar 25 ajakan) menjadi sekitar 10, di luar tautan navigasi dan media sosial.

---

## 16. Checklist Sebelum Tayang

### Perlu diisi (❌)
- [ ] Nomor WhatsApp dan email
- [ ] Domain situs
- [ ] Foto: satu foto utama dan 3–5 foto dokumentasi tampil
- [ ] Video perkenalan 90 detik (dan opsional cuplikan latihan)
- [ ] Topik materi training dan talk, format coaching, jumlah peserta nyaman
- [ ] Jawaban FAQ nomor 4, 5, dan 7
- [ ] Nama komunitas di Bandung (advisor/pengurus/relawan)
- [ ] Isi accordion tiap entri pengalaman
- [ ] File CV (PDF)
- [ ] 3–5 aktivitas terbaik dengan foto dan ringkasan
- [ ] Tahun yang benar untuk posting "6 Sep" dan "12 Okt"
- [ ] Kebijakan privasi singkat (UU PDP No. 27/2022)
- [ ] Testimoni asli dengan izin (bila tidak ada, sembunyikan section)

### Perlu dikonfirmasi (⚠️)
- [ ] ADZ Training = brand pribadi?
- [ ] "Cara Saya Bekerja" 4 langkah sesuai proses nyata?
- [ ] Chip "Yang sering saya latih" sesuai materi?
- [ ] Frekuensi posting konten
- [ ] Tahun dua posting di tangkapan layar LinkedIn

### Sudah siap (✅)
- [x] Nama, sapaan, domisili, headline
- [x] Fakta utama (tahun, kota, sektor, pengikut)
- [x] Narasi Tentang dan tiga nilai kerja
- [x] Timeline (peran dan organisasi)
- [x] Kanal media sosial
- [x] FAQ nomor 1, 2, 3, dan 6
- [x] Template pesan WhatsApp
- [x] Teks Sapa Saya dan formulir
- [x] Footer dan tagline
