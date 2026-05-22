"use client";

import Image from "next/image";
import Link from "next/link";
import img1 from "@/app/Photo/img 1.jpg";
import img2 from "@/app/Photo/img 2.jpg";
import img3 from "@/app/Photo/img 3.jpg";

const services = [
  {
    icon: "⚙️",
    title: "Implementation",
    content: [
      "ERP Implementation helps organizations streamline and automate their business processes by integrating various functions such as finance, HR, inventory, procurement, sales, and operations into a single centralized system.",
      "A successful ERP implementation improves operational efficiency, enhances data accuracy, enables real-time reporting, and supports better decision-making across the organization.",
    ],
  },
  {
    icon: "🧩",
    title: "Custom Development",
    content: [
      "ERP Custom Development enables businesses to build tailored ERP solutions that align perfectly with their unique workflows, operational requirements, and industry-specific processes. Unlike standard ERP systems, custom ERP development provides flexibility to add personalized modules, automate complex tasks, integrate third-party applications, and scale as the business grows.",
      "Our ERP custom development services focus on designing user-friendly, secure, and scalable solutions that improve efficiency, enhance productivity, and provide real-time business insights. From finance and inventory management to HR, CRM, and reporting dashboards, we develop customized ERP applications that help organizations streamline operations and achieve better business performance.",
    ],
  },
  {
    icon: "⬆️",
    title: "Upgrade",
    content: [
      "ERP Upgrade services help organizations modernize their existing ERP systems with the latest features, improved performance, enhanced security, and better user experience. Upgrading an ERP system ensures compatibility with current technologies, improves operational efficiency, and enables businesses to leverage advanced capabilities such as automation, analytics, cloud integration, and real-time reporting.",
      "Our ERP upgrade solutions focus on seamless migration, minimal business disruption, data integrity, and optimized system performance. We help businesses transition smoothly from legacy systems to upgraded platforms while ensuring scalability, reliability, and improved productivity to support future business growth.",
    ],
  },
  {
    icon: "🌐",
    title: "Global Rollout",
    content: [
      "ERP Global Rollout services help organizations successfully deploy and standardize ERP systems across multiple locations, regions, and business units worldwide. A global ERP rollout ensures consistent business processes, centralized data management, regulatory compliance, and improved collaboration across international operations.",
      "Our ERP global rollout approach focuses on strategic planning, localization, multi-country compliance, seamless data migration, user training, and change management to ensure smooth implementation across global teams. We help businesses achieve operational consistency, enhanced visibility, and scalable growth through efficient and well-managed ERP deployment strategies.",
    ],
  },
  {
    icon: "🛡️",
    title: "Support",
    content: [
      "ERP Support services ensure the smooth functioning, maintenance, and continuous improvement of ERP systems to help businesses operate efficiently without disruptions. Effective ERP support helps organizations resolve technical issues quickly, optimize system performance, manage updates, and ensure users can maximize the value of the ERP platform.",
      "Our ERP support solutions include system monitoring, troubleshooting, performance optimization, user assistance, bug fixing and ongoing maintenance with agreed SLAs. We provide reliable and proactive support to ensure business continuity, improved productivity, and seamless ERP operations tailored to evolving business needs.",
    ],
  },
];

