import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/marketing/FadeIn";
import { IndustryCard } from "@/components/marketing/industries/IndustryCard";
import { industries } from "@/modules/content/site-content";

export function IndustriesGrid() {
  return (
    <section id="industries" className="py-28 md:py-40 lg:py-48">
      <Container wide>
        <FadeIn>
          <p className="mb-20 text-label md:mb-28">
            Industries
          </p>
        </FadeIn>

        <div className="columns-1 gap-x-20 md:columns-2 lg:columns-3">
          {industries.map((industry, i) => (
            <FadeIn key={industry.slug} delay={i * 0.04}>
              <IndustryCard
                slug={industry.slug}
                title={industry.title}
                summary={industry.summary}
                primaryKpi={industry.kpis[0]}
                heading="h3"
              />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
