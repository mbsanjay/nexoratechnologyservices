"use client";

import Image from "next/image";
import Link from "next/link";
import img3 from "@/app/Photo/img 3.jpg"; // Replace with your cloud image later

export default function CloudSolutions() {
  const capabilities = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M8 17l4 4 4-4m-4-5v9M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
        </svg>
      ),
      title: "Cloud Migration & Deployment",
      desc: "Seamlessly move your workloads, databases, and applications to the cloud with zero downtime strategies.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Cloud Architecture Design",
      desc: "Purpose-built cloud architectures that are resilient, scalable, and optimised for your specific workload patterns.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "DevOps & Automation",
      desc: "CI/CD pipelines, infrastructure as code, and automated deployments that accelerate your release velocity.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Cloud Security & Monitoring",
      desc: "End-to-end cloud security posture management, compliance auditing, and 24/7 infrastructure monitoring.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Cost Optimisation",
      desc: "Right-size your cloud spend with intelligent resource management, reserved instance planning, and waste elimination.",
    },
  ];

  const whyItems = [
    { icon: "☁️", title: "Seamless Migration", desc: "Zero-disruption migration strategies that keep your business running at full speed during transition." },
    { icon: "📈", title: "Infinite Scale", desc: "Auto-scaling infrastructure that grows with your traffic — pay only for what you actually use." },
    { icon: "🛡️", title: "Enterprise Security", desc: "Multi-layered cloud security, encryption at rest and in transit, and compliance-ready configurations." },
    { icon: "💰", title: "Cost Efficient", desc: "On average, our clients reduce cloud spend by 35% within 3 months through smart optimisation." },
  ];

  const techStack = [
    { label: "AWS", color: "#ff9900" },
    { label: "Azure", color: "#0089d6" },
    { label: "Google Cloud", color: "#4285f4" },
    { label: "Kubernetes", color: "#326ce5" },
    { label: "Docker", color: "#2496ed" },
    { label: "Terraform", color: "#7b42bc" },
    { label: "Ansible", color: "#ee0000" },
    { label: "Prometheus", color: "#e6522c" },
  ];

  const steps = [
    { n: "01", title: "Cloud Assessment", desc: "Audit your current infrastructure, identify migration candidates, and define your cloud strategy." },
    { n: "02", title: "Architecture Design", desc: "Blueprint your target cloud architecture — HA, DR, networking, and security posture." },
    { n: "03", title: "Migration & Setup", desc: "Phased migration with automated tooling, testing at every stage, and rollback safeguards." },
    { n: "04", title: "Optimise & Monitor", desc: "Continuous cost analysis, performance tuning, and 24/7 monitoring post-migration." },
  ];

  const cloudMetrics = [
    { value: "99.99%", label: "Uptime SLA", icon: "⚡" },
    { value: "35%", label: "Cost Savings", icon: "💰" },
    { value: "3x", label: "Faster Deploy", icon: "🚀" },
    { value: "24/7", label: "Monitoring", icon: "🛡️" },
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
          50%      { transform: translateY(-12px); }
        }
        @keyframes floatCloud {
          0%,100% { transform: translateY(0) translateX(0); }
          33%      { transform: translateY(-8px) translateX(4px); }
          66%      { transform: translateY(-4px) translateX(-4px); }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes diagonalFloat {
          0%,100% { transform: translate(0,0); }
          50%      { transform: translate(6px,-8px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes pulseCloud {
          0%,100% { opacity: 0.6; transform: scale(1); }
          50%      { opacity: 1;   transform: scale(1.05); }
        }
        @keyframes dataFlow {
          0%   { stroke-dashoffset: 100; opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes nodeGlow {
          0%,100% { box-shadow: 0 0 0 0 rgba(26,111,196,0.4); }
          50%      { box-shadow: 0 0 0 8px rgba(26,111,196,0); }
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
        .float-cloud { animation: floatCloud 7s ease-in-out infinite; }
        .float-cloud-2 { animation: floatCloud 9s ease-in-out infinite reverse; }

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

        /* Cloud viz panel */
        .cloud-panel {
          background: #0d1f3c;
          border-radius: 24px;
          padding: 24px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0,0,0,0.35);
          border: 1px solid rgba(255,255,255,0.07);
        }
        .cloud-node {
          border-radius: 14px;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 6px; padding: 12px 8px;
          transition: all 0.3s ease;
          animation: nodeGlow 3s ease-in-out infinite;
          cursor: default;
        }
        .cloud-node:hover { transform: translateY(-4px); }
        .cloud-node-icon {
          width: 40px; height: 40px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 18px;
        }

        /* Metric cards */
        .metric-card {
          background: rgba(255,255,255,0.06);
          border-radius: 14px; padding: 16px;
          border: 1px solid rgba(255,255,255,0.1);
          text-align: center; transition: all 0.3s ease;
        }
        .metric-card:hover {
          background: rgba(255,255,255,0.1);
          transform: translateY(-3px);
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
          transform: scaleX(0); transform-origin: left; transition: transform 0.35s ease;
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

        /* SVG data flow line */
        .data-line {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: dataFlow 3s ease-in-out infinite;
        }
        .data-line-2 { animation-delay: 1s; }
        .data-line-3 { animation-delay: 2s; }
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
        <div className="float-cloud absolute top-10 right-1/3 w-36 h-36 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #7dd3fc, transparent)" }} />
        <div className="float-cloud-2 absolute bottom-6 right-24 w-20 h-20 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #a5f3fc, transparent)" }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div className="fade-left">
              <h1 className="sora text-4xl md:text-5xl text-white leading-tight mb-5" style={{ fontWeight: 800 }}>
                Power Your Business<br />
                <span style={{ color: "#a5f3fc" }}>with the Cloud</span>
              </h1>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
                style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}>
                <svg className="w-4 h-4 text-cyan-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                <span className="sora text-xs text-cyan-100 uppercase tracking-widest" style={{ fontWeight: 700 }}>
                  Cloud Solutions
                </span>
              </div>

              <p className="text-blue-100 text-base leading-relaxed max-w-lg mb-8" style={{ opacity: 0.9 }}>
                Leverage the power of cloud computing to enhance scalability, security, and efficiency. Nexora helps you migrate, manage, and optimize your cloud infrastructure with confidence.
              </p>

              <div className="flex gap-4 flex-wrap">
                <Link href="/contact" className="cta-btn"
                  style={{ background: "white", color: "#1a6fc4", boxShadow: "0 8px 28px rgba(0,0,0,0.15)" }}>
                  Move to the Cloud
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link href="/contact" className="cta-btn text-white hover:bg-white/15"
                  style={{ background: "rgba(255,255,255,0.12)", border: "1.5px solid rgba(255,255,255,0.45)" }}>
                  Free Assessment
                </Link>
              </div>
            </div>

            {/* Right: Cloud Architecture Viz */}
            <div className="fade-right hidden lg:block">
              <div className="cloud-panel">
                {/* Panel header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400 opacity-70" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-70" />
                      <div className="w-3 h-3 rounded-full bg-green-400 opacity-70" />
                    </div>
                    <span className="text-slate-500 text-xs ml-2">cloud-architecture.yml</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400" style={{ animation: "pulseCloud 2s ease-in-out infinite" }} />
                    <span className="text-green-400 text-xs">All Systems Operational</span>
                  </div>
                </div>

                {/* Cloud diagram */}
                <div className="relative">
                  {/* Top row: providers */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { label: "AWS", icon: "🟠", bg: "#1a2a1a", color: "#ff9900" },
                      { label: "Azure", icon: "🔵", bg: "#1a1a2e", color: "#0089d6" },
                      { label: "GCP", icon: "🔴", bg: "#2a1a1a", color: "#4285f4" },
                    ].map((p, i) => (
                 <div
  key={i}
  style={{
    background: p.bg + "99",
    animationDelay: `${i * 0.8}s`,
    border: `1px solid ${p.color}33`,
    borderRadius: "14px",
    padding: "12px 8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "6px",
    transition: "all 0.3s ease",
    cursor: "default",
    animation: `nodeGlow 3s ease-in-out ${i * 0.8}s infinite`,
  }}
>
                        <div className="cloud-node-icon" style={{ background: p.color + "22" }}>
                          <span style={{ fontSize: "18px" }}>{p.icon}</span>
                        </div>
                        <span className="text-white text-xs font-semibold">{p.label}</span>
                        <div className="flex gap-1 mt-1">
                          {[...Array(3)].map((_, j) => (
                            <div key={j} className="rounded-full h-1"
                              style={{ width: "16px", background: p.color, opacity: 0.6 + j * 0.15 }} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* SVG connecting lines */}
                  <svg className="w-full" height="30" style={{ margin: "-4px 0" }}>
                    <line x1="17%" y1="0" x2="50%" y2="30" stroke="#1e80d8" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
                    <line x1="50%" y1="0" x2="50%" y2="30" stroke="#17b8e0" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
                    <line x1="83%" y1="0" x2="50%" y2="30" stroke="#1e80d8" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
                    <circle cx="17%" cy="0" r="3" fill="#ff9900" opacity="0.7" />
                    <circle cx="50%" cy="0" r="3" fill="#0089d6" opacity="0.7" />
                    <circle cx="83%" cy="0" r="3" fill="#4285f4" opacity="0.7" />
                  </svg>

                  {/* Middle: Nexora Cloud Hub */}
                  <div className="flex justify-center my-2">
                    <div className="px-5 py-3 rounded-2xl flex items-center gap-3"
                      style={{ background: "linear-gradient(135deg, rgba(26,111,196,0.3), rgba(23,184,224,0.2))", border: "1.5px solid rgba(23,184,224,0.4)" }}>
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center text-lg"
                        style={{ background: "linear-gradient(135deg, #1a6fc4, #17b8e0)" }}>☁️</div>
                      <div>
                        <p className="sora text-white text-xs" style={{ fontWeight: 700 }}>Nexora Cloud Hub</p>
                        <p className="text-cyan-300" style={{ fontSize: "9px" }}>Orchestration Layer</p>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-green-400 ml-1"
                        style={{ animation: "pulseCloud 1.5s ease-in-out infinite" }} />
                    </div>
                  </div>

                  {/* SVG connecting to bottom */}
                  <svg className="w-full" height="30" style={{ margin: "-4px 0" }}>
                    <line x1="50%" y1="0" x2="20%" y2="30" stroke="#17b8e0" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
                    <line x1="50%" y1="0" x2="50%" y2="30" stroke="#1e80d8" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
                    <line x1="50%" y1="0" x2="80%" y2="30" stroke="#17b8e0" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
                  </svg>

                  {/* Bottom row: services */}
                  <div className="grid grid-cols-3 gap-3 mt-1">
                    {[
                      { label: "Security", icon: "🔒", color: "#22c55e" },
                      { label: "DevOps", icon: "⚙️", color: "#f59e0b" },
                      { label: "Monitor", icon: "📊", color: "#8b5cf6" },
                    ].map((s, i) => (
                      <div key={i} className="text-center py-3 px-2 rounded-xl"
                        style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${s.color}33`, animationDelay: `${i * 0.5}s` }}>
                        <div className="text-xl mb-1">{s.icon}</div>
                        <p className="text-white text-xs font-semibold">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metric row */}
                <div className="grid grid-cols-4 gap-2 mt-5">
                  {cloudMetrics.map((m, i) => (
                    <div key={i} className="metric-card">
                      <div className="text-lg mb-1">{m.icon}</div>
                      <p className="sora text-white text-xs" style={{ fontWeight: 800, fontSize: "13px" }}>{m.value}</p>
                      <p className="text-slate-400" style={{ fontSize: "9px" }}>{m.label}</p>
                    </div>
                  ))}
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

              {/* Main image */}
              <div style={{ borderRadius: "24px", overflow: "hidden", position: "relative", zIndex: 2, boxShadow: "0 24px 70px rgba(26,111,196,0.22)" }}>
                <Image
                  src={img3}
                  alt="Cloud Solutions at Nexora"
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
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <div>
                    <p className="sora text-xs text-[#1e3a5f]" style={{ fontWeight: 700, lineHeight: 1.2 }}>99.99% Uptime</p>
                    <p className="text-slate-400" style={{ fontSize: "10px" }}>SLA Guaranteed</p>
                  </div>
                </div>
              </div>

              {/* Badge bottom-left */}
              <div className="float-badge" style={{ bottom: 40, left: -20, animationDelay: "2s" }}>
                <div className="flex items-center gap-2">
                  <span style={{ fontSize: "20px" }}>💰</span>
                  <div>
                    <p className="sora text-xs text-[#1e3a5f]" style={{ fontWeight: 700, lineHeight: 1.2 }}>35% Cost Saved</p>
                    <p className="text-slate-400" style={{ fontSize: "10px" }}>Avg. client savings</p>
                  </div>
                </div>
              </div>

              {/* Stat row */}
              <div className="flex gap-3 mt-5 justify-center">
                {[{ n: "300+", l: "Migrations" }, { n: "3x", l: "Faster" }, { n: "24/7", l: "Support" }].map((s, i) => (
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
              Full-Spectrum<br />
              <span style={{
                background: "linear-gradient(135deg, #1a6fc4, #17b8e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Cloud Expertise
              </span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8 text-sm">
              From first migration to ongoing optimisation — Nexora covers every layer of your cloud journey with deep multi-cloud expertise and a security-first mindset.
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
              Cloud Adoption{" "}
              <span style={{
                background: "linear-gradient(135deg, #1a6fc4, #17b8e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Done Right</span>
            </h2>
            <p className="text-slate-500 mt-3 text-sm max-w-lg mx-auto leading-relaxed">
              We ensure seamless cloud adoption with minimal disruption while maximizing performance and cost efficiency.
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
              Your Cloud{" "}
              <span style={{
                background: "linear-gradient(135deg, #1a6fc4, #17b8e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Journey</span>
            </h2>
            <p className="text-slate-500 mt-3 text-sm max-w-lg mx-auto">
              A structured four-phase process that ensures confident, disruption-free cloud adoption.
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
            <div className="section-label mx-auto w-fit">Cloud Platforms</div>
            <h2 className="sora text-4xl text-[#1e3a5f] mb-4" style={{ fontWeight: 800 }}>
              Platforms &amp;{" "}
              <span style={{
                background: "linear-gradient(135deg, #1a6fc4, #17b8e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Tools We Master</span>
            </h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto mb-10">
              Multi-cloud certified engineers working across all major platforms and DevOps toolchains.
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
            <span style={{ fontSize: "16px" }}>☁️</span>
            <span className="sora text-xs text-white uppercase tracking-widest" style={{ fontWeight: 700 }}>
              Move with Confidence
            </span>
          </div>
          <h2 className="sora text-3xl md:text-4xl text-white mb-4 leading-tight" style={{ fontWeight: 800 }}>
            Ready to Move to<br />
            <span style={{ color: "#a5f3fc" }}>the Cloud?</span>
          </h2>
          <p className="text-blue-100 mb-10 max-w-lg mx-auto text-sm leading-relaxed" style={{ opacity: 0.9 }}>
            Move to the cloud with confidence. Our certified cloud engineers will assess your infrastructure and design a migration plan tailored to your business — free of charge.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact"
              className="cta-btn text-[#1a6fc4] bg-white hover:shadow-2xl hover:scale-105 transition-all"
              style={{ boxShadow: "0 8px 28px rgba(0,0,0,0.14)" }}>
              Get Free Assessment
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