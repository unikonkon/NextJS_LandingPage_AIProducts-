"use client";

import { useState } from "react";

const footerLinks = {
  products: {
    title: "ผลิตภัณฑ์",
    links: [
      { name: "Text-to-Speech", href: "#tts" },
      { name: "Speech-to-Text", href: "#stt" },
      { name: "AI Chat (RAG)", href: "#rag" },
      { name: "API Documentation", href: "#" },
    ],
  },
  company: {
    title: "บริษัท",
    links: [
      { name: "เกี่ยวกับเรา", href: "#about" },
      { name: "ติดต่อเรา", href: "#contact" },
      { name: "ร่วมงานกับเรา", href: "#" },
      { name: "Blog", href: "#" },
    ],
  },
  support: {
    title: "สนับสนุน",
    links: [
      { name: "Help Center", href: "#" },
      { name: "Status", href: "#" },
      { name: "Community", href: "#" },
      { name: "Feature Request", href: "#" },
    ],
  },
  legal: {
    title: "กฎหมาย",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "PDPA Compliance", href: "#" },
    ],
  },
};

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer id="contact" className="bg-[var(--primary-deep)] pt-20 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary)] to-[var(--accent-purple)] rounded-lg rotate-45" />
                <div className="absolute inset-1 bg-[var(--primary-deep)] rounded-md rotate-45" />
                <span className="absolute inset-0 flex items-center justify-center text-[var(--secondary)] font-bold text-lg font-heading">
                  AI
                </span>
              </div>
              <span className="font-heading text-xl font-bold text-[var(--text-primary)]">
                AI<span className="text-[var(--secondary)]">Products</span>
              </span>
            </a>

            <p className="text-[var(--text-secondary)] mb-6 max-w-sm">
              บริการ AI ครบวงจรสำหรับธุรกิจยุคใหม่ เปลี่ยนข้อความเป็นเสียง
              แปลงเสียงเป็นข้อความ และสร้าง AI ที่เข้าใจข้อมูลของคุณ
            </p>

            {/* Newsletter */}
            <div>
              <h4 className="font-medium text-[var(--text-primary)] mb-3">
                รับข่าวสารและอัพเดท
              </h4>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="อีเมลของคุณ"
                  className="flex-1 bg-[var(--background-card)] border border-[var(--secondary)]/20 rounded-lg px-4 py-2 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--secondary)]/50 transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[var(--secondary)] text-[var(--primary)] rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  {isSubscribed ? "✓" : "สมัคร"}
                </button>
              </form>
              {isSubscribed && (
                <p className="text-sm text-[var(--secondary)] mt-2">
                  ขอบคุณสำหรับการสมัคร!
                </p>
              )}
            </div>
          </div>

          {/* Links Columns */}
          {Object.values(footerLinks).map((section, index) => (
            <div key={index}>
              <h4 className="font-heading font-semibold text-[var(--text-primary)] mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-[var(--text-secondary)] hover:text-[var(--secondary)] transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-[var(--text-muted)]">
            © 2025 AI Products. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-lg bg-[var(--background-card)] border border-[var(--secondary)]/10 flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--secondary)] hover:border-[var(--secondary)]/30 transition-all"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
