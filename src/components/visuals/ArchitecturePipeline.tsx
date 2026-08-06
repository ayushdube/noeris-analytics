import { AnimateIn } from "@/components/visuals/AnimateIn";

interface ArchitecturePipelineProps {
  nodes: string[];
  className?: string;
}

export function ArchitecturePipeline({ nodes, className }: ArchitecturePipelineProps) {
  return (
    <div className={className}>
      <div className="hidden md:block">
        <div className="flex items-center justify-between gap-2">
          {nodes.map((node, i) => (
            <div key={`${node}-${i}`} className="flex flex-1 items-center">
              <AnimateIn delay={i * 0.1} className="flex flex-1 flex-col items-center">
                <div className="flex h-10 w-full max-w-[120px] items-center justify-center rounded border border-white/[0.08] bg-white/[0.03] px-2">
                  <span className="truncate text-center font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {node}
                  </span>
                </div>
              </AnimateIn>
              {i < nodes.length - 1 && (
                <div
                  className="mx-1 h-px max-w-8 flex-1 bg-gradient-to-r from-white/20 to-white/5 animate-in-fade"
                  style={{ animationDelay: `${i * 0.1 + 0.2}s` }}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3 md:hidden">
        {nodes.map((node, i) => (
          <AnimateIn key={`${node}-mobile-${i}`} delay={i * 0.08}>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-muted/50">{String(i + 1).padStart(2, "0")}</span>
              <span className="rounded border border-white/[0.06] bg-white/[0.02] px-3 py-2 font-mono text-xs text-muted-foreground">
                {node}
              </span>
            </div>
          </AnimateIn>
        ))}
      </div>
    </div>
  );
}
