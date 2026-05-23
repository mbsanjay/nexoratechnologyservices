"use client";

import Image from "next/image";
import Link from "next/link";
import img1 from "@/app/Photo/img 1.jpg";
import img2 from "@/app/Photo/img 2.jpg";
import img3 from "@/app/Photo/img 3.jpg";

const keyPractices = [
  {
    icon: "✅",
    title: "Comprehensive Testing",
    desc: "We conduct multiple levels of testing, including functional, performance, security, and usability testing, to ensure that every aspect of the product meets expectations.",
  },
  {
    icon: "🤖",
    title: "Automation & Tools",
    desc: "By leveraging modern automation tools, we enhance efficiency, accuracy, and speed in our testing processes.",
  },
  {
    icon: "🔄",
    title: "Continuous Improvement",
    desc: "We regularly review and refine our QA methodologies to adapt to evolving technologies and industry best practices.",
  },
  {
    icon: "📋",
    title: "Compliance & Standards",
    desc: "Our processes align with recognized industry standards, ensuring that our deliverables meet regulatory and quality benchmarks.",
  },
];

export default function QualityAssurance() {
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

        /* Practice card */
        .practice-card {
          background: white; border-radius: 22px;
          padding: 28px 24px; border: 1.5px solid #e8f0fb;
          transition: all 0.32s cubic-bezier(0.4,0,0.2,1);
          position: relative; overflow: hidden; height: 100%;
        }
        .practice-card::after {
          content: ''; position: absolute;
          bottom: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #1a6fc4, #17b8e0);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s ease;
        }
        .practice-card:hover::after { transform: scaleX(1); }
        .practice-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 22px 60px rgba(26,111,196,0.14);
          border-color: rgba(26,111,196,0.2);
        }
        .practice-icon {
          width: 56px; height: 56px; border-radius: 16px;
          background: linear-gradient(135deg, #eef4fd, #daeeff);
          display: flex; align-items: center; justify-content: center;
          font-size: 26px; margin-bottom: 16px;
          transition: transform 0.3s ease;
        }
        .practice-card:hover .practice-icon { transform: scale(1.1) rotate(-5deg); }

        /* Commitment block */
        .commit-block {
          background: white; border-radius: 20px;
          padding: 26px 24px; border: 1.5px solid #e8f0fb;
          transition: all 0.3s ease;
          display: flex; align-items: flex-start; gap: 16px;
        }
        .commit-block:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 45px rgba(26,111,196,0.12);
          border-color: rgba(26,111,196,0.2);
        }
        .commit-num {
          font-family: 'Sora', sans-serif; font-size: 28px; font-weight: 800;
          background: linear-gradient(135deg, #1a6fc4, #17b8e0);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          flex-shrink: 0; line-height: 1.1;
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
                Quality<br />
                <span style={{ color: "#a5f3fc" }}>Assurance</span>
              </h1>
              <p className="fade-left text-blue-100 text-base leading-relaxed max-w-lg mb-8 d3" style={{ opacity: 0.9 }}>
                Quality Assurance is more than just a process — it is a commitment to delivering
                excellence at every stage. We believe quality is built into a product from the very
                beginning, not just tested at the end.
              </p>
              <div className="fade-up d4 flex flex-wrap gap-4">
                <Link href="/contact" className="cta-btn"
                  style={{ background: "white", color: "#1a6fc4", boxShadow: "0 8px 28px rgba(0,0,0,0.15)" }}>
                  Get in Touch
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

            {/* Right: stat blocks */}
            <div className="fade-right hidden lg:flex flex-col gap-4 d2">
              {[
                { icon: "🛡️", label: "Reliability", value: "Built-In", sub: "From day one, not afterthought" },
                { icon: "🎯", label: "Customer Satisfaction", value: "First Priority", sub: "Feedback-driven quality" },
                { icon: "📐", label: "Industry Standards", value: "Compliant", sub: "Regulatory benchmarks met" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-4 rounded-2xl px-6 py-4"
                  style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", backdropFilter: "blur(10px)" }}>
                  <span className="text-3xl">{s.icon}</span>
                  <div className="flex-1">
                    <p className="text-blue-200 text-xs uppercase tracking-widest" style={{ opacity: 0.75 }}>{s.label}</p>
                    <p className="sora text-white text-base" style={{ fontWeight: 800 }}>{s.value}</p>
                  </div>
                  <p className="text-cyan-200 text-xs text-right max-w-[100px]" style={{ opacity: 0.7 }}>{s.sub}</p>
                </div>
              ))}
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
            <div className="section-label">Our Approach</div>
            <div className="dot-row"><span /><span /><span /></div>
            <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f] mb-5 leading-snug" style={{ fontWeight: 800 }}>
              Structured, Proactive<br />
              <span style={{ background: "linear-gradient(90deg,#1a6fc4,#17b8e0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Quality Assurance
              </span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-5">
              We follow a structured and proactive approach to quality assurance, integrating it
              throughout the entire development lifecycle. From initial planning and design to
              development, testing, and deployment, our QA team works closely with all stakeholders
              to identify potential issues early and ensure consistent standards.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Our QA practices are designed to ensure reliability, performance, and customer satisfaction
              at every stage of our work.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="cta-btn"
                style={{ background: "linear-gradient(135deg,#1a6fc4,#17b8e0)", color: "white", boxShadow: "0 6px 22px rgba(26,111,196,0.35)" }}>
                Talk to Our QA Team <span>→</span>
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
              <Image src={img1} alt="Quality Assurance" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="img-accent" style={{ width: 190, height: 140, bottom: 10, left: "3%" }}>
              <Image src={img2} alt="QA testing" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="img-accent" style={{ width: 160, height: 118, top: 0, right: "2%" }}>
              <Image src={img3} alt="QA standards" fill style={{ objectFit: "cover" }} />
            </div>

            <div className="float-badge" style={{ bottom: 62, right: "5%", animationDelay: "1.2s" }}>
              <p className="sora text-xs font-bold text-[#1a6fc4] mb-0.5">Zero Defect Goal</p>
              <p className="text-slate-500 text-[11px]">Every Delivery</p>
            </div>
            <div className="float-badge"
              style={{ top: 20, left: "5%", animationDelay: "0.6s", background: "linear-gradient(135deg,#1a6fc4,#17b8e0)" }}>
              <p className="sora text-xs font-bold text-white mb-0.5">End-to-End QA</p>
              <p className="text-cyan-100 text-[11px]">Full Lifecycle</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          KEY PRACTICES
      ═══════════════════════════════ */}
      <section className="py-20 px-4 bg-[#f4f8fd]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 fade-up">
            <div className="section-label" style={{ margin: "0 auto 14px" }}>Key Practices</div>
            <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f]" style={{ fontWeight: 800 }}>
              How We Ensure Quality
            </h2>
            <p className="text-slate-500 mt-3 text-sm max-w-xl mx-auto leading-relaxed">
              Our QA framework is built on four core practices that together ensure every product
              we deliver meets the highest standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyPractices.map((p, i) => (
              <div key={p.title} className={`practice-card fade-up d${i + 1}`}>
                <div className="practice-icon">{p.icon}</div>
                <h3 className="sora text-base text-[#1e3a5f] mb-3 leading-snug" style={{ fontWeight: 700 }}>
                  {p.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          CUSTOMER-CENTRIC + COMMITMENT + SECOND IMAGE
      ═══════════════════════════════ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

          {/* Left: two content blocks */}
          <div className="flex-1 fade-left">
            <div className="section-label">Our Focus &amp; Commitment</div>
            <div className="dot-row"><span /><span /><span /></div>
            <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f] mb-8 leading-snug" style={{ fontWeight: 800 }}>
              Quality Defined by<br />
              <span style={{ background: "linear-gradient(90deg,#1a6fc4,#17b8e0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Customer Success
              </span>
            </h2>

            <div className="flex flex-col gap-5">
              {/* Customer-Centric block */}
              <div className="commit-block">
                <div className="commit-num">01</div>
                <div>
                  <p className="sora text-[#1e3a5f] font-bold text-sm mb-2">Customer-Centric Focus</p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Quality for us is defined by customer satisfaction. We actively gather feedback,
                    analyse user behaviour, and implement improvements to deliver products that truly
                    meet user needs.
                  </p>
                </div>
              </div>

              {/* Commitment block */}
              <div className="commit-block">
                <div className="commit-num">02</div>
                <div>
                  <p className="sora text-[#1e3a5f] font-bold text-sm mb-2">Our Commitment</p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    We are dedicated to delivering solutions that are not only functional but also
                    reliable, secure, and scalable. Through rigorous quality assurance practices,
                    we strive to exceed expectations and build long-term trust with our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: images */}
          <div className="flex-1 fade-right relative flex justify-center img-stack-wrapper" style={{ minHeight: 420 }}>
            <div className="deco-ring" style={{ width: 340, height: 340, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

            <div className="img-main" style={{ width: 340, height: 260, marginTop: 50 }}>
              <Image src={img3} alt="Customer satisfaction" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="img-accent" style={{ width: 175, height: 130, top: 0, right: "4%" }}>
              <Image src={img2} alt="QA commitment" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="img-accent" style={{ width: 155, height: 115, bottom: 20, left: "4%" }}>
              <Image src={img1} alt="Reliable solutions" fill style={{ objectFit: "cover" }} />
            </div>

            <div className="float-badge" style={{ top: 14, left: "6%", animationDelay: "0.8s" }}>
              <p className="sora text-xs font-bold text-[#1a6fc4] mb-0.5">Long-Term Trust</p>
              <p className="text-slate-500 text-[11px]">Built with Clients</p>
            </div>
            <div className="float-badge"
              style={{ bottom: 30, right: "5%", animationDelay: "1.4s", background: "linear-gradient(135deg,#1a6fc4,#17b8e0)" }}>
              <p className="sora text-xs font-bold text-white mb-0.5">Exceed Expectations</p>
              <p className="text-cyan-100 text-[11px]">Every Delivery</p>
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
            Quality You Can Trust
          </p>
          <h2 className="sora text-3xl md:text-5xl text-white mb-5 leading-tight" style={{ fontWeight: 800 }}>
            Let&apos;s Build Something<br />
            <span style={{ color: "#a5f3fc" }}>Reliable & Scalable</span>
          </h2>
          <p className="text-blue-200 text-base leading-relaxed mb-10 max-w-xl mx-auto" style={{ opacity: 0.88 }}>
            Partner with Nexora for rigorous quality assurance that ensures every solution we
            deliver is functional, secure, scalable, and built to exceed your expectations.
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
