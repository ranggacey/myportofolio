"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const WA_NUMBER = "6287821589222";
const WA_TEXT = encodeURIComponent("Halo Rangga, saya melihat portofoliomu dan tertarik untuk berdiskusi.");

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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 01-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 01-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 019.88 9.89c0 5.45-4.44 9.88-9.89 9.88M20.5 3.49A11.8 11.8 0 0012.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 005.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.44-8.41" />
    </svg>
  );
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Pesan dari ${name || "pengunjung"} via portofolio`);
    const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ""}`);
    window.location.href = `mailto:ranggafigohidayat@gmail.com?subject=${subject}&body=${body}`;
  }

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {/* Quick actions */}
          <ScrollReveal>
            <div className="p-6 rounded-2xl bg-white/85 border border-[#D8A2A2]/45 h-full">
              <h3 className="text-sm font-bold text-[#242220] uppercase tracking-wider mb-1 font-mono">
                Hubungi langsung
              </h3>
              <p className="text-xs text-[#7C756F] mb-5">Respon tercepat, biasanya di bawah 1 jam.</p>
              <div className="flex flex-col gap-3">
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#8EA66B] text-white hover:bg-[#7B945A] shadow-md shadow-[#8EA66B]/25 transition-all cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Chat WhatsApp</span>
                </a>
                <a
                  href="mailto:ranggafigohidayat@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white border border-[#D8A2A2] text-[#242220] hover:border-[#8EA66B] hover:bg-[#FFDCDC]/40 transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4 text-[#8EA66B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Kirim Email</span>
                </a>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#FFDCDC]/50 border border-[#D8A2A2] text-[#242220] hover:bg-[#FFDCDC] hover:border-[#8EA66B] transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4 text-[#8EA66B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download CV (PDF)</span>
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-5">
                {socialLinks.filter((l) => l.name !== "Email").map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-mono text-[#524C48] hover:text-[#242220] bg-white/90 border border-[#D8A2A2]/60 rounded-full hover:border-[#8EA66B] hover:bg-[#FFDCDC]/40 transition-all shadow-xs cursor-pointer"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal delay={100}>
            <form
              onSubmit={handleSubmit}
              className="p-6 rounded-2xl bg-white/85 border border-[#D8A2A2]/45 h-full flex flex-col"
            >
              <h3 className="text-sm font-bold text-[#242220] uppercase tracking-wider mb-1 font-mono">
                Kirim pesan
              </h3>
              <p className="text-xs text-[#7C756F] mb-5">Dibuka lewat aplikasi email kamu.</p>
              <div className="flex flex-col gap-4 flex-1">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-[#35302E] mb-1.5">
                    Nama
                  </label>
                  <input
                    id="contact-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama kamu"
                    required
                    className="w-full h-11 px-4 rounded-xl text-sm bg-white border border-[#D8A2A2]/60 text-[#242220] placeholder:text-[#7C756F] outline-none focus:border-[#8EA66B] focus:ring-2 focus:ring-[#8EA66B]/20 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-[#35302E] mb-1.5">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@kamu.com"
                    className="w-full h-11 px-4 rounded-xl text-sm bg-white border border-[#D8A2A2]/60 text-[#242220] placeholder:text-[#7C756F] outline-none focus:border-[#8EA66B] focus:ring-2 focus:ring-[#8EA66B]/20 transition-all"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-[#35302E] mb-1.5">
                    Pesan
                  </label>
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Halo Rangga, saya tertarik…"
                    required
                    rows={4}
                    className="w-full flex-1 px-4 py-3 rounded-xl text-sm bg-white border border-[#D8A2A2]/60 text-[#242220] placeholder:text-[#7C756F] outline-none focus:border-[#8EA66B] focus:ring-2 focus:ring-[#8EA66B]/20 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#8EA66B] text-white hover:bg-[#7B945A] shadow-md shadow-[#8EA66B]/25 transition-all cursor-pointer"
                >
                  <span>Kirim Pesan</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>

        {/* Minimal Footer */}
        <div className="pt-8 border-t border-[#D8A2A2]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7C756F]">
          <span>&copy; {new Date().getFullYear()} Rangga Figo Hidayat. Lulusan S1 Teknik Informatika USM.</span>
          <span>Semarang, Jawa Tengah</span>
        </div>
      </div>
    </section>
  );
}
