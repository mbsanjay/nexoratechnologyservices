"use client";

import Image from "next/image";
import Link from "next/link";
import img1 from "@/app/Photo/img 1.jpg";
import img2 from "@/app/Photo/img 2.jpg";
import img3 from "@/app/Photo/img 3.jpg";
import { useEffect, useState } from "react";

export default function Home() {
  const images = [img1, img2, img3];
  const [current, setCurrent] = useState(0);
  const [aboutExpanded, setAboutExpanded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: "500+", label: "Projects Done" },
    { number: "12+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Expert Team" },
  ];

  const features = [
    {
      icon: "💻",
      title: "Custom Software Development",
      desc: "Tailor-made software solutions built around your unique business processes, workflows, and goals.",
      delay: "0s",
    },
    {
      icon: "📱",
      title: "Web & Mobile Apps",
      desc: "Intuitive, high-performance web and mobile applications that deliver exceptional user experiences.",
      delay: "0.15s",
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      desc: "Scalable, secure cloud architectures and migrations that future-proof your infrastructure.",
      delay: "0.3s",
    },
    {
      icon: "🔍",
      title: "Quality Assurance",
      desc: "Comprehensive QA services ensuring every release meets the highest standards of performance and reliability.",
      delay: "0.45s",
    },
    {
      icon: "⚙️",
      title: "Engineering Services",
      desc: "Deep engineering expertise across the full stack — from architecture design to production deployment.",
      delay: "0.6s",
    },
    {
      icon: "🔄",
      title: "Digital Transformation",
      desc: "End-to-end transformation strategies that help businesses innovate, scale, and stay ahead.",
      delay: "0.75s",
    },
  ];

  const whyItems = [
    { icon: "🚀", title: "Agile & Fast", desc: "Our agile delivery model ensures faster time-to-market without compromising quality." },
    { icon: "🎯", title: "Business-First", desc: "We combine tech expertise with deep understanding of business needs for real impact." },
    { icon: "🌐", title: "Future-Ready", desc: "Every solution is built scalable, secure, and ready for tomorrow's challenges." },
    { icon: "🤝", title: "Long-Term Partner", desc: "We build lasting partnerships — not just projects — with every client we serve." },
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#f4f8fd]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');

        body, * { font-family: 'DM Sans', sans-serif; }
        .sora { font-family: 'Sora', sans-serif; }

        @keyframes heroSlideDown {
          from { opacity: 0; transform: translateY(-50px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes pulseRing {
          0%   { box-shadow: 0 0 0 0 rgba(26,111,196,0.35); }
          70%  { box-shadow: 0 0 0 14px rgba(26,111,196,0); }
          100% { box-shadow: 0 0 0 0 rgba(26,111,196,0); }
        }
        @keyframes slideProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
        @keyframes countUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes diagonalMove {
          0%,100% { transform: translate(0,0); }
          50%      { transform: translate(8px,-8px); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.94); }
          to   { opacity: 1; transform: scale(1); }
        }

        .hero-title { animation: heroSlideDown 1s ease-out both; }
        .hero-sub   { animation: heroFadeUp 1s 0.4s ease-out both; }
        .hero-btn   { animation: heroFadeUp 1s 0.7s ease-out both; }
        .fade-up    { animation: fadeUp   0.7s ease both; }
        .fade-left  { animation: fadeLeft 0.7s ease both; }
        .fade-right { animation: fadeRight 0.7s ease both; }
        .scale-in   { animation: scaleIn 0.6s ease both; }
        .float-icon { animation: float 3.5s ease-in-out infinite; }
        .stat-item  { animation: countUp 0.6s ease both; }

        .dot { width:8px; height:8px; border-radius:50%; background:rgba(255,255,255,0.4); transition:all 0.3s ease; cursor:pointer; border:none; }
        .dot.active { background:white; width:24px; border-radius:4px; }

        .progress-bar {
          height: 3px;
          background: linear-gradient(90deg, #1a6fc4, #17b8e0);
          animation: slideProgress 3.5s linear infinite;
          border-radius: 2px;
        }

        /* Services cards */
        .service-card {
          background: white;
          border-radius: 20px;
          padding: 32px 28px;
          border: 1.5px solid #e8f0fb;
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
          position: relative;
          overflow: hidden;
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #1a6fc4, #17b8e0);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }
        .service-card:hover::before { transform: scaleX(1); }
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(26,111,196,0.14);
          border-color: rgba(26,111,196,0.2);
        }
        .service-icon {
          width: 60px; height: 60px;
          border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          font-size: 26px;
          margin-bottom: 20px;
          transition: transform 0.3s ease;
          background: linear-gradient(135deg, #eef4fd, #daeeff);
        }
        .service-card:hover .service-icon { transform: scale(1.12) rotate(-5deg); }

        /* Why cards */
        .why-card {
          background: white;
          border-radius: 18px;
          padding: 28px 24px;
          border: 1.5px solid #e8f0fb;
          transition: all 0.3s ease;
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .why-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 45px rgba(26,111,196,0.12);
          border-color: rgba(26,111,196,0.2);
        }
        .why-icon {
          width: 48px; height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, #eef4fd, #daeeff);
          display: flex; align-items: center; justify-content: center;
          font-size: 22px;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .why-card:hover .why-icon { transform: scale(1.1) rotate(-4deg); }

        /* About */
        .about-deco-ring {
          position: absolute;
          border-radius: 50%;
          border: 2px dashed rgba(26,111,196,0.22);
          animation: rotateSlow 20s linear infinite;
        }
        .about-deco-dot {
          width: 12px; height: 12px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1a6fc4, #17b8e0);
          animation: pulseRing 2.5s ease-in-out infinite;
          flex-shrink: 0;
        }
        .float-badge {
          position: absolute;
          background: white;
          border-radius: 14px;
          padding: 12px 16px;
          box-shadow: 0 10px 35px rgba(26,111,196,0.2);
          border: 1px solid rgba(26,111,196,0.12);
          z-index: 10;
          animation: diagonalMove 4s ease-in-out infinite;
        }
        .about-stat-chip {
          background: white;
          border-radius: 14px;
          padding: 14px 18px;
          box-shadow: 0 8px 30px rgba(26,111,196,0.12);
          border: 1px solid rgba(26,111,196,0.1);
          transition: transform 0.25s ease;
        }
        .about-stat-chip:hover { transform: translateY(-4px); }

        .check-item {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 14px; color: #334155; line-height: 1.6;
        }
        .check-icon {
          width: 20px; height: 20px; border-radius: 50%;
          background: linear-gradient(135deg, #1a6fc4, #17b8e0);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 2px;
        }

        .read-more-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 28px; border-radius: 50px;
          font-family: 'Sora', sans-serif; font-size: 14px; font-weight: 700;
          cursor: pointer; transition: all 0.3s ease; border: none;
          background: linear-gradient(135deg, #1a6fc4, #1e80d8, #17b8e0);
          color: white; box-shadow: 0 6px 24px rgba(26,111,196,0.35);
        }
        .read-more-btn:hover {
          box-shadow: 0 10px 32px rgba(26,111,196,0.5);
          transform: translateY(-2px);
        }

        .section-label {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 14px; border-radius: 50px;
          background: rgba(26,111,196,0.08); border: 1px solid rgba(26,111,196,0.15);
          font-size: 12px; font-weight: 700; color: #1a6fc4;
          text-transform: uppercase; letter-spacing: 0.1em;
          font-family: 'Sora', sans-serif; margin-bottom: 16px;
        }
        .section-label::before {
          content: ''; width: 6px; height: 6px; border-radius: 50%;
          background: linear-gradient(135deg, #1a6fc4, #17b8e0);
        }

        /* Testimonial */
        .testimonial-card {
          background: white;
          border-radius: 20px;
          padding: 32px 28px;
          border: 1.5px solid #e8f0fb;
          transition: all 0.3s ease;
          position: relative;
        }
        .testimonial-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 50px rgba(26,111,196,0.12);
        }
        .quote-mark {
          font-size: 60px; line-height: 1;
          background: linear-gradient(135deg, #1a6fc4, #17b8e0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: 'Sora', sans-serif;
          position: absolute; top: 16px; left: 24px;
          opacity: 0.25;
        }

        /* CTA */
        .cta-section {
          background: linear-gradient(135deg, #1a6fc4 0%, #1e80d8 50%, #17b8e0 100%);
          position: relative; overflow: hidden;
        }
        .cta-section::before {
          content: ''; position: absolute;
          width: 500px; height: 500px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          top: -200px; right: -100px;
        }
        .cta-section::after {
          content: ''; position: absolute;
          width: 300px; height: 300px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.08);
          bottom: -100px; left: -80px;
        }

        /* Process step */
        .process-step {
          text-align: center;
          position: relative;
        }
        .process-step::after {
          content: '';
          position: absolute;
          top: 30px; right: -50%;
          width: 100%; height: 2px;
          background: linear-gradient(90deg, #1a6fc4, #17b8e0);
          opacity: 0.2;
        }
        .process-step:last-child::after { display: none; }
        .step-circle {
          width: 60px; height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1a6fc4, #17b8e0);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 16px;
          font-family: 'Sora', sans-serif;
          font-weight: 800; font-size: 18px;
          color: white;
          box-shadow: 0 8px 24px rgba(26,111,196,0.35);
          transition: transform 0.3s ease;
        }
        .process-step:hover .step-circle { transform: scale(1.1); }
      `}</style>

      {/* ══════════════════════════════
          HERO SLIDER
      ══════════════════════════════ */}
      <section className="w-full h-[600px] relative overflow-hidden">
        {images.map((img, i) => (
          <div key={i} className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0 }}>
            <Image src={img} alt={`slide-${i}`} fill className="object-cover" priority={i === 0} />
          </div>
        ))}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, rgba(8,25,60,0.82) 0%, rgba(10,38,85,0.65) 55%, rgba(0,0,0,0.35) 100%)"
        }} />
        <div className="absolute top-0 left-0 right-0 z-20" style={{ background: "rgba(255,255,255,0.08)" }}>
          <div className="progress-bar" />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-10">
          <div className="hero-title">
            <p className="sora text-xs uppercase tracking-[0.22em] text-cyan-300 mb-4" style={{ fontWeight: 600 }}>
              Nexora Technology Services Pvt. Ltd.
            </p>
            <h1 className="sora leading-tight mb-3" style={{ fontWeight: 800, fontSize: "clamp(2.2rem, 6vw, 4.5rem)" }}>
              Empowering Ideas.{" "}
              <br className="hidden md:block" />
              <span style={{
                background: "linear-gradient(90deg, #67e8f9, #38bdf8, #93c5fd)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% auto",
                animation: "shimmer 3s linear infinite",
              }}>
                Engineering the Future.
              </span>
            </h1>
          </div>

          <p className="hero-sub text-base md:text-lg text-gray-200 max-w-2xl mt-2 leading-relaxed" style={{ opacity: 0.9 }}>
            We turn ambitious ideas into powerful digital solutions — helping businesses{" "}
            <span className="text-cyan-300 font-semibold">innovate, scale, and stay ahead</span>{" "}
            in a rapidly evolving technology landscape.
          </p>

          <div className="hero-btn flex gap-4 mt-8 flex-wrap justify-center">
            <Link href="/contact"
              className="sora px-8 py-3.5 rounded-full text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ fontWeight: 700, background: "linear-gradient(135deg, #1a6fc4, #17b8e0)", boxShadow: "0 8px 28px rgba(26,111,196,0.5)" }}>
              Build With Us
            </Link>
            <Link href="/about"
              className="sora px-8 py-3.5 rounded-full text-sm text-white transition-all duration-300 hover:bg-white/20"
              style={{ fontWeight: 700, background: "rgba(255,255,255,0.12)", border: "1.5px solid rgba(255,255,255,0.4)", backdropFilter: "blur(8px)" }}>
              Learn More
            </Link>
          </div>
        </div>

        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
          {images.map((_, i) => (
            <button key={i} className={`dot ${i === current ? "active" : ""}`} onClick={() => setCurrent(i)} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════
          STATS BAR
      ══════════════════════════════ */}
      {/* <section className="w-full py-5 px-4"
        style={{ background: "linear-gradient(135deg, #1a6fc4 0%, #1e80d8 60%, #17b8e0 100%)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="stat-item text-center text-white py-2"
              style={{ animationDelay: `${i * 0.1}s`, borderRight: i < 3 ? "1px solid rgba(255,255,255,0.2)" : "none" }}>
              <p className="sora text-2xl md:text-3xl text-cyan-200" style={{ fontWeight: 800 }}>{s.number}</p>
              <p className="text-xs text-blue-100 uppercase tracking-widest mt-1" style={{ opacity: 0.85 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* ══════════════════════════════
          INTRO BANNER
      ══════════════════════════════ */}
      <section className="w-full py-16 px-4" style={{ background: "white" }}>
        <div className="max-w-4xl mx-auto text-center fade-up">
          <div className="section-label mx-auto w-fit">Who We Are</div>
          <h2 className="sora text-3xl md:text-4xl text-[#1e3a5f] mb-6 leading-snug" style={{ fontWeight: 800 }}>
            A Forward-Thinking Startup<br />
            <span style={{
              background: "linear-gradient(135deg, #1a6fc4, #17b8e0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Built for the Digital-First World
            </span>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed max-w-3xl mx-auto mb-4">
            At Nexora Technology Services Pvt. Ltd., we are dedicated to delivering innovative and reliable software solutions that empower businesses to grow and succeed. We combine technology expertise with a deep understanding of business needs to create impactful, scalable, and future-ready solutions.
          </p>
          <p className="text-slate-500 text-sm leading-relaxed max-w-2xl mx-auto">
            Whether you're a startup finding your footing or an enterprise scaling globally —{" "}
            <span className="text-[#1a6fc4] font-semibold">we are your trusted partner</span>{" "}
            in navigating the evolving technology landscape.
          </p>

          {/* Tagline chip */}
          <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{ background: "linear-gradient(135deg, rgba(26,111,196,0.07), rgba(23,184,224,0.07))", border: "1.5px solid rgba(26,111,196,0.15)" }}>
            <span style={{ fontSize: "18px" }}>🚀</span>
            <p className="sora text-sm text-[#1a6fc4]" style={{ fontWeight: 700 }}>
              Build with Nexora. Grow without limits.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CORE SERVICES
      ══════════════════════════════ */}
      <section className="w-full max-w-6xl mx-auto py-20 px-4">
        <div className="text-center mb-14 fade-up">
          <div className="section-label mx-auto w-fit">Core Services</div>
          <h2 className="sora text-4xl md:text-5xl text-[#1e3a5f] mb-4" style={{ fontWeight: 800 }}>
            What We{" "}
            <span style={{
              background: "linear-gradient(135deg, #1a6fc4, #17b8e0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Deliver
            </span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
            With a strong focus on agility, performance, and user experience, we ensure every solution meets the highest standards of quality and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="service-card fade-up" style={{ animationDelay: f.delay }}>
              <div className="service-icon float-icon" style={{ animationDelay: f.delay }}>
                <span>{f.icon}</span>
              </div>
              <h3 className="sora text-base text-[#1e3a5f] mb-2" style={{ fontWeight: 700 }}>{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{f.desc}</p>
              <Link href="/contact"
                className="text-xs font-600 text-[#1a6fc4] flex items-center gap-1 hover:gap-2 transition-all duration-200"
                style={{ fontWeight: 600 }}>
                Learn more
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════
          HOW WE WORK — PROCESS
      ══════════════════════════════ */}
      <section className="w-full py-20 px-4" style={{ background: "white" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 fade-up">
            <div className="section-label mx-auto w-fit">Our Process</div>
            <h2 className="sora text-4xl text-[#1e3a5f]" style={{ fontWeight: 800 }}>
              How We{" "}
              <span style={{
                background: "linear-gradient(135deg, #1a6fc4, #17b8e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Work</span>
            </h2>
            <p className="text-slate-500 mt-3 text-sm max-w-lg mx-auto">
              A proven, transparent process that keeps you informed and in control at every stage.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "We dive deep into your business goals, challenges, and requirements." },
              { step: "02", title: "Planning", desc: "We craft a detailed roadmap, architecture, and sprint plan." },
              { step: "03", title: "Build", desc: "Agile development with continuous feedback loops and regular demos." },
              { step: "04", title: "Launch & Support", desc: "Seamless deployment and ongoing support to ensure long-term success." },
            ].map((p, i) => (
              <div key={i} className={`process-step fade-up`} style={{ animationDelay: `${i * 0.12}s` }}>
                <div className="step-circle">{p.step}</div>
                <h4 className="sora text-sm text-[#1e3a5f] mb-2" style={{ fontWeight: 700 }}>{p.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          ABOUT — TEXT LEFT, IMAGE RIGHT
      ══════════════════════════════ */}
      <section className="w-full py-20 px-4" style={{ background: "#f4f8fd" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div className="fade-left">
            <div className="section-label">About Nexora</div>
            <h2 className="sora text-4xl md:text-5xl text-[#1e3a5f] leading-tight mb-6" style={{ fontWeight: 800 }}>
              Driving Digital{" "}
              <span style={{
                background: "linear-gradient(135deg, #1a6fc4, #17b8e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Transformation
              </span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-4">
              At Nexora, we are a forward-thinking startup dedicated to delivering innovative and reliable software solutions. We combine technology expertise with a deep understanding of business needs to create impactful, scalable, and future-ready solutions.
            </p>

            {aboutExpanded && (
              <div className="fade-up">
                <p className="text-slate-600 text-base leading-relaxed mb-4">
                  Our core services include custom software development, web and mobile application development, cloud solutions, and comprehensive quality assurance. With a strong focus on agility, performance, and user experience, we ensure every solution we deliver meets the highest standards of quality and efficiency.
                </p>
                <p className="text-slate-600 text-base leading-relaxed mb-5">
                  Driven by a passionate team of professionals, Nexora is committed to building long-term partnerships with our clients by consistently delivering value, innovation, and excellence. Whether you're a startup or an enterprise, we are your trusted partner in navigating the evolving technology landscape.
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                "Agile Development Process",
                "24/7 Dedicated Support",
                "Custom-Built Solutions",
                "Transparent Pricing",
                "End-to-End Delivery",
                "Long-Term Partnerships",
              ].map((item, i) => (
                <div key={i} className="check-item">
                  <div className="check-icon">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap">
              <button className="read-more-btn" onClick={() => setAboutExpanded(!aboutExpanded)}>
                {aboutExpanded ? "Show Less" : "Read More"}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  style={{ transform: aboutExpanded ? "rotate(90deg)" : "none", transition: "transform 0.3s" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <Link href="/about"
                className="sora inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm text-[#1a6fc4] hover:bg-blue-50 transition-all"
                style={{ fontWeight: 700, border: "2px solid #1a6fc4" }}>
                Our Story
              </Link>
            </div>
          </div>

          {/* Right — Image */}
          <div className="fade-right relative flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="about-deco-ring" style={{ width: 340, height: 340, top: -30, right: -30, zIndex: 0 }} />
              <div className="about-deco-ring" style={{ width: 200, height: 200, bottom: -20, left: -20, zIndex: 0, animationDirection: "reverse", borderColor: "rgba(23,184,224,0.2)" }} />

              <div style={{ borderRadius: "24px", overflow: "hidden", position: "relative", zIndex: 2, boxShadow: "0 24px 70px rgba(26,111,196,0.22)" }}>
                <Image src={img1} alt="About Nexora" width={480} height={520}
                  className="w-full object-cover" style={{ height: "460px" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 60%, rgba(26,111,196,0.28) 100%)" }} />
              </div>

              {/* <div className="float-badge" style={{ top: 20, left: -24 }}>
                <div className="flex items-center gap-2">
                  <div className="about-deco-dot" />
                  <div>
                    <p className="sora text-xs text-[#1e3a5f]" style={{ fontWeight: 700, lineHeight: 1.2 }}>500+ Projects</p>
                    <p className="text-slate-400" style={{ fontSize: "10px" }}>Successfully Delivered</p>
                  </div>
                </div>
              </div> */}

              <div className="float-badge" style={{ bottom: 80, right: -24, animationDelay: "2s" }}>
                <div className="flex items-center gap-2">
                  <span style={{ fontSize: "20px" }}>🏆</span>
                  <div>
                    <p className="sora text-xs text-[#1e3a5f]" style={{ fontWeight: 700, lineHeight: 1.2 }}>98% Satisfaction</p>
                    <p className="text-slate-400" style={{ fontSize: "10px" }}>Client Rating</p>
                  </div>
                </div>
              </div>

              {/* <div className="flex gap-3 mt-5 justify-center flex-wrap">
                {[{ n: "12+", l: "Years" }, { n: "50+", l: "Team" }, { n: "20+", l: "Countries" }].map((s, i) => (
                  <div key={i} className="about-stat-chip text-center min-w-[80px]">
                    <p className="sora text-lg text-[#1a6fc4]" style={{ fontWeight: 800 }}>{s.n}</p>
                    <p className="text-slate-400 text-xs uppercase tracking-wide">{s.l}</p>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════ */}
      <section className="w-full py-20 px-4" style={{ background: "white" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 fade-up">
            <div className="section-label mx-auto w-fit">Why Nexora</div>
            <h2 className="sora text-4xl text-[#1e3a5f]" style={{ fontWeight: 800 }}>
              The Nexora{" "}
              <span style={{
                background: "linear-gradient(135deg, #1a6fc4, #17b8e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Advantage</span>
            </h2>
            <p className="text-slate-500 mt-3 text-sm max-w-lg mx-auto">
              With years of experience, we've built a reputation for delivering exceptional results through technical expertise and creative thinking.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whyItems.map((w, i) => (
              <div key={i} className={`why-card fade-up`} style={{ animationDelay: `${i * 0.12}s` }}>
                <div className="why-icon float-icon" style={{ animationDelay: `${i * 0.3}s` }}>
                  <span>{w.icon}</span>
                </div>
                <div>
                  <h3 className="sora text-base text-[#1e3a5f] mb-1.5" style={{ fontWeight: 700 }}>{w.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          TESTIMONIALS
      ══════════════════════════════ */}
      {/* <section className="w-full py-20 px-4" style={{ background: "#f4f8fd" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 fade-up">
            <div className="section-label mx-auto w-fit">Testimonials</div>
            <h2 className="sora text-4xl text-[#1e3a5f]" style={{ fontWeight: 800 }}>
              What Our{" "}
              <span style={{
                background: "linear-gradient(135deg, #1a6fc4, #17b8e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Clients Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "Nexora transformed our outdated ERP into a seamless, cloud-native platform. The team's expertise and dedication were outstanding throughout.", name: "Arun Mehta", role: "CTO, FinEdge Solutions" },
              { quote: "From discovery to launch, the team at Nexora was transparent, responsive, and delivered exactly what we envisioned — on time and on budget.", name: "Sarah Thompson", role: "Product Manager, GrowthBase" },
              { quote: "Their quality assurance process caught issues we didn't even know existed. The final product was rock solid. Highly recommend Nexora.", name: "Vikram Nair", role: "Founder, BuildStack" },
            ].map((t, i) => (
              <div key={i} className={`testimonial-card fade-up`} style={{ animationDelay: `${i * 0.12}s` }}>
                <div className="quote-mark">"</div>
             
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-4 h-4" viewBox="0 0 24 24" fill="#f59e0b">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 relative z-10">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ background: "linear-gradient(135deg, #1a6fc4, #17b8e0)" }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="sora text-sm text-[#1e3a5f]" style={{ fontWeight: 700 }}>{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ══════════════════════════════
          CTA BANNER
      ══════════════════════════════ */}
      <section className="cta-section w-full py-20 px-4">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="section-label mx-auto w-fit mb-4"
            style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "white" }}>
            Start Today
          </div>
          <h2 className="sora text-3xl md:text-5xl text-white mb-4 leading-tight" style={{ fontWeight: 800 }}>
            Ready to Build Something<br />
            <span style={{ color: "#a5f3fc" }}>Extraordinary?</span>
          </h2>
          {/* <p className="text-blue-100 text-lg mb-4 max-w-xl mx-auto" style={{ opacity: 0.9 }}>
            Join 500+ companies who trusted Nexora to build their digital future.
          </p> */}
          <p className="text-cyan-200 text-sm mb-10 font-semibold tracking-wide">
            Build with Nexora. Grow without limits.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact"
              className="sora px-9 py-4 rounded-full text-sm text-[#1a6fc4] bg-white hover:shadow-2xl hover:scale-105 transition-all"
              style={{ fontWeight: 700, boxShadow: "0 8px 28px rgba(0,0,0,0.15)" }}>
              Contact Us Today
            </Link>
            <Link href="/about"
              className="sora px-9 py-4 rounded-full text-sm text-white hover:bg-white/20 transition-all"
              style={{ fontWeight: 700, background: "rgba(255,255,255,0.12)", border: "1.5px solid rgba(255,255,255,0.45)" }}>
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FOOTER
      ══════════════════════════════ */}
      <footer className="w-full py-14 px-4" style={{ background: "linear-gradient(135deg, #0a1e3d, #0f3460)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            <div className="md:col-span-2">
              <h3 className="sora text-white text-xl mb-3" style={{ fontWeight: 800 }}>Nexora</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 max-w-xs">
                A forward-thinking technology startup delivering innovative and reliable software solutions that empower businesses to grow and succeed in a digital-first world.
              </p>
              <p className="sora text-xs text-cyan-400" style={{ fontWeight: 600 }}>
                Build with Nexora. Grow without limits.
              </p>
            </div>
            <div>
              <h3 className="sora text-white text-xs uppercase tracking-widest mb-4" style={{ fontWeight: 700 }}>
                Quick Links
              </h3>
              <ul className="space-y-2">
                {["Home", "About", "Services", "Contact"].map((link) => (
                  <li key={link}>
                    <Link href={`/${link === "Home" ? "" : link.toLowerCase()}`}
                      className="text-slate-400 text-sm hover:text-cyan-400 transition-colors flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-blue-500" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="sora text-white text-xs uppercase tracking-widest mb-4" style={{ fontWeight: 700 }}>
                Contact
              </h3>
              <div className="space-y-2 text-slate-400 text-sm">
                <p>info@nexora.com</p>
                <p>+91 (555) 123-4567</p>
                <p>Bengaluru, Karnataka, India</p>
              </div>
            </div>
          </div>
          <div className="pt-8 text-center text-slate-500 text-xs"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <p className="sora">© 2024 Nexora Technology Services Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}