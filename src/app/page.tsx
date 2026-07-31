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
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationJsonLd } from "@/lib/seo/json-ld";

export default function HomePage() {
  return (
    <>
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
    </>
  );
}
