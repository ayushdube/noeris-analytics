import type { Metadata } from "next";
import Link from "next/link";

import { EngagementOffers } from "@/components/marketing/home/EngagementOffers";
import { ServicesDiscoveryCTA } from "@/components/marketing/services/ServicesDiscoveryCTA";
import { AnimateIn } from "@/components/visuals/AnimateIn";
import { ServicesMapVisual } from "@/components/visuals/ServicesMapVisual";
import { SplitHero } from "@/components/visuals/SplitHero";
import { serviceLines } from "@/modules/content/positioning-content";
import { services } from "@/modules/content/site-content";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteStats } from "@/lib/site-stats";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Data engineering, business intelligence, AI analytics and agents, and managed analytics for companies that need numbers they can reconcile.",
  path: "/services",
});

const heroStats = [
  `${siteStats.projectsDelivered} projects`,
  `${siteStats.clientRating}★ rating`,
  `${siteStats.reviewCount} verified reviews`,
  "Top rated plus",
];

export default function ServicesPage() {
  return (
    <>
      <SplitHero
        compact
        eyebrow="Services"
        title="Analytics capabilities for every stage of maturity"
        description="Data engineering and business intelligence, AI analytics and agents, and managed analytics—delivered as one decision system."
        meta={
          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-muted md:text-xs">
            {heroStats.map((stat, index) => (
              <span key={stat} className="inline-flex items-center gap-3">
                {index > 0 ? (
                  <span className="hidden text-muted/40 sm:inline" aria-hidden="true">
                    ·
                  </span>
                ) : null}
                <span>{stat}</span>
              </span>
            ))}
          </div>
        }
        visual={<ServicesMapVisual />}
      />

      <section className="pb-8 md:pb-12" aria-labelledby="service-lines-heading">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <AnimateIn>
            <h2
              id="service-lines-heading"
              className="font-display text-3xl font-medium tracking-[-0.02em] text-foreground md:text-4xl"
            >
              Three practices
            </h2>
          </AnimateIn>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {serviceLines.map((line, index) => (
              <AnimateIn key={line.id} delay={index * 0.05}>
                <article className="flex h-full flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8">
                  <h3 className="font-display text-2xl font-medium tracking-[-0.02em] text-foreground">
                    <Link href={line.href} className="transition-colors duration-500 hover:text-accent-foreground">
                      {line.title}
                    </Link>
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-[1.75] text-muted-foreground">{line.summary}</p>
                  <ul className="mt-6 space-y-2">
                    {line.practices.map((practice) => (
                      <li key={practice.href}>
                        <Link
                          href={practice.href}
                          className="text-sm text-muted-foreground transition-colors duration-500 hover:text-foreground"
                        >
                          {practice.label} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28" aria-labelledby="all-capabilities-heading">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <h2 id="all-capabilities-heading" className="mb-8 font-display text-2xl font-medium tracking-[-0.02em] text-foreground md:text-3xl">
            All capabilities
          </h2>
          <div className="space-y-6 md:space-y-8">
            {services.map((service, i) => (
              <AnimateIn key={service.slug} delay={i * 0.05}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors duration-500 hover:border-white/[0.12] md:p-8"
                >
                  <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-10">
                    <div>
                      <h3 className="font-display text-2xl font-medium tracking-[-0.02em] text-foreground transition-colors duration-500 group-hover:text-accent-foreground md:text-3xl">
                        {service.title}
                      </h3>
                      <p className="mt-4 max-w-3xl text-base leading-[1.8] text-muted-foreground">
                        {service.summary}
                      </p>

                      <div className="mt-6 border-t border-white/[0.06] pt-6">
                        <p className="text-label text-label-sm">What&apos;s included</p>
                        <ul className="mt-4 space-y-2.5">
                          {service.whatsIncluded.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]"
                            >
                              <span className="mt-0.5 shrink-0 font-mono text-xs text-accent">·</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="mt-5 font-mono text-[0.6875rem] uppercase tracking-[0.06em] text-muted md:text-xs">
                        {service.audienceTag}
                      </p>
                    </div>

                    <span
                      className="font-mono text-sm text-muted transition-all duration-500 group-hover:translate-x-1 group-hover:text-accent"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <EngagementOffers />

      <ServicesDiscoveryCTA />
    </>
  );
}
