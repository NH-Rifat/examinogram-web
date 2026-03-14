"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pricingData } from "@/data/landing";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const { heading, currencySymbol, plans, yearlyDiscount } = pricingData;

  const getPrice = (monthly: number | null) => {
    if (monthly === null) return null;
    return isYearly ? monthly * yearlyDiscount.multiplier : monthly;
  };

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="py-20 lg:py-28 bg-[#F8FAFC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[#DBEAFE] text-[#2563EB] text-xs font-semibold mb-4">
            Pricing
          </span>
          <h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl font-bold text-[#1E293B] leading-tight mb-6"
          >
            {heading}
          </h2>

          {/* Monthly / Yearly toggle */}
          <div
            className="inline-flex items-center gap-3 bg-white border border-[#E2E8F0] rounded-xl p-1"
            role="group"
            aria-label="Billing cycle"
          >
            <button
              onClick={() => setIsYearly(false)}
              aria-pressed={!isYearly}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                !isYearly
                  ? "bg-[#2563EB] text-white shadow-sm"
                  : "text-[#64748B] hover:text-[#1E293B]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              aria-pressed={isYearly}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                isYearly
                  ? "bg-[#2563EB] text-white shadow-sm"
                  : "text-[#64748B] hover:text-[#1E293B]"
              }`}
            >
              Yearly
              <span className="ml-2 text-[10px] font-bold text-[#14B8A6]">
                {yearlyDiscount.label}
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start"
        >
          {plans.map((plan) => {
            const displayPrice = getPrice(plan.monthlyPrice);
            const isFree = plan.monthlyPrice === 0;

            return (
              <motion.article
                key={plan.id}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`relative bg-white rounded-2xl p-6 shadow-[0_2px_16px_rgba(0,0,0,0.07)] flex flex-col ${
                  plan.highlighted
                    ? "border-2 border-[#2563EB] shadow-[0_4px_24px_rgba(37,99,235,0.18)] scale-105 origin-top"
                    : "border border-[#E2E8F0]"
                }`}
              >
                {/* Badge */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-[#1E293B]">{plan.name}</h3>
                  <span
                    className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                      plan.badgeColor === "teal"
                        ? "bg-[#CCFBF1] text-[#14B8A6]"
                        : plan.badgeColor === "blue"
                        ? "bg-[#DBEAFE] text-[#2563EB]"
                        : "bg-[#F1F5F9] text-[#64748B]"
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>

                {/* Price */}
                <div className="mb-6">
                  {plan.customPrice ? (
                    <span className="text-4xl font-bold text-[#1E293B]">
                      {plan.customPrice}
                    </span>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-[#1E293B]">
                        {isFree ? "Free" : `${currencySymbol}${displayPrice?.toLocaleString()}`}
                      </span>
                      {!isFree && (
                        <span className="text-sm text-[#64748B]">
                          / {isYearly ? "year" : "month"}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-2.5 mb-8 flex-1" role="list">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        className="w-4 h-4 text-[#14B8A6] flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-[#64748B]">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  aria-label={plan.cta}
                  className={`w-full py-3 rounded-xl text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                    plan.ctaStyle === "primary"
                      ? "bg-[#2563EB] text-white hover:bg-[#1E40AF] shadow-[0_4px_14px_rgba(37,99,235,0.3)]"
                      : "border-2 border-[#2563EB] text-[#2563EB] bg-transparent hover:bg-[#EFF6FF]"
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Pricing;
