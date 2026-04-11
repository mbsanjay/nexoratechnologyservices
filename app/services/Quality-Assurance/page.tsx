"use client";

import Image from "next/image";
import Link from "next/link";
import img1 from "@/app/Photo/img 1.jpg"; // Replace with your QA image later

export default function QualityAssurance() {
  const capabilities = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "Manual & Automated Testing",
      desc: "Comprehensive test coverage combining human insight with automation frameworks like Selenium, Cypress, and Playwright.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "Functional & Regression Testing",
      desc: "Validate every feature works as expected and ensure new changes never break existing functionality.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Performance & Load Testing",
      desc: "Stress-test your application under real-world traffic conditions to identify bottlenecks before they hit production.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Security Testing",
      desc: "Identify vulnerabilities, misconfigurations, and exploits through OWASP-aligned penetration testing and code audits.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Test Strategy & Consulting",
      desc: "Build a mature QA culture with tailored test strategies, toolchain setup, and team enablement programs.",
    },
  ];

  const whyItems = [
    { icon: "⬅️", title: "Shift-Left Testing", desc: "We catch bugs at the design and development stage — not after release — saving time and cost." },
    { icon: "🤖", title: "Test Automation", desc: "80%+ automation coverage reduces regression time from days to minutes with every release." },
    { icon: "🛡️", title: "Security-First", desc: "OWASP and SANS-aligned security testing baked into every testing engagement." },
    { icon: "📊", title: "Full Reporting", desc: "Detailed dashboards, defect analytics, and trend reports give full visibility into quality metrics." },
  ];

  const techStack = [
    { label: "Selenium", color: "#43b02a" },
    { label: "Cypress", color: "#17202c" },
    { label: "Playwright", color: "#2ead33" },
    { label: "JMeter", color: "#d22128" },
    { label: "Postman", color: "#ff6c37" },
    { label: "OWASP ZAP", color: "#fd0" },
    { label: "Jest", color: "#c21325" },
    { label: "Appium", color: "#662d91" },
  ];

  const steps = [
    { n: "01", title: "Requirement Analysis", desc: "Understand acceptance criteria, risk areas, and define what 'done' truly means." },
    { n: "02", title: "Test Planning", desc: "Build the test strategy, select tools, define environments and automation scope." },
    { n: "03", title: "Test Execution", desc: "Run manual, automated, performance, and security tests across all environments." },
    { n: "04", title: "Report & Release", desc: "Deliver detailed quality reports and sign-off with confidence before every release." },
  ];

  const testResults = [
    { suite: "Login & Auth", passed: 48, failed: 2, total: 50, time: "1.2s" },
    { suite: "Payment Flow", passed: 36, failed: 0, total: 36, time: "2.8s" },
    { suite: "API Endpoints", passed: 124, failed: 3, total: 127, time: "4.1s" },
    { suite: "UI Components", passed: 89, failed: 1, total: 90, time: "6.3s" },
    { suite: "Performance", passed: 18, failed: 0, total: 18, time: "12.5s" },
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
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes diagonalFloat {
          0%,100% { transform: translate(0,0); }
          50%      { transform: translate(6px,-8px); }
        }
        @keyframes progressFill {
          from { width: 0%; }
          to   { width: var(--target-width); }
        }
        @keyframes testRow {
          from { opacity: 0; transform: translateX(-10px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse-green {
          0%,100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
          50%      { box-shadow: 0 0 0 8px rgba(34,197,94,0); }
        }
        @keyframes pulse-red {
          0%,100% { box-shadow: 0 0 0 0 rgba(239,68,68,0.4); }
          50%      { box-shadow: 0 0 0 8px rgba(239,68,68,0); }
        }
        @keyframes countTick {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scanLine {
          0%   { top: 0%; opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        .fade-left  { animation: fadeLeft  0.7s ease both; }
        .fade-right { animation: fadeRight 0.7s ease both; }
        .fade-up    { animation: fadeUp    0.7s ease both; }
        .d1{animation-delay:0.05s} .d2{animation-delay:0.12s}
        .d3{animation-delay:0.20s} .d4{animation-delay:0.28s}
        .d5{animation-delay:0.36s}

        .geo-ring {
          position: absolute; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
        }
        .deco-ring {
          position: absolute; border-radius: 50%;
          border: 1.5px dashed rgba(26,111,196,0.2);
          animation: rotateSlow 18s linear infinite;
        }
        .float-orb   { animation: float 6s ease-in-out infinite; }
        .float-orb-2 { animation: float 8s ease-in-out infinite reverse; }
        .float-badge {
          position: absolute; background: white;
          border-radius: 14px; padding: 12px 16px;
          box-shadow: 0 10px 32px rgba(26,111,196,0.2);
          border: 1px solid rgba(26,111,196,0.12);
          z-index: 10; animation: diagonalFloat 4s ease-in-out infinite;
        }

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

        /* QA Dashboard panel */
        .qa-panel {
          background: #0d1117;
          border-radius: 24px;
          padding: 22px;
          box-shadow: 0 30px 80px rgba(0,0,0,0.35);
          border: 1px solid rgba(255,255,255,0.07);
          position: relative; overflow: hidden;
        }
        .scan-line {
          position: absolute; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(34,197,94,0.4), transparent);
          animation: scanLine 3s linear infinite; pointer-events: none; z-index: 5;
        }
        .test-row {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 12px; border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.2s ease; cursor: default;
          animation: testRow 0.5s ease both;
        }
        .test-row:hover {
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.1);
        }
        .status-dot-pass {
          width: 8px; height: 8px; border-radius: 50%;
          background: #22c55e; flex-shrink: 0;
          animation: pulse-green 2.5s ease-in-out infinite;
        }
        .status-dot-fail {
          width: 8px; height: 8px; border-radius: 50%;
          background: #ef4444; flex-shrink: 0;
          animation: pulse-red 2.5s ease-in-out infinite;
        }
        .progress-track {
          height: 4px; border-radius: 2px;
          background: rgba(255,255,255,0.08); flex: 1;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%; border-radius: 2px;
          background: linear-gradient(90deg, #22c55e, #86efac);
          animation: progressFill 1.5s ease both;
        }

        /* Cap cards */
        .cap-card {
          background: white; border-radius: 18px;
          padding: 24px 22px; border: 1.5px solid #e8f0fb;
          display: flex; align-items: flex-start; gap: 16px;
          transition: all 0.3s ease;
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
          color: white; flex-shrink: 0; transition: transform 0.3s ease;
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

        /* Step cards */
        .step-card {
          background: white; border-radius: 20px;
          padding: 28px 22px; border: 1.5px solid #e8f0fb;
          transition: all 0.3s ease; position: relative; overflow: hidden;
        }
        .step-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
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
          font-family: 'Sora', sans-serif; font-size: 40px; font-weight: 800;
          line-height: 1; margin-bottom: 12px;
          background: linear-gradient(135deg, rgba(26,111,196,0.12), rgba(23,184,224,0.12));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }

        /* Tech pill */
        .tech-pill {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 16px; border-radius: 50px;
          background: white; border: 1.5px solid #e8f0fb;
          font-size: 13px; font-weight: 600; color: #1e3a5f;
          transition: all 0.25s ease;
        }
        .tech-pill:hover {
          border-color: rgba(26,111,196,0.3);
          box-shadow: 0 6px 20px rgba(26,111,196,0.1);
          transform: translateY(-2px);
        }

        /* CTA btn */
        .cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 32px; border-radius: 50px;
          font-family: 'Sora', sans-serif; font-size: 14px; font-weight: 700;
          cursor: pointer; transition: all 0.3s ease; border: none;
          text-decoration: none;
        }
      `}</style>

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section
        className="relative overflow-hidden py-20 px-4"
        style={{ background: "linear-gradient(135deg, #1a6fc4 0%, #1e80d8 45%, #1a9fd4 80%, #17b8e0 100%)" }}
      >
        <div className="geo-ring" style={{ width: 440, height: 440, top: -140, right: -80, opacity: 0.14 }} />
        <div className="geo-ring" style={{ width: 250, height: 250, top: 40, right: 110, opacity: 0.09 }} />
        <div className="geo-ring" style={{ width: 580, height: 580, bottom: -270, left: -130, opacity: 0.07 }} />
        <div className="float-orb absolute top-12 right-1/3 w-32 h-32 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #7dd3fc, transparent)" }} />
        <div className="float-orb-2 absolute bottom-6 right-20 w-20 h-20 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #a5f3fc, transparent)" }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div className="fade-left">
              <h1 className="sora text-4xl md:text-5xl text-white leading-tight mb-5" style={{ fontWeight: 800 }}>
                Deliver Software<br />
                <span style={{ color: "#a5f3fc" }}>You Can Trust</span>
              </h1>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
                style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}>
                <svg className="w-4 h-4 text-cyan-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="sora text-xs text-cyan-100 uppercase tracking-widest" style={{ fontWeight: 700 }}>
                  Quality Assurance
                </span>
              </div>

              <p className="text-blue-100 text-base leading-relaxed max-w-lg mb-8" style={{ opacity: 0.9 }}>
                Quality is at the core of everything we do. Our QA services ensure your applications are reliable, secure, and perform flawlessly — every single release.
              </p>

              <div className="flex gap-4 flex-wrap">
                <Link href="/contact" className="cta-btn"
                  style={{ background: "white", color: "#1a6fc4", boxShadow: "0 8px 28px rgba(0,0,0,0.15)" }}>
                  Ensure Quality Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link href="/contact" className="cta-btn text-white hover:bg-white/15"
                  style={{ background: "rgba(255,255,255,0.12)", border: "1.5px solid rgba(255,255,255,0.45)" }}>
                  Free QA Audit
                </Link>
              </div>
            </div>

            {/* Right: QA Test Dashboard Panel */}
            <div className="fade-right hidden lg:block">
              <div className="qa-panel">
                <div className="scan-line" />

                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400 opacity-70" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-70" />
                      <div className="w-3 h-3 rounded-full bg-green-400 opacity-70" />
                    </div>
                    <span className="text-slate-500 text-xs ml-2">nexora-test-suite.spec.ts</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full"
                    style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)" }}>
                    <div className="status-dot-pass" style={{ animation: "none", width: "6px", height: "6px" }} />
                    <span className="text-green-400 text-xs font-semibold">315 / 321 Passed</span>
                  </div>
                </div>

                {/* Summary cards */}
                <div className="grid grid-cols-4 gap-2 mb-5">
                  {[
                    { label: "Total", value: "321", color: "#60a5fa" },
                    { label: "Passed", value: "315", color: "#22c55e" },
                    { label: "Failed", value: "6", color: "#ef4444" },
                    { label: "Coverage", value: "96%", color: "#a78bfa" },
                  ].map((s, i) => (
                    <div key={i} className="text-center py-3 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${s.color}22` }}>
                      <p className="sora font-800 mb-0.5" style={{ color: s.color, fontWeight: 800, fontSize: "18px" }}>
                        {s.value}
                      </p>
                      <p className="text-slate-500" style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Test suite rows */}
                <div className="space-y-2">
                  {testResults.map((t, i) => {
                    const pct = Math.round((t.passed / t.total) * 100);
                    return (
                      <div key={i} className="test-row" style={{ animationDelay: `${i * 0.1}s` }}>
                        {t.failed === 0
                          ? <div className="status-dot-pass" />
                          : <div className="status-dot-fail" />
                        }
                        <span className="text-white text-xs flex-shrink-0" style={{ width: "120px", fontSize: "11.5px" }}>
                          {t.suite}
                        </span>
                        <div className="progress-track">
                          <div className="progress-fill"
                            style={{ "--target-width": `${pct}%`, width: `${pct}%`, animationDelay: `${i * 0.15}s` } as React.CSSProperties} />
                        </div>
                        <span className="text-green-400 text-xs flex-shrink-0" style={{ width: "36px", textAlign: "right", fontSize: "11px" }}>
                          {pct}%
                        </span>
                        <span className="text-slate-600 flex-shrink-0" style={{ fontSize: "10px", width: "32px", textAlign: "right" }}>
                          {t.time}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Footer bar */}
                <div className="flex items-center justify-between mt-5 pt-4"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-md flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, #1a6fc4, #17b8e0)" }}>
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-400" style={{ fontSize: "11px" }}>Test run complete — 27.9s</span>
                  </div>
                  <span className="text-cyan-500 text-xs font-semibold">Nexora QA ✓</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          IMAGE + CAPABILITIES
      ══════════════════════════════ */}
      <section className="w-full py-20 px-4" style={{ background: "white" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image */}
          <div className="fade-left relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md">
              <div className="deco-ring" style={{ width: 360, height: 360, top: -30, left: -30, zIndex: 0 }} />
              <div className="deco-ring" style={{ width: 200, height: 200, bottom: -20, right: -20, zIndex: 0, animationDirection: "reverse" }} />

              <div style={{ borderRadius: "24px", overflow: "hidden", position: "relative", zIndex: 2, boxShadow: "0 24px 70px rgba(26,111,196,0.22)" }}>
                <Image
                  src={img1}
                  alt="Quality Assurance at Nexora"
                  width={480}
                  height={500}
                  className="w-full object-cover"
                  style={{ height: "450px" }}
                />
                <div className="absolute inset-0" style={{
                  background: "linear-gradient(180deg, transparent 55%, rgba(26,111,196,0.25) 100%)"
                }} />
              </div>

              {/* Badge top-right */}
              <div className="float-badge" style={{ top: 16, right: -20 }}>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #1a6fc4, #17b8e0)" }}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="sora text-xs text-[#1e3a5f]" style={{ fontWeight: 700, lineHeight: 1.2 }}>96% Coverage</p>
                    <p className="text-slate-400" style={{ fontSize: "10px" }}>Avg. test coverage</p>
                  </div>
                </div>
              </div>

              {/* Badge bottom-left */}
              <div className="float-badge" style={{ bottom: 40, left: -20, animationDelay: "2s" }}>
                <div className="flex items-center gap-2">
                  <span style={{ fontSize: "20px" }}>🐞</span>
                  <div>
                    <p className="sora text-xs text-[#1e3a5f]" style={{ fontWeight: 700, lineHeight: 1.2 }}>Zero Defect</p>
                    <p className="text-slate-400" style={{ fontSize: "10px" }}>Production releases</p>
                  </div>
                </div>
              </div>

              {/* Stat row */}
              <div className="flex gap-3 mt-5 justify-center">
                {[{ n: "96%", l: "Coverage" }, { n: "80%", l: "Automated" }, { n: "0", l: "Prod Bugs" }].map((s, i) => (
                  <div key={i} className="flex-1 text-center py-3 px-2 rounded-xl"
                    style={{ background: "white", boxShadow: "0 6px 24px rgba(26,111,196,0.1)", border: "1px solid rgba(26,111,196,0.1)" }}>
                    <p className="sora text-sm text-[#1a6fc4]" style={{ fontWeight: 800 }}>{s.n}</p>
                    <p className="text-slate-400 text-xs uppercase tracking-wide">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Capabilities */}
          <div className="fade-right order-1 lg:order-2">
            <div className="section-label">Our Capabilities</div>
            <h2 className="sora text-4xl text-[#1e3a5f] leading-tight mb-4" style={{ fontWeight: 800 }}>
              Quality at<br />
              <span style={{
                background: "linear-gradient(135deg, #1a6fc4, #17b8e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Every Step</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8 text-sm">
              From shift-left strategy to automated regression suites — Nexora QA services cover the full testing spectrum so you can ship with complete confidence.
            </p>

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
              QA That{" "}
              <span style={{
                background: "linear-gradient(135deg, #1a6fc4, #17b8e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Goes Deeper</span>
            </h2>
            <p className="text-slate-500 mt-3 text-sm max-w-lg mx-auto leading-relaxed">
              We follow a shift-left approach and robust testing frameworks to catch issues early and deliver defect-free software.
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
          PROCESS
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
              }}>Ensure Quality</span>
            </h2>
            <p className="text-slate-500 mt-3 text-sm max-w-lg mx-auto">
              A structured, shift-left QA process embedded at every stage of development.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <div key={i} className={`step-card fade-up d${i + 1}`}>
                <div className="step-num">{s.n}</div>
                <h4 className="sora text-sm text-[#1e3a5f] mb-2" style={{ fontWeight: 700 }}>{s.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
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
            <div className="section-label mx-auto w-fit">Testing Tools</div>
            <h2 className="sora text-4xl text-[#1e3a5f] mb-4" style={{ fontWeight: 800 }}>
              Tools &amp;{" "}
              <span style={{
                background: "linear-gradient(135deg, #1a6fc4, #17b8e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Frameworks</span>
            </h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto mb-10">
              Industry-leading testing tools and frameworks for comprehensive quality coverage.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((t, i) => (
              <div key={i} className={`tech-pill fade-up`} style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="w-2 h-2 rounded-full" style={{ background: t.color }} />
                {t.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CTA
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
            <span style={{ fontSize: "16px" }}>✅</span>
            <span className="sora text-xs text-white uppercase tracking-widest" style={{ fontWeight: 700 }}>
              Quality at Every Step
            </span>
          </div>
          <h2 className="sora text-3xl md:text-4xl text-white mb-4 leading-tight" style={{ fontWeight: 800 }}>
            Ready to Ship Software<br />
            <span style={{ color: "#a5f3fc" }}>Without the Bugs?</span>
          </h2>
          <p className="text-blue-100 mb-10 max-w-lg mx-auto text-sm leading-relaxed" style={{ opacity: 0.9 }}>
            Ensure quality at every step. Let Nexora's QA experts audit your current process and build a testing strategy that gives your team full confidence in every release.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact"
              className="cta-btn text-[#1a6fc4] bg-white hover:shadow-2xl hover:scale-105 transition-all"
              style={{ boxShadow: "0 8px 28px rgba(0,0,0,0.14)" }}>
              Get Free QA Audit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link href="/contact"
              className="cta-btn text-white hover:bg-white/20 transition-all"
              style={{ background: "rgba(255,255,255,0.12)", border: "1.5px solid rgba(255,255,255,0.4)" }}>
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-8 px-4 text-center"
        style={{ background: "linear-gradient(135deg, #0a1e3d, #0f3460)", fontSize: "13px" }}>
        <p className="sora text-slate-500">
          © 2024 Nexora Technology Services Pvt. Ltd. All rights reserved.
        </p>
      </footer>
    </div>
  );
}