"use client";

import Image from "next/image";
import Link from "next/link";
import img1 from "@/app/Photo/img 1.jpg";
import img2 from "@/app/Photo/img 2.jpg";
import img3 from "@/app/Photo/img 3.jpg";
import { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState(0);

  const values = [
    {
      icon: "⭐",
      title: "Excellence",
      desc: "We hold ourselves to the highest standards in every project we undertake, from initial consultation to final delivery.",
    },
    {
      icon: "🤝",
      title: "Integrity",
      desc: "Honesty and transparency are the foundation of every client relationship. We say what we mean and deliver what we promise.",
    },
    {
      icon: "💡",
      title: "Innovation",
      desc: "We stay ahead of the technology curve, constantly exploring new ideas and frameworks to give our clients a competitive edge.",
    },
    {
      icon: "🎯",
      title: "Customer Focus",
      desc: "Your business goals are our north star. Every decision we make is driven by what delivers the most value for you.",
    },
    {
      icon: "🔒",
      title: "Security",
      desc: "Enterprise-grade security is baked into every solution we build — protecting your data and your customers.",
    },
    {
      icon: "🚀",
      title: "Speed",
      desc: "Agile delivery methodology means faster time-to-market without compromising on quality or reliability.",
    },
  ];

  const timeline = [
    { year: "2012", title: "Founded", desc: "Nexora was established in Bengaluru with a vision to democratize enterprise technology." },
    { year: "2015", title: "100 Clients", desc: "Crossed the 100-client milestone, expanding into cloud services and engineering solutions." },
    { year: "2018", title: "Global Expansion", desc: "Opened delivery centers and began serving clients across 20+ countries worldwide." },
    { year: "2021", title: "500 Projects", desc: "Successfully delivered 500+ projects, earning ISO 9001:2015 certification." },
    { year: "2024", title: "Today", desc: "50+ specialists, 98% client satisfaction, and continuing to grow stronger every year." },
  ];

  const team = [
    { name: "Venkatesh Gothe", role: "CEO & Founder", emoji: "👨‍💼" },
    { name: "M. B Sanjay", role: "COO", emoji: "👨‍💼" },
    // { name: "Ankit Verma", role: "Head of Engineering", emoji: "👨‍🔧" },
    // { name: "Divya Nair", role: "Head of Design", emoji: "👩‍🎨" },
  ];

  const tabs = ["Our Mission", "Our Story", "Leadership"];

  return (
    <div className="min-h-screen bg-[#f4f8fd] flex flex-col">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        * { font-family: 'DM Sans', sans-serif; }
        .sora { font-family: 'Sora', sans-serif; }

        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-28px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(28px); }
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
        @keyframes timelineDrop {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .fade-left  { animation: fadeLeft  0.7s ease both; }
        .fade-right { animation: fadeRight 0.7s ease both; }
        .fade-up    { animation: fadeUp    0.7s ease both; }
        .scale-in   { animation: scaleIn   0.6s ease both; }

        .d1 { animation-delay: 0.05s; }
        .d2 { animation-delay: 0.12s; }
        .d3 { animation-delay: 0.20s; }
        .d4 { animation-delay: 0.28s; }
        .d5 { animation-delay: 0.36s; }
        .d6 { animation-delay: 0.44s; }

        .geo-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
        }
        .orb-float { animation: float 6s ease-in-out infinite; }
        .orb-float-2 { animation: float 8s ease-in-out infinite reverse; }

        /* Value cards */
        .value-card {
          background: white;
          border-radius: 20px;
          padding: 28px 24px;
          border: 1.5px solid #e8f0fb;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          position: relative;
          overflow: hidden;
        }
        .value-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #1a6fc4, #17b8e0);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }
        .value-card:hover::after { transform: scaleX(1); }
        .value-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 18px 50px rgba(26,111,196,0.13);
        }
        .value-icon {
          width: 52px; height: 52px;
          border-radius: 14px;
          background: linear-gradient(135deg, #eef4fd, #daeeff);
          display: flex; align-items: center; justify-content: center;
          font-size: 22px;
          margin-bottom: 16px;
          transition: transform 0.3s ease;
        }
        .value-card:hover .value-icon { transform: scale(1.1) rotate(-5deg); }

        /* Timeline */
        .timeline-line {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          top: 0; bottom: 0;
          background: linear-gradient(180deg, #1a6fc4, #17b8e0);
          opacity: 0.3;
        }
        .timeline-dot {
          width: 16px; height: 16px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1a6fc4, #17b8e0);
          animation: pulseGlow 2.5s ease-in-out infinite;
          flex-shrink: 0;
        }
        .timeline-card {
          background: white;
          border-radius: 16px;
          padding: 20px 24px;
          border: 1.5px solid #e8f0fb;
          transition: all 0.3s ease;
          animation: timelineDrop 0.6s ease both;
        }
        .timeline-card:hover {
          box-shadow: 0 12px 40px rgba(26,111,196,0.13);
          border-color: rgba(26,111,196,0.25);
          transform: translateY(-4px);
        }

        /* Tabs */
        .tab-btn {
          padding: 10px 22px;
          border-radius: 50px;
          font-family: 'Sora', sans-serif;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
          border: none;
          background: transparent;
          color: #64748b;
        }
        .tab-btn.active {
          background: linear-gradient(135deg, #1a6fc4, #17b8e0);
          color: white;
          box-shadow: 0 6px 20px rgba(26,111,196,0.3);
        }
        .tab-btn:not(.active):hover {
          background: rgba(26,111,196,0.07);
          color: #1a6fc4;
        }

        /* Team card */
        .team-card {
          background: white;
          border-radius: 20px;
          padding: 32px 20px;
          text-align: center;
          border: 1.5px solid #e8f0fb;
          transition: all 0.3s ease;
        }
        .team-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(26,111,196,0.14);
          border-color: rgba(26,111,196,0.2);
        }
        .team-avatar {
          width: 80px; height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #eef4fd, #daeeff);
          display: flex; align-items: center; justify-content: center;
          font-size: 36px;
          margin: 0 auto 16px;
          animation: pulseGlow 3s ease-in-out infinite;
        }

        /* Section label */
        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 5px 14px;
          border-radius: 50px;
          background: rgba(26,111,196,0.08);
          border: 1px solid rgba(26,111,196,0.15);
          font-size: 11.5px;
          font-weight: 700;
          color: #1a6fc4;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-family: 'Sora', sans-serif;
          margin-bottom: 14px;
        }
        .section-label::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1a6fc4, #17b8e0);
        }

        /* Deco ring */
        .deco-ring {
          position: absolute;
          border-radius: 50%;
          border: 1.5px dashed rgba(26,111,196,0.2);
          animation: rotateSlow 18s linear infinite;
        }

        /* Image frames */
        .img-stack {
          position: relative;
          width: 100%;
          max-width: 420px;
        }
        .img-main {
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 24px 65px rgba(26,111,196,0.22);
          position: relative;
          z-index: 2;
        }
        .img-accent {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 12px 35px rgba(26,111,196,0.18);
          position: absolute;
          z-index: 3;
          border: 3px solid white;
        }

        /* CTA */
        .cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 13px 28px;
          border-radius: 50px;
          font-family: 'Sora', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: white;
          background: linear-gradient(135deg, #1a6fc4, #17b8e0);
          box-shadow: 0 6px 22px rgba(26,111,196,0.35);
          transition: all 0.3s ease;
          text-decoration: none;
          border: none;
          cursor: pointer;
        }
        .cta-btn-primary:hover {
          box-shadow: 0 10px 30px rgba(26,111,196,0.5);
          transform: translateY(-2px);
        }
      `}</style>

      {/* ══════════════════════════════
          HERO BANNER
      ══════════════════════════════ */}
      <section
        className="relative overflow-hidden py-12 md:py-20 px-4"
        style={{ background: "linear-gradient(135deg, #1a6fc4 0%, #1e80d8 45%, #1a9fd4 80%, #17b8e0 100%)" }}
      >
        <div className="geo-ring" style={{ width: 380, height: 380, top: -120, right: -80, opacity: 0.15 }} />
        <div className="geo-ring" style={{ width: 220, height: 220, top: 30, right: 80, opacity: 0.09 }} />
        <div className="geo-ring" style={{ width: 500, height: 500, bottom: -220, left: -100, opacity: 0.07 }} />
        <div className="orb-float absolute top-10 right-1/3 w-28 h-28 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #7dd3fc, transparent)" }} />
        <div className="orb-float-2 absolute bottom-6 right-20 w-16 h-16 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #a5f3fc, transparent)" }} />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="fade-left">
            <p className="sora text-xs tracking-[0.2em] text-cyan-200 uppercase mb-3" style={{ fontWeight: 600 }}>
              Nexora Technology Services
            </p>
            <h1 className="sora text-4xl md:text-6xl text-white mb-5 leading-tight" style={{ fontWeight: 800 }}>
              We Build Technology<br />
              <span style={{ color: "#a5f3fc" }}>That Moves Business</span>
            </h1>
            {/* <p className="text-blue-100 text-lg max-w-lg leading-relaxed mb-8" style={{ opacity: 0.88 }}>
              Founded in 2012, Nexora has grown into a trusted technology partner for 500+ companies across 20+ countries.
            </p> */}
            {/* Quick Stats Row */}
            {/* <div className="flex gap-8 flex-wrap">
              {[["500+", "Projects"], ["12+", "Years"], ["50+", "Experts"], ["98%", "Satisfaction"]].map(([n, l], i) => (
                <div key={i} className="fade-up" style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
                  <p className="sora text-2xl text-cyan-200" style={{ fontWeight: 800 }}>{n}</p>
                  <p className="text-blue-200 text-xs uppercase tracking-widest" style={{ opacity: 0.75 }}>{l}</p>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          MISSION + IMAGE SPLIT
      ══════════════════════════════ */}
      <section className="w-full max-w-6xl mx-auto py-10 md:py-20 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left: Text */}
          <div className="fade-left">
            <div className="section-label">Who We Are</div>
            <h2 className="sora text-4xl font-800 text-[#1e3a5f] leading-tight mb-6" style={{ fontWeight: 800 }}>
              Empowering Businesses<br />
              <span style={{
                background: "linear-gradient(135deg, #1a6fc4, #17b8e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Through Innovation
              </span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              Nexora Technology Services is a full-spectrum IT solutions company headquartered in Bengaluru, India. We partner with businesses across industries to architect, build, and deploy transformative digital solutions.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              From enterprise ERP deployments and custom application development to cloud migrations and engineering services — our team brings deep expertise and a relentless commitment to delivering real business impact.
            </p>

            {/* Tab switcher */}
            <div
              className="flex gap-2 mb-6 p-1.5 rounded-full w-fit flex-wrap max-w-full"
              style={{ background: "#f0f6ff", border: "1px solid #dbe8f8" }}
            >
              {tabs.map((t, i) => (
                <button
                  key={i}
                  className={`tab-btn ${activeTab === i ? "active" : ""}`}
                  onClick={() => setActiveTab(i)}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="scale-in" key={activeTab}>
              {activeTab === 0 && (
                <p className="text-slate-600 leading-relaxed text-sm bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-100">
                  Our mission is to make enterprise-grade technology accessible to businesses of all sizes. We believe the right technology, thoughtfully implemented, can level the playing field and create extraordinary opportunities for growth.
                </p>
              )}
              {activeTab === 1 && (
                <p className="text-slate-600 leading-relaxed text-sm bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-100">
                  Started in a small office in Bengaluru with just 5 engineers, Nexora grew organically through word-of-mouth and repeat clients. Today we operate across three delivery centers and serve enterprise clients in North America, Europe, and Asia-Pacific.
                </p>
              )}
              {activeTab === 2 && (
                <p className="text-slate-600 leading-relaxed text-sm bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-100">
                  Our leadership team combines decades of experience from top-tier technology companies and consulting firms. Their diverse backgrounds in engineering, product, and business enable Nexora to take a truly holistic approach to every client engagement.
                </p>
              )}
            </div>

            <div className="mt-8">
              <Link href="/contact" className="cta-btn-primary">
                Work With Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: Stacked images */}
          <div className="fade-right flex justify-center overflow-hidden">
            <div className="img-stack">
              {/* Deco rings — hidden on mobile via globals.css .deco-ring rule */}
              <div className="deco-ring" style={{ width: 360, height: 360, top: -30, right: -30, zIndex: 0 }} />
              <div className="deco-ring" style={{ width: 180, height: 180, bottom: 60, left: -20, zIndex: 0, animationDirection: "reverse" }} />

              {/* Main image */}
              <div className="img-main">
                <Image src={img2} alt="About Nexora" width={420} height={480}
                  className="w-full object-cover" style={{ height: "420px" }} />
                <div className="absolute inset-0" style={{
                  background: "linear-gradient(180deg, transparent 55%, rgba(26,111,196,0.25) 100%)"
                }} />
              </div>

              {/* Accent image bottom-left */}
              <div className="img-accent" style={{ width: 160, height: 120, bottom: -24, left: -20 }}>
                <Image src={img3} alt="Team" width={160} height={120}
                  className="w-full h-full object-cover" />
              </div>

              {/* Floating badge top-right — hidden on mobile */}
              <div
                className="hidden md:block absolute z-10 bg-white rounded-2xl px-4 py-3 orb-float"
                style={{
                  top: 20, right: -20,
                  boxShadow: "0 10px 32px rgba(26,111,196,0.18)",
                  border: "1px solid rgba(26,111,196,0.12)",
                }}
              >
                <p className="sora text-xs text-[#1e3a5f]" style={{ fontWeight: 700 }}>ISO Certified</p>
                <p className="text-slate-400" style={{ fontSize: "10px" }}>9001:2015</p>
              </div>

              {/* Floating badge bottom-right — hidden on mobile */}
              <div
                className="hidden md:block absolute z-10 bg-white rounded-2xl px-4 py-3 orb-float-2"
                style={{
                  bottom: 80, right: -28,
                  boxShadow: "0 10px 32px rgba(26,111,196,0.18)",
                  border: "1px solid rgba(26,111,196,0.12)",
                }}
              >
                <div className="flex items-center gap-2">
                  <span style={{ fontSize: "18px" }}>🏆</span>
                  <div>
                    <p className="sora text-xs text-[#1e3a5f]" style={{ fontWeight: 700 }}>Top Rated</p>
                    <p className="text-slate-400" style={{ fontSize: "10px" }}>2024 Award</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          OUR VALUES — 6 GRID
      ══════════════════════════════ */}
      <section className="w-full py-10 md:py-20 px-4" style={{ background: "white" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-14 fade-up">
            <div className="section-label mx-auto w-fit">Core Values</div>
            <h2 className="sora text-4xl font-800 text-[#1e3a5f] mt-2" style={{ fontWeight: 800 }}>
              What We Stand For
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto mt-3 text-sm leading-relaxed">
              Our values aren't just words on a wall — they guide every decision, every line of code, and every client interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className={`value-card fade-up d${i + 1}`}
              >
                <div className="value-icon">
                  <span>{v.icon}</span>
                </div>
                <h3 className="sora text-base font-700 text-[#1e3a5f] mb-2" style={{ fontWeight: 700 }}>
                  {v.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          TIMELINE — OUR JOURNEY
      ══════════════════════════════ */}
      {/* <section className="w-full py-20 px-4" style={{ background: "#f4f8fd" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14 fade-up">
            <div className="section-label mx-auto w-fit">Our Journey</div>
            <h2 className="sora text-4xl font-800 text-[#1e3a5f] mt-2" style={{ fontWeight: 800 }}>
              12 Years of Growth
            </h2>
          </div>

          <div className="relative">
         
            <div className="hidden md:block timeline-line" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                 
                  <div className="flex-1">
                    <div className="timeline-card" style={{ animationDelay: `${i * 0.12}s` }}>
                      <div
                        className="sora text-xs font-700 mb-2 px-3 py-1 rounded-full w-fit"
                        style={{
                          fontWeight: 700,
                          background: "linear-gradient(135deg, rgba(26,111,196,0.08), rgba(23,184,224,0.08))",
                          color: "#1a6fc4",
                          border: "1px solid rgba(26,111,196,0.15)",
                        }}
                      >
                        {item.year}
                      </div>
                      <h4 className="sora text-base font-700 text-[#1e3a5f] mb-1" style={{ fontWeight: 700 }}>
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

            
                  <div className="hidden md:flex flex-col items-center mt-5 flex-shrink-0">
                    <div className="timeline-dot" />
                  </div>

              
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* ══════════════════════════════
          TEAM
      ══════════════════════════════ */}
      <section className="w-full py-10 md:py-20 px-4" style={{ background: "white" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-14 fade-up">
            <div className="section-label mx-auto w-fit">Leadership</div>
            <h2 className="sora text-4xl font-800 text-[#1e3a5f] mt-2" style={{ fontWeight: 800 }}>
              Meet the Team
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto mt-3 text-sm">
              The people behind Nexora's success — experienced, passionate, and driven to deliver.
            </p>
          </div>
<div className="flex flex-wrap justify-center gap-6">
  {team.map((m, i) => (
    <div key={i} className={`team-card fade-up d${i + 1} w-[260px]`}>
      <div className="team-avatar">{m.emoji}</div>
      <h4 className="sora text-sm font-700 text-[#1e3a5f] mb-1">
        {m.name}
      </h4>
      <p className="text-xs text-slate-400 uppercase tracking-wide">{m.role}</p>

      <div className="flex justify-center gap-2 mt-4">
        {["in", "tw"].map((s) => (
          <div
            key={s}
            className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold cursor-pointer hover:scale-110"
            style={{ background: "rgba(26,111,196,0.08)", color: "#1a6fc4" }}
          >
            {s}
          </div>
        ))}
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

      {/* ══════════════════════════════
          CTA BANNER
      ══════════════════════════════ */}
      <section
        className="w-full py-12 md:py-20 px-4 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a6fc4 0%, #1e80d8 50%, #17b8e0 100%)" }}
      >
        <div className="geo-ring" style={{ width: 400, height: 400, top: -150, right: -80, opacity: 0.12 }} />
        <div className="geo-ring" style={{ width: 250, height: 250, bottom: -80, left: -60, opacity: 0.09 }} />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="sora text-3xl md:text-4xl text-white mb-4 leading-tight" style={{ fontWeight: 800 }}>
            Ready to Start Your<br />Digital Journey?
          </h2>
          <p className="text-blue-100 mb-10 max-w-lg mx-auto leading-relaxed" style={{ opacity: 0.9 }}>
            Let's talk about how Nexora can help transform your business with technology that works.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="sora px-9 py-4 rounded-full text-sm font-700 text-[#1a6fc4] bg-white transition-all hover:shadow-2xl hover:scale-105"
              style={{ fontWeight: 700, boxShadow: "0 8px 28px rgba(0,0,0,0.14)" }}
            >
              Get In Touch
            </Link>
            <Link
              href="/"
              className="sora px-9 py-4 rounded-full text-sm font-700 text-white transition-all hover:bg-white/20"
              style={{
                fontWeight: 700,
                background: "rgba(255,255,255,0.12)",
                border: "1.5px solid rgba(255,255,255,0.4)",
              }}
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FOOTER
      ══════════════════════════════ */}
      <footer
        className="w-full py-8 px-4 text-center"
        style={{ background: "linear-gradient(135deg, #0a1e3d, #0f3460)", color: "rgba(255,255,255,0.5)", fontSize: "13px" }}
      >
        <p className="sora">© 2024 Nexora Technology Services Pvt. Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}