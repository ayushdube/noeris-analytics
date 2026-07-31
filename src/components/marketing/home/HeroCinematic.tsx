"use client";

import Link from "next/link";

import { BookingButton } from "@/components/booking/BookingEmbed";
import { SignalField } from "@/components/marketing/home/SignalField";
import { TechPartners } from "@/components/marketing/home/TechPartners";
import { heroCredibility } from "@/modules/content/founders-content";
import { siteConfig } from "@/lib/site-config";
import { motion, useReducedMotion } from "framer-motion";

export function HeroCinematic() {
  const reduced = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <div className="chapter-glow-top pointer-events-none absolute inset-0" aria-hidden="true" />

      <SignalField className="pointer-events-none absolute inset-0 h-full w-full opacity-80 md:left-[20%] md:w-[80%]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col px-6 pt-28 md:px-10 md:pt-32">
        <motion.p
          className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          Noeris Analytics
        </motion.p>

        <div className="flex flex-1 flex-col justify-center py-10 md:py-14">
          <div className="max-w-[min(100%,52rem)] md:max-w-[42rem]">
            <motion.h1
              className="font-display text-[clamp(2.5rem,8vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.045em] text-foreground"
              initial={{ opacity: 0, y: reduced ? 0 : 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {siteConfig.tagline}
            </motion.h1>

            <motion.p
              className="mt-10 max-w-md text-base leading-[1.8] text-muted-foreground md:mt-14 md:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.9 }}
            >
              {siteConfig.description}
            </motion.p>

            <motion.p
              className="mt-8 max-w-md text-sm leading-[1.75] text-muted md:mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.05 }}
            >
              {heroCredibility}
            </motion.p>

            <motion.div
              className="mt-12 md:mt-14"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <BookingButton size="lg" />
            </motion.div>
          </div>
        </div>

        <motion.div
          className="hidden justify-end pb-6 md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
        >
          <Link
            href="/case-studies"
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted transition-colors duration-700 hover:text-accent-foreground"
          >
            Scroll to explore
          </Link>
        </motion.div>
      </div>

      <TechPartners />
    </section>
  );
}
