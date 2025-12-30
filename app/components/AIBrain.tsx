"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface AIBrainProps {
  size?: number;
  activeRegion?: "tts" | "stt" | "rag" | "all" | null;
  showParticles?: boolean;
  animate?: boolean;
  className?: string;
}

// Neural network nodes positioned across the brain
const primaryNodes = [
  { id: "frontal", x: 200, y: 80, region: "rag" },     // Frontal lobe - AI Chat/RAG
  { id: "broca", x: 120, y: 160, region: "tts" },      // Broca's area - TTS
  { id: "wernicke", x: 280, y: 200, region: "stt" },   // Wernicke's area - STT
  { id: "temporal", x: 100, y: 260, region: "rag" },   // Temporal lobe
  { id: "parietal", x: 280, y: 120, region: "all" },   // Parietal lobe
  { id: "occipital", x: 320, y: 260, region: "all" },  // Occipital lobe
  { id: "central", x: 200, y: 180, region: "all" },    // Central processing
];

const secondaryNodes = [
  { x: 160, y: 100 }, { x: 240, y: 100 }, { x: 150, y: 200 },
  { x: 250, y: 180 }, { x: 180, y: 240 }, { x: 220, y: 260 },
  { x: 140, y: 140 }, { x: 260, y: 140 }, { x: 300, y: 180 },
  { x: 180, y: 300 }, { x: 240, y: 300 }, { x: 320, y: 200 },
  { x: 80, y: 200 }, { x: 200, y: 320 }, { x: 160, y: 280 },
];

const connections = [
  { from: "frontal", to: "broca" },
  { from: "frontal", to: "wernicke" },
  { from: "frontal", to: "central" },
  { from: "broca", to: "temporal" },
  { from: "broca", to: "central" },
  { from: "wernicke", to: "parietal" },
  { from: "wernicke", to: "central" },
  { from: "temporal", to: "occipital" },
  { from: "parietal", to: "occipital" },
  { from: "central", to: "temporal" },
  { from: "central", to: "parietal" },
  { from: "central", to: "occipital" },
];

