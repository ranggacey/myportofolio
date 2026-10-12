import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `Kamu adalah asisten AI di website portofolio Rangga Figo Hidayat. Tugasmu menjawab pertanyaan pengunjung TENTANG Rangga dalam Bahasa Indonesia yang santai dan ramah. Jawaban maksimal 3 kalimat, to the point.

Fakta tentang Rangga:
- Nama: Rangga Figo Hidayat, fresh graduate S1 Teknik Informatika Universitas Semarang (USM), domisili Semarang.
- Web Developer: PHP, JavaScript/TypeScript, React, Next.js, Laravel, Node.js, Tailwind CSS, PostgreSQL, MySQL.
- Freelance Web Developer sejak 2024 (company profile, landing page, aplikasi web custom).
- Magang 2025 di BRIDA Kota Semarang: membangun Sistem Presensi berbasis Face Recognition.
- Project unggulan: Webboost/Cikweb (audit performa web), Sistem Presensi BRIDA Face Recognition, Kopi Senja (landing page), Jepret Studio (landing page), Geser (kanban realtime), Utara (dashboard workspace).
- Terbuka untuk full-time maupun freelance, bersedia ditempatkan di luar kota.
- Kontak: email ranggafigohidayat@gmail.com, WhatsApp 087821589222, GitHub github.com/ranggacey.

Aturan:
- Hanya jawab seputar Rangga, keahlian, pengalaman, project, dan cara menghubunginya.
- Jika ditanya hal di luar itu, tolak dengan sopan dan arahkan kembali ke topik portofolio.
- Jangan mengarang fakta yang tidak ada di atas. Jika tidak tahu, katakan tidak tahu dan sarankan hubungi langsung via WhatsApp/email.`;

interface ChatMessage {
  role: "user" | "model";
  text: string;
}

// Simple in-memory rate limit: 12 requests per IP per minute
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  entry.count += 1;
  return entry.count > 12;
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Chatbot belum dikonfigurasi. Hubungi Rangga langsung via WhatsApp 087821589222 ya!" },
      { status: 503 }
    );
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Santai dulu ya, kebanyakan nanya nih. Coba lagi sebentar lagi." },
      { status: 429 }
    );
  }

  let body: { message?: string; history?: ChatMessage[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Pesan tidak valid." }, { status: 400 });
  }

  const message = (body.message || "").trim().slice(0, 500);
  if (!message) {
    return NextResponse.json({ error: "Tulis dulu pertanyaannya ya." }, { status: 400 });
  }

  const history: ChatMessage[] = Array.isArray(body.history)
    ? body.history.slice(-8).filter((m) => m && typeof m.text === "string")
    : [];

  const contents = [
    ...history.map((m) => ({
      role: m.role === "model" ? "model" : "user",
      parts: [{ text: m.text.slice(0, 500) }],
    })),
    { role: "user", parts: [{ text: message }] },
  ];

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
          generationConfig: { maxOutputTokens: 220, temperature: 0.7 },
        }),
      }
    );

    if (!res.ok) {
      throw new Error(`Gemini API ${res.status}`);
    }

    const data = await res.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.map((p: { text?: string }) => p.text || "").join("").trim() ||
      "Hmm, aku lagi bengong nih. Coba tanya lagi ya.";

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json(
      { error: "Aduh, koneksiku lagi bermasalah. Coba lagi nanti, atau hubungi Rangga langsung via WhatsApp 087821589222." },
      { status: 502 }
    );
  }
}
