"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Menu, X } from "lucide-react";
import { navbarData } from "@/data/landing";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-[#E2E8F0]"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
      >
        {/* Logo */}
        <a
          href="#"
          aria-label="Examinogram home"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-lg"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#2563EB]">
            <GraduationCap className="w-5 h-5 text-white" aria-hidden="true" />
          </span>
          <span className="text-lg font-bold text-[#1E293B] tracking-tight">
            {navbarData.brand.name}
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-6" role="list">
          {navbarData.links.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNavClick(link.href)}
                aria-label={`Navigate to ${link.label}`}
                className="text-sm font-medium text-[#64748B] hover:text-[#2563EB] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded px-1"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <motion.button
            onClick={() => handleNavClick(navbarData.cta.href)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            aria-label={navbarData.cta.label}
            className="px-5 py-2 rounded-xl bg-[#2563EB] text-white text-sm font-semibold shadow-[0_4px_14px_rgba(37,99,235,0.35)] hover:bg-[#1E40AF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
          >
            {navbarData.cta.label}
          </motion.button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-[#1E293B] hover:bg-[#F1F5F9] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? (
            <X className="w-5 h-5" aria-hidden="true" />
          ) : (
            <Menu className="w-5 h-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-[#E2E8F0] shadow-lg px-4 pb-6 pt-2"
          >
            <ul className="flex flex-col gap-1" role="list">
              {navbarData.links.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    aria-label={`Navigate to ${link.label}`}
                    className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-[#1E293B] hover:bg-[#F1F5F9] hover:text-[#2563EB] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => handleNavClick(navbarData.cta.href)}
              aria-label={navbarData.cta.label}
              className="mt-4 w-full py-3 rounded-xl bg-[#2563EB] text-white text-sm font-semibold shadow-[0_4px_14px_rgba(37,99,235,0.35)] hover:bg-[#1E40AF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
            >
              {navbarData.cta.label}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
