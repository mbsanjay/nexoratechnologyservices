"use client";

import Image from "next/image";
import Link from "next/link";
import img1 from "@/app/Photo/img 1.jpg";
import img2 from "@/app/Photo/img 2.jpg";
import img3 from "@/app/Photo/img 3.jpg";

const services = [
  {
    icon: "🧩",
    title: "Custom ERP Modules",
    desc: "Purpose-built modules that extend your existing ERP system to handle unique business functions not covered by standard functionality.",
  },
  {
    icon: "⚙️",
    title: "Workflow Automation",
    desc: "Design and implement role-based workflows that streamline approvals, notifications, and business process routing across departments.",
  },
  {
    icon: "📊",
    title: "Custom Dashboards & Reports",
    desc: "Tailored dashboards and analytical reports that surface the KPIs and business data your teams need for confident decision-making.",
  },
  {
    icon: "🔗",
    title: "Third-Party Integrations",
    desc: "Seamless integrations between your ERP and external platforms — CRM, e-commerce, payment gateways, logistics, and more.",
  },
  {
    icon: "📱",
    title: "Mobile Accessibility",
    desc: "Mobile-ready ERP extensions that give your field teams and managers access to critical data and actions from any device.",
  },
  {
    icon: "🖥️",
    title: "User-Friendly Interfaces",
    desc: "Redesigned and simplified UI layers that improve adoption rates, reduce training time, and enhance day-to-day user productivity.",
  },
];

const approach = [
  { num: "01", title: "Requirement Analysis", desc: "Deep-dive into your current ERP setup and business processes to identify gaps and custom development opportunities." },
  { num: "02", title: "Solution Design", desc: "Architect scalable, secure custom solutions with clear technical specifications and an agreed delivery roadmap." },
  { num: "03", title: "Development & Testing", desc: "Agile development with thorough unit, integration, and UAT testing at every milestone to ensure quality delivery." },
  { num: "04", title: "Deployment & Support", desc: "Smooth go-live with zero-disruption deployment and ongoing post-launch support for enhancements and maintenance." },
];

