"use client";

import { motion } from "framer-motion";
import {
  FileEdit,
  BookMarked,
  QrCode,
  CalendarClock,
  Users,
  BarChart2,
  LucideIcon,
} from "lucide-react";
import { mentorFeaturesData } from "@/data/landing";
import {
  fadeUp,
  staggerContainer,
  slideInRight,
  viewportOnce,
} from "@/lib/animations";

const iconMap: Record<string, LucideIcon> = {
  FileEdit,
  BookMarked,
  QrCode,
  CalendarClock,
  Users,
  BarChart2,
};

export function MentorFeatures() {
  const { heading, subheading, features, highlightCard } = mentorFeaturesData;

  return (
    <section
      id="for-mentors"
      aria-labelledby="mentor-heading"
      className="py-20 lg:py-28 bg-[#F8FAFC]"
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
            For Mentors
          </span>
          <h2
            id="mentor-heading"
            className="text-3xl sm:text-4xl font-bold text-[#1E293B] leading-tight mb-4"
          >
            {heading}
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            {subheading}
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
          {/* Left — Feature list */}
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4"
            role="list"
          >
            {features.map((feature) => {
              const Icon = iconMap[feature.icon];
              const isBlue = feature.accent === "blue";
              return (
                <motion.li
                  key={feature.title}
                  variants={fadeUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`bg-white rounded-2xl p-5 shadow-[0_2px_16px_rgba(0,0,0,0.07)] border-l-4 ${
                    isBlue ? "border-l-[#2563EB]" : "border-l-[#14B8A6]"
                  } flex gap-4`}
                >
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
                      isBlue ? "bg-[#DBEAFE]" : "bg-[#CCFBF1]"
                    }`}
                    aria-hidden="true"
                  >
                    {Icon && (
                      <Icon
                        className={`w-5 h-5 ${
                          isBlue ? "text-[#2563EB]" : "text-[#14B8A6]"
                        }`}
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#1E293B] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>

          {/* Right — Highlight card (fake question paper form) */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex-shrink-0 w-full lg:w-96"
          >
            <div
              aria-label="Question paper settings preview"
              className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(37,99,235,0.12)] border border-[#E2E8F0] overflow-hidden"
            >
              {/* Card header */}
              <div className="bg-gradient-to-r from-[#2563EB] to-[#3B82F6] px-6 py-4">
                <p className="text-white text-xs font-semibold uppercase tracking-wide opacity-75">
                  Step 1 of 4
                </p>
                <h3 className="text-white text-lg font-bold mt-0.5">
                  {highlightCard.title}
                </h3>
              </div>

              {/* Form fields */}
              <div className="px-6 py-5 flex flex-col gap-4">
                {highlightCard.fields.map((field) => (
                  <div key={field.label}>
                    <label className="block text-xs font-semibold text-[#64748B] mb-1">
                      {field.label}
                    </label>
                    <div className="w-full px-3 py-2.5 rounded-xl bg-[#F1F5F9] text-sm text-[#94A3B8] border border-[#E2E8F0]">
                      {field.placeholder}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="px-6 pb-6">
                <button
                  className="w-full py-3 rounded-xl bg-[#2563EB] text-white text-sm font-semibold hover:bg-[#1E40AF] transition-colors shadow-[0_4px_14px_rgba(37,99,235,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                  aria-label="Create question paper"
                >
                  {highlightCard.ctaLabel}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default MentorFeatures;
