import type { Metadata } from "next";

import { FinalCTA } from "@/components/marketing/FinalCTA";
import { AnimateIn } from "@/components/visuals/AnimateIn";
import { IndustriesHero } from "@/components/marketing/industries/IndustriesHero";
import { IndustryCard } from "@/components/marketing/industries/IndustryCard";
import { industries } from "@/modules/content/site-content";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Industries",
  description:
    "Business intelligence and analytics consulting for oil & gas, eCommerce, manufacturing, SaaS, healthcare, financial services, logistics, and private equity.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <IndustriesHero
        eyebrow="Industries"
        title="Analytics tailored to your operating context"
        description="Generic analytics tools don't understand your data. We do."
      />

      <section className="pb-16 md:pb-20">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-x-20 gap-y-12 px-6 md:grid-cols-2 md:gap-y-14 lg:grid-cols-3 lg:px-10">
          {industries.map((industry, i) => (
            <AnimateIn key={industry.slug} delay={i * 0.04}>
              <IndustryCard
                slug={industry.slug}
                title={industry.title}
                summary={industry.summary}
                primaryKpi={industry.kpis[0]}
                className="mb-0"
              />
            </AnimateIn>
          ))}
        </div>
      </section>

      <FinalCTA
        className="pt-20 pb-36 md:pt-28 md:pb-48 lg:pt-32 lg:pb-56"
        supportingLine="Engagements start with a free 45-minute discovery session. No pitch deck. No sales handoff."
        secondaryLink={{ href: "/case-studies", label: "Browse case studies →" }}
      />
    </>
  );
}
