import { AnimateIn } from "@/components/visuals/AnimateIn";

interface DataSourcesRowProps {
  sources: string[];
}

export function DataSourcesRow({ sources }: DataSourcesRowProps) {
  return (
    <section className="border-t border-white/10 py-12 md:py-16">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <AnimateIn>
          <p className="mb-8 text-label">Sources we connect</p>
          <div className="flex flex-wrap gap-3">
            {sources.map((source) => (
              <span
                key={source}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-muted-foreground transition-colors duration-500 hover:border-accent/30 hover:text-foreground"
              >
                {source}
              </span>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
