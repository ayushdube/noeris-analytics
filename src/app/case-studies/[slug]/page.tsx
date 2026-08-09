import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { DetailPageCTA } from "@/components/marketing/DetailPageCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";
import { AnimateIn } from "@/components/visuals/AnimateIn";
import { ImpactBarChart } from "@/components/visuals/ImpactBarChart";
import { SplitHero } from "@/components/visuals/SplitHero";
import {
  caseStudies,
  getCaseStudy,
  getIndustry,
  getRelatedCaseStudies,
  type CaseStudy,
} from "@/modules/content/site-content";
import { createPageMetadata } from "@/lib/seo/metadata";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  const description =
    study.overview.length > 155 ? `${study.overview.slice(0, 152)}...` : study.overview;

  return createPageMetadata({
    title: study.title,
    description,
    path: `/case-studies/${slug}`,
  });
}

function getDisclaimer(study: CaseStudy) {
  if (study.engagementSource === "upwork") {
    return "This engagement was delivered by a Noeris principal consultant via a verified Upwork contract (4.9 ★, Top Rated Plus).";
  }

  return "This engagement was delivered by a Noeris principal consultant in a prior role. Client details have been anonymised.";
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const industry = getIndustry(study.industrySlug);
  const related = getRelatedCaseStudies(slug);

  const articleDescription =
    study.overview.length > 155 ? `${study.overview.slice(0, 152)}...` : study.overview;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: study.title,
          description: articleDescription,
          author: {
            "@type": "Organization",
            name: "Noeris Analytics",
            url: siteConfig.url,
          },
          publisher: {
            "@type": "Organization",
            name: "Noeris Analytics",
            url: siteConfig.url,
          },
          url: `${siteConfig.url}/case-studies/${study.slug}`,
        }}
      />
      <SplitHero
        eyebrow={study.industry}
        title={study.title}
        meta={
          <div className="mt-8 space-y-4">
            <p className="font-mono text-sm text-muted">{study.client}</p>
            {industry ? (
              <Link
                href={`/industries/${study.industrySlug}`}
                className="inline-flex text-sm text-muted transition-colors duration-500 hover:text-accent-foreground"
              >
                See our {industry.title} capabilities →
              </Link>
            ) : null}
          </div>
        }
        visual={<ImpactBarChart metrics={study.impact} title="Key outcomes" />}
      />

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <AnimateIn>
            <p className="mb-6 text-label">Overview</p>
            <p className="text-lg leading-[1.8] text-muted-foreground">{study.overview}</p>
          </AnimateIn>

          {study.challengePoints.length > 0 && (
            <AnimateIn delay={0.08}>
              <p className="mb-6 mt-12 text-label">The challenge</p>
              <ul className="space-y-3 text-lg leading-[1.8] text-muted-foreground">
                {study.challengePoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-accent/70" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </AnimateIn>
          )}

          <AnimateIn delay={0.12}>
            <p className="mb-6 mt-12 text-label">What we built</p>
            <p className="text-lg leading-[1.8] text-muted-foreground">{study.solution}</p>
            {study.solutionItems && study.solutionItems.length > 0 && (
              <ol className="mt-6 space-y-4 text-lg leading-[1.8] text-muted-foreground">
                {study.solutionItems.map((item, index) => (
                  <li key={item} className="flex gap-4">
                    <span className="shrink-0 font-mono text-sm text-accent">{index + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            )}
          </AnimateIn>

          {study.outcomes.length > 0 && (
            <AnimateIn delay={0.16}>
              <p className="mb-6 mt-12 text-label">Key outcomes</p>
              <ul className="space-y-3 text-lg leading-[1.8] text-muted-foreground">
                {study.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3">
                    <span className="mt-0.5 shrink-0 font-mono text-sm text-accent">✓</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </AnimateIn>
          )}

          {study.clientFeedback && (
            <AnimateIn delay={0.18}>
              <p className="mb-6 mt-12 text-label">Client feedback</p>
              <blockquote className="border-l-2 border-accent/40 pl-6">
                <p className="text-lg italic leading-[1.8] text-muted-foreground">
                  &ldquo;{study.clientFeedback}&rdquo;
                </p>
                {study.clientFeedbackAttribution && (
                  <footer className="mt-4 font-mono text-xs uppercase tracking-[0.08em] text-muted">
                    {study.clientFeedbackAttribution}
                  </footer>
                )}
              </blockquote>
            </AnimateIn>
          )}

          <AnimateIn delay={0.2}>
            <p className="mb-4 mt-12 text-label">Tools</p>
            <p className="font-mono text-sm text-muted-foreground">{study.tools.join(" · ")}</p>
          </AnimateIn>

          <AnimateIn delay={0.24}>
            <p className="mt-12 border-t border-white/[0.06] pt-6 text-sm leading-relaxed text-muted">
              {getDisclaimer(study)}
            </p>
          </AnimateIn>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-white/[0.06] py-8 md:py-10">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <AnimateIn>
              <p className="mb-8 text-label">More in {study.industryTag}</p>
              <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/case-studies/${item.slug}`}
                    className="group block"
                  >
                    <h3 className="font-display text-xl font-medium tracking-[-0.01em] text-foreground transition-colors duration-500 group-hover:text-accent-foreground md:text-2xl">
                      {item.title}
                    </h3>
                    {item.impact[0] && (
                      <p className="mt-3 font-mono text-sm text-accent">
                        {item.impact[0].metric} · {item.impact[0].label}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>
      )}

      <DetailPageCTA
        founderId={study.engagementLead}
        secondary={
          industry
            ? {
                href: `/industries/${study.industrySlug}`,
                label: `See ${industry.title} capabilities →`,
                variant: "ghost",
              }
            : undefined
        }
        backHref="/case-studies"
        backLabel="← All case studies"
      />
    </>
  );
}
