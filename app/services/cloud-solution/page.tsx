"use client";

import Image from "next/image";
import Link from "next/link";
import img3 from "@/app/Photo/img 3.jpg";

const offerings = [
  {
    icon: "🗺️",
    title: "Cloud Consulting",
    subtitle: "Services Include",
    items: [
      "Cloud readiness assessment",
      "Cloud strategy & roadmap",
      "Infrastructure planning",
      "Cost optimization planning",
      "Security & compliance consulting",
    ],
    desc: "We analyse your business requirements and recommend the right cloud strategy to maximize efficiency, scalability, and ROI.",
  },
  {
    icon: "🚀",
    title: "Cloud Migration Services",
    subtitle: "Migration Support For",
    items: [
      "On-premise to cloud migration",
      "Legacy application modernization",
      "Data migration",
      "Hybrid cloud setup",
      "Multi-cloud deployment",
    ],
    desc: "Seamlessly migrate your applications, servers, databases, and workloads to the cloud with minimal downtime and maximum security.",
  },
  {
    icon: "⚙️",
    title: "Cloud Infrastructure Management",
    subtitle: "Key Features",
    items: [
      "24/7 monitoring & support",
      "Performance optimization",
      "Backup & disaster recovery",
      "Server management",
      "Security management",
      "Automated scaling",
    ],
    desc: "End-to-end cloud infrastructure management to ensure high availability, security, and operational efficiency.",
  },
  {
    icon: "💻",
    title: "Cloud Application Development",
    subtitle: "Development Capabilities",
    items: [
      "SaaS application development",
      "Microservices architecture",
      "API integrations",
      "Containerization & orchestration",
      "DevOps implementation",
    ],
    desc: "Build modern, scalable, and high-performing cloud-native applications tailored to your business needs.",
  },
  {
    icon: "🔒",
    title: "Cloud Security Services",
    subtitle: "Security Solutions Include",
    items: [
      "Identity & access management",
      "Data encryption",
      "Threat monitoring",
      "Compliance management",
      "Security audits",
      "Disaster recovery planning",
    ],
    desc: "Protect your cloud environment with advanced security solutions and industry best practices.",
  },
];

const platforms = [
  { label: "Amazon Web Services (AWS)", color: "#ff9900", icon: "🟠" },
  { label: "Microsoft Azure", color: "#0089d6", icon: "🔵" },
  { label: "Google Cloud Platform (GCP)", color: "#4285f4", icon: "🔴" },
  { label: "Hybrid & Private Cloud Solutions", color: "#17b8e0", icon: "☁️" },
];

const whyItems = [
  { icon: "👨‍💻", title: "Experienced Cloud Professionals", desc: "Certified cloud architects and engineers with deep multi-cloud expertise across diverse industries." },
  { icon: "🎯", title: "Customized Cloud Strategies", desc: "Tailored cloud roadmaps aligned with your unique business goals, workloads, and budget." },
  { icon: "📈", title: "Scalable & Secure Solutions", desc: "Infrastructure designed to grow with your business while maintaining enterprise-grade security." },
  { icon: "💰", title: "Cost-Effective Implementation", desc: "Smart resource planning and optimization strategies that deliver maximum ROI on cloud investments." },
  { icon: "🛡️", title: "End-to-End Support & Maintenance", desc: "From migration through ongoing operations — a single partner for your entire cloud lifecycle." },
  { icon: "⚡", title: "Faster Deployment & Business Agility", desc: "Agile delivery methods and automation tooling that accelerate your time-to-value in the cloud." },
];

const cloudMetrics = [
  { value: "99.99%", label: "Uptime SLA", icon: "⚡" },
  { value: "35%", label: "Cost Savings", icon: "💰" },
  { value: "3x", label: "Faster Deploy", icon: "🚀" },
  { value: "24/7", label: "Monitoring", icon: "🛡️" },
];

