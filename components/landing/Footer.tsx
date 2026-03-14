"use client";

import { motion } from "framer-motion";
import { GraduationCap, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { footerData } from "@/data/landing";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const socialIconMap = {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
};

export function Footer() {
  const { brand, columns, bottomBar } = footerData;

  return (
    <footer
      aria-label="Site footer"
      className="bg-[#1E293B] text-[#94A3B8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12"
        >
          {/* Col 1 — Brand */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <a
              href="#"
              aria-label="Examinogram home"
              className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-lg w-fit"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#2563EB]">
                <GraduationCap className="w-5 h-5 text-white" aria-hidden="true" />
              </span>
              <span className="text-lg font-bold text-white">{brand.name}</span>
            </a>
            <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wide">
              {brand.tagline}
            </p>
            <p className="text-sm leading-relaxed">{brand.description}</p>
            {/* Socials */}
            <div className="flex gap-3 mt-2" aria-label="Social media links">
              {brand.socials.map((social) => {
                const Icon = socialIconMap[social.icon as keyof typeof socialIconMap];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 rounded-lg bg-[#334155] flex items-center justify-center text-[#94A3B8] hover:bg-[#2563EB] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
                  >
                    {Icon && <Icon className="w-4 h-4" aria-hidden="true" />}
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Cols 2–4 — Link columns */}
          {columns.map((col) => (
            <motion.nav
              key={col.heading}
              variants={fadeUp}
              aria-label={col.heading}
            >
              <h3 className="text-white font-semibold text-sm mb-4">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2.5" role="list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#94A3B8] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3B82F6] rounded"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-[#334155] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#64748B]">
          <p>{bottomBar.copyright}</p>
          <p>{bottomBar.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