export default function CustomDevelopment() {
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

        .fade-left  { animation: fadeLeft  0.75s ease both; }
        .fade-right { animation: fadeRight 0.75s ease both; }
        .fade-up    { animation: fadeUp    0.75s ease both; }

        .d1{animation-delay:0.05s} .d2{animation-delay:0.13s}
        .d3{animation-delay:0.21s} .d4{animation-delay:0.29s}
        .d5{animation-delay:0.37s} .d6{animation-delay:0.45s}

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

        .service-card {
          background: white; border-radius: 22px;
          padding: 28px 24px; border: 1.5px solid #e8f0fb;
          transition: all 0.32s cubic-bezier(0.4,0,0.2,1);
          position: relative; overflow: hidden; height: 100%;
        }
        .service-card::after {
          content: ''; position: absolute;
          bottom: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #1a6fc4, #17b8e0);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s ease;
        }
        .service-card:hover::after { transform: scaleX(1); }
        .service-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 22px 60px rgba(26,111,196,0.14);
          border-color: rgba(26,111,196,0.2);
        }
        .service-icon {
          width: 54px; height: 54px; border-radius: 15px;
          background: linear-gradient(135deg, #eef4fd, #daeeff);
          display: flex; align-items: center; justify-content: center;
          font-size: 24px; margin-bottom: 16px;
          transition: transform 0.3s ease;
        }
        .service-card:hover .service-icon { transform: scale(1.1) rotate(-5deg); }

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
          font-family: 'Sora', sans-serif; font-size: 38px; font-weight: 800;
          line-height: 1; margin-bottom: 12px;
          background: linear-gradient(135deg, rgba(26,111,196,0.15), rgba(23,184,224,0.15));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }

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

        .highlight-tag {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(26,111,196,0.07);
          border: 1px solid rgba(26,111,196,0.13);
          border-radius: 50px; padding: 5px 14px;
          font-size: 13px; color: #1a6fc4; font-weight: 600;
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

            <div>
              <p className="fade-left sora text-xs tracking-[0.22em] text-cyan-200 uppercase mb-3 d1" style={{ fontWeight: 600 }}>
                Nexora Technology Services Pvt Ltd
              </p>
              <h1 className="fade-left sora text-4xl md:text-5xl text-white mb-5 leading-tight d2" style={{ fontWeight: 800 }}>
                ERP Custom<br />
                <span style={{ color: "#a5f3fc" }}>Development</span>
              </h1>
              <p className="fade-left text-blue-100 text-base leading-relaxed max-w-lg mb-8 d3" style={{ opacity: 0.9 }}>
                We develop customized ERP modules, workflows, dashboards, and integrations that improve
                efficiency, automate business operations, and enhance decision-making — tailored precisely
                to your unique business processes.
              </p>
              <div className="fade-up d4 flex flex-wrap gap-4">
                <Link href="/contact" className="cta-btn"
                  style={{ background: "white", color: "#1a6fc4", boxShadow: "0 8px 28px rgba(0,0,0,0.15)" }}>
                  Start Your Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link href="/contact" className="cta-btn text-white"
                  style={{ background: "rgba(255,255,255,0.12)", border: "1.5px solid rgba(255,255,255,0.4)" }}>
                  Free Consultation
                </Link>
              </div>
            </div>

            {/* <div className="fade-right hidden lg:flex flex-col gap-4 d2">
              {[
                { icon: "🧩", label: "Custom Modules Built", value: "200+", sub: "Across ERP platforms" },
                { icon: "⚡", label: "Faster Operations", value: "40%", sub: "Average efficiency gain" },
                { icon: "🔗", label: "Integrations Delivered", value: "150+", sub: "Third-party systems" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-4 rounded-2xl px-6 py-4"
                  style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", backdropFilter: "blur(10px)" }}>
                  <span className="text-3xl">{s.icon}</span>
                  <div className="flex-1">
                    <p className="text-blue-200 text-xs uppercase tracking-widest" style={{ opacity: 0.75 }}>{s.label}</p>
                    <p className="sora text-white text-xl" style={{ fontWeight: 800 }}>{s.value}</p>
                  </div>
                  <p className="text-cyan-200 text-xs" style={{ opacity: 0.7 }}>{s.sub}</p>
                </div>
              ))}
            </div> */}

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          INTRO + IMAGES RIGHT
      ═══════════════════════════════ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

          <div className="flex-1 fade-left">
            <div className="section-label">What We Do</div>
            <div className="dot-row"><span /><span /><span /></div>
            <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f] mb-5 leading-snug" style={{ fontWeight: 800 }}>
              ERP Solutions Built<br />
              <span style={{ background: "linear-gradient(90deg,#1a6fc4,#17b8e0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Around Your Business
              </span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              At Nexora Technology Services Pvt Ltd, we provide ERP Custom Development services designed
              to align enterprise systems with unique business processes and operational requirements.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              We help organizations extend and optimize their ERP systems through tailored solutions —
              ensuring scalable, secure, and future-ready ERP solutions that support business growth
              and digital transformation.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {["Custom Modules", "Workflow Automation", "Dashboards", "Integrations"].map((tag) => (
                <span key={tag} className="highlight-tag"><span>✓</span>{tag}</span>
              ))}
            </div>
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

          <div className="flex-1 fade-right relative flex justify-center" style={{ minHeight: 460 }}>
            <div className="deco-ring" style={{ width: 380, height: 380, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
            <div className="deco-ring" style={{ width: 280, height: 280, top: "50%", left: "50%", transform: "translate(-50%,-50%)", animationDirection: "reverse", opacity: 0.6 }} />

            <div className="img-main" style={{ width: 360, height: 280, marginTop: 40 }}>
              <Image src={img1} alt="ERP Custom Development" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="img-accent" style={{ width: 190, height: 140, bottom: 10, left: "3%" }}>
              <Image src={img2} alt="ERP modules" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="img-accent" style={{ width: 160, height: 118, top: 0, right: "2%" }}>
              <Image src={img3} alt="ERP integration" fill style={{ objectFit: "cover" }} />
            </div>

            <div className="float-badge" style={{ bottom: 62, right: "5%", animationDelay: "1.2s" }}>
              <p className="sora text-xs font-bold text-[#1a6fc4] mb-0.5">Scalable Solutions</p>
              <p className="text-slate-500 text-[11px]">Built for Growth</p>
            </div>
            {/* <div className="float-badge"
              style={{ top: 20, left: "5%", animationDelay: "0.6s", background: "linear-gradient(135deg,#1a6fc4,#17b8e0)" }}>
              <p className="sora text-xs font-bold text-white mb-0.5">200+ Modules</p>
              <p className="text-cyan-100 text-[11px]">Delivered Globally</p>
            </div> */}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          SERVICES GRID
      ═══════════════════════════════ */}
      <section className="py-20 px-4 bg-[#f4f8fd]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 fade-up">
            <div className="section-label" style={{ margin: "0 auto 14px" }}>Our Services</div>
            <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f]" style={{ fontWeight: 800 }}>
              What We Build for You
            </h2>
            <p className="text-slate-500 mt-3 text-sm max-w-xl mx-auto leading-relaxed">
              From custom modules to mobile-ready interfaces — every solution we develop is designed
              around your processes, your people, and your growth goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <div key={svc.title} className={`service-card fade-up d${(i % 6) + 1}`}>
                <div className="service-icon">{svc.icon}</div>
                <h3 className="sora text-base text-[#1e3a5f] mb-3 leading-snug" style={{ fontWeight: 700 }}>
                  {svc.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          APPROACH + SECOND IMAGE
      ═══════════════════════════════ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

          <div className="flex-1 fade-left">
            <div className="section-label">Our Approach</div>
            <div className="dot-row"><span /><span /><span /></div>
            <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f] mb-8 leading-snug" style={{ fontWeight: 800 }}>
              How We Deliver<br />
              <span style={{ background: "linear-gradient(90deg,#1a6fc4,#17b8e0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Custom ERP Solutions
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {approach.map((a, i) => (
                <div key={a.num} className={`step-card fade-up d${i + 1}`}>
                  <div className="step-num">{a.num}</div>
                  <h4 className="sora text-sm text-[#1e3a5f] mb-2" style={{ fontWeight: 700 }}>{a.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 fade-right relative flex justify-center" style={{ minHeight: 420 }}>
            <div className="deco-ring" style={{ width: 340, height: 340, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

            <div className="img-main" style={{ width: 340, height: 260, marginTop: 50 }}>
              <Image src={img3} alt="ERP development process" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="img-accent" style={{ width: 175, height: 130, top: 0, right: "4%" }}>
              <Image src={img1} alt="ERP deployment" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="img-accent" style={{ width: 155, height: 115, bottom: 20, left: "4%" }}>
              <Image src={img2} alt="ERP testing" fill style={{ objectFit: "cover" }} />
            </div>

            <div className="float-badge" style={{ top: 14, left: "6%", animationDelay: "0.8s" }}>
              <p className="sora text-xs font-bold text-[#1a6fc4] mb-0.5">Zero Disruption</p>
              <p className="text-slate-500 text-[11px]">Go-Live Guaranteed</p>
            </div>
            <div className="float-badge"
              style={{ bottom: 30, right: "5%", animationDelay: "1.4s", background: "linear-gradient(135deg,#1a6fc4,#17b8e0)" }}>
              <p className="sora text-xs font-bold text-white mb-0.5">Future-Ready</p>
              <p className="text-cyan-100 text-[11px]">Secure & Scalable</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          CTA BANNER
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
            Ready to Build?
          </p>
          <h2 className="sora text-3xl md:text-5xl text-white mb-5 leading-tight" style={{ fontWeight: 800 }}>
            Let&apos;s Customize Your<br />
            <span style={{ color: "#a5f3fc" }}>ERP for Maximum Impact</span>
          </h2>
          <p className="text-blue-200 text-base leading-relaxed mb-10 max-w-xl mx-auto" style={{ opacity: 0.88 }}>
            Partner with Nexora to build ERP solutions that fit exactly how your business operates —
            scalable, secure, and designed for long-term success.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="cta-btn"
              style={{ color: "#1a6fc4", background: "white", boxShadow: "0 8px 28px rgba(0,0,0,0.2)" }}>
              Start Your Project <span>→</span>
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
