/**
 * Satu tempat untuk aset & data yang belum tersedia.
 * Isi nilainya saat berkasnya siap; section otomatis menampilkan versi lengkapnya.
 * Jangan diganti dengan data contoh: lebih baik tampil "sedang disiapkan".
 */

export type Photo = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type MentoringVideo = {
  src: string;
  poster: string;
  /** Label durasi di poster, mis. "58 detik". */
  duration: string;
  /** Transkrip ringkas di bawah video. */
  transcript: string;
};

export const SITE = {
  email: null as string | null,
  /** Domain produksi, mis. "https://kangdimmy.com". */
  canonicalUrl: null as string | null,
  cvUrl: null as string | null,
  video: null as MentoringVideo | null,
  photos: [
    {
      src: "/documentation/20241008083943_IMG_2567.JPG.jpeg",
      alt: "Kang Dimmy sedang memandu sesi public speaking bersama peserta",
      caption: "",
      width: 1920,
      height: 1280,
    },
    {
      src: "/documentation/IMG-20250730-WA0034.jpg.jpeg",
      alt: "Kang Dimmy berbagi materi di depan peserta",
      caption: "",
      width: 1200,
      height: 1600,
    },
    {
      src: "/documentation/IMG-20250730-WA0043.jpg.jpeg",
      alt: "Peserta mengikuti sesi public speaking",
      caption: "",
      width: 1200,
      height: 1600,
    },
    {
      src: "/documentation/IMG_4353 (1).jpg.jpeg",
      alt: "Kang Dimmy berfoto bersama peserta sesi pelatihan",
      caption: "",
      width: 5108,
      height: 3405,
    },
    {
      src: "/documentation/Pic 10 (1).jpg.jpeg",
      alt: "Kang Dimmy berbicara di atas panggung",
      caption: "",
      width: 4096,
      height: 5120,
    },
  ] as Photo[],
};
