import { AnimateIn } from "@/components/visuals/AnimateIn";
import { VisualFrame } from "@/components/visuals/VisualFrame";
import { BarChart } from "@/components/visuals/charts/BarChart";
import { LineChart } from "@/components/visuals/charts/LineChart";

export interface KpiPreviewMetric {
  label: string;
  value: string;
}

interface KpiDashboardPreviewProps {
  title: string;
  kpis?: string[];
  metrics?: KpiPreviewMetric[];
  chartData?: number[];
  chartType?: "bar" | "line";
}

const defaultChartData = [45, 62, 38, 71, 55, 68, 52, 78, 48, 65, 58, 72];

export function KpiDashboardPreview({
  title,
  kpis = [],
  metrics,
  chartData = defaultChartData,
  chartType = "bar",
}: KpiDashboardPreviewProps) {
  const previewMetrics =
    metrics ??
    kpis.slice(0, 3).map((label, i) => {
      const samples = ["↑ 12%", "94.2%", "8.4×", "↓ 18%", "$2.1M", "97%"];
      return { label, value: samples[i % samples.length] };
    });

  return (
    <VisualFrame aspect="wide">
      <div className="mb-4 flex items-center justify-between gap-2">
        <p className="text-label">{title}</p>
        <span className="text-label text-label-sm opacity-60">Live preview</span>
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="grid grid-cols-3 gap-2 md:gap-3">
          {previewMetrics.map((metric, i) => (
            <AnimateIn key={metric.label} delay={i * 0.07}>
              <div className="bg-white/[0.04] px-2 py-2.5 md:px-3 md:py-3">
                <p className="truncate text-label-sm uppercase tracking-wider text-muted md:text-xs">
                  {metric.label}
                </p>
                <p className="mt-1 font-display text-sm font-medium text-foreground md:text-base">
                  {metric.value}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <div className="mt-4">
          <p className="mb-2 text-label text-label-sm">Performance trend</p>
          {chartType === "line" ? (
            <LineChart data={chartData} gradientId={`kpi-line-${title.replace(/\s/g, "")}`} />
          ) : (
            <BarChart data={chartData} />
          )}
        </div>
      </div>
    </VisualFrame>
  );
}
