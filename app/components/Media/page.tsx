"use client";

const board = [
  {
    name: "Venkatesh Gothe",
    title: "Founder & Chairman",
    color: "#1a6fc4",
    bg: "linear-gradient(145deg, #dbeafe 0%, #e0f2fe 100%)",
    initials: "VG",
  },
  {
    name: "Sanjana Gothe",
    title: "Director",
    color: "#1580d8",
    bg: "linear-gradient(145deg, #e0f2fe 0%, #cffafe 100%)",
    initials: "SG",
  },
];

export default function MediaPage() {
  return (
    <div className="min-h-screen" style={{ background: "#f4f8fd" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800;900&family=DM+Sans:wght@400;500;600&display=swap');
        *, *::before, *::after { font-family: 'DM Sans', sans-serif; box-sizing: border-box; }
        .sora { font-family: 'Sora', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-28px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }
        @keyframes gradShift {
          0%  { background-position: 0%   50%; }
          50% { background-position: 100% 50%; }
          100%{ background-position: 0%   50%; }
        }
        @keyframes spinSlow    { to { transform: rotate(360deg);  } }
        @keyframes spinReverse { to { transform: rotate(-360deg); } }
        @keyframes waveRing {
          0%   { transform: translate(-50%,-50%) scale(1);   opacity: 0.55; }
          100% { transform: translate(-50%,-50%) scale(2.4); opacity: 0; }
        }
        @keyframes starTwinkle {
          0%,100%{ opacity:0.15; transform:scale(1); }
          50%    { opacity:0.80; transform:scale(1.5); }
        }

        .fade-up   { animation: fadeUp   0.75s ease both; }
        .fade-left { animation: fadeLeft 0.75s ease both; }
        .d1 { animation-delay: 0.08s; }
        .d2 { animation-delay: 0.18s; }
        .d3 { animation-delay: 0.30s; }
        .d4 { animation-delay: 0.44s; }

        .float-orb  { animation: float 7s ease-in-out infinite; }
        .float-orb2 { animation: float 9s ease-in-out infinite reverse; }

        .geo-ring {
          position: absolute; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
          pointer-events: none;
        }
        .spin-ring  { animation: spinSlow    20s linear infinite; }
        .spin-ringr { animation: spinReverse 28s linear infinite; }

        .grad-text {
          background: linear-gradient(135deg, #a5f3fc 0%, #ffffff 45%, #bfdbfe 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradShift 5s ease infinite;
        }

        /* ── Investor card ── */
        .inv-card {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(26,111,196,0.10);
          border: 1.5px solid #e8f0fb;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 44px 36px 40px;
          text-align: center;
          transition: box-shadow 0.35s ease, transform 0.35s ease;
          flex: 1;
        }
        .inv-card:hover {
          box-shadow: 0 20px 64px rgba(26,111,196,0.18);
          transform: translateY(-6px);
        }
        .inv-bar {
          width: 44px; height: 4px; border-radius: 3px;
          margin-top: 28px; margin-bottom: 0;
        }

        @media (max-width: 600px) {
          .inv-row { flex-direction: column !important; }
          .inv-card { padding: 32px 24px; }
        }
      `}</style>

      {/* ═══════════════════════════
          HERO
      ═══════════════════════════ */}
      <section
        className="relative overflow-hidden py-16 md:py-24 px-4 flex flex-col items-center text-center"
        style={{
          background:
            "linear-gradient(135deg, #0f3460 0%, #1a6fc4 35%, #1e80d8 60%, #17b8e0 100%)",
        }}
      >
        {/* Stars */}
        {[
          { t: "14%", l: "8%",  s: 4, d: 0    },
          { t: "22%", l: "80%", s: 3, d: 0.6  },
          { t: "65%", l: "90%", s: 5, d: 1.1  },
          { t: "72%", l: "4%",  s: 3, d: 0.9  },
          { t: "38%", l: "50%", s: 3, d: 1.8  },
          { t: "82%", l: "62%", s: 2, d: 0.4  },
        ].map((s, i) => (
          <div
            key={i}
            style={{
              position: "absolute", top: s.t, left: s.l,
              width: s.s, height: s.s, borderRadius: "50%",
              background: "white", pointerEvents: "none",
              animation: `starTwinkle ${2.5 + i * 0.35}s ease-in-out infinite ${s.d}s`,
            }}
          />
        ))}

        {/* Geo rings */}
        <div className="geo-ring" style={{ width: 500, height: 500, top: -120, right: -130, opacity: 0.12 }} />
        <div className="geo-ring" style={{ width: 700, height: 700, bottom: -280, left: -180, opacity: 0.07 }} />

        {/* Spinning deco rings */}
        <div className="spin-ring absolute" style={{
          width: 420, height: 420, top: "50%", left: "50%",
          transform: "translate(-50%,-50%)", borderRadius: "50%",
          border: "1.5px dashed rgba(255,255,255,0.07)",
        }} />
        <div className="spin-ringr absolute" style={{
          width: 600, height: 600, top: "50%", left: "50%",
          transform: "translate(-50%,-50%)", borderRadius: "50%",
          border: "1px dashed rgba(255,255,255,0.05)",
        }} />

        {/* Orbs */}
        <div className="float-orb absolute" style={{
          width: 190, height: 190, borderRadius: "50%",
          top: "-40px", left: "8%",
          background: "radial-gradient(circle at 40% 40%, rgba(165,243,252,0.22), transparent 70%)",
        }} />
        <div className="float-orb2 absolute" style={{
          width: 130, height: 130, borderRadius: "50%",
          bottom: "50px", right: "10%",
          background: "radial-gradient(circle at 60% 60%, rgba(191,219,254,0.20), transparent 70%)",
        }} />

        {/* Icon + wave rings */}
        <div style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 28 }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{
              position: "absolute", top: "50%", left: "50%",
              width: 88, height: 88, borderRadius: "50%",
              border: "1.5px solid rgba(255,255,255,0.28)",
              animation: `waveRing 3s ease-out infinite ${i * 1.0}s`,
              pointerEvents: "none",
            }} />
          ))}
          <div className="fade-up d1" style={{
            width: 70, height: 70, borderRadius: "20px",
            background: "rgba(255,255,255,0.15)",
            border: "1.5px solid rgba(255,255,255,0.30)",
            backdropFilter: "blur(12px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "white", position: "relative", zIndex: 10,
            boxShadow: "0 12px 40px rgba(0,0,0,0.20), inset 0 1px 0 rgba(255,255,255,0.25)",
          }}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v8a2 2 0 01-2 2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14 4v6h6M9 14h6M9 18h4" />
            </svg>
          </div>
        </div>

        {/* Badge */}
        <div className="fade-up d2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
          style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", backdropFilter: "blur(8px)" }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#a5f3fc", display: "inline-block", flexShrink: 0 }} />
          <span className="sora text-cyan-100 text-xs font-semibold tracking-[0.16em] uppercase">
            Nexora Technology Services
          </span>
        </div>

        {/* ── Headline — single line ── */}
        <h1
          className="sora fade-up d3 text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 whitespace-nowrap"
        >
          <span className="grad-text">Media &amp; Investors</span>
        </h1>

        <p className="fade-up d4 text-blue-100 text-sm md:text-base max-w-lg leading-relaxed"
          style={{ opacity: 0.82 }}>
          Leadership driving Nexora's vision, governance, and long-term growth.
        </p>
      </section>

      {/* ═══════════════════════════
          BOARD CARDS
      ═══════════════════════════ */}
      <section className="py-14 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">

          {/* Section header */}
          <div className="text-center mb-10 fade-up d1">
            <div
              className="sora inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-xs font-bold uppercase tracking-widest"
              style={{ background: "rgba(26,111,196,0.08)", border: "1px solid rgba(26,111,196,0.15)", color: "#1a6fc4" }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "linear-gradient(135deg,#1a6fc4,#17b8e0)", display: "inline-block" }} />
              Investors
            </div>
            <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f]" style={{ fontWeight: 800 }}>
              Our{" "}
              <span style={{ background: "linear-gradient(135deg,#1a6fc4,#17b8e0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Investors
              </span>
            </h2>
          </div>

          {/* Row of cards */}
          <div className="inv-row flex gap-6 justify-center">
            {board.map((person, i) => (
              <div key={person.name} className={`inv-card fade-up d${i + 2}`}>

                {/* Avatar circle */}
                <div style={{
                  width: 110, height: 110, borderRadius: "50%",
                  background: person.bg,
                  boxShadow: "0 8px 32px rgba(26,111,196,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  border: "3px solid white",
                  outline: `3px solid ${person.color}22`,
                }}>
                  <svg width="58" height="58" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="26" r="14" fill={person.color} opacity="0.85" />
                    <ellipse cx="40" cy="72" rx="28" ry="16" fill={person.color} opacity="0.70" />
                    <rect x="35" y="44" width="10" height="16" rx="2" fill="white" opacity="0.55" />
                    <polygon points="40,44 37,51 40,49 43,51" fill={person.color} opacity="0.45" />
                  </svg>
                </div>

                {/* Divider bar */}
                <div
                  className="inv-bar"
                  style={{ background: `linear-gradient(90deg, ${person.color}, #17b8e0)` }}
                />

                {/* Name */}
                <h3
                  className="sora text-xl text-[#1e3a5f] mt-4 mb-2 leading-tight"
                  style={{ fontWeight: 800 }}
                >
                  {person.name}
                </h3>

                {/* Title badge */}
                <span
                  className="sora text-sm font-bold px-4 py-1.5 rounded-full"
                  style={{
                    background: `linear-gradient(135deg, ${person.color}14, #17b8e014)`,
                    color: person.color,
                    border: `1.5px solid ${person.color}28`,
                  }}
                >
                  {person.title}
                </span>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════
          FOOTER
      ═══════════════════════════ */}
      <footer
        className="py-8 px-4 text-center"
        style={{
          background: "linear-gradient(135deg, #071e3d, #0f3460)",
          color: "rgba(255,255,255,0.45)",
          fontSize: "13px",
        }}
      >
        <p className="sora">© 2024 Nexora Technology Services Pvt. Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}
