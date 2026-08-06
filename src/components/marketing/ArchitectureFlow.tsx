"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/marketing/FadeIn";

const sources = ["Shopify", "ERP", "CRM", "Finance", "Marketing"];
const layers = [
  { label: "Data Platform", sub: "Integration & orchestration" },
  { label: "Warehouse", sub: "Snowflake · Fabric · Databricks" },
  { label: "Power BI / AI", sub: "Semantic models & intelligence" },
  { label: "Business Teams", sub: "Self-service & operations" },
  { label: "Executive Leadership", sub: "Decision-ready insights" },
];

export function ArchitectureFlow() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="architecture" className="relative overflow-hidden py-28 md:py-40 lg:py-48">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.015] blur-[100px]"
        aria-hidden="true"
      />

      <Container wide>
        <FadeIn>
          <div className="mb-24 max-w-2xl md:mb-32">
            <p className="mb-5 text-label">
              Architecture
            </p>
            <h2 className="font-display text-4xl font-medium leading-[1.08] tracking-[-0.03em] text-foreground md:text-5xl">
              From fragmented systems to a trusted decision system
            </h2>
          </div>
        </FadeIn>

        <div className="hidden lg:block">
          <FadeIn>
            <p className="mb-20 text-sm text-muted">{sources.join("  ·  ")}</p>
          </FadeIn>

          <div className="relative flex items-start justify-between gap-6">
            {layers.map((layer, i) => (
              <FadeIn key={layer.label} delay={i * 0.1} className="relative flex-1">
                {i > 0 && (
                  <motion.div
                    className="absolute -left-3 top-3 h-px w-6 bg-gradient-to-r from-white/10 to-transparent"
                    aria-hidden="true"
                    animate={shouldReduceMotion ? {} : { opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                  />
                )}
                <p className="font-display text-lg font-medium tracking-[-0.01em] text-foreground">
                  {layer.label}
                </p>
                <p className="mt-3 font-mono text-sm leading-relaxed text-muted">
                  {layer.sub}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="space-y-12 lg:hidden">
          <FadeIn>
            <p className="text-label">
              {sources.join(" · ")}
            </p>
          </FadeIn>
          {layers.map((layer, i) => (
            <FadeIn key={layer.label} delay={i * 0.08}>
              <div>
                <p className="font-display text-xl font-medium text-foreground">{layer.label}</p>
                <p className="mt-2 font-mono text-xs text-muted">{layer.sub}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
