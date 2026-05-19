"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import logo from "@/app/Photo/Nexora-Logo.png";
import Image from "next/image";

const FLYOUT_STYLES = {
  background: "linear-gradient(160deg, #ffffff 0%, #f0f8ff 100%)",
  border: "1px solid rgba(30,128,216,0.2)",
  boxShadow: "0 12px 40px rgba(26,111,196,0.2), 0 2px 8px rgba(0,0,0,0.08)",
};

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [activeSubSub, setActiveSubSub] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
        setActiveSubMenu(null);
        setActiveSubSub(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeAll = () => {
    setActiveDropdown(null);
    setActiveSubMenu(null);
    setActiveSubSub(null);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "About",
      children: [
        { name: "Our Organization", href: "/components/Organization" },
        { name: "Leaders", href: "/about" },
      ],
    },
    { label: "Media & Investors", href: "/media-investors" },
    {
      label: "What We Serve",
      children: [
        { name: "Industry", href: "/components/IndustriesServed" },
        {
          name: "Services",
          href: "/what-we-serve/services",
          sub: [
            { name: "Data & AI", href: "/dataAi" },
            {
              name: "Application Services",
              href: "/what-we-serve/services/application-services",
              sub: [
                { name: "ERP", href: "/components/ERPService" },
                { name: "Custom Developments", href: "/components/CustomDevelopment" },
              ],
            },
            { name: "Cloud Services", href: "/services/cloud-solution" },
            { name: "Consulting", href: "/components/Consulting" },
            { name: "Cyber Security", href: "/what-we-serve/services/cyber-security" },
            { name: "Quality Assurance", href: "/services/Quality-Assurance" },
          ],
        },
        { name: "Product", href: "/components/ProductDevelopment" },
        { name: "Learning & Development", href: "/services/Learning-Development" },
        { name: "Talent Acquisition", href: "/services/Talent-Acquisition" },
      ],
    },
    {
      label: "Life @NTS",
      children: [
        { name: "Working @ NTS", href: "/life-at-nts/working-at-nts" },
      ],
    },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
  ];

  const DotAccent = () => (
    <span
      style={{
        display: "inline-block",
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #1e80d8, #17b8e0)",
        flexShrink: 0,
      }}
    />
  );

  const ChevronRight = () => (
    <svg style={{ marginLeft: "auto", opacity: 0.45 }} width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
    </svg>
  );

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 shadow-lg"
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
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
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
        .nav-link:hover { color: #ffffff; background: rgba(255,255,255,0.12); }
        .dropdown-btn {
          color: rgba(255,255,255,0.92);
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .dropdown-btn:hover, .dropdown-btn.open {
          color: #ffffff;
          background: rgba(255,255,255,0.12);
        }
        .dropdown-panel { animation: slideDown 0.22s ease forwards; }
        .flyout-panel   { animation: fadeIn 0.15s ease forwards; }
        .d-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          font-size: 0.875rem;
          font-weight: 500;
          color: #334155;
          border-bottom: 1px solid #eff6ff;
          cursor: pointer;
          transition: background 0.15s ease, color 0.15s ease, padding-left 0.15s ease;
          text-decoration: none;
          white-space: nowrap;
        }
        .d-item:last-child { border-bottom: none; }
        .d-item:hover, .d-item.d-active {
          background: linear-gradient(90deg, #dbeafe, #e0f7ff);
          color: #1a6fc4;
          padding-left: 20px;
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
        .mobile-menu { animation: slideDown 0.25s ease; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src={logo} alt="logo" width={150} height={150} style={{ width: "150px", height: "auto" }} />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-0.5">
            {navItems.map((item) => {
              if (!item.children) {
                return (
                  <Link key={item.label} href={item.href!} className="nav-link px-3 py-2 rounded-lg text-sm">
                    {item.label}
                  </Link>
                );
              }

              const isOpen = activeDropdown === item.label;

              return (
                <div key={item.label} style={{ position: "relative" }}>
                  <button
                    onClick={() => {
                      setActiveDropdown(isOpen ? null : item.label);
                      setActiveSubMenu(null);
                      setActiveSubSub(null);
                    }}
                    className={`dropdown-btn px-3 py-2 rounded-lg text-sm flex items-center gap-1 ${isOpen ? "open" : ""}`}
                  >
                    {item.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Level-1 dropdown */}
                  {isOpen && (
                    <div
                      className="dropdown-panel"
                      style={{
                        position: "absolute",
                        left: 0,
                        top: "calc(100% + 8px)",
                        width: 230,
                        borderRadius: 12,
                        zIndex: 50,
                        ...FLYOUT_STYLES,
                      }}
                    >
                      {item.children.map((child, idx) => {
                        const hasSub = "sub" in child && child.sub;
                        const isSubOpen = activeSubMenu === child.name;

                        return (
                          <div key={idx} style={{ position: "relative" }}>
                            {hasSub ? (
                              <div
                                className={`d-item ${isSubOpen ? "d-active" : ""}`}
                                onMouseEnter={() => { setActiveSubMenu(child.name); setActiveSubSub(null); }}
                              >
                                <DotAccent />
                                <span style={{ flex: 1 }}>{child.name}</span>
                                <ChevronRight />

                                {/* Level-2 flyout */}
                                {isSubOpen && (
                                  <div
                                    className="flyout-panel"
                                    style={{
                                      position: "absolute",
                                      left: "100%",
                                      top: 0,
                                      width: 230,
                                      borderRadius: 12,
                                      zIndex: 60,
                                      ...FLYOUT_STYLES,
                                    }}
                                  >
                                    {(child as any).sub.map((subItem: any, sIdx: number) => {
                                      const hasSubSub = "sub" in subItem && subItem.sub;
                                      const isSubSubOpen = activeSubSub === subItem.name;

                                      return (
                                        <div key={sIdx} style={{ position: "relative" }}>
                                          {hasSubSub ? (
                                            <div
                                              className={`d-item ${isSubSubOpen ? "d-active" : ""}`}
                                              onMouseEnter={() => setActiveSubSub(subItem.name)}
                                            >
                                              <DotAccent />
                                              <span style={{ flex: 1 }}>{subItem.name}</span>
                                              <svg style={{ marginLeft: "auto", opacity: 0.45 }} width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>

                                              {/* Level-3 flyout — opens leftward */}
                                              {isSubSubOpen && (
                                                <div
                                                  className="flyout-panel"
                                                  style={{
                                                    position: "absolute",
                                                    right: "100%",
                                                    top: 0,
                                                    width: 220,
                                                    borderRadius: 12,
                                                    zIndex: 70,
                                                    ...FLYOUT_STYLES,
                                                  }}
                                                >
                                                  {subItem.sub.map((ssItem: any, ssIdx: number) => (
                                                    <Link
                                                      key={ssIdx}
                                                      href={ssItem.href}
                                                      className="d-item"
                                                      onClick={closeAll}
                                                    >
                                                      <DotAccent />
                                                      {ssItem.name}
                                                    </Link>
                                                  ))}
                                                </div>
                                              )}
                                            </div>
                                          ) : (
                                            <Link
                                              href={subItem.href}
                                              className="d-item"
                                              onClick={closeAll}
                                            >
                                              <DotAccent />
                                              {subItem.name}
                                            </Link>
                                          )}
                                        </div>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <Link
                                href={child.href}
                                className="d-item"
                                onClick={closeAll}
                                onMouseEnter={() => setActiveSubMenu(null)}
                              >
                                <DotAccent />
                                {child.name}
                              </Link>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            <Link href="/contact" className="cta-btn ml-2 px-5 py-2 rounded-full text-sm">
              Get Started
            </Link>
          </div>

          {/* Mobile Hamburger */}
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
          {navItems.map((item) => {
            if (!item.children) {
              return (
                <Link
                  key={item.label}
                  href={item.href!}
                  onClick={closeAll}
                  className="block px-4 py-3 rounded-lg text-sm font-semibold text-white hover:bg-white/15 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              );
            }

            const isExpanded = mobileExpanded === item.label;

            return (
              <div key={item.label}>
                <button
                  onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold text-white hover:bg-white/15 transition-colors duration-200"
                >
                  {item.label}
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isExpanded && (
                  <div className="mt-1 ml-3 space-y-0.5">
                    {item.children.map((child, idx) => {
                      if ("sub" in child && child.sub) {
                        return (
                          <div key={idx}>
                            <p className="px-4 py-2 text-xs font-bold text-blue-100 uppercase tracking-widest opacity-80">
                              {child.name}
                            </p>
                            <div className="ml-3 space-y-0.5">
                              {(child as any).sub.map((subItem: any, sIdx: number) => {
                                if ("sub" in subItem && subItem.sub) {
                                  return (
                                    <div key={sIdx}>
                                      <p className="px-4 py-1.5 text-xs font-semibold text-blue-100 opacity-70">
                                        ↳ {subItem.name}
                                      </p>
                                      <div className="ml-3">
                                        {subItem.sub.map((ssItem: any, ssIdx: number) => (
                                          <Link
                                            key={ssIdx}
                                            href={ssItem.href}
                                            onClick={closeAll}
                                            className="block px-4 py-2 text-xs text-white/75 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                                          >
                                            — {ssItem.name}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  );
                                }
                                return (
                                  <Link
                                    key={sIdx}
                                    href={subItem.href}
                                    onClick={closeAll}
                                    className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                                  >
                                    {subItem.name}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        );
                      }
                      return (
                        <Link
                          key={idx}
                          href={child.href}
                          onClick={closeAll}
                          className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                        >
                          {child.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          <Link
            href="/contact"
            onClick={closeAll}
            className="block mt-3 text-center cta-btn px-5 py-2.5 rounded-full text-sm"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}