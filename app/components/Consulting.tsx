"use client";

import Image from "next/image";
import Link from "next/link";
import img1 from "@/app/Photo/img 1.jpg";
import img2 from "@/app/Photo/img 2.jpg";
import img3 from "@/app/Photo/img 3.jpg";

const services = [
  {
    icon: "🗂️",
    title: "ERP Advisory",
    desc: "Expert guidance on selecting, evaluating, and implementing the right ERP platform aligned with your business size, industry, and long-term growth objectives.",
  },
  {
    icon: "⚙️",
    title: "Business Process Optimization",
    desc: "We analyse your current workflows, identify inefficiencies, and redesign processes to improve productivity, reduce costs, and enhance overall operational performance.",
  },
  {
    icon: "☁️",
    title: "Cloud Transformation",
    desc: "Strategic advisory and hands-on support for migrating your infrastructure, applications, and workloads to scalable and secure cloud environments.",
  },
  {
    icon: "💡",
    title: "Digital Modernization",
    desc: "Helping businesses move from legacy systems to modern, agile digital platforms that improve user experience, flexibility, and competitive advantage.",
  },
  {
    icon: "🤖",
    title: "Automation Strategy",
    desc: "Designing intelligent automation frameworks — from robotic process automation to AI-driven workflows — that eliminate repetitive tasks and free your teams for strategic work.",
  },
  {
    icon: "📊",
    title: "Data & Analytics",
    desc: "Transform raw data into actionable business intelligence through advanced analytics, reporting dashboards, and data governance strategies that support confident decision-making.",
  },
  {
    icon: "🗺️",
    title: "Technology Roadmap Planning",
    desc: "We build comprehensive technology roadmaps that align IT investments with business goals, define implementation phases, and prioritise initiatives for maximum ROI.",
  },
];

const pillars = [
  {
    num: "01",
    title: "Discover & Diagnose",
    desc: "Deep-dive into your business challenges, goals, and existing systems to form a clear picture of where you are and where you need to be.",
  },
  {
    num: "02",
    title: "Strategize & Design",
    desc: "Develop a tailored technology and process strategy with clear milestones, risk considerations, and measurable success metrics.",
  },
  {
    num: "03",
    title: "Implement & Execute",
    desc: "Our consultants stay engaged through implementation — ensuring the strategy translates into real, working outcomes without disruption.",
  },
  {
    num: "04",
    title: "Optimize & Evolve",
    desc: "Post-delivery, we partner with you on continuous improvement cycles so your systems and processes evolve as your business grows.",
  },
];

const whyItems = [
  { icon: "🎯", title: "Business-First Approach", desc: "We start with your goals, not technology. Every recommendation is grounded in what drives real business value." },
  { icon: "🤝", title: "Collaborative Partnership", desc: "We work alongside your teams — sharing knowledge, building capability, and ensuring genuine long-term success." },
  { icon: "📈", title: "Measurable Results", desc: "Outcomes are tied to KPIs. We track progress, report transparently, and adjust strategies based on real data." },
  { icon: "🔒", title: "Industry Best Practices", desc: "Our consultants bring cross-industry expertise and frameworks refined across hundreds of engagements." },
  { icon: "⚡", title: "Scalable Solutions", desc: "We design for where you are today and where you are going — ensuring solutions scale with your growth." },
  { icon: "🌐", title: "End-to-End Support", desc: "From initial advisory through implementation and beyond — a single trusted partner for your entire journey." },
];

