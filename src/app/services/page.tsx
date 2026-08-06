import type { Metadata } from "next";
import Link from "next/link";

import { ServicesDiscoveryCTA } from "@/components/marketing/services/ServicesDiscoveryCTA";
import { AnimateIn } from "@/components/visuals/AnimateIn";
import { ServicesMapVisual } from "@/components/visuals/ServicesMapVisual";
import { SplitHero } from "@/components/visuals/SplitHero";
import { services } from "@/modules/content/site-content";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Business intelligence, data engineering, analytics modernization, AI-powered analytics, and agentic AI for growing companies.",
  path: "/services",
});

const heroStats = [
  "69 projects",
  "4.9★ rating",
  "$200K+ delivered",
  "Top rated plus",
];

export default function ServicesPage() {
  return (
    <>
      <SplitHero
        compact
        eyebrow="Services"
        title="Analytics capabilities for every stage of maturity"
        description="From data integration to executive dashboards to AI-powered intelligence - delivered as a cohesive decision system."
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

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="space-y-6 md:space-y-8">
            {services.map((service, i) => (
              <AnimateIn key={service.slug} delay={i * 0.05}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors duration-500 hover:border-white/[0.12] md:p-8"
                >
                  <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-10">
                    <div>
                      <h2 className="font-display text-2xl font-medium tracking-[-0.02em] text-foreground transition-colors duration-500 group-hover:text-accent-foreground md:text-3xl">
                        {service.title}
                      </h2>
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

      <ServicesDiscoveryCTA />
    </>
  );
}
