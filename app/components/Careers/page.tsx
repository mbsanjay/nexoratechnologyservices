"use client";

import { useState, useEffect } from "react";

export default function CareersPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const LAUNCH_DATE = new Date("2025-11-01T00:00:00");

  useEffect(() => {
    const tick = () => {
      const diff = LAUNCH_DATE.getTime() - Date.now();
      if (diff <= 0) { setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return; }
      setTimeLeft({
        days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const handleSubscribe = async () => {
    if (!email.trim()) return;
    setSubscribing(true);
    await new Promise((r) => setTimeout(r, 1600));
    setSubscribing(false);
    setSubscribed(true);
    setEmail("");
  };

  const roles = [
    { dept: "Engineering",        icon: "⚙️", count: "8+",  color: "#1a6fc4" },
    { dept: "Cloud & DevOps",     icon: "☁️", count: "5+",  color: "#1680d8" },
    { dept: "Data & AI",          icon: "🤖", count: "6+",  color: "#178fd4" },
    { dept: "ERP Consulting",     icon: "📊", count: "4+",  color: "#17b8e0" },
    { dept: "Quality Assurance",  icon: "✅", count: "3+",  color: "#1a6fc4" },
    { dept: "Talent & HR",        icon: "🤝", count: "2+",  color: "#1680d8" },
  ];

  const values = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      label: "Innovation First",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      label: "People-Centric",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        </svg>
      ),
      label: "Remote Friendly",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      label: "Fast Growth",
    },
  ];

  const CountBox = ({ value, label }: { value: number; label: string }) => (
    <div className="cs-count-box">
      <span className="cs-count-num sora">{String(value).padStart(2, "0")}</span>
      <span className="cs-count-lbl">{label}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f4f8fd] overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800;900&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');

        *, *::before, *::after { font-family:'DM Sans',sans-serif; box-sizing:border-box; }
        .sora { font-family:'Sora',sans-serif; }

        /* ── Animations ── */
        @keyframes cs-fadeUp {
          from{ opacity:0; transform:translateY(30px); }
          to  { opacity:1; transform:translateY(0); }
        }
        @keyframes cs-scaleIn {
          from{ opacity:0; transform:scale(0.90); }
          to  { opacity:1; transform:scale(1); }
        }
        @keyframes cs-floatY {
          0%,100%{ transform:translateY(0)   scale(1); }
          50%    { transform:translateY(-20px) scale(1.04); }
        }
        @keyframes cs-floatY2 {
          0%,100%{ transform:translateY(0)   scale(1); }
          50%    { transform:translateY(-14px) scale(1.03); }
        }
        @keyframes cs-spinCW  { to{ transform:rotate(360deg); } }
        @keyframes cs-spinCCW { to{ transform:rotate(-360deg); } }
        @keyframes cs-pulse {
          0%,100%{ box-shadow:0 0 0 0   rgba(23,184,224,0.45); }
          50%    { box-shadow:0 0 0 12px rgba(23,184,224,0); }
        }
        @keyframes cs-blink {
          0%,100%{ opacity:1;   }
          50%    { opacity:0.15;}
        }
        @keyframes cs-flip {
          from{ opacity:0; transform:translateY(-10px); }
          to  { opacity:1; transform:translateY(0); }
        }
        @keyframes cs-wave {
          0%  { transform:scale(1);   opacity:0.50; }
          100%{ transform:scale(2.6); opacity:0; }
        }
        @keyframes cs-gradShift {
          0%  { background-position:0%   50%; }
          50% { background-position:100% 50%; }
          100%{ background-position:0%   50%; }
        }
        @keyframes cs-twinkle {
          0%,100%{ opacity:0.10; transform:scale(1); }
          50%    { opacity:0.70; transform:scale(1.6); }
        }
        @keyframes cs-checkPop {
          0% { transform:scale(0); opacity:0; }
          70%{ transform:scale(1.25); }
          100%{ transform:scale(1); opacity:1; }
        }
        @keyframes cs-lineGrow {
          from{ width:0; }
          to  { width:100%; }
        }
        @keyframes cs-badgePop {
          0% { transform:scale(0.7) translateY(6px); opacity:0; }
          100%{ transform:scale(1)   translateY(0);   opacity:1; }
        }

        /* ── Delay helpers ── */
        .cs-fu  { animation:cs-fadeUp  0.72s ease both; }
        .cs-si  { animation:cs-scaleIn 0.65s ease both; }
        .cs-d1  { animation-delay:0.08s; } .cs-d2{ animation-delay:0.18s; }
        .cs-d3  { animation-delay:0.30s; } .cs-d4{ animation-delay:0.42s; }
        .cs-d5  { animation-delay:0.55s; } .cs-d6{ animation-delay:0.70s; }
        .cs-d7  { animation-delay:0.86s; }

        /* ── Gradient text ── */
        .cs-grad {
          background:linear-gradient(130deg,#ffffff 0%,#a5f3fc 40%,#93c5fd 100%);
          background-size:200% auto;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text;
          animation:cs-gradShift 5s ease infinite;
        }

        /* ── Geo ring ── */
        .cs-geo {
          position:absolute; border-radius:50%;
          border:1px solid rgba(255,255,255,0.10);
          pointer-events:none;
        }

        /* ── Stars ── */
        .cs-star {
          position:absolute; border-radius:50%;
          background:white; pointer-events:none;
        }

        /* ── Countdown ── */
        .cs-count-row { display:flex; gap:10px; justify-content:center; flex-wrap:wrap; }
        .cs-count-box {
          display:flex; flex-direction:column; align-items:center;
          width:76px; padding:12px 6px 10px;
          border-radius:14px;
          background:rgba(255,255,255,0.09);
          border:1px solid rgba(255,255,255,0.18);
          backdrop-filter:blur(10px);
          transition:transform 0.2s;
        }
        .cs-count-box:hover{ transform:translateY(-5px); }
        .cs-count-num {
          font-size:2.1rem; font-weight:900; color:#fff;
          line-height:1; animation:cs-flip 0.3s ease both;
        }
        .cs-count-lbl {
          font-size:9px; font-weight:600; letter-spacing:0.14em;
          text-transform:uppercase; color:rgba(165,243,252,0.80); margin-top:4px;
        }
        .cs-sep {
          color:rgba(255,255,255,0.45); font-size:2rem; font-weight:700;
          align-self:center; margin-bottom:14px;
          animation:cs-blink 1s ease-in-out infinite;
        }

        /* ── Email bar ── */
        .cs-email-wrap {
          display:flex;
          border-radius:12px;
          overflow:hidden;
          box-shadow:0 10px 30px rgba(0,0,0,0.20);
          border:1.5px solid rgba(255,255,255,0.22);
        }
        .cs-email-input {
          flex:1; padding:14px 20px;
          background:rgba(255,255,255,0.10);
          border:none; outline:none;
          color:white; font-size:14px; min-width:0;
          transition:background 0.25s;
        }
        .cs-email-input::placeholder{ color:rgba(255,255,255,0.38); }
        .cs-email-input:focus{ background:rgba(255,255,255,0.16); }
        .cs-email-btn {
          padding:14px 26px;
          background:white;
          border:none; cursor:pointer;
          font-family:'Sora',sans-serif; font-size:14px;
          font-weight:700; color:#1a6fc4;
          transition:all 0.25s ease; white-space:nowrap;
        }
        .cs-email-btn:hover:not(:disabled){
          background:#f0f8ff;
          box-shadow:inset 0 0 0 2px rgba(26,111,196,0.2);
        }
        .cs-email-btn:disabled{ opacity:0.7; cursor:not-allowed; }

        /* ── Role chips ── */
        .cs-role-chip {
          display:flex; align-items:center; gap:12px;
          padding:16px 20px; border-radius:14px;
          background:white;
          border:1.5px solid rgba(26,111,196,0.10);
          transition:all 0.28s ease;
          cursor:default;
        }
        .cs-role-chip:hover{
          transform:translateY(-5px);
          box-shadow:0 16px 44px rgba(26,111,196,0.16);
          border-color:rgba(26,111,196,0.28);
        }
        .cs-role-emoji {
          width:44px; height:44px; border-radius:12px;
          display:flex; align-items:center; justify-content:center;
          font-size:1.35rem; flex-shrink:0;
          background:linear-gradient(135deg,rgba(26,111,196,0.08),rgba(23,184,224,0.08));
        }
        .cs-role-count {
          font-family:'Sora',sans-serif; font-size:0.78rem; font-weight:700;
          padding:3px 10px; border-radius:20px;
          background:linear-gradient(135deg,rgba(26,111,196,0.10),rgba(23,184,224,0.10));
          color:#1a6fc4; margin-left:auto; white-space:nowrap;
        }

        /* ── Value pills ── */
        .cs-value-pill {
          display:inline-flex; align-items:center; gap:8px;
          padding:9px 16px; border-radius:40px;
          background:rgba(255,255,255,0.11);
          border:1px solid rgba(255,255,255,0.22);
          color:white; font-size:13px; font-weight:600;
          backdrop-filter:blur(6px);
          transition:all 0.22s ease;
        }
        .cs-value-pill:hover{
          background:rgba(255,255,255,0.20);
          transform:translateY(-3px);
        }

        /* ── Wave ring ── */
        .cs-wave {
          position:absolute; border-radius:50%;
          border:1.5px solid rgba(255,255,255,0.25);
          animation:cs-wave 3.2s ease-out infinite;
          pointer-events:none;
        }

        /* ── Spinner ── */
        .cs-spinner {
          width:17px; height:17px; border-radius:50%;
          border:2.5px solid rgba(26,111,196,0.25);
          border-top-color:#1a6fc4;
          animation:cs-spinCW 0.7s linear infinite;
          display:inline-block; flex-shrink:0;
        }
        .cs-check { animation:cs-checkPop 0.5s cubic-bezier(.36,.07,.19,.97) both; }

        /* ── Horizontal rule ── */
        .cs-rule {
          height:1px; border:none;
          background:linear-gradient(90deg,transparent,rgba(26,111,196,0.18),transparent);
        }
      `}</style>

      {/* ════════════════════════════════
           HERO — full-screen
      ════════════════════════════════ */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-4 py-16 md:py-0 overflow-hidden"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(150deg,#071e3d 0%,#0f3460 20%,#1a6fc4 55%,#17b8e0 100%)",
        }}
      >
        {/* Stars */}
        {[
          { t:"9%",  l:"7%",  s:4, d:0    },
          { t:"18%", l:"82%", s:3, d:0.7  },
          { t:"55%", l:"93%", s:5, d:1.2  },
          { t:"70%", l:"4%",  s:3, d:1.0  },
          { t:"35%", l:"45%", s:4, d:1.7  },
          { t:"80%", l:"58%", s:2, d:0.4  },
          { t:"5%",  l:"52%", s:3, d:2.1  },
          { t:"45%", l:"88%", s:2, d:0.9  },
        ].map((st, i) => (
          <div
            key={i}
            className="cs-star"
            style={{
              top:st.t, left:st.l,
              width:st.s, height:st.s,
              animation:`cs-twinkle ${2.5 + i * 0.3}s ease-in-out infinite ${st.d}s`,
            }}
          />
        ))}

        {/* Geo rings */}
        <div className="cs-geo" style={{ width:560,height:560,top:-140,right:-160,opacity:0.10 }} />
        <div className="cs-geo" style={{ width:320,height:320,top:40,  right:-40, opacity:0.07 }} />
        <div className="cs-geo" style={{ width:740,height:740,bottom:-300,left:-220,opacity:0.06 }} />

        {/* Spinning deco rings */}
        <div style={{
          position:"absolute", width:480, height:480,
          top:"50%", left:"50%",
          transform:"translate(-50%,-50%)",
          borderRadius:"50%",
          border:"1.5px dashed rgba(255,255,255,0.06)",
          animation:"cs-spinCW 22s linear infinite",
          pointerEvents:"none",
        }} />
        <div style={{
          position:"absolute", width:680, height:680,
          top:"50%", left:"50%",
          transform:"translate(-50%,-50%)",
          borderRadius:"50%",
          border:"1px dashed rgba(255,255,255,0.04)",
          animation:"cs-spinCCW 30s linear infinite",
          pointerEvents:"none",
        }} />

        {/* Floating orbs */}
        <div style={{
          position:"absolute", width:220, height:220, borderRadius:"50%",
          top:"-60px", left:"5%", pointerEvents:"none",
          background:"radial-gradient(circle at 40% 40%,rgba(147,197,253,0.22),transparent 70%)",
          animation:"cs-floatY 8s ease-in-out infinite",
        }} />
        <div style={{
          position:"absolute", width:160, height:160, borderRadius:"50%",
          bottom:"80px", right:"8%", pointerEvents:"none",
          background:"radial-gradient(circle at 60% 60%,rgba(165,243,252,0.18),transparent 70%)",
          animation:"cs-floatY2 10s ease-in-out infinite",
        }} />
        <div style={{
          position:"absolute", width:100, height:100, borderRadius:"50%",
          top:"30%", right:"18%", pointerEvents:"none",
          background:"radial-gradient(circle,rgba(255,255,255,0.09),transparent 70%)",
          animation:"cs-floatY 6s ease-in-out infinite reverse",
        }} />

        {/* Centre icon + wave rings */}
        <div style={{ position:"relative", display:"inline-flex", alignItems:"center", justifyContent:"center", marginBottom:32 }}>
          {[0,1,2].map(i => (
            <div
              key={i}
              className="cs-wave"
              style={{ width:86, height:86, top:"50%", left:"50%",
                transform:"translate(-50%,-50%)", animationDelay:`${i * 1.05}s` }}
            />
          ))}
          <div
            className="cs-fu cs-si"
            style={{
              width:70, height:70, borderRadius:"22px",
              background:"rgba(255,255,255,0.13)",
              border:"1.5px solid rgba(255,255,255,0.26)",
              backdropFilter:"blur(14px)",
              display:"flex", alignItems:"center", justifyContent:"center",
              color:"white", position:"relative", zIndex:10,
              boxShadow:"0 16px 44px rgba(0,0,0,0.24),inset 0 1px 0 rgba(255,255,255,0.22)",
            }}
          >
            {/* Rocket / careers icon */}
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7}
                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7}
                d="M12 8v4l3 3" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7}
                d="M8 12a4 4 0 018 0" />
            </svg>
          </div>
        </div>

        {/* Badge */}
        <div
          className="cs-fu cs-d1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
          style={{
            background:"rgba(255,255,255,0.10)",
            border:"1px solid rgba(255,255,255,0.22)",
            backdropFilter:"blur(8px)",
            animation:"cs-badgePop 0.6s ease both 0.1s",
          }}
        >
          <span style={{
            width:7, height:7, borderRadius:"50%",
            background:"#a5f3fc", display:"inline-block", flexShrink:0,
            animation:"cs-pulse 2s ease-in-out infinite",
          }} />
          <span className="sora text-cyan-100 text-xs font-semibold tracking-[0.16em] uppercase">
            Nexora Technology Services — Careers
          </span>
        </div>

        {/* Headline */}
        <h1
          className="sora cs-fu cs-d2 font-black leading-none mb-5"
          style={{ fontSize:"clamp(3rem,9vw,6.2rem)", maxWidth:760, lineHeight:1.05 }}
        >
          <span className="cs-grad">Your Next</span>
          <br />
          <span style={{ color:"white" }}>Big Move.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="cs-fu cs-d3 text-blue-100 max-w-lg leading-relaxed mb-8"
          style={{ fontSize:"clamp(0.92rem,2.2vw,1.07rem)", opacity:0.83 }}
        >
          Our Careers portal is almost ready. We're bringing together the best
          open roles, company culture, and hiring experience — all in one place.
        </p>

        {/* Value pills */}
        <div className="cs-fu cs-d3 flex flex-wrap gap-2.5 justify-center mb-10">
          {values.map((v, i) => (
            <div key={i} className="cs-value-pill">
              <span style={{ color:"#a5f3fc" }}>{v.icon}</span>
              {v.label}
            </div>
          ))}
        </div>

        {/* Countdown */}
        {/* <div className="cs-fu cs-d4 mb-10">
          <p className="sora text-xs uppercase tracking-[0.18em] text-cyan-200 mb-4 font-semibold">
            Launching In
          </p>
          <div className="cs-count-row">
            <CountBox value={timeLeft.days}    label="Days"    />
            <span className="cs-sep">:</span>
            <CountBox value={timeLeft.hours}   label="Hours"   />
            <span className="cs-sep">:</span>
            <CountBox value={timeLeft.minutes} label="Minutes" />
            <span className="cs-sep">:</span>
            <CountBox value={timeLeft.seconds} label="Seconds" />
          </div>
        </div> */}

        {/* Email subscribe */}
        {/* <div className="cs-fu cs-d5 w-full max-w-md mb-3">
          {subscribed ? (
            <div
              className="cs-check flex items-center justify-center gap-3 py-4 px-6 rounded-xl"
              style={{
                background:"rgba(255,255,255,0.11)",
                border:"1px solid rgba(255,255,255,0.24)",
              }}
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="#a5f3fc" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="sora text-white font-semibold text-sm">
                Subscribed! We'll alert you when we go live.
              </span>
            </div>
          ) : (
            <div className="cs-email-wrap">
              <input
                type="email"
                className="cs-email-input"
                placeholder="Your work email — get notified first"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !subscribing && handleSubscribe()}
              />
              <button
                className="cs-email-btn"
                onClick={handleSubscribe}
                disabled={subscribing || !email.trim()}
              >
                {subscribing ? (
                  <span className="flex items-center gap-2">
                    <span className="cs-spinner" />
                    <span>Saving…</span>
                  </span>
                ) : "Notify Me →"}
              </button>
            </div>
          )}
          <p className="text-blue-200 text-xs mt-2.5 text-center" style={{ opacity:0.60 }}>
            One launch email. No marketing lists. Unsubscribe anytime.
          </p>
        </div> */}

        {/* Scroll hint */}
        {/* <a
          href="#roles"
          className="cs-fu cs-d6 mt-6 flex flex-col items-center gap-1.5 text-xs uppercase tracking-widest font-semibold"
          style={{ color:"rgba(165,243,252,0.55)", textDecoration:"none", transition:"color 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.color = "rgba(165,243,252,1)")}
          onMouseLeave={e => (e.currentTarget.style.color = "rgba(165,243,252,0.55)")}
        >
          <span>Explore Open Departments</span>
          <svg
            className="w-4 h-4"
            style={{ animation:"cs-floatY 2s ease-in-out infinite" }}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </a> */}
      </section>

      {/* ════════════════════════════════
           ROLES PREVIEW
      ════════════════════════════════ */}
      <section id="roles" className="max-w-5xl mx-auto px-4 py-16">
     
        {/* <div className="text-center mb-12 cs-fu">
          <p className="sora text-xs uppercase tracking-[0.16em] text-blue-400 font-semibold mb-2">
            Open Positions
          </p>
          <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f] font-extrabold mb-3">
            Departments Hiring Soon
          </h2>
          <p className="text-slate-500 max-w-md mx-auto text-sm leading-relaxed">
            Roles across engineering, cloud, data, consulting, and more are opening
            up when the portal goes live.
          </p>
        </div> */}

        {/* Role chips grid */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {roles.map((r, i) => (
            <div key={i} className={`cs-role-chip cs-fu cs-d${Math.min(i + 2, 7)}`}>
              <div className="cs-role-emoji">{r.icon}</div>
              <div style={{ flex:1 }}>
                <p className="sora text-[#1e3a5f] font-bold text-sm">{r.dept}</p>
                <p className="text-slate-400 text-xs mt-0.5">Positions opening soon</p>
              </div>
              <span className="cs-role-count">{r.count} roles</span>
            </div>
          ))}
        </div> */}

        <hr className="cs-rule" />
      </section>

      {/* ════════════════════════════════
           CTA BANNER
      ════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div
          className="rounded-2xl px-5 py-8 md:px-8 md:py-12 text-center cs-si"
          style={{
            background:"linear-gradient(135deg,#0f3460 0%,#1a6fc4 45%,#17b8e0 100%)",
            boxShadow:"0 22px 60px rgba(26,111,196,0.32)",
            position:"relative", overflow:"hidden",
          }}
        >
          {/* Subtle background orb */}
          <div style={{
            position:"absolute", width:300, height:300, borderRadius:"50%",
            top:-80, right:-60, pointerEvents:"none",
            background:"radial-gradient(circle,rgba(165,243,252,0.10),transparent 70%)",
          }} />

          <p className="sora text-xs uppercase tracking-[0.16em] text-cyan-200 font-semibold mb-2">
            Don't Want to Wait?
          </p>
          <h3 className="sora text-2xl md:text-3xl text-white font-extrabold mb-3">
            Send Us Your CV Now
          </h3>
          <p
            className="text-blue-100 text-sm max-w-md mx-auto leading-relaxed mb-8"
            style={{ opacity:0.85 }}
          >
            Reach out to our talent team directly. We review every application and
            will match you to a role when the portal opens.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Email link */}
            <a
              href="mailto:hr@nexoratechnolpogy.co.in"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm sora font-semibold"
              style={{
                background:"rgba(255,255,255,0.15)",
                border:"1.5px solid rgba(255,255,255,0.30)",
                color:"white", textDecoration:"none",
                transition:"all 0.25s ease",
              }}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.25)";(e.currentTarget as HTMLElement).style.transform="translateY(-2px)";}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.15)";(e.currentTarget as HTMLElement).style.transform="translateY(0)";}}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span style={{ wordBreak: "break-all" }}>hr@nexoratechnolpogy.co.in</span>
            </a>

            {/* Contact link */}
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm sora font-bold"
              style={{
                background:"white", color:"#1a6fc4",
                textDecoration:"none", transition:"all 0.25s ease",
              }}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.boxShadow="0 10px 30px rgba(0,0,0,0.18)";(e.currentTarget as HTMLElement).style.transform="translateY(-2px)";}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.boxShadow="none";(e.currentTarget as HTMLElement).style.transform="translateY(0)";}}
            >
              Contact Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
           FOOTER
      ════════════════════════════════ */}
      <footer
        className="py-8 px-4 text-center"
        style={{
          background:"linear-gradient(135deg,#071e3d,#0f3460)",
          color:"rgba(255,255,255,0.50)", fontSize:"13px",
        }}
      >
        <p className="sora">© 2024 Nexora Technology Services Pvt. Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}
