"use client";

import Link from "next/link";

import { serviceLines } from "@/modules/content/positioning-content";
import { motion } from "framer-motion";

export function ServicesChapter() {
  return (
    <section id="services" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-[1400px] lg:grid-cols-12">
        <div className="chapter-glow-left px-6 pt-14 pb-8 md:px-10 md:pt-20 md:pb-10 lg:col-span-4">
          <motion.p
            className="text-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Capabilities
          </motion.p>
          <motion.h2
            className="mt-6 font-display text-4xl font-medium leading-[1] tracking-[-0.03em] text-foreground md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            We do not sell dashboards.
          </motion.h2>
          <motion.p
            className="mt-6 max-w-sm text-sm leading-[1.8] text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            Three practices, one outcome: numbers leadership can reconcile and act on.
          </motion.p>
        </div>

        <div className="px-6 pb-12 md:px-10 md:pb-14 lg:col-span-8 lg:pt-20 lg:pl-0 lg:pr-16">
          {serviceLines.map((line, i) => (
            <motion.div
              key={line.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
            >
              <div className="py-7 md:py-8">
                <Link href={line.href} className="group block">
                  <h3 className="font-display text-2xl font-medium tracking-[-0.02em] text-foreground transition-colors duration-700 group-hover:text-accent-foreground md:text-[1.75rem]">
                    {line.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-[1.85] text-muted-foreground md:text-[15px]">
                    {line.summary}
                  </p>
                </Link>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  {line.practices.map((practice) => (
                    <li key={practice.href}>
                      <Link
                        href={practice.href}
                        className="font-mono text-[0.6875rem] uppercase tracking-[0.06em] text-muted transition-colors duration-500 hover:text-foreground"
                      >
                        {practice.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                {i < serviceLines.length - 1 && (
                  <div className="mt-8 h-px w-full bg-gradient-to-r from-white/[0.06] to-transparent" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
