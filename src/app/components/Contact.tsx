import ScrollReveal from "./ScrollReveal";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/ranggacey",
    label: "github.com/ranggacey",
  },
  {
    name: "LinkedIn",
    href: "http://linkedin.com/in/rangga-figo-hidayat-861b74332/",
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
    <section id="contact" className="relative py-20 md:py-28 px-6 border-t border-[#D8A2A2]/30">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8EA66B] font-semibold block mb-2">
              Kontak
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#242220] tracking-tight mb-4">
              Mari terhubung dan berdiskusi.
            </h2>
            <p className="text-[#524C48] text-sm sm:text-base max-w-xl leading-relaxed">
              Tertarik merekrut, mengajak kolaborasi project, atau sekadar ingin tanya-tanya? 
              Pintu komunikasi saya selalu terbuka.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-14">
            <a
              href="mailto:ranggafigohidayat@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#8EA66B] text-white hover:bg-[#7B945A] shadow-md shadow-[#8EA66B]/25 transition-all cursor-pointer"
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
                  className="px-4 py-2.5 text-xs font-mono text-[#524C48] hover:text-[#242220] bg-white/90 border border-[#D8A2A2]/60 rounded-full hover:border-[#8EA66B] hover:bg-[#FFDCDC]/40 transition-all shadow-xs cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Minimal Footer */}
        <div className="pt-8 border-t border-[#D8A2A2]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7C756F]">
          <span>&copy; {new Date().getFullYear()} Rangga Figo Hidayat. Lulusan S1 Teknik Informatika USM.</span>
          <span>Semarang, Jawa Tengah</span>
        </div>
      </div>
    </section>
  );
}
