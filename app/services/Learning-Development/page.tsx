"use client";

import Image from "next/image";
import Link from "next/link";
import img3 from "@/app/Photo/img 3.jpg"; // Replace with your L&D image later

export default function LearningDevelopment() {
  const capabilities = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Corporate Training Programs",
      desc: "Structured learning journeys tailored to your organisation's goals, culture, and industry requirements.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Technical Skill Development",
      desc: "Hands-on training in emerging technologies — cloud, DevOps, data science, AI, and modern software engineering.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Soft Skills & Leadership Training",
      desc: "Build confident communicators, collaborative teams, and future-ready leaders through evidence-based programmes.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      title: "Customized Learning Paths",
      desc: "Personalised curricula mapped to individual roles, skill gaps, and career trajectories within your organisation.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
      title: "Workshops & Bootcamps",
      desc: "Intensive short-format programs delivering maximum skill uplift in minimum time — online or on-site.",
    },
  ];

  const whyItems = [
    { icon: "🎯", title: "Practical & Hands-On", desc: "Real-world projects, case studies, and simulations ensure learning that actually sticks and transfers to work." },
    { icon: "📊", title: "Measurable Results", desc: "Pre/post assessments, skill gap analytics, and ROI reporting give visibility into every training investment." },
    { icon: "🧩", title: "Fully Customised", desc: "No off-the-shelf content. Every programme is built around your industry, tools, and team's actual challenges." },
    { icon: "🚀", title: "Future-Ready Focus", desc: "We keep curricula current with market trends — AI, cloud, leadership, and beyond — so your team is always ahead." },
  ];

  const steps = [
    { n: "01", title: "Needs Assessment", desc: "Skill gap analysis, role mapping, and learning goal definition aligned to your business objectives." },
    { n: "02", title: "Programme Design", desc: "Custom curriculum, learning materials, assessments, and delivery format built from scratch for your team." },
    { n: "03", title: "Delivery & Coaching", desc: "Expert-led sessions — in-person, virtual, or blended — with real-world exercises and peer collaboration." },
    { n: "04", title: "Measure & Improve", desc: "Post-training assessments, feedback loops, and performance tracking to measure and maximise impact." },
  ];

  const tools = [
    { label: "Moodle LMS", color: "#f98012" },
    { label: "Coursera for Business", color: "#0056d2" },
    { label: "Udemy Business", color: "#a435f0" },
    { label: "MS Teams", color: "#6264a7" },
    { label: "Zoom", color: "#2d8cff" },
    { label: "Kahoot", color: "#46178f" },
    { label: "Google Workspace", color: "#4285f4" },
    { label: "Slack", color: "#4a154b" },
  ];

  const courses = [
    { title: "Cloud Architecture Fundamentals", category: "Technical", progress: 78, students: 24, color: "#3b82f6" },
    { title: "Agile Leadership", category: "Leadership", progress: 91, students: 18, color: "#8b5cf6" },
    { title: "Python for Data Science", category: "Technical", progress: 55, students: 32, color: "#06b6d4" },
    { title: "Communication Mastery", category: "Soft Skills", progress: 100, students: 41, color: "#22c55e" },
    { title: "DevOps & CI/CD", category: "Technical", progress: 42, students: 15, color: "#f59e0b" },
  ];

  const learners = [
    { initials: "AS", grade: "A+", color: "#1a6fc4" },
    { initials: "PM", grade: "A", color: "#0891b2" },
    { initials: "RK", grade: "B+", color: "#7c3aed" },
    { initials: "DN", grade: "A+", color: "#059669" },
  ];

  const categoryColors: Record<string, string> = {
    Technical: "#3b82f6",
    Leadership: "#8b5cf6",
    "Soft Skills": "#22c55e",
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
          from { opacity: 0; transform: translateX(-10px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes pulseStar {
          0%,100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.7; transform: scale(1.15); }
        }
        @keyframes gradientShift {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        @keyframes xpBar {
          from { width: 0; }
          to   { width: 65%; }
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

        /* LMS Dashboard panel */
        .lms-panel {
          background: #0d1117;
          border-radius: 24px; padding: 22px;
          box-shadow: 0 30px 80px rgba(0,0,0,0.35);
          border: 1px solid rgba(255,255,255,0.07);
        }

        /* Course row */
        .course-row {
          padding: 11px 13px; border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.2s ease;
          animation: rowSlide 0.5s ease both;
          cursor: default;
        }
        .course-row:hover {
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.1);
          transform: translateX(3px);
        }

        /* Progress track */
        .prog-track {
          height: 5px; border-radius: 3px;
          background: rgba(255,255,255,0.07); overflow: hidden;
        }
        .prog-fill {
          height: 100%; border-radius: 3px;
          animation: progressFill 1.4s ease both;
        }

        /* XP bar */
        .xp-track {
          height: 8px; border-radius: 4px;
          background: rgba(255,255,255,0.07); overflow: hidden; flex: 1;
        }
        .xp-fill {
          height: 100%; border-radius: 4px;
          background: linear-gradient(90deg, #1a6fc4, #17b8e0, #a78bfa);
          background-size: 200% auto;
          animation: xpBar 2s ease both, gradientShift 3s linear infinite;
        }

        /* Learner avatar */
        .learner-av {
          width: 32px; height: 32px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Sora', sans-serif; font-weight: 700;
          font-size: 11px; color: white; flex-shrink: 0;
          animation: popIn 0.5s ease both;
        }
        .grade-badge {
          padding: 2px 7px; border-radius: 20px;
          font-family: 'Sora', sans-serif; font-size: 9px; font-weight: 800;
          text-transform: uppercase;
        }
        .star-pulse { animation: pulseStar 2s ease-in-out infinite; }

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

        /* Tool pill */
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

        /* Impact counter card */
        .impact-card {
          background: white; border-radius: 18px;
          padding: 24px 20px; border: 1.5px solid #e8f0fb;
          text-align: center; transition: all 0.3s ease;
        }
        .impact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 40px rgba(26,111,196,0.12);
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
                Empower Your Workforce<br />
                <span style={{ color: "#a5f3fc" }}>to Grow</span>
              </h1>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
                style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}>
                <svg className="w-4 h-4 text-cyan-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="sora text-xs text-cyan-100 uppercase tracking-widest" style={{ fontWeight: 700 }}>
                  Learning &amp; Development
                </span>
              </div>

              <p className="text-blue-100 text-base leading-relaxed max-w-lg mb-8" style={{ opacity: 0.9 }}>
                We help organizations upskill their teams with industry-relevant training programs designed to enhance productivity and future readiness — through practical, hands-on learning.
              </p>

              <div className="flex gap-4 flex-wrap">
                <Link href="/contact" className="cta-btn"
                  style={{ background: "white", color: "#1a6fc4", boxShadow: "0 8px 28px rgba(0,0,0,0.15)" }}>
                  Unlock Your Team's Potential
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link href="/contact" className="cta-btn text-white hover:bg-white/15"
                  style={{ background: "rgba(255,255,255,0.12)", border: "1.5px solid rgba(255,255,255,0.45)" }}>
                  View Programmes
                </Link>
              </div>
            </div>

            {/* Right: LMS Dashboard */}
            <div className="fade-right hidden lg:block">
              <div className="lms-panel">

                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400 opacity-70" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-70" />
                      <div className="w-3 h-3 rounded-full bg-green-400 opacity-70" />
                    </div>
                    <span className="text-slate-500 text-xs ml-2">nexora-lms.platform</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full"
                    style={{ background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.25)" }}>
                    <span className="text-lg star-pulse">🎓</span>
                    <span className="text-purple-300 text-xs font-semibold">130 Learners Active</span>
                  </div>
                </div>

                {/* XP / Level strip */}
                <div className="mb-5 p-3 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm"
                        style={{ background: "linear-gradient(135deg, #1a6fc4, #17b8e0)" }}>⭐</div>
                      <div>
                        <p className="sora text-white" style={{ fontWeight: 700, fontSize: "12px" }}>Team Level 4</p>
                        <p className="text-slate-500" style={{ fontSize: "9px" }}>1,240 / 2,000 XP to Level 5</p>
                      </div>
                    </div>
                    <span className="sora text-cyan-400" style={{ fontWeight: 800, fontSize: "13px" }}>62%</span>
                  </div>
                  <div className="xp-track">
                    <div className="xp-fill" />
                  </div>
                </div>

                {/* Summary chips */}
                <div className="grid grid-cols-4 gap-2 mb-5">
                  {[
                    { label: "Courses", value: "24", color: "#60a5fa" },
                    { label: "Enrolled", value: "130", color: "#34d399" },
                    { label: "Completed", value: "89", color: "#a78bfa" },
                    { label: "Certified", value: "61", color: "#fbbf24" },
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

                {/* Active courses */}
                <p className="text-slate-500 text-xs uppercase tracking-widest mb-3" style={{ fontWeight: 600 }}>
                  Active Programmes
                </p>
                <div className="space-y-2 mb-5">
                  {courses.map((c, i) => (
                    <div key={i} className="course-row" style={{ animationDelay: `${i * 0.09}s` }}>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-white font-semibold truncate" style={{ fontSize: "11.5px" }}>{c.title}</span>
                          <span className="px-2 py-0.5 rounded-full flex-shrink-0"
                            style={{ background: (categoryColors[c.category] || "#60a5fa") + "20", color: categoryColors[c.category] || "#60a5fa", fontSize: "9px", fontWeight: 700 }}>
                            {c.category}
                          </span>
                        </div>
                        <span className="flex-shrink-0 text-xs font-semibold ml-2"
                          style={{ color: c.progress === 100 ? "#22c55e" : "#94a3b8" }}>
                          {c.progress}%
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="prog-track flex-1">
                          <div className="prog-fill"
                            style={{ "--w": `${c.progress}%`, width: `${c.progress}%`, background: c.progress === 100 ? "#22c55e" : c.color, animationDelay: `${i * 0.12}s` } as React.CSSProperties} />
                        </div>
                        <span className="text-slate-600 flex-shrink-0" style={{ fontSize: "9px" }}>
                          👥 {c.students}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Top learners */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="text-slate-500" style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>
                      Top Learners
                    </p>
                    <div className="flex -space-x-2">
                      {learners.map((l, i) => (
                        <div key={i} className="learner-av" style={{ background: l.color, animationDelay: `${i * 0.08}s`, border: "2px solid #0d1117" }}>
                          {l.initials}
                        </div>
                      ))}
                    </div>
                  </div>
                  <span className="text-cyan-500 text-xs font-semibold">Nexora L&amp;D ✓</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          IMPACT COUNTERS
      ══════════════════════════════ */}
      <section className="w-full py-6 px-4"
        style={{ background: "linear-gradient(135deg, #1a6fc4 0%, #1e80d8 60%, #17b8e0 100%)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { n: "5,000+", l: "Learners Trained" },
            { n: "95%", l: "Satisfaction Rate" },
            { n: "80+", l: "Programmes Delivered" },
            { n: "3x", l: "Productivity Uplift" },
          ].map((s, i) => (
            <div key={i} className="text-center text-white py-2"
              style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.2)" : "none" }}>
              <p className="sora text-2xl md:text-3xl text-cyan-200" style={{ fontWeight: 800 }}>{s.n}</p>
              <p className="text-xs text-blue-100 uppercase tracking-widest mt-1" style={{ opacity: 0.85 }}>{s.l}</p>
            </div>
          ))}
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
                  src={img3}
                  alt="Learning & Development at Nexora"
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
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <p className="sora text-xs text-[#1e3a5f]" style={{ fontWeight: 700, lineHeight: 1.2 }}>5,000+</p>
                    <p className="text-slate-400" style={{ fontSize: "10px" }}>Learners Trained</p>
                  </div>
                </div>
              </div>

              {/* Badge bottom-left */}
              <div className="float-badge" style={{ bottom: 40, left: -20, animationDelay: "2s" }}>
                <div className="flex items-center gap-2">
                  <span style={{ fontSize: "20px" }}>🏆</span>
                  <div>
                    <p className="sora text-xs text-[#1e3a5f]" style={{ fontWeight: 700, lineHeight: 1.2 }}>95% Satisfaction</p>
                    <p className="text-slate-400" style={{ fontSize: "10px" }}>Programme rating</p>
                  </div>
                </div>
              </div>

              {/* Stat row */}
              <div className="flex gap-3 mt-5 justify-center">
                {[{ n: "80+", l: "Programmes" }, { n: "3x", l: "Productivity" }, { n: "100%", l: "Hands-On" }].map((s, i) => (
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
              Learning That<br />
              <span style={{
                background: "linear-gradient(135deg, #1a6fc4, #17b8e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Drives Results
              </span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8 text-sm">
              From technical upskilling to leadership development — Nexora designs and delivers learning experiences that create real, measurable impact for your organisation.
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
              Training That{" "}
              <span style={{
                background: "linear-gradient(135deg, #1a6fc4, #17b8e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Actually Works</span>
            </h2>
            <p className="text-slate-500 mt-3 text-sm max-w-lg mx-auto leading-relaxed">
              Our practical, hands-on training approach ensures real-world learning that drives measurable results.
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
              From Gap to{" "}
              <span style={{
                background: "linear-gradient(135deg, #1a6fc4, #17b8e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Growth</span>
            </h2>
            <p className="text-slate-500 mt-3 text-sm max-w-lg mx-auto">
              A proven four-step learning design process that maximises skill transfer and business impact.
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
          TOOLS & PLATFORMS
      ══════════════════════════════ */}
      <section className="w-full py-20 px-4" style={{ background: "#f4f8fd" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-up">
            <div className="section-label mx-auto w-fit">Learning Tools</div>
            <h2 className="sora text-4xl text-[#1e3a5f] mb-4" style={{ fontWeight: 800 }}>
              Platforms &amp;{" "}
              <span style={{
                background: "linear-gradient(135deg, #1a6fc4, #17b8e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Tools We Use</span>
            </h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto mb-10">
              Best-in-class LMS platforms, collaboration tools, and assessment engines for effective learning delivery.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((t, i) => (
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
            <span style={{ fontSize: "16px" }}>📚</span>
            <span className="sora text-xs text-white uppercase tracking-widest" style={{ fontWeight: 700 }}>
              Invest in Your People
            </span>
          </div>
          <h2 className="sora text-3xl md:text-4xl text-white mb-4 leading-tight" style={{ fontWeight: 800 }}>
            Ready to Unlock Your<br />
            <span style={{ color: "#a5f3fc" }}>Team's Full Potential?</span>
          </h2>
          <p className="text-blue-100 mb-10 max-w-lg mx-auto text-sm leading-relaxed" style={{ opacity: 0.9 }}>
            Invest in your people. Unlock their potential. Talk to our L&amp;D consultants today and get a free skills gap assessment for your team.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact"
              className="cta-btn text-[#1a6fc4] bg-white hover:shadow-2xl hover:scale-105 transition-all"
              style={{ boxShadow: "0 8px 28px rgba(0,0,0,0.14)" }}>
              Get Free Skills Assessment
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link href="/contact"
              className="cta-btn text-white hover:bg-white/20 transition-all"
              style={{ background: "rgba(255,255,255,0.12)", border: "1.5px solid rgba(255,255,255,0.4)" }}>
              View Programmes
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