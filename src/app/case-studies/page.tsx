import type { Metadata } from "next";

import { CaseStudyFilterList } from "@/components/marketing/case-studies/CaseStudyFilterList";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { CaseStudiesOverviewVisual } from "@/components/visuals/CaseStudiesOverviewVisual";
import { SplitHero } from "@/components/visuals/SplitHero";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Case Studies",
  description:
    "See how Noeris Analytics helps companies build trusted decision systems with modern business intelligence and data engineering.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <SplitHero
        eyebrow="Case Studies"
        title="Outcomes across industries and platforms"
        description="Principal-led engagements with measured outcomes - architecture, delivery, and impact documented end to end."
        visual={<CaseStudiesOverviewVisual />}
      />

      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <CaseStudyFilterList />
        </div>
      </section>

      <FinalCTA
        className="pt-20 pb-8 md:pt-28 md:pb-10 lg:pt-32"
        supportingLine="Engagements start with a free 45-minute discovery session. No pitch deck. No sales handoff."
        secondaryLink={{ href: "/industries", label: "Browse industries →" }}
      />
    </>
  );
}
