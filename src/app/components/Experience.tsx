import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    period: "2024 — Sekarang",
    title: "Freelance Web Developer",
    place: "Remote",
    desc: "Mengerjakan project website untuk klien: company profile, landing page, dan aplikasi web custom. Terbiasa menangani project dari brief sampai deploy.",
    tags: ["Next.js", "Laravel", "Tailwind CSS"],
    current: true,
  },
  {
    period: "2025",
    title: "Web Developer Intern",
    place: "BRIDA Kota Semarang",
    desc: "Magang di Badan Riset dan Inovasi Daerah Kota Semarang. Membangun sistem presensi magang berbasis face recognition untuk kebutuhan internal.",
    tags: ["Face Recognition", "PHP", "MySQL"],
    current: false,
  },
  {
    period: "2026",
    title: "S1 Teknik Informatika",
    place: "Universitas Semarang",
    desc: "Lulus program studi Teknik Informatika. Fokus pada rekayasa perangkat lunak dan pengembangan aplikasi web.",
    tags: ["Software Engineering", "Database", "Web Development"],
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-28 px-6 border-t border-[#D8A2A2]/30">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8EA66B] font-semibold block mb-2">
              Perjalanan
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#242220] tracking-tight">
              Pengalaman yang membentuk saya.
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#D8A2A2]/60" aria-hidden="true" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <ScrollReveal key={exp.title} delay={idx * 100}>
                <div className="relative pl-10">
                  {/* dot */}
                  <span
                    className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 ${
                      exp.current
                        ? "bg-[#8EA66B] border-[#8EA66B] shadow-md shadow-[#8EA66B]/40"
                        : "bg-[#FFFDF8] border-[#D8A2A2]"
                    }`}
                    aria-hidden="true"
                  />
                  {exp.current && (
                    <span className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-[#8EA66B] opacity-40 animate-ping" aria-hidden="true" />
                  )}

                  <div className="p-6 rounded-2xl bg-white/85 border border-[#D8A2A2]/45 hover:border-[#8EA66B] shadow-xs hover:shadow-lg hover:shadow-[#D8A2A2]/15 transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#8EA66B]">
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-white bg-[#8EA66B] px-2 py-0.5 rounded-full">
                          Saat ini
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-[#242220] tracking-tight">{exp.title}</h3>
                    <p className="text-xs font-mono text-[#7C756F] mt-1 mb-3">{exp.place}</p>
                    <p className="text-sm text-[#524C48] leading-relaxed mb-4">{exp.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs text-[#35302E] bg-[#FFDCDC]/55 border border-[#D8A2A2]/50 rounded-md font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
