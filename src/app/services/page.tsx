import type { Metadata } from "next";
import Link from "next/link";

import { Section } from "@/components/layout/Container";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { FadeIn } from "@/components/marketing/FadeIn";
import { services } from "@/modules/content/site-content";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Business intelligence, data engineering, analytics modernization, and AI-powered analytics for growing companies.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Section
        className="pt-32 md:pt-40"
        variant="editorial"
        eyebrow="Services"
        title="Analytics capabilities for every stage of maturity"
        description="From data integration to executive dashboards to AI-powered intelligence - delivered as a cohesive decision system."
        wide
      />

      <section className="pb-28 md:pb-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="space-y-16 md:space-y-20">
            {services.map((service, i) => (
              <FadeIn key={service.slug} delay={i * 0.05}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group grid gap-4 md:grid-cols-[1.2fr_1.8fr_auto] md:items-baseline md:gap-16"
                >
                  <h2 className="font-display text-2xl font-medium tracking-[-0.02em] text-foreground transition-colors duration-500 group-hover:text-accent-foreground md:text-3xl">
                    {service.title}
                  </h2>
                  <p className="text-base leading-[1.8] text-muted-foreground">{service.summary}</p>
                  <span className="font-mono text-xs text-muted transition-all duration-500 group-hover:translate-x-1 group-hover:text-accent" aria-hidden="true">
                    →
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
