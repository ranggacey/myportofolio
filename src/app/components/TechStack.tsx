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
    <section id="skills" className="relative py-20 md:py-28 px-6 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-2">
              Keahlian Teknis
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Teknologi yang biasa saya gunakan sehari-hari.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techCategories.map((cat, idx) => (
            <ScrollReveal key={cat.title} delay={idx * 100}>
              <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/70 hover:border-zinc-700 transition-colors">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 font-mono">
                  {cat.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="px-2.5 py-1 text-xs text-zinc-300 bg-zinc-800/60 border border-zinc-700/50 rounded-md font-mono"
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
