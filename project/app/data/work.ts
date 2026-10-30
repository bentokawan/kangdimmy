export type WorkItem = {
  icon: "mic" | "stage" | "coach" | "community";
  title: string;
  desc: string;
};

export const WORK: WorkItem[] = [
  {
    icon: "mic",
    title: "Melatih",
    desc: "Pelatihan interaktif dengan banyak praktik. Tema yang pernah saya bawakan: public speaking, service excellence, komunikasi, negosiasi, selling skill, storytelling, dan motivasi kerja. Selalu disesuaikan dengan latar peserta.",
  },
  {
    icon: "stage",
    title: "Berbagi di panggung",
    desc: "Talk, sharing session, dan peran sebagai MC untuk acara, kampus, dan komunitas.",
  },
  {
    icon: "coach",
    title: "Mendampingi",
    desc: "Coaching dan mentoring personal untuk membangun percaya diri dan kesiapan tampil, dari menyusun materi sampai latihan simulasi.",
  },
  {
    icon: "community",
    title: "Menggerakkan komunitas",
    desc: "Pendampingan program sosial dan pengembangan SDM, termasuk Indonesia Speak Up Goes To Masjid.",
  },
];

export const TRAINED_CHIPS = [
  "Membuka presentasi",
  "Mengelola rasa gugup",
  "Menyusun pesan",
  "Storytelling",
  "Menjual dengan percaya diri",
  "Negosiasi",
  "Pelayanan prima",
];

export const PROCESS = [
  {
    no: "01",
    title: "Kenali audiensnya",
    desc: "Siapa pesertanya dan apa yang ingin mereka bawa pulang.",
  },
  {
    no: "02",
    title: "Susun materinya",
    desc: "Bahasa, contoh, dan latihan sesuai konteks.",
  },
  {
    no: "03",
    title: "Berlatih bersama",
    desc: "Sesi berjalan dengan banyak praktik.",
  },
  {
    no: "04",
    title: "Catatan sesudahnya",
    desc: "Ringkasan dan langkah yang bisa dilakukan sendiri.",
  },
];

export const SECTORS = [
  "Korporasi",
  "Instansi Pemerintah",
  "Perbankan",
  "F&B",
  "Organisasi",
  "Sekolah",
  "Universitas",
  "Pesantren",
  "Komunitas",
];

export const AFFILIATIONS = [
  "motivacenter",
  "ADZ Training",
  "Indonesia Speak Up",
  "Panggung Kreator",
  "Elite Circle Bandung Raya",
  "Forum Indonesia Muda",
];

export const ROLES = [
  "Professional Trainer",
  "Public Speaker",
  "Coach",
  "Community Specialist",
  "Berbagi sejak 2017",
  "Bandung",
];
