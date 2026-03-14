"use client";

import { motion } from "framer-motion";
import { FilePlus2, Share2, ClipboardList, Trophy, LucideIcon } from "lucide-react";
import { howItWorksData } from "@/data/landing";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const iconMap: Record<string, LucideIcon> = {
  FilePlus2,
  Share2,
  ClipboardList,
  Trophy,
};

export function HowItWorks() {
  const { heading, steps } = howItWorksData;

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="py-20 lg:py-28 bg-[#EFF6FF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[#DBEAFE] text-[#2563EB] text-xs font-semibold mb-4">
            How It Works
          </span>
          <h2
            id="how-heading"
            className="text-3xl sm:text-4xl font-bold text-[#1E293B] leading-tight"
          >
            {heading}
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Dashed connecting line — desktop only */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0 border-t-2 border-dashed border-[#93C5FD] z-0"
          />

          <motion.ol
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-4"
            role="list"
          >
            {steps.map((step) => {
              const Icon = iconMap[step.icon];
              return (
                <motion.li
                  key={step.number}
                  variants={fadeUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="flex-1 flex flex-col items-center text-center bg-white rounded-2xl p-6 shadow-[0_2px_16px_rgba(0,0,0,0.07)]"
                >
                  {/* Numbered circle with icon */}
                  <div className="relative mb-5">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, #2563EB, #3B82F6)",
                        boxShadow: "0 4px 16px rgba(37,99,235,0.3)",
                      }}
                      aria-hidden="true"
                    >
                      {Icon && <Icon className="w-6 h-6 text-white" />}
                    </div>
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full border-2 border-[#2563EB] text-[#2563EB] text-[10px] font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-[#1E293B] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {step.description}
                  </p>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
