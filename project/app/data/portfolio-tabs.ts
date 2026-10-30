export type PortfolioTab = {
  id: string;
  label: string;
  context: string;
  items: string[];
};

export const PORTFOLIO_TABS: PortfolioTab[] = [
  {
    id: "perbankan",
    label: "Perbankan",
    context: "Sesi untuk bank, pegadaian, dan pimpinan cabang.",
    items: [
      "Bank BNI Cianjur",
      "Bank BNI JPK Bandung",
      "Bank BNI JPK Perintis Kemerdekaan",
      "Bank bjb Cabang Tamansari",
      "Pegadaian Jakarta",
      "Kepala Cabang BRC Bandung",
    ],
  },
  {
    id: "korporasi",
    label: "Korporasi",
    context: "Pelatihan komunikasi dan penjualan untuk tim perusahaan.",
    items: [
      "PT Amanah Mitra Mandiri",
      "PT Atrya Swascipta Rekayasa",
      "Mitratex Jakarta",
      "PT Super Unggas Jaya",
      "Footstep",
      "Steak Ranjang",
      "Solusi Pest Control",
      "Infaq Berkah Qurani",
    ],
  },
  {
    id: "pemerintah",
    label: "Pemerintah",
    context: "Instansi pemerintah, BUMN, dan program publik.",
    items: [
      "Sekretariat DPRD Kota Bekasi",
      "Sekda Kab. Bekasi",
      "DPRD Kab. Kendal",
      "Disparbudpora Kab. Pacitan",
      "Kemenkeu Mengajar Tasikmalaya",
      "Kemenpora — atlet junior Jawa Timur",
      "Pusdiklat PLN",
      "UMKM Purwakarta",
    ],
  },
  {
    id: "kesehatan",
    label: "Kesehatan",
    context: "Rumah sakit, klinik, dan layanan kesehatan.",
    items: [
      "RS Al Islam Bandung",
      "RSUP Hasan Sadikin",
      "RS Mekarsari Bekasi",
      "Klinik AMMYN Sukabumi",
      "Klinik Seno Medika",
    ],
  },
  {
    id: "sekolah",
    label: "Sekolah & Guru",
    context: "Pengembangan guru dan siswa di sekolah.",
    items: [
      "Guru SD Rabbani",
      "Guru SMPIT Insan Rahayu",
      "Guru SMK Teknologi Mandiri Garut",
      "Djalaludin Pane Foundation",
      "SMK Plus Al Ghifari",
      "SMAN 1 Cisarua",
      "SMA/SMK Sodonghilir",
    ],
  },
  {
    id: "kampus",
    label: "Kampus",
    context: "Kuliah praktisi, pelatihan humas, dan organisasi mahasiswa.",
    items: [
      "UIN Sunan Gunung Djati",
      "UPI",
      "Itenas",
      "Unikom",
      "Universitas Pasundan",
      "Universitas Mataram",
      "Universitas Indonesia Membangun",
      "Universitas Muhammadiyah",
    ],
  },
  {
    id: "pesantren",
    label: "Pesantren & Dakwah",
    context: "Pesantren, masjid, dan komunitas dakwah.",
    items: [
      "Daarut Tauhid",
      "Tahfidz Leadership Bandung",
      "Kampung Quran Learning Centre",
      "Mihrab Quran Al Fatih",
      "Pesantren Ajar, Purwakarta",
      "DKM Masjid Al Murabbi",
      "Hirokoba — 400 siswa Rohis se-Kota Bandung",
    ],
  },
  {
    id: "komunitas",
    label: "Komunitas & Event",
    context: "Komunitas, event daerah, dan pertemuan trainer.",
    items: [
      "True Path Community",
      "Raimuna Daerah Jabar",
      "Divers Clean Action",
      "Karang Taruna Derwati",
      "Kader Pintar & Aisyiyah Sumedang",
      "Speak Up Room",
      "Ruang Progress & Muda Movement",
      "Festival Trainer Nasional",
    ],
  },
];
