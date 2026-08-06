import { cn } from "@/lib/utils";

interface IndustriesHeroVisualProps {
  className?: string;
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IndustriesHeroVisual({ className }: IndustriesHeroVisualProps) {
  return (
    <div className={cn("relative h-full w-full text-foreground/70", className)}>
      <svg
        viewBox="0 0 640 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="industries-hero-glow" cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.28" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="640" height="480" fill="url(#industries-hero-glow)" />

        {Array.from({ length: 12 }).map((_, row) =>
          Array.from({ length: 16 }).map((__, col) => (
            <circle
              key={`${row}-${col}`}
              cx={40 + col * 38}
              cy={30 + row * 38}
              r="0.75"
              fill="currentColor"
              opacity="0.16"
              className="animate-pulse-soft"
              style={{ animationDelay: `${(row + col) * 0.08}s` }}
            />
          )),
        )}

        <path
          d="M320 240 L140 130 M320 240 L500 110 M320 240 L540 250 M320 240 L430 360 M320 240 L180 350 M320 240 L90 250 M320 240 L320 70"
          {...stroke}
          opacity="0.42"
          strokeDasharray="4 6"
          className="animate-flow-dash"
        />

        <circle cx="320" cy="240" r="52" {...stroke} opacity="0.55" className="animate-pulse-glow" />
        <circle cx="320" cy="240" r="36" {...stroke} opacity="0.38" />
        <path d="M308 240h24M320 228v24" {...stroke} opacity="0.72" />
        <circle cx="320" cy="240" r="4" fill="var(--accent)" opacity="0.9" />

        <g opacity="0.78">
          <circle cx="140" cy="130" r="28" {...stroke} />
          <rect x="128" y="122" width="24" height="16" rx="1.5" {...stroke} opacity="0.85" />
          <path d="M128 126h24M134 118v4M146 118v4" {...stroke} opacity="0.65" />
        </g>

        <g opacity="0.74">
          <circle cx="500" cy="110" r="28" {...stroke} />
          <circle cx="492" cy="110" r="5" {...stroke} />
          <rect x="504" y="106" width="8" height="8" rx="1" {...stroke} />
          <rect x="512" y="106" width="8" height="8" rx="1" {...stroke} />
        </g>

        <g opacity="0.76">
          <circle cx="540" cy="250" r="28" {...stroke} />
          <path d="M528 258l8-8 6 6 14-12" {...stroke} />
          <rect x="524" y="262" width="32" height="4" rx="1" {...stroke} opacity="0.65" />
        </g>

        <g opacity="0.72">
          <circle cx="430" cy="360" r="28" {...stroke} />
          <path d="M414 360h32M418 352l6 8-6 8" {...stroke} />
          <circle cx="448" cy="352" r="5" {...stroke} opacity="0.75" />
        </g>

        <g opacity="0.74">
          <circle cx="180" cy="350" r="28" {...stroke} />
          <path d="M166 358V342M176 338v20M186 346v12M196 334v24" {...stroke} />
        </g>

        <g opacity="0.76">
          <circle cx="90" cy="250" r="28" {...stroke} />
          <circle cx="74" cy="258" r="3" {...stroke} />
          <circle cx="96" cy="238" r="3" {...stroke} />
          <circle cx="118" cy="252" r="3" {...stroke} />
          <path d="M78 256c10-6 14-6 18-4M100 240c8 4 12 8 16 10" {...stroke} opacity="0.6" strokeDasharray="3 3" />
        </g>

        <g opacity="0.74">
          <circle cx="320" cy="70" r="28" {...stroke} />
          <rect x="304" y="78" width="8" height="8" rx="1" {...stroke} />
          <rect x="316" y="78" width="8" height="8" rx="1" {...stroke} />
          <rect x="304" y="66" width="8" height="8" rx="1" {...stroke} />
          <rect x="316" y="66" width="8" height="8" rx="1" {...stroke} />
          <rect x="336" y="64" width="14" height="14" rx="1.5" {...stroke} opacity="0.8" />
        </g>

        <path
          d="M120 400c40-20 80-20 120 0s80 20 120 0 80-20 120 0"
          {...stroke}
          opacity="0.22"
        />
      </svg>
    </div>
  );
}
