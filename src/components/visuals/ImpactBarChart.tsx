import { AnimateIn } from "@/components/visuals/AnimateIn";
import { VisualFrame } from "@/components/visuals/VisualFrame";
import { BarChart } from "@/components/visuals/charts/BarChart";

interface ImpactMetric {
  metric: string;
  label: string;
}

interface ImpactBarChartProps {
  metrics: ImpactMetric[];
  title?: string;
}

function metricToBarValue(metric: string): number {
  const pct = metric.match(/(\d+)%/);
  if (pct) return parseInt(pct[1], 10);

  const multiplier = metric.match(/(\d+)x/i);
  if (multiplier) return Math.min(parseInt(multiplier[1], 10) * 25, 100);

  const num = metric.match(/^(\d+)/);
  if (num) return Math.min(parseInt(num[1], 10) * 8, 100);

  return 65;
}

export function ImpactBarChart({ metrics, title = "Impact metrics" }: ImpactBarChartProps) {
  const barData = metrics.map((m) => metricToBarValue(m.metric));

  return (
    <VisualFrame aspect="wide" className="min-w-0">
      <p className="mb-4 text-label">{title}</p>
      <div className="flex min-w-0 flex-1 flex-col justify-between gap-4">
        <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-2 md:gap-3">
          {metrics.map((item, i) => (
            <AnimateIn key={item.label} delay={i * 0.08} className="min-w-0">
              <div className="flex min-w-0 flex-col bg-white/[0.04] px-3 py-3 sm:h-full sm:px-2 sm:py-2.5 md:px-3 md:py-3">
                <p className="text-balance font-display text-sm font-medium leading-snug text-foreground sm:text-base md:text-lg">
                  {item.metric}
                </p>
                <p className="mt-1.5 text-balance text-xs leading-relaxed text-muted sm:mt-1 sm:leading-snug">
                  {item.label}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
        <div className="flex min-w-0 flex-col justify-end">
          <BarChart
            data={barData}
            className="flex h-16 min-w-0 w-full items-end gap-1.5 sm:h-20 sm:gap-2 md:h-24"
          />
        </div>
      </div>
    </VisualFrame>
  );
}