export default function CloudSolutions() {
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
        @keyframes pulseCloud {
          0%,100% { opacity: 0.6; transform: scale(1); }
          50%      { opacity: 1;   transform: scale(1.05); }
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
        .float-cloud   { animation: floatCloud 7s ease-in-out infinite; }
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
          border-radius: 24px; padding: 24px;
          position: relative; overflow: hidden;
          box-shadow: 0 30px 80px rgba(0,0,0,0.35);
          border: 1px solid rgba(255,255,255,0.07);
        }
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

        /* Offering cards */
        .offering-card {
          background: white; border-radius: 22px;
          padding: 30px 26px; border: 1.5px solid #e8f0fb;
          transition: all 0.32s cubic-bezier(0.4,0,0.2,1);
          position: relative; overflow: hidden; height: 100%;
        }
        .offering-card::after {
          content: ''; position: absolute;
          bottom: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #1a6fc4, #17b8e0);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s ease;
        }
        .offering-card:hover::after { transform: scaleX(1); }
        .offering-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 22px 60px rgba(26,111,196,0.14);
          border-color: rgba(26,111,196,0.2);
        }
        .offering-icon {
          width: 56px; height: 56px; border-radius: 16px;
          background: linear-gradient(135deg, #eef4fd, #daeeff);
          display: flex; align-items: center; justify-content: center;
          font-size: 26px; margin-bottom: 16px;
          transition: transform 0.3s ease;
        }
        .offering-card:hover .offering-icon { transform: scale(1.1) rotate(-5deg); }
        .bullet-item {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 13px; color: #475569; line-height: 1.5;
          padding: 3px 0;
        }
        .bullet-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: linear-gradient(135deg, #1a6fc4, #17b8e0);
          flex-shrink: 0; margin-top: 6px;
        }

        /* Platform cards */
        .platform-card {
          background: white; border-radius: 18px;
          padding: 22px 20px; border: 1.5px solid #e8f0fb;
          display: flex; align-items: center; gap: 14px;
          transition: all 0.28s ease;
        }
        .platform-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 45px rgba(26,111,196,0.13);
          border-color: rgba(26,111,196,0.2);
        }

        /* Why cards */
        .why-card {
          background: white; border-radius: 18px;
          padding: 28px 24px; border: 1.5px solid #e8f0fb;
          transition: all 0.3s ease;
        }
        .why-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 45px rgba(26,111,196,0.12);
        }
        .why-icon {
          width: 52px; height: 52px; border-radius: 14px; margin-bottom: 14px;
          background: linear-gradient(135deg, #eef4fd, #daeeff);
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; transition: transform 0.3s ease;
        }
        .why-card:hover .why-icon { transform: scale(1.1) rotate(-5deg); }

        /* CTA btn */
        .cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 32px; border-radius: 50px;
          font-family: 'Sora', sans-serif; font-size: 14px; font-weight: 700;
          cursor: pointer; transition: all 0.3s ease; border: none;
          text-decoration: none;
        }

        /* ═══════════════════
           MOBILE
        ═══════════════════ */
        @media (max-width: 767px) {
          .float-badge { display: none !important; }
          .deco-ring   { display: none !important; }
          .img-main    { width: 100% !important; }
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
        <div className="float-cloud absolute top-10 right-1/3 w-36 h-36 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #7dd3fc, transparent)" }} />
        <div className="float-cloud-2 absolute bottom-6 right-24 w-20 h-20 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #a5f3fc, transparent)" }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div className="fade-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
                style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}>
                <span>☁️</span>
                <span className="sora text-xs text-cyan-100 uppercase tracking-widest" style={{ fontWeight: 700 }}>
                  Cloud Solutions
                </span>
              </div>
              <h1 className="sora text-4xl md:text-5xl text-white leading-tight mb-5" style={{ fontWeight: 800 }}>
                Accelerate Your Business<br />
                <span style={{ color: "#a5f3fc" }}>with Scalable Cloud</span>
              </h1>
              <p className="text-blue-100 text-base leading-relaxed max-w-lg mb-8" style={{ opacity: 0.9 }}>
                At Nexora Technology Services Pvt Ltd, we help businesses modernize their IT infrastructure
                with secure, scalable, and cost-effective cloud solutions — improving agility, collaboration,
                and performance across your entire organization.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/contact" className="cta-btn"
                  style={{ background: "white", color: "#1a6fc4", boxShadow: "0 8px 28px rgba(0,0,0,0.15)" }}>
                  Move to the Cloud
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link href="/contact" className="cta-btn text-white"
                  style={{ background: "rgba(255,255,255,0.12)", border: "1.5px solid rgba(255,255,255,0.45)" }}>
                  Free Assessment
                </Link>
              </div>
            </div>

            {/* Right: Cloud Architecture Viz */}
            <div className="fade-right hidden lg:block">
              <div className="cloud-panel">
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

                <div className="relative">
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { label: "AWS", icon: "🟠", bg: "#1a2a1a", color: "#ff9900" },
                      { label: "Azure", icon: "🔵", bg: "#1a1a2e", color: "#0089d6" },
                      { label: "GCP", icon: "🔴", bg: "#2a1a1a", color: "#4285f4" },
                    ].map((p, i) => (
                      <div key={i} style={{
                        background: p.bg + "99", animationDelay: `${i * 0.8}s`,
                        border: `1px solid ${p.color}33`, borderRadius: "14px", padding: "12px 8px",
                        display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
                        animation: `nodeGlow 3s ease-in-out ${i * 0.8}s infinite`,
                      }}>
                        <div style={{ width: 40, height: 40, borderRadius: 10, background: p.color + "22", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
                          {p.icon}
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

                  <svg className="w-full" height="30" style={{ margin: "-4px 0" }}>
                    <line x1="17%" y1="0" x2="50%" y2="30" stroke="#1e80d8" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
                    <line x1="50%" y1="0" x2="50%" y2="30" stroke="#17b8e0" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
                    <line x1="83%" y1="0" x2="50%" y2="30" stroke="#1e80d8" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
                  </svg>

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

                  <svg className="w-full" height="30" style={{ margin: "-4px 0" }}>
                    <line x1="50%" y1="0" x2="20%" y2="30" stroke="#17b8e0" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
                    <line x1="50%" y1="0" x2="50%" y2="30" stroke="#1e80d8" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
                    <line x1="50%" y1="0" x2="80%" y2="30" stroke="#17b8e0" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
                  </svg>

                  <div className="grid grid-cols-3 gap-3 mt-1">
                    {[
                      { label: "Security", icon: "🔒", color: "#22c55e" },
                      { label: "DevOps", icon: "⚙️", color: "#f59e0b" },
                      { label: "Monitor", icon: "📊", color: "#8b5cf6" },
                    ].map((s, i) => (
                      <div key={i} className="text-center py-3 px-2 rounded-xl"
                        style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${s.color}33` }}>
                        <div className="text-xl mb-1">{s.icon}</div>
                        <p className="text-white text-xs font-semibold">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2 mt-5">
                  {cloudMetrics.map((m, i) => (
                    <div key={i} className="metric-card">
                      <div className="text-lg mb-1">{m.icon}</div>
                      <p className="sora text-white" style={{ fontWeight: 800, fontSize: "13px" }}>{m.value}</p>
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
          INTRO STRIP
      ══════════════════════════════ */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center fade-up">
          <p className="text-slate-600 text-base leading-relaxed">
            Whether you are <strong className="text-[#1a6fc4]">migrating to the cloud</strong>, building
            cloud-native applications, or managing multi-cloud environments, our team delivers reliable
            solutions tailored to your business goals.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════
          SERVICE OFFERINGS
      ══════════════════════════════ */}
      <section className="py-20 px-4 bg-[#f4f8fd]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 fade-up">
            <div className="section-label" style={{ margin: "0 auto 14px" }}>What We Offer</div>
            <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f]" style={{ fontWeight: 800 }}>
              Our Cloud Service Offerings
            </h2>
            <p className="text-slate-500 mt-3 text-sm max-w-xl mx-auto leading-relaxed">
              Comprehensive cloud services covering every stage of your digital transformation journey —
              from strategy to security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((o, i) => (
              <div key={o.title} className={`offering-card fade-up d${(i % 5) + 1}`}>
                <div className="offering-icon">{o.icon}</div>
                <h3 className="sora text-base text-[#1e3a5f] mb-2 leading-snug" style={{ fontWeight: 700 }}>
                  {o.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{o.desc}</p>
                <p className="sora text-xs text-[#1a6fc4] uppercase tracking-widest font-bold mb-3">
                  {o.subtitle}
                </p>
                <ul className="space-y-1">
                  {o.items.map((item) => (
                    <li key={item} className="bullet-item">
                      <span className="bullet-dot" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          IMAGE + PLATFORMS
      ══════════════════════════════ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image */}
          <div className="fade-left relative flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="deco-ring" style={{ width: 360, height: 360, top: -30, left: -30, zIndex: 0 }} />
              <div className="deco-ring" style={{ width: 200, height: 200, bottom: -20, right: -20, zIndex: 0, animationDirection: "reverse" }} />

              <div style={{ borderRadius: "24px", overflow: "hidden", position: "relative", zIndex: 2, boxShadow: "0 24px 70px rgba(26,111,196,0.22)" }}>
                <Image
                  src={img3}
                  alt="Cloud Solutions at Nexora"
                  width={480}
                  height={500}
                  className="w-full object-cover"
                  style={{ height: "420px" }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 55%, rgba(26,111,196,0.25) 100%)" }} />
              </div>

              <div className="float-badge" style={{ top: 16, right: -20 }}>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #1a6fc4, #17b8e0)" }}>☁️</div>
                  <div>
                    <p className="sora text-xs text-[#1e3a5f]" style={{ fontWeight: 700 }}>99.99% Uptime</p>
                    <p className="text-slate-400" style={{ fontSize: "10px" }}>SLA Guaranteed</p>
                  </div>
                </div>
              </div>

              <div className="float-badge" style={{ bottom: 40, left: -20, animationDelay: "2s" }}>
                <div className="flex items-center gap-2">
                  <span style={{ fontSize: "20px" }}>💰</span>
                  <div>
                    <p className="sora text-xs text-[#1e3a5f]" style={{ fontWeight: 700 }}>35% Cost Saved</p>
                    <p className="text-slate-400" style={{ fontSize: "10px" }}>Avg. client savings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Platforms */}
          <div className="fade-right">
            <div className="section-label">Cloud Platforms</div>
            <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f] leading-tight mb-4" style={{ fontWeight: 800 }}>
              Cloud Platforms<br />
              <span style={{ background: "linear-gradient(135deg, #1a6fc4, #17b8e0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                We Work With
              </span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              We support leading cloud platforms and technologies, delivering certified expertise across
              all major providers so you always have the right tool for the job.
            </p>

            <div className="space-y-4">
              {platforms.map((p, i) => (
                <div key={p.label} className={`platform-card fade-up d${i + 1}`}>
                  <div className="w-12 h-12 rounded-14 flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: p.color + "18", borderRadius: 14 }}>
                    {p.icon}
                  </div>
                  <div>
                    <p className="sora text-sm text-[#1e3a5f] font-bold">{p.label}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="h-1 rounded-full" style={{ width: 40, background: p.color, opacity: 0.7 }} />
                      <div className="h-1 rounded-full" style={{ width: 24, background: p.color, opacity: 0.4 }} />
                      <div className="h-1 rounded-full" style={{ width: 14, background: p.color, opacity: 0.2 }} />
                    </div>
                  </div>
                  <div className="ml-auto w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ background: p.color, boxShadow: `0 0 6px ${p.color}` }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          WHY NEXORA
      ══════════════════════════════ */}
      <section className="py-20 px-4 bg-[#f4f8fd]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 fade-up">
            <div className="section-label" style={{ margin: "0 auto 14px" }}>Why Choose Us</div>
            <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f]" style={{ fontWeight: 800 }}>
              Why Choose Nexora Technology Services{" "}
              <span style={{ background: "linear-gradient(135deg, #1a6fc4, #17b8e0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                for Cloud?
              </span>
            </h2>
            <p className="text-slate-500 mt-3 text-sm max-w-lg mx-auto leading-relaxed">
              We ensure seamless cloud adoption with minimal disruption while maximising performance,
              security, and cost efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyItems.map((w, i) => (
              <div key={w.title} className={`why-card fade-up d${(i % 6) + 1}`}>
                <div className="why-icon">{w.icon}</div>
                <h3 className="sora text-sm text-[#1e3a5f] mb-2" style={{ fontWeight: 700 }}>{w.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{w.desc}</p>
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
        style={{ background: "linear-gradient(135deg, #0a1e3d 0%, #1a6fc4 60%, #17b8e0 100%)" }}
      >
        <div className="geo-ring" style={{ width: 420, height: 420, top: -160, right: -80, opacity: 0.12 }} />
        <div className="geo-ring" style={{ width: 260, height: 260, bottom: -90, left: -60, opacity: 0.09 }} />
        <div className="float-cloud absolute top-8 left-1/4 w-24 h-24 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #7dd3fc, transparent)" }} />

        <div className="max-w-3xl mx-auto text-center relative z-10 fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
            style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}>
            <span>☁️</span>
            <span className="sora text-xs text-white uppercase tracking-widest" style={{ fontWeight: 700 }}>
              Transform Your Business
            </span>
          </div>
          <h2 className="sora text-3xl md:text-4xl text-white mb-4 leading-tight" style={{ fontWeight: 800 }}>
            Transform Your Business<br />
            <span style={{ color: "#a5f3fc" }}>with Cloud Technology</span>
          </h2>
          <p className="text-blue-100 mb-10 max-w-xl mx-auto text-sm leading-relaxed" style={{ opacity: 0.9 }}>
            Empower your organization with flexible, reliable, and future-ready cloud solutions. We help
            businesses leverage the power of the cloud to improve operational efficiency, enhance customer
            experiences, and drive innovation.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="cta-btn text-[#1a6fc4] bg-white"
              style={{ boxShadow: "0 8px 28px rgba(0,0,0,0.14)" }}>
              Get Free Assessment
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link href="/contact" className="cta-btn text-white"
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
          © 2026 Nexora Technology Services Pvt. Ltd. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
