import type { Metadata } from "next";
import { SITE } from "./lib/site";
import "./globals.css";

const DESCRIPTION =
  "Kang Dimmy (A Dimmy Zulhifansyah), trainer public speaking dari Bandung. Sepuluh tahun berbagi di hampir 40 kota, dari ruang rapat bank sampai pesantren.";

export const metadata: Metadata = {
  title: "Kang Dimmy | Trainer Public Speaking & Community Specialist, Bandung",
  description: DESCRIPTION,
  openGraph: {
    title: "Kang Dimmy: Trainer Public Speaking dari Bandung",
    description: DESCRIPTION,
    type: "website",
    locale: "id_ID",
  },
  ...(SITE.canonicalUrl
    ? {
        metadataBase: new URL(SITE.canonicalUrl),
        alternates: { canonical: "/" },
      }
    : {}),
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "A Dimmy Zulhifansyah",
  alternateName: "Kang Dimmy",
  jobTitle: "Public Speaking Trainer, Coach, Community Specialist",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bandung",
    addressRegion: "Jawa Barat",
    addressCountry: "ID",
  },
  sameAs: [
    "https://www.linkedin.com/in/kangdimmy",
    "https://instagram.com/kangdimmy",
    "https://tiktok.com/@kangdimmy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FBFAF4] text-[#111111] selection:bg-[#FFE94A] selection:text-[#111111]">
        {children}
      </body>
    </html>
  );
}
