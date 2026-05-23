"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async () => {
    setSending(true);
    await new Promise((r) => setTimeout(r, 1800));
    setSending(false);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Our Office",
      value: "# 44/1, 2nd Floor, 16th Cross, Jayanagar, 7th Block (west) K.R. Road Bengaluru - 560070",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Phone",
      value: "+91 000-000-0000",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "info@nexoratechnology.co.in",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: "Business Hours",
      value: "Mon–Fri: 9AM–6PM  |  Sat: 10AM–3PM",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4f8fd] font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        * { font-family: 'DM Sans', sans-serif; }
        .sora { font-family: 'Sora', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.94); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes floatOrb {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%       { transform: translateY(-18px) scale(1.04); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes checkPop {
          0%   { transform: scale(0); opacity: 0; }
          70%  { transform: scale(1.2); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes mapReveal {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulsePin {
          0%, 100% { box-shadow: 0 0 0 0 rgba(26,111,196,0.4); }
          50%       { box-shadow: 0 0 0 12px rgba(26,111,196,0); }
        }

        .fade-up   { animation: fadeUp   0.7s ease both; }
        .fade-left { animation: fadeLeft 0.7s ease both; }
        .scale-in  { animation: scaleIn  0.6s ease both; }
        .map-reveal{ animation: mapReveal 0.8s ease both; }

        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }
        .delay-5 { animation-delay: 0.5s; }
        .delay-6 { animation-delay: 0.6s; }

        .orb  { animation: floatOrb 6s ease-in-out infinite; }
        .orb-2{ animation: floatOrb 8s ease-in-out infinite reverse; }

        .input-field {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e2eaf6;
          border-radius: 10px;
          background: #f9fbff;
          color: #1e3a5f;
          font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          transition: all 0.25s ease;
          outline: none;
        }
        .input-field::placeholder { color: #9ab0c8; }
        .input-field:focus {
          border-color: #1e80d8;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(30,128,216,0.10);
          transform: translateY(-1px);
        }

        .info-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 18px 20px;
          border-radius: 14px;
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.18);
          transition: all 0.25s ease;
          cursor: default;
        }
        .info-card:hover {
          background: rgba(255,255,255,0.18);
          transform: translateX(4px);
        }
        .info-icon {
          width: 40px; height: 40px;
          border-radius: 10px;
          background: rgba(255,255,255,0.18);
          display: flex; align-items: center; justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          border: none;
          font-family: 'Sora', sans-serif;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          background: linear-gradient(135deg, #1a6fc4 0%, #1e80d8 50%, #17b8e0 100%);
          color: white;
          letter-spacing: 0.02em;
        }
        .submit-btn:hover:not(:disabled) {
          box-shadow: 0 8px 28px rgba(26,111,196,0.45);
          transform: translateY(-2px);
        }
        .submit-btn:disabled { opacity: 0.85; cursor: not-allowed; }

        .check-anim { animation: checkPop 0.5s cubic-bezier(.36,.07,.19,.97) both; }

        .ring-spin {
          width: 20px; height: 20px;
          border: 2.5px solid rgba(255,255,255,0.4);
          border-top-color: white;
          border-radius: 50%;
          animation: spin-slow 0.7s linear infinite;
          display: inline-block;
        }

        .label-text {
          display: block;
          font-size: 12.5px;
          font-weight: 600;
          color: #4a6fa5;
          margin-bottom: 6px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .social-btn {
          width: 38px; height: 38px;
          border-radius: 10px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.22);
          display: flex; align-items: center; justify-content: center;
          color: white;
          transition: all 0.25s ease;
          cursor: pointer;
        }
        .social-btn:hover {
          background: rgba(255,255,255,0.24);
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.15);
        }

        .geo-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
        }

        /* Map section */
        .map-wrapper {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 12px 50px rgba(26,111,196,0.18), 0 2px 10px rgba(0,0,0,0.06);
          border: 3px solid rgba(255,255,255,0.9);
          position: relative;
        }
        .map-wrapper iframe {
          display: block;
          width: 100%;
          height: 380px;
          border: none;
          filter: saturate(1.1) contrast(1.02);
        }
        .map-overlay-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          background: white;
          border-radius: 12px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 20px rgba(26,111,196,0.2);
          z-index: 10;
        }
        .pin-dot {
          width: 12px; height: 12px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1a6fc4, #17b8e0);
          animation: pulsePin 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        .directions-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 20px;
          border-radius: 10px;
          border: none;
          font-family: 'Sora', sans-serif;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
          background: linear-gradient(135deg, #1a6fc4, #17b8e0);
          color: white;
          text-decoration: none;
        }
        .directions-btn:hover {
          box-shadow: 0 6px 20px rgba(26,111,196,0.4);
          transform: translateY(-2px);
        }
      `}</style>

      {/* ── Hero Banner ── */}
      <section
        className="relative overflow-hidden py-10 md:py-16 px-4"
        style={{ background: "linear-gradient(135deg, #1a6fc4 0%, #1e80d8 45%, #1a9fd4 80%, #17b8e0 100%)" }}
      >
        <div className="geo-ring" style={{ width: 320, height: 320, top: -80, right: -80, opacity: 0.15 }} />
        <div className="geo-ring" style={{ width: 200, height: 200, top: 20, right: 60, opacity: 0.1 }} />
        <div className="geo-ring" style={{ width: 500, height: 500, bottom: -200, left: -100, opacity: 0.08 }} />
        <div className="orb absolute top-8 right-1/4 w-24 h-24 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #7dd3fc, transparent)" }} />
        <div className="orb-2 absolute bottom-4 right-16 w-16 h-16 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #a5f3fc, transparent)" }} />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="fade-left">
            <p className="sora text-xs font-600 tracking-[0.18em] text-cyan-200 uppercase mb-3">
              Nexora Technology Services
            </p>
            <h1 className="sora text-4xl md:text-5xl text-white mb-4 leading-tight" style={{ fontWeight: 800 }}>
              Let's Start a<br />
              <span style={{ color: "#a5f3fc" }}>Conversation</span>
            </h1>
            <p className="text-blue-100 text-base max-w-md leading-relaxed" style={{ opacity: 0.85 }}>
              Whether you're exploring ERP solutions, cloud services, or digital transformation — our team is ready to help you take the next step.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact Form + Info ── */}
      <section className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-start">

          {/* Left: Info Panel */}
          <div className="lg:col-span-2 fade-left delay-1">
            <div
              className="rounded-2xl p-7 h-full"
              style={{
                background: "linear-gradient(160deg, #1a6fc4 0%, #1680d8 50%, #17b8e0 100%)",
                boxShadow: "0 20px 60px rgba(26,111,196,0.35)",
              }}
            >
              <h2 className="sora text-xl text-white mb-1" style={{ fontWeight: 700 }}>
                Contact Information
              </h2>
              <p className="text-blue-100 text-sm mb-7" style={{ opacity: 0.8 }}>
                Reach us through any of these channels
              </p>

              <div className="space-y-3">
                {contactInfo.map((item, i) => (
                  <div key={i} className={`info-card fade-up delay-${i + 2}`}>
                    <div className="info-icon">{item.icon}</div>
                    <div>
                      <p className="text-cyan-200 text-xs mb-0.5 tracking-wide uppercase"
                        style={{ fontWeight: 600, letterSpacing: "0.06em" }}>
                        {item.label}
                      </p>
                      <p className="text-white text-sm leading-snug" style={{ opacity: 0.92 }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
                <p className="text-cyan-200 text-xs uppercase tracking-widest mb-4" style={{ fontWeight: 600 }}>
                  Follow Us
                </p>
                <div className="flex gap-2">
                  <div className="social-btn">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div className="social-btn">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  <div className="social-btn">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div className="social-btn">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 scale-in delay-2">
            <div
              className="bg-white rounded-2xl p-5 md:p-8"
              style={{ boxShadow: "0 8px 40px rgba(26,111,196,0.10), 0 2px 8px rgba(0,0,0,0.04)" }}
            >
              <h2 className="sora text-2xl text-[#1e3a5f] mb-1" style={{ fontWeight: 700 }}>
                Send Us a Message
              </h2>
              <p className="text-slate-400 text-sm mb-7">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="fade-up delay-2">
                    <label className="label-text">Full Name</label>
                    <input type="text" className="input-field" placeholder="John Smith"
                      value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div className="fade-up delay-3">
                    <label className="label-text">Phone</label>
                    <input type="tel" className="input-field" placeholder="+1 (555) 000-0000"
                      value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                  </div>
                </div>

                <div className="fade-up delay-3">
                  <label className="label-text">Email Address</label>
                  <input type="email" className="input-field" placeholder="john@company.com"
                    value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>

                <div className="fade-up delay-4">
                  <label className="label-text">Subject</label>
                  <select className="input-field" value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{ appearance: "none", backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ab0c8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center", backgroundSize: "18px" }}>
                    <option value="">Select a service...</option>
                    <option>ERP Solutions</option>
                    <option>Custom Application Development</option>
                    <option>Cloud Services</option>
                    <option>Engineering Services</option>
                    <option>Digital Transformation</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="fade-up delay-5">
                  <label className="label-text">Message</label>
                  <textarea rows={4} className="input-field resize-none" placeholder="Tell us about your project or inquiry..."
                    value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                </div>

                <div className="fade-up delay-5 pt-1">
                  <button className="submit-btn" onClick={handleSubmit} disabled={sending || sent}>
                    {sent ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5 check-anim" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        Message Sent!
                      </span>
                    ) : sending ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="ring-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Send Message
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map Section ── */}
      <section className="max-w-5xl mx-auto px-4 pb-14">
        <div className="map-reveal delay-6">

          {/* Section Header */}
          <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
            <div>
              <p className="sora text-xs uppercase tracking-[0.14em] text-blue-400 mb-1" style={{ fontWeight: 600 }}>
                Find Us Here
              </p>
              <h3 className="sora text-xl text-[#1e3a5f]" style={{ fontWeight: 700 }}>
                Our Location
              </h3>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=12.9222185,77.573822"
              target="_blank"
              rel="noopener noreferrer"
              className="directions-btn"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Get Directions
            </a>
          </div>

          {/* Map Card */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              boxShadow: "0 16px 50px rgba(26,111,196,0.18), 0 2px 10px rgba(0,0,0,0.06)",
              border: "3px solid white",
              position: "relative",
            }}
          >
            {/* Live badge overlay */}
            <div className="map-overlay-badge">
              <div className="pin-dot" />
              <div>
                <p className="sora text-xs text-[#1e3a5f]" style={{ fontWeight: 700, lineHeight: 1.2 }}>
                  Nexora Office
                </p>
                <p className="text-slate-400" style={{ fontSize: "10px" }}>
                  Bengaluru, Karnataka
                </p>
              </div>
            </div>

            {/* Google Maps Embed — coordinates: 12.9222185, 77.573822 */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d971.5!2d77.573822!3d12.9222185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
              width="100%"
              height="380"
              style={{ border: "none", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nexora Office Location"
            />
          </div>

          {/* Bottom coords strip */}
          <div
            className="mt-3 px-4 py-2.5 rounded-xl flex items-center gap-3 flex-wrap"
            style={{ background: "rgba(26,111,196,0.06)", border: "1px solid rgba(26,111,196,0.12)" }}
          >
            <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-slate-500 text-xs">
              12°55'20.0"N, 77°34'25.8"E — Bengaluru, Karnataka, India
            </span>
            <a
            
              href="https://www.google.com/maps/place/12%C2%B055'20.0%22N+77%C2%B034'25.8%22E"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-xs font-600 ml-auto hover:underline"
              style={{ fontWeight: 600 }}
            >
              Open in Google Maps &#8594;
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        className="py-8 px-4 text-center"
        style={{ background: "linear-gradient(135deg, #0f3460, #1a4f8c)", color: "rgba(255,255,255,0.6)", fontSize: "13px" }}
      >
        <p className="sora">© 2026 Nexora Technology Services Pvt. Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}