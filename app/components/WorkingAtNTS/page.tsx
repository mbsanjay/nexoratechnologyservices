"use client";

import { useState, useEffect } from "react";

export default function WorkingAtNTSPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [activePerks, setActivePerks] = useState<number | null>(null);

  const LAUNCH_DATE = new Date("2025-10-01T00:00:00");

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

  /* ── Perks data ── */
  const perks = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Learning & Growth",
      desc: "Access to premium courses, certifications, conference sponsorships, and a personal L&D budget to fuel your career.",
      color: "#1a6fc4",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Collaborative Culture",
      desc: "Flat hierarchy, open-door leadership, cross-functional teams, and a culture built on trust, transparency, and inclusion.",
      color: "#1680d8",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        </svg>
      ),
      title: "Flexible Work",
      desc: "Hybrid-friendly schedules, remote-first days, and policies designed to respect your work–life balance.",
      color: "#178fd4",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Health & Wellness",
      desc: "Comprehensive medical, dental & vision coverage for you and your family, plus mental wellness support.",
      color: "#17b8e0",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "High-Impact Projects",
      desc: "Work on enterprise ERP, cloud, AI, and digital transformation initiatives that shape real businesses globally.",
      color: "#1a6fc4",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Competitive Rewards",
      desc: "Market-beating salaries, performance bonuses, equity participation, and transparent compensation bands.",
      color: "#1680d8",
    },
  ];

  /* ── Timeline ── */
  const timeline = [
    { step: "01", label: "Apply", desc: "Submit your profile — quick, no lengthy forms." },
    { step: "02", label: "Chat",  desc: "A friendly call with our talent team." },
    { step: "03", label: "Assess",desc: "A practical challenge relevant to your role." },
    { step: "04", label: "Offer", desc: "Fast decisions, transparent timelines, zero ghosting." },
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

        * { font-family: 'DM Sans', sans-serif; box-sizing: border-box; }
        .sora { font-family: 'Sora', sans-serif; }

        /* ── Keyframes ── */
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes fadeLeft {
          from { opacity:0; transform:translateX(-30px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity:0; transform:scale(0.91); }
          to   { opacity:1; transform:scale(1); }
        }
        @keyframes floatA {
          0%,100%{ transform:translateY(0)    scale(1); }
          50%    { transform:translateY(-22px) scale(1.05); }
        }
        @keyframes floatB {
          0%,100%{ transform:translateY(0)    scale(1) rotate(0deg); }
          50%    { transform:translateY(-15px) scale(1.03) rotate(8deg); }
        }
        @keyframes floatC {
          0%,100%{ transform:translateY(0)    scale(1); }
          50%    { transform:translateY(-10px) scale(1.04); }
        }
        @keyframes spinCW  { from{transform:rotate(0deg);}  to{transform:rotate(360deg);}  }
        @keyframes spinCCW { from{transform:rotate(360deg);}to{transform:rotate(0deg);}    }
        @keyframes pulseGlow {
          0%,100%{ box-shadow:0 0 0 0   rgba(30,128,216,0.40); }
          50%    { box-shadow:0 0 0 14px rgba(30,128,216,0); }
        }
        @keyframes waveOut {
          0%  { transform:scale(1);   opacity:0.55; }
          100%{ transform:scale(2.4); opacity:0; }
        }
        @keyframes countFlip {
          from{ transform:translateY(-8px); opacity:0; }
          to  { transform:translateY(0);    opacity:1; }
        }
        @keyframes dotBlink {
          0%,100%{ opacity:1;   }
          50%    { opacity:0.18;}
        }
        @keyframes gradShift {
          0%  { background-position:0%   50%; }
          50% { background-position:100% 50%; }
          100%{ background-position:0%   50%; }
        }
        @keyframes twinkle {
          0%,100%{ opacity:0.12; transform:scale(1); }
          50%    { opacity:0.75; transform:scale(1.5); }
        }
        @keyframes checkPop {
          0% { transform:scale(0); opacity:0; }
          70%{ transform:scale(1.2); }
          100%{ transform:scale(1); opacity:1; }
        }
        @keyframes progressFill {
          from{ width:0; }
          to  { width:var(--w); }
        }
        @keyframes slideRight {
          from{ opacity:0; transform:translateX(20px); }
          to  { opacity:1; transform:translateX(0); }
        }

        /* ── Utility classes ── */
        .fade-up  { animation:fadeUp   0.75s ease both; }
        .fade-left{ animation:fadeLeft 0.75s ease both; }
        .scale-in { animation:scaleIn  0.65s ease both; }
        .d1{ animation-delay:0.10s; } .d2{ animation-delay:0.20s; }
        .d3{ animation-delay:0.32s; } .d4{ animation-delay:0.44s; }
        .d5{ animation-delay:0.56s; } .d6{ animation-delay:0.70s; }
        .d7{ animation-delay:0.85s; } .d8{ animation-delay:1.00s; }

        /* ── Gradient headline ── */
        .grad-text {
          background: linear-gradient(135deg,#a5f3fc 0%,#ffffff 45%,#bfdbfe 100%);
          background-size:200% auto;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text;
          animation:gradShift 5s ease infinite;
        }

        /* ── Geo ring ── */
        .geo-ring {
          position:absolute; border-radius:50%;
          border:1px solid rgba(255,255,255,0.11);
          pointer-events:none;
        }

        /* ── Spinning deco rings ── */
        .ring-cw  { animation:spinCW  20s linear infinite; }
        .ring-ccw { animation:spinCCW 28s linear infinite; }

        /* ── Stars ── */
        .star{ position:absolute; border-radius:50%; background:white; pointer-events:none; }

        /* ── Countdown ── */
        .count-row{ display:flex; gap:10px; justify-content:center; flex-wrap:wrap; }
        .count-box{
          display:flex; flex-direction:column; align-items:center; justify-content:center;
          width:78px; padding:13px 8px 11px;
          border-radius:14px;
          background:rgba(255,255,255,0.10);
          border:1px solid rgba(255,255,255,0.20);
          backdrop-filter:blur(8px);
          transition:transform 0.2s ease;
        }
        .count-box:hover{ transform:translateY(-4px); }
        .count-num{
          font-size:2.1rem; font-weight:800; color:#fff;
          line-height:1; animation:countFlip 0.35s ease both;
        }
        .count-label{
          font-size:9.5px; font-weight:600; letter-spacing:0.13em;
          text-transform:uppercase; color:rgba(165,243,252,0.82); margin-top:4px;
        }
        .count-sep{
          color:rgba(255,255,255,0.48); font-size:2rem; font-weight:700;
          align-self:center; margin-bottom:14px;
          animation:dotBlink 1s ease-in-out infinite;
        }

        /* ── Subscribe ── */
        .notify-input{
          flex:1; padding:12px 18px;
          border-radius:10px 0 0 10px;
          border:2px solid rgba(255,255,255,0.22);
          background:rgba(255,255,255,0.10);
          color:white; font-size:14px; outline:none; min-width:0;
          transition:border-color 0.25s, background 0.25s;
        }
        .notify-input::placeholder{ color:rgba(255,255,255,0.42); }
        .notify-input:focus{
          border-color:rgba(255,255,255,0.55);
          background:rgba(255,255,255,0.16);
        }
        .notify-btn{
          padding:12px 22px;
          border-radius:0 10px 10px 0;
          border:2px solid rgba(255,255,255,0.35); border-left:none;
          background:rgba(255,255,255,0.20);
          color:white; font-family:'Sora',sans-serif;
          font-size:14px; font-weight:700;
          cursor:pointer; white-space:nowrap;
          transition:all 0.25s ease;
        }
        .notify-btn:hover:not(:disabled){ background:rgba(255,255,255,0.30); }
        .notify-btn:disabled{ opacity:0.7; cursor:not-allowed; }

        /* ── Perk cards ── */
        .perk-card{
          background:white; border-radius:18px; padding:26px 22px;
          border:1.5px solid rgba(26,111,196,0.10);
          cursor:default; position:relative; overflow:hidden;
          transition:all 0.30s ease;
        }
        .perk-card::after{
          content:''; position:absolute; inset:0; border-radius:18px;
          background:linear-gradient(135deg,rgba(30,128,216,0.05),rgba(23,184,224,0.05));
          opacity:0; transition:opacity 0.3s;
        }
        .perk-card:hover::after{ opacity:1; }
        .perk-card:hover{
          transform:translateY(-7px);
          box-shadow:0 22px 55px rgba(26,111,196,0.17),0 4px 14px rgba(0,0,0,0.06);
          border-color:rgba(30,128,216,0.24);
        }
        .perk-card.active{
          transform:translateY(-5px);
          box-shadow:0 18px 48px rgba(26,111,196,0.22);
          border-color:rgba(30,128,216,0.35);
        }
        .perk-icon{
          width:50px; height:50px; border-radius:14px;
          background:linear-gradient(135deg,#1a6fc4,#17b8e0);
          display:flex; align-items:center; justify-content:center;
          color:white; margin-bottom:15px; flex-shrink:0;
        }

        /* ── Timeline ── */
        .tl-step{
          display:flex; align-items:flex-start; gap:18px;
          padding:18px 22px; border-radius:16px;
          background:rgba(255,255,255,0.09);
          border:1px solid rgba(255,255,255,0.16);
          transition:background 0.25s, transform 0.25s;
        }
        .tl-step:hover{
          background:rgba(255,255,255,0.16);
          transform:translateX(6px);
        }
        .tl-num{
          font-family:'Sora',sans-serif; font-size:1.8rem; font-weight:800;
          color:rgba(255,255,255,0.18); line-height:1; flex-shrink:0; width:48px;
        }

        /* ── Stat chips ── */
        .stat-chip{
          display:flex; flex-direction:column; align-items:center;
          padding:18px 24px; border-radius:16px;
          background:rgba(255,255,255,0.10);
          border:1px solid rgba(255,255,255,0.20);
          backdrop-filter:blur(8px);
          transition:transform 0.2s;
        }
        .stat-chip:hover{ transform:translateY(-4px); }
        .stat-val{
          font-family:'Sora',sans-serif; font-size:2rem; font-weight:800;
          color:white; line-height:1.1;
        }
        .stat-lbl{
          font-size:11px; font-weight:600; letter-spacing:0.10em;
          text-transform:uppercase; color:rgba(165,243,252,0.80); margin-top:4px;
        }

        /* ── Ring spinner ── */
        .ring-spinner{
          width:18px; height:18px; border-radius:50%;
          border:2.5px solid rgba(255,255,255,0.30);
          border-top-color:white;
          animation:spinCW 0.7s linear infinite;
          display:inline-block;
        }
        .check-anim{ animation:checkPop 0.5s cubic-bezier(.36,.07,.19,.97) both; }

        /* ── Wave rings ── */
        .wave-ring{
          position:absolute; border-radius:50%;
          border:1.5px solid rgba(255,255,255,0.28);
          animation:waveOut 3s ease-out infinite;
          pointer-events:none;
        }

        /* ── Mobile fixes ── */
        @media (max-width: 480px) {
          .count-box { width: 62px !important; padding: 10px 4px 8px !important; }
          .count-num { font-size: 1.7rem !important; }
          .count-sep { font-size: 1.6rem !important; }
          .notify-input { padding: 11px 14px; }
          .notify-btn   { padding: 11px 14px; }
        }
      `}</style>

      {/* ══════════════ HERO ══════════════ */}
      <section
        className="relative overflow-hidden flex flex-col items-center text-center px-4 py-14 md:py-24"
        style={{
          background:"linear-gradient(140deg,#0d2d55 0%,#1a6fc4 30%,#1e80d8 60%,#17b8e0 100%)",
          minHeight:"100vh",
        }}
      >
        {/* Stars */}
        {[
          { top:"12%", left:"8%",  s:4, d:0    },
          { top:"22%", left:"78%", s:3, d:0.6  },
          { top:"58%", left:"90%", s:5, d:1.1  },
          { top:"72%", left:"6%",  s:3, d:0.9  },
          { top:"38%", left:"48%", s:4, d:1.6  },
          { top:"82%", left:"62%", s:2, d:0.4  },
          { top:"6%",  left:"55%", s:3, d:2.0  },
        ].map((st, i) => (
          <div
            key={i}
            className="star"
            style={{
              top:st.top, left:st.left,
              width:st.s, height:st.s,
              animation:`twinkle ${2.4 + i * 0.35}s ease-in-out infinite ${st.d}s`,
            }}
          />
        ))}

        {/* Geo rings */}
        <div className="geo-ring" style={{ width:540,height:540,top:-130,right:-150,opacity:0.11 }} />
        <div className="geo-ring" style={{ width:300,height:300,top:50,right:-30,opacity:0.08 }} />
        <div className="geo-ring" style={{ width:720,height:720,bottom:-280,left:-200,opacity:0.07 }} />

        {/* Spinning deco rings */}
        <div className="ring-cw absolute pointer-events-none" style={{
          width:460,height:460,top:"50%",left:"50%",
          transform:"translate(-50%,-50%)",
          borderRadius:"50%",border:"1.5px dashed rgba(255,255,255,0.07)",
        }} />
        <div className="ring-ccw absolute pointer-events-none" style={{
          width:650,height:650,top:"50%",left:"50%",
          transform:"translate(-50%,-50%)",
          borderRadius:"50%",border:"1px dashed rgba(255,255,255,0.04)",
        }} />

        {/* Floating orbs */}
        <div style={{
          position:"absolute",width:210,height:210,borderRadius:"50%",
          top:"-50px",left:"6%",pointerEvents:"none",
          background:"radial-gradient(circle at 40% 40%,rgba(165,243,252,0.20),transparent 70%)",
          animation:"floatA 8s ease-in-out infinite",
        }} />
        <div style={{
          position:"absolute",width:170,height:170,borderRadius:"50%",
          bottom:"70px",right:"9%",pointerEvents:"none",
          background:"radial-gradient(circle at 60% 60%,rgba(191,219,254,0.18),transparent 70%)",
          animation:"floatB 10s ease-in-out infinite",
        }} />
        <div style={{
          position:"absolute",width:95,height:95,borderRadius:"50%",
          top:"32%",right:"22%",pointerEvents:"none",
          background:"radial-gradient(circle,rgba(255,255,255,0.11),transparent 70%)",
          animation:"floatC 6s ease-in-out infinite reverse",
        }} />

        {/* Centre icon + wave rings */}
        <div style={{ position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center",marginBottom:32 }}>
          {[0,1,2].map(i => (
            <div
              key={i}
              className="wave-ring"
              style={{ width:88,height:88,top:"50%",left:"50%",
                transform:"translate(-50%,-50%)",animationDelay:`${i * 1.0}s` }}
            />
          ))}
          <div
            className="fade-up scale-in"
            style={{
              width:72,height:72,borderRadius:"20px",position:"relative",zIndex:10,
              background:"rgba(255,255,255,0.14)",
              border:"1.5px solid rgba(255,255,255,0.28)",
              backdropFilter:"blur(12px)",
              display:"flex",alignItems:"center",justifyContent:"center",color:"white",
              boxShadow:"0 12px 40px rgba(0,0,0,0.22),inset 0 1px 0 rgba(255,255,255,0.22)",
            }}
          >
            {/* Briefcase icon */}
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        {/* Eyebrow badge */}
        <div
          className="fade-up d1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
          style={{
            background:"rgba(255,255,255,0.11)",
            border:"1px solid rgba(255,255,255,0.24)",
            backdropFilter:"blur(8px)",
          }}
        >
          <span style={{
            width:7,height:7,borderRadius:"50%",background:"#a5f3fc",
            display:"inline-block",flexShrink:0,
            animation:"pulseGlow 2s ease-in-out infinite",
          }} />
          <span className="sora text-cyan-100 text-xs font-semibold tracking-widest uppercase">
            Life @ Nexora Technology Services
          </span>
        </div>

        {/* Headline */}
        <h1
          className="sora fade-up d2 font-extrabold leading-none mb-5"
          style={{ fontSize:"clamp(2.6rem,8vw,5.5rem)", maxWidth:720, lineHeight:1.08 }}
        >
          <span className="grad-text">Working</span>
          <br />
          <span style={{ color:"white" }}>@ NTS</span>
        </h1>

        {/* Sub */}
        <p
          className="fade-up d3 text-blue-100 max-w-lg leading-relaxed mb-10"
          style={{ fontSize:"clamp(0.9rem,2vw,1.05rem)", opacity:0.84 }}
        >
          We're crafting an immersive window into life at Nexora — culture, perks,
          real stories from our team, and everything that makes NTS a place where
          <em style={{ color:"#a5f3fc",fontStyle:"normal",fontWeight:600 }}> careers</em> truly grow.
        </p>

        {/* Stats row */}
        {/* <div className="fade-up d3 flex flex-wrap gap-4 justify-center mb-10">
          {[
            { val:"200+", lbl:"Team Members" },
            { val:"12+",  lbl:"Years of Growth" },
            { val:"98%",  lbl:"Retention Rate" },
            { val:"30+",  lbl:"Open Roles Soon" },
          ].map((s, i) => (
            <div key={i} className="stat-chip">
              <span className="stat-val">{s.val}</span>
              <span className="stat-lbl">{s.lbl}</span>
            </div>
          ))}
        </div> */}

        {/* Countdown */}
        <div className="fade-up d4 mb-10">
          <p className="sora text-xs uppercase tracking-[0.18em] text-cyan-300 mb-4 font-semibold">
            Page Launches In
          </p>
          <div className="count-row">
            <CountBox value={timeLeft.days}    label="Days"    />
            <span className="count-sep">:</span>
            <CountBox value={timeLeft.hours}   label="Hours"   />
            <span className="count-sep">:</span>
            <CountBox value={timeLeft.minutes} label="Minutes" />
            <span className="count-sep">:</span>
            <CountBox value={timeLeft.seconds} label="Seconds" />
          </div>
        </div>

        {/* Email subscribe */}
        <div className="fade-up d5 w-full max-w-md mb-6">
          {subscribed ? (
            <div
              className="check-anim flex items-center justify-center gap-3 py-3.5 px-6 rounded-xl"
              style={{ background:"rgba(255,255,255,0.12)", border:"1px solid rgba(255,255,255,0.25)" }}
            >
              <svg className="w-5 h-5" fill="none" stroke="#a5f3fc" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="sora text-white font-semibold text-sm">
                You're in — we'll notify you at launch!
              </span>
            </div>
          ) : (
            <div className="flex" style={{ filter:"drop-shadow(0 8px 24px rgba(0,0,0,0.18))" }}>
              <input
                type="email"
                className="notify-input"
                placeholder="Your email for launch updates"
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
                    <span className="ring-spinner" /> Joining…
                  </span>
                ) : "Notify Me"}
              </button>
            </div>
          )}
          <p className="text-blue-200 text-xs mt-2.5 opacity-68">
            One email at launch, zero spam — unsubscribe anytime.
          </p>
        </div>

        {/* Divider */}
        <div
          className="fade-up d6"
          style={{
            width:60,height:3,borderRadius:2,margin:"0 auto 36px",
            background:"linear-gradient(90deg,rgba(165,243,252,0.5),rgba(255,255,255,0.15))",
          }}
        />

        {/* Scroll cue */}
        <a
          href="#perks"
          className="fade-up d7 flex flex-col items-center gap-1.5 text-xs uppercase tracking-widest font-semibold"
          style={{ color:"rgba(165,243,252,0.65)",textDecoration:"none",transition:"color 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.color = "rgba(165,243,252,1)")}
          onMouseLeave={e => (e.currentTarget.style.color = "rgba(165,243,252,0.65)")}
        >
          <span>Explore What Awaits</span>
          <svg className="w-4 h-4" style={{ animation:"floatA 2s ease-in-out infinite" }}
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </section>

      {/* ══════════════ PERKS ══════════════ */}
      <section id="perks" className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="text-center mb-8 md:mb-12 fade-up">
          <p className="sora text-xs uppercase tracking-[0.16em] text-blue-400 font-semibold mb-2">
            Why NTS?
          </p>
          <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f] font-extrabold mb-3">
            Built for People Who Build
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
            At Nexora we invest in our people as much as our products. Here's a glimpse of
            what life at NTS looks like.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {perks.map((p, i) => (
            <div
              key={i}
              className={`perk-card fade-up d${Math.min(i + 2, 8)} ${activePerks === i ? "active" : ""}`}
              onMouseEnter={() => setActivePerks(i)}
              onMouseLeave={() => setActivePerks(null)}
            >
              <div className="perk-icon" style={{ background:`linear-gradient(135deg,${p.color},#17b8e0)` }}>
                {p.icon}
              </div>
              <h3 className="sora text-[#1e3a5f] font-bold text-base mb-2">{p.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>

              {/* Coming soon chip */}
              <div
                className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  background:"linear-gradient(135deg,rgba(26,111,196,0.07),rgba(23,184,224,0.07))",
                  border:"1px solid rgba(26,111,196,0.18)",
                  color:"#1a6fc4",
                }}
              >
                <span style={{
                  width:6,height:6,borderRadius:"50%",background:"#17b8e0",
                  display:"inline-block",flexShrink:0,
                  animation:"pulseGlow 2s ease-in-out infinite",
                }} />
                Details Coming Soon
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ HIRING PROCESS ══════════════ */}
      <section
        className="py-10 md:py-16 px-4"
        style={{
          background:"linear-gradient(135deg,#0f3460 0%,#1a6fc4 40%,#17b8e0 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 fade-up">
            <p className="sora text-xs uppercase tracking-[0.16em] text-cyan-300 font-semibold mb-2">
              Our Process
            </p>
            <h2 className="sora text-3xl md:text-4xl text-white font-extrabold mb-3">
              How We Hire
            </h2>
            <p className="text-blue-100 max-w-md mx-auto text-sm leading-relaxed" style={{ opacity:0.82 }}>
              Straightforward, respectful, and human. No black-box algorithms — just honest
              conversations with the people you'll be working with.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {timeline.map((t, i) => (
              <div key={i} className={`tl-step fade-up d${i + 2}`}>
                <span className="tl-num">{t.step}</span>
                <div>
                  <h4 className="sora text-white font-bold text-base mb-1">{t.label}</h4>
                  <p className="text-blue-100 text-sm leading-relaxed" style={{ opacity:0.80 }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA inside process section */}
          <div className="text-center mt-10 fade-up d6">
            <div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full"
              style={{
                background:"rgba(255,255,255,0.10)",
                border:"1px solid rgba(255,255,255,0.22)",
              }}
            >
              <span style={{
                width:7,height:7,borderRadius:"50%",background:"#a5f3fc",
                display:"inline-block",animation:"pulseGlow 2s ease-in-out infinite",
              }} />
              <span className="sora text-cyan-100 text-xs font-semibold tracking-widest uppercase">
                Open Roles Available Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ CONTACT / CTA BANNER ══════════════ */}
      <section className="max-w-5xl mx-auto px-4 py-10 md:py-16">
        <div
          className="rounded-2xl px-5 py-8 md:px-8 md:py-10 text-center scale-in"
          style={{
            background:"linear-gradient(135deg,#1a6fc4 0%,#1e80d8 50%,#17b8e0 100%)",
            boxShadow:"0 20px 60px rgba(26,111,196,0.30)",
          }}
        >
          <p className="sora text-xs uppercase tracking-[0.16em] text-cyan-200 font-semibold mb-2">
            Can't Wait?
          </p>
          <h3 className="sora text-2xl md:text-3xl text-white font-extrabold mb-3">
            Talk to Our Talent Team
          </h3>
          <p
            className="text-blue-100 text-sm max-w-md mx-auto leading-relaxed mb-7"
            style={{ opacity:0.85 }}
          >
            If you'd like to explore opportunities before the careers portal goes live,
            our team is happy to hear from you directly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:careers@nexora.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm sora"
              style={{
                background:"rgba(255,255,255,0.17)",
                border:"1.5px solid rgba(255,255,255,0.34)",
                color:"white",textDecoration:"none",
                transition:"all 0.25s ease",
              }}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.27)";(e.currentTarget as HTMLElement).style.transform="translateY(-2px)";}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.17)";(e.currentTarget as HTMLElement).style.transform="translateY(0)";}}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              careers@nexora.com
            </a>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm sora"
              style={{
                background:"white",color:"#1a6fc4",
                textDecoration:"none",transition:"all 0.25s ease",
              }}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.boxShadow="0 8px 28px rgba(0,0,0,0.16)";(e.currentTarget as HTMLElement).style.transform="translateY(-2px)";}}
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

      {/* ══════════════ FOOTER ══════════════ */}
      <footer
        className="py-8 px-4 text-center"
        style={{
          background:"linear-gradient(135deg,#0f3460,#1a4f8c)",
          color:"rgba(255,255,255,0.55)",fontSize:"13px",
        }}
      >
        <p className="sora">© 2024 Nexora Technology Services Pvt. Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}
