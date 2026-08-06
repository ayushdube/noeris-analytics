"use client";

import { processPhases } from "@/modules/content/founders-content";
import { motion } from "framer-motion";

export function ProcessNarrative() {
  return (
    <section id="process" className="relative">
      <div className="mx-auto max-w-[1400px] px-6 pt-14 pb-10 md:px-10 md:pt-20 md:pb-14">
        <div className="max-w-2xl">
          <motion.p
            className="text-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            How we work
          </motion.p>

          <motion.h2
            className="mt-6 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.03em] text-foreground"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Five phases from discovery to optimization.
          </motion.h2>
        </div>

        <div className="relative mt-10 max-w-3xl md:mt-12">
          <div
            className="absolute left-[1.125rem] top-4 bottom-4 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent md:left-[1.375rem]"
            aria-hidden="true"
          />

          {processPhases.map((step, i) => (
            <motion.div
              key={step.phase}
              className="relative grid gap-4 pb-10 last:pb-0 md:grid-cols-[3.5rem_1fr] md:gap-8 md:pb-12"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: i * 0.06 }}
            >
              <span className="font-display text-3xl font-medium leading-none tracking-[-0.04em] text-accent md:text-4xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-2xl font-medium tracking-[-0.02em] text-foreground md:text-3xl">
                  {step.phase}
                </h3>
                <p className="mt-4 text-sm leading-[1.85] text-muted-foreground md:text-[15px]">
                  {step.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
