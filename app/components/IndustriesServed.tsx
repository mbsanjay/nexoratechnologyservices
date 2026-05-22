"use client";

import Image from "next/image";
import Link from "next/link";
import img1 from "@/app/Photo/img 1.jpg";
import img2 from "@/app/Photo/img 2.jpg";
import img3 from "@/app/Photo/img 3.jpg";

const industries = [
  {
    icon: "🏦",
    title: "Banking & Financial Services",
    badge: "BFSI",
    desc: "Delivering secure, compliant, and scalable technology solutions for banks, insurance providers, and financial institutions.",
  },
  {
    icon: "🏭",
    title: "Manufacturing",
    badge: null,
    desc: "Streamlining production, inventory, supply chain, and operations through integrated ERP and automation solutions.",
  },
  {
    icon: "🛒",
    title: "Retail & E-Commerce",
    badge: null,
    desc: "Empowering retailers and online businesses with unified commerce platforms, analytics, and customer experience solutions.",
  },
  {
    icon: "💻",
    title: "Hi Tech and Media",
    badge: null,
    desc: "Supporting technology companies and media organizations with agile development, data insights, and digital transformation.",
  },
  {
    icon: "⚡",
    title: "Energy & Utilities",
    badge: null,
    desc: "Driving efficiency and compliance in energy production, distribution, and utility management through smart technology.",
  },
  {
    icon: "🚚",
    title: "Logistics & Supply Chain",
    badge: null,
    desc: "Optimizing end-to-end logistics operations, fleet management, and supply chain visibility with real-time data solutions.",
  },
  {
    icon: "✈️",
    title: "Airways IT Services",
    badge: null,
    desc: "Providing specialized IT services for the aviation sector including operations management, passenger systems, and compliance tools.",
  },
];

