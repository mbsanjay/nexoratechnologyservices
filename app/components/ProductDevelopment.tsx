"use client";

import Image from "next/image";
import Link from "next/link";
import img1 from "@/app/Photo/img 1.jpg";
import img2 from "@/app/Photo/img 2.jpg";
import img3 from "@/app/Photo/img 3.jpg";

const services = [
  {
    icon: "🌐",
    title: "Web Application Development",
    desc: "We build responsive, scalable, and high-performance web applications tailored to your business processes and customer needs.",
    subtitle: "Our Expertise Includes",
    items: ["Business portals", "CRM & ERP solutions", "E-commerce applications", "Workflow management systems", "Customer self-service portals", "Admin dashboards"],
  },
  {
    icon: "📱",
    title: "Mobile Application Development",
    desc: "Develop powerful and user-friendly mobile applications for Android and iOS platforms.",
    subtitle: "Mobile Solutions",
    items: ["Native mobile applications", "Cross-platform app development", "Enterprise mobility solutions", "API integrations", "Mobile UI/UX design"],
  },
  {
    icon: "🏢",
    title: "Enterprise Software Development",
    desc: "We create enterprise-grade software solutions that improve operational efficiency and support business growth.",
    subtitle: "Solutions Include",
    items: ["HR Management Systems", "Inventory & Supply Chain Systems", "Finance & Accounting Software", "Manufacturing & ERP Solutions", "Learning Management Systems", "Document Management Systems"],
  },
  {
    icon: "🔄",
    title: "Software Product Development - Process",
    desc: "Transform your ideas into successful digital products with end-to-end product development services.",
    subtitle: "Our Product Development Approach",
    items: ["Requirement analysis", "UI/UX design", "Agile development", "Testing & quality assurance", "Deployment & support", "Product enhancement"],
  },
  {
    icon: "🔗",
    title: "API & System Integration",
    desc: "Enable seamless communication between applications and platforms through secure API and integration services.",
    subtitle: "Integration Services",
    items: ["Third-party API integration", "Payment gateway integration", "CRM & ERP integrations", "Cloud integrations", "Data synchronization services"],
  },
  {
    icon: "⚡",
    title: "Application Modernization",
    desc: "Upgrade legacy applications with modern technologies to improve performance, scalability, and user experience.",
    subtitle: "Modernization Services Include",
    items: ["Legacy system migration", "UI modernization", "Cloud enablement", "Performance optimization", "Database modernization"],
  },
];

const technologies = [
  { label: "React JS", color: "#61dafb" },
  { label: "Angular", color: "#dd1b16" },
  { label: "Node JS", color: "#339933" },
  { label: "Java", color: "#f89820" },
  { label: "Python", color: "#3776ab" },
  { label: "PHP", color: "#777bb4" },
  { label: "SQL & NoSQL Databases", color: "#f29111" },
  { label: "Cloud & DevOps Technologies", color: "#17b8e0" },
];

const whyItems = [
  { icon: "🎯", title: "Customized Business-Focused Solutions", desc: "Every solution is built around your specific workflows, industry, and business objectives — not a generic template." },
  { icon: "📈", title: "Scalable & Secure Development", desc: "Enterprise-grade architecture designed to scale with your growth while maintaining robust security standards." },
  { icon: "⚡", title: "Agile Development Methodology", desc: "Iterative delivery with continuous feedback ensures faster time-to-market and better alignment with your vision." },
  { icon: "👨‍💻", title: "Experienced Full-Stack Team", desc: "A skilled team of developers, designers, and architects with deep expertise across front-end, back-end, and cloud." },
  { icon: "🎨", title: "High-Quality UI/UX Design", desc: "Intuitive, user-centric interfaces that improve adoption, reduce training time, and deliver exceptional experiences." },
  { icon: "🛡️", title: "Continuous Support & Maintenance", desc: "Post-launch support, performance monitoring, and ongoing enhancements to keep your product running at its best." },
];

