"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const logos = [
  { name: "Company A", width: 120 },
  { name: "Company B", width: 100 },
  { name: "Company C", width: 110 },
  { name: "Company D", width: 90 },
  { name: "Company E", width: 130 },
  { name: "Company F", width: 95 },
];

const testimonials = [
  {
    quote:
      "ระบบ TTS ของ AI Products ช่วยให้เราสร้างเสียงบรรยายสำหรับ E-learning ได้อย่างรวดเร็ว ประหยัดเวลาและค่าใช้จ่ายได้มาก",
    author: "คุณสมชาย",
    role: "CEO, EdTech Startup",
    avatar: "S",
  },
  {
    quote:
      "AI Chat ทำให้ทีม Customer Support ของเราตอบคำถามลูกค้าได้เร็วขึ้น 5 เท่า และความพึงพอใจของลูกค้าเพิ่มขึ้นอย่างเห็นได้ชัด",
    author: "คุณสมหญิง",
    role: "Head of Support, E-commerce",
    avatar: "H",
  },
  {
    quote:
      "เราใช้ STT ถอดความการประชุมทุกวัน ความแม่นยำภาษาไทยดีมาก ไม่ต้องแก้ไขเยอะเหมือน tools อื่น",
    author: "คุณวิชัย",
    role: "Project Manager, Agency",
    avatar: "W",
  },
];

const stats = [
  { value: 10000, suffix: "+", label: "ผู้ใช้งาน" },
  { value: 50, suffix: "M+", label: "ข้อความประมวลผล" },
  { value: 99.9, suffix: "%", label: "Uptime" },
  { value: 24, suffix: "/7", label: "Support" },
];

export default function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const statValuesRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logos animation
      gsap.fromTo(
        ".logo-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".logos-container",
            start: "top 85%",
          },
        }
      );

      // Testimonial animation
      gsap.fromTo(
        ".testimonial-container",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonial-container",
            start: "top 80%",
          },
        }
      );

      // Stats counter animation
      stats.forEach((stat, index) => {
        const ref = statValuesRef.current[index];
        if (!ref) return;

        gsap.fromTo(
          ref,
          { innerText: 0 },
          {
            innerText: stat.value,
            duration: 2,
            ease: "power2.out",
            snap: { innerText: stat.value % 1 === 0 ? 1 : 0.1 },
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
            },
            onUpdate: function () {
              if (ref) {
                const val = parseFloat(ref.innerText);
                ref.innerText =
                  stat.value % 1 === 0
                    ? Math.round(val).toLocaleString()
                    : val.toFixed(1);
              }
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-[var(--section-padding)] relative"
    >
      <div className="container-custom">
        {/* Logos Section */}
        <div className="logos-container mb-20">
          <p className="text-center text-[var(--text-muted)] text-sm mb-8">
            ได้รับความไว้วางใจจากบริษัทชั้นนำ
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="logo-item h-8 px-4 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity"
              >
                <div
                  className="bg-gradient-to-r from-[var(--text-muted)] to-[var(--text-secondary)] bg-clip-text text-transparent font-heading font-bold text-lg"
                  style={{ width: logo.width }}
                >
                  {logo.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="testimonial-container max-w-4xl mx-auto mb-20">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)] text-sm font-medium mb-4">
              รีวิวจากลูกค้า
            </span>
            <h2 className="font-heading text-[var(--text-3xl)]">
              ลูกค้าพูดถึงเราอย่างไร
            </h2>
          </div>

          <div className="relative">
            {/* Testimonial Cards */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${activeTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-[var(--background-card)] rounded-2xl p-8 md:p-10 border border-[var(--secondary)]/10">
                      {/* Quote Icon */}
                      <svg
                        className="w-10 h-10 text-[var(--secondary)]/30 mb-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>

                      {/* Quote */}
                      <blockquote className="text-lg md:text-xl text-[var(--text-primary)] leading-relaxed mb-8">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--secondary)] to-[var(--accent-purple)] flex items-center justify-center text-white font-bold">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <div className="font-medium text-[var(--text-primary)]">
                            {testimonial.author}
                          </div>
                          <div className="text-sm text-[var(--text-muted)]">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeTestimonial
                      ? "w-8 bg-[var(--secondary)]"
                      : "bg-[var(--text-muted)]/30 hover:bg-[var(--text-muted)]/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-2">
                <span ref={(el) => {statValuesRef.current[index] = el}}>0</span>
                <span>{stat.suffix}</span>
              </div>
              <div className="text-sm text-[var(--text-muted)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
