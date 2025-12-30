"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  "ความแม่นยำสูงในหลายภาษา",
  "Real-time Transcription",
  "Speaker Diarization (แยกผู้พูด)",
  "รองรับหลายช่องเสียง",
  "ตรวจจับภาษาอัตโนมัติ",
];

const useCases = [
  { icon: "📝", text: "ถอดความประชุม" },
  { icon: "🎥", text: "สร้าง Subtitle" },
  { icon: "📞", text: "Call Center" },
  { icon: "🎙️", text: "Podcast Transcription" },
];

export default function SpeechToText() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [transcribedText, setTranscribedText] = useState("");
  const [displayText, setDisplayText] = useState("");

  const sampleText =
    "สวัสดีครับ นี่คือตัวอย่างการถอดความจากเสียงพูด ระบบ AI ของเราสามารถรองรับภาษาไทยได้อย่างแม่นยำ";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stt-demo",
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
        ".stt-content",
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
        ".stt-feature",
        { x: 20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".stt-features",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Typewriter effect
  const simulateTranscription = () => {
    if (isRecording) return;
    setIsRecording(true);
    setTranscribedText("");
    setDisplayText("");

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < sampleText.length) {
        setDisplayText(sampleText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTranscribedText(sampleText);
        setIsRecording(false);
      }
    }, 50);
  };

  return (
    <section
      ref={sectionRef}
      id="stt"
      className="py-[var(--section-padding)] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent-purple)]/5 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Demo - Left Side */}
          <div className="stt-demo order-2 lg:order-1">
            <div className="bg-[var(--background-card)] rounded-2xl border border-[var(--accent-purple)]/20 overflow-hidden">
              {/* Demo Header */}
              <div className="px-6 py-4 border-b border-[var(--accent-purple)]/10 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-sm text-[var(--text-muted)]">
                  STT Demo
                </span>
              </div>

              {/* Demo Content */}
              <div className="p-6 space-y-6">
                {/* Microphone Visualization */}
                <div className="flex flex-col items-center justify-center py-8">
                  <div
                    className={`relative w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isRecording
                        ? "bg-[var(--accent-purple)]/20"
                        : "bg-[var(--background)]"
                    }`}
                  >
                    {/* Pulse rings */}
                    {isRecording && (
                      <>
                        <div className="absolute inset-0 rounded-full bg-[var(--accent-purple)]/30 animate-ping" />
                        <div
                          className="absolute inset-[-10px] rounded-full bg-[var(--accent-purple)]/20 animate-ping"
                          style={{ animationDelay: "0.5s" }}
                        />
                      </>
                    )}
                    <svg
                      className={`w-10 h-10 relative z-10 transition-colors ${
                        isRecording
                          ? "text-[var(--accent-purple)]"
                          : "text-[var(--text-muted)]"
                      }`}
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

                  {/* Voice Waveform */}
                  <div className="flex items-center justify-center gap-1 h-12 mt-6">
                    {[...Array(30)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-[var(--accent-purple)] rounded-full transition-all duration-100"
                        style={{
                          height: isRecording
                            ? `${20 + Math.sin(Date.now() / 100 + i) * 20 + Math.random() * 20}px`
                            : "4px",
                          opacity: isRecording ? 0.8 : 0.3,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Transcription Output */}
                <div className="min-h-[120px] p-4 bg-[var(--background)]/50 rounded-lg">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-[var(--accent-purple)] mt-2 flex-shrink-0" />
                    <p className="text-[var(--text-primary)] leading-relaxed">
                      {displayText}
                      {isRecording && (
                        <span className="inline-block w-0.5 h-5 bg-[var(--accent-purple)] ml-1 animate-pulse" />
                      )}
                      {!isRecording && !displayText && (
                        <span className="text-[var(--text-muted)]">
                          ข้อความที่ถอดได้จะแสดงที่นี่...
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                {/* Controls */}
                <button
                  onClick={simulateTranscription}
                  disabled={isRecording}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition-all ${
                    isRecording
                      ? "bg-[var(--accent-purple)]/20 text-[var(--accent-purple)]"
                      : "bg-[var(--accent-purple)] text-white hover:opacity-90"
                  }`}
                >
                  {isRecording ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      <span>กำลังถอดความ...</span>
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
                          d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>เริ่มถอดความ</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="stt-content order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent-purple)]/10 text-[var(--accent-purple)] text-sm font-medium mb-6">
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
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
              Speech-to-Text
            </span>

            <h2 className="font-heading text-[var(--text-4xl)] mb-6">
              แปลงเสียงเป็น
              <span className="text-[var(--accent-purple)]"> ข้อความ</span>
              <br />
              แบบ Real-time
            </h2>

            <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-lg">
              ระบบ AI ที่แม่นยำสูง รองรับการถอดความแบบ Real-time
              พร้อมความสามารถในการแยกผู้พูดและตรวจจับภาษาอัตโนมัติ
            </p>

            {/* Features */}
            <div className="stt-features space-y-3 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="stt-feature flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[var(--accent-purple)]/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-[var(--accent-purple)]"
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
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background-card)] border border-[var(--accent-purple)]/10"
                >
                  <span>{useCase.icon}</span>
                  <span className="text-sm text-[var(--text-secondary)]">
                    {useCase.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
