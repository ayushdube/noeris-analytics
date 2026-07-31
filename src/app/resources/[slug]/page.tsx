import type { Metadata } from "next";
import Link from "next/link";

import { Section } from "@/components/layout/Container";
import { createPageMetadata } from "@/lib/seo/metadata";

const resourcePages = [
  { slug: "blog", title: "Blog", description: "Analytics strategy and platform perspectives." },
  { slug: "whitepapers", title: "Whitepapers", description: "In-depth guides on BI modernization and KPI governance." },
  { slug: "architecture-guides", title: "Architecture Guides", description: "Reference architectures for analytics platforms." },
  { slug: "bi-maturity-assessment", title: "BI Maturity Assessment", description: "Evaluate your analytics readiness." },
  { slug: "dashboard-examples", title: "Dashboard Examples", description: "Executive and operational dashboard patterns." },
];

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return resourcePages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = resourcePages.find((p) => p.slug === slug);
  if (!page) return {};

  return createPageMetadata({
    title: page.title,
    description: page.description,
    path: `/resources/${slug}`,
  });
}

export default async function ResourceSubPage({ params }: Props) {
  const { slug } = await params;
  const page = resourcePages.find((p) => p.slug === slug);

  if (!page) {
    return null;
  }

  return (
    <>
      <Section
        className="pt-32 md:pt-40"
        variant="editorial"
        eyebrow="Resources"
        title={page.title}
        description={page.description}
        wide
      >
        <p className="max-w-xl text-base leading-[1.8] text-muted">
          This resource is being prepared. Contact us and we will notify you when it is available.
        </p>
        <Link
          href="/contact"
          className="mt-10 inline-flex items-center gap-2 text-sm text-muted transition-colors duration-500 hover:text-accent-foreground"
        >
          Get notified
          <span aria-hidden="true">→</span>
        </Link>
      </Section>
    </>
  );
}
