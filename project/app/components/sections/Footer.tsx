import { NAV_LINKS } from "../../lib/constants";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/kangdimmy" },
  { label: "TikTok", href: "https://tiktok.com/@kangdimmy" },
  { label: "Threads", href: "https://threads.net/@kangdimmy" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kangdimmy" },
];

export function Footer() {
  return (
    <footer className="py-12 bg-[#111111] text-[#FBFAF4]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/15">
          <div>
            <span className="font-display font-bold text-lg">Kang Dimmy</span>
            <p className="text-sm text-[#B9B6AE] italic mt-1">Belajar bersama, tumbuh bersama.</p>
          </div>
          <nav aria-label="Navigasi footer" className="footer-nav flex flex-wrap gap-x-6 text-sm text-[#B9B6AE]">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </a>
            ))}
            <a href="#sapa" className="hover:text-white">
              Sapa
            </a>
          </nav>
        </div>
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#8A877F]">
          <p>© 2026 A Dimmy Zulhifansyah (Kang Dimmy)</p>
          <div className="flex gap-4">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
