"use client";

import { useState, useEffect } from "react";

export default function MediaPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  /* ── Countdown to a launch date ── */
  const LAUNCH_DATE = new Date("2025-09-01T00:00:00");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = LAUNCH_DATE.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
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

  const upcomingItems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v8a2 2 0 01-2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14 4v6h6" />
          <line x1="8" y1="13" x2="16" y2="13" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} />
          <line x1="8" y1="17" x2="14" y2="17" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} />
        </svg>
      ),
      title: "Press Releases",
      desc: "Official announcements, milestones, and company news for media professionals.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M15 10l4.553-2.069A1 1 0 0121 8.882V15.12a1 1 0 01-1.447.89L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Media Kit & Videos",
      desc: "Brand assets, executive portraits, product demos and company highlight reels.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Investor Relations",
      desc: "Financial reports, earnings calls, ESG disclosures, and shareholder updates.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Analyst Coverage",
      desc: "Third-party research, industry coverage, awards, and analyst commentary.",
    },
  ];

  const CountBox = ({ value, label }: { value: number; label: string }) => (
    <div className="count-box">
      <span className="count-num sora">{String(value).padStart(2, "0")}</span>
      <span className="count-label">{label}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f4f8fd] font-sans overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        * { font-family: 'DM Sans', sans-serif; }
        .sora { font-family: 'Sora', sans-serif; }

        /* ── Keyframes ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-28px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes floatOrb {
          0%,100% { transform: translateY(0) scale(1); }
          50%      { transform: translateY(-20px) scale(1.05); }
        }
        @keyframes floatOrb2 {
          0%,100% { transform: translateY(0) scale(1) rotate(0deg); }
          50%      { transform: translateY(-14px) scale(1.03) rotate(6deg); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes spinSlowReverse {
          from { transform: rotate(360deg); }
          to   { transform: rotate(0deg); }
        }
        @keyframes pulseGlow {
          0%,100% { box-shadow: 0 0 0 0 rgba(30,128,216,0.35); }
          50%      { box-shadow: 0 0 0 14px rgba(30,128,216,0); }
        }
        @keyframes checkPop {
          0%  { transform: scale(0); opacity: 0; }
          70% { transform: scale(1.2); }
          100%{ transform: scale(1);   opacity: 1; }
        }
        @keyframes countFlip {
          0%  { transform: translateY(-6px); opacity: 0; }
          100%{ transform: translateY(0);    opacity: 1; }
        }
        @keyframes dotBlink {
          0%,100%{ opacity: 1; }
          50%    { opacity: 0.2; }
        }
        @keyframes gradientShift {
          0%  { background-position: 0%   50%; }
          50% { background-position: 100% 50%; }
          100%{ background-position: 0%   50%; }
        }
        @keyframes waveRing {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes starTwinkle {
          0%,100%{ opacity:0.15; transform:scale(1); }
          50%    { opacity:0.8;  transform:scale(1.4); }
        }

        /* ── Utilities ── */
        .fade-up   { animation: fadeUp   0.75s ease both; }
        .fade-left { animation: fadeLeft 0.75s ease both; }
        .scale-in  { animation: scaleIn  0.65s ease both; }
        .delay-1  { animation-delay: 0.10s; }
        .delay-2  { animation-delay: 0.20s; }
        .delay-3  { animation-delay: 0.30s; }
        .delay-4  { animation-delay: 0.40s; }
        .delay-5  { animation-delay: 0.55s; }
        .delay-6  { animation-delay: 0.70s; }
        .delay-7  { animation-delay: 0.85s; }

        .orb-float  { animation: floatOrb  7s ease-in-out infinite; }
        .orb-float2 { animation: floatOrb2 9s ease-in-out infinite; }
        .orb-float3 { animation: floatOrb  5s ease-in-out infinite reverse; }

        /* ── Hero gradient text ── */
        .gradient-text {
          background: linear-gradient(135deg, #a5f3fc 0%, #ffffff 40%, #bfdbfe 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 5s ease infinite;
        }

        /* ── Spinning rings ── */
        .ring-spin    { animation: spinSlow        18s linear infinite; }
        .ring-spin-r  { animation: spinSlowReverse 24s linear infinite; }

        /* ── Geo ring ── */
        .geo-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
        }

        /* ── Countdown boxes ── */
        .countdown-row {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .count-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 82px;
          padding: 14px 8px 12px;
          border-radius: 14px;
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.20);
          backdrop-filter: blur(8px);
          transition: transform 0.2s ease;
        }
        .count-box:hover { transform: translateY(-4px); }
        .count-num {
          font-size: 2.2rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
          animation: countFlip 0.4s ease both;
        }
        .count-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(165,243,252,0.85);
          margin-top: 4px;
        }
        .count-sep {
          color: rgba(255,255,255,0.5);
          font-size: 2rem;
          font-weight: 700;
          align-self: center;
          animation: dotBlink 1s ease-in-out infinite;
          margin-bottom: 14px;
        }

        /* ── Email subscribe ── */
        .notify-input {
          flex: 1;
          padding: 12px 18px;
          border-radius: 10px 0 0 10px;
          border: 2px solid rgba(255,255,255,0.22);
          background: rgba(255,255,255,0.10);
          color: white;
          font-size: 14px;
          outline: none;
          transition: border-color 0.25s ease, background 0.25s ease;
          min-width: 0;
        }
        .notify-input::placeholder { color: rgba(255,255,255,0.45); }
        .notify-input:focus {
          border-color: rgba(255,255,255,0.55);
          background: rgba(255,255,255,0.16);
        }
        .notify-btn {
          padding: 12px 22px;
          border-radius: 0 10px 10px 0;
          border: none;
          background: rgba(255,255,255,0.22);
          border: 2px solid rgba(255,255,255,0.35);
          border-left: none;
          color: white;
          font-family: 'Sora', sans-serif;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .notify-btn:hover:not(:disabled) {
          background: rgba(255,255,255,0.32);
          box-shadow: 0 4px 18px rgba(0,0,0,0.15);
        }
        .notify-btn:disabled { opacity: 0.7; cursor: not-allowed; }

        /* ── Feature cards ── */
        .feature-card {
          background: white;
          border-radius: 18px;
          padding: 28px 24px;
          border: 1px solid rgba(26,111,196,0.10);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .feature-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 18px;
          background: linear-gradient(135deg, rgba(30,128,216,0.04), rgba(23,184,224,0.04));
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .feature-card:hover::before { opacity: 1; }
        .feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(26,111,196,0.18), 0 4px 16px rgba(0,0,0,0.06);
          border-color: rgba(30,128,216,0.22);
        }
        .feature-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: linear-gradient(135deg, #1a6fc4, #17b8e0);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 16px;
          flex-shrink: 0;
        }

        /* ── Wave pulse rings ── */
        .wave-ring {
          position: absolute;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.3);
          animation: waveRing 3s ease-out infinite;
        }

        /* ── Check pop ── */
        .check-anim { animation: checkPop 0.5s cubic-bezier(.36,.07,.19,.97) both; }

        /* ── Tiny spin ── */
        .ring-spinner {
          width: 18px; height: 18px;
          border: 2.5px solid rgba(255,255,255,0.35);
          border-top-color: white;
          border-radius: 50%;
          animation: spinSlow 0.7s linear infinite;
          display: inline-block;
        }

        /* ── Stars ── */
        .star {
          position: absolute;
          border-radius: 50%;
          background: white;
        }
        .star-1 { width:4px;height:4px; top:15%; left:10%; animation: starTwinkle 2.5s ease-in-out infinite; }
        .star-2 { width:3px;height:3px; top:25%; left:80%; animation: starTwinkle 3.2s ease-in-out infinite 0.5s; }
        .star-3 { width:5px;height:5px; top:60%; left:92%; animation: starTwinkle 2.0s ease-in-out infinite 1s; }
        .star-4 { width:3px;height:3px; top:75%; left:5%;  animation: starTwinkle 3.5s ease-in-out infinite 0.8s; }
        .star-5 { width:4px;height:4px; top:40%; left:50%; animation: starTwinkle 2.8s ease-in-out infinite 1.5s; }
        .star-6 { width:2px;height:2px; top:85%; left:65%; animation: starTwinkle 4.0s ease-in-out infinite 0.3s; }
      `}</style>

      {/* ══════════════════ HERO ══════════════════ */}
      <section
        className="relative overflow-hidden py-24 px-4 flex flex-col items-center text-center"
        style={{
          background: "linear-gradient(135deg, #0f3460 0%, #1a6fc4 35%, #1e80d8 60%, #17b8e0 100%)",
          minHeight: "100vh",
        }}
      >
        {/* Stars */}
        {[1,2,3,4,5,6].map(n => <div key={n} className={`star star-${n}`} />)}

        {/* Geometric rings */}
        <div className="geo-ring" style={{ width:520, height:520, top:-120, right:-140, opacity:0.12 }} />
        <div className="geo-ring" style={{ width:300, height:300, top:40,   right:-20,  opacity:0.09 }} />
        <div className="geo-ring" style={{ width:700, height:700, bottom:-260, left:-180, opacity:0.07 }} />

        {/* Spinning deco rings */}
        <div
          className="ring-spin absolute"
          style={{
            width:440, height:440,
            top:"50%", left:"50%",
            transform:"translate(-50%,-50%)",
            borderRadius:"50%",
            border:"1.5px dashed rgba(255,255,255,0.08)",
          }}
        />
        <div
          className="ring-spin-r absolute"
          style={{
            width:620, height:620,
            top:"50%", left:"50%",
            transform:"translate(-50%,-50%)",
            borderRadius:"50%",
            border:"1px dashed rgba(255,255,255,0.05)",
          }}
        />

        {/* Floating orbs */}
        <div
          className="orb-float absolute"
          style={{
            width:200, height:200,
            borderRadius:"50%",
            top:"-40px", left:"8%",
            background:"radial-gradient(circle at 40% 40%, rgba(165,243,252,0.22), transparent 70%)",
          }}
        />
        <div
          className="orb-float2 absolute"
          style={{
            width:160, height:160,
            borderRadius:"50%",
            bottom:"60px", right:"10%",
            background:"radial-gradient(circle at 60% 60%, rgba(191,219,254,0.20), transparent 70%)",
          }}
        />
        <div
          className="orb-float3 absolute"
          style={{
            width:90, height:90,
            borderRadius:"50%",
            top:"30%", right:"20%",
            background:"radial-gradient(circle, rgba(255,255,255,0.12), transparent 70%)",
          }}
        />

        {/* Wave rings around center icon */}
        <div style={{ position:"relative", display:"inline-flex", alignItems:"center", justifyContent:"center", marginBottom:32 }}>
          {[0,1,2].map(i => (
            <div
              key={i}
              className="wave-ring"
              style={{
                width:90, height:90,
                top:"50%", left:"50%",
                transform:"translate(-50%,-50%)",
                animationDelay:`${i * 1.0}s`,
              }}
            />
          ))}
          {/* Main icon */}
          <div
            className="fade-up scale-in"
            style={{
              width:72, height:72,
              borderRadius:"20px",
              background:"rgba(255,255,255,0.15)",
              border:"1.5px solid rgba(255,255,255,0.30)",
              backdropFilter:"blur(12px)",
              display:"flex", alignItems:"center", justifyContent:"center",
              color:"white",
              boxShadow:"0 12px 40px rgba(0,0,0,0.20), inset 0 1px 0 rgba(255,255,255,0.25)",
              position:"relative", zIndex:10,
            }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v8a2 2 0 01-2 2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14 4v6h6M9 14h6M9 18h4" />
            </svg>
          </div>
        </div>

        {/* Badge */}
        <div
          className="fade-up delay-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
          style={{
            background:"rgba(255,255,255,0.12)",
            border:"1px solid rgba(255,255,255,0.25)",
            backdropFilter:"blur(8px)",
          }}
        >
          <span style={{ width:7, height:7, borderRadius:"50%", background:"#a5f3fc", display:"inline-block",
            animation:"pulseGlow 2s ease-in-out infinite", flexShrink:0 }} />
          <span className="sora text-cyan-100 text-xs font-semibold tracking-widest uppercase">
            Nexora Technology Services
          </span>
        </div>

        {/* Headline */}
        <h1 className="sora fade-up delay-2 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none mb-5"
          style={{ maxWidth:740, lineHeight:1.08 }}>
          <span className="gradient-text">Media &amp;</span>
          <br />
          <span style={{ color:"white" }}>Investors</span>
        </h1>

        {/* Sub-heading */}
        <p className="fade-up delay-3 text-blue-100 text-base md:text-lg max-w-lg leading-relaxed mb-10"
          style={{ opacity:0.85 }}>
          We're building a dedicated hub for press coverage, investor relations,
          financial disclosures, and brand resources. Stay tuned — something
          <em style={{ color:"#a5f3fc", fontStyle:"normal", fontWeight:600 }}> great</em> is coming.
        </p>

        {/* ── Countdown ── */}
        <div className="fade-up delay-4 mb-10">
          <p className="sora text-xs uppercase tracking-[0.18em] text-cyan-300 mb-4 font-semibold">
            Launching in
          </p>
          <div className="countdown-row">
            <CountBox value={timeLeft.days}    label="Days"    />
            <span className="count-sep">:</span>
            <CountBox value={timeLeft.hours}   label="Hours"   />
            <span className="count-sep">:</span>
            <CountBox value={timeLeft.minutes} label="Minutes" />
            <span className="count-sep">:</span>
            <CountBox value={timeLeft.seconds} label="Seconds" />
          </div>
        </div>

        {/* ── Notify me ── */}
        <div className="fade-up delay-5 w-full max-w-md mb-6">
          {subscribed ? (
            <div
              className="check-anim flex items-center justify-center gap-3 py-3.5 px-6 rounded-xl"
              style={{
                background:"rgba(255,255,255,0.12)",
                border:"1px solid rgba(255,255,255,0.25)",
              }}
            >
              <svg className="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="sora text-white font-semibold text-sm">
                You're on the list — we'll notify you!
              </span>
            </div>
          ) : (
            <div className="flex" style={{ filter:"drop-shadow(0 8px 24px rgba(0,0,0,0.18))" }}>
              <input
                type="email"
                className="notify-input"
                placeholder="Enter your email for updates"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !subscribing && handleSubscribe()}
              />
              <button
                className="notify-btn"
                onClick={handleSubscribe}
                disabled={subscribing || !email.trim()}
              >
                {subscribing ? (
                  <span className="flex items-center gap-2">
                    <span className="ring-spinner" /> Sending…
                  </span>
                ) : (
                  "Notify Me"
                )}
              </button>
            </div>
          )}
          <p className="text-blue-200 text-xs mt-2.5 opacity-70">
            No spam — just the launch announcement &amp; key updates.
          </p>
        </div>

        {/* ── Divider ── */}
        <div
          className="fade-up delay-6"
          style={{ width:60, height:3, borderRadius:2,
            background:"linear-gradient(90deg, rgba(165,243,252,0.5), rgba(255,255,255,0.2))",
            margin:"0 auto 36px" }}
        />

        {/* ── Scroll cue ── */}
        <a
          href="#whats-coming"
          className="fade-up delay-7 flex flex-col items-center gap-1.5 text-blue-100 text-xs uppercase tracking-widest font-semibold"
          style={{ opacity:0.6, textDecoration:"none", transition:"opacity 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "0.6")}
        >
          <span>See What&apos;s Coming</span>
          <svg className="w-4 h-4" style={{ animation:"floatOrb 2s ease-in-out infinite" }}
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </section>

      {/* ══════════════════ WHAT'S COMING ══════════════════ */}
      <section id="whats-coming" className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12 fade-up">
          <p className="sora text-xs uppercase tracking-[0.16em] text-blue-400 font-semibold mb-2">
            What to Expect
          </p>
          <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f] font-extrabold mb-3">
            Everything in One Place
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
            Our Media &amp; Investors portal will be your single source of truth for all
            things Nexora — from earnings to editorial.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {upcomingItems.map((item, i) => (
            <div key={i} className={`feature-card fade-up delay-${i + 2}`}>
              <div className="feature-icon">{item.icon}</div>
              <h3 className="sora text-[#1e3a5f] font-bold text-base mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              {/* Coming soon chip */}
              <div
                className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  background:"linear-gradient(135deg,rgba(26,111,196,0.08),rgba(23,184,224,0.08))",
                  border:"1px solid rgba(26,111,196,0.18)",
                  color:"#1a6fc4",
                }}
              >
                <span style={{ width:6, height:6, borderRadius:"50%", background:"#17b8e0",
                  animation:"pulseGlow 2s ease-in-out infinite", flexShrink:0, display:"inline-block" }} />
                Coming Soon
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════ MEDIA CONTACT ══════════════════ */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div
          className="rounded-2xl px-8 py-10 text-center scale-in"
          style={{
            background:"linear-gradient(135deg, #1a6fc4 0%, #1e80d8 50%, #17b8e0 100%)",
            boxShadow:"0 20px 60px rgba(26,111,196,0.30)",
          }}
        >
          <p className="sora text-xs uppercase tracking-[0.16em] text-cyan-200 font-semibold mb-2">
            In the Meantime
          </p>
          <h3 className="sora text-2xl md:text-3xl text-white font-extrabold mb-3">
            Media Enquiries?
          </h3>
          <p className="text-blue-100 text-sm max-w-md mx-auto leading-relaxed mb-7" style={{ opacity:0.85 }}>
            Our communications team is available to assist journalists, analysts,
            and investors with press requests and financial information.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:media@nexora.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
              style={{
                background:"rgba(255,255,255,0.18)",
                border:"1.5px solid rgba(255,255,255,0.35)",
                color:"white",
                textDecoration:"none",
                transition:"all 0.25s ease",
                fontFamily:"'Sora',sans-serif",
              }}
              onMouseEnter={e=>{
                (e.currentTarget as HTMLAnchorElement).style.background="rgba(255,255,255,0.28)";
                (e.currentTarget as HTMLAnchorElement).style.transform="translateY(-2px)";
              }}
              onMouseLeave={e=>{
                (e.currentTarget as HTMLAnchorElement).style.background="rgba(255,255,255,0.18)";
                (e.currentTarget as HTMLAnchorElement).style.transform="translateY(0)";
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              media@nexora.com
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
              style={{
                background:"white",
                color:"#1a6fc4",
                textDecoration:"none",
                transition:"all 0.25s ease",
                fontFamily:"'Sora',sans-serif",
                fontWeight:700,
              }}
              onMouseEnter={e=>{
                (e.currentTarget as HTMLAnchorElement).style.boxShadow="0 8px 28px rgba(0,0,0,0.16)";
                (e.currentTarget as HTMLAnchorElement).style.transform="translateY(-2px)";
              }}
              onMouseLeave={e=>{
                (e.currentTarget as HTMLAnchorElement).style.boxShadow="none";
                (e.currentTarget as HTMLAnchorElement).style.transform="translateY(0)";
              }}
            >
              Contact Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════ FOOTER ══════════════════ */}
      <footer
        className="py-8 px-4 text-center"
        style={{
          background:"linear-gradient(135deg, #0f3460, #1a4f8c)",
          color:"rgba(255,255,255,0.55)",
          fontSize:"13px",
        }}
      >
        <p className="sora">© 2024 Nexora Technology Services Pvt. Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}
