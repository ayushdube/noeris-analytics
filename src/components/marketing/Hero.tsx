"use client";

import Link from "next/link";

import { BookingButton } from "@/components/booking/BookingEmbed";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/marketing/FadeIn";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[480px] w-[720px] -translate-x-1/2 translate-y-1/3 rounded-full bg-white/[0.02] blur-[140px]"
        aria-hidden="true"
      />

      <Container wide className="flex min-h-[92vh] flex-col justify-end pb-24 pt-36 md:pb-32 md:pt-44">
        <FadeIn y={20}>
          <p className="mb-10 text-label">
            Business & Executive Intelligence
          </p>
        </FadeIn>

        <FadeIn delay={0.08} y={24}>
          <h1 className="max-w-[14ch] font-display text-[2.75rem] font-medium leading-[1.02] tracking-[-0.04em] text-foreground sm:max-w-none sm:text-6xl md:text-7xl lg:text-[5.5rem] lg:leading-[0.98]">
            {siteConfig.tagline}
          </h1>
        </FadeIn>

        <FadeIn delay={0.16} y={20}>
          <p className="mt-12 max-w-xl text-lg leading-[1.75] text-muted-foreground md:mt-14 md:text-xl">
            {siteConfig.description}
          </p>
        </FadeIn>

        <FadeIn delay={0.24} y={12}>
          <div className="mt-16 flex flex-col gap-8 sm:flex-row sm:items-center md:mt-20">
            <BookingButton size="lg" />
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-2 text-sm text-muted transition-colors duration-500 hover:text-accent-foreground"
            >
              View case studies
              <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
