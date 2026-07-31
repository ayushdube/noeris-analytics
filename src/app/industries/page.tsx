import type { Metadata } from "next";
import Link from "next/link";

import { Section } from "@/components/layout/Container";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { FadeIn } from "@/components/marketing/FadeIn";
import { industries } from "@/modules/content/site-content";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Industries",
  description:
    "Business intelligence and analytics consulting for eCommerce, manufacturing, SaaS, healthcare, financial services, logistics, and private equity.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <Section
        className="pt-32 md:pt-40"
        variant="editorial"
        eyebrow="Industries"
        title="Analytics tailored to your operating context"
        description="Each industry has distinct data sources, KPIs, and decision workflows."
        wide
      />

      <section className="pb-28 md:pb-40">
        <div className="mx-auto max-w-[1400px] columns-1 gap-x-20 px-6 md:columns-2 lg:columns-3 lg:px-10">
          {industries.map((industry, i) => (
            <FadeIn key={industry.slug} delay={i * 0.04}>
              <Link
                href={`/industries/${industry.slug}`}
                className="group mb-16 block break-inside-avoid md:mb-20"
              >
                <h2 className="font-display text-xl font-medium tracking-[-0.01em] text-foreground transition-colors duration-500 group-hover:text-accent-foreground md:text-2xl">
                  {industry.title}
                  <span className="ml-2 inline-block opacity-0 transition-all duration-500 group-hover:translate-x-0.5 group-hover:opacity-100">→</span>
                </h2>
                <p className="mt-4 text-sm leading-[1.8] text-muted">{industry.summary}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
