import { AnimateIn } from "@/components/visuals/AnimateIn";

interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
}

interface HowItWorksFlowProps {
  steps: HowItWorksStep[];
}

export function HowItWorksFlow({ steps }: HowItWorksFlowProps) {
  return (
    <section className="border-t border-white/10 py-12 md:py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <AnimateIn>
          <div className="mx-auto max-w-5xl">
            <p className="mb-10 text-center text-label">How it works</p>

            <ol className="flex flex-col gap-10 md:flex-row">
              {steps.map((item, index) => (
                <li
                  key={item.step}
                  className="flex flex-1 flex-col items-center text-center md:min-w-0"
                >
                  <div className="flex w-full items-center">
                    {index > 0 ? (
                      <span className="hidden h-px flex-1 bg-white/10 md:block" aria-hidden="true" />
                    ) : (
                      <span className="hidden flex-1 md:block" aria-hidden="true" />
                    )}
                    <span className="relative z-10 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/50 bg-background font-mono text-sm tracking-wider text-accent">
                      {item.step}
                    </span>
                    {index < steps.length - 1 ? (
                      <span className="hidden h-px flex-1 bg-white/10 md:block" aria-hidden="true" />
                    ) : (
                      <span className="hidden flex-1 md:block" aria-hidden="true" />
                    )}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[15rem] text-sm leading-[1.8] text-muted-foreground">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
