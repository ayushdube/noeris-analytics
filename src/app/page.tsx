import type { Metadata } from "next";

import { ArchitectureChapter } from "@/components/marketing/home/ArchitectureChapter";
import { CaseStudySpread } from "@/components/marketing/home/CaseStudySpread";
import { ClosingStatement } from "@/components/marketing/home/ClosingStatement";
import { EcosystemChapter } from "@/components/marketing/home/EcosystemChapter";
import { HeroCinematic } from "@/components/marketing/home/HeroCinematic";
import { ProblemChapter } from "@/components/marketing/home/ProblemChapter";
import { ProcessNarrative } from "@/components/marketing/home/ProcessNarrative";
import { QuoteMoment } from "@/components/marketing/home/QuoteMoment";
import { ServicesChapter } from "@/components/marketing/home/ServicesChapter";
import { TrustStripChapter } from "@/components/marketing/home/TrustStripChapter";
import { HomePageWithLoader } from "@/components/layout/HomePageWithLoader";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";
import { organizationJsonLd } from "@/lib/seo/json-ld";

const homepageTitle = "Enterprise Analytics & BI Consulting | Noeris Analytics";
const homepageDescription =
  "Noeris Analytics builds trusted decision systems for enterprise teams - Power BI, Spotfire, Snowflake, Databricks, and agentic AI. Delivered by Principal Consultants with Oil & Gas, Financial Services, and SaaS specialisation.";
const homepageOgDescription =
  "Boutique data and AI consultancy. Power BI, Spotfire, Databricks, and agentic AI - delivered by Principal Consultants.";

export const metadata: Metadata = {
  title: {
    absolute: homepageTitle,
  },
  description: homepageDescription,
  openGraph: {
    title: homepageTitle,
    description: homepageOgDescription,
    url: siteConfig.url,
    siteName: "Noeris Analytics",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Noeris Analytics - Enterprise BI & Data Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@noerisanalytics",
    title: homepageTitle,
    description: homepageOgDescription,
    images: ["/opengraph-image"],
  },
  alternates: { canonical: siteConfig.url },
};

export default function HomePage() {
  return (
    <HomePageWithLoader>
      <JsonLd data={organizationJsonLd} />
      <HeroCinematic />
      <ProblemChapter />
      <EcosystemChapter />
      <ArchitectureChapter />
      <TrustStripChapter />
      <ServicesChapter />
      <CaseStudySpread />
      <ProcessNarrative />
      <QuoteMoment />
      <ClosingStatement />
    </HomePageWithLoader>
  );
}
