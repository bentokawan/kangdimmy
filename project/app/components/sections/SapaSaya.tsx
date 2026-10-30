import { CHANNELS } from "../../data/channels";
import { SocialIcon } from "../ui/SocialIcon";

export function SapaSaya() {
  return (
    <section id="sapa" className="section section--yellow">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6">
        <div className="card !p-6 sm:!p-10 text-center">
          <div className="max-w-[560px] mx-auto">
            <p className="eyebrow text-[#3A3A3A] mb-3 justify-center reveal">Mari Berkenalan</p>
            <h2 className="font-display font-bold text-[#111111] text-[clamp(1.6rem,5vw,2.6rem)] leading-[1.1] reveal">
              Sapa saya.
            </h2>
            <p className="text-[clamp(.9375rem,2.5vw,1rem)] text-[#3A3A3A] mt-3 leading-relaxed reveal">
              Tidak harus ada keperluan. Kenalan, bertanya, atau sekadar bertukar cerita juga
              boleh.
            </p>
          </div>

          <div className="hello-btns mt-8 reveal">
            {CHANNELS.map((channel) => {
              const isMail = channel.url.startsWith("mailto:");
              return (
                <a
                  key={channel.id}
                  href={channel.url}
                  {...(!isMail ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`btn ${channel.brand}`}
                >
                  <SocialIcon name={channel.name} />
                  {channel.cta}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
