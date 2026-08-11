
import { Container } from "@/components/layout/Container";
import { IndustriesHeroVisual } from "@/components/marketing/industries/IndustriesHeroVisual";
import { AnimateIn } from "@/components/visuals/AnimateIn";

interface IndustriesHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function IndustriesHero({ eyebrow, title, description }: IndustriesHeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-32">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(ellipse_70%_60%_at_70%_40%,rgba(255,255,255,0.035),transparent_70%)] lg:block"
        aria-hidden="true"
      />

      <Container wide className="relative pb-16 md:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16 xl:gap-20">
          <AnimateIn>
            <p className="mb-5 text-label-foreground">
              {eyebrow}
            </p>
            <h1 className="max-w-xl text-balance font-display text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-foreground md:text-5xl md:leading-[1.08]">
              {title}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-[1.7] text-muted-foreground md:mt-8">
              {description}
            </p>
          </AnimateIn>

          <AnimateIn delay={0.08}>
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-surface/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="aspect-[4/3] p-6 md:p-8 lg:p-10">
                <IndustriesHeroVisual />
              </div>
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/80 to-transparent"
                aria-hidden="true"
              />
            </div>
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
}
