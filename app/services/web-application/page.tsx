"use client";

import Image from "next/image";
import Link from "next/link";
import img2 from "@/app/Photo/img 2.jpg"; // Replace with your web/mobile image later

export default function WebMobileDevelopment() {
  const capabilities = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Responsive Web Applications",
      desc: "Pixel-perfect web apps that look stunning and work flawlessly on every screen size and device.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "iOS & Android App Development",
      desc: "Native and cross-platform mobile apps built for performance, reliability, and a great user experience.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: "UI/UX Design & Prototyping",
      desc: "User-centred design thinking — wireframes, prototypes, and interfaces that users love to interact with.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: "Progressive Web Apps (PWA)",
      desc: "App-like experiences delivered through the browser — offline-ready, installable, and lightning fast.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Application Maintenance & Support",
      desc: "Post-launch peace of mind — performance monitoring, updates, bug fixes, and continuous improvements.",
    },
  ];

  const whyItems = [
    { icon: "🎨", title: "User-First Design", desc: "Every pixel is crafted with the end user in mind — intuitive, accessible, and delightful to use." },
    { icon: "⚡", title: "Performance Optimised", desc: "Fast load times, smooth animations, and optimised code — apps that feel instant." },
    { icon: "📱", title: "Cross-Platform", desc: "One codebase, every device — iOS, Android, and web from a single seamless workflow." },
    { icon: "🔄", title: "Iterative Process", desc: "Continuous feedback loops with interactive prototypes before a single line of code is written." },
  ];

  const techStack = [
    { label: "React / Next.js", color: "#61dafb" },
    { label: "React Native", color: "#61dafb" },
    { label: "Flutter", color: "#54c5f8" },
    { label: "TypeScript", color: "#3178c6" },
    { label: "Tailwind CSS", color: "#38bdf8" },
    { label: "Figma", color: "#f24e1e" },
    { label: "Firebase", color: "#ffca28" },
    { label: "GraphQL", color: "#e535ab" },
  ];

  const steps = [
    { n: "01", title: "Research & UX", desc: "User research, personas, and journey mapping to understand your audience deeply." },
    { n: "02", title: "Design & Prototype", desc: "Wireframes and high-fidelity prototypes reviewed and approved before development." },
    { n: "03", title: "Build & Test", desc: "Agile development with cross-device testing at every sprint." },
    { n: "04", title: "Launch & Grow", desc: "App store submission, deployment, and continuous performance monitoring." },
  ];

  const screens = [
    { label: "Dashboard", icon: "📊", color: "#dbeafe" },
    { label: "Profile", icon: "👤", color: "#dcfce7" },
    { label: "Analytics", icon: "📈", color: "#fef9c3" },
    { label: "Settings", icon: "⚙️", color: "#fce7f3" },
    { label: "Notifications", icon: "🔔", color: "#ede9fe" },
    { label: "Messages", icon: "💬", color: "#ffedd5" },
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
        @keyframes floatX {
          0%,100% { transform: translateY(0) rotate(-6deg); }
          50%      { transform: translateY(-8px) rotate(-6deg); }
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
        @keyframes screenSlide {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-33.33%); }
        }
        @keyframes ping-slow {
          0%   { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2.2); opacity: 0; }
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

        /* Capability cards */
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

        /* Step cards */
        .step-card {
          background: white; border-radius: 20px;
          padding: 28px 22px; border: 1.5px solid #e8f0fb;
          transition: all 0.3s ease; position: relative; overflow: hidden;
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

        /* Phone mockup */
        .phone-mockup {
          background: #0d1117;
          border-radius: 36px;
          border: 6px solid #1e293b;
          box-shadow: 0 30px 80px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.05);
          overflow: hidden;
          position: relative;
        }
        .phone-notch {
          width: 80px; height: 22px;
          background: #0d1117;
          border-radius: 0 0 16px 16px;
          margin: 0 auto;
          position: relative; z-index: 10;
        }
        .screen-scroll {
          animation: screenSlide 8s linear infinite;
        }
        .screen-item {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 14px; margin-bottom: 6px;
          border-radius: 12px;
          transition: all 0.2s ease;
        }
        .ping-dot {
          width: 10px; height: 10px; border-radius: 50%;
          background: #22c55e; position: relative; flex-shrink: 0;
        }
        .ping-dot::after {
          content: ''; position: absolute;
          inset: 0; border-radius: 50%;
          background: #22c55e;
          animation: ping-slow 1.5s ease-out infinite;
        }

        /* CTA */
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
        <div className="geo-ring" style={{ width: 420, height: 420, top: -130, right: -80, opacity: 0.14 }} />
        <div className="geo-ring" style={{ width: 240, height: 240, top: 40, right: 100, opacity: 0.09 }} />
        <div className="geo-ring" style={{ width: 560, height: 560, bottom: -260, left: -120, opacity: 0.07 }} />
        <div className="float-orb absolute top-12 right-1/4 w-32 h-32 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #7dd3fc, transparent)" }} />
        <div className="float-orb-2 absolute bottom-8 right-20 w-16 h-16 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #a5f3fc, transparent)" }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div className="fade-left">
              <h1 className="sora text-4xl md:text-5xl text-white leading-tight mb-5" style={{ fontWeight: 800 }}>
                Engaging Experiences<br />
                <span style={{ color: "#a5f3fc" }}>Across Every Device</span>
              </h1>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
                style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}>
                <svg className="w-4 h-4 text-cyan-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="sora text-xs text-cyan-100 uppercase tracking-widest" style={{ fontWeight: 700 }}>
                  Web &amp; Mobile Development
                </span>
              </div>

              <p className="text-blue-100 text-base leading-relaxed max-w-lg mb-8" style={{ opacity: 0.9 }}>
                We create intuitive, high-performing web and mobile applications that deliver seamless user experiences and drive engagement — across every platform and every screen size.
              </p>

              <div className="flex gap-4 flex-wrap">
                <Link href="/contact"
                  className="cta-btn"
                  style={{ background: "white", color: "#1a6fc4", boxShadow: "0 8px 28px rgba(0,0,0,0.15)" }}>
                  Transform Your Ideas
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link href="/contact"
                  className="cta-btn text-white hover:bg-white/15"
                  style={{ background: "rgba(255,255,255,0.12)", border: "1.5px solid rgba(255,255,255,0.45)" }}>
                  View Portfolio
                </Link>
              </div>
            </div>

            {/* Right: Phone mockup with scrolling screens */}
            <div className="fade-right hidden lg:flex justify-center items-center">
              <div className="relative">
                {/* Glow behind phone */}
                <div className="absolute inset-0 rounded-full blur-3xl opacity-30"
                  style={{ background: "radial-gradient(circle, #38bdf8, transparent)", transform: "scale(1.2)" }} />

                {/* Phone */}
                <div className="phone-mockup" style={{ width: 240, height: 480 }}>
                  {/* Notch */}
                  <div className="phone-notch" />

                  {/* Screen content */}
                  <div className="px-3 pb-3" style={{ height: "calc(100% - 22px)", overflow: "hidden" }}>
                    {/* App header */}
                    <div className="flex items-center justify-between mb-3 pt-1">
                      <div>
                        <p className="text-white text-xs font-bold" style={{ fontFamily: "Sora, sans-serif" }}>Nexora App</p>
                        <div className="flex items-center gap-1 mt-0.5">
                          <div className="ping-dot" />
                          <p className="text-green-400" style={{ fontSize: "9px" }}>Live</p>
                        </div>
                      </div>
                      <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm"
                        style={{ background: "linear-gradient(135deg, #1a6fc4, #17b8e0)" }}>N</div>
                    </div>

                    {/* Scrolling screen items */}
                    <div style={{ height: "380px", overflow: "hidden" }}>
                      <div className="screen-scroll">
                        {[...screens, ...screens, ...screens].map((s, i) => (
                          <div key={i} className="screen-item" style={{ background: s.color + "33" }}>
                            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-base flex-shrink-0"
                              style={{ background: s.color }}>
                              {s.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-white text-xs font-semibold mb-1">{s.label}</div>
                              <div className="rounded-full h-1.5 w-full" style={{ background: "rgba(255,255,255,0.1)" }}>
                                <div className="h-1.5 rounded-full"
                                  style={{ width: `${55 + (i % 4) * 12}%`, background: "linear-gradient(90deg, #1a6fc4, #17b8e0)" }} />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badges around phone */}
                <div className="float-badge" style={{ top: 40, left: -90 }}>
                  <div className="flex items-center gap-2">
                    <span style={{ fontSize: "18px" }}>📱</span>
                    <div>
                      <p className="sora text-xs text-[#1e3a5f]" style={{ fontWeight: 700, lineHeight: 1.2 }}>iOS & Android</p>
                      <p className="text-slate-400" style={{ fontSize: "10px" }}>Cross-platform</p>
                    </div>
                  </div>
                </div>

                <div className="float-badge" style={{ bottom: 60, right: -90, animationDelay: "2s" }}>
                  <div className="flex items-center gap-2">
                    <span style={{ fontSize: "18px" }}>⭐</span>
                    <div>
                      <p className="sora text-xs text-[#1e3a5f]" style={{ fontWeight: 700, lineHeight: 1.2 }}>4.9 / 5.0</p>
                      <p className="text-slate-400" style={{ fontSize: "10px" }}>App Store Rating</p>
                    </div>
                  </div>
                </div>

                <div className="float-badge" style={{ top: 160, right: -80, animationDelay: "1s" }}>
                  <div className="flex items-center gap-2">
                    <span style={{ fontSize: "18px" }}>🚀</span>
                    <div>
                      <p className="sora text-xs text-[#1e3a5f]" style={{ fontWeight: 700, lineHeight: 1.2 }}>200+ Apps</p>
                      <p className="text-slate-400" style={{ fontSize: "10px" }}>Launched</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CAPABILITIES + IMAGE
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
                  src={img2}
                  alt="Web & Mobile Development"
                  width={480}
                  height={500}
                  className="w-full object-cover"
                  style={{ height: "450px" }}
                />
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="sora text-xs text-[#1e3a5f]" style={{ fontWeight: 700, lineHeight: 1.2 }}>200+ Apps</p>
                    <p className="text-slate-400" style={{ fontSize: "10px" }}>Built & Launched</p>
                  </div>
                </div>
              </div>

              {/* Floating badge bottom-left */}
              <div className="float-badge" style={{ bottom: 40, left: -20, animationDelay: "2s" }}>
                <div className="flex items-center gap-2">
                  <span style={{ fontSize: "20px" }}>🎨</span>
                  <div>
                    <p className="sora text-xs text-[#1e3a5f]" style={{ fontWeight: 700, lineHeight: 1.2 }}>User-First</p>
                    <p className="text-slate-400" style={{ fontSize: "10px" }}>Design Approach</p>
                  </div>
                </div>
              </div>

              {/* Stat row */}
              <div className="flex gap-3 mt-5 justify-center">
                {[{ n: "4.9★", l: "App Rating" }, { n: "60%", l: "Faster Build" }, { n: "100%", l: "Responsive" }].map((s, i) => (
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
              Everything to Build<br />
              <span style={{
                background: "linear-gradient(135deg, #1a6fc4, #17b8e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                World-Class Apps
              </span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8 text-sm">
              From concept and design to development and deployment — Nexora delivers end-to-end web and mobile solutions with a relentless focus on usability and performance.
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
              The Nexora{" "}
              <span style={{
                background: "linear-gradient(135deg, #1a6fc4, #17b8e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Difference</span>
            </h2>
            <p className="text-slate-500 mt-3 text-sm max-w-lg mx-auto leading-relaxed">
              Our user-first approach ensures every application is visually appealing, easy to use, and optimized for performance.
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
              From Idea to{" "}
              <span style={{
                background: "linear-gradient(135deg, #1a6fc4, #17b8e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>App Store</span>
            </h2>
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
              Modern, battle-tested frameworks and tools for delivering exceptional digital products.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((t, i) => (
              <div key={i} className={`tech-pill fade-up`} style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: t.color }} />
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
            <span style={{ fontSize: "16px" }}>📱</span>
            <span className="sora text-xs text-white uppercase tracking-widest" style={{ fontWeight: 700 }}>
              Let's Build Together
            </span>
          </div>
          <h2 className="sora text-3xl md:text-4xl text-white mb-4 leading-tight" style={{ fontWeight: 800 }}>
            Transform Your Ideas Into<br />
            <span style={{ color: "#a5f3fc" }}>Digital Experiences</span>
          </h2>
          <p className="text-blue-100 mb-10 max-w-lg mx-auto text-sm leading-relaxed" style={{ opacity: 0.9 }}>
            Whether it's a web platform, mobile app, or progressive web app — our team is ready to build something extraordinary for your users.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact"
              className="cta-btn text-[#1a6fc4] bg-white hover:shadow-2xl hover:scale-105 transition-all"
              style={{ boxShadow: "0 8px 28px rgba(0,0,0,0.14)" }}>
              Start Your Project
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