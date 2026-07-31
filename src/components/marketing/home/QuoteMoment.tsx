"use client";

import { testimonials } from "@/modules/content/site-content";
import { motion } from "framer-motion";

export function QuoteMoment() {
  const quote = testimonials[0];
  if (!quote) return null;

  return (
    <section className="relative overflow-hidden">
      <div className="chapter-glow-center pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="mx-auto max-w-[1400px] px-6 pt-14 pb-10 md:px-10 md:pt-20 md:pb-14">
        <motion.blockquote
          className="mx-auto max-w-5xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <p className="font-display text-[clamp(1.5rem,3.5vw,2.75rem)] font-medium leading-[1.25] tracking-[-0.02em] text-foreground/90">
            &ldquo;{quote.quote}&rdquo;
          </p>
          <footer className="mt-10 md:mt-12">
            <cite className="not-italic">
              <span className="block text-sm text-muted-foreground">{quote.author}</span>
              <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                {quote.company}
              </span>
            </cite>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
