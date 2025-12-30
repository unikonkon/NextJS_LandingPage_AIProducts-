"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  "รองรับหลายภาษา รวมถึงภาษาไทย",
  "เสียงธรรมชาติ ไม่เหมือนหุ่นยนต์",
  "ปรับแต่งโทนเสียง ความเร็ว อารมณ์ได้",
  "รองรับ SSML",
  "API ใช้งานง่าย",
];

const useCases = [
  { icon: "🎬", text: "สร้างเสียงบรรยายวิดีโอ" },
  { icon: "📚", text: "E-learning & Audiobook" },
  { icon: "🤖", text: "Voice Assistant" },
  { icon: "📞", text: "ระบบ IVR" },
];

export default function TextToSpeech() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inputText, setInputText] = useState("สวัสดีครับ ยินดีต้อนรับสู่ระบบ AI");
  const [isPlaying, setIsPlaying] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content reveal animation
      gsap.fromTo(
        ".tts-content",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      // Demo reveal animation
      gsap.fromTo(
        ".tts-demo",
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      // Feature items stagger
      gsap.fromTo(
        ".tts-feature",
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".tts-features",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Simulate text highlight animation
  const simulatePlay = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    const words = inputText.split(" ");

    words.forEach((_, index) => {
      setTimeout(() => {
        setHighlightIndex(index);
        if (index === words.length - 1) {
          setTimeout(() => {
            setIsPlaying(false);
            setHighlightIndex(-1);
          }, 500);
        }
      }, index * 400);
    });
  };

  return (
    <section
      ref={sectionRef}
      id="tts"
      className="py-[var(--section-padding)] relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--secondary)]/5 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="tts-content">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)] text-sm font-medium mb-6">
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
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              </svg>
              Text-to-Speech
            </span>

            <h2 className="font-heading text-[var(--text-4xl)] mb-6">
              แปลงข้อความเป็น
              <span className="text-[var(--secondary)]"> เสียงพูด</span>
              <br />
              ที่เป็นธรรมชาติ
            </h2>

            <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-lg">
              เทคโนโลยี Neural TTS ที่ให้เสียงเหมือนคนจริง
              รองรับหลากหลายภาษาและสำเนียง ปรับแต่งได้ตามต้องการ
            </p>

            {/* Features */}
            <div className="tts-features space-y-3 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="tts-feature flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[var(--secondary)]/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-[var(--secondary)]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-[var(--text-primary)]">{feature}</span>
                </div>
              ))}
            </div>

            {/* Use Cases */}
            <div className="flex flex-wrap gap-3">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background-card)] border border-[var(--secondary)]/10"
                >
                  <span>{useCase.icon}</span>
                  <span className="text-sm text-[var(--text-secondary)]">
                    {useCase.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Demo */}
          <div className="tts-demo">
            <div className="bg-[var(--background-card)] rounded-2xl border border-[var(--secondary)]/20 overflow-hidden">
              {/* Demo Header */}
              <div className="px-6 py-4 border-b border-[var(--secondary)]/10 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-sm text-[var(--text-muted)]">
                  TTS Demo
                </span>
              </div>

              {/* Demo Content */}
              <div className="p-6 space-y-6">
                {/* Text Input */}
                <div>
                  <label className="block text-sm text-[var(--text-secondary)] mb-2">
                    ข้อความที่ต้องการแปลง
                  </label>
                  <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="w-full h-24 bg-[var(--background)] border border-[var(--secondary)]/20 rounded-lg px-4 py-3 text-[var(--text-primary)] resize-none focus:outline-none focus:border-[var(--secondary)]/50 transition-colors"
                    placeholder="พิมพ์ข้อความที่นี่..."
                  />
                </div>

                {/* Highlighted Text Preview */}
                <div className="p-4 bg-[var(--background)]/50 rounded-lg min-h-[60px]">
                  <p className="leading-relaxed">
                    {inputText.split(" ").map((word, index) => (
                      <span
                        key={index}
                        className={`transition-colors duration-200 ${
                          index === highlightIndex
                            ? "text-[var(--secondary)] bg-[var(--secondary)]/20 px-1 rounded"
                            : "text-[var(--text-primary)]"
                        }`}
                      >
                        {word}{" "}
                      </span>
                    ))}
                  </p>
                </div>

                {/* Sound Wave Visualization */}
                <div className="flex items-center justify-center gap-1 h-16">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-[var(--secondary)] rounded-full transition-all duration-150"
                      style={{
                        height: isPlaying
                          ? `${Math.random() * 100}%`
                          : "20%",
                        opacity: isPlaying ? 1 : 0.3,
                        animationDelay: `${i * 50}ms`,
                      }}
                    />
                  ))}
                </div>

                {/* Controls */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={simulatePlay}
                    disabled={isPlaying}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition-all ${
                      isPlaying
                        ? "bg-[var(--secondary)]/20 text-[var(--secondary)]"
                        : "bg-[var(--secondary)] text-[var(--primary)] hover:opacity-90"
                    }`}
                  >
                    {isPlaying ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        <span>กำลังเล่น...</span>
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>ฟังตัวอย่าง</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