export default function Consulting() {
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
        @keyframes diagonalFloat {
          0%,100% { transform: translate(0,0); }
          50%      { transform: translate(5px,-8px); }
        }

        .fade-left  { animation: fadeLeft  0.75s ease both; }
        .fade-right { animation: fadeRight 0.75s ease both; }
        .fade-up    { animation: fadeUp    0.75s ease both; }
        .scale-in   { animation: scaleIn   0.65s ease both; }

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

        /* Service cards */
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

        /* Pillar step */
        .pillar-step {
          background: white; border-radius: 20px;
          padding: 28px 22px; border: 1.5px solid #e8f0fb;
          transition: all 0.3s ease; position: relative; overflow: hidden;
        }
        .pillar-step::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #1a6fc4, #17b8e0);
          transform: scaleX(0); transform-origin: left; transition: transform 0.35s ease;
        }
        .pillar-step:hover::before { transform: scaleX(1); }
        .pillar-step:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 50px rgba(26,111,196,0.13);
        }
        .step-num-bg {
          font-family: 'Sora', sans-serif; font-size: 38px; font-weight: 800;
          line-height: 1; margin-bottom: 12px;
          background: linear-gradient(135deg, rgba(26,111,196,0.12), rgba(23,184,224,0.12));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }

        /* Why cards */
        .why-card {
          background: white; border-radius: 18px;
          padding: 26px 22px; border: 1.5px solid #e8f0fb;
          transition: all 0.3s ease;
        }
        .why-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 45px rgba(26,111,196,0.12);
        }
        .why-icon {
          width: 50px; height: 50px; border-radius: 14px; margin-bottom: 14px;
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

        /* CTA buttons */
        .cta-btn {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 13px 28px; border-radius: 50px;
          font-family: 'Sora', sans-serif; font-size: 14px; font-weight: 700;
          transition: all 0.3s ease; text-decoration: none; cursor: pointer; border: none;
        }

        /* Highlight tag */
        .highlight-tag {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(26,111,196,0.07);
          border: 1px solid rgba(26,111,196,0.13);
          border-radius: 50px; padding: 5px 14px;
          font-size: 13px; color: #1a6fc4; font-weight: 600;
        }
      `}</style>

      {/* ═══════════════════════════════
          HERO BANNER
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

            {/* Left text */}
            <div>
              <p className="fade-left sora text-xs tracking-[0.22em] text-cyan-200 uppercase mb-3 d1" style={{ fontWeight: 600 }}>
                Nexora Technology Services Pvt Ltd
              </p>
              <h1 className="fade-left sora text-4xl md:text-5xl text-white mb-5 leading-tight d2" style={{ fontWeight: 800 }}>
                Strategic Technology<br />
                <span style={{ color: "#a5f3fc" }}>Consulting Services</span>
              </h1>
              <p className="fade-left text-blue-100 text-base leading-relaxed max-w-lg mb-8 d3" style={{ opacity: 0.88 }}>
                We partner with organizations to understand their business challenges, analyze operational
                processes, and deliver customized IT and digital transformation strategies that drive
                measurable results.
              </p>
              <div className="fade-up d4 flex flex-wrap gap-4">
                <Link href="/contact" className="cta-btn"
                  style={{ background: "white", color: "#1a6fc4", boxShadow: "0 8px 28px rgba(0,0,0,0.15)" }}>
                  Talk to a Consultant
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link href="/contact" className="cta-btn text-white"
                  style={{ background: "rgba(255,255,255,0.12)", border: "1.5px solid rgba(255,255,255,0.4)" }}>
                  Free Strategy Call
                </Link>
              </div>
            </div>

            {/* Right: stat blocks */}
            {/* <div className="fade-right hidden lg:flex flex-col gap-4 d2">
              {[
                { icon: "🎯", label: "Engagements Delivered", value: "500+", sub: "Across 20+ countries" },
                { icon: "📈", label: "Average Cost Reduction", value: "30–40%", sub: "Post-optimization" },
                { icon: "⚡", label: "Faster Time-to-Market", value: "3×", sub: "With our roadmaps" },
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
          ABOUT CONSULTING + IMAGES RIGHT
      ═══════════════════════════════ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

          {/* Left: text */}
          <div className="flex-1 fade-left">
            <div className="section-label">Our Consulting Philosophy</div>
            <div className="dot-row"><span /><span /><span /></div>
            <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f] mb-5 leading-snug" style={{ fontWeight: 800 }}>
              More Than Recommendations —<br />
              <span style={{ background: "linear-gradient(90deg,#1a6fc4,#17b8e0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                We Deliver Solutions
              </span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              At Nexora, consulting is not just about presenting a report and walking away. We are with
              you from diagnosis through delivery — embedding alongside your teams, driving implementation,
              and measuring real business outcomes.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              With a strong understanding of industry best practices and emerging technologies, we help
              businesses improve efficiency, reduce operational costs, and accelerate innovation through
              scalable and future-ready solutions aligned with their goals.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {["ERP Advisory", "Process Optimization", "Cloud Strategy", "Digital Modernization"].map((tag) => (
                <span key={tag} className="highlight-tag"><span>✓</span>{tag}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="cta-btn"
                style={{ background: "linear-gradient(135deg,#1a6fc4,#17b8e0)", color: "white", boxShadow: "0 6px 22px rgba(26,111,196,0.35)" }}>
                Start a Conversation <span>→</span>
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
            <div className="deco-ring" style={{ width: 280, height: 280, top: "50%", left: "50%", transform: "translate(-50%,-50%)", animationDirection: "reverse", opacity: 0.6 }} />

            <div className="img-main" style={{ width: 360, height: 280, marginTop: 40 }}>
              <Image src={img1} alt="Nexora consulting" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="img-accent" style={{ width: 190, height: 140, bottom: 10, left: "3%" }}>
              <Image src={img2} alt="Strategy session" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="img-accent" style={{ width: 160, height: 118, top: 0, right: "2%" }}>
              <Image src={img3} alt="Business analysis" fill style={{ objectFit: "cover" }} />
            </div>

            <div className="float-badge" style={{ bottom: 62, right: "5%", animationDelay: "1.2s" }}>
              <p className="sora text-xs font-bold text-[#1a6fc4] mb-0.5">ISO Certified</p>
              <p className="text-slate-500 text-[11px]">Quality Assured</p>
            </div>
            {/* <div className="float-badge"
              style={{ top: 20, left: "5%", animationDelay: "0.6s", background: "linear-gradient(135deg,#1a6fc4,#17b8e0)" }}>
              <p className="sora text-xs font-bold text-white mb-0.5">500+ Engagements</p>
              <p className="text-cyan-100 text-[11px]">Delivered Globally</p>
            </div> */}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          SERVICE AREAS GRID
      ═══════════════════════════════ */}
      <section className="py-20 px-4 bg-[#f4f8fd]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 fade-up">
            <div className="section-label" style={{ margin: "0 auto 14px" }}>Our Consulting Areas</div>
            <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f]" style={{ fontWeight: 800 }}>
              What We Consult On
            </h2>
            <p className="text-slate-500 mt-3 text-sm max-w-xl mx-auto leading-relaxed">
              From strategy to execution — our consulting services span every dimension of technology
              transformation to help you compete and grow.
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
          OUR APPROACH (4-step)
      ═══════════════════════════════ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 fade-up">
            <div className="section-label" style={{ margin: "0 auto 14px" }}>Our Approach</div>
            <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f]" style={{ fontWeight: 800 }}>
              How We Work With You
            </h2>
            <p className="text-slate-500 mt-3 text-sm max-w-lg mx-auto leading-relaxed">
              A proven four-phase consulting methodology that ensures clarity, accountability, and
              measurable outcomes at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => (
              <div key={p.num} className={`pillar-step fade-up d${i + 1}`}>
                <div className="step-num-bg">{p.num}</div>
                <h4 className="sora text-sm text-[#1e3a5f] mb-2" style={{ fontWeight: 700 }}>{p.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
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
              Why Nexora{" "}
              <span style={{ background: "linear-gradient(135deg,#1a6fc4,#17b8e0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Consulting
              </span>
            </h2>
            <p className="text-slate-500 mt-3 text-sm max-w-lg mx-auto leading-relaxed">
              We combine deep technical expertise with genuine business acumen to deliver consulting
              that creates lasting, meaningful impact.
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
          SECOND IMAGE SECTION
      ═══════════════════════════════ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-14 items-center">

          {/* Left: steps detail */}
          <div className="flex-1 fade-left">
            <div className="section-label">Continuous Improvement</div>
            <div className="dot-row"><span /><span /><span /></div>
            <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f] mb-5 leading-snug" style={{ fontWeight: 800 }}>
              Scalable, Future-Ready<br />
              <span style={{ background: "linear-gradient(90deg,#1a6fc4,#17b8e0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Solutions That Evolve
              </span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Our team works closely with clients to provide expert guidance, seamless implementation
              support, and continuous improvement strategies that enable long-term business success.
              We don&apos;t just hand over a report — we stay engaged until you achieve measurable results.
            </p>

            <div className="flex flex-col gap-5">
              {[
                { icon: "🔍", title: "Deep Business Analysis", desc: "We invest time to truly understand your operations before making a single recommendation." },
                { icon: "🛠️", title: "Implementation Support", desc: "Our consultants stay hands-on through execution — bridging strategy and delivery." },
                { icon: "📊", title: "Outcome Measurement", desc: "Every engagement is tied to clear KPIs so you can see the value we deliver." },
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
          <div className="flex-1 fade-right relative flex justify-center" style={{ minHeight: 420 }}>
            <div className="deco-ring" style={{ width: 340, height: 340, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

            <div className="img-main" style={{ width: 340, height: 260, marginTop: 50 }}>
              <Image src={img2} alt="Nexora consulting team" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="img-accent" style={{ width: 175, height: 130, top: 0, right: "4%" }}>
              <Image src={img3} alt="Strategy planning" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="img-accent" style={{ width: 155, height: 115, bottom: 20, left: "4%" }}>
              <Image src={img1} alt="Digital transformation" fill style={{ objectFit: "cover" }} />
            </div>

            <div className="float-badge" style={{ top: 14, left: "6%", animationDelay: "0.8s" }}>
              <p className="sora text-xs font-bold text-[#1a6fc4] mb-0.5">Expert Guidance</p>
              <p className="text-slate-500 text-[11px]">From Day One</p>
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

        <div className="max-w-3xl mx-auto text-center relative z-10 scale-in">
          <p className="sora text-xs tracking-[0.22em] text-cyan-300 uppercase mb-3 font-semibold">
            Ready to Transform?
          </p>
          <h2 className="sora text-3xl md:text-5xl text-white mb-5 leading-tight" style={{ fontWeight: 800 }}>
            Let&apos;s Build Your Digital<br />
            <span style={{ color: "#a5f3fc" }}>Transformation Strategy</span>
          </h2>
          <p className="text-blue-200 text-base leading-relaxed mb-10 max-w-xl mx-auto" style={{ opacity: 0.88 }}>
            Partner with Nexora consultants to unlock new efficiency, reduce costs, and accelerate
            growth. From first conversation to final delivery — we are with you every step.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="cta-btn"
              style={{ color: "#1a6fc4", background: "white", boxShadow: "0 8px 28px rgba(0,0,0,0.2)" }}>
              Book a Free Consultation <span>→</span>
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
