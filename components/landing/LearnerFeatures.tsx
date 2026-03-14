"use client";

import { motion } from "framer-motion";
import {
  Focus,
  BarChart3,
  Search,
  FolderOpen,
  TrendingUp,
  LucideIcon,
} from "lucide-react";
import { learnerFeaturesData } from "@/data/landing";
import {
  fadeUp,
  staggerContainer,
  slideInLeft,
  viewportOnce,
} from "@/lib/animations";

const iconMap: Record<string, LucideIcon> = {
  Focus,
  BarChart3,
  Search,
  FolderOpen,
  TrendingUp,
};

export function LearnerFeatures() {
  const { heading, features, resultMockup } = learnerFeaturesData;

  return (
    <section
      id="for-learners"
      aria-labelledby="learner-heading"
      className="py-20 lg:py-28 bg-white"
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
          <span className="inline-block px-3 py-1 rounded-full bg-[#CCFBF1] text-[#14B8A6] text-xs font-semibold mb-4">
            For Learners
          </span>
          <h2
            id="learner-heading"
            className="text-3xl sm:text-4xl font-bold text-[#1E293B] leading-tight mb-4 max-w-3xl mx-auto"
          >
            {heading}
          </h2>
        </motion.div>

        {/* Two-column layout — reversed (visual left, features right) */}
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-14 items-center">
          {/* Left — Result screen mockup */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex-shrink-0 w-full max-w-sm mx-auto lg:mx-0"
          >
            <ResultMockup data={resultMockup} />
          </motion.div>

          {/* Right — Feature list */}
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex-1 flex flex-col gap-4"
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
                  className={`bg-[#F8FAFC] rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.06)] border-l-4 ${
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
        </div>
      </div>
    </section>
  );
}

/** Pure CSS result screen mockup */
function ResultMockup({
  data,
}: {
  data: typeof learnerFeaturesData.resultMockup;
}) {
  const { scorePercent, correct, wrong, skipped, rank, totalStudents, examName } = data;

  // SVG circle progress
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scorePercent / 100) * circumference;

  return (
    <div
      aria-label="Exam result screen preview"
      className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(20,184,166,0.12)] border border-[#E2E8F0] overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-[#14B8A6] to-[#0D9488] px-6 py-4 text-center">
        <p className="text-white/80 text-xs font-medium">Exam Complete</p>
        <p className="text-white font-semibold text-sm mt-0.5">{examName}</p>
      </div>

      {/* Score circle */}
      <div className="flex flex-col items-center py-6 px-4">
        <div className="relative w-32 h-32" aria-label={`Score: ${scorePercent}%`}>
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke="#14B8A6"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-[#1E293B]">{scorePercent}%</span>
            <span className="text-[10px] font-medium text-[#14B8A6]">Excellent!</span>
          </div>
        </div>

        {/* Stats row */}
        <div className="w-full grid grid-cols-3 gap-2 mt-5">
          <div className="flex flex-col items-center bg-[#F0FDF4] rounded-xl p-2">
            <span className="text-lg font-bold text-[#10B981]">{correct}</span>
            <span className="text-[9px] text-[#64748B] font-medium">Correct</span>
          </div>
          <div className="flex flex-col items-center bg-[#FFF7ED] rounded-xl p-2">
            <span className="text-lg font-bold text-[#F97316]">{wrong}</span>
            <span className="text-[9px] text-[#64748B] font-medium">Wrong</span>
          </div>
          <div className="flex flex-col items-center bg-[#F8FAFC] rounded-xl p-2">
            <span className="text-lg font-bold text-[#94A3B8]">{skipped}</span>
            <span className="text-[9px] text-[#64748B] font-medium">Skipped</span>
          </div>
        </div>

        {/* Rank */}
        <div className="w-full mt-4 bg-[#DBEAFE] rounded-xl px-4 py-2.5 flex items-center justify-between">
          <span className="text-xs font-medium text-[#2563EB]">Your Rank</span>
          <span className="text-sm font-bold text-[#1E40AF]">
            #{rank} out of {totalStudents}
          </span>
        </div>

        {/* Action buttons */}
        <div className="w-full flex gap-2 mt-4">
          <button
            aria-label="Review answers"
            className="flex-1 py-2.5 rounded-xl bg-[#14B8A6] text-white text-xs font-semibold hover:bg-[#0D9488] transition-colors"
          >
            Review Answers
          </button>
          <button
            aria-label="View scoreboard"
            className="flex-1 py-2.5 rounded-xl border border-[#2563EB] text-[#2563EB] text-xs font-semibold hover:bg-[#EFF6FF] transition-colors"
          >
            Scoreboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default LearnerFeatures;
