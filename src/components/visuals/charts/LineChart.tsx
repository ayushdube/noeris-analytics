interface LineChartProps {
  data: number[];
  className?: string;
  gradientId?: string;
}

export function LineChart({ data, className, gradientId = "lineFill" }: LineChartProps) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const width = 100;
  const height = 100;
  const points = data
    .map((value, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((value - min) / range) * (height - 8) + 4;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className={className ?? "relative h-full min-h-24"}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255, 2, 52, 0.25)" />
            <stop offset="100%" stopColor="rgba(255, 2, 52, 0)" />
          </linearGradient>
        </defs>
        <polyline
          points={`0,${height} ${points} ${width},${height}`}
          fill={`url(#${gradientId})`}
          stroke="none"
          className="animate-in-fade"
        />
        <polyline
          points={points}
          fill="none"
          stroke="rgba(255, 2, 52, 0.75)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          className="animate-draw-line"
        />
      </svg>
    </div>
  );
}