export default function IndustriesServed() {
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
        @keyframes pulseGlow {
          0%,100% { box-shadow: 0 0 0 0 rgba(26,111,196,0.3); }
          50%      { box-shadow: 0 0 0 10px rgba(26,111,196,0); }
        }

        .fade-left  { animation: fadeLeft  0.75s ease both; }
        .fade-right { animation: fadeRight 0.75s ease both; }
        .fade-up    { animation: fadeUp    0.75s ease both; }

        .d1{animation-delay:0.05s} .d2{animation-delay:0.13s}
        .d3{animation-delay:0.21s} .d4{animation-delay:0.29s}
        .d5{animation-delay:0.37s} .d6{animation-delay:0.45s}
        .d7{animation-delay:0.53s}

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

        /* Industry card */
        .industry-card {
          background: white;
          border-radius: 22px;
          padding: 30px 26px;
          border: 1.5px solid #e8f0fb;
          transition: all 0.32s cubic-bezier(0.4,0,0.2,1);
          position: relative;
          overflow: hidden;
          height: 100%;
          cursor: default;
        }
        .industry-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(26,111,196,0.04), rgba(23,184,224,0.04));
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .industry-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #1a6fc4, #17b8e0);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }
        .industry-card:hover::before { opacity: 1; }
        .industry-card:hover::after  { transform: scaleX(1); }
        .industry-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 65px rgba(26,111,196,0.15);
          border-color: rgba(26,111,196,0.22);
        }

        .industry-icon {
          width: 64px; height: 64px; border-radius: 18px;
          background: linear-gradient(135deg, #eef4fd, #daeeff);
          display: flex; align-items: center; justify-content: center;
          font-size: 30px; margin-bottom: 18px;
          transition: transform 0.3s ease;
          position: relative; z-index: 1;
        }
        .industry-card:hover .industry-icon {
          transform: scale(1.12) rotate(-5deg);
          background: linear-gradient(135deg, #1a6fc4, #17b8e0);
        }

        .industry-badge {
          display: inline-block;
          padding: 2px 10px; border-radius: 50px;
          background: linear-gradient(135deg, rgba(26,111,196,0.1), rgba(23,184,224,0.1));
          border: 1px solid rgba(26,111,196,0.18);
          font-size: 10px; font-weight: 700; color: #1a6fc4;
          letter-spacing: 0.08em; text-transform: uppercase;
          font-family: 'Sora', sans-serif;
          margin-bottom: 6px;
        }

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
                Industries<br />
                <span style={{ color: "#a5f3fc" }}>We Serve</span>
              </h1>
              <p className="fade-left text-blue-100 text-base leading-relaxed max-w-lg mb-8 d3" style={{ opacity: 0.9 }}>
                Nexora brings deep domain expertise across seven key industries — delivering
                technology solutions that are tailored to the unique challenges, regulations,
                and growth opportunities of each sector.
              </p>
              <div className="fade-up d4 flex flex-wrap gap-4">
                <Link href="/contact" className="cta-btn"
                  style={{ background: "white", color: "#1a6fc4", boxShadow: "0 8px 28px rgba(0,0,0,0.15)" }}>
                  Work With Us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link href="/contact" className="cta-btn text-white"
                  style={{ background: "rgba(255,255,255,0.12)", border: "1.5px solid rgba(255,255,255,0.4)" }}>
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right: count + industry icons strip */}
            <div className="fade-right hidden lg:block d2">
              <div className="grid grid-cols-4 gap-3 mb-4">
                {industries.slice(0, 4).map((ind, i) => (
                  <div key={i}
                    className="flex flex-col items-center justify-center gap-2 rounded-2xl py-4 px-2"
                    style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)" }}>
                    <span className="text-3xl">{ind.icon}</span>
                    <p className="sora text-white text-center leading-tight" style={{ fontSize: "10px", fontWeight: 700 }}>
                      {ind.title.split(" ").slice(0, 2).join(" ")}
                    </p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {industries.slice(4).map((ind, i) => (
                  <div key={i}
                    className="flex flex-col items-center justify-center gap-2 rounded-2xl py-4 px-2"
                    style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)" }}>
                    <span className="text-3xl">{ind.icon}</span>
                    <p className="sora text-white text-center leading-tight" style={{ fontSize: "10px", fontWeight: 700 }}>
                      {ind.title.split(" ").slice(0, 2).join(" ")}
                    </p>
                  </div>
                ))}
                {/* stat tile */}
                <div className="flex flex-col items-center justify-center gap-1 rounded-2xl py-4 px-2"
                  style={{ background: "linear-gradient(135deg,rgba(26,111,196,0.5),rgba(23,184,224,0.3))", border: "1.5px solid rgba(255,255,255,0.3)" }}>
                  <p className="sora text-white text-2xl" style={{ fontWeight: 800 }}>7+</p>
                  <p className="text-cyan-200 text-center leading-tight" style={{ fontSize: "10px" }}>Industries</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          INTRO + IMAGES
      ═══════════════════════════════ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

          {/* Left: text */}
          <div className="flex-1 fade-left">
            <div className="section-label">Domain Expertise</div>
            <div className="dot-row"><span /><span /><span /></div>
            <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f] mb-5 leading-snug" style={{ fontWeight: 800 }}>
              Technology Built for<br />
              <span style={{ background: "linear-gradient(90deg,#1a6fc4,#17b8e0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Your Industry
              </span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              At Nexora, we understand that every industry has its own set of challenges, compliance
              requirements, and operational dynamics. Our solutions are shaped by deep sector knowledge
              — not generic frameworks — ensuring faster adoption, better fit, and stronger outcomes.
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
          <div className="flex-1 fade-right relative flex justify-center" style={{ minHeight: 460 }}>
            <div className="deco-ring" style={{ width: 380, height: 380, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
            <div className="deco-ring" style={{ width: 270, height: 270, top: "50%", left: "50%", transform: "translate(-50%,-50%)", animationDirection: "reverse", opacity: 0.55 }} />

            <div className="img-main" style={{ width: 360, height: 280, marginTop: 40 }}>
              <Image src={img1} alt="Industries we serve" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="img-accent" style={{ width: 190, height: 140, bottom: 10, left: "3%" }}>
              <Image src={img2} alt="Industry expertise" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="img-accent" style={{ width: 160, height: 118, top: 0, right: "2%" }}>
              <Image src={img3} alt="Domain solutions" fill style={{ objectFit: "cover" }} />
            </div>

            {/* <div className="float-badge" style={{ bottom: 62, right: "5%", animationDelay: "1.2s" }}>
              <p className="sora text-xs font-bold text-[#1a6fc4] mb-0.5">500+ Projects</p>
              <p className="text-slate-500 text-[11px]">Across Industries</p>
            </div> */}
            <div className="float-badge"
              style={{ top: 20, left: "5%", animationDelay: "0.6s", background: "linear-gradient(135deg,#1a6fc4,#17b8e0)" }}>
              <p className="sora text-xs font-bold text-white mb-0.5">7 Sectors</p>
              <p className="text-cyan-100 text-[11px]">Deep Expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          INDUSTRY CARDS GRID
      ═══════════════════════════════ */}
      <section className="py-20 px-4 bg-[#f4f8fd]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 fade-up">
            <div className="section-label" style={{ margin: "0 auto 14px" }}>Industries Served</div>
            <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f]" style={{ fontWeight: 800 }}>
              Sectors We Specialise In
            </h2>
            <p className="text-slate-500 mt-3 text-sm max-w-xl mx-auto leading-relaxed">
              From banking to aviation, we bring proven expertise and industry-specific solutions
              to help businesses in every sector thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <div key={ind.title} className={`industry-card fade-up d${(i % 6) + 1}`}>
                <div className="industry-icon">{ind.icon}</div>
                {ind.badge && (
                  <div className="industry-badge">{ind.badge}</div>
                )}
                <h3 className="sora text-base text-[#1e3a5f] mb-3 leading-snug" style={{ fontWeight: 700, position: "relative", zIndex: 1 }}>
                  {ind.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed" style={{ position: "relative", zIndex: 1 }}>
                  {ind.desc}
                </p>
              </div>
            ))}
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
            Your Industry. Our Expertise.
          </p>
          <h2 className="sora text-3xl md:text-5xl text-white mb-5 leading-tight" style={{ fontWeight: 800 }}>
            Let&apos;s Solve Your<br />
            <span style={{ color: "#a5f3fc" }}>Industry Challenges</span>
          </h2>
          <p className="text-blue-200 text-base leading-relaxed mb-10 max-w-xl mx-auto" style={{ opacity: 0.88 }}>
            Talk to our industry specialists and discover how Nexora can deliver technology
            solutions tailored precisely to your sector&apos;s needs.
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
