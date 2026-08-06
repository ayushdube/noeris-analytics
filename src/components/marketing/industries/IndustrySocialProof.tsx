import { AnimateIn } from "@/components/visuals/AnimateIn";

interface IndustrySocialProofProps {
  quote: string;
  attribution: string;
}

export function IndustrySocialProof({ quote, attribution }: IndustrySocialProofProps) {
  return (
    <section className="border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-[1400px] px-6 py-10 lg:px-10">
        <AnimateIn>
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-[1.75] text-foreground md:text-xl">
              &ldquo;{quote}&rdquo;
            </p>
            <footer className="mt-4 text-label text-muted">{attribution}</footer>
          </blockquote>
        </AnimateIn>
      </div>
    </section>
  );
}
