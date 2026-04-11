"use client";

import Image from "next/image";
import Link from "next/link";
import img2 from "@/app/Photo/img 2.jpg"; // Replace with your talent/team image later

export default function TalentAcquisition() {
  const capabilities = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "IT & Non-IT Recruitment",
      desc: "End-to-end recruitment across technology, operations, finance, and business roles — at every level.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Contract & Permanent Staffing",
      desc: "Flexible staffing models — short-term contracts, long-term engagements, or direct permanent placements.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "Executive Hiring",
      desc: "C-suite and senior leadership search using our exclusive executive network and discreet headhunting process.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Candidate Screening & Assessment",
      desc: "Multi-stage screening — technical assessments, psychometric profiling, and structured interviews for best-fit hiring.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      title: "Employer Branding Support",
      desc: "Build an employer brand that attracts top talent — EVP development, career page design, and candidate experience strategy.",
    },
  ];

  const whyItems = [
    { icon: "⚡", title: "Speed to Hire", desc: "Our average time-to-shortlist is 72 hours — so you never lose top candidates to competitors." },
    { icon: "🎯", title: "Precision Matching", desc: "Deep role understanding combined with AI-assisted screening delivers candidates who truly fit." },
    { icon: "🌐", title: "Wide Talent Network", desc: "Access to 50,000+ pre-vetted professionals across IT, engineering, finance, and more." },
    { icon: "🤝", title: "Long-Term Fit", desc: "We focus on retention — 92% of our placements stay beyond 12 months at client organisations." },
  ];

  const steps = [
    { n: "01", title: "Requirement Briefing", desc: "Deep-dive into your role, culture, team dynamics, and success criteria to define the ideal profile." },
    { n: "02", title: "Talent Sourcing", desc: "Multi-channel sourcing — job boards, LinkedIn, referrals, and our exclusive talent community." },
    { n: "03", title: "Screen & Shortlist", desc: "Rigorous multi-stage screening delivers a curated shortlist of 3–5 best-fit candidates." },
    { n: "04", title: "Hire & Onboard", desc: "Offer management, background verification, and structured onboarding support until day 90." },
  ];

  const techStack = [
    { label: "LinkedIn Recruiter", color: "#0077b5" },
    { label: "Naukri", color: "#ff7555" },
    { label: "Indeed", color: "#003a9b" },
    { label: "Greenhouse", color: "#24a47f" },
    { label: "Workday", color: "#0875e1" },
    { label: "HackerRank", color: "#00ea64" },
    { label: "Mercer", color: "#00a651" },
    { label: "SAP SuccessFactors", color: "#f0ab00" },
  ];

  const pipeline = [
    { stage: "Applied", count: 248, color: "#60a5fa", pct: 100 },
    { stage: "Screened", count: 142, color: "#34d399", pct: 57 },
    { stage: "Interview", count: 64, color: "#fbbf24", pct: 26 },
    { stage: "Shortlisted", count: 18, color: "#a78bfa", pct: 7 },
    { stage: "Hired", count: 6, color: "#22c55e", pct: 2 },
  ];

  const candidates = [
    { name: "Arjun Sharma", role: "Sr. React Developer", match: 97, status: "offer" },
    { name: "Priya Nair", role: "DevOps Engineer", match: 94, status: "interview" },
    { name: "Rahul Mehta", role: "Product Manager", match: 91, status: "screening" },
    { name: "Sneha Patel", role: "UX Designer", match: 89, status: "shortlisted" },
  ];

  const statusColors: Record<string, string> = {
    offer: "#22c55e",
    interview: "#3b82f6",
    screening: "#f59e0b",
    shortlisted: "#a78bfa",
  };

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
          to   { width: var(--w); }
        }
        @keyframes rowSlide {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes avatarPop {
          from { opacity: 0; transform: scale(0.8); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes pulseDot {
          0%,100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
          50%      { box-shadow: 0 0 0 7px rgba(34,197,94,0); }
        }
        @keyframes matchCount {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
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

        /* Talent Dashboard Panel */
        .talent-panel {
          background: #0d1117;
          border-radius: 24px; padding: 22px;
          box-shadow: 0 30px 80px rgba(0,0,0,0.35);
          border: 1px solid rgba(255,255,255,0.07);
        }

        /* Pipeline bar */
        .pipeline-track {
          height: 6px; border-radius: 3px;
          background: rgba(255,255,255,0.07); flex: 1;
          overflow: hidden;
        }
        .pipeline-fill {
          height: 100%; border-radius: 3px;
          animation: progressFill 1.4s ease both;
        }

        /* Candidate row */
        .candidate-row {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 12px; border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.2s ease;
          animation: rowSlide 0.5s ease both;
        }
        .candidate-row:hover {
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.1);
          transform: translateX(3px);
        }
        .avatar-circle {
          width: 34px; height: 34px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Sora', sans-serif; font-weight: 700;
          font-size: 12px; color: white; flex-shrink: 0;
          animation: avatarPop 0.5s ease both;
        }
        .match-bar-track {
          width: 60px; height: 4px; border-radius: 2px;
          background: rgba(255,255,255,0.08); overflow: hidden;
        }
        .match-bar-fill {
          height: 100%; border-radius: 2px;
          background: linear-gradient(90deg, #1a6fc4, #17b8e0);
          animation: progressFill 1.2s ease both;
        }
        .status-badge {
          padding: 3px 8px; border-radius: 20px;
          font-size: 9px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.06em;
          font-family: 'Sora', sans-serif;
        }

        /* Active dot */
        .live-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #22c55e;
          animation: pulseDot 2s ease-in-out infinite;
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
                Hire the Right Talent,<br />
                <span style={{ color: "#a5f3fc" }}>Faster</span>
              </h1>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
                style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}>
                <svg className="w-4 h-4 text-cyan-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="sora text-xs text-cyan-100 uppercase tracking-widest" style={{ fontWeight: 700 }}>
                  Talent Acquisition
                </span>
              </div>

              <p className="text-blue-100 text-base leading-relaxed max-w-lg mb-8" style={{ opacity: 0.9 }}>
                Finding the right talent is critical to business success. Nexora helps you identify, attract, and onboard top professionals aligned with your goals — quickly and efficiently.
              </p>

              <div className="flex gap-4 flex-wrap">
                <Link href="/contact" className="cta-btn"
                  style={{ background: "white", color: "#1a6fc4", boxShadow: "0 8px 28px rgba(0,0,0,0.15)" }}>
                  Build Your Dream Team
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link href="/contact" className="cta-btn text-white hover:bg-white/15"
                  style={{ background: "rgba(255,255,255,0.12)", border: "1.5px solid rgba(255,255,255,0.45)" }}>
                  Post a Role
                </Link>
              </div>
            </div>

            {/* Right: Talent Pipeline Dashboard */}
            <div className="fade-right hidden lg:block">
              <div className="talent-panel">

                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400 opacity-70" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-70" />
                      <div className="w-3 h-3 rounded-full bg-green-400 opacity-70" />
                    </div>
                    <span className="text-slate-500 text-xs ml-2">talent-pipeline.nexora</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full"
                    style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)" }}>
                    <div className="live-dot" />
                    <span className="text-green-400 text-xs font-semibold">6 Active Roles</span>
                  </div>
                </div>

                {/* Summary chips */}
                <div className="grid grid-cols-4 gap-2 mb-5">
                  {[
                    { label: "Pipeline", value: "248", color: "#60a5fa" },
                    { label: "Screened", value: "142", color: "#34d399" },
                    { label: "Shortlisted", value: "18", color: "#a78bfa" },
                    { label: "Placed", value: "6", color: "#22c55e" },
                  ].map((s, i) => (
                    <div key={i} className="text-center py-3 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${s.color}22` }}>
                      <p className="sora font-800 mb-0.5" style={{ color: s.color, fontWeight: 800, fontSize: "17px" }}>
                        {s.value}
                      </p>
                      <p className="text-slate-500" style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Pipeline funnel */}
                <div className="mb-5">
                  <p className="text-slate-500 text-xs uppercase tracking-widest mb-3" style={{ fontWeight: 600 }}>
                    Hiring Funnel
                  </p>
                  <div className="space-y-2">
                    {pipeline.map((p, i) => (
                      <div key={i} className="flex items-center gap-3"
                        style={{ animationDelay: `${i * 0.1}s` }}>
                        <span className="text-slate-400 flex-shrink-0" style={{ fontSize: "11px", width: "68px" }}>
                          {p.stage}
                        </span>
                        <div className="pipeline-track">
                          <div className="pipeline-fill"
                            style={{ "--w": `${p.pct}%`, width: `${p.pct}%`, background: p.color, animationDelay: `${i * 0.12}s` } as React.CSSProperties} />
                        </div>
                        <span className="flex-shrink-0 text-xs font-semibold" style={{ color: p.color, width: "28px", textAlign: "right" }}>
                          {p.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="mb-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />

                {/* Top candidates */}
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-widest mb-3" style={{ fontWeight: 600 }}>
                    Top Candidates
                  </p>
                  <div className="space-y-2">
                    {candidates.map((c, i) => (
                      <div key={i} className="candidate-row" style={{ animationDelay: `${i * 0.1}s` }}>
                        <div className="avatar-circle"
                          style={{ background: `linear-gradient(135deg, ${["#1a6fc4","#0891b2","#7c3aed","#059669"][i]}, ${["#17b8e0","#22d3ee","#a78bfa","#34d399"][i]})`, animationDelay: `${i * 0.1}s` }}>
                          {c.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white font-semibold truncate" style={{ fontSize: "11.5px" }}>{c.name}</p>
                          <p className="text-slate-500 truncate" style={{ fontSize: "10px" }}>{c.role}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1.5">
                          <div className="flex items-center gap-1.5">
                            <span className="text-cyan-400" style={{ fontSize: "10px", fontWeight: 700 }}>{c.match}%</span>
                            <div className="match-bar-track">
                              <div className="match-bar-fill"
                                style={{ "--w": `${c.match}%`, width: `${c.match}%`, animationDelay: `${i * 0.15}s` } as React.CSSProperties} />
                            </div>
                          </div>
                          <span className="status-badge"
                            style={{ background: statusColors[c.status] + "20", color: statusColors[c.status] }}>
                            {c.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4 pt-3"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-md flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, #1a6fc4, #17b8e0)" }}>
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <span className="text-slate-500" style={{ fontSize: "11px" }}>72hr avg. shortlist</span>
                  </div>
                  <span className="text-cyan-500 text-xs font-semibold">Nexora Talent ✓</span>
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
                  src={img2}
                  alt="Talent Acquisition at Nexora"
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
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197" />
                    </svg>
                  </div>
                  <div>
                    <p className="sora text-xs text-[#1e3a5f]" style={{ fontWeight: 700, lineHeight: 1.2 }}>50,000+</p>
                    <p className="text-slate-400" style={{ fontSize: "10px" }}>Talent Network</p>
                  </div>
                </div>
              </div>

              {/* Badge bottom-left */}
              <div className="float-badge" style={{ bottom: 40, left: -20, animationDelay: "2s" }}>
                <div className="flex items-center gap-2">
                  <span style={{ fontSize: "20px" }}>⚡</span>
                  <div>
                    <p className="sora text-xs text-[#1e3a5f]" style={{ fontWeight: 700, lineHeight: 1.2 }}>72hr Shortlist</p>
                    <p className="text-slate-400" style={{ fontSize: "10px" }}>Avg. time-to-list</p>
                  </div>
                </div>
              </div>

              {/* Stat row */}
              <div className="flex gap-3 mt-5 justify-center">
                {[{ n: "92%", l: "Retention" }, { n: "72h", l: "Shortlist" }, { n: "500+", l: "Placed" }].map((s, i) => (
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
              End-to-End<br />
              <span style={{
                background: "linear-gradient(135deg, #1a6fc4, #17b8e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Talent Solutions
              </span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8 text-sm">
              From sourcing to onboarding — Nexora covers every stage of the hiring journey with industry expertise, a vast talent network, and a quality-first approach.
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
              Recruitment That{" "}
              <span style={{
                background: "linear-gradient(135deg, #1a6fc4, #17b8e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Delivers</span>
            </h2>
            <p className="text-slate-500 mt-3 text-sm max-w-lg mx-auto leading-relaxed">
              We combine industry expertise with a strong talent network to deliver quality candidates quickly and efficiently.
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
              From Brief to{" "}
              <span style={{
                background: "linear-gradient(135deg, #1a6fc4, #17b8e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Day One</span>
            </h2>
            <p className="text-slate-500 mt-3 text-sm max-w-lg mx-auto">
              A structured four-step process that delivers the right hire — fast.
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
          TOOLS
      ══════════════════════════════ */}
      <section className="w-full py-20 px-4" style={{ background: "#f4f8fd" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-up">
            <div className="section-label mx-auto w-fit">Recruitment Tools</div>
            <h2 className="sora text-4xl text-[#1e3a5f] mb-4" style={{ fontWeight: 800 }}>
              Platforms &amp;{" "}
              <span style={{
                background: "linear-gradient(135deg, #1a6fc4, #17b8e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Tools We Use</span>
            </h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto mb-10">
              Industry-leading recruitment platforms and assessment tools for precision hiring.
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
            <span style={{ fontSize: "16px" }}>👥</span>
            <span className="sora text-xs text-white uppercase tracking-widest" style={{ fontWeight: 700 }}>
              Build Your Dream Team
            </span>
          </div>
          <h2 className="sora text-3xl md:text-4xl text-white mb-4 leading-tight" style={{ fontWeight: 800 }}>
            Ready to Find Your<br />
            <span style={{ color: "#a5f3fc" }}>Next Star Hire?</span>
          </h2>
          <p className="text-blue-100 mb-10 max-w-lg mx-auto text-sm leading-relaxed" style={{ opacity: 0.9 }}>
            Build your dream team with Nexora. Share your requirement today and receive a curated shortlist of top candidates within 72 hours — guaranteed.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact"
              className="cta-btn text-[#1a6fc4] bg-white hover:shadow-2xl hover:scale-105 transition-all"
              style={{ boxShadow: "0 8px 28px rgba(0,0,0,0.14)" }}>
              Post a Role Now
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