import type { ShowcaseChart } from "@/modules/content/showcase";

export function formatChartValue(value: number, format: ShowcaseChart["format"]) {
  if (format === "percent") return `${(value * 100).toFixed(1)}%`;
  if (format === "multiple") return `${value.toFixed(2)}x`;
  if (Math.abs(value) >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}M`;
  if (Math.abs(value) >= 1_000) return `$${(value / 1_000).toFixed(1)}k`;
  return `$${value.toFixed(0)}`;
}

/** Labelled line or bar chart for the illustrative examples (server-rendered SVG). */
export function ExampleChart({ chart }: { chart: ShowcaseChart }) {
  const { values, labels, format } = chart;
  const max = Math.max(...values);
  const min = chart.type === "bar" ? 0 : Math.min(...values);
  const range = max - min || 1;
  const w = 100;
  const h = 100;
  const pad = 6;
  const y = (v: number) => h - pad - ((v - min) / range) * (h - pad * 2);
  const x = (i: number) => (values.length === 1 ? w / 2 : (i / (values.length - 1)) * w);
  const tickIdx = values.length <= 6
    ? values.map((_, i) => i)
    : [0, Math.floor((values.length - 1) / 2), values.length - 1];

  return (
    <figure className="min-w-0">
      <figcaption className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <span className="text-label">{chart.title}</span>
        <span className="text-label text-label-sm opacity-70">{chart.subtitle}</span>
      </figcaption>

      {chart.type === "bar" ? (
        <div className="flex h-56 items-end gap-3 md:gap-5" role="img" aria-label={chart.title}>
          {values.map((v, i) => (
            <div key={labels[i]} className="flex h-full min-w-0 flex-1 flex-col justify-end">
              <span className="mb-2 text-center font-mono text-xs text-foreground/90">{formatChartValue(v, format)}</span>
              <div
                className="w-full bg-gradient-to-t from-accent/25 to-accent/55"
                style={{ height: `${Math.max(2, ((v - min) / range) * 80)}%` }}
              />
              <span className="mt-3 truncate text-center text-[0.6875rem] text-muted-foreground" title={labels[i]}>
                {labels[i]}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-[auto_1fr] gap-3">
          <div className="flex h-56 flex-col justify-between py-1 text-right font-mono text-[0.6875rem] text-muted">
            <span>{formatChartValue(max, format)}</span>
            <span>{formatChartValue(min, format)}</span>
          </div>
          <div className="min-w-0">
            <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className="h-56 w-full" role="img" aria-label={chart.title}>
              <defs>
                <linearGradient id={`fill-${chart.title.replace(/\W/g, "")}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(255, 2, 52, 0.22)" />
                  <stop offset="100%" stopColor="rgba(255, 2, 52, 0)" />
                </linearGradient>
              </defs>
              <line x1="0" x2={w} y1={y(max)} y2={y(max)} stroke="rgba(255,255,255,0.06)" strokeWidth="0.4" vectorEffect="non-scaling-stroke" />
              <line x1="0" x2={w} y1={y(min)} y2={y(min)} stroke="rgba(255,255,255,0.06)" strokeWidth="0.4" vectorEffect="non-scaling-stroke" />
              <polygon
                points={`0,${h} ${values.map((v, i) => `${x(i)},${y(v)}`).join(" ")} ${w},${h}`}
                fill={`url(#fill-${chart.title.replace(/\W/g, "")})`}
              />
              <polyline
                points={values.map((v, i) => `${x(i)},${y(v)}`).join(" ")}
                fill="none"
                stroke="rgba(255, 2, 52, 0.85)"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <div className="relative mt-2 h-4 font-mono text-[0.6875rem] text-muted">
              {tickIdx.map((i) => (
                <span
                  key={i}
                  className="absolute -translate-x-1/2 whitespace-nowrap first:translate-x-0 last:-translate-x-full"
                  style={{ left: `${(x(i) / w) * 100}%` }}
                >
                  {labels[i]}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
      <p className="mt-5 font-mono text-[0.6875rem] text-muted">
        Latest: {formatChartValue(values[values.length - 1], format)}
      </p>
    </figure>
  );
}
