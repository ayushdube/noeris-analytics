import { getFounder, type FounderId } from "@/modules/content/founders-content";
import { cn } from "@/lib/utils";

interface PrincipalContactCardProps {
  founderId: FounderId;
  className?: string;
}

export function PrincipalContactCard({ founderId, className }: PrincipalContactCardProps) {
  const founder = getFounder(founderId);

  return (
    <div
      className={cn(
        "rounded-sm border border-white/20 bg-white/[0.02] px-6 py-8 md:px-8 md:py-10",
        className,
      )}
    >
      <p className="font-display text-xl font-medium tracking-[-0.02em] text-foreground">
        {founder.name}
      </p>
      <p className="mt-2 text-label">
        {founder.principalTitle}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {founder.contactFocus.map((item) => (
          <span
            key={item}
            className="inline-flex rounded-sm border border-white/20 bg-transparent px-2.5 py-1.5 text-xs text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
