"use client";

import { motion } from "framer-motion";
import { BookOpen, FileText, Lightbulb, LucideIcon } from "lucide-react";
import { libraryData } from "@/data/landing";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  FileText,
  Lightbulb,
};

export function Library() {
  const { heading, subheading, resourceCards, tags, footnote } = libraryData;

  return (
    <section
      id="library"
      aria-labelledby="library-heading"
      className="py-20 lg:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[#DBEAFE] text-[#2563EB] text-xs font-semibold mb-4">
            Resource Library
          </span>
          <h2
            id="library-heading"
            className="text-3xl sm:text-4xl font-bold text-[#1E293B] leading-tight mb-4"
          >
            {heading}
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            {subheading}
          </p>
        </motion.div>

        {/* Resource cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10"
        >
          {resourceCards.map((card) => {
            const Icon = iconMap[card.icon];
            const isBlue = card.accent === "blue";
            return (
              <motion.article
                key={card.title}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`bg-[#F8FAFC] rounded-2xl p-6 shadow-[0_2px_16px_rgba(0,0,0,0.07)] border-l-4 ${
                  isBlue ? "border-l-[#2563EB]" : "border-l-[#14B8A6]"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    isBlue ? "bg-[#DBEAFE]" : "bg-[#CCFBF1]"
                  }`}
                  aria-hidden="true"
                >
                  {Icon && (
                    <Icon
                      className={`w-6 h-6 ${isBlue ? "text-[#2563EB]" : "text-[#14B8A6]"}`}
                    />
                  )}
                </div>
                <h3 className="text-base font-semibold text-[#1E293B] mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {card.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Tags + footnote */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {tags.map((tag) => (
              <span
                key={tag.label}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                  tag.color === "teal"
                    ? "bg-[#CCFBF1] text-[#14B8A6]"
                    : "bg-[#DBEAFE] text-[#2563EB]"
                }`}
              >
                {tag.label}
              </span>
            ))}
          </div>
          <p className="text-xs text-[#94A3B8] text-center max-w-md">{footnote}</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Library;
