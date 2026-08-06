import { problems } from "@/modules/content/site-content";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/marketing/FadeIn";

export function ProblemsSolved() {
  return (
    <section id="problems" className="py-28 md:py-40 lg:py-48">
      <Container wide>
        <div className="grid gap-20 lg:grid-cols-[1fr_1.1fr] lg:gap-32">
          <FadeIn className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-5 text-label">
              The decision problem
            </p>
            <h2 className="font-display text-4xl font-medium leading-[1.08] tracking-[-0.03em] text-foreground md:text-5xl">
              Businesses don&apos;t have a data problem. They have a{" "}
              <span className="text-muted">decision problem.</span>
            </h2>
            <p className="mt-10 text-lg leading-[1.75] text-muted-foreground">
              Most companies already own all the data they need. It&apos;s simply fragmented across dozens of systems.
            </p>
          </FadeIn>

          <div className="space-y-16 md:space-y-20">
            {problems.map((problem, i) => (
              <FadeIn key={problem.title} delay={i * 0.06}>
                <article>
                  <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-5 font-display text-2xl font-medium tracking-[-0.02em] text-foreground md:text-[1.75rem]">
                    {problem.title}
                  </h3>
                  <p className="mt-5 max-w-md text-base leading-[1.8] text-muted-foreground">
                    {problem.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
