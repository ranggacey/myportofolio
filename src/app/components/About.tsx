import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-24 px-6 border-t border-[#D8A2A2]/30">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <span className="text-xs font-mono uppercase tracking-widest text-[#8EA66B] font-semibold block mb-3">
            Tentang Saya
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#242220] tracking-tight mb-5">
            Rangga Figo Hidayat
          </h2>
          <div className="space-y-4 text-[#3D3734] text-base sm:text-lg leading-relaxed">
            <p>
              Saya Web Developer dan lulusan S1 Teknik Informatika Universitas Semarang yang senang mengubah ide menjadi website yang benar-benar bisa digunakan.
            </p>
            <p className="text-[#524C48] text-sm sm:text-base">
              Saya terbiasa mengembangkan aplikasi web dari sisi frontend hingga backend, mulai dari membangun antarmuka yang responsif, mengelola database, membuat sistem berbasis CMS, hingga melakukan optimasi performa dan SEO.
            </p>
          </div>
          <div className="pt-6">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-white/90 border border-[#D8A2A2] text-[#242220] hover:border-[#8EA66B] hover:bg-[#FFDCDC]/40 transition-all shadow-xs cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 text-[#8EA66B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Lihat CV Lengkap (PDF)</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
