import { PROCESS, WORK } from "../../data/work";
import { SectionHeading } from "../ui/Heading";
import { WorkIcon } from "../ui/WorkIcon";

export function Kerja() {
  return (
    <section id="kerja" className="section">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="max-w-[640px] reveal">
          <SectionHeading>Melatih, Berbagi, Mendampingi, Menggerakkan</SectionHeading>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {WORK.map((item, index) => (
            <article
              key={item.title}
              className="card reveal flex flex-col"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <WorkIcon name={item.icon} />
              <h3 className="font-display font-bold text-[#111111] text-lg mt-4">{item.title}</h3>
              <p className="text-sm text-[#3A3A3A] mt-2 leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t-[1.5px] border-[#111111]">
          <h3 className="font-display font-bold text-[#111111] text-lg reveal">Cara saya bekerja</h3>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mt-8">
            {PROCESS.map((step) => (
              <li key={step.no} className="group reveal flex items-start gap-4 sm:block">
                <span
                  aria-hidden="true"
                  className="block shrink-0 font-display font-bold leading-none tabular-nums text-[clamp(2.5rem,4.5vw,3.5rem)] text-[#D8D4C7] transition-colors duration-200 group-hover:text-[#111111]"
                >
                  {step.no}
                </span>
                <div>
                  <h4 className="font-display font-bold text-[#111111] text-[15px] sm:mt-4">
                    {step.title}
                  </h4>
                  <p className="text-sm text-[#5E5E5E] mt-2 leading-relaxed transition-colors duration-200 group-hover:text-[#3A3A3A]">
                    {step.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
