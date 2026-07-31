import { processSteps } from "@/modules/content/site-content";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/marketing/FadeIn";

export function ProcessSteps() {
  return (
    <section id="process" className="py-28 md:py-40 lg:py-48">
      <Container wide>
        <FadeIn>
          <div className="mb-24 max-w-xl md:mb-32">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
              Our Process
            </p>
            <h2 className="font-display text-4xl font-medium tracking-[-0.03em] text-foreground md:text-5xl">
              Structured delivery.
              <br />
              <span className="text-muted">Business outcomes first.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-16 md:grid-cols-4 md:gap-12">
          {processSteps.map((step, i) => (
            <FadeIn key={step.step} delay={i * 0.08}>
              <div className={i > 0 ? "md:pl-6" : ""}>
                <span className="font-mono text-sm text-accent">{step.step}</span>
                <h3 className="mt-8 font-display text-xl font-medium tracking-[-0.01em] text-foreground">
                  {step.title}
                </h3>
                <p className="mt-5 text-sm leading-[1.8] text-muted">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
