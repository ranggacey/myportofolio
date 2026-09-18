import ScrollReveal from "./ScrollReveal";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/ranggacey",
    label: "github.com/ranggacey",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    label: "LinkedIn Profile",
  },
  {
    name: "Email",
    href: "mailto:ranggafigohidayat@gmail.com",
    label: "Kirim Email",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28 px-6 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-2">
              Kontak
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
              Mari terhubung dan berdiskusi.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed">
              Tertarik merekrut, mengajak kolaborasi project, atau sekadar ingin tanya-tanya? 
              Pintu komunikasi saya selalu terbuka.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-14">
            <a
              href="mailto:ranggafigohidayat@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-white text-black hover:bg-zinc-200 transition-colors"
            >
              <span>Kirim Email Langsung</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>

            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 text-xs font-mono text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-full hover:border-zinc-700 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Minimal Footer */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <span>&copy; {new Date().getFullYear()} Rangga Figo Hidayat. Lulusan S1 Teknik Informatika USM.</span>
          <span>Semarang, Jawa Tengah</span>
        </div>
      </div>
    </section>
  );
}
