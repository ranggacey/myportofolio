import ScrollReveal from "./ScrollReveal";

const techCategories = [
  {
    title: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5 & CSS3"],
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "PHP / Laravel", "PostgreSQL", "MySQL", "REST API", "Prisma ORM"],
  },
  {
    title: "Tools & Testing",
    skills: ["Git & GitHub", "Lighthouse", "Puppeteer", "Vercel", "Figma", "VS Code"],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="relative py-20 md:py-28 px-6 border-t border-[#D8A2A2]/30">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8EA66B] font-semibold block mb-2">
              Keahlian Teknis
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#242220] tracking-tight">
              Teknologi yang biasa saya gunakan sehari-hari.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techCategories.map((cat, idx) => (
            <ScrollReveal key={cat.title} delay={idx * 100}>
              <div className="p-6 rounded-2xl bg-white/85 border border-[#D8A2A2]/45 hover:border-[#8EA66B] shadow-xs hover:shadow-lg hover:shadow-[#D8A2A2]/15 transition-all duration-300">
                <h3 className="text-sm font-bold text-[#242220] uppercase tracking-wider mb-4 font-mono flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8EA66B]" />
                  <span>{cat.title}</span>
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="px-2.5 py-1 text-xs text-[#35302E] bg-[#FFDCDC]/55 border border-[#D8A2A2]/50 hover:bg-[#FFDCDC] hover:border-[#8EA66B]/60 rounded-md font-mono transition-colors"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
