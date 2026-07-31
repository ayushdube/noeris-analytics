"use client";

import Link from "next/link";

import { EngagementLead } from "@/components/marketing/founders/EngagementLead";
import { caseStudies } from "@/modules/content/site-content";
import { motion } from "framer-motion";

function DashboardPreview() {
  const bars = [42, 58, 35, 72, 48, 65, 52, 78, 44, 68, 55, 82];

  return (
    <div className="relative w-full" aria-hidden="true">
      {/* Ambient lift behind the panel */}
      <div className="pointer-events-none absolute -inset-4 rounded-sm bg-white/[0.04] blur-2xl md:-inset-8" />

      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#161615] shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-5 py-3 md:px-6">
          <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <div className="h-1.5 w-1.5 rounded-full bg-white/10" />
          <div className="h-1.5 w-1.5 rounded-full bg-white/10" />
          <span className="ml-3 font-mono text-[9px] uppercase tracking-[0.2em] text-muted/80">
            Executive P&amp;L · Live
          </span>
        </div>

        <div className="flex h-[calc(100%-2.5rem)] flex-col justify-between p-5 md:p-7">
          {/* KPI row */}
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {[
              { label: "Revenue", value: "$4.2M", delta: "+12%" },
              { label: "Margin", value: "34.8%", delta: "+2.1pt" },
              { label: "Channels", value: "6", delta: "Unified" },
            ].map((kpi, i) => (
              <motion.div
                key={kpi.label}
                className="bg-white/[0.04] px-3 py-3 md:px-4 md:py-4"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-muted md:text-[9px]">
                  {kpi.label}
                </p>
                <p className="mt-1.5 font-display text-lg font-medium text-foreground/90 md:text-xl">
                  {kpi.value}
                </p>
                <p className="mt-1 font-mono text-[9px] text-accent/80">{kpi.delta}</p>
              </motion.div>
            ))}
          </div>

          {/* Chart area */}
          <div className="mt-4 flex flex-1 flex-col justify-end md:mt-6">
            <div className="mb-3 flex items-baseline justify-between">
              <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-muted/70">
                Contribution margin by channel
              </span>
              <span className="font-mono text-[8px] text-muted/50">Last 12 weeks</span>
            </div>
            <div className="flex h-24 items-end gap-1 md:h-32 md:gap-1.5">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-white/10 to-white/25"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  style={{ height: `${h}%`, transformOrigin: "bottom" }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Soft top-light, not a bottom fade-out */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent" />
      </div>
    </div>
  );
}

export function CaseStudySpread() {
  const study = caseStudies[0];
  if (!study) return null;

  return (
    <section className="relative">
      <div className="chapter-glow-bottom pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="mx-auto max-w-[1400px] px-6 pt-14 pb-10 md:px-10 md:pt-20 md:pb-14">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <DashboardPreview />
          </motion.div>

          <div>
            <motion.p
              className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {study.industry}
            </motion.p>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <p className="font-display text-3xl font-medium tracking-[-0.02em] text-muted md:text-4xl">
                From monthly reporting cycles
              </p>
              <p className="mt-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.04em] text-foreground">
                to daily P&amp;L visibility.
              </p>
              {study.impact[0] && (
                <p className="mt-8 font-mono text-xs uppercase tracking-[0.15em] text-accent">
                  {study.impact[0].metric} {study.impact[0].label.toLowerCase()}
                </p>
              )}
            </motion.div>

            <motion.p
              className="mt-10 max-w-md text-sm leading-[1.85] text-muted-foreground md:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {study.challenge}
            </motion.p>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <Link
                href={`/case-studies/${study.slug}`}
                className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted transition-colors duration-700 hover:text-accent-foreground"
              >
                Read the full story →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.85 }}
            >
              <EngagementLead founderId={study.engagementLead} className="mt-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