export default function ProductDevelopment() {
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

        /* Service card */
        .svc-card {
          background: white; border-radius: 22px;
          padding: 28px 26px; border: 1.5px solid #e8f0fb;
          transition: all 0.32s cubic-bezier(0.4,0,0.2,1);
          position: relative; overflow: hidden; height: 100%;
        }
        .svc-card::after {
          content: ''; position: absolute;
          bottom: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #1a6fc4, #17b8e0);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s ease;
        }
        .svc-card:hover::after { transform: scaleX(1); }
        .svc-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 22px 60px rgba(26,111,196,0.14);
          border-color: rgba(26,111,196,0.2);
        }
        .svc-icon {
          width: 56px; height: 56px; border-radius: 16px;
          background: linear-gradient(135deg, #eef4fd, #daeeff);
          display: flex; align-items: center; justify-content: center;
          font-size: 26px; margin-bottom: 16px;
          transition: transform 0.3s ease;
        }
        .svc-card:hover .svc-icon { transform: scale(1.1) rotate(-5deg); }
        .bullet-item {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 13px; color: #475569; line-height: 1.5; padding: 2px 0;
        }
        .bullet-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: linear-gradient(135deg, #1a6fc4, #17b8e0);
          flex-shrink: 0; margin-top: 6px;
        }

        /* Tech pill */
        .tech-pill {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 9px 18px; border-radius: 50px;
          background: white; border: 1.5px solid #e8f0fb;
          font-size: 13px; font-weight: 600; color: #1e3a5f;
          transition: all 0.25s ease;
        }
        .tech-pill:hover {
          border-color: rgba(26,111,196,0.3);
          box-shadow: 0 6px 20px rgba(26,111,196,0.1);
          transform: translateY(-2px);
        }

        /* Why card */
        .why-card {
          background: white; border-radius: 20px;
          padding: 26px 22px; border: 1.5px solid #e8f0fb;
          transition: all 0.3s ease;
        }
        .why-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 45px rgba(26,111,196,0.12);
        }
        .why-icon {
          width: 52px; height: 52px; border-radius: 14px; margin-bottom: 14px;
          background: linear-gradient(135deg, #eef4fd, #daeeff);
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; transition: transform 0.3s ease;
        }
        .why-card:hover .why-icon { transform: scale(1.1) rotate(-5deg); }

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

        .highlight-tag {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(26,111,196,0.07);
          border: 1px solid rgba(26,111,196,0.13);
          border-radius: 50px; padding: 5px 14px;
          font-size: 13px; color: #1a6fc4; font-weight: 600;
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
              <h1 className="fade-left sora text-4xl md:text-5xl text-white mb-3 leading-tight d2" style={{ fontWeight: 800 }}>
                Product Development<br />
                <span style={{ color: "#a5f3fc" }}>Services</span>
              </h1>
              <p className="fade-left sora text-sm text-cyan-200 mb-5 d2" style={{ fontWeight: 600 }}>
                Tailored Software Solutions Built for Your Business
              </p>
              <p className="fade-left text-blue-100 text-base leading-relaxed max-w-lg mb-8 d3" style={{ opacity: 0.9 }}>
                We specialize in delivering custom software development solutions designed to meet unique
                business requirements — helping organizations streamline operations, improve productivity,
                and accelerate digital transformation through scalable and innovative technology.
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

            {/* Right: stat blocks */}
            <div className="fade-right hidden lg:flex flex-col gap-4 d2">
              {[
                { icon: "🌐", label: "Web & Mobile Apps Built", value: "300+", sub: "Across industries" },
                { icon: "⚙️", label: "Enterprise Solutions", value: "150+", sub: "Deployed globally" },
                { icon: "🔗", label: "API Integrations", value: "200+", sub: "Seamlessly connected" },
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
            <div className="section-label">What We Build</div>
            <div className="dot-row"><span /><span /><span /></div>
            <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f] mb-5 leading-snug" style={{ fontWeight: 800 }}>
              From Enterprise Apps<br />
              <span style={{ background: "linear-gradient(90deg,#1a6fc4,#17b8e0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                to Mobile Platforms
              </span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              From enterprise applications to web and mobile platforms, our custom development services
              are focused on creating reliable, secure, and future-ready systems that align with your
              business goals.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {["Web Applications", "Mobile Apps", "Enterprise Systems", "API Integrations"].map((tag) => (
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

          {/* Right: images */}
          <div className="flex-1 fade-right relative flex justify-center" style={{ minHeight: 460 }}>
            <div className="deco-ring" style={{ width: 380, height: 380, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
            <div className="deco-ring" style={{ width: 270, height: 270, top: "50%", left: "50%", transform: "translate(-50%,-50%)", animationDirection: "reverse", opacity: 0.55 }} />

            <div className="img-main" style={{ width: 360, height: 280, marginTop: 40 }}>
              <Image src={img1} alt="Product Development" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="img-accent" style={{ width: 190, height: 140, bottom: 10, left: "3%" }}>
              <Image src={img2} alt="Software development" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="img-accent" style={{ width: 160, height: 118, top: 0, right: "2%" }}>
              <Image src={img3} alt="Mobile apps" fill style={{ objectFit: "cover" }} />
            </div>

            <div className="float-badge" style={{ bottom: 62, right: "5%", animationDelay: "1.2s" }}>
              <p className="sora text-xs font-bold text-[#1a6fc4] mb-0.5">Future-Ready</p>
              <p className="text-slate-500 text-[11px]">Secure & Scalable</p>
            </div>
            <div className="float-badge"
              style={{ top: 20, left: "5%", animationDelay: "0.6s", background: "linear-gradient(135deg,#1a6fc4,#17b8e0)" }}>
              <p className="sora text-xs font-bold text-white mb-0.5">300+ Solutions</p>
              <p className="text-cyan-100 text-[11px]">Delivered Globally</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          SERVICE OFFERINGS GRID
      ═══════════════════════════════ */}
      <section className="py-20 px-4 bg-[#f4f8fd]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 fade-up">
            <div className="section-label" style={{ margin: "0 auto 14px" }}>Our Product Development Services</div>
            <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f]" style={{ fontWeight: 800 }}>
              What We Develop for You
            </h2>
            <p className="text-slate-500 mt-3 text-sm max-w-xl mx-auto leading-relaxed">
              Comprehensive software development services covering every layer of your digital product —
              from idea to deployment and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <div key={svc.title} className={`svc-card fade-up d${(i % 6) + 1}`}>
                <div className="svc-icon">{svc.icon}</div>
                <h3 className="sora text-base text-[#1e3a5f] mb-2 leading-snug" style={{ fontWeight: 700 }}>
                  {svc.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{svc.desc}</p>
                <p className="sora text-xs text-[#1a6fc4] uppercase tracking-widest font-bold mb-3">
                  {svc.subtitle}
                </p>
                <ul className="space-y-1">
                  {svc.items.map((item) => (
                    <li key={item} className="bullet-item">
                      <span className="bullet-dot" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          TECHNOLOGIES + SECOND IMAGE
      ═══════════════════════════════ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

          {/* Left: technologies */}
          <div className="flex-1 fade-left">
            <div className="section-label">Technologies We Work With</div>
            <div className="dot-row"><span /><span /><span /></div>
            <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f] mb-5 leading-snug" style={{ fontWeight: 800 }}>
              Modern Stack,<br />
              <span style={{ background: "linear-gradient(90deg,#1a6fc4,#17b8e0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Robust Solutions
              </span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-8">
              Our development team works with modern technologies and frameworks to build robust,
              scalable, and maintainable solutions tailored to your business.
            </p>
            <div className="flex flex-wrap gap-3">
              {technologies.map((t) => (
                <div key={t.label} className="tech-pill">
                  <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: t.color }} />
                  {t.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right: images */}
          <div className="flex-1 fade-right relative flex justify-center" style={{ minHeight: 420 }}>
            <div className="deco-ring" style={{ width: 340, height: 340, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

            <div className="img-main" style={{ width: 340, height: 260, marginTop: 50 }}>
              <Image src={img3} alt="Technology stack" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="img-accent" style={{ width: 175, height: 130, top: 0, right: "4%" }}>
              <Image src={img1} alt="Development team" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="img-accent" style={{ width: 155, height: 115, bottom: 20, left: "4%" }}>
              <Image src={img2} alt="Code and design" fill style={{ objectFit: "cover" }} />
            </div>

            <div className="float-badge" style={{ top: 14, left: "6%", animationDelay: "0.8s" }}>
              <p className="sora text-xs font-bold text-[#1a6fc4] mb-0.5">Full-Stack Team</p>
              <p className="text-slate-500 text-[11px]">Expert Developers</p>
            </div>
            <div className="float-badge"
              style={{ bottom: 30, right: "5%", animationDelay: "1.4s", background: "linear-gradient(135deg,#1a6fc4,#17b8e0)" }}>
              <p className="sora text-xs font-bold text-white mb-0.5">Agile Delivery</p>
              <p className="text-cyan-100 text-[11px]">Faster Time-to-Market</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          WHY NEXORA
      ═══════════════════════════════ */}
      <section className="py-20 px-4 bg-[#f4f8fd]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 fade-up">
            <div className="section-label" style={{ margin: "0 auto 14px" }}>Why Choose Us</div>
            <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f]" style={{ fontWeight: 800 }}>
              Why Choose Nexora Technology{" "}
              <span style={{ background: "linear-gradient(135deg,#1a6fc4,#17b8e0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Services?
              </span>
            </h2>
            <p className="text-slate-500 mt-3 text-sm max-w-lg mx-auto leading-relaxed">
              We combine technical excellence with deep business understanding to deliver software
              solutions that create lasting value.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyItems.map((w, i) => (
              <div key={w.title} className={`why-card fade-up d${(i % 6) + 1}`}>
                <div className="why-icon">{w.icon}</div>
                <h3 className="sora text-sm text-[#1e3a5f] mb-2" style={{ fontWeight: 700 }}>{w.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{w.desc}</p>
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
            Ready to Build?
          </p>
          <h2 className="sora text-3xl md:text-5xl text-white mb-5 leading-tight" style={{ fontWeight: 800 }}>
            Let&apos;s Turn Your Idea<br />
            <span style={{ color: "#a5f3fc" }}>Into a Digital Product</span>
          </h2>
          <p className="text-blue-200 text-base leading-relaxed mb-10 max-w-xl mx-auto" style={{ opacity: 0.88 }}>
            Partner with Nexora to build scalable, secure, and future-ready software solutions
            that streamline operations and accelerate your digital transformation.
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