export default function AIBrain({
  size = 400,
  activeRegion = null,
  showParticles = true,
  animate = true,
  className = "",
}: AIBrainProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!svgRef.current || !animate || !mounted) return;

    const ctx = gsap.context(() => {
      // Brain outline draw animation
      gsap.fromTo(
        ".brain-outline",
        { strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.out",
        }
      );

      // Primary nodes pulse animation
      gsap.to(".primary-node", {
        scale: 1.3,
        opacity: 1,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: {
          each: 0.2,
          from: "random",
        },
      });

      // Secondary nodes twinkle
      gsap.to(".secondary-node", {
        opacity: 0.9,
        scale: 1.5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.15,
          from: "random",
        },
      });

      // Connection lines pulse
      gsap.to(".connection-line", {
        strokeDashoffset: -20,
        duration: 2,
        repeat: -1,
        ease: "none",
        stagger: {
          each: 0.1,
          from: "random",
        },
      });

      // Data flow particles
      if (showParticles) {
        gsap.to(".data-particle", {
          motionPath: {
            path: ".particle-path",
            align: ".particle-path",
            alignOrigin: [0.5, 0.5],
          },
          duration: 3,
          repeat: -1,
          ease: "none",
          stagger: {
            each: 0.5,
            from: "random",
          },
        });
      }
    }, svgRef);

    return () => ctx.revert();
  }, [animate, showParticles, mounted]);

  const getNodeColor = (region: string) => {
    if (!activeRegion || activeRegion === "all") return "#00D9FF";
    if (activeRegion === region) return "#FF006E";
    return "#7B2CBF";
  };

  const getNodeOpacity = (region: string) => {
    if (!activeRegion || activeRegion === "all") return 0.8;
    if (activeRegion === region) return 1;
    return 0.3;
  };

  const getConnectionOpacity = (fromRegion: string, toRegion: string) => {
    if (!activeRegion || activeRegion === "all") return 0.6;
    if (activeRegion === fromRegion || activeRegion === toRegion) return 0.9;
    return 0.2;
  };

  const nodePositions = Object.fromEntries(
    primaryNodes.map((n) => [n.id, { x: n.x, y: n.y }])
  );

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 400 400"
      width={size}
      height={size}
      className={`${className} animate-brain-glow`}
      style={{ overflow: "visible" }}
    >
      <defs>
        {/* Gradients */}
        <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7B2CBF" />
          <stop offset="50%" stopColor="#3A0CA3" />
          <stop offset="100%" stopColor="#00D9FF" />
        </linearGradient>

        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7B2CBF" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#00D9FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#00FF88" stopOpacity="0.8" />
        </linearGradient>

        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00D9FF" stopOpacity="1" />
          <stop offset="50%" stopColor="#7B2CBF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#7B2CBF" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="activeNodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF006E" stopOpacity="1" />
          <stop offset="50%" stopColor="#FF006E" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#7B2CBF" stopOpacity="0" />
        </radialGradient>

        {/* Filters */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="8" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background glow */}
      <ellipse
        cx="200"
        cy="200"
        rx="150"
        ry="140"
        fill="url(#nodeGlow)"
        opacity="0.2"
      >
        {mounted && (
          <animate
            attributeName="opacity"
            values="0.15;0.3;0.15"
            dur="4s"
            repeatCount="indefinite"
          />
        )}
      </ellipse>

      {/* Geometric Brain Outline - Low Poly Style */}
      <g className="brain-outline" filter="url(#glow)">
        {/* Left hemisphere */}
        <path
          d="M200,60 L140,80 L100,120 L80,180 L90,240 L120,290 L160,320 L200,330"
          fill="none"
          stroke="url(#brainGradient)"
          strokeWidth="2"
          strokeDasharray="1000"
          strokeLinecap="round"
          opacity="0.8"
        />
        {/* Right hemisphere */}
        <path
          d="M200,60 L260,80 L300,120 L320,180 L310,240 L280,290 L240,320 L200,330"
          fill="none"
          stroke="url(#brainGradient)"
          strokeWidth="2"
          strokeDasharray="1000"
          strokeLinecap="round"
          opacity="0.8"
        />
        {/* Internal structure lines */}
        <path
          d="M200,60 L200,330"
          fill="none"
          stroke="#7B2CBF"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.4"
        />
        <path
          d="M100,200 L300,200"
          fill="none"
          stroke="#7B2CBF"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.4"
        />

        {/* Brain folds - geometric style */}
        <path
          d="M120,140 L160,130 L200,140 L240,130 L280,140"
          fill="none"
          stroke="#00D9FF"
          strokeWidth="1"
          opacity="0.3"
        />
        <path
          d="M100,200 L150,190 L200,200 L250,190 L300,200"
          fill="none"
          stroke="#00D9FF"
          strokeWidth="1"
          opacity="0.3"
        />
        <path
          d="M120,260 L160,270 L200,260 L240,270 L280,260"
          fill="none"
          stroke="#00D9FF"
          strokeWidth="1"
          opacity="0.3"
        />
      </g>

      {/* Brain Region Highlights */}
      {activeRegion && (
        <g className="region-highlights">
          {/* Broca's Area - TTS */}
          {(activeRegion === "tts" || activeRegion === "all") && (
            <ellipse
              cx="120"
              cy="160"
              rx="40"
              ry="35"
              className="region-tts"
              opacity={activeRegion === "tts" ? 0.5 : 0.2}
            >
              {mounted && (
                <animate
                  attributeName="opacity"
                  values={activeRegion === "tts" ? "0.3;0.6;0.3" : "0.1;0.25;0.1"}
                  dur="2s"
                  repeatCount="indefinite"
                />
              )}
            </ellipse>
          )}

          {/* Wernicke's Area - STT */}
          {(activeRegion === "stt" || activeRegion === "all") && (
            <ellipse
              cx="280"
              cy="200"
              rx="40"
              ry="35"
              className="region-stt"
              opacity={activeRegion === "stt" ? 0.5 : 0.2}
            >
              {mounted && (
                <animate
                  attributeName="opacity"
                  values={activeRegion === "stt" ? "0.3;0.6;0.3" : "0.1;0.25;0.1"}
                  dur="2s"
                  repeatCount="indefinite"
                />
              )}
            </ellipse>
          )}

          {/* Frontal Lobe - RAG */}
          {(activeRegion === "rag" || activeRegion === "all") && (
            <ellipse
              cx="200"
              cy="100"
              rx="60"
              ry="40"
              className="region-rag"
              opacity={activeRegion === "rag" ? 0.5 : 0.2}
            >
              {mounted && (
                <animate
                  attributeName="opacity"
                  values={activeRegion === "rag" ? "0.3;0.6;0.3" : "0.1;0.25;0.1"}
                  dur="2s"
                  repeatCount="indefinite"
                />
              )}
            </ellipse>
          )}
        </g>
      )}

      {/* Neural Connections */}
      <g className="connections">
        {connections.map((conn, index) => {
          const from = nodePositions[conn.from];
          const to = nodePositions[conn.to];
          if (!from || !to) return null;

          const fromNode = primaryNodes.find((n) => n.id === conn.from);
          const toNode = primaryNodes.find((n) => n.id === conn.to);

          // Create curved path
          const midX = (from.x + to.x) / 2;
          const midY = (from.y + to.y) / 2;
          const curveOffset = 20;
          const controlX = midX + (Math.random() - 0.5) * curveOffset;
          const controlY = midY + (Math.random() - 0.5) * curveOffset;

          return (
            <path
              key={index}
              className="connection-line"
              d={`M${from.x},${from.y} Q${controlX},${controlY} ${to.x},${to.y}`}
              fill="none"
              stroke="url(#connectionGradient)"
              strokeWidth="1.5"
              strokeDasharray="8 4"
              opacity={getConnectionOpacity(fromNode?.region || "", toNode?.region || "")}
              filter="url(#glow)"
            />
          );
        })}
      </g>

      {/* Secondary Nodes */}
      <g className="secondary-nodes">
        {secondaryNodes.map((node, index) => (
          <circle
            key={index}
            className="secondary-node"
            cx={node.x}
            cy={node.y}
            r="4"
            fill="#00D9FF"
            opacity="0.5"
            style={{ animationDelay: `${index * 0.1}s` }}
          />
        ))}
      </g>

      {/* Primary Nodes */}
      <g className="primary-nodes">
        {primaryNodes.map((node) => (
          <g key={node.id} filter="url(#strongGlow)">
            {/* Node glow */}
            <circle
              cx={node.x}
              cy={node.y}
              r="20"
              fill={activeRegion === node.region ? "url(#activeNodeGlow)" : "url(#nodeGlow)"}
              opacity={getNodeOpacity(node.region)}
            />
            {/* Node core */}
            <circle
              className="primary-node"
              cx={node.x}
              cy={node.y}
              r="8"
              fill={getNodeColor(node.region)}
              opacity={getNodeOpacity(node.region)}
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
            />
          </g>
        ))}
      </g>

      {/* Data Flow Particles */}
      {showParticles && mounted && (
        <g className="particles">
          {[...Array(8)].map((_, i) => (
            <circle
              key={i}
              className="data-particle"
              r="3"
              fill={["#00D9FF", "#7B2CBF", "#FF006E", "#00FF88"][i % 4]}
              opacity="0.8"
            >
              <animateMotion
                dur={`${3 + i * 0.5}s`}
                repeatCount="indefinite"
                path={`M${100 + i * 20},${150 + i * 10} Q${200},${100 + i * 15} ${300 - i * 20},${200 + i * 10}`}
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                dur={`${3 + i * 0.5}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>
      )}

      {/* Micro Nodes / Particles */}
      {showParticles && mounted && (
        <g className="micro-nodes">
          {[...Array(30)].map((_, i) => {
            const x = 80 + Math.random() * 240;
            const y = 60 + Math.random() * 280;
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="2"
                fill="#FFFFFF"
                opacity="0.3"
                className="animate-twinkle"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            );
          })}
        </g>
      )}

      {/* Orbital rings */}
      <g className="orbital-rings" opacity="0.15">
        <ellipse
          cx="200"
          cy="200"
          rx="160"
          ry="150"
          fill="none"
          stroke="url(#brainGradient)"
          strokeWidth="1"
          strokeDasharray="4 8"
          className="animate-rotate-slow"
          style={{ transformOrigin: "200px 200px" }}
        />
        <ellipse
          cx="200"
          cy="200"
          rx="180"
          ry="170"
          fill="none"
          stroke="#00D9FF"
          strokeWidth="0.5"
          strokeDasharray="2 6"
          className="animate-rotate-reverse"
          style={{ transformOrigin: "200px 200px" }}
        />
      </g>
    </svg>
  );
}
