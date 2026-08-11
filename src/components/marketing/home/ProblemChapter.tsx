"use client";

import { problems } from "@/modules/content/site-content";
import { motion, useReducedMotion } from "framer-motion";

export function ProblemChapter() {
  const reduced = useReducedMotion();

  return (
    <section className="relative">
      <div className="chapter-glow-left pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1400px] px-6 pt-14 pb-10 md:px-10 md:pt-20 md:pb-14">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: reduced ? 0 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-display text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.03em] text-foreground">
              You have the data.
            </p>
            <p className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.03em] text-muted">
              But good data is only useful when you can act on it.
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-5 lg:flex lg:items-end lg:pb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="text-base leading-[1.85] text-muted-foreground md:text-lg">
              Most companies already own all the data they need. It lives in dozens of systems -
              none of them speaking the same language when leadership needs an answer.
            </p>
          </motion.div>
        </div>

        <div className="mt-20 md:mt-24">
          {problems.map((problem, i) => (
            <motion.article
              key={problem.title}
              className="grid gap-6 py-6 md:grid-cols-[4rem_1fr] md:gap-10 md:py-8"
              initial={{ opacity: 0, y: reduced ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: i * 0.08 }}
            >
              <span className="font-display text-5xl font-medium leading-none tracking-[-0.04em] text-muted/30 md:text-6xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-medium text-foreground md:text-xl">{problem.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-[1.85] text-muted md:text-base">
                  {problem.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
