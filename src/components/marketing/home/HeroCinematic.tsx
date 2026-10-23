"use client";

import Link from "next/link";

import { BookingButton } from "@/components/booking/BookingEmbed";
import { SignalField } from "@/components/marketing/home/SignalField";
import { TechPartners } from "@/components/marketing/home/TechPartners";
import { Button } from "@/components/ui/button";
import { heroCredibility } from "@/modules/content/founders-content";
import { siteConfig } from "@/lib/site-config";
import { heroProofStats } from "@/lib/site-stats";
import { parallaxTranslate, useMouseParallax } from "@/hooks/useMouseParallax";
import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

const heroTagline = "PAST THE NOISE";
const heroHeadline = "Know where your business really makes money.";

const parallaxLayerStyle: CSSProperties = {
  willChange: "transform",
  transformStyle: "preserve-3d",
};

function ParallaxLayer({
  depth,
  parallax,
  viewport,
  className,
  children,
}: {
  depth: number;
  parallax: { x: number; y: number };
  viewport: { width: number; height: number };
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={className}
      style={{
        ...parallaxLayerStyle,
        transform: parallaxTranslate(parallax, viewport, depth),
      }}
    >
      {children}
    </div>
  );
}

export function HeroCinematic() {
  const reduced = useReducedMotion();
  const parallax = useMouseParallax();
  const parallaxActive = !reduced && parallax.viewport.width > 0;

  const layerProps = parallaxActive
    ? { parallax, viewport: parallax.viewport }
    : {
        parallax: { x: 0, y: 0 },
        viewport: parallax.viewport,
      };

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <ParallaxLayer
        depth={2.5}
        {...layerProps}
        className="pointer-events-none absolute inset-0"
      >
        <SignalField className="absolute inset-0 h-full w-full opacity-50 md:left-[20%] md:w-[80%] md:opacity-60" />
      </ParallaxLayer>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-full max-w-[min(100%,52rem)] bg-gradient-to-r from-background via-background/90 to-transparent md:max-w-[48rem]" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col px-6 pt-28 md:px-10 md:pt-32">
        <motion.p
          className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-muted md:text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          {heroTagline}
        </motion.p>

        <div className="flex flex-1 flex-col justify-center py-10 md:py-14">
          <div className="max-w-[min(100%,52rem)] md:max-w-[48rem]">
            <ParallaxLayer depth={0.15} {...layerProps}>
              <motion.h1
                className="text-balance font-display text-[clamp(2.5rem,7vw,4.75rem)] font-medium leading-[1.05] tracking-[-0.03em] text-foreground"
                initial={{ opacity: 0, y: reduced ? 0 : 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {heroHeadline}
              </motion.h1>
            </ParallaxLayer>

            <motion.p
              className="mt-10 max-w-lg text-lg leading-[1.75] text-muted-foreground md:mt-14"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.9 }}
            >
              {siteConfig.description}
            </motion.p>

            <motion.p
              className="mt-6 max-w-lg text-lg leading-[1.75] text-muted-foreground/90 md:mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.05 }}
            >
              {heroCredibility}
            </motion.p>

            <ParallaxLayer depth={0.08} {...layerProps}>
              <motion.div
                className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 md:mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.15 }}
              >
                {heroProofStats.map((stat, index) => (
                  <span key={stat} className="inline-flex items-center gap-3">
                    {index > 0 ? (
                      <span className="hidden text-muted/40 sm:inline" aria-hidden="true">
                        ·
                      </span>
                    ) : null}
                    <span className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-muted md:text-xs">
                      {stat}
                    </span>
                  </span>
                ))}
              </motion.div>
            </ParallaxLayer>

            <motion.div
              className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center md:mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <BookingButton size="lg" variant="accent" label={siteConfig.bookingCtaLabel} />
              <Button asChild variant="ghost" size="lg">
                <Link href="/services/ai-analytics-agents">Explore AI analytics</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      <TechPartners />
    </section>
  );
}
