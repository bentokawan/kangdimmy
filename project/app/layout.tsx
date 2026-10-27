import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kang Dimmy Profile",
  description:
    "Kang Dimmy (A Dimmy Zulhifansyah), a public speaking trainer from Bandung. Ten years of sharing in nearly 40 cities across Indonesia, from meeting rooms to Islamic boarding schools.",
  openGraph: {
    title: "Kang Dimmy Profile",
    description:
      "Kang Dimmy (A Dimmy Zulhifansyah), a public speaking trainer from Bandung. Ten years of sharing in nearly 40 cities across Indonesia.",
    type: "website",
    locale: "en_US",
  },
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
    addressRegion: "West Java",
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
    <html lang="en" className="scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&display=swap"
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
