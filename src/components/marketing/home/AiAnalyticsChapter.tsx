import Link from "next/link";

import { AnalyticsConversationDemo } from "@/components/marketing/ai/AnalyticsConversationDemo";
import { AnimateIn } from "@/components/visuals/AnimateIn";

const points = [
  "The question is interpreted by Claude or ChatGPT.",
  "The figure is calculated in the warehouse or semantic model.",
  "A reviewer sees the evidence before the number is treated as a decision.",
];

export function AiAnalyticsChapter() {
  return (
    <section id="ai-analytics" className="relative overflow-hidden" aria-labelledby="ai-analytics-heading">
      <div className="chapter-glow-center pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-14 md:px-10 md:py-20 lg:grid-cols-2 lg:gap-16">
        <AnimateIn>
          <p className="text-label">Claude & ChatGPT analytics</p>
          <h2
            id="ai-analytics-heading"
            className="mt-6 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.03em] text-foreground"
          >
            Ask a business question. Trace the figure behind the answer.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-[1.8] text-muted-foreground">
            Natural-language analytics is useful when it is tied to approved data. Noeris implements
            that layer for finance, operations, and leadership teams—and keeps the calculation in
            the system that already owns the metric.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">
                <span className="mt-0.5 shrink-0 font-mono text-xs text-accent" aria-hidden="true">
                  ·
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/services/ai-analytics-agents"
            className="mt-8 inline-flex text-sm text-muted-foreground transition-colors duration-500 hover:text-accent-foreground"
          >
            Explore AI Analytics & Agents →
          </Link>
        </AnimateIn>
        <AnimateIn delay={0.08}>
          <AnalyticsConversationDemo />
        </AnimateIn>
      </div>
    </section>
  );
}
