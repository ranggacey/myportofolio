"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden"
    >
      {/* Subtle Warm Atmospheric Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#FFDCDC]/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[250px] bg-[#8EA66B]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">
        {/* Profile Avatar */}
        <div className="relative mb-5">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-[#8EA66B] via-[#D8A2A2] to-[#FFDCDC] shadow-lg shadow-[#D8A2A2]/30">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#FFFDF8] relative">
              <Image
                src="/profile.webp"
                alt="Rangga Figo Hidayat"
                width={112}
                height={112}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFDCDC]/70 border border-[#D8A2A2]/60 mb-8 shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8EA66B] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8EA66B]" />
          </span>
          <span className="text-xs text-[#394924] font-mono font-medium">
            Tersedia untuk kerja full-time &amp; freelance • Semarang
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.15] mb-6 text-[#242220]">
          <span className="text-[#8EA66B] text-sm sm:text-base font-mono uppercase tracking-wider block mb-3 font-semibold">
            Web &amp; Software Developer
          </span>
          <span className="block">Rangga Figo Hidayat</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#524C48] max-w-xl mx-auto mb-10 leading-relaxed font-normal">
          Fresh graduate Teknik Informatika dari Universitas Semarang (USM). 
          Fokus membangun aplikasi web yang cepat dibuka, tampilan simpel dan rapi, 
          serta struktur kode yang gampang dirawat.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-semibold bg-[#8EA66B] text-white hover:bg-[#7B945A] shadow-md shadow-[#8EA66B]/25 transition-all cursor-pointer text-center"
          >
            Lihat Project
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-semibold bg-white/90 border border-[#D8A2A2] text-[#242220] hover:bg-[#FFDCDC]/50 hover:border-[#8EA66B] transition-all cursor-pointer text-center inline-flex items-center justify-center gap-2 shadow-xs"
          >
            <svg className="w-4 h-4 text-[#8EA66B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Lihat CV</span>
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-semibold bg-[#FFDCDC]/50 border border-[#D8A2A2] text-[#242220] hover:bg-[#FFDCDC] hover:border-[#8EA66B] transition-all cursor-pointer text-center"
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  );
}
