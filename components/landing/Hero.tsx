"use client";

import { motion } from "framer-motion";
import { heroData } from "@/data/landing";
import { heroText, slideInRight } from "@/lib/animations";

export function Hero() {
  const { headline, subheading, cta, socialProofText, mockup } = heroData;

  const handleScroll = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 20%, #EFF6FF 0%, #F8FAFC 70%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="absolute top-20 right-0 w-96 h-96 bg-[#DBEAFE] rounded-full opacity-30 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-20 left-0 w-64 h-64 bg-[#CCFBF1] rounded-full opacity-20 blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left — Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              custom={0}
              variants={heroText}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DBEAFE] text-[#2563EB] text-xs font-semibold tracking-wide mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
              Launching Soon on Android & iOS
            </motion.div>

            <motion.h1
              id="hero-heading"
              custom={1}
              variants={heroText}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1E293B] leading-[1.15] tracking-tight mb-6"
            >
              {headline}
            </motion.h1>

            <motion.p
              custom={2}
              variants={heroText}
              initial="hidden"
              animate="visible"
              className="text-lg text-[#64748B] leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              {subheading}
            </motion.p>

            <motion.div
              custom={3}
              variants={heroText}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleScroll(cta.primary.href)}
                aria-label={cta.primary.label}
                className="px-8 py-3.5 rounded-xl bg-[#2563EB] text-white font-semibold text-base shadow-[0_4px_14px_rgba(37,99,235,0.35)] hover:bg-[#1E40AF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
              >
                {cta.primary.label}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleScroll(cta.secondary.href)}
                aria-label={cta.secondary.label}
                className="px-8 py-3.5 rounded-xl border-2 border-[#2563EB] text-[#2563EB] font-semibold text-base bg-transparent hover:bg-[#EFF6FF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
              >
                {cta.secondary.label}
              </motion.button>
            </motion.div>

            <motion.p
              custom={4}
              variants={heroText}
              initial="hidden"
              animate="visible"
              className="text-sm text-[#94A3B8] flex items-center gap-2 justify-center lg:justify-start"
            >
              <span className="flex gap-0.5" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </span>
              {socialProofText}
            </motion.p>
          </div>

          {/* Right — Phone Mockup */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="flex-shrink-0 w-full max-w-sm lg:max-w-[340px]"
          >
            <PhoneMockup mockup={mockup} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/** Pure CSS phone mockup — no image dependency */
function PhoneMockup({ mockup }: { mockup: typeof heroData.mockup }) {
  return (
    <div
      aria-label="Exam screen preview"
      className="relative mx-auto w-64 sm:w-72"
    >
      {/* Phone frame */}
      <div className="relative rounded-[2.5rem] bg-[#1E293B] p-3 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#1E293B] rounded-full z-10" />

        {/* Screen */}
        <div className="rounded-[2rem] bg-[#F8FAFC] overflow-hidden">
          {/* Status bar */}
          <div className="flex justify-between items-center px-4 pt-8 pb-2 bg-white border-b border-[#E2E8F0]">
            <span className="text-xs font-semibold text-[#2563EB]">
              {mockup.questionNumber}
            </span>
            <span className="text-xs font-bold text-[#2563EB]">
              ⏱ {mockup.timerDisplay}
            </span>
          </div>

          {/* Progress bar */}
          <div className="h-1.5 bg-[#E2E8F0] mx-4 mt-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#2563EB] rounded-full transition-all"
              style={{ width: `${mockup.progressPercent}%` }}
            />
          </div>

          {/* Question */}
          <div className="px-4 py-4">
            <p className="text-[10px] font-semibold text-[#2563EB] mb-2 uppercase tracking-wide">
              Question 12
            </p>
            <p className="text-[11px] font-medium text-[#1E293B] leading-relaxed mb-4">
              {mockup.questionText}
            </p>

            {/* Options */}
            <ul className="flex flex-col gap-2" role="list">
              {mockup.options.map((opt) => (
                <li
                  key={opt.id}
                  className={`flex items-start gap-2 px-3 py-2 rounded-xl text-[10px] font-medium border transition-colors ${
                    opt.highlighted
                      ? "bg-[#DBEAFE] border-[#2563EB] text-[#1E293B]"
                      : "bg-white border-[#E2E8F0] text-[#64748B]"
                  }`}
                >
                  <span
                    className={`flex-shrink-0 w-4 h-4 rounded-full border flex items-center justify-center text-[8px] font-bold ${
                      opt.highlighted
                        ? "border-[#2563EB] bg-[#2563EB] text-white"
                        : "border-[#CBD5E1] text-[#94A3B8]"
                    }`}
                  >
                    {opt.id}
                  </span>
                  {opt.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom bar */}
          <div className="flex justify-between items-center px-4 py-3 bg-white border-t border-[#E2E8F0]">
            <button
              aria-label="Previous question"
              className="text-[10px] font-medium text-[#64748B] px-3 py-1.5 rounded-lg border border-[#E2E8F0] hover:bg-[#F1F5F9]"
            >
              ← Back
            </button>
            <button
              aria-label="Next question"
              className="text-[10px] font-semibold text-white bg-[#2563EB] px-3 py-1.5 rounded-lg hover:bg-[#1E40AF]"
            >
              Next →
            </button>
          </div>
        </div>
      </div>

      {/* Decorative glow under phone */}
      <div
        aria-hidden="true"
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-8 bg-[#2563EB] opacity-20 blur-2xl rounded-full"
      />
    </div>
  );
}

export default Hero;
