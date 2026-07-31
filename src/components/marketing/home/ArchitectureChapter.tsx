"use client";

import { IntelligenceSystem } from "@/components/marketing/home/IntelligenceSystem";
import { motion } from "framer-motion";

export function ArchitectureChapter() {
  return (
    <section id="architecture" className="relative overflow-hidden">
      <div className="chapter-glow-center pointer-events-none absolute inset-0 min-h-full" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1400px] px-6 pt-14 pb-10 md:px-10 md:pt-20 md:pb-14">
        <motion.p
          className="text-center font-mono text-[9px] uppercase tracking-[0.35em] text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          The decision system
        </motion.p>

        <motion.h2
          className="mx-auto mt-6 max-w-3xl text-center font-display text-[clamp(1.75rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-foreground"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          Fragmented systems converge into one intelligence layer - then flow outward to the people who decide.
        </motion.h2>

        <motion.div
          className="mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.4 }}
        >
          <IntelligenceSystem />
        </motion.div>

        <motion.p
          className="mx-auto mt-10 max-w-lg text-center text-sm leading-[1.85] text-muted md:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Noeris connects commerce, ERP, CRM, finance, and marketing into a governed analytics platform - 
          so every team and every executive works from the same truth.
        </motion.p>
      </div>
    </section>
  );
}
