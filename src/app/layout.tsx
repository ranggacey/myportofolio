import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rangga Figo Hidayat — Web Developer & Fresh Graduate USM",
  description:
    "Portofolio web Rangga Figo Hidayat, Fresh Graduate S1 Teknik Informatika Universitas Semarang (USM). Menampilkan proyek aplikasi web, sistem informasi, dan performa web modern.",
  keywords: [
    "Rangga Figo Hidayat",
    "Rangga Figo",
    "ranggacey",
    "Teknik Informatika USM",
    "Universitas Semarang",
    "Web Developer Semarang",
    "Next.js Portfolio",
    "Frontend Developer",
  ],
  openGraph: {
    title: "Rangga Figo Hidayat — Web Developer Portofolio",
    description:
      "Fresh Graduate S1 Teknik Informatika Universitas Semarang (USM) dengan fokus pada web development, responsive design, dan performa aplikasi.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#09090b] text-zinc-100 selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
