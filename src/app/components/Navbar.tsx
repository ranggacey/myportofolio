"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      // Active section detection
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActive(navLinks[i].label);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string, label: string) => {
    setActive(label);
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="w-full max-w-4xl flex flex-col items-center pointer-events-auto">
        {/* Desktop Navbar (Pill) */}
        <nav
          className={`hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full transition-all duration-300 ${
            scrolled
              ? "glass-pill shadow-lg shadow-[#D8A2A2]/20 border border-[#D8A2A2]/40"
              : "bg-[#FFFDF8]/85 backdrop-blur-md border border-[#D8A2A2]/30 shadow-sm"
          }`}
        >
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.label;
              return (
                <li key={link.label}>
                  <button
                    onClick={() => handleClick(link.href, link.label)}
                    className={`relative px-4 py-1.5 text-xs uppercase tracking-wider font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "text-white bg-[#8EA66B] shadow-sm shadow-[#8EA66B]/30"
                        : "text-[#524C48] hover:text-[#242220] hover:bg-[#FFDCDC]/60"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Navbar (Fully Responsive Floating Pill) */}
        <div className="w-full md:hidden flex flex-col items-center">
          <div
            className={`w-full flex items-center justify-between px-4 py-2.5 rounded-full transition-all duration-300 ${
              scrolled || mobileOpen
                ? "glass-pill shadow-lg shadow-[#D8A2A2]/20 border border-[#D8A2A2]/40"
                : "bg-[#FFFDF8]/90 backdrop-blur-md border border-[#D8A2A2]/35 shadow-sm"
            }`}
          >
            {/* Logo / Monogram */}
            <button
              onClick={() => handleClick("#home", "Home")}
              className="text-xs font-bold tracking-widest text-[#242220] uppercase flex items-center gap-2 cursor-pointer"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#8EA66B]" />
              <span>Rangga Figo</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1.5 text-[#524C48] hover:text-[#242220] transition-colors cursor-pointer rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between items-center">
                <span
                  className={`w-5 h-0.5 bg-current transform transition-all duration-200 ${
                    mobileOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-current transition-all duration-200 ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-current transform transition-all duration-200 ${
                    mobileOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Dropdown Panel */}
          {mobileOpen && (
            <div className="w-full mt-2 p-2 rounded-2xl glass-pill shadow-xl shadow-[#D8A2A2]/20 border border-[#D8A2A2]/40 animate-in fade-in zoom-in-95 duration-200">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = active === link.label;
                  return (
                    <li key={link.label}>
                      <button
                        onClick={() => handleClick(link.href, link.label)}
                        className={`w-full text-left px-4 py-2.5 text-sm font-medium rounded-xl transition-colors cursor-pointer ${
                          isActive
                            ? "text-white bg-[#8EA66B] shadow-sm shadow-[#8EA66B]/30"
                            : "text-[#524C48] hover:text-[#242220] hover:bg-[#FFDCDC]/60"
                        }`}
                      >
                        {link.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
