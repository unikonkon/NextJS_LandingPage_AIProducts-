"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero content animation
      const tl = gsap.timeline({ delay: 0.5 });

      tl.fromTo(
        ".hero-badge",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
        .fromTo(
          ".hero-title-line",
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.1 },
          "-=0.3"
        )
        .fromTo(
          ".hero-subtitle",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ".hero-cta",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.15 },
          "-=0.3"
        )
        .fromTo(
          ".hero-visual",
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.5"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Particle animation
  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    const particles: HTMLDivElement[] = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute rounded-full pointer-events-none";

      const size = Math.random() * 4 + 2;
      const opacity = Math.random() * 0.5 + 0.1;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = `rgba(100, 255, 218, ${opacity})`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;

      container.appendChild(particle);
      particles.push(particle);

      gsap.to(particle, {
        y: "random(-100, 100)",
        x: "random(-50, 50)",
        duration: "random(10, 20)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(particle, {
        opacity: "random(0.1, 0.5)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    return () => {
      particles.forEach((p) => p.remove());
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div
        ref={particlesRef}
        className="absolute inset-0 overflow-hidden"
        aria-hidden="true"
      />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--accent-purple)]/20 rounded-full blur-[128px] animate-float" />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[var(--secondary)]/20 rounded-full blur-[128px] animate-float"
        style={{ animationDelay: "-3s" }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--secondary)]/10 border border-[var(--secondary)]/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-[var(--secondary)] animate-pulse" />
              <span className="text-sm text-[var(--secondary)]">
                AI Platform สำหรับธุรกิจยุคใหม่
              </span>
            </div>

            {/* Title */}
            <h1 className="font-heading text-[var(--text-5xl)] leading-[1.1] mb-6">
              <span className="hero-title-line block">ปลดปล่อยพลัง</span>
              <span className="hero-title-line block text-gradient">AI</span>
              <span className="hero-title-line block">สู่ธุรกิจของคุณ</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle text-[var(--text-lg)] text-[var(--text-secondary)] mb-10 max-w-lg">
              เปลี่ยนข้อความเป็นเสียง แปลงเสียงเป็นข้อความ
              และสร้าง AI ที่เข้าใจธุรกิจของคุณ ด้วยเทคโนโลยีล้ำสมัย
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href="#pricing" className="hero-cta btn-primary">
                <span>เริ่มใช้งานฟรี</span>
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <a href="#products" className="hero-cta btn-secondary">
                <span>ดูผลิตภัณฑ์</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="hero-cta mt-12 flex items-center gap-8 text-[var(--text-muted)]">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[var(--secondary)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">ไม่ต้องใช้บัตรเครดิต</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[var(--secondary)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">ทดลองใช้ฟรี 7 วัน</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="hero-visual relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Central Orb */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--secondary)]/30 to-[var(--accent-purple)]/30 animate-pulse-glow" />
                  <div className="absolute inset-4 rounded-full bg-[var(--background)] flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl md:text-6xl font-heading text-gradient font-bold">
                        AI
                      </div>
                      <div className="text-sm text-[var(--text-muted)] mt-1">
                        Powered
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Orbiting Elements */}
              <div
                className="absolute inset-0 animate-[spin_20s_linear_infinite]"
                style={{ animationDirection: "reverse" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 rounded-xl bg-[var(--background-card)] border border-[var(--secondary)]/30 flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-[var(--secondary)]"
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
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 animate-[spin_25s_linear_infinite]">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <div className="w-16 h-16 rounded-xl bg-[var(--background-card)] border border-[var(--accent-purple)]/30 flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-[var(--accent-purple)]"
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
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 animate-[spin_30s_linear_infinite]">
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 rounded-xl bg-[var(--background-card)] border border-[var(--accent-blue)]/30 flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-[var(--accent-blue)]"
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
                  </div>
                </div>
              </div>

              {/* Connection Lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 400 400"
              >
                <circle
                  cx="200"
                  cy="200"
                  r="150"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  opacity="0.3"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="120"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  opacity="0.2"
                />
                <defs>
                  <linearGradient
                    id="lineGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#64FFDA" />
                    <stop offset="50%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-xs text-[var(--text-muted)]">เลื่อนลง</span>
        <div className="w-6 h-10 rounded-full border-2 border-[var(--text-muted)] flex justify-center p-2">
          <div className="w-1 h-3 bg-[var(--secondary)] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