export default function ERPService() {
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
        .d5{animation-delay:0.37s}

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

        /* Service cards */
        .svc-card {
          background: white; border-radius: 22px;
          border: 1.5px solid #e8f0fb;
          transition: all 0.32s cubic-bezier(0.4,0,0.2,1);
          position: relative; overflow: hidden;
        }
        .svc-card::after {
          content: ''; position: absolute;
          left: 0; top: 0; bottom: 0; width: 4px;
          background: linear-gradient(180deg, #1a6fc4, #17b8e0);
          transform: scaleY(0); transform-origin: top;
          transition: transform 0.35s ease;
        }
        .svc-card:hover::after { transform: scaleY(1); }
        .svc-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 22px 60px rgba(26,111,196,0.13);
          border-color: rgba(26,111,196,0.2);
        }
        .svc-icon {
          width: 56px; height: 56px; border-radius: 16px;
          background: linear-gradient(135deg, #eef4fd, #daeeff);
          display: flex; align-items: center; justify-content: center;
          font-size: 26px; flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .svc-card:hover .svc-icon { transform: scale(1.08) rotate(-4deg); }

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
                Enterprise Resource<br />
                <span style={{ color: "#a5f3fc" }}>Planning (ERP)</span>
              </h1>
              <p className="fade-left text-blue-100 text-base leading-relaxed max-w-lg mb-8 d3" style={{ opacity: 0.9 }}>
                End-to-end ERP services — from implementation and custom development to upgrades,
                global rollout, and ongoing support — designed to transform how your business operates.
              </p>
              <div className="fade-up d4 flex flex-wrap gap-4">
                <Link href="/contact" className="cta-btn"
                  style={{ background: "white", color: "#1a6fc4", boxShadow: "0 8px 28px rgba(0,0,0,0.15)" }}>
                  Get Started
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

            {/* Right: service name pills */}
            <div className="fade-right hidden lg:flex flex-col gap-3 d2">
              {services.map((s, i) => (
                <div key={i} className="flex items-center gap-4 rounded-2xl px-5 py-3"
                  style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", backdropFilter: "blur(10px)" }}>
                  <span className="text-2xl">{s.icon}</span>
                  <p className="sora text-white text-sm" style={{ fontWeight: 700 }}>{s.title}</p>
                  <div className="ml-auto w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.15)" }}>
                    <svg className="w-3 h-3 text-cyan-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
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
            <div className="section-label">Our ERP Services</div>
            <div className="dot-row"><span /><span /><span /></div>
            <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f] mb-5 leading-snug" style={{ fontWeight: 800 }}>
              Complete ERP Solutions<br />
              <span style={{ background: "linear-gradient(90deg,#1a6fc4,#17b8e0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Tailored to Your Business
              </span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              From first implementation to global deployment and long-term support, Nexora delivers
              enterprise-grade ERP services that streamline operations, unify data, and power smarter
              decisions across your entire organization.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="cta-btn"
                style={{ background: "linear-gradient(135deg,#1a6fc4,#17b8e0)", color: "white", boxShadow: "0 6px 22px rgba(26,111,196,0.35)" }}>
                Talk to an Expert <span>→</span>
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
              <Image src={img1} alt="ERP Services" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="img-accent" style={{ width: 190, height: 140, bottom: 10, left: "3%" }}>
              <Image src={img2} alt="ERP Implementation" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="img-accent" style={{ width: 160, height: 118, top: 0, right: "2%" }}>
              <Image src={img3} alt="ERP Support" fill style={{ objectFit: "cover" }} />
            </div>

            {/* <div className="float-badge" style={{ bottom: 62, right: "5%", animationDelay: "1.2s" }}>
              <p className="sora text-xs font-bold text-[#1a6fc4] mb-0.5">500+ Projects</p>
              <p className="text-slate-500 text-[11px]">Delivered Globally</p>
            </div> */}
            <div className="float-badge"
              style={{ top: 20, left: "5%", animationDelay: "0.6s", background: "linear-gradient(135deg,#1a6fc4,#17b8e0)" }}>
              <p className="sora text-xs font-bold text-white mb-0.5">End-to-End</p>
              <p className="text-cyan-100 text-[11px]">ERP Services</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          SERVICES — alternating layout
      ═══════════════════════════════ */}
      <section className="py-20 px-4 bg-[#f4f8fd]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 fade-up">
            <div className="section-label" style={{ margin: "0 auto 14px" }}>What We Offer</div>
            <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f]" style={{ fontWeight: 800 }}>
              Our ERP Service Areas
            </h2>
            <p className="text-slate-500 mt-3 text-sm max-w-xl mx-auto leading-relaxed">
              Comprehensive ERP services that cover every stage of your enterprise technology journey.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {services.map((svc, i) => (
              <div key={svc.title} className={`svc-card fade-up d${(i % 5) + 1}`}>
                <div className="flex flex-col md:flex-row gap-6 p-8 items-start">
                  {/* Icon + title */}
                  <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-3 w-full md:w-48">
                    <div className="svc-icon">{svc.icon}</div>
                    <h3 className="sora text-lg text-[#1e3a5f] leading-snug text-center md:text-left" style={{ fontWeight: 800 }}>
                      {svc.title}
                    </h3>
                    <div className="hidden md:block w-8 h-0.5 rounded-full"
                      style={{ background: "linear-gradient(90deg,#1a6fc4,#17b8e0)" }} />
                  </div>

                  {/* Vertical divider */}
                  <div className="hidden md:block w-px self-stretch"
                    style={{ background: "linear-gradient(180deg, transparent, #e8f0fb 20%, #e8f0fb 80%, transparent)" }} />

                  {/* Content */}
                  <div className="flex-1 flex flex-col gap-3">
                    {svc.content.map((para, j) => (
                      <p key={j} className="text-slate-600 text-sm leading-relaxed">{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          SECOND IMAGE STRIP
      ═══════════════════════════════ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

          {/* Left: points */}
          <div className="flex-1 fade-left">
            <div className="section-label">Why Nexora ERP</div>
            <div className="dot-row"><span /><span /><span /></div>
            <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f] mb-8 leading-snug" style={{ fontWeight: 800 }}>
              A Trusted Partner<br />
              <span style={{ background: "linear-gradient(90deg,#1a6fc4,#17b8e0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Across the ERP Lifecycle
              </span>
            </h2>

            <div className="flex flex-col gap-5">
              {[
                { icon: "✅", title: "Single Partner, Full Lifecycle", desc: "From implementation through support — one team that knows your system inside out." },
                { icon: "🌍", title: "Global Reach, Local Expertise", desc: "Multi-country rollout capabilities with localization, compliance, and regional best practices." },
                { icon: "🔒", title: "Secure & Scalable", desc: "Every solution is built with enterprise-grade security and designed to scale as you grow." },
                // { icon: "📈", title: "Proven Results", desc: "500+ successful ERP projects across industries with measurable improvements in efficiency and ROI." },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 rounded-2xl flex items-center justify-center text-xl"
                    style={{ width: 46, height: 46, background: "linear-gradient(135deg,#eef4fd,#daeeff)" }}>
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
          <div className="flex-1 fade-right relative flex justify-center" style={{ minHeight: 420 }}>
            <div className="deco-ring" style={{ width: 340, height: 340, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

            <div className="img-main" style={{ width: 340, height: 260, marginTop: 50 }}>
              <Image src={img3} alt="ERP global rollout" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="img-accent" style={{ width: 175, height: 130, top: 0, right: "4%" }}>
              <Image src={img2} alt="ERP upgrade" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="img-accent" style={{ width: 155, height: 115, bottom: 20, left: "4%" }}>
              <Image src={img1} alt="ERP support" fill style={{ objectFit: "cover" }} />
            </div>

            {/* <div className="float-badge" style={{ top: 14, left: "6%", animationDelay: "0.8s" }}>
              <p className="sora text-xs font-bold text-[#1a6fc4] mb-0.5">12+ Years</p>
              <p className="text-slate-500 text-[11px]">ERP Expertise</p>
            </div> */}
            {/* <div className="float-badge"
              style={{ bottom: 30, right: "5%", animationDelay: "1.4s", background: "linear-gradient(135deg,#1a6fc4,#17b8e0)" }}>
              <p className="sora text-xs font-bold text-white mb-0.5">20+ Countries</p>
              <p className="text-cyan-100 text-[11px]">Global Rollouts</p>
            </div> */}
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
            Ready to Transform?
          </p>
          <h2 className="sora text-3xl md:text-5xl text-white mb-5 leading-tight" style={{ fontWeight: 800 }}>
            Let&apos;s Build Your<br />
            <span style={{ color: "#a5f3fc" }}>ERP Success Story</span>
          </h2>
          <p className="text-blue-200 text-base leading-relaxed mb-10 max-w-xl mx-auto" style={{ opacity: 0.88 }}>
            Partner with Nexora for end-to-end ERP services that deliver real results — from your
            first implementation to global scale and beyond.
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
