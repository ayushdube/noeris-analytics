import { PrincipalContactCard } from "@/components/marketing/founders/PrincipalContactCard";
import { whoYouWorkWith } from "@/modules/content/founders-content";

export function WhoYouWorkWith() {
  return (
    <div className="mb-20 md:mb-24">
      <p className="text-label">
        {whoYouWorkWith.title}
      </p>
      <p className="mt-6 max-w-3xl text-base leading-[1.85] text-muted-foreground md:text-lg">
        {whoYouWorkWith.copy}
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 md:mt-14">
        <PrincipalContactCard founderId="ankita" />
        <PrincipalContactCard founderId="ayush" />
      </div>
    </div>
  );
}
