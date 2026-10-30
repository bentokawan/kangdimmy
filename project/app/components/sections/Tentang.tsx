import { FaQuoteLeft } from "react-icons/fa6";
import { Eyebrow, SectionHeading } from "../ui/Heading";

const VALUES = [
  {
    title: "Praktis",
    desc: "Setiap sesi berakhir dengan sesuatu yang bisa langsung dicoba.",
  },
  {
    title: "Sesuai audiens",
    desc: "Materi untuk karyawan bank berbeda dengan materi untuk santri atau mahasiswa, jadi saya menyesuaikannya.",
  },
  {
    title: "Bermanfaat",
    desc: "Berbicara adalah alat untuk bekerja dan melayani dengan lebih baik.",
  },
];

export function Tentang() {
  return (
    <section id="tentang" className="section">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="max-w-[640px] reveal">
          <Eyebrow>Tentang Saya</Eyebrow>
          <SectionHeading>
            Dari ruang HR ke <span className="hl inline-block">ruang pelatihan</span>
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mt-10">
          <div className="lg:col-span-7 flex flex-col gap-5 text-[17px] leading-[1.65] text-[#3A3A3A] max-w-[64ch] reveal">
            <p>
              Saya mulai dari dunia kerja yang sunyi: <strong>HR Manager</strong> (2008–2012),
              lalu <strong>Public Relations</strong> (2013–2016). Dari dua peran itu saya belajar
              satu hal sederhana: banyak persoalan di organisasi bermula dari komunikasi yang
              kurang jelas.
            </p>
            <p>
              Sejak 2017 saya menekuni public speaking. Dalam sepuluh tahun, saya berkesempatan
              berbagi bersama karyawan perusahaan dan bank, instansi pemerintah, kampus, sekolah,
              pesantren, dan komunitas. Kadang sebagai personal brand, kadang bersama vendor atau
              lembaga pelatihan. Saat ini saya juga <strong>Professional Trainer di motivacenter,
                Bandung</strong>.
            </p>
            <p>
              Di luar ruang pelatihan, saya menjadi Public Relations di Indonesia Speak Up, serta
              penasihat dan relawan di beberapa komunitas Bandung. Tips singkatnya saya bagikan
              lewat Instagram Reels dan TikTok, supaya keterampilan berkomunikasi bisa dipelajari
              siapa saja.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            {VALUES.map((value, index) => (
              <div
                key={value.title}
                className="card reveal"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <h3 className="font-display font-bold text-[#111111]">{value.title}</h3>
                <p className="text-sm text-[#3A3A3A] mt-1 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <figure className="reveal mt-16 md:mt-24 max-w-[760px] mx-auto flex flex-col items-center text-center">
          <FaQuoteLeft
            className="text-[#D8DCE3] text-4xl sm:text-[42px] mb-5 sm:mb-6"
            aria-hidden="true"
          />
          <blockquote className="font-display font-bold text-[#111111] text-[clamp(1.5rem,3.2vw,2.35rem)] leading-[1.25] tracking-tight">
            Banyak persoalan di organisasi bermula dari komunikasi yang kurang jelas.
          </blockquote>
        </figure>
      </div>
    </section>
  );
}
