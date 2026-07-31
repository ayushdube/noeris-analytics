import { PrincipalContactCard } from "@/components/marketing/founders/PrincipalContactCard";
import { founders, whoYouWorkWith } from "@/modules/content/founders-content";

export function WhoYouWorkWith() {
  return (
    <div className="mb-20 md:mb-24">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
        {whoYouWorkWith.title}
      </p>
      <p className="mt-6 max-w-3xl text-base leading-[1.85] text-muted-foreground md:text-lg">
        {whoYouWorkWith.copy}
      </p>

      <div className="mt-6 space-y-2 md:mt-8">
        <p className="text-sm text-muted-foreground">
          {founders.ankita.name} - {founders.ankita.principalTitle}
        </p>
        <p className="text-sm text-muted-foreground">
          {founders.ayush.name} - {founders.ayush.principalTitle}
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 md:mt-14">
        <PrincipalContactCard founderId="ankita" />
        <PrincipalContactCard founderId="ayush" />
      </div>
    </div>
  );
}
