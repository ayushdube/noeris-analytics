import type { ReactNode } from "react";

import { AnimateIn } from "@/components/visuals/AnimateIn";

interface SplitHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  visual: ReactNode;
  meta?: ReactNode;
  className?: string;
  compact?: boolean;
  tight?: boolean;
}

export function SplitHero({
  eyebrow,
  title,
  description,
  visual,
  meta,
  className,
  compact = false,
  tight = false,
}: SplitHeroProps) {
  const topPadding = tight
    ? "pt-20 md:pt-24"
    : compact
      ? "pt-24 md:pt-28"
      : "pt-28 md:pt-32";

  return (
    <section className={`relative overflow-hidden ${topPadding} ${className ?? ""}`}>
      <div className="chapter-glow-top pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(ellipse_70%_60%_at_70%_40%,rgba(255,255,255,0.035),transparent_70%)] lg:block"
        aria-hidden="true"
      />

      <div
        className={`relative mx-auto max-w-[1400px] px-6 lg:px-10 ${compact ? "pb-10 md:pb-12" : "pb-16 md:pb-24"}`}
      >
        <div className="grid w-full min-w-0 grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16 xl:gap-20">
          <AnimateIn className="min-w-0 w-full max-w-full">
            <p className="mb-5 text-label">{eyebrow}</p>
            <h1 className="max-w-xl text-balance font-display text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-foreground md:text-5xl md:leading-[1.08]">
              {title}
            </h1>
            {description && (
              <p className="mt-6 max-w-lg text-lg leading-[1.7] text-muted-foreground md:mt-8">
                {description}
              </p>
            )}
            {meta}
          </AnimateIn>

          <AnimateIn delay={0.08} className="min-w-0 w-full max-w-full">
            {visual}
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
