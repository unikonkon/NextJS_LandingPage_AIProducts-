"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  const timelineRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    // Get the total length of the path
    const pathLength = path.getTotalLength();

    // Set up the path for drawing animation
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    // Create the scroll-triggered animation
    const ctx = gsap.context(() => {
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: "#products",
          start: "top center",
          end: "#rag bottom",
          scrub: 1,
        },
      });

      // Animate the dots
      gsap.utils.toArray(".timeline-dot").forEach((dot, index) => {
        const element = dot as HTMLElement;
        gsap.fromTo(
          element,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: element,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Glow animation for active dots
      gsap.to(".timeline-dot-glow", {
        opacity: 0.8,
        scale: 1.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.3,
          from: "start",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed left-8 top-0 bottom-0 w-px z-40 hidden xl:block pointer-events-none">
      {/* SVG Path */}
      <svg
        ref={timelineRef}
        className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-24"
        viewBox="0 0 100 2000"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient
            id="timelineGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#64FFDA" stopOpacity="0" />
            <stop offset="20%" stopColor="#64FFDA" />
            <stop offset="50%" stopColor="#A855F7" />
            <stop offset="80%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main path */}
        <path
          ref={pathRef}
          d="M50 0 L50 2000"
          stroke="url(#timelineGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#glow)"
        />

        {/* Connection branches to sections */}
        <path
          d="M50 400 L80 400"
          stroke="#64FFDA"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.5"
        />
        <path
          d="M50 800 L80 800"
          stroke="#A855F7"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.5"
        />
        <path
          d="M50 1200 L80 1200"
          stroke="#A855F7"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.5"
        />
        <path
          d="M50 1600 L80 1600"
          stroke="#3B82F6"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.5"
        />
      </svg>

      {/* Timeline Dots */}
      <div
        className="timeline-dot absolute left-1/2 -translate-x-1/2"
        style={{ top: "20%" }}
      >
        <div className="timeline-dot-glow absolute inset-0 rounded-full bg-[var(--secondary)] blur-sm" />
        <div className="relative w-4 h-4 rounded-full bg-[var(--background)] border-2 border-[var(--secondary)] flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]" />
        </div>
      </div>

      <div
        className="timeline-dot absolute left-1/2 -translate-x-1/2"
        style={{ top: "40%" }}
      >
        <div className="timeline-dot-glow absolute inset-0 rounded-full bg-[var(--secondary)] blur-sm" />
        <div className="relative w-4 h-4 rounded-full bg-[var(--background)] border-2 border-[var(--secondary)] flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]" />
        </div>
      </div>

      <div
        className="timeline-dot absolute left-1/2 -translate-x-1/2"
        style={{ top: "60%" }}
      >
        <div className="timeline-dot-glow absolute inset-0 rounded-full bg-[var(--accent-purple)] blur-sm" />
        <div className="relative w-4 h-4 rounded-full bg-[var(--background)] border-2 border-[var(--accent-purple)] flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-purple)]" />
        </div>
      </div>

      <div
        className="timeline-dot absolute left-1/2 -translate-x-1/2"
        style={{ top: "80%" }}
      >
        <div className="timeline-dot-glow absolute inset-0 rounded-full bg-[var(--accent-blue)] blur-sm" />
        <div className="relative w-4 h-4 rounded-full bg-[var(--background)] border-2 border-[var(--accent-blue)] flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" />
        </div>
      </div>

      {/* Progress Indicator Label */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
        <span className="text-xs text-[var(--text-muted)] writing-vertical">
          Scroll to explore
        </span>
      </div>
    </div>
  );
}
