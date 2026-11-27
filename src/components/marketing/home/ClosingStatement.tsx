"use client";

import { BookingButton } from "@/components/booking/BookingEmbed";
import { siteConfig } from "@/lib/site-config";
import { whoYouWorkWith } from "@/modules/content/founders-content";
import { motion } from "framer-motion";

export function ClosingStatement() {
  return (
    <section className="relative overflow-hidden">
      <div className="chapter-glow-bottom pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1400px] px-6 pt-20 pb-8 md:px-10 md:pt-28 md:pb-10">
        <motion.h2
          className="max-w-4xl font-display text-[clamp(2.25rem,6vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.04em] text-foreground"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Tell us the question your current reports cannot answer.
        </motion.h2>

        <motion.p
          className="mt-6 max-w-xl text-sm leading-[1.85] text-muted-foreground md:text-base"
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {whoYouWorkWith.copy}
        </motion.p>

        <motion.div
          className="mt-10 md:mt-12"
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <BookingButton size="lg" label={siteConfig.bookingCtaLabel} />
        </motion.div>
      </div>
    </section>
  );
}
