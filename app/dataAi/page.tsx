"use client";

import Link from "next/link";

const platforms = [
  {
    icon: "🔬",
    name: "KNIME Analytics Platform",
    desc: "KNIME (Konstanz Information Miner) is an open-source data analytics, machine learning, and workflow automation platform widely used for data preparation, predictive analytics, AI model development, and reporting. It provides a visual drag-and-drop interface that allows users to build data workflows without extensive coding knowledge.",
  },
  {
    icon: "📊",
    name: "Microsoft Power BI",
    desc: "A business analytics tool used for data visualization, dashboards, and reporting.",
  },
  {
    icon: "📈",
    name: "Tableau",
    desc: "A leading business intelligence and visualization platform used for advanced reporting and analytics.",
  },
  {
    icon: "🤖",
    name: "RapidMiner",
    desc: "A data science and machine learning platform that helps businesses build predictive models and automate analytics processes.",
  },
  {
    icon: "🔄",
    name: "Apache NiFi",
    desc: "An open-source data integration and automation tool designed for data flow management between systems.",
  },
];

export default function DataAI() {
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

        .fade-left { animation: fadeLeft 0.75s ease both; }
        .fade-up   { animation: fadeUp   0.75s ease both; }

        .d1{animation-delay:0.05s} .d2{animation-delay:0.13s}
        .d3{animation-delay:0.21s} .d4{animation-delay:0.29s}
        .d5{animation-delay:0.37s}

        .geo-ring {
          position: absolute; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
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

        .platform-card {
          background: white; border-radius: 22px;
          padding: 30px 26px; border: 1.5px solid #e8f0fb;
          transition: all 0.32s cubic-bezier(0.4,0,0.2,1);
          position: relative; overflow: hidden;
        }
        .platform-card::after {
          content: ''; position: absolute;
          bottom: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #1a6fc4, #17b8e0);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s ease;
        }
        .platform-card:hover::after { transform: scaleX(1); }
        .platform-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 22px 60px rgba(26,111,196,0.14);
          border-color: rgba(26,111,196,0.2);
        }
        .platform-icon {
          width: 56px; height: 56px; border-radius: 16px;
          background: linear-gradient(135deg, #eef4fd, #daeeff);
          display: flex; align-items: center; justify-content: center;
          font-size: 26px; margin-bottom: 16px;
          transition: transform 0.3s ease; flex-shrink: 0;
        }
        .platform-card:hover .platform-icon { transform: scale(1.1) rotate(-5deg); }
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

        <div className="max-w-4xl mx-auto relative z-10">
          <p className="fade-left sora text-xs tracking-[0.22em] text-cyan-200 uppercase mb-3 d1" style={{ fontWeight: 600 }}>
            Nexora Technology Services Pvt Ltd
          </p>
          <h1 className="fade-left sora text-4xl md:text-6xl text-white mb-6 leading-tight d2" style={{ fontWeight: 800 }}>
            Data, ML &amp;<br />
            <span style={{ color: "#a5f3fc" }}>Artificial Intelligence</span>
          </h1>
          <p className="fade-left text-blue-100 text-base leading-relaxed max-w-2xl mb-4 d3" style={{ opacity: 0.9 }}>
            At Nexora Technology Services Pvt Ltd, we help businesses unlock the power of Data, Machine
            Learning (ML), and Artificial Intelligence (AI) to drive smarter decisions, automate processes,
            and accelerate innovation. Our solutions enable organizations to transform raw data into meaningful
            insights and intelligent business outcomes.
          </p>
          <p className="fade-left text-blue-100 text-base leading-relaxed max-w-2xl mb-10 d4" style={{ opacity: 0.88 }}>
            We provide end-to-end services including data analytics, predictive modelling, AI-powered automation,
            machine learning solutions, and intelligent dashboards tailored to business needs. From improving
            operational efficiency to enhancing customer experiences, our Data, ML, and AI services help
            businesses stay competitive in a rapidly evolving digital landscape.
          </p>
          <div className="fade-up d5">
            <Link
              href="/contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 30px", borderRadius: 50,
                fontFamily: "'Sora',sans-serif", fontSize: 14, fontWeight: 700,
                color: "#1a6fc4", background: "white",
                boxShadow: "0 8px 28px rgba(0,0,0,0.15)", textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              Get in Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          EXPERIENCED RESOURCES NOTE
      ═══════════════════════════════ */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto fade-up">
          <p className="text-slate-600 text-base leading-relaxed text-center">
            We have experienced resources who can derive and deliver the solutions in the below mentioned
            platforms and tools.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════
          PLATFORMS & TOOLS
      ═══════════════════════════════ */}
      <section className="py-16 px-4 bg-[#f4f8fd]">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12 fade-up">
            <div className="section-label" style={{ margin: "0 auto 14px" }}>Platforms &amp; Tools</div>
            <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f]" style={{ fontWeight: 800 }}>
              KNIME and Similar Data Analytics &amp; AI Tools
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((p, i) => (
              <div key={p.name} className={`platform-card fade-up d${(i % 5) + 1}`}>
                <div className="platform-icon">{p.icon}</div>
                <h3 className="sora text-base text-[#1e3a5f] mb-3 leading-snug" style={{ fontWeight: 700 }}>
                  {p.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
