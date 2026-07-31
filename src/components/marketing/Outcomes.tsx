"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

import { outcomes } from "@/modules/content/site-content";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/marketing/FadeIn";

function AnimatedMetric({ value }: { value: string }) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          const numericMatch = value.match(/^(\d+)/);
          if (!numericMatch) return;

          const target = parseInt(numericMatch[1], 10);
          const suffix = value.slice(numericMatch[1].length);
          let current = 0;
          const step = Math.ceil(target / 40);

          const interval = setInterval(() => {
            current += step;
            if (current >= target) {
              setDisplay(`${target}${suffix}`);
              clearInterval(interval);
            } else {
              setDisplay(`${current}${suffix}`);
            }
          }, 25);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, shouldReduceMotion, hasAnimated]);

  return (
    <span
      ref={ref}
      className="font-display text-5xl font-medium tracking-[-0.03em] text-foreground md:text-6xl lg:text-7xl"
    >
      {display}
    </span>
  );
}

export function Outcomes() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(255,255,255,0.02),transparent)]"
        aria-hidden="true"
      />
      <Container wide>
        <FadeIn>
          <p className="mb-20 font-mono text-[11px] uppercase tracking-[0.25em] text-muted md:mb-28">
            Outcomes
          </p>
        </FadeIn>

        <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {outcomes.map((outcome, i) => (
            <FadeIn key={outcome.label} delay={i * 0.08}>
              <div className={i > 0 ? "max-lg:pt-4 lg:pl-8" : ""}>
                <AnimatedMetric value={outcome.metric} />
                <p className="mt-5 max-w-[16ch] text-sm leading-relaxed text-muted">
                  {outcome.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
