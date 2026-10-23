import type { Metadata } from "next";

import { AiAnalyticsChapter } from "@/components/marketing/home/AiAnalyticsChapter";
import { ArchitectureChapter } from "@/components/marketing/home/ArchitectureChapter";
import { CaseStudySpread } from "@/components/marketing/home/CaseStudySpread";
import { ClosingStatement } from "@/components/marketing/home/ClosingStatement";
import { EcosystemChapter } from "@/components/marketing/home/EcosystemChapter";
import { EngagementOffers } from "@/components/marketing/home/EngagementOffers";
import { HeroCinematic } from "@/components/marketing/home/HeroCinematic";
import { ProblemChapter } from "@/components/marketing/home/ProblemChapter";
import { ProcessNarrative } from "@/components/marketing/home/ProcessNarrative";
import { QuoteMoment } from "@/components/marketing/home/QuoteMoment";
import { ServicesChapter } from "@/components/marketing/home/ServicesChapter";
import { TeamExpertise } from "@/components/marketing/home/TeamExpertise";
import { TrustStripChapter } from "@/components/marketing/home/TrustStripChapter";
import { HomePageWithLoader } from "@/components/layout/HomePageWithLoader";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";
import { organizationJsonLd } from "@/lib/seo/json-ld";

const homepageTitle = "Know Where Your Business Makes Money | Noeris Analytics";
const homepageDescription =
  "Noeris connects business data and builds AI-powered analytical systems. Data engineering, Power BI, Claude and ChatGPT analytics, conversational BI, and managed reporting—with validation and governed access.";
const homepageOgDescription =
  "From fragmented data to reliable decisions. Data engineering, business intelligence, and AI-powered analytics for teams that need numbers they can trust.";

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
        alt: "Noeris Analytics - know where your business really makes money",
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
      <ServicesChapter />
      <AiAnalyticsChapter />
      <ArchitectureChapter />
      <EcosystemChapter />
      <TrustStripChapter />
      <CaseStudySpread />
      <TeamExpertise />
      <ProcessNarrative />
      <EngagementOffers />
      <QuoteMoment />
      <ClosingStatement />
    </HomePageWithLoader>
  );
}
