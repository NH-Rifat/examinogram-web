"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { socialProofData } from "@/data/landing";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

function useCounter(target: number, isDecimal: boolean, triggered: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [triggered, target, isDecimal]);

  return count;
}

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  isDecimal?: boolean;
  triggered: boolean;
}

function StatItem({ value, suffix, label, isDecimal = false, triggered }: StatItemProps) {
  const count = useCounter(value, isDecimal, triggered);

  const display =
    value >= 1000
      ? `${(count / 1000).toFixed(count >= value ? (value % 1000 === 0 ? 0 : 1) : 1)}k`
      : isDecimal
      ? count.toFixed(1)
      : count.toString();

  return (
    <motion.div
      variants={fadeUp}
      className="flex flex-col items-center px-6 py-4 flex-1 min-w-0"
    >
      <span
        className="text-3xl sm:text-4xl font-bold text-[#2563EB] tabular-nums"
        aria-label={`${value}${suffix}`}
      >
        {display}
        {suffix}
      </span>
      <span className="mt-1 text-sm text-[#64748B] text-center font-medium">
        {label}
      </span>
    </motion.div>
  );
}

export function SocialProof() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="trust"
      ref={ref}
      aria-label="Platform statistics"
      className="bg-white border-y border-[#E2E8F0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col sm:flex-row items-center justify-around gap-4 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#E2E8F0]"
        >
          {socialProofData.stats.map((stat) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              isDecimal={stat.isDecimal}
              triggered={inView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default SocialProof;
