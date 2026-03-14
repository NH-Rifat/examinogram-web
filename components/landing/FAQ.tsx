"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqData } from "@/data/landing";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const { heading, items } = faqData;

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  // FAQ JSON-LD for Google rich results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-20 lg:py-28 bg-[#F8FAFC]"
    >
      {/* FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[#DBEAFE] text-[#2563EB] text-xs font-semibold mb-4">
            FAQ
          </span>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl font-bold text-[#1E293B] leading-tight"
          >
            {heading}
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-3"
          role="list"
        >
          {items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_2px_8px_rgba(0,0,0,0.05)] overflow-hidden"
                role="listitem"
              >
                <button
                  id={`btn-${item.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${item.id}`}
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2563EB]"
                >
                  <span className="text-sm font-semibold text-[#1E293B]">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0"
                    aria-hidden="true"
                  >
                    <ChevronDown className="w-4 h-4 text-[#64748B]" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`panel-${item.id}`}
                      role="region"
                      aria-labelledby={`btn-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-[#64748B] leading-relaxed border-t border-[#F1F5F9] pt-3">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default FAQ;
