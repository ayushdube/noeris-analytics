import type { Metadata } from "next";
import Link from "next/link";

import { Section } from "@/components/layout/Container";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { FadeIn } from "@/components/marketing/FadeIn";
import { resources } from "@/modules/content/site-content";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Resources",
  description:
    "Blog, whitepapers, architecture guides, BI maturity assessment, and dashboard examples from Noeris Analytics.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <Section
        className="pt-32 md:pt-40"
        variant="editorial"
        eyebrow="Resources"
        title="Insights for analytics leaders"
        description="Guides, assessments, and perspectives on building modern decision systems."
        wide
      />

      <section className="pb-28 md:pb-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="space-y-16 md:space-y-20">
            {resources.map((resource, i) => (
              <FadeIn key={resource.slug} delay={i * 0.05}>
                <Link
                  href={resource.href}
                  className="group grid gap-2 md:grid-cols-[1fr_auto] md:items-baseline"
                >
                  <div>
                    <h2 className="font-display text-2xl font-medium tracking-[-0.02em] text-foreground transition-colors duration-500 group-hover:text-accent-foreground">
                      {resource.title}
                    </h2>
                    <p className="mt-3 text-sm leading-[1.8] text-muted">{resource.description}</p>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                    {resource.status === "coming-soon" ? "Soon" : "→"}
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
