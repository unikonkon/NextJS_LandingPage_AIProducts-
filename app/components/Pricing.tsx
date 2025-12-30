"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PricingPlan {
  name: string;
  monthlyPrice: number;
  dailyPrice: number;
  description: string;
  features: string[];
  popular?: boolean;
  color: string;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    monthlyPrice: 299,
    dailyPrice: 29,
    description: "สำหรับผู้เริ่มต้นและทดลองใช้",
    features: [
      "TTS: 100,000 characters",
      "STT: 60 นาที",
      "RAG: 10 เอกสาร, 100 queries",
      "Email Support",
      "API Access",
    ],
    color: "var(--secondary)",
  },
  {
    name: "Professional",
    monthlyPrice: 999,
    dailyPrice: 59,
    description: "สำหรับธุรกิจขนาดกลาง",
    features: [
      "TTS: 500,000 characters",
      "STT: 300 นาที",
      "RAG: 50 เอกสาร, 500 queries",
      "Priority Support",
      "Advanced Analytics",
      "Custom Voice",
    ],
    popular: true,
    color: "var(--accent-purple)",
  },
  {
    name: "Enterprise",
    monthlyPrice: 2999,
    dailyPrice: 149,
    description: "สำหรับองค์กรขนาดใหญ่",
    features: [
      "TTS: Unlimited",
      "STT: Unlimited",
      "RAG: Unlimited",
      "Dedicated Support + SLA",
      "Custom Integration",
      "On-premise Option",
      "White Label",
    ],
    color: "var(--accent-blue)",
  },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMonthly, setIsMonthly] = useState(true);
  const priceRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pricing-header",
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

      gsap.fromTo(
        ".pricing-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".pricing-cards",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Price counter animation on toggle
  useEffect(() => {
    priceRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const plan = pricingPlans[index];
      const targetPrice = isMonthly ? plan.monthlyPrice : plan.dailyPrice;

      gsap.fromTo(
        ref,
        { innerText: 0 },
        {
          innerText: targetPrice,
          duration: 0.8,
          ease: "power2.out",
          snap: { innerText: 1 },
          onUpdate: function () {
            if (ref) {
              ref.innerText = Math.round(
                parseFloat(ref.innerText)
              ).toLocaleString();
            }
          },
        }
      );
    });
  }, [isMonthly]);

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="py-[var(--section-padding)] relative"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="pricing-header text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)] text-sm font-medium mb-4">
            ราคา
          </span>
          <h2 className="font-heading text-[var(--text-4xl)] mb-4">
            เลือกแพ็คเกจที่
            <span className="text-gradient"> เหมาะกับคุณ</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            เริ่มต้นใช้งานได้ทันที ไม่ต้องใช้บัตรเครดิต
            พร้อมทดลองใช้ฟรี 7 วันสำหรับทุกแพ็คเกจ
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 p-1.5 bg-[var(--background-card)] rounded-full border border-[var(--secondary)]/10">
            <button
              onClick={() => setIsMonthly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isMonthly
                  ? "bg-[var(--secondary)] text-[var(--primary)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              รายวัน
            </button>
            <button
              onClick={() => setIsMonthly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                isMonthly
                  ? "bg-[var(--secondary)] text-[var(--primary)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              รายเดือน
              <span className="ml-2 text-xs opacity-70">ประหยัด 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-cards grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`pricing-card relative bg-[var(--background-card)] rounded-2xl border overflow-hidden transition-all duration-300 hover:scale-[1.02] ${
                plan.popular
                  ? "border-[var(--accent-purple)]/50"
                  : "border-[rgba(100,255,218,0.1)]"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-[var(--accent-purple)] to-[var(--secondary)] text-white text-xs font-medium px-4 py-1.5 rounded-bl-xl">
                    แนะนำ
                  </div>
                </div>
              )}

              {/* Glow Effect */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent-purple)]/10 to-transparent pointer-events-none" />
              )}

              <div className="p-8 relative z-10">
                {/* Plan Name */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: `${plan.color}15`,
                    color: plan.color,
                  }}
                >
                  {index === 0 && (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  )}
                </div>

                <h3 className="font-heading text-xl mb-2">{plan.name}</h3>
                <p className="text-sm text-[var(--text-muted)] mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-heading font-bold" style={{ color: plan.color }}>
                      <span
                        ref={(el) => {priceRefs.current[index] = el}}
                      >
                        {isMonthly
                          ? plan.monthlyPrice.toLocaleString()
                          : plan.dailyPrice.toLocaleString()}
                      </span>
                    </span>
                    <span className="text-[var(--text-muted)]">฿</span>
                    <span className="text-[var(--text-muted)] text-sm">
                      /{isMonthly ? "เดือน" : "วัน"}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                        style={{ color: plan.color }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-[var(--text-secondary)]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`w-full py-3 rounded-lg font-medium transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-[var(--accent-purple)] to-[var(--secondary)] text-white hover:opacity-90"
                      : "border border-[var(--secondary)]/30 text-[var(--secondary)] hover:bg-[var(--secondary)]/10"
                  }`}
                >
                  เริ่มต้นใช้งาน
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Message */}
        <div className="text-center mt-12">
          <p className="text-[var(--text-muted)] text-sm flex items-center justify-center gap-4 flex-wrap">
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[var(--secondary)]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              ปลอดภัย SSL 256-bit
            </span>
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[var(--secondary)]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              ยกเลิกได้ทุกเมื่อ
            </span>
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[var(--secondary)]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path
                  fillRule="evenodd"
                  d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                  clipRule="evenodd"
                />
              </svg>
              รองรับหลายช่องทางชำระเงิน
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
