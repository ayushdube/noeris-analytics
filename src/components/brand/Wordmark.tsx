import { cn } from "@/lib/utils";

interface WordmarkProps {
  className?: string;
  showAnalytics?: boolean;
  size?: "sm" | "md" | "lg";
  layout?: "stacked" | "inline";
}

const sizeHeights = {
  sm: { inline: 48, stacked: 112 },
  md: { inline: 56, stacked: 140 },
  lg: { inline: 64, stacked: 168 },
};

const logoFont = "var(--font-logo), 'Outfit', sans-serif";

function MonogramGlyph({ transform }: { transform: string }) {
  return (
    <g transform={transform}>
      <rect x="6" y="6" width="16" height="88" rx="7" fill="#FFFFFF" />
      <rect x="78" y="6" width="16" height="88" rx="7" fill="#FFFFFF" />
      <path
        d="M 28.0,6.0 L 36.0,6.0 Q 42.0,6.0 44.3,11.6 L 75.7,88.4 Q 78.0,94.0 72.0,94.0 L 64.0,94.0 Q 58.0,94.0 55.7,88.4 L 24.3,11.6 Q 22.0,6.0 28.0,6.0 Z"
        fill="#FFFFFF"
      />
      <rect x="56" y="34" width="18" height="8" rx="4" fill="#FFFFFF" />
    </g>
  );
}

function LogoSvg({
  viewBox,
  height,
  className,
  children,
  priority,
}: {
  viewBox: string;
  height: number;
  className?: string;
  children: React.ReactNode;
  priority?: boolean;
}) {
  const [, , vbWidth, vbHeight] = viewBox.split(" ").map(Number);
  const width = Math.round((height * vbWidth) / vbHeight);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={width}
      height={height}
      role="img"
      aria-label="Noeris Analytics"
      className={cn("block h-auto max-w-full shrink-0 border-0 outline-none", className)}
      style={{ height }}
      {...(priority ? { "data-priority": "true" } : {})}
    >
      {children}
    </svg>
  );
}

function HorizontalLogo({
  height,
  className,
  priority,
}: {
  height: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <LogoSvg
      viewBox="0 0 680 160"
      height={height}
      className={className}
      priority={priority}
    >
      <rect x="16" y="16" width="128" height="128" rx="26" fill="#FF0234" />
      <MonogramGlyph transform="translate(33,33) scale(0.94)" />
      <text
        x="170"
        y="94"
        fontFamily={logoFont}
        fontSize="46"
        fontWeight="700"
        letterSpacing="0.5"
        fill="#FFFFFF"
      >
        Noeris
      </text>
      <text
        x="172"
        y="126"
        fontFamily={logoFont}
        fontSize="22"
        fontWeight="700"
        letterSpacing="4"
        fill="#9CA3AF"
      >
        ANALYTICS
      </text>
    </LogoSvg>
  );
}

function StackedLogo({
  height,
  className,
}: {
  height: number;
  className?: string;
}) {
  return (
    <LogoSvg viewBox="0 0 280 300" height={height} className={className}>
      <rect x="60" y="18" width="160" height="160" rx="32" fill="#FF0234" />
      <MonogramGlyph transform="translate(81,39) scale(1.18)" />
      <text
        x="140"
        y="228"
        textAnchor="middle"
        fontFamily={logoFont}
        fontSize="34"
        fontWeight="700"
        letterSpacing="0.5"
        fill="#FFFFFF"
      >
        Noeris
      </text>
      <text
        x="140"
        y="258"
        textAnchor="middle"
        fontFamily={logoFont}
        fontSize="18"
        fontWeight="700"
        letterSpacing="4"
        fill="#9CA3AF"
      >
        ANALYTICS
      </text>
    </LogoSvg>
  );
}

function WordmarkOnly({
  height,
  className,
  priority,
}: {
  height: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <LogoSvg
      viewBox="0 0 420 80"
      height={height}
      className={className}
      priority={priority}
    >
      <text
        x="0"
        y="52"
        fontFamily={logoFont}
        fontSize="46"
        fontWeight="700"
        letterSpacing="0.5"
        fill="#FFFFFF"
      >
        Noeris
      </text>
      <text
        x="2"
        y="72"
        fontFamily={logoFont}
        fontSize="18"
        fontWeight="700"
        letterSpacing="4"
        fill="#9CA3AF"
      >
        ANALYTICS
      </text>
    </LogoSvg>
  );
}

function MarkLogo({
  height,
  className,
}: {
  height: number;
  className?: string;
}) {
  return (
    <LogoSvg viewBox="0 0 400 400" height={height} className={className}>
      <rect x="36" y="36" width="328" height="328" rx="66" fill="#FF0234" />
      <MonogramGlyph transform="translate(79,79) scale(2.42)" />
    </LogoSvg>
  );
}

export function Wordmark({
  className,
  showAnalytics = true,
  size = "md",
  layout = "stacked",
}: WordmarkProps) {
  const heights = sizeHeights[size];

  if (layout === "inline") {
    if (showAnalytics) {
      return (
        <HorizontalLogo
          height={heights.inline}
          className={className}
          priority
        />
      );
    }

    return (
      <WordmarkOnly
        height={heights.inline}
        className={className}
        priority
      />
    );
  }

  if (!showAnalytics) {
    return <MarkLogo height={heights.inline} className={className} />;
  }

  return <StackedLogo height={heights.stacked} className={className} />;
}
