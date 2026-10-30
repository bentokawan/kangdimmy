import { CONTENT_CHANNELS } from "../../data/channels";
import { Eyebrow, SectionHeading } from "../ui/Heading";

export function Konten() {
  return (
    <section id="konten" className="section">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="max-w-[640px] reveal">
          <Eyebrow>Ikut Belajar</Eyebrow>
          <SectionHeading>Tips singkat untuk dicoba hari ini</SectionHeading>
        </div>

        <ul className="mt-8 border-t-[1.5px] border-[#111111]">
          {CONTENT_CHANNELS.map((channel, index) => (
            <li
              key={channel.id}
              className="reveal"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <a
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-row"
              >
                <span className="font-display font-bold text-[clamp(1.25rem,3vw,1.75rem)]">
                  {channel.name}
                </span>
                <span className="text-sm text-[#5E5E5E] flex-1">{channel.desc}</span>
                <span className="font-semibold text-sm shrink-0">{channel.handle} →</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
