"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, CheckCircle2 } from "lucide-react";
import { finalCtaData } from "@/data/landing";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const { heading, subtext, buttons, waitlist } = finalCtaData;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section
      id="download"
      aria-labelledby="final-cta-heading"
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-[#1E40AF] via-[#2563EB] to-[#1D4ED8] animate-pulse"
        style={{ animationDuration: "4s" }}
      />
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-64 h-64 bg-[#14B8A6]/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold mb-6"
          >
            🚀 Coming Soon
          </motion.span>

          <motion.h2
            id="final-cta-heading"
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
          >
            {heading}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-white/80 leading-relaxed max-w-2xl mb-10"
          >
            {subtext}
          </motion.p>

          {/* Download buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={buttons.android.href}
              aria-label={buttons.android.label}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-white/50 text-white font-semibold text-sm hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Smartphone className="w-5 h-5" aria-hidden="true" />
              {buttons.android.label}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={buttons.ios.href}
              aria-label={buttons.ios.label}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#2563EB] font-semibold text-sm hover:bg-blue-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Smartphone className="w-5 h-5" aria-hidden="true" />
              {buttons.ios.label}
            </motion.a>
          </motion.div>

          {/* Waitlist form */}
          <motion.div variants={fadeUp} className="w-full max-w-md">
            <p className="text-white/70 text-sm font-medium mb-4">
              {waitlist.label}
            </p>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3"
                  noValidate
                >
                  <div className="flex-1">
                    <label htmlFor="waitlist-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="waitlist-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      placeholder={waitlist.placeholder}
                      required
                      aria-required="true"
                      aria-describedby={error ? "email-error" : undefined}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-white focus:bg-white/15 transition-colors"
                    />
                    {error && (
                      <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-300">
                        {error}
                      </p>
                    )}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    aria-label={waitlist.ctaLabel}
                    className="px-6 py-3 rounded-xl bg-[#14B8A6] text-white font-semibold text-sm hover:bg-[#0D9488] transition-colors shadow-[0_4px_14px_rgba(20,184,166,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap"
                  >
                    {waitlist.ctaLabel}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center gap-3 py-3.5 px-6 rounded-xl bg-[#14B8A6]/20 border border-[#14B8A6]/40"
                  role="status"
                  aria-live="polite"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#14B8A6]" aria-hidden="true" />
                  <span className="text-white font-semibold text-sm">
                    {waitlist.successMessage}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default FinalCTA;
