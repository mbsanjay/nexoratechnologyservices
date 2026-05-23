"use client";

import Image from "next/image";
import Link from "next/link";
import img1 from "@/app/Photo/img 1.jpg";
import img2 from "@/app/Photo/img 2.jpg";
import img3 from "@/app/Photo/img 3.jpg";

const highlights = [
  { icon: "📚", text: "Training Programs" },
  { icon: "🏆", text: "Certifications" },
  { icon: "🛠️", text: "Workshops" },
  { icon: "🚀", text: "Skill Enhancement" },
];

const pillars = [
  {
    icon: "🎯",
    title: "Technical Training",
    desc: "Helping employees stay updated with evolving technologies and industry trends through hands-on, role-relevant technical programmes.",
  },
  {
    icon: "👥",
    title: "Leadership Development",
    desc: "Developing confident, forward-thinking leaders who can inspire teams, drive strategy, and navigate change effectively.",
  },
  {
    icon: "💬",
    title: "Soft Skills",
    desc: "Building communication, collaboration, and problem-solving capabilities that strengthen team performance and workplace culture.",
  },
  {
    icon: "✅",
    title: "Compliance Programs",
    desc: "Ensuring employees are equipped with the knowledge required to meet regulatory, safety, and organizational compliance standards.",
  },
];

