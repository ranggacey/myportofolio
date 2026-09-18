"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center pt-24 pb-16 px-6"
    >
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-xs text-zinc-300 font-mono">
            Tersedia untuk kerja full-time &amp; freelance • Semarang
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.15] mb-6">
          <span className="text-zinc-400 text-sm sm:text-base font-mono uppercase tracking-wider block mb-3 font-normal">
            Web &amp; Software Developer
          </span>
          <span className="text-white block">Rangga Figo Hidayat</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
          Fresh graduate Teknik Informatika dari Universitas Semarang (USM). 
          Fokus membangun aplikasi web yang cepat dibuka, tampilan simpel dan rapi, 
          serta struktur kode yang gampang dirawat.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href="#projects"
            className="w-full sm:w-auto px-7 py-3 rounded-full text-sm font-medium bg-white text-black hover:bg-zinc-200 transition-colors cursor-pointer text-center"
          >
            Lihat Project
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-7 py-3 rounded-full text-sm font-medium bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 hover:bg-zinc-800/80 transition-colors cursor-pointer text-center"
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  );
}
