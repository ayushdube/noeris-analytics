"use client";

import { processPhases } from "@/modules/content/founders-content";
import { motion } from "framer-motion";

export function ProcessNarrative() {
  return (
    <section id="process" className="relative">
      <div className="mx-auto max-w-[1400px] px-4 pt-14 pb-10 sm:px-6 md:px-10 md:pt-20 md:pb-14">
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
            Discover, design, build, validate, operate.
          </motion.h2>
        </div>

        <div className="relative mt-10 w-full min-w-0 max-w-3xl md:mt-12">
          {processPhases.map((step, i) => (
            <motion.div
              key={step.phase}
              className="flex gap-4 md:gap-8"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: i * 0.06 }}
            >
              <div className="relative w-10 shrink-0 self-stretch md:w-14">
                {i < processPhases.length - 1 && (
                  <div
                    className="absolute bottom-0 left-1/2 top-10 w-px -translate-x-1/2 bg-gradient-to-b from-white/10 to-white/5 md:top-14"
                    aria-hidden="true"
                  />
                )}
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] bg-background font-display text-lg font-medium leading-none tracking-[-0.04em] text-accent md:h-14 md:w-14 md:text-2xl">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div
                className={`min-w-0 flex-1 pt-1 md:pt-2 ${
                  i < processPhases.length - 1 ? "pb-[10px] md:pb-8" : ""
                }`}
              >
                <h3 className="font-display text-xl font-medium tracking-[-0.02em] text-foreground sm:text-2xl md:text-3xl">
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
