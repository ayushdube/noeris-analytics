interface KpiChipsProps {
  items: string[];
  limit?: number;
}

export function KpiChips({ items, limit = 3 }: KpiChipsProps) {
  const chips = items.slice(0, limit);
  if (chips.length === 0) return null;

  return (
    <div className="mt-8 flex flex-wrap gap-2">
      {chips.map((item) => (
        <span
          key={item}
          className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-muted-foreground"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
