"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import logo from "@/app/Photo/Nexora-Logo.png";
import Image from "next/image";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const services = [
    { name: "Software Development", href: "/services/software-development" },
    { name: "Web & Mobile Development", href: "/services/web-application" },
    { name: "Cloud Solution", href: "/services/cloud-solution" },
    { name: "Quality Assurance", href: "/services/Quality-Assurance" },
    { name: "Talent Acquisition", href: "/services/Talent-Acquisition" },
    { name: "Learning & Development", href: "/services/Learning-Development" },
  ];

  return (
    <nav
      className="sticky top-0 z-50 shadow-lg"
      style={{
        background: "linear-gradient(135deg, #1a6fc4 0%, #1e80d8 40%, #1a9fd4 80%, #17b8e0 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.15)",
      }}
    >
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nav-link {
          position: relative;
          transition: all 0.3s ease;
          color: rgba(255,255,255,0.92);
          font-weight: 600;
          letter-spacing: 0.01em;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: rgba(255,255,255,0.9);
          border-radius: 2px;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 75%; }
        .nav-link:hover {
          color: #ffffff;
          background: rgba(255,255,255,0.12);
        }
        .services-btn {
          color: rgba(255,255,255,0.92);
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .services-btn:hover {
          color: #ffffff;
          background: rgba(255,255,255,0.12);
        }
        .dropdown-item {
          animation: slideDown 0.2s ease forwards;
          transition: all 0.2s ease;
        }
        .dropdown-item:nth-child(1) { animation-delay: 0.00s; }
        .dropdown-item:nth-child(2) { animation-delay: 0.04s; }
        .dropdown-item:nth-child(3) { animation-delay: 0.08s; }
        .dropdown-item:nth-child(4) { animation-delay: 0.12s; }
        .dropdown-item:nth-child(5) { animation-delay: 0.16s; }
        .dropdown-item:nth-child(6) { animation-delay: 0.20s; }
        .mobile-menu {
          animation: slideDown 0.25s ease;
        }
        .cta-btn {
          background: rgba(255,255,255,0.18);
          border: 1.5px solid rgba(255,255,255,0.55);
          color: #ffffff;
          font-weight: 700;
          transition: all 0.3s ease;
        }
        .cta-btn:hover {
          background: rgba(255,255,255,0.28);
          border-color: rgba(255,255,255,0.85);
          box-shadow: 0 4px 18px rgba(0,0,0,0.15);
          transform: translateY(-1px);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                alt="logo"
                width={150}
                height={150}
                style={{ width: "150px", height: "auto" }}
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">

            <Link href="/" className="nav-link px-4 py-2 rounded-lg text-sm">
              Home
            </Link>

            <Link href="/about" className="nav-link px-4 py-2 rounded-lg text-sm">
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="services-btn px-4 py-2 rounded-lg text-sm flex items-center gap-1"
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute left-0 mt-2 w-60 rounded-xl overflow-hidden z-10"
                  style={{
                    background: "linear-gradient(160deg, #ffffff 0%, #f0f8ff 100%)",
                    border: "1px solid rgba(30, 128, 216, 0.2)",
                    boxShadow: "0 12px 40px rgba(26, 111, 196, 0.2), 0 2px 8px rgba(0,0,0,0.08)",
                  }}
                >
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      onClick={() => setIsDropdownOpen(false)}
                      className="dropdown-item flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-700 border-b border-blue-50 last:border-b-0"
                      style={{ opacity: 0 }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.background = "linear-gradient(90deg, #dbeafe, #e0f7ff)";
                        (e.currentTarget as HTMLElement).style.color = "#1a6fc4";
                        (e.currentTarget as HTMLElement).style.paddingLeft = "20px";
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                        (e.currentTarget as HTMLElement).style.color = "";
                        (e.currentTarget as HTMLElement).style.paddingLeft = "16px";
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "linear-gradient(135deg, #1e80d8, #17b8e0)" }}
                      />
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact" className="nav-link px-4 py-2 rounded-lg text-sm">
              Contact
            </Link>

            {/* CTA Button */}
            <Link href="/contact" className="cta-btn ml-3 px-5 py-2 rounded-full text-sm">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/15 transition-colors duration-200"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu md:hidden px-4 pb-4 space-y-1"
          style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}
        >
          {["Home", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg text-sm font-semibold text-white hover:bg-white/15 transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
          <div>
            <p className="px-4 py-2 text-xs font-bold text-blue-100 uppercase tracking-widest opacity-70">
              Services
            </p>
            {services.map((s, i) => (
              <Link
                key={i}
                href={s.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-6 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}