"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-content",
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

      // Floating shapes animation
      gsap.to(".cta-shape", {
        y: "random(-20, 20)",
        x: "random(-10, 10)",
        rotation: "random(-15, 15)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.5,
          from: "random",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-[var(--section-padding)] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] via-[var(--primary-deep)] to-[var(--background)]" />

      {/* Decorative Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="cta-shape absolute top-10 left-10 w-32 h-32 rounded-full bg-[var(--secondary)]/10 blur-2xl" />
        <div className="cta-shape absolute top-1/4 right-20 w-48 h-48 rounded-full bg-[var(--accent-purple)]/10 blur-3xl" />
        <div className="cta-shape absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-[var(--accent-blue)]/10 blur-2xl" />
        <div className="cta-shape absolute -bottom-10 right-1/3 w-56 h-56 rounded-full bg-[var(--secondary)]/5 blur-3xl" />

        {/* Grid Lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {[...Array(10)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={i * 10}
              x2="100"
              y2={i * 10}
              stroke="var(--secondary)"
              strokeWidth="0.1"
            />
          ))}
          {[...Array(10)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1={i * 10}
              y1="0"
              x2={i * 10}
              y2="100"
              stroke="var(--secondary)"
              strokeWidth="0.1"
            />
          ))}
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="cta-content max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--secondary)]/10 border border-[var(--secondary)]/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--secondary)] animate-pulse" />
            <span className="text-sm text-[var(--secondary)]">
              พร้อมเริ่มต้นแล้วหรือยัง?
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-heading text-[var(--text-4xl)] md:text-[var(--text-5xl)] mb-6">
            เริ่มต้นใช้งาน
            <span className="text-gradient"> AI </span>
            <br />
            วันนี้
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-[var(--text-secondary)] mb-10 max-w-xl mx-auto">
            ทดลองใช้ฟรี 7 วัน ไม่ต้องใช้บัตรเครดิต
            เริ่มต้นสร้างโซลูชัน AI สำหรับธุรกิจของคุณได้ทันที
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="btn-primary text-base px-8 py-4 group"
            >
              <span>สมัครใช้งานฟรี</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="btn-secondary text-base px-8 py-4"
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span>พูดคุยกับทีมงาน</span>
            </a>
          </div>

          {/* Quick Start Steps */}
          <div className="mt-16 grid sm:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "สมัครสมาชิก",
                desc: "สร้างบัญชีฟรีภายใน 30 วินาที",
              },
              {
                step: "2",
                title: "เลือกผลิตภัณฑ์",
                desc: "เลือก API ที่ต้องการใช้งาน",
              },
              {
                step: "3",
                title: "เริ่มต้นใช้งาน",
                desc: "Integrate และเริ่มใช้ได้ทันที",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < 2 && (
                  <div className="hidden sm:block absolute top-6 left-1/2 w-full h-px bg-gradient-to-r from-[var(--secondary)]/50 to-transparent" />
                )}

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--secondary)]/10 border border-[var(--secondary)]/30 flex items-center justify-center mb-4">
                    <span className="font-heading font-bold text-[var(--secondary)]">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--text-muted)]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
