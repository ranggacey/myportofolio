"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Message {
  role: "user" | "model";
  text: string;
}

const SUGGESTIONS = [
  "Keahlian Rangga apa aja?",
  "Pengalaman kerjanya gimana?",
  "Cara menghubunginya?",
];

const GREETING: Message = {
  role: "model",
  text: "Halo! Aku asisten AI-nya Rangga. Tanya apa aja soal keahlian, pengalaman, atau project-nya — nanti aku jawab sebisaku.",
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [unread, setUnread] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef<Message[]>([]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, loading]);

  async function send(text: string) {
    const clean = text.trim();
    if (!clean || loading) return;

    const userMsg: Message = { role: "user", text: clean };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: clean,
          history: historyRef.current.slice(-8),
        }),
      });
      const data = await res.json();
      const reply: Message = {
        role: "model",
        text: data.reply || data.error || "Hmm, coba tanya lagi ya.",
      };
      setMessages((prev) => [...prev, reply]);
      historyRef.current = [...historyRef.current, userMsg, reply].slice(-8);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "model", text: "Koneksiku lagi bermasalah nih. Hubungi Rangga langsung via WhatsApp 087821589222 ya!" },
      ]);
    } finally {
      setLoading(false);
      if (!open) setUnread(true);
    }
  }

  function toggle() {
    setOpen((v) => !v);
    setUnread(false);
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={toggle}
        aria-label={open ? "Tutup chat" : "Tanya tentang Rangga"}
        className="fixed bottom-5 right-5 z-[60] w-14 h-14 rounded-full shadow-xl shadow-[#8EA66B]/30 hover:scale-105 active:scale-95 transition-transform cursor-pointer overflow-hidden border-2 border-white/70"
      >
        {open ? (
          <span className="w-full h-full grid place-items-center bg-[#8EA66B] text-white text-2xl font-light">×</span>
        ) : (
          <Image src="/chatbot-logo.svg" alt="Chatbot Rangga" width={56} height={56} className="w-full h-full" />
        )}
        {!open && unread && (
          <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-[#D8A2A2] border-2 border-white" />
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-[88px] right-5 z-[60] w-[calc(100vw-40px)] max-w-[380px] h-[520px] max-h-[70vh] flex flex-col rounded-3xl overflow-hidden bg-[#FFFDF8] border border-[#D8A2A2]/50 shadow-2xl shadow-[#D8A2A2]/30 animate-chat-in">
          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-[#8EA66B] to-[#7B945A] text-white shrink-0">
            <Image src="/chatbot-logo.svg" alt="" width={36} height={36} className="rounded-full border border-white/40" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold leading-tight">Tanya tentang Rangga</p>
              <p className="text-[11px] text-white/85 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                AI siap menjawab
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#FFF9D6]/40">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed ${
                    m.role === "user"
                      ? "bg-[#8EA66B] text-white rounded-br-md"
                      : "bg-white border border-[#D8A2A2]/50 text-[#35302E] rounded-bl-md shadow-xs"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="px-4 py-3 rounded-2xl rounded-bl-md bg-white border border-[#D8A2A2]/50 flex gap-1.5">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="w-1.5 h-1.5 rounded-full bg-[#8EA66B] animate-bounce"
                      style={{ animationDelay: `${d * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggestions */}
          {messages.length <= 2 && !loading && (
            <div className="px-4 pb-2 pt-1 flex flex-wrap gap-2 bg-[#FFF9D6]/40 shrink-0">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="px-3 py-1.5 text-[11px] font-mono text-[#524C48] bg-white border border-[#D8A2A2]/60 rounded-full hover:border-[#8EA66B] hover:text-[#242220] transition-colors cursor-pointer"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 p-3 border-t border-[#D8A2A2]/40 bg-[#FFFDF8] shrink-0"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tulis pertanyaanmu…"
              maxLength={500}
              className="flex-1 h-10 px-4 rounded-full text-[13px] bg-white border border-[#D8A2A2]/60 text-[#242220] placeholder:text-[#7C756F] outline-none focus:border-[#8EA66B] focus:ring-2 focus:ring-[#8EA66B]/20 transition-all"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Kirim"
              className="w-10 h-10 shrink-0 grid place-items-center rounded-full bg-[#8EA66B] text-white hover:bg-[#7B945A] disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
