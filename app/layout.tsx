import type { Metadata } from "next";
import { Prompt, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

// Prompt - Modern Thai display font for headings
const prompt = Prompt({
  variable: "--font-heading",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Noto Sans Thai - Clean Thai font for body text
const notoSansThai = Noto_Sans_Thai({
  variable: "--font-body",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Products | ปลดปล่อยพลัง AI สู่ธุรกิจของคุณ",
  description:
    "บริการ AI ครบวงจร - Text-to-Speech, Speech-to-Text, AI Chat with RAG สำหรับธุรกิจยุคใหม่",
  keywords: [
    "AI",
    "Text-to-Speech",
    "Speech-to-Text",
    "RAG",
    "Chatbot",
    "Thai AI",
    "AI SaaS",
  ],
  openGraph: {
    title: "AI Products | ปลดปล่อยพลัง AI สู่ธุรกิจของคุณ",
    description:
      "บริการ AI ครบวงจร - Text-to-Speech, Speech-to-Text, AI Chat with RAG",
    type: "website",
    locale: "th_TH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="scroll-smooth">
      <body
        className={`${prompt.variable} ${notoSansThai.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
