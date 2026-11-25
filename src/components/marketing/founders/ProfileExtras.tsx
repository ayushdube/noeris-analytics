import Image from "next/image";

import type { TeamProfile } from "@/modules/content/team-content";

/** Renders only when a photo path is set on the profile (e.g. /team/ankita.jpg in /public). */
export function ProfilePhoto({ profile }: { profile: TeamProfile }) {
  if (!profile.photo) return null;
  return (
    <Image
      src={profile.photo}
      alt={profile.name}
      width={64}
      height={64}
      className="mb-5 h-16 w-16 rounded-full border border-white/[0.08] object-cover"
    />
  );
}

/** LinkedIn / Upwork links for a person. Renders nothing when neither is set. */
export function ProfileLinks({
  name,
  linkedinUrl,
  upworkUrl,
  className = "mt-5",
}: {
  name: string;
  linkedinUrl?: string;
  upworkUrl?: string;
  className?: string;
}) {
  const links = [
    linkedinUrl ? { href: linkedinUrl, label: "LinkedIn" } : null,
    upworkUrl ? { href: upworkUrl, label: "Upwork" } : null,
  ].filter((link): link is { href: string; label: string } => link !== null);
  if (links.length === 0) return null;
  return (
    <div className={`${className} flex flex-wrap gap-x-5 gap-y-2`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-sm text-muted transition-colors duration-500 hover:text-accent-foreground"
          aria-label={`${name} on ${link.label}`}
        >
          {link.label} ↗
        </a>
      ))}
    </div>
  );
}

export function ProfileLinkedIn({ profile }: { profile: TeamProfile }) {
  return (
    <ProfileLinks
      name={profile.name}
      linkedinUrl={profile.linkedinUrl}
      upworkUrl={profile.upworkUrl}
    />
  );
}
