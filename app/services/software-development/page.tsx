"use client";

import Image from "next/image";
import Link from "next/link";
import img1 from "@/app/Photo/img 1.jpg"; // Replace with your software image later

export default function SoftwareDevelopment() {
  const capabilities = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Custom Software Development",
      desc: "Bespoke applications engineered around your exact workflows, integrations, and business logic.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Enterprise Application Development",
      desc: "Robust, large-scale enterprise platforms built to handle complexity, compliance, and scale.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "API Development & Integration",
      desc: "Seamlessly connect your systems, third-party services, and data pipelines with secure, well-documented APIs.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "Legacy System Modernization",
      desc: "Breathe new life into outdated systems with modern architecture, UI, and cloud-native capabilities.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Agile & DevOps Implementation",
      desc: "Accelerate delivery with CI/CD pipelines, sprint-based development, and automated testing frameworks.",
    },
  ];

  const whyItems = [
    { icon: "⚡", title: "Faster Delivery", desc: "Agile sprints and DevOps pipelines get your product to market up to 40% faster." },
    { icon: "🔒", title: "Secure by Design", desc: "Security best practices baked in from architecture through deployment — not bolted on." },
    { icon: "📈", title: "Built to Scale", desc: "Cloud-native architectures that grow with your user base without expensive rewrites." },
    { icon: "🤝", title: "Collaborative", desc: "You're a partner, not just a client. Regular demos, feedback loops, and full transparency." },
  ];

  const techStack = [
    { label: "React / Next.js", color: "#61dafb" },
    { label: "Node.js", color: "#68a063" },
    { label: "Python / FastAPI", color: "#3776ab" },
    { label: "PostgreSQL", color: "#336791" },
    { label: "Docker / K8s", color: "#2496ed" },
    { label: "AWS / Azure", color: "#ff9900" },
    { label: "TypeScript", color: "#3178c6" },
    { label: "GraphQL", color: "#e535ab" },
  ];

  const steps = [
    { n: "01", title: "Discovery", desc: "We learn your business goals, technical constraints, and success metrics." },
    { n: "02", title: "Architecture", desc: "We design a scalable blueprint — database schemas, APIs, and system design." },
    { n: "03", title: "Development", desc: "Agile sprints with continuous demos, feedback, and iteration." },
    { n: "04", title: "QA & Launch", desc: "Rigorous testing, deployment, and post-launch support." },
  ];

  return (
    <div className="min-h-screen bg-[#f4f8fd]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        *, body { font-family: 'DM Sans', sans-serif; }
        .sora { font-family: 'Sora', sans-serif; }

        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.93); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulseGlow {
          0%,100% { box-shadow: 0 0 0 0 rgba(26,111,196,0.3); }
          50%      { box-shadow: 0 0 0 10px rgba(26,111,196,0); }
        }
        @keyframes diagonalFloat {
          0%,100% { transform: translate(0,0); }
          50%      { transform: translate(6px,-8px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes codeScroll {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }

        .fade-left  { animation: fadeLeft  0.7s ease both; }
        .fade-right { animation: fadeRight 0.7s ease both; }
        .fade-up    { animation: fadeUp    0.7s ease both; }
        .scale-in   { animation: scaleIn   0.6s ease both; }

        .d1{animation-delay:0.05s} .d2{animation-delay:0.12s}
        .d3{animation-delay:0.20s} .d4{animation-delay:0.28s}
        .d5{animation-delay:0.36s} .d6{animation-delay:0.44s}

        .geo-ring {
          position: absolute; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
        }
        .deco-ring {
          position: absolute; border-radius: 50%;
          border: 1.5px dashed rgba(26,111,196,0.2);
          animation: rotateSlow 18s linear infinite;
        }
        .float-orb { animation: float 6s ease-in-out infinite; }
        .float-orb-2 { animation: float 8s ease-in-out infinite reverse; }
        .float-badge {
          position: absolute; background: white;
          border-radius: 14px; padding: 12px 16px;
          box-shadow: 0 10px 32px rgba(26,111,196,0.2);
          border: 1px solid rgba(26,111,196,0.12);
          z-index: 10; animation: diagonalFloat 4s ease-in-out infinite;
        }

        /* Section label */
        .section-label {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 5px 14px; border-radius: 50px;
          background: rgba(26,111,196,0.08);
          border: 1px solid rgba(26,111,196,0.15);
          font-size: 11.5px; font-weight: 700; color: #1a6fc4;
          text-transform: uppercase; letter-spacing: 0.1em;
          font-family: 'Sora', sans-serif; margin-bottom: 14px;
        }
        .section-label::before {
          content: ''; width: 6px; height: 6px; border-radius: 50%;
          background: linear-gradient(135deg, #1a6fc4, #17b8e0);
        }

        /* Capability cards */
        .cap-card {
          background: white;
          border-radius: 18px;
          padding: 24px 22px;
          border: 1.5px solid #e8f0fb;
          display: flex; align-items: flex-start; gap: 16px;
          transition: all 0.3s ease;
          cursor: default;
        }
        .cap-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 45px rgba(26,111,196,0.13);
          border-color: rgba(26,111,196,0.25);
        }
        .cap-icon {
          width: 46px; height: 46px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, #1a6fc4, #17b8e0);
          color: white; flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .cap-card:hover .cap-icon { transform: scale(1.1) rotate(-5deg); }

        /* Why cards */
        .why-card {
          background: white; border-radius: 18px;
          padding: 28px 24px; border: 1.5px solid #e8f0fb;
          transition: all 0.3s ease; text-align: center;
        }
        .why-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 45px rgba(26,111,196,0.12);
        }
        .why-icon {
          width: 56px; height: 56px; border-radius: 16px; margin: 0 auto 16px;
          background: linear-gradient(135deg, #eef4fd, #daeeff);
          display: flex; align-items: center; justify-content: center;
          font-size: 24px; transition: transform 0.3s ease;
        }
        .why-card:hover .why-icon { transform: scale(1.1) rotate(-5deg); }

        /* Tech stack pill */
        .tech-pill {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 16px; border-radius: 50px;
          background: white; border: 1.5px solid #e8f0fb;
          font-size: 13px; font-weight: 600; color: #1e3a5f;
          transition: all 0.25s ease; cursor: default;
        }
        .tech-pill:hover {
          border-color: rgba(26,111,196,0.3);
          box-shadow: 0 6px 20px rgba(26,111,196,0.1);
          transform: translateY(-2px);
        }
        .tech-dot {
          width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;
        }

        /* Process step */
        .step-card {
          background: white; border-radius: 20px;
          padding: 28px 22px; border: 1.5px solid #e8f0fb;
          transition: all 0.3s ease; position: relative;
          overflow: hidden;
        }
        .step-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #1a6fc4, #17b8e0);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s ease;
        }
        .step-card:hover::before { transform: scaleX(1); }
        .step-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 50px rgba(26,111,196,0.13);
        }
        .step-num {
          font-family: 'Sora', sans-serif; font-size: 42px; font-weight: 800;
          line-height: 1; margin-bottom: 12px;
          background: linear-gradient(135deg, rgba(26,111,196,0.12), rgba(23,184,224,0.12));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }

        /* Image frame */
        .img-main {
          border-radius: 24px; overflow: hidden;
          box-shadow: 0 24px 70px rgba(26,111,196,0.22);
          position: relative; z-index: 2;
        }

        /* Code animation panel */
        .code-panel {
          background: #0d1117;
          border-radius: 16px;
          padding: 20px;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        .code-scroll {
          animation: codeScroll 12s linear infinite;
          font-family: 'Courier New', monospace;
          font-size: 12px;
          line-height: 1.8;
        }

        /* CTA */
        .cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 32px; border-radius: 50px;
          font-family: 'Sora', sans-serif; font-size: 14px; font-weight: 700;
          cursor: pointer; transition: all 0.3s ease; border: none;
          background: linear-gradient(135deg, #1a6fc4, #1e80d8, #17b8e0);
          color: white; box-shadow: 0 6px 24px rgba(26,111,196,0.35);
          text-decoration: none;
        }
        .cta-btn:hover {
          box-shadow: 0 10px 32px rgba(26,111,196,0.5);
          transform: translateY(-2px);
        }
        .cta-btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 32px; border-radius: 50px;
          font-family: 'Sora', sans-serif; font-size: 14px; font-weight: 700;
          cursor: pointer; transition: all 0.3s ease;
          border: 2px solid #1a6fc4; color: #1a6fc4;
          background: transparent; text-decoration: none;
        }
        .cta-btn-outline:hover {
          background: rgba(26,111,196,0.06);
          transform: translateY(-2px);
        }
      `}</style>

      {/* ══════════════════════════════
          HERO SECTION
      ══════════════════════════════ */}
      <section
        className="relative overflow-hidden py-20 px-4"
        style={{ background: "linear-gradient(135deg, #1a6fc4 0%, #1e80d8 45%, #1a9fd4 80%, #17b8e0 100%)" }}
      >
        {/* Deco rings */}
        <div className="geo-ring" style={{ width: 400, height: 400, top: -130, right: -80, opacity: 0.15 }} />
        <div className="geo-ring" style={{ width: 220, height: 220, top: 40, right: 100, opacity: 0.09 }} />
        <div className="geo-ring" style={{ width: 550, height: 550, bottom: -250, left: -120, opacity: 0.07 }} />
        <div className="float-orb absolute top-12 right-1/3 w-28 h-28 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #7dd3fc, transparent)" }} />
        <div className="float-orb-2 absolute bottom-8 right-24 w-16 h-16 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #a5f3fc, transparent)" }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: Text */}
            <div className="fade-left">
              {/* Breadcrumb */}
              

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
                style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}>
                <svg className="w-4 h-4 text-cyan-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <span className="sora text-xs text-cyan-100 uppercase tracking-widest" style={{ fontWeight: 700 }}>
                  Software Development
                </span>
              </div>

              <h1 className="sora text-4xl md:text-5xl text-white leading-tight mb-5" style={{ fontWeight: 800 }}>
                Build Scalable,<br />
                <span style={{ color: "#a5f3fc" }}>Future-Ready</span><br />
                Software
              </h1>
              <p className="text-blue-100 text-base leading-relaxed max-w-lg mb-8" style={{ opacity: 0.9 }}>
                At Nexora Technology Services Pvt. Ltd., we design and develop custom software solutions tailored to your business goals. Whether you're building from scratch or modernizing existing systems, we deliver secure, scalable, and high-performance applications.
              </p>

              <div className="flex gap-4 flex-wrap">
                <Link href="/contact" className="cta-btn"
                  style={{ background: "white", color: "#1a6fc4", boxShadow: "0 8px 28px rgba(0,0,0,0.15)" }}>
                  Let's Build Together
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link href="/contact"
                  className="sora inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm text-white transition-all hover:bg-white/15"
                  style={{ fontWeight: 700, border: "1.5px solid rgba(255,255,255,0.45)" }}>
                  View Portfolio
                </Link>
              </div>
            </div>

            {/* Right: Code Panel */}
            <div className="fade-right hidden lg:block">
              <div className="code-panel">
                {/* Window chrome */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400 opacity-80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-80" />
                  <div className="w-3 h-3 rounded-full bg-green-400 opacity-80" />
                  <span className="text-slate-500 text-xs ml-2">nexora_app.tsx</span>
                </div>
                {/* Scrolling code */}
                <div className="code-scroll">
                  {[
                    { line: "import", rest: " { useState, useEffect } from 'react'", c: "#c792ea" },
                    { line: "import", rest: " { NexoraAPI } from '@nexora/sdk'", c: "#c792ea" },
                    { line: "", rest: "", c: "" },
                    { line: "interface", rest: " Solution {", c: "#82aaff" },
                    { line: "  id:", rest: " string", c: "#ffcb6b" },
                    { line: "  scalable:", rest: " boolean", c: "#ffcb6b" },
                    { line: "  secure:", rest: " boolean", c: "#ffcb6b" },
                    { line: "  performance:", rest: " 'high'", c: "#ffcb6b" },
                    { line: "}", rest: "", c: "#82aaff" },
                    { line: "", rest: "", c: "" },
                    { line: "export default", rest: " function App() {", c: "#c792ea" },
                    { line: "  const", rest: " [solution, setSolution]", c: "#82aaff" },
                    { line: "    = useState", rest: "<Solution>(null)", c: "#c3e88d" },
                    { line: "", rest: "", c: "" },
                    { line: "  useEffect", rest: "(() => {", c: "#c3e88d" },
                    { line: "    NexoraAPI", rest: ".build({", c: "#ffcb6b" },
                    { line: "      scalable:", rest: " true,", c: "#82aaff" },
                    { line: "      secure:", rest: " true,", c: "#82aaff" },
                    { line: "      agile:", rest: " true,", c: "#82aaff" },
                    { line: "    })", rest: ".then(setSolution)", c: "#c3e88d" },
                    { line: "  }, [])", rest: "", c: "#c3e88d" },
                    { line: "", rest: "", c: "" },
                    { line: "  return", rest: " (", c: "#c792ea" },
                    { line: "    <Solution", rest: "", c: "#f07178" },
                    { line: "      powered", rest: "By='Nexora'", c: "#c3e88d" },
                    { line: "      delivery", rest: "='fast'", c: "#c3e88d" },
                    { line: "      quality", rest: "='enterprise'", c: "#c3e88d" },
                    { line: "    />", rest: "", c: "#f07178" },
                    { line: "  )", rest: "", c: "" },
                    { line: "}", rest: "", c: "#82aaff" },
                    { line: "", rest: "", c: "" },
                    { line: "// Build with Nexora.", rest: " Grow without limits.", c: "#546e7a" },
                  ].concat([
                    { line: "import", rest: " { useState, useEffect } from 'react'", c: "#c792ea" },
                    { line: "import", rest: " { NexoraAPI } from '@nexora/sdk'", c: "#c792ea" },
                    { line: "", rest: "", c: "" },
                    { line: "interface", rest: " Solution {", c: "#82aaff" },
                    { line: "  id:", rest: " string", c: "#ffcb6b" },
                  ]).map((l, i) => (
                    <div key={i} className="flex">
                      <span className="text-slate-600 mr-4 select-none w-5 text-right flex-shrink-0" style={{ fontSize: "11px" }}>
                        {i + 1}
                      </span>
                      <span style={{ color: l.c || "#cdd3de" }}>{l.line}</span>
                      <span style={{ color: "#cdd3de" }}>{l.rest}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          HERO IMAGE + INTRO SPLIT
      ══════════════════════════════ */}
      <section className="w-full py-20 px-4" style={{ background: "white" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image */}
          <div className="fade-left relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md">
              {/* Deco rings */}
              <div className="deco-ring" style={{ width: 360, height: 360, top: -30, left: -30, zIndex: 0 }} />
              <div className="deco-ring" style={{ width: 200, height: 200, bottom: -20, right: -20, zIndex: 0, animationDirection: "reverse" }} />

              {/* Main image */}
              <div className="img-main">
                <Image
                  src={img1}
                  alt="Software Development at Nexora"
                  width={480}
                  height={500}
                  className="w-full object-cover"
                  style={{ height: "450px" }}
                />
                {/* Overlay */}
                <div className="absolute inset-0" style={{
                  background: "linear-gradient(180deg, transparent 55%, rgba(26,111,196,0.25) 100%)"
                }} />
              </div>

              {/* Floating badge top-right */}
              <div className="float-badge" style={{ top: 16, right: -20 }}>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #1a6fc4, #17b8e0)" }}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <p className="sora text-xs text-[#1e3a5f]" style={{ fontWeight: 700, lineHeight: 1.2 }}>500+ Apps</p>
                    <p className="text-slate-400" style={{ fontSize: "10px" }}>Built & Deployed</p>
                  </div>
                </div>
              </div>

              {/* Floating badge bottom-left */}
              <div className="float-badge" style={{ bottom: 40, left: -20, animationDelay: "2s" }}>
                <div className="flex items-center gap-2">
                  <span style={{ fontSize: "20px" }}>⚡</span>
                  <div>
                    <p className="sora text-xs text-[#1e3a5f]" style={{ fontWeight: 700, lineHeight: 1.2 }}>Agile Delivery</p>
                    <p className="text-slate-400" style={{ fontSize: "10px" }}>Sprint-based sprints</p>
                  </div>
                </div>
              </div>

              {/* Stat row */}
              <div className="flex gap-3 mt-5 justify-center">
                {[{ n: "99.9%", l: "Uptime" }, { n: "40%", l: "Faster" }, { n: "100%", l: "Custom" }].map((s, i) => (
                  <div key={i} className="flex-1 text-center py-3 px-2 rounded-xl bg-white"
                    style={{ boxShadow: "0 6px 24px rgba(26,111,196,0.1)", border: "1px solid rgba(26,111,196,0.1)" }}>
                    <p className="sora text-base text-[#1a6fc4]" style={{ fontWeight: 800 }}>{s.n}</p>
                    <p className="text-slate-400 text-xs uppercase tracking-wide">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="fade-right order-1 lg:order-2">
            <div className="section-label">Our Capabilities</div>
            <h2 className="sora text-4xl text-[#1e3a5f] leading-tight mb-4" style={{ fontWeight: 800 }}>
              Everything You Need<br />
              <span style={{
                background: "linear-gradient(135deg, #1a6fc4, #17b8e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                to Build Great Software
              </span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8 text-sm">
              From idea to deployment, Nexora covers every phase of the software development lifecycle — with deep technical expertise, transparent communication, and a relentless focus on quality.
            </p>

            {/* Capabilities stacked */}
            <div className="space-y-3">
              {capabilities.map((c, i) => (
                <div key={i} className={`cap-card fade-up d${i + 1}`}>
                  <div className="cap-icon">{c.icon}</div>
                  <div>
                    <h4 className="sora text-sm text-[#1e3a5f] mb-1" style={{ fontWeight: 700 }}>{c.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          WHY NEXORA
      ══════════════════════════════ */}
      <section className="w-full py-20 px-4" style={{ background: "#f4f8fd" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 fade-up">
            <div className="section-label mx-auto w-fit">Why Nexora</div>
            <h2 className="sora text-4xl text-[#1e3a5f]" style={{ fontWeight: 800 }}>
              The Nexora{" "}
              <span style={{
                background: "linear-gradient(135deg, #1a6fc4, #17b8e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Difference</span>
            </h2>
            <p className="text-slate-500 mt-3 text-sm max-w-lg mx-auto leading-relaxed">
              We combine deep technical expertise with agile methodologies to ensure faster delivery, flexibility, and long-term scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyItems.map((w, i) => (
              <div key={i} className={`why-card fade-up d${i + 1}`}>
                <div className="why-icon"><span>{w.icon}</span></div>
                <h3 className="sora text-sm text-[#1e3a5f] mb-2" style={{ fontWeight: 700 }}>{w.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          OUR PROCESS
      ══════════════════════════════ */}
      <section className="w-full py-20 px-4" style={{ background: "white" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 fade-up">
            <div className="section-label mx-auto w-fit">Our Process</div>
            <h2 className="sora text-4xl text-[#1e3a5f]" style={{ fontWeight: 800 }}>
              How We{" "}
              <span style={{
                background: "linear-gradient(135deg, #1a6fc4, #17b8e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Deliver</span>
            </h2>
            <p className="text-slate-500 mt-3 text-sm max-w-lg mx-auto">
              A structured, transparent workflow that keeps you in control at every milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <div key={i} className={`step-card fade-up d${i + 1}`}>
                <div className="step-num">{s.n}</div>
                <h4 className="sora text-sm text-[#1e3a5f] mb-2" style={{ fontWeight: 700 }}>{s.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
                {/* Step connector arrow */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-3 z-10">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, #1a6fc4, #17b8e0)" }}>
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          TECH STACK
      ══════════════════════════════ */}
      <section className="w-full py-20 px-4" style={{ background: "#f4f8fd" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-up">
            <div className="section-label mx-auto w-fit">Tech Stack</div>
            <h2 className="sora text-4xl text-[#1e3a5f] mb-4" style={{ fontWeight: 800 }}>
              Technologies We{" "}
              <span style={{
                background: "linear-gradient(135deg, #1a6fc4, #17b8e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Master</span>
            </h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto mb-10">
              We work with modern, battle-tested technologies to build solutions that last.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((t, i) => (
              <div key={i} className={`tech-pill fade-up`} style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="tech-dot" style={{ background: t.color }} />
                {t.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CTA BANNER
      ══════════════════════════════ */}
      <section
        className="w-full py-20 px-4 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a6fc4 0%, #1e80d8 50%, #17b8e0 100%)" }}
      >
        <div className="geo-ring" style={{ width: 420, height: 420, top: -160, right: -80, opacity: 0.12 }} />
        <div className="geo-ring" style={{ width: 260, height: 260, bottom: -90, left: -60, opacity: 0.09 }} />

        <div className="max-w-3xl mx-auto text-center relative z-10 fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
            style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}>
            <span style={{ fontSize: "16px" }}>🚀</span>
            <span className="sora text-xs text-white uppercase tracking-widest" style={{ fontWeight: 700 }}>
              Let's Build Together
            </span>
          </div>

          <h2 className="sora text-3xl md:text-4xl text-white mb-4 leading-tight" style={{ fontWeight: 800 }}>
            Ready to Build Your<br />
            <span style={{ color: "#a5f3fc" }}>Next Big Solution?</span>
          </h2>
          <p className="text-blue-100 mb-10 max-w-lg mx-auto text-sm leading-relaxed" style={{ opacity: 0.9 }}>
            Let's build your next big solution. Our team is ready to turn your vision into a secure, scalable, and high-performance software product.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact"
              className="sora px-9 py-4 rounded-full text-sm text-[#1a6fc4] bg-white hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-2"
              style={{ fontWeight: 700, boxShadow: "0 8px 28px rgba(0,0,0,0.14)" }}>
              Start a Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link href="/contact"
              className="sora px-9 py-4 rounded-full text-sm text-white transition-all hover:bg-white/20 inline-flex items-center gap-2"
              style={{ fontWeight: 700, background: "rgba(255,255,255,0.12)", border: "1.5px solid rgba(255,255,255,0.4)" }}>
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FOOTER
      ══════════════════════════════ */}
      <footer className="w-full py-8 px-4 text-center"
        style={{ background: "linear-gradient(135deg, #0a1e3d, #0f3460)", fontSize: "13px" }}>
        <p className="sora text-slate-500">
          © 2024 Nexora Technology Services Pvt. Ltd. All rights reserved.
        </p>
      </footer>
    </div>
  );
}