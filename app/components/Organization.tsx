"use client";

import Image from "next/image";
import Link from "next/link";
import img1 from "@/app/Photo/img 1.jpg";
import img2 from "@/app/Photo/img 2.jpg";
import img3 from "@/app/Photo/img 3.jpg";

const services = [
  {
    icon: "🗺️",
    title: "Package Evaluation & Roadmap Creation",
    desc: "We identify and evaluate the right enterprise solutions aligned with your business goals. Our experts conduct detailed requirement analysis, gap assessments, and process evaluations — delivering a strategic roadmap with phases, timelines, resource planning, and risk mitigation.",
  },
  {
    icon: "⚙️",
    title: "Implementation",
    desc: "End-to-end implementation services designed for seamless ERP deployment with minimal disruption. Our structured approach covers planning, configuration, data migration, testing, go-live support, and change management for faster adoption.",
  },
  {
    icon: "⬆️",
    title: "Upgrade",
    desc: "Stay current with the latest features, security standards, and performance enhancements. Our upgrade methodology ensures smooth migration, compatibility validation, data integrity, and minimal downtime while maximising existing technology investments.",
  },
  {
    icon: "🔧",
    title: "Customization",
    desc: "Every business has unique needs. We develop custom workflows, reports, dashboards, integrations, and modules that align with your specific processes — enabling greater efficiency, flexibility, and user productivity.",
  },
  {
    icon: "🛡️",
    title: "Application Support",
    desc: "Uninterrupted operations through proactive monitoring, issue resolution, system optimisation, and ongoing maintenance. We deliver reliable technical assistance, performance tuning, and troubleshooting to maximise system uptime and user satisfaction.",
  },
  {
    icon: "🎓",
    title: "Training",
    desc: "Comprehensive user and administrator training programs to ensure smooth system adoption. Our approach includes hands-on workshops, process-oriented learning, documentation, and role-based knowledge transfer to empower your teams.",
  },
  {
    icon: "📦",
    title: "Package Consolidation",
    desc: "Streamline and consolidate multiple software applications into a unified enterprise platform. We reduce operational complexity, eliminate redundant systems, improve data visibility, and enhance process integration for better control and cost optimisation.",
  },
];

export default function Organization() {
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
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }

        .fade-left  { animation: fadeLeft  0.75s ease both; }
        .fade-right { animation: fadeRight 0.75s ease both; }
        .fade-up    { animation: fadeUp    0.75s ease both; }
        .scale-in   { animation: scaleIn   0.65s ease both; }

        .d1 { animation-delay: 0.05s; }
        .d2 { animation-delay: 0.13s; }
        .d3 { animation-delay: 0.21s; }
        .d4 { animation-delay: 0.29s; }
        .d5 { animation-delay: 0.37s; }
        .d6 { animation-delay: 0.45s; }
        .d7 { animation-delay: 0.53s; }

        .geo-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
        }
        .orb-float   { animation: float 6s ease-in-out infinite; }
        .orb-float-2 { animation: float 8s ease-in-out infinite reverse; }
        .deco-ring {
          position: absolute;
          border-radius: 50%;
          border: 1.5px dashed rgba(26,111,196,0.18);
          animation: rotateSlow 18s linear infinite;
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

        /* Service cards */
        .service-card {
          background: white;
          border-radius: 20px;
          padding: 28px 24px;
          border: 1.5px solid #e8f0fb;
          transition: all 0.32s cubic-bezier(0.4,0,0.2,1);
          position: relative;
          overflow: hidden;
          height: 100%;
        }
        .service-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #1a6fc4, #17b8e0);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }
        .service-card:hover::after { transform: scaleX(1); }
        .service-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 20px 55px rgba(26,111,196,0.14);
          border-color: rgba(26,111,196,0.2);
        }
        .service-icon {
          width: 54px; height: 54px;
          border-radius: 15px;
          background: linear-gradient(135deg, #eef4fd, #daeeff);
          display: flex; align-items: center; justify-content: center;
          font-size: 24px;
          margin-bottom: 16px;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }
        .service-card:hover .service-icon { transform: scale(1.1) rotate(-5deg); }

        /* Image stack */
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

        /* Floating badge */
        .float-badge {
          position: absolute;
          background: white;
          border-radius: 14px;
          padding: 10px 16px;
          box-shadow: 0 8px 30px rgba(26,111,196,0.2);
          z-index: 4;
          border: 1px solid rgba(26,111,196,0.1);
          animation: float 4s ease-in-out infinite;
        }

        /* Highlight pill */
        .highlight-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(26,111,196,0.07);
          border: 1px solid rgba(26,111,196,0.13);
          border-radius: 50px;
          padding: 5px 14px;
          font-size: 13px;
          color: #1a6fc4;
          font-weight: 600;
        }

        /* CTA button */
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
        .cta-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 13px 28px;
          border-radius: 50px;
          font-family: 'Sora', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #1a6fc4;
          background: white;
          border: 2px solid rgba(26,111,196,0.25);
          transition: all 0.3s ease;
          text-decoration: none;
          cursor: pointer;
        }
        .cta-btn-ghost:hover {
          border-color: #1a6fc4;
          background: rgba(26,111,196,0.04);
          transform: translateY(-2px);
        }

        /* Divider dot row */
        .dot-row {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 20px;
        }
        .dot-row span {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1a6fc4, #17b8e0);
        }
        .dot-row span:nth-child(2) { opacity: 0.5; }
        .dot-row span:nth-child(3) { opacity: 0.25; }

        /* Full-width CTA gradient */
        .cta-section {
          background: linear-gradient(135deg, #0a1e3d 0%, #1a6fc4 60%, #17b8e0 100%);
          position: relative;
          overflow: hidden;
        }
      `}</style>

      {/* ═══════════════════════════════
          HERO BANNER
      ═══════════════════════════════ */}
      <section
        className="relative overflow-hidden py-24 px-4"
        style={{ background: "linear-gradient(135deg, #1a6fc4 0%, #1e80d8 45%, #1a9fd4 80%, #17b8e0 100%)" }}
      >
        <div className="geo-ring" style={{ width: 420, height: 420, top: -140, right: -90, opacity: 0.15 }} />
        <div className="geo-ring" style={{ width: 240, height: 240, top: 40, right: 90, opacity: 0.09 }} />
        <div className="geo-ring" style={{ width: 560, height: 560, bottom: -250, left: -120, opacity: 0.07 }} />
        <div
          className="orb-float absolute top-10 right-1/3 w-28 h-28 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #7dd3fc, transparent)" }}
        />
        <div
          className="orb-float-2 absolute bottom-6 right-20 w-16 h-16 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #a5f3fc, transparent)" }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <p className="fade-left sora text-xs tracking-[0.22em] text-cyan-200 uppercase mb-3 d1" style={{ fontWeight: 600 }}>
            Nexora Technology Services Pvt Ltd
          </p>
          <h1 className="fade-left sora text-4xl md:text-6xl text-white mb-5 leading-tight d2" style={{ fontWeight: 800 }}>
            Transforming Business<br />
            <span style={{ color: "#a5f3fc" }}>Through Technology</span>
          </h1>
          <p className="fade-left text-blue-100 text-lg max-w-xl leading-relaxed mb-10 d3" style={{ opacity: 0.88 }}>
            Your trusted partner for enterprise ERP solutions — from evaluation and implementation
            to support, training, and beyond.
          </p>

          {/* <div className="fade-up d4 flex flex-wrap gap-6">
            {[["500+", "Projects Delivered"], ["12+", "Years of Expertise"], ["50+", "Specialists"], ["98%", "Client Satisfaction"]].map(
              ([n, l], i) => (
                <div key={i} className="text-center">
                  <p className="sora text-3xl text-cyan-200 leading-none" style={{ fontWeight: 800 }}>{n}</p>
                  <p className="text-blue-200 text-xs uppercase tracking-widest mt-1" style={{ opacity: 0.78 }}>{l}</p>
                </div>
              )
            )}
          </div> */}
        </div>
      </section>

      {/* ═══════════════════════════════
          INTRO + IMAGE (text left, images right)
      ═══════════════════════════════ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* ── Left: Text ── */}
            <div className="flex-1 fade-left">
              <div className="section-label">Who We Are</div>
              <div className="dot-row">
                <span /><span /><span />
              </div>
              <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f] mb-5 leading-snug" style={{ fontWeight: 800 }}>
                Your End-to-End<br />
                <span style={{ background: "linear-gradient(90deg,#1a6fc4,#17b8e0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Enterprise Technology Partner
                </span>
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-5">
                Nexora Technology Services Pvt Ltd helps organisations identify and evaluate the right enterprise
                solutions aligned with their business goals. With over a decade of experience, we guide companies
                through every stage of their digital transformation journey.
              </p>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                From strategic roadmap creation to seamless implementation, ongoing support, and customised
                development — we bring expertise, dedication, and innovation to every engagement.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {["ERP Solutions", "Custom Development", "Application Support", "Enterprise Training"].map((tag) => (
                  <span key={tag} className="highlight-pill">
                    <span>✓</span> {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="cta-btn-primary">
                  Get in Touch <span>→</span>
                </Link>
                <Link href="/about" className="cta-btn-ghost">
                  Learn More
                </Link>
              </div>
            </div>

            {/* ── Right: Images ── */}
            <div className="flex-1 fade-right relative flex justify-center" style={{ minHeight: 460 }}>
              {/* Deco rings */}
              <div className="deco-ring" style={{ width: 380, height: 380, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
              <div className="deco-ring" style={{ width: 280, height: 280, top: "50%", left: "50%", transform: "translate(-50%,-50%)", animationDirection: "reverse", opacity: 0.6 }} />

              {/* Main image */}
              <div className="img-main" style={{ width: 360, height: 280, marginTop: 40 }}>
                <Image src={img1} alt="Nexora services" fill style={{ objectFit: "cover" }} />
              </div>

              {/* Accent image — bottom-left */}
              <div className="img-accent" style={{ width: 190, height: 140, bottom: 10, left: "3%" }}>
                <Image src={img2} alt="Nexora team" fill style={{ objectFit: "cover" }} />
              </div>

              {/* Accent image — top-right */}
              <div className="img-accent" style={{ width: 160, height: 118, top: 0, right: "2%" }}>
                <Image src={img3} alt="Nexora office" fill style={{ objectFit: "cover" }} />
              </div>

              {/* Floating badge */}
              <div className="float-badge" style={{ bottom: 62, right: "5%", animationDelay: "1.2s" }}>
                <p className="sora text-xs font-bold text-[#1a6fc4] mb-0.5">ISO Certified</p>
                <p className="text-slate-500 text-[11px]">Quality Assured</p>
              </div>
              {/* <div className="float-badge" style={{ top: 20, left: "5%", animationDelay: "0.6s", background: "linear-gradient(135deg,#1a6fc4,#17b8e0)" }}>
                <p className="sora text-xs font-bold text-white mb-0.5">500+ Projects</p>
                <p className="text-cyan-100 text-[11px]">Delivered Globally</p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          SERVICES GRID
      ═══════════════════════════════ */}
      <section className="py-20 px-4 bg-[#f4f8fd]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-label" style={{ margin: "0 auto 14px" }}>What We Do</div>
            <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f] mb-4" style={{ fontWeight: 800 }}>
              Our Core Services
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
              Comprehensive enterprise technology services designed to accelerate your digital transformation
              and maximise operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <div
                key={svc.title}
                className={`service-card fade-up d${(i % 6) + 1}`}
                style={i === 6 ? { gridColumn: "span 1" } : {}}
              >
                <div className="service-icon">{svc.icon}</div>
                <h3 className="sora text-base text-[#1e3a5f] mb-3 leading-snug" style={{ fontWeight: 700 }}>
                  {svc.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}

            {/* 7th card spans center on desktop (3-col) */}
            <style>{`
              @media (min-width: 1024px) {
                .services-last { grid-column: 2 / 3; }
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          SECOND IMAGE ROW — detail split
      ═══════════════════════════════ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-14 items-center">

            {/* Left: text */}
            <div className="flex-1 fade-left">
              <div className="section-label">Our Approach</div>
              <div className="dot-row"><span /><span /><span /></div>
              <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f] mb-5 leading-snug" style={{ fontWeight: 800 }}>
                Structured, Strategic &amp;<br />
                <span style={{ background: "linear-gradient(90deg,#1a6fc4,#17b8e0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Results-Driven
                </span>
              </h2>

              <div className="flex flex-col gap-5">
                {[
                  { step: "01", title: "Discover & Assess", desc: "Detailed requirement analysis and gap assessment to map the right solution to your needs." },
                  { step: "02", title: "Plan & Design", desc: "Strategic roadmap with timelines, resource planning, and risk mitigation built in from day one." },
                  { step: "03", title: "Implement & Configure", desc: "Structured deployment with data migration, testing, and go-live support for minimal disruption." },
                  { step: "04", title: "Support & Evolve", desc: "Ongoing monitoring, training, and enhancements to maximise long-term system value." },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4 items-start">
                    <div
                      className="flex-shrink-0 sora text-sm font-bold rounded-full flex items-center justify-center text-white"
                      style={{ width: 42, height: 42, background: "linear-gradient(135deg,#1a6fc4,#17b8e0)", boxShadow: "0 4px 14px rgba(26,111,196,0.35)" }}
                    >
                      {step}
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
            <div className="flex-1 fade-right relative flex justify-center" style={{ minHeight: 420 }}>
              <div className="deco-ring" style={{ width: 340, height: 340, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

              <div className="img-main" style={{ width: 340, height: 260, marginTop: 50 }}>
                <Image src={img2} alt="Nexora approach" fill style={{ objectFit: "cover" }} />
              </div>

              <div className="img-accent" style={{ width: 175, height: 130, top: 0, right: "4%" }}>
                <Image src={img1} alt="Nexora planning" fill style={{ objectFit: "cover" }} />
              </div>

              <div className="img-accent" style={{ width: 155, height: 115, bottom: 20, left: "4%" }}>
                <Image src={img3} alt="Nexora delivery" fill style={{ objectFit: "cover" }} />
              </div>

              <div className="float-badge" style={{ top: 14, left: "6%", animationDelay: "0.8s" }}>
                <p className="sora text-xs font-bold text-[#1a6fc4] mb-0.5">Agile Delivery</p>
                <p className="text-slate-500 text-[11px]">Faster Time-to-Market</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          CTA BANNER
      ═══════════════════════════════ */}
      <section className="cta-section py-20 px-4">
        <div className="geo-ring" style={{ width: 300, height: 300, top: -100, right: -60, opacity: 0.12 }} />
        <div className="geo-ring" style={{ width: 200, height: 200, bottom: -80, left: -40, opacity: 0.09 }} />
        <div
          className="orb-float absolute top-8 left-1/4 w-24 h-24 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #7dd3fc, transparent)" }}
        />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="scale-in">
            <p className="sora text-xs tracking-[0.22em] text-cyan-300 uppercase mb-3 font-semibold">
              Ready to Transform?
            </p>
            <h2 className="sora text-3xl md:text-5xl text-white mb-5 leading-tight" style={{ fontWeight: 800 }}>
              Let&apos;s Build Your Digital<br />
              <span style={{ color: "#a5f3fc" }}>Transformation Together</span>
            </h2>
            <p className="text-blue-200 text-base leading-relaxed mb-10 max-w-xl mx-auto" style={{ opacity: 0.88 }}>
              Partner with Nexora to unlock the full potential of enterprise technology.
              From strategy to execution — we are with you every step of the way.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact"
                style={{ display:"inline-flex", alignItems:"center", gap:7, padding:"13px 30px", borderRadius:50, fontFamily:"'Sora',sans-serif", fontSize:14, fontWeight:700, color:"#1a6fc4", background:"white", boxShadow:"0 8px 28px rgba(0,0,0,0.2)", transition:"all 0.3s ease", textDecoration:"none" }}
              >
                Start a Conversation <span>→</span>
              </Link>
              <Link href="/about"
                style={{ display:"inline-flex", alignItems:"center", gap:7, padding:"13px 30px", borderRadius:50, fontFamily:"'Sora',sans-serif", fontSize:14, fontWeight:700, color:"white", background:"rgba(255,255,255,0.12)", border:"2px solid rgba(255,255,255,0.3)", transition:"all 0.3s ease", textDecoration:"none" }}
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
