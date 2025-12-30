"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  "อัพโหลดเอกสารหลายรูปแบบ (PDF, Word, Excel)",
  "Semantic Search ค้นหาข้อมูลอัจฉริยะ",
  "ตอบคำถามตามบริบทของเอกสาร",
  "รักษาความเป็นส่วนตัวของข้อมูล",
  "ปรับแต่ง Persona ของ Bot ได้",
];

const useCases = [
  { icon: "🏢", text: "Knowledge Base องค์กร" },
  { icon: "💬", text: "Customer Support" },
  { icon: "⚖️", text: "Legal Assistant" },
  { icon: "🔬", text: "Research Assistant" },
];

interface Message {
  type: "user" | "ai";
  text: string;
}

export default function AIChat() {
  const sectionRef = useRef<HTMLElement>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "ai",
      text: "สวัสดีครับ! ผมคือ AI Assistant ที่ได้เรียนรู้จากเอกสารของคุณแล้ว ถามอะไรได้เลยครับ",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".rag-content",
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

      gsap.fromTo(
        ".rag-demo",
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

      gsap.fromTo(
        ".rag-feature",
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".rag-features",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSend = () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage = inputValue;
    setMessages((prev) => [...prev, { type: "user", text: userMessage }]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "จากเอกสารที่อัพโหลด พบว่ามีข้อมูลที่เกี่ยวข้องกับคำถามของคุณ โดยระบุว่า...",
        "ผมค้นหาในเอกสารแล้วพบว่า มีการกล่าวถึงเรื่องนี้ในหน้า 23 โดยมีรายละเอียดดังนี้...",
        "ตามเอกสารที่คุณให้มา สรุปได้ว่าประเด็นนี้มีความสำคัญเพราะ...",
      ];
      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];
      setMessages((prev) => [...prev, { type: "ai", text: randomResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section
      ref={sectionRef}
      id="rag"
      className="py-[var(--section-padding)] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent-blue)]/5 to-transparent" />

      {/* Neural Network Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 600">
          <defs>
            <pattern
              id="neural"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="2" fill="#3B82F6" />
              <line
                x1="50"
                y1="50"
                x2="100"
                y2="0"
                stroke="#3B82F6"
                strokeWidth="0.5"
              />
              <line
                x1="50"
                y1="50"
                x2="100"
                y2="100"
                stroke="#3B82F6"
                strokeWidth="0.5"
              />
              <line
                x1="50"
                y1="50"
                x2="0"
                y2="0"
                stroke="#3B82F6"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="rag-content">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] text-sm font-medium mb-6">
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
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              AI Chat with RAG
            </span>

            <h2 className="font-heading text-[var(--text-4xl)] mb-6">
              AI ที่
              <span className="text-[var(--accent-blue)]"> เข้าใจ</span>
              <br />
              ข้อมูลของคุณ
            </h2>

            <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-lg">
              อัพโหลดเอกสารของคุณ และสร้าง AI Assistant
              ที่สามารถตอบคำถามจากข้อมูลเหล่านั้นได้อย่างแม่นยำ
              ด้วยเทคโนโลยี RAG (Retrieval-Augmented Generation)
            </p>

            {/* Features */}
            <div className="rag-features space-y-3 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="rag-feature flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[var(--accent-blue)]/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-[var(--accent-blue)]"
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
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background-card)] border border-[var(--accent-blue)]/10"
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
          <div className="rag-demo">
            <div className="bg-[var(--background-card)] rounded-2xl border border-[var(--accent-blue)]/20 overflow-hidden">
              {/* Demo Header */}
              <div className="px-6 py-4 border-b border-[var(--accent-blue)]/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <span className="text-sm text-[var(--text-muted)]">
                    AI Chat Demo
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[var(--accent-blue)]">
                  <div className="w-2 h-2 rounded-full bg-[var(--accent-blue)] animate-pulse" />
                  <span>3 เอกสารเชื่อมต่อ</span>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="h-80 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        message.type === "user"
                          ? "bg-[var(--accent-blue)] text-white rounded-br-md"
                          : "bg-[var(--background)] border border-[var(--accent-blue)]/20 rounded-bl-md"
                      }`}
                    >
                      {message.type === "ai" && (
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] flex items-center justify-center">
                            <svg
                              className="w-3 h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 7.5A1.5 1.5 0 119.5 9 1.5 1.5 0 018 7.5zm5 0A1.5 1.5 0 1114.5 9 1.5 1.5 0 0113 7.5zM10 15c-1.657 0-3-1.343-3-3h6c0 1.657-1.343 3-3 3z" />
                            </svg>
                          </div>
                          <span className="text-xs text-[var(--accent-blue)]">
                            AI Assistant
                          </span>
                        </div>
                      )}
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-[var(--background)] border border-[var(--accent-blue)]/20 rounded-2xl rounded-bl-md px-4 py-3">
                      <div className="flex gap-1">
                        <div
                          className="w-2 h-2 rounded-full bg-[var(--accent-blue)] animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        />
                        <div
                          className="w-2 h-2 rounded-full bg-[var(--accent-blue)] animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        />
                        <div
                          className="w-2 h-2 rounded-full bg-[var(--accent-blue)] animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-[var(--accent-blue)]/10">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    placeholder="ถามคำถามเกี่ยวกับเอกสารของคุณ..."
                    className="flex-1 bg-[var(--background)] border border-[var(--accent-blue)]/20 rounded-lg px-4 py-2 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/50 transition-colors"
                  />
                  <button
                    onClick={handleSend}
                    disabled={isTyping || !inputValue.trim()}
                    className="w-10 h-10 rounded-lg bg-[var(--accent-blue)] text-white flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Document Cards */}
            <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
              {["company-policy.pdf", "product-manual.docx", "FAQ.xlsx"].map(
                (doc, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--background-card)] border border-[var(--accent-blue)]/10 text-xs"
                  >
                    <svg
                      className="w-4 h-4 text-[var(--accent-blue)]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-[var(--text-secondary)]">{doc}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
