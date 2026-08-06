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
    <VisualFrame aspect="wide">
      <p className="mb-4 text-label">{title}</p>
      <div className="flex flex-1 flex-col justify-between">
        <div className="grid grid-cols-3 items-stretch gap-3">
          {metrics.map((item, i) => (
            <AnimateIn key={item.label} delay={i * 0.08} className="h-full">
              <div className="flex h-full flex-col bg-white/[0.04] px-3 py-3">
                <p className="font-display text-lg font-medium text-foreground md:text-xl">{item.metric}</p>
                <p className="mt-1 text-xs leading-snug text-muted">{item.label}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
        <div className="mt-4 flex flex-1 flex-col justify-end">
          <BarChart data={barData} className="flex h-20 items-end gap-2 md:h-24" />
        </div>
      </div>
    </VisualFrame>
  );
}
