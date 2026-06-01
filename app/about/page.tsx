"use client";

const leaders = [
  {
    name: "Venkatesh Gothe",
    title: "Founder & CEO",
    color: "#1a6fc4",
    bg: "linear-gradient(145deg, #dbeafe 0%, #e0f2fe 100%)",
  },
  {
    name: "M. B Sanjay",
    title: "COO",
    color: "#1580d8",
    bg: "linear-gradient(145deg, #e0f2fe 0%, #cffafe 100%)",
  },
];

export default function About() {
  return (
    <div className="min-h-screen" style={{ background: "#f4f8fd" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800;900&family=DM+Sans:wght@400;500;600&display=swap');
        * { font-family: 'DM Sans', sans-serif; box-sizing: border-box; }
        .sora { font-family: 'Sora', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-28px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(28px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }

        .fade-up    { animation: fadeUp    0.7s ease both; }
        .fade-left  { animation: fadeLeft  0.7s ease both; }
        .fade-right { animation: fadeRight 0.7s ease both; }
        .d1 { animation-delay: 0.10s; }
        .d2 { animation-delay: 0.24s; }
        .float-orb { animation: float 7s ease-in-out infinite; }

        .geo-ring {
          position: absolute; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.13);
          pointer-events: none;
        }

        /* ── Leader card ── */
        .leader-card {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(26,111,196,0.10);
          border: 1.5px solid #e8f0fb;
          display: flex;
          transition: box-shadow 0.35s ease, transform 0.35s ease;
        }
        .leader-card:hover {
          box-shadow: 0 20px 64px rgba(26,111,196,0.18);
          transform: translateY(-4px);
        }

        /* left text panel */
        .leader-left {
          flex: 1;
          padding: 52px 52px 52px 52px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* right photo panel */
        .leader-right {
          width: 320px;
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
        }

        /* accent bar */
        .leader-bar {
          width: 52px; height: 5px; border-radius: 3px;
          margin-bottom: 24px;
        }

        /* mobile stack */
        @media (max-width: 767px) {
          .leader-card { flex-direction: column; }
          .leader-right {
            width: 100%;
            height: 240px;
            order: -1;
          }
          .leader-left {
            padding: 32px 24px;
          }
          .leader-bar { margin-bottom: 16px; }
        }
      `}</style>

      {/* ═══════════════════════════════
          HERO
      ═══════════════════════════════ */}
      <section
        className="relative overflow-hidden py-14 md:py-20 px-4 text-center"
        style={{
          background:
            "linear-gradient(135deg, #1a6fc4 0%, #1e80d8 45%, #1a9fd4 80%, #17b8e0 100%)",
        }}
      >
        {/* Geo rings */}
        <div className="geo-ring" style={{ width: 380, height: 380, top: -120, right: -80, opacity: 0.15 }} />
        <div className="geo-ring" style={{ width: 220, height: 220, top: 30,  right: 80, opacity: 0.09 }} />
        <div className="geo-ring" style={{ width: 500, height: 500, bottom: -220, left: -100, opacity: 0.07 }} />

        {/* Orbs */}
        <div
          className="float-orb absolute top-6 left-1/3 w-24 h-24 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #7dd3fc, transparent)" }}
        />
        <div
          className="float-orb absolute bottom-4 right-20 w-14 h-14 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #a5f3fc, transparent)", animationDelay: "2s" }}
        />

        <div className="max-w-3xl mx-auto relative z-10 fade-up">
          {/* Label */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
            style={{
              background: "rgba(255,255,255,0.14)",
              border: "1px solid rgba(255,255,255,0.28)",
            }}
          >
            <span
              style={{
                width: 7, height: 7, borderRadius: "50%",
                background: "#a5f3fc", display: "inline-block", flexShrink: 0,
              }}
            />
            <span
              className="sora text-cyan-100 text-xs font-semibold tracking-[0.16em] uppercase"
            >
              Nexora Technology Services
            </span>
          </div>

          <h1
            className="sora text-4xl md:text-6xl text-white leading-tight"
            style={{ fontWeight: 800 }}
          >
            Leadership{" "}
            <span style={{ color: "#a5f3fc" }}>Team</span>
          </h1>
          <p
            className="text-blue-100 mt-4 text-base max-w-lg mx-auto leading-relaxed"
            style={{ opacity: 0.85 }}
          >
            Meet the people driving Nexora's vision — experience, passion, and
            an unwavering commitment to our clients.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════
          LEADER CARDS
      ═══════════════════════════════ */}
      <section className="py-14 md:py-20 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          {leaders.map((leader, i) => (
            <div
              key={leader.name}
              className={`leader-card ${i === 0 ? "fade-up d1" : "fade-up d2"}`}
            >
              {/* ── Left: text ── */}
              <div className="leader-left">
                {/* Coloured bar */}
                <div
                  className="leader-bar"
                  style={{
                    background: `linear-gradient(90deg, ${leader.color}, #17b8e0)`,
                  }}
                />

                {/* Name */}
                <h2
                  className="sora text-3xl md:text-4xl text-[#1e3a5f] leading-tight mb-3"
                  style={{ fontWeight: 800 }}
                >
                  {leader.name}
                </h2>

                {/* Title badge */}
                <span
                  className="sora inline-block text-sm font-bold tracking-wide px-4 py-1.5 rounded-full"
                  style={{
                    background: `linear-gradient(135deg, ${leader.color}18, #17b8e018)`,
                    color: leader.color,
                    border: `1.5px solid ${leader.color}30`,
                  }}
                >
                  {leader.title}
                </span>
              </div>

              {/* ── Right: avatar placeholder ── */}
              <div
                className="leader-right"
                style={{ background: leader.bg, display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                {/* Soft inner glow ring */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "radial-gradient(circle at 60% 40%, rgba(255,255,255,0.55) 0%, transparent 70%)",
                  pointerEvents: "none",
                }} />
                {/* Avatar circle */}
                <div style={{
                  width: 140, height: 140, borderRadius: "50%",
                  background: "white",
                  boxShadow: "0 8px 32px rgba(26,111,196,0.18)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative", zIndex: 2,
                  border: "4px solid rgba(255,255,255,0.9)",
                }}>
                  {/* Person SVG icon */}
                  <svg width="72" height="72" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Head */}
                    <circle cx="40" cy="26" r="14" fill={leader.color} opacity="0.85" />
                    {/* Body */}
                    <path
                      d="M12 72c0-15.464 12.536-28 28-28s28 12.536 28 28"
                      stroke={leader.color}
                      strokeWidth="0"
                      fill={leader.color}
                      opacity="0.7"
                    />
                    <ellipse cx="40" cy="72" rx="28" ry="16" fill={leader.color} opacity="0.7" />
                    {/* Suit collar / tie hint */}
                    <rect x="35" y="44" width="10" height="18" rx="2" fill="white" opacity="0.55" />
                    <polygon points="40,44 37,52 40,50 43,52" fill={leader.color} opacity="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════
          FOOTER
      ═══════════════════════════════ */}
      <footer
        className="py-8 px-4 text-center"
        style={{
          background: "linear-gradient(135deg, #071e3d, #0f3460)",
          color: "rgba(255,255,255,0.45)",
          fontSize: "13px",
        }}
      >
        <p className="sora">
          © 2026 Nexora Technology Services Pvt. Ltd. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
