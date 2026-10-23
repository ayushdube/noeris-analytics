import { AnimateIn } from "@/components/visuals/AnimateIn";
import { getTeamProfiles } from "@/modules/content/team-content";

function ProfileGrid({
  profiles,
}: {
  profiles: ReturnType<typeof getTeamProfiles>;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 md:gap-8">
      {profiles.map((profile, i) => (
        <AnimateIn key={profile.id} delay={i * 0.08}>
          <article className="h-full rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 md:p-8">
            <h3 className="font-display text-xl font-medium tracking-[-0.01em] text-foreground md:text-2xl">
              {profile.name}
            </h3>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.08em] text-muted">
              {profile.title}
            </p>
            <p className="mt-5 text-sm leading-[1.75] text-muted-foreground md:text-base md:leading-[1.8]">
              {profile.bio}
            </p>
          </article>
        </AnimateIn>
      ))}
    </div>
  );
}

export function AboutFounders() {
  const founders = getTeamProfiles("founder");
  const specialists = getTeamProfiles("specialist");

  return (
    <section id="team" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <AnimateIn>
          <p className="mb-10 text-label md:mb-12">Founded by</p>
        </AnimateIn>
        <ProfileGrid profiles={founders} />

        {specialists.length > 0 && (
          <div className="mt-16 md:mt-20">
            <AnimateIn>
              <p className="mb-10 text-label md:mb-12">Team</p>
            </AnimateIn>
            <ProfileGrid profiles={specialists} />
          </div>
        )}
      </div>
    </section>
  );
}
