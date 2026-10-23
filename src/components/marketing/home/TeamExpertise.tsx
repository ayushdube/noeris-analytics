import Link from "next/link";

import { AnimateIn } from "@/components/visuals/AnimateIn";
import { getTeamProfiles } from "@/modules/content/team-content";

export function TeamExpertise() {
  const profiles = getTeamProfiles();

  return (
    <section className="relative" aria-labelledby="team-expertise-heading">
      <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-10 md:py-20">
        <div className="max-w-3xl">
          <AnimateIn>
            <p className="text-label">The team</p>
            <h2
              id="team-expertise-heading"
              className="mt-6 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.03em] text-foreground"
            >
              Data engineering, analytics, and AI in one practice.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.06}>
            <p className="mt-6 text-base leading-[1.8] text-muted-foreground">
              Principal consultants lead the engagement. Platform engineering, enterprise reporting,
              and AI-assisted analysis are delivered together, so a warehouse change and a management
              pack do not come from disconnected vendors.
            </p>
          </AnimateIn>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {profiles.map((profile, index) => (
            <AnimateIn key={profile.id} delay={index * 0.06}>
              <article className="h-full rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6">
                <h3 className="font-display text-xl font-medium tracking-[-0.01em] text-foreground">
                  {profile.name}
                </h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.08em] text-muted">
                  {profile.title}
                </p>
                <p className="mt-5 text-sm leading-[1.75] text-muted-foreground">{profile.summary}</p>
              </article>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.12}>
          <Link
            href="/about#team"
            className="mt-8 inline-flex text-sm text-muted-foreground transition-colors duration-500 hover:text-accent-foreground"
          >
            About the team →
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
