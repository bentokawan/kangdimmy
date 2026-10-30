import { SITE } from "../lib/site";

export type Channel = {
  id: string;
  name: string;
  handle: string;
  desc: string;
  url: string;
  cta: string;
  brand: string;
};

const SOCIALS: Channel[] = [
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "/in/kangdimmy",
    desc: "Kegiatan profesional · 5.500+ pengikut",
    url: "https://www.linkedin.com/in/kangdimmy",
    cta: "Terhubung di LinkedIn",
    brand: "btn--linkedin",
  },
  {
    id: "instagram",
    name: "Instagram",
    handle: "@kangdimmy",
    desc: "Reels tips public speaking, cuplikan sesi",
    url: "https://instagram.com/kangdimmy",
    cta: "Sapa di Instagram",
    brand: "btn--instagram",
  },
  {
    id: "threads",
    name: "Threads",
    handle: "@kangdimmy",
    desc: "Catatan dan diskusi",
    url: "https://threads.net/@kangdimmy",
    cta: "Ngobrol di Threads",
    brand: "btn--threads",
  },
  {
    id: "tiktok",
    name: "TikTok",
    handle: "@kangdimmy",
    desc: "Tips komunikasi singkat",
    url: "https://tiktok.com/@kangdimmy",
    cta: "Tonton tips di TikTok",
    brand: "btn--tiktok",
  },
];

/** Kanal email hanya muncul setelah alamatnya ada. */
export const CHANNELS: Channel[] = [
  ...(SITE.email
    ? [
        {
          id: "email",
          name: "Email",
          handle: SITE.email,
          desc: "Undangan, kolaborasi, atau pertanyaan",
          url: `mailto:${SITE.email}`,
          cta: "Kirim Email",
          brand: "btn--gmail",
        },
      ]
    : []),
  ...SOCIALS,
];

export const CONTENT_CHANNELS = SOCIALS;
