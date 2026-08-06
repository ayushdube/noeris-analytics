interface PageSideLabelProps {
  label: string;
}

export function PageSideLabel({ label }: PageSideLabelProps) {
  return (
    <div
      className="pointer-events-none fixed left-4 top-1/2 z-50 hidden -translate-y-1/2 md:flex"
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-3">
        <span className="h-6 w-px bg-white/[0.35]" />
        <span
          className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-white/[0.35]"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {label}
        </span>
        <span className="h-6 w-px bg-white/[0.35]" />
      </div>
    </div>
  );
}
