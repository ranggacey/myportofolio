# Rencana Redesign ranggafigo.blog

Disusun 2026-10-12. Estimasi pengerjaan 2-3 jam sesuai preferensi Rangga (kualitas > kecepatan).
Status 2026-10-12: user menyetujui SEBAGIAN — yang dikerjakan: marquee tech stack (#2),
timeline pengalaman (#3), widget Tanya AI versi Gemini API (#6, bukan rule-based — user
memberi API key sendiri, key diisi manual via Vercel env `GEMINI_API_KEY`), kontak proper
(#7). Hero (#1), case study + koleksi landing page (#4), dark mode (#5) BELUM dikerjakan
(menunggu persetujuan user).

## Prinsip
- Pertahankan identitas visual yang sudah ada (cream hangat + sage + rose) — sudah khas, tinggal dielevasi.
- Tanpa library animasi baru, tanpa 3D, tanpa custom cursor. CSS + Tailwind v4 saja.
- Bahasa Indonesia, tanpa em-dash di copy (preferensi user).

## Aturan repo (WAJIB dibaca sebelum coding)
- `AGENTS.md` di repo ini: Next.js 16.3.5 punya breaking changes. Baca panduan di
  `node_modules/next/dist/docs/` (resolve dari direktori repo) sebelum menulis kode.
- Deploy: push ke `github.com/ranggacey/myportofolio` → Vercel auto-deploy (sudah git-linked).
  Token GitHub sudah di Secure Vault, tidak perlu minta token lagi.

## Struktur baru

### 1. Hero yang berkesan (upgrade, bukan rombak)
- Headline dengan efek reveal per baris + typing effect kecil untuk role
  ("Web Developer", "UI/UX Builder", "Freelancer").
- Background aurora gradient halus (CSS keyframes, animasi 12s, low opacity).
- Pertahankan foto profil + badge availability.

### 2. Tech stack marquee
- Barisan logo/teks tech stack berjalan (CSS marquee, pause on hover).
- Data: Next.js, TypeScript, React, Tailwind, Supabase, Laravel, PHP, Node.js, PostgreSQL.

### 3. Timeline pengalaman
- 2024 — Freelance Web Developer (mulai)
- 2025 — Magang BRIDA Kota Semarang (Sistem Presensi Face Recognition)
- 2026 — S1 Teknik Informatika USM + 10 landing page + 3 web app
- Komponen statis, garis vertikal + dot.

### 4. Proyek: dua kategori
**A. Web Apps (dengan halaman case study)** — route dinamis `src/app/projects/[slug]/page.tsx`.
Data diperluas di `src/data/projects.json`: `slug, problem, solusi, fitur[], hasil, screenshot[]`.
- Webboost (Cikweb) — uji performa/SEO otomatis via Lighthouse + Puppeteer, skor Core Web Vitals.
- Sistem Presensi BRIDA — face recognition untuk check-in/out karyawan (magang 2025).
- Geser — kanban realtime drag-and-drop (dnd-kit) + Supabase Realtime, estetika Frieren.
- Utara — dashboard workspace 14 route, peran user (Rangga Figo) & admin (Bagas Pratama).
- Kopi Senja — landing page + logo custom transparan (cangkir + uap bulan sabit).
- Jepret Studio — landing page studio foto + alur booking.
- RE:STAGE — (BARU, belum ada di listing) landing page tiket festival musik tema isekai,
  checkout 3 langkah ala Tiket.com (QRIS, VA bank, e-wallet, retail).

**B. Koleksi Landing Page** — grid 10 kartu, murni data + komponen kecil, link ke subdomain:
kopisenja, jelajah, fitpulse, dapurnusantara, cukurrapi, rotipagi, sisirbulu, kembang,
jepretstudio, restage → `https://<nama>.ranggafigo.blog`.
Screenshot: pakai yang ada di `~/workspace/websites/shots/`; yang belum ada pakai placeholder
sampai screenshot dibuat.

### 5. Dark mode toggle
- Toggle di navbar, hand-rolled (class `dark` di `<html>`, simpan di localStorage).
- Tailwind v4: pakai `@custom-variant dark (&:where(.dark, .dark *));` di `globals.css`.

### 6. Widget "Tanya AI tentang Rangga" (MVP rule-based)
- Chat bubble pojok kanan bawah. Tanpa backend/LLM: keyword matching di atas FAQ JSON
  (skill, pengalaman, kontak, gaji ekspektasi → "dibahas saat interview").
- Jujur di placeholder: "jawab otomatis dari profil".

### 7. Kontak yang proper
- Tombol Download CV (`/CV_RANGGA_FIGO_HIDAYAT.pdf` — pastikan ada di `public/`),
  tombol WhatsApp (link wa.me), email, GitHub.
- Form kontak sederhana → `mailto:` (tanpa backend).

## Yang TIDAK dikerjakan
Animasi berlebihan, custom cursor, efek 3D, integrasi CMS, blog.

## Urutan kerja
1. Data: perluas `projects.json` + tulis copy case study (ID).
2. Route `projects/[slug]` + kartu koleksi landing page.
3. Hero animation + marquee + timeline (CSS).
4. Dark mode toggle.
5. Widget Tanya AI (rule-based).
6. Kontak (CV/WA).
7. `npm run build` → perbaiki sampai lolos → commit → push → verifikasi deploy Vercel READY
   + cek `https://ranggafigo.blog`.

## Definisi selesai
Build lolos, semua route ke-render, dark mode berfungsi, widget menjawab 8+ pertanyaan umum,
semua link live valid, deploy Vercel READY, user dikabari via chat dengan ringkasan perubahan.

## Catatan deploy 2026-10-12
- GEMINI_API_KEY dipasang via Vercel env (sensitive, production). Redeploy diperlukan
  agar env var terbaca serverless function /api/chat.
