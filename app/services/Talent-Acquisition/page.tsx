"use client";

import Image from "next/image";
import Link from "next/link";
import img1 from "@/app/Photo/img 1.jpg";
import img2 from "@/app/Photo/img 2.jpg";
import img3 from "@/app/Photo/img 3.jpg";

export default function TalentAcquisition() {
  const approachSteps = [
    { n: "01", title: "Understanding client requirements and company culture" },
    { n: "02", title: "Sourcing candidates through multiple channels" },
    { n: "03", title: "Screening and shortlisting top talent" },
    { n: "04", title: "Coordinating interviews and assessments" },
    { n: "05", title: "Managing offer negotiation and onboarding" },
  ];

  const offerings = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "End-to-End Recruitment Solutions",
      desc: "We manage the complete hiring lifecycle — from requirement analysis to candidate onboarding — ensuring a seamless and efficient recruitment experience.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "IT Hiring Expertise",
      desc: "Specialized in sourcing top-tier technology professionals across development, infrastructure, data, and cybersecurity domains.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "Leadership & Executive Search and Hiring",
      desc: "Strategic search and placement for C-suite and senior leadership roles through our exclusive executive network and discreet headhunting process.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Contract & Permanent Staffing",
      desc: "Flexible staffing models to meet your business needs — short-term contracts, long-term engagements, or direct permanent placements.",
    },
  ];

  const whyItems = [
    {
      icon: "🌐",
      title: "Strong Talent Network",
      desc: "Extensive cross-industry connections enabling access to a wide pool of pre-vetted, high-quality candidates.",
    },
    {
      icon: "⚡",
      title: "Faster Turnaround Time",
      desc: "Streamlined processes and advanced sourcing techniques ensure quality hires are delivered without delay.",
    },
    {
      icon: "🎯",
      title: "Customized Hiring Strategies",
      desc: "Tailored recruitment plans aligned with your unique organizational goals, culture, and growth objectives.",
    },
    {
      icon: "📊",
      title: "Transparent Communication",
      desc: "Clear reporting at every stage of the recruitment lifecycle — no surprises, just actionable insights.",
    },
    {
      icon: "🤝",
      title: "Cultural Fit & Long-Term Retention",
      desc: "We prioritize lasting placements by matching candidates who align with your values and team dynamics.",
    },
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
        @keyframes pulseGlow {
          0%,100% { box-shadow: 0 0 0 0 rgba(26,111,196,0.3); }
          50%      { box-shadow: 0 0 0 10px rgba(26,111,196,0); }
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

        .dot-row { display: flex; gap: 6px; margin-bottom: 10px; }
        .dot-row span {
          width: 8px; height: 8px; border-radius: 50%;
          background: linear-gradient(135deg, #1a6fc4, #17b8e0); opacity: 0.35;
        }
        .dot-row span:first-child { opacity: 1; }

        .offer-card {
          background: white; border-radius: 20px;
          padding: 28px 24px; border: 1.5px solid #e8f0fb;
          transition: all 0.3s ease; position: relative; overflow: hidden;
        }
        .offer-card::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #1a6fc4, #17b8e0);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s ease;
        }
        .offer-card:hover::after { transform: scaleX(1); }
        .offer-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 55px rgba(26,111,196,0.13);
          border-color: rgba(26,111,196,0.2);
        }
        .offer-icon {
          width: 52px; height: 52px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, #1a6fc4, #17b8e0);
          color: white; margin-bottom: 18px;
          transition: transform 0.3s ease;
        }
        .offer-card:hover .offer-icon { transform: scale(1.1) rotate(-5deg); }

        .step-row {
          display: flex; align-items: flex-start; gap: 20px;
          padding: 22px 24px; background: white; border-radius: 18px;
          border: 1.5px solid #e8f0fb; transition: all 0.3s ease;
        }
        .step-row:hover {
          transform: translateX(6px);
          box-shadow: 0 12px 40px rgba(26,111,196,0.1);
          border-color: rgba(26,111,196,0.25);
        }
        .step-num-badge {
          flex-shrink: 0; width: 44px; height: 44px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, rgba(26,111,196,0.1), rgba(23,184,224,0.1));
          font-family: 'Sora', sans-serif; font-weight: 800; font-size: 14px;
          color: #1a6fc4;
        }

        .why-card {
          background: white; border-radius: 18px;
          padding: 28px 24px; border: 1.5px solid #e8f0fb;
          transition: all 0.3s ease;
        }
        .why-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 50px rgba(26,111,196,0.12);
          border-color: rgba(26,111,196,0.2);
        }
        .why-icon-wrap {
          width: 54px; height: 54px; border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, #eef4fd, #daeeff);
          font-size: 22px; margin-bottom: 16px;
          transition: transform 0.3s ease;
        }
        .why-card:hover .why-icon-wrap { transform: scale(1.1) rotate(-5deg); }

        .cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 32px; border-radius: 50px;
          font-family: 'Sora', sans-serif; font-size: 14px; font-weight: 700;
          cursor: pointer; transition: all 0.3s ease; border: none;
          text-decoration: none;
        }

        .img-stack { position: relative; }
        .img-main {
          border-radius: 24px; overflow: hidden;
          box-shadow: 0 24px 70px rgba(26,111,196,0.22);
        }
        .img-accent {
          position: absolute; border-radius: 16px; overflow: hidden;
          border: 3px solid white;
          box-shadow: 0 12px 40px rgba(26,111,196,0.2);
        }
      `}</style>

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section
        className="relative overflow-hidden py-20 px-4"
        style={{ background: "linear-gradient(135deg, #1a6fc4 0%, #1e80d8 45%, #1a9fd4 80%, #17b8e0 100%)" }}
      >
        <div className="geo-ring" style={{ width: 460, height: 460, top: -150, right: -90, opacity: 0.14 }} />
        <div className="geo-ring" style={{ width: 260, height: 260, top: 50, right: 120, opacity: 0.09 }} />
        <div className="geo-ring" style={{ width: 600, height: 600, bottom: -280, left: -140, opacity: 0.07 }} />
        <div className="float-orb absolute top-12 right-1/3 w-36 h-36 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #7dd3fc, transparent)" }} />
        <div className="float-orb-2 absolute bottom-8 right-24 w-24 h-24 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #a5f3fc, transparent)" }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left */}
            <div className="fade-left">
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

              <h1 className="sora text-4xl md:text-5xl text-white leading-tight mb-6" style={{ fontWeight: 800 }}>
                Building High-Performing<br />
                <span style={{ color: "#a5f3fc" }}>Teams That Last</span>
              </h1>

              <p className="text-blue-100 text-base leading-relaxed mb-5" style={{ opacity: 0.92, maxWidth: "500px" }}>
                At Nexora Technology Services, our Talent Acquisition function goes beyond traditional recruitment—we focus on building high-performing teams that drive long-term business success.
              </p>
              <p className="text-blue-100 text-sm leading-relaxed mb-8" style={{ opacity: 0.82, maxWidth: "480px" }}>
                We understand that hiring the right talent is critical to organizational growth. Our approach combines strategic workforce planning, deep market insights, and advanced sourcing techniques to identify, attract, and onboard the best candidates for your business.
              </p>

              <Link href="/contact" className="cta-btn"
                style={{ background: "white", color: "#1a6fc4", boxShadow: "0 8px 28px rgba(0,0,0,0.15)" }}>
                Start Hiring Today
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* Right: Stats */}
            <div className="fade-right hidden lg:flex flex-col gap-5">
              {/* <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "500+", label: "Placements Made" },
                  { value: "72h", label: "Avg. Shortlist Time" },
                  { value: "100%", label: "Lifecycle Managed" },
                ].map((s, i) => (
                  <div key={i} className="text-center py-6 px-4 rounded-2xl"
                    style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}>
                    <p className="sora text-2xl text-white mb-1" style={{ fontWeight: 800 }}>{s.value}</p>
                    <p className="text-cyan-200 text-xs uppercase tracking-wide" style={{ opacity: 0.85 }}>{s.label}</p>
                  </div>
                ))}
              </div> */}

              <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)" }}>
                <p className="sora text-white text-sm mb-4" style={{ fontWeight: 700 }}>From Entry-Level to Leadership</p>
                <div className="space-y-3">
                  {["Strategic Workforce Planning", "Deep Market Insights", "Advanced Sourcing Techniques", "Full Recruitment Lifecycle"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(255,255,255,0.2)" }}>
                        <svg className="w-3 h-3 text-cyan-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-blue-100 text-sm" style={{ opacity: 0.9 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          INTRO + IMAGE
      ══════════════════════════════ */}
      <section className="w-full py-20 px-4" style={{ background: "white" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div className="fade-left">
            <div className="dot-row"><span /><span /><span /></div>
            <div className="section-label">Who We Are</div>
            <h2 className="sora text-4xl text-[#1e3a5f] leading-tight mb-5" style={{ fontWeight: 800 }}>
              Recruitment That Goes<br />
              <span style={{
                background: "linear-gradient(135deg, #1a6fc4, #17b8e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Beyond the Resume</span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              Our approach combines strategic workforce planning, deep market insights, and advanced sourcing techniques to identify, attract, and onboard the best candidates for your business.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-8">
              From entry-level roles to leadership hiring, we manage the entire recruitment lifecycle with precision and speed. We act as a strategic partner to help you build a workforce that is agile, skilled, and future-ready.
            </p>

            <div className="flex gap-4 flex-wrap">
              {["Entry-Level Hiring", "Leadership Search", "Contract Staffing", "Executive Roles"].map((tag, i) => (
                <span key={i} className="px-4 py-2 rounded-full text-xs font-semibold"
                  style={{ background: "rgba(26,111,196,0.07)", color: "#1a6fc4", border: "1px solid rgba(26,111,196,0.15)" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Image Stack */}
          <div className="fade-right relative flex justify-center">
            <div className="img-stack w-full max-w-md">
              <div className="deco-ring" style={{ width: 380, height: 380, top: -35, left: -35, zIndex: 0 }} />

              <div className="img-main relative z-2">
                <Image src={img1} alt="Talent Acquisition" width={480} height={420}
                  className="w-full object-cover" style={{ height: "400px" }} />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, transparent 55%, rgba(26,111,196,0.2) 100%)" }} />
              </div>

              <div className="img-accent" style={{ width: 170, height: 130, bottom: -20, left: -24, zIndex: 5 }}>
                <Image src={img3} alt="Team" width={170} height={130}
                  className="w-full h-full object-cover" />
              </div>

              {/* Float badge */}
              <div className="float-badge" style={{ top: 20, right: -22, zIndex: 10 }}>
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #1a6fc4, #17b8e0)" }}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197" />
                    </svg>
                  </div>
                  <div>
                    <p className="sora text-xs text-[#1e3a5f]" style={{ fontWeight: 700 }}>Full Lifecycle</p>
                    <p className="text-slate-400" style={{ fontSize: "10px" }}>End-to-End Managed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          OUR APPROACH
      ══════════════════════════════ */}
      <section className="w-full py-20 px-4" style={{ background: "#f4f8fd" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image Stack */}
          <div className="fade-left relative flex justify-center order-2 lg:order-1">
            <div className="img-stack w-full max-w-md">
              <div className="deco-ring" style={{ width: 360, height: 360, top: -30, right: -30, zIndex: 0, animationDirection: "reverse" }} />

              <div className="img-main relative z-2">
                <Image src={img2} alt="Recruitment Approach" width={480} height={420}
                  className="w-full object-cover" style={{ height: "390px" }} />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, transparent 60%, rgba(26,111,196,0.18) 100%)" }} />
              </div>

              <div className="img-accent" style={{ width: 160, height: 120, top: -18, right: -20, zIndex: 5 }}>
                <Image src={img3} alt="Process" width={160} height={120}
                  className="w-full h-full object-cover" />
              </div>

              <div className="float-badge" style={{ bottom: 24, left: -22, zIndex: 10, animationDelay: "2s" }}>
                <div className="flex items-center gap-2">
                  <span style={{ fontSize: "20px" }}>📋</span>
                  <div>
                    <p className="sora text-xs text-[#1e3a5f]" style={{ fontWeight: 700 }}>Data-Driven</p>
                    <p className="text-slate-400" style={{ fontSize: "10px" }}>Recruitment Methodology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Steps */}
          <div className="fade-right order-1 lg:order-2">
            <div className="dot-row"><span /><span /><span /></div>
            <div className="section-label">Our Approach</div>
            <h2 className="sora text-4xl text-[#1e3a5f] leading-tight mb-4" style={{ fontWeight: 800 }}>
              Structured &amp;{" "}
              <span style={{
                background: "linear-gradient(135deg, #1a6fc4, #17b8e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Data-Driven</span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              We follow a proven, structured recruitment methodology that ensures quality, speed, and cultural alignment at every step.
            </p>

            <div className="space-y-3">
              {approachSteps.map((step, i) => (
                <div key={i} className={`step-row fade-up d${i + 1}`}>
                  <div className="step-num-badge">{step.n}</div>
                  <p className="text-[#1e3a5f] text-sm leading-relaxed" style={{ fontWeight: 500, paddingTop: "10px" }}>
                    {step.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          WHAT WE OFFER
      ══════════════════════════════ */}
      <section className="w-full py-20 px-4" style={{ background: "white" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 fade-up">
            <div className="dot-row justify-center"><span /><span /><span /></div>
            <div className="section-label mx-auto w-fit">What We Offer</div>
            <h2 className="sora text-4xl text-[#1e3a5f]" style={{ fontWeight: 800 }}>
              Comprehensive{" "}
              <span style={{
                background: "linear-gradient(135deg, #1a6fc4, #17b8e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Hiring Solutions</span>
            </h2>
            <p className="text-slate-500 mt-3 text-sm max-w-xl mx-auto leading-relaxed">
              From technical roles to executive leadership, our service portfolio covers every hiring need your organization may have.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {offerings.map((o, i) => (
              <div key={i} className={`offer-card fade-up d${i + 1}`}>
                <div className="offer-icon">{o.icon}</div>
                <h3 className="sora text-sm text-[#1e3a5f] mb-2" style={{ fontWeight: 700 }}>{o.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════ */}
      <section className="w-full py-20 px-4" style={{ background: "#f4f8fd" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div className="fade-left">
            <div className="dot-row"><span /><span /><span /></div>
            <div className="section-label">Why Choose Us</div>
            <h2 className="sora text-4xl text-[#1e3a5f] leading-tight mb-5" style={{ fontWeight: 800 }}>
              A Strategic Partner<br />
              <span style={{
                background: "linear-gradient(135deg, #1a6fc4, #17b8e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>For Your Workforce</span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-8">
              We act as a strategic partner to help you build a workforce that is agile, skilled, and future-ready. Here's what sets Nexora apart in talent acquisition.
            </p>

            <div className="space-y-4">
              {whyItems.map((w, i) => (
                <div key={i} className={`flex items-start gap-4 fade-up d${i + 1}`}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #eef4fd, #daeeff)", fontSize: "18px" }}>
                    {w.icon}
                  </div>
                  <div>
                    <h4 className="sora text-sm text-[#1e3a5f] mb-1" style={{ fontWeight: 700 }}>{w.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Why cards grid */}
          <div className="fade-right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyItems.map((w, i) => (
                <div key={i} className={`why-card fade-up d${i + 1}`}>
                  <div className="why-icon-wrap">{w.icon}</div>
                  <h3 className="sora text-sm text-[#1e3a5f] mb-1" style={{ fontWeight: 700 }}>{w.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
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
        <div className="geo-ring" style={{ width: 440, height: 440, top: -160, right: -90, opacity: 0.12 }} />
        <div className="geo-ring" style={{ width: 280, height: 280, bottom: -100, left: -70, opacity: 0.09 }} />

        <div className="max-w-3xl mx-auto text-center relative z-10 fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
            style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}>
            <span style={{ fontSize: "16px" }}>👥</span>
            <span className="sora text-xs text-white uppercase tracking-widest" style={{ fontWeight: 700 }}>
              Talent Acquisition
            </span>
          </div>

          <h2 className="sora text-3xl md:text-4xl text-white mb-4 leading-tight" style={{ fontWeight: 800 }}>
            Let's Build Your<br />
            <span style={{ color: "#a5f3fc" }}>Future-Ready Workforce</span>
          </h2>

          <p className="text-blue-100 mb-10 max-w-lg mx-auto text-sm leading-relaxed" style={{ opacity: 0.9 }}>
            Partner with Nexora to find the right talent — from entry-level professionals to senior leadership — with speed, precision, and a focus on long-term fit.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact"
              className="cta-btn text-[#1a6fc4] bg-white hover:shadow-2xl hover:scale-105 transition-all"
              style={{ boxShadow: "0 8px 28px rgba(0,0,0,0.14)" }}>
              Start Hiring Now
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

    </div>
  );
}
