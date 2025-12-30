"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: "tts",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
        />
      </svg>
    ),
    title: "Text-to-Speech",
    description:
      "แปลงข้อความเป็นเสียงพูดที่เป็นธรรมชาติ รองรับหลายภาษา รวมถึงภาษาไทย",
    color: "var(--secondary)",
    href: "#tts",
  },
  {
    id: "stt",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
        />
      </svg>
    ),
    title: "Speech-to-Text",
    description:
      "แปลงเสียงพูดเป็นข้อความอัตโนมัติ ความแม่นยำสูง รองรับ Real-time",
    color: "var(--accent-purple)",
    href: "#stt",
  },
  {
    id: "rag",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
    ),
    title: "AI Chat with RAG",
    description:
      "AI Chatbot ที่เข้าใจข้อมูลของคุณ อัพโหลดเอกสาร ถามตอบได้ทันที",
    color: "var(--accent-blue)",
    href: "#rag",
  },
];

export default function ProductsOverview() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        ".products-title",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Cards stagger animation
      gsap.fromTo(
        ".product-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="products"
      className="py-[var(--section-padding)] relative"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="products-title text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)] text-sm font-medium mb-4">
            ผลิตภัณฑ์ของเรา
          </span>
          <h2 className="font-heading text-[var(--text-4xl)] mb-4">
            เครื่องมือ <span className="text-gradient">AI</span> ครบวงจร
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            ทุกสิ่งที่คุณต้องการสำหรับการนำ AI มาใช้ในธุรกิจ
            ตั้งแต่การแปลงเสียงไปจนถึง AI Assistant ที่ชาญฉลาด
          </p>
        </div>

        {/* Product Cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {products.map((product, index) => (
            <a
              key={product.id}
              href={product.href}
              className="product-card group relative bg-[var(--background-card)] rounded-2xl p-8 border border-[rgba(100,255,218,0.1)] overflow-hidden transition-all duration-500 hover:border-opacity-30"
              style={
                {
                  "--card-color": product.color,
                } as React.CSSProperties
              }
            >
              {/* Glow Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${product.color}15 0%, transparent 60%)`,
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${product.color}15`,
                    color: product.color,
                  }}
                >
                  {product.icon}
                </div>

                {/* Number */}
                <div className="absolute top-0 right-0 text-6xl font-heading font-bold text-[var(--background-elevated)] group-hover:text-[var(--background-card)] transition-colors">
                  0{index + 1}
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl mb-3 text-[var(--text-primary)] group-hover:text-[var(--secondary)] transition-colors">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Link */}
                <div className="flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-3" style={{ color: product.color }}>
                  <span>เรียนรู้เพิ่มเติม</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
