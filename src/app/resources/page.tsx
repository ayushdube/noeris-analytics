import type { Metadata } from "next";
import Link from "next/link";

import { FinalCTA } from "@/components/marketing/FinalCTA";
import { AnimateIn } from "@/components/visuals/AnimateIn";
import { ResourceTypeVisual } from "@/components/visuals/ResourceTypeVisual";
import { SplitHero } from "@/components/visuals/SplitHero";
import { resources } from "@/modules/content/site-content";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Resources",
    description:
      "Blog, whitepapers, architecture guides, BI maturity assessment, and dashboard examples from Noeris Analytics.",
    path: "/resources",
  }),
  robots: { index: false },
};

export default function ResourcesPage() {
  return (
    <>
      <SplitHero
        eyebrow="Resources"
        title="Insights for analytics leaders"
        description="Guides, assessments, and perspectives on building modern decision systems."
        visual={<ResourceTypeVisual slug="index" />}
      />

      <section className="pb-28 md:pb-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="space-y-16 md:space-y-20">
            {resources.map((resource, i) => (
              <AnimateIn key={resource.slug} delay={i * 0.05}>
                <Link
                  href={resource.href}
                  className="group grid gap-6 md:grid-cols-[1fr_280px] md:items-center"
                >
                  <div>
                    <h2 className="font-display text-2xl font-medium tracking-[-0.02em] text-foreground transition-colors duration-500 group-hover:text-accent-foreground">
                      {resource.title}
                    </h2>
                    <p className="mt-3 text-sm leading-[1.8] text-muted">{resource.description}</p>
                    <span className="mt-4 inline-block text-label">
                      {resource.status === "coming-soon" ? "Soon" : "→"}
                    </span>
                  </div>
                  <div className="hidden md:block">
                    <ResourceTypeVisual slug={resource.slug} />
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
