export type Activity = {
  id: string;
  category: "Training" | "Komunitas" | "Konten";
  title: string;
  meta: string;
  summary: string;
  instagram?: boolean;
};

/** Tahun belum tersedia di CV, jadi tidak ditulis. */
export const ACTIVITIES: Activity[] = [
  {
    id: "brighter-11",
    category: "Training",
    title: "Pembinaan Brighter 11: pengembangan diri dan public speaking",
    meta: "6 Sep · YBM Brilian · Universitas",
    summary:
      "Sesi untuk mahasiswa penerima Bright Scholarship ITB dan Universitas Padjadjaran.",
  },
  {
    id: "komuniclub",
    category: "Komunitas",
    title: "Bersama Komuniclub / Komunihub",
    meta: "12 Okt",
    summary:
      "Catatan sesi sedang disiapkan. Sementara itu, cerita lapangannya ada di Instagram.",
    instagram: true,
  },
];

export const ACTIVITY_FILTERS = ["Semua", "Training", "Komunitas", "Konten"] as const;