export default function LearningDevelopment() {
  return (
    <div className="min-h-screen bg-[#f4f8fd] flex flex-col">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');
        *, body { font-family: 'DM Sans', sans-serif; }
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
          50%      { transform: translate(5px,-8px); }
        }

        .fade-left  { animation: fadeLeft  0.75s ease both; }
        .fade-right { animation: fadeRight 0.75s ease both; }
        .fade-up    { animation: fadeUp    0.75s ease both; }

        .d1{animation-delay:0.05s} .d2{animation-delay:0.13s}
        .d3{animation-delay:0.21s} .d4{animation-delay:0.29s}

        .geo-ring {
          position: absolute; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
        }
        .deco-ring {
          position: absolute; border-radius: 50%;
          border: 1.5px dashed rgba(26,111,196,0.18);
          animation: rotateSlow 18s linear infinite;
        }
        .orb-float   { animation: float 6s ease-in-out infinite; }
        .orb-float-2 { animation: float 8s ease-in-out infinite reverse; }

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

        .dot-row { display: flex; align-items: center; gap: 6px; margin-bottom: 18px; }
        .dot-row span { width: 8px; height: 8px; border-radius: 50%; background: linear-gradient(135deg, #1a6fc4, #17b8e0); }
        .dot-row span:nth-child(2) { opacity: 0.5; }
        .dot-row span:nth-child(3) { opacity: 0.25; }

        /* Pillar cards */
        .pillar-card {
          background: white; border-radius: 22px;
          padding: 28px 24px; border: 1.5px solid #e8f0fb;
          transition: all 0.32s cubic-bezier(0.4,0,0.2,1);
          position: relative; overflow: hidden; height: 100%;
        }
        .pillar-card::after {
          content: ''; position: absolute;
          bottom: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #1a6fc4, #17b8e0);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s ease;
        }
        .pillar-card:hover::after { transform: scaleX(1); }
        .pillar-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 22px 60px rgba(26,111,196,0.14);
          border-color: rgba(26,111,196,0.2);
        }
        .pillar-icon {
          width: 54px; height: 54px; border-radius: 15px;
          background: linear-gradient(135deg, #eef4fd, #daeeff);
          display: flex; align-items: center; justify-content: center;
          font-size: 24px; margin-bottom: 16px;
          transition: transform 0.3s ease;
        }
        .pillar-card:hover .pillar-icon { transform: scale(1.1) rotate(-5deg); }

        /* Image stack */
        .img-main {
          border-radius: 22px; overflow: hidden;
          box-shadow: 0 24px 65px rgba(26,111,196,0.22);
          position: relative; z-index: 2;
        }
        .img-accent {
          border-radius: 16px; overflow: hidden;
          box-shadow: 0 12px 35px rgba(26,111,196,0.18);
          position: absolute; z-index: 3; border: 3px solid white;
        }
        .float-badge {
          position: absolute; background: white;
          border-radius: 14px; padding: 10px 16px;
          box-shadow: 0 8px 30px rgba(26,111,196,0.2);
          z-index: 4; border: 1px solid rgba(26,111,196,0.1);
          animation: diagonalFloat 4s ease-in-out infinite;
        }

        .cta-btn {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 13px 28px; border-radius: 50px;
          font-family: 'Sora', sans-serif; font-size: 14px; font-weight: 700;
          transition: all 0.3s ease; text-decoration: none; cursor: pointer; border: none;
        }

        /* Highlight chip */
        .highlight-chip {
          display: inline-flex; align-items: center; gap: 7px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 50px; padding: 7px 16px;
          font-size: 13px; color: white; font-weight: 600;
        }

        /* ═══════════════════
           MOBILE
        ═══════════════════ */
        @media (max-width: 767px) {
          .img-accent     { display: none !important; }
          .float-badge    { display: none !important; }
          .deco-ring      { display: none !important; }
          .img-stack-wrapper { min-height: 240px !important; }
          .img-main       { width: 100% !important; margin-top: 0 !important; height: 220px !important; }
        }
      `}</style>

      {/* ═══════════════════════════════
          HERO
      ═══════════════════════════════ */}
      <section
        className="relative overflow-hidden py-24 px-4"
        style={{ background: "linear-gradient(135deg, #1a6fc4 0%, #1e80d8 45%, #1a9fd4 80%, #17b8e0 100%)" }}
      >
        <div className="geo-ring" style={{ width: 440, height: 440, top: -140, right: -90, opacity: 0.15 }} />
        <div className="geo-ring" style={{ width: 240, height: 240, top: 40, right: 90, opacity: 0.09 }} />
        <div className="geo-ring" style={{ width: 560, height: 560, bottom: -260, left: -120, opacity: 0.07 }} />
        <div className="orb-float absolute top-10 right-1/3 w-28 h-28 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #7dd3fc, transparent)" }} />
        <div className="orb-float-2 absolute bottom-6 right-20 w-16 h-16 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #a5f3fc, transparent)" }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div>
              <p className="fade-left sora text-xs tracking-[0.22em] text-cyan-200 uppercase mb-3 d1" style={{ fontWeight: 600 }}>
                Nexora Technology Services Pvt Ltd
              </p>
              <h1 className="fade-left sora text-4xl md:text-5xl text-white mb-5 leading-tight d2" style={{ fontWeight: 800 }}>
                Learning &amp;<br />
                <span style={{ color: "#a5f3fc" }}>Development</span>
              </h1>
              <p className="fade-left text-blue-100 text-base leading-relaxed max-w-lg mb-8 d3" style={{ opacity: 0.9 }}>
                Enhancing employee skills, improving productivity, and driving organizational growth
                through continuous learning — training programs, workshops, certifications, and
                skill enhancement initiatives.
              </p>
              <div className="fade-up d4 flex flex-wrap gap-3">
                {highlights.map((h) => (
                  <span key={h.text} className="highlight-chip">
                    <span>{h.icon}</span> {h.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: stat blocks */}
            <div className="fade-right hidden lg:flex flex-col gap-4 d2">
              {[
                { icon: "📖", label: "Continuous Learning", value: "Foundation", sub: "of innovation & success" },
                { icon: "🌱", label: "Talent Nurtured", value: "Future-Ready", sub: "professionals developed" },
                { icon: "💡", label: "Competency Building", value: "End-to-End", sub: "L&D initiatives" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-4 rounded-2xl px-6 py-4"
                  style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", backdropFilter: "blur(10px)" }}>
                  <span className="text-3xl">{s.icon}</span>
                  <div className="flex-1">
                    <p className="text-blue-200 text-xs uppercase tracking-widest" style={{ opacity: 0.75 }}>{s.label}</p>
                    <p className="sora text-white text-base" style={{ fontWeight: 800 }}>{s.value}</p>
                  </div>
                  <p className="text-cyan-200 text-xs text-right max-w-[90px]" style={{ opacity: 0.7 }}>{s.sub}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          WHAT IS L&D — Para 1 + Images
      ═══════════════════════════════ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

          {/* Left: content */}
          <div className="flex-1 fade-left">
            <div className="section-label">Learning &amp; Development</div>
            <div className="dot-row"><span /><span /><span /></div>
            <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f] mb-5 leading-snug" style={{ fontWeight: 800 }}>
              Building Skills for<br />
              <span style={{ background: "linear-gradient(90deg,#1a6fc4,#17b8e0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Organizational Growth
              </span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-5">
              Learning and Development (L&D) plays a vital role in enhancing employee skills, improving
              productivity, and driving organizational growth. It focuses on continuous learning through
              training programs, workshops, certifications, and skill enhancement initiatives that help
              employees stay updated with evolving technologies and industry trends.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              An effective Learning and Development strategy empowers employees with the knowledge and
              capabilities required to perform efficiently, adapt to change, and achieve career growth.
              From technical training and leadership development to soft skills and compliance programs,
              L&D helps build a highly skilled and motivated workforce.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="cta-btn"
                style={{ background: "linear-gradient(135deg,#1a6fc4,#17b8e0)", color: "white", boxShadow: "0 6px 22px rgba(26,111,196,0.35)" }}>
                Get in Touch <span>→</span>
              </Link>
              <Link href="/about" className="cta-btn"
                style={{ color: "#1a6fc4", border: "2px solid rgba(26,111,196,0.25)", background: "transparent" }}>
                About Us
              </Link>
            </div>
          </div>

          {/* Right: images */}
          <div className="flex-1 fade-right relative flex justify-center img-stack-wrapper" style={{ minHeight: 460 }}>
            <div className="deco-ring" style={{ width: 380, height: 380, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
            <div className="deco-ring" style={{ width: 270, height: 270, top: "50%", left: "50%", transform: "translate(-50%,-50%)", animationDirection: "reverse", opacity: 0.55 }} />

            <div className="img-main" style={{ width: 360, height: 280, marginTop: 40 }}>
              <Image src={img1} alt="Learning and Development" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="img-accent" style={{ width: 190, height: 140, bottom: 10, left: "3%" }}>
              <Image src={img2} alt="Employee training" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="img-accent" style={{ width: 160, height: 118, top: 0, right: "2%" }}>
              <Image src={img3} alt="Skill development" fill style={{ objectFit: "cover" }} />
            </div>

            <div className="float-badge" style={{ bottom: 62, right: "5%", animationDelay: "1.2s" }}>
              <p className="sora text-xs font-bold text-[#1a6fc4] mb-0.5">Continuous Learning</p>
              <p className="text-slate-500 text-[11px]">Always Growing</p>
            </div>
            <div className="float-badge"
              style={{ top: 20, left: "5%", animationDelay: "0.6s", background: "linear-gradient(135deg,#1a6fc4,#17b8e0)" }}>
              <p className="sora text-xs font-bold text-white mb-0.5">Skilled Workforce</p>
              <p className="text-cyan-100 text-[11px]">Motivated & Ready</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          L&D PILLARS (Para 1 key points)
      ═══════════════════════════════ */}
      <section className="py-20 px-4 bg-[#f4f8fd]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 fade-up">
            <div className="section-label" style={{ margin: "0 auto 14px" }}>Our L&amp;D Focus</div>
            <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f]" style={{ fontWeight: 800 }}>
              What Our L&amp;D Covers
            </h2>
            <p className="text-slate-500 mt-3 text-sm max-w-xl mx-auto leading-relaxed">
              From technical training and leadership development to soft skills and compliance —
              building a highly skilled and motivated workforce.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <div key={p.title} className={`pillar-card fade-up d${i + 1}`}>
                <div className="pillar-icon">{p.icon}</div>
                <h3 className="sora text-base text-[#1e3a5f] mb-3 leading-snug" style={{ fontWeight: 700 }}>{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          NEXORA'S APPROACH — Para 3 + Second Images
      ═══════════════════════════════ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

          {/* Left: text */}
          <div className="flex-1 fade-left">
            <div className="section-label">Nexora&apos;s Approach</div>
            <div className="dot-row"><span /><span /><span /></div>
            <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f] mb-5 leading-snug" style={{ fontWeight: 800 }}>
              Nurturing Talent,<br />
              <span style={{ background: "linear-gradient(90deg,#1a6fc4,#17b8e0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Strengthening Competencies
              </span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-10">
              At Nexora Technology Services Pvt Ltd, we believe continuous learning is the foundation
              of innovation and business success. Our Learning and Development initiatives are designed
              to nurture talent, strengthen competencies, and create future-ready professionals who can
              contribute effectively to organizational excellence.
            </p>

            <div className="flex flex-col gap-5">
              {[
                { icon: "🌱", title: "Nurture Talent", desc: "Structured L&D programmes that identify potential and develop it into lasting capability." },
                { icon: "💪", title: "Strengthen Competencies", desc: "Targeted learning pathways that close skill gaps and build the competencies your business needs most." },
                { icon: "🔭", title: "Create Future-Ready Professionals", desc: "Empowering individuals with skills that keep pace with technology and market evolution." },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 rounded-2xl flex items-center justify-center text-xl"
                    style={{ width: 48, height: 48, background: "linear-gradient(135deg,#eef4fd,#daeeff)" }}>
                    {icon}
                  </div>
                  <div>
                    <p className="sora text-[#1e3a5f] font-bold text-sm mb-1">{title}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: images */}
          <div className="flex-1 fade-right relative flex justify-center img-stack-wrapper" style={{ minHeight: 420 }}>
            <div className="deco-ring" style={{ width: 340, height: 340, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

            <div className="img-main" style={{ width: 340, height: 260, marginTop: 50 }}>
              <Image src={img3} alt="Nexora L&D" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="img-accent" style={{ width: 175, height: 130, top: 0, right: "4%" }}>
              <Image src={img1} alt="Organizational excellence" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="img-accent" style={{ width: 155, height: 115, bottom: 20, left: "4%" }}>
              <Image src={img2} alt="Future-ready professionals" fill style={{ objectFit: "cover" }} />
            </div>

            <div className="float-badge" style={{ top: 14, left: "6%", animationDelay: "0.8s" }}>
              <p className="sora text-xs font-bold text-[#1a6fc4] mb-0.5">Innovation First</p>
              <p className="text-slate-500 text-[11px]">Continuous Learning</p>
            </div>
            <div className="float-badge"
              style={{ bottom: 30, right: "5%", animationDelay: "1.4s", background: "linear-gradient(135deg,#1a6fc4,#17b8e0)" }}>
              <p className="sora text-xs font-bold text-white mb-0.5">Org. Excellence</p>
              <p className="text-cyan-100 text-[11px]">Future-Ready Teams</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          CTA
      ═══════════════════════════════ */}
      <section
        className="py-20 px-4 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a1e3d 0%, #1a6fc4 60%, #17b8e0 100%)" }}
      >
        <div className="geo-ring" style={{ width: 300, height: 300, top: -100, right: -60, opacity: 0.12 }} />
        <div className="geo-ring" style={{ width: 200, height: 200, bottom: -80, left: -40, opacity: 0.09 }} />
        <div className="orb-float absolute top-8 left-1/4 w-24 h-24 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #7dd3fc, transparent)" }} />

        <div className="max-w-3xl mx-auto text-center relative z-10 fade-up">
          <p className="sora text-xs tracking-[0.22em] text-cyan-300 uppercase mb-3 font-semibold">
            Invest in Your People
          </p>
          <h2 className="sora text-3xl md:text-5xl text-white mb-5 leading-tight" style={{ fontWeight: 800 }}>
            Let&apos;s Build a<br />
            <span style={{ color: "#a5f3fc" }}>Future-Ready Workforce</span>
          </h2>
          <p className="text-blue-200 text-base leading-relaxed mb-10 max-w-xl mx-auto" style={{ opacity: 0.88 }}>
            Partner with Nexora to design and deliver Learning &amp; Development programmes that
            nurture talent, build competencies, and drive long-term organizational excellence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="cta-btn"
              style={{ color: "#1a6fc4", background: "white", boxShadow: "0 8px 28px rgba(0,0,0,0.2)" }}>
              Get in Touch <span>→</span>
            </Link>
            <Link href="/about" className="cta-btn text-white"
              style={{ background: "rgba(255,255,255,0.12)", border: "2px solid rgba(255,255,255,0.3)" }}>
              About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
