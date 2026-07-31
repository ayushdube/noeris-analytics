import { getFounder, type FounderId } from "@/modules/content/founders-content";
import { cn } from "@/lib/utils";

interface PrincipalContactCardProps {
  founderId: FounderId;
  className?: string;
}

export function PrincipalContactCard({ founderId, className }: PrincipalContactCardProps) {
  const founder = getFounder(founderId);

  return (
    <div className={cn("border border-white/[0.06] px-6 py-8 md:px-8 md:py-10", className)}>
      <p className="font-display text-xl font-medium tracking-[-0.02em] text-foreground">
        {founder.name}
      </p>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
        {founder.principalTitle}
      </p>
      <ul className="mt-6 space-y-2">
        {founder.contactFocus.map((item) => (
          <li key={item} className="text-sm text-muted-foreground">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
