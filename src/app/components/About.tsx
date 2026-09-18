import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-24 px-6 border-t border-zinc-900">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-3">
            Tentang Saya
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-5">
            Rangga Figo Hidayat
          </h2>
          <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed">
            <p>
              Saya Web Developer dan lulusan S1 Teknik Informatika Universitas Semarang yang senang mengubah ide menjadi website yang benar-benar bisa digunakan.
            </p>
            <p className="text-zinc-400 text-sm sm:text-base">
              Saya terbiasa mengembangkan aplikasi web dari sisi frontend hingga backend, mulai dari membangun antarmuka yang responsif, mengelola database, membuat sistem berbasis CMS, hingga melakukan optimasi performa dan SEO.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
