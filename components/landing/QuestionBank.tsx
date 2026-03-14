"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, ChevronDown, Folder, FileText } from "lucide-react";
import { questionBankData } from "@/data/landing";
import { fadeUp, staggerContainer, slideInRight, viewportOnce } from "@/lib/animations";

export function QuestionBank() {
  const { heading, body, highlights, folderTree } = questionBankData;

  return (
    <section
      id="question-bank"
      aria-labelledby="qb-heading"
      className="py-20 lg:py-28 bg-[#F8FAFC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {/* Left — Text + highlights */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex-1"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block px-3 py-1 rounded-full bg-[#CCFBF1] text-[#14B8A6] text-xs font-semibold mb-4"
            >
              Smart Question Bank
            </motion.span>
            <motion.h2
              id="qb-heading"
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-bold text-[#1E293B] leading-tight mb-5"
            >
              {heading}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-[#64748B] leading-relaxed mb-8"
            >
              {body}
            </motion.p>

            <motion.ul
              variants={staggerContainer}
              className="flex flex-col gap-3"
              role="list"
            >
              {highlights.map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    className="w-5 h-5 text-[#14B8A6] flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-[#1E293B] font-medium">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right — Folder tree UI */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex-shrink-0 w-full lg:w-96"
          >
            <div
              aria-label="Question bank folder structure"
              className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-[#E2E8F0] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center gap-3 px-5 py-4 bg-[#F8FAFC] border-b border-[#E2E8F0]">
                <div className="w-2 h-2 rounded-full bg-[#14B8A6]" aria-hidden="true" />
                <span className="text-sm font-semibold text-[#1E293B]">
                  My Question Bank
                </span>
                <span className="ml-auto text-xs text-[#64748B]">
                  28 questions
                </span>
              </div>

              {/* Folder tree */}
              <div className="p-4 flex flex-col gap-1">
                {folderTree.map((subject) => (
                  <div key={subject.subject} className="rounded-xl overflow-hidden">
                    {/* Subject row */}
                    <div
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-xl cursor-default select-none ${
                        subject.expanded
                          ? "bg-[#EFF6FF] text-[#2563EB]"
                          : "text-[#64748B] hover:bg-[#F8FAFC]"
                      }`}
                    >
                      {subject.expanded ? (
                        <ChevronDown className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                      ) : (
                        <ChevronRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                      )}
                      <Folder
                        className={`w-4 h-4 flex-shrink-0 ${
                          subject.expanded ? "fill-[#DBEAFE] text-[#2563EB]" : "text-[#94A3B8]"
                        }`}
                        aria-hidden="true"
                      />
                      <span className="text-sm font-semibold">{subject.subject}</span>
                    </div>

                    {/* Chapters */}
                    {subject.expanded &&
                      subject.chapters.map((chapter) => (
                        <div key={chapter.name} className="ml-6 mt-1">
                          <div
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-default ${
                              chapter.expanded
                                ? "bg-[#F0FDF4] text-[#14B8A6]"
                                : "text-[#64748B]"
                            }`}
                          >
                            {chapter.topics.length > 0 ? (
                              chapter.expanded ? (
                                <ChevronDown className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                              ) : (
                                <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                              )
                            ) : (
                              <span className="w-3.5" />
                            )}
                            <Folder
                              className={`w-3.5 h-3.5 flex-shrink-0 ${
                                chapter.expanded ? "fill-[#CCFBF1] text-[#14B8A6]" : "text-[#94A3B8]"
                              }`}
                              aria-hidden="true"
                            />
                            <span className="text-xs font-medium">{chapter.name}</span>
                          </div>

                          {/* Topics */}
                          {chapter.expanded &&
                            chapter.topics.map((topic) => (
                              <div
                                key={topic.name}
                                className="ml-6 mt-0.5 flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#F8FAFC] cursor-default"
                              >
                                <FileText
                                  className="w-3.5 h-3.5 flex-shrink-0 text-[#94A3B8]"
                                  aria-hidden="true"
                                />
                                <span className="text-xs text-[#1E293B] flex-1">
                                  {topic.name}
                                </span>
                                <span className="text-[10px] font-semibold text-white bg-[#2563EB] px-1.5 py-0.5 rounded-full">
                                  {topic.count}
                                </span>
                              </div>
                            ))}
                        </div>
                      ))}
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-5 py-3 border-t border-[#E2E8F0] bg-[#F8FAFC] flex justify-between items-center">
                <span className="text-xs text-[#64748B]">3 subjects</span>
                <button
                  aria-label="Add question to paper"
                  className="text-xs font-semibold text-[#2563EB] hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2563EB] rounded"
                >
                  + Add to Paper
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default QuestionBank;
