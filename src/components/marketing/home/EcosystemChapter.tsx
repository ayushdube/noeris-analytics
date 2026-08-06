"use client";

import { useMemo, useState } from "react";

import {
  ecosystemIntro,
  platformCategories,
  platforms,
  platformsByCategory,
  roleGroups,
  type RoleId,
} from "@/modules/content/ecosystem-content";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

const fadeEase = [0.16, 1, 0.3, 1] as const;

export function EcosystemChapter() {
  const reduced = useReducedMotion();
  const [hoveredPlatformId, setHoveredPlatformId] = useState<string | null>(null);

  const highlightedRoles = useMemo<Set<RoleId>>(() => {
    if (!hoveredPlatformId) return new Set();
    const platform = platforms.find((entry) => entry.id === hoveredPlatformId);
    return new Set(platform?.relatedRoles ?? []);
  }, [hoveredPlatformId]);

  const isInteractive = hoveredPlatformId !== null;

  return (
    <section id="ecosystem" className="relative overflow-hidden">
      <div className="chapter-glow-center pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1400px] px-6 pt-14 pb-10 md:px-10 md:pt-20 md:pb-14">
        <motion.header
          className="max-w-3xl"
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: fadeEase }}
        >
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.03em] text-foreground">
            {ecosystemIntro.title}
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-[1.85] text-muted-foreground md:text-base">
            {ecosystemIntro.copy}
          </p>
        </motion.header>

        <div className="relative mt-16 lg:mt-20">
          <div
            className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/[0.08] to-transparent lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-16 lg:grid-cols-2 lg:gap-0">
            <motion.div
              className="lg:pr-14 xl:pr-20"
              initial={{ opacity: 0, x: reduced ? 0 : -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.1, ease: fadeEase }}
            >
              <p className="text-label">
                {ecosystemIntro.platformsHeading}
              </p>
              <p className="mt-4 max-w-md text-sm leading-[1.85] text-muted-foreground">
                {ecosystemIntro.platformsCopy}
              </p>

              <div className="mt-10 md:mt-12">
                {platformCategories.map((category, categoryIndex) => (
                  <div
                    key={category}
                    className={cn(
                      categoryIndex > 0 && "border-t border-white/10 pt-10 md:pt-12",
                    )}
                  >
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                      {category}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3 md:gap-x-8 md:gap-y-4">
                      {platformsByCategory(category).map((platform, platformIndex) => {
                        const isActive = hoveredPlatformId === platform.id;

                        return (
                          <motion.li
                            key={platform.id}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.7,
                              delay: categoryIndex * 0.04 + platformIndex * 0.02,
                            }}
                          >
                            <button
                              type="button"
                              className={cn(
                                "font-display text-[15px] tracking-wide transition-all duration-700 md:text-base",
                                isActive
                                  ? "text-foreground"
                                  : isInteractive
                                    ? "text-muted/30 hover:text-muted-foreground/70"
                                    : "text-muted-foreground/70 hover:text-foreground/90",
                              )}
                              onMouseEnter={() => setHoveredPlatformId(platform.id)}
                              onMouseLeave={() => setHoveredPlatformId(null)}
                              onFocus={() => setHoveredPlatformId(platform.id)}
                              onBlur={() => setHoveredPlatformId(null)}
                            >
                              {platform.name}
                            </button>
                          </motion.li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="border-t border-white/[0.06] pt-16 lg:border-t-0 lg:pl-14 lg:pt-0 xl:pl-20"
              initial={{ opacity: 0, x: reduced ? 0 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.1, delay: 0.1, ease: fadeEase }}
            >
              <p className="text-label">
                {ecosystemIntro.teamsHeading}
              </p>
              <p className="mt-4 max-w-md text-sm leading-[1.85] text-muted-foreground">
                {ecosystemIntro.teamsCopy}
              </p>

              <div className="mt-10 space-y-12 md:mt-12">
                {roleGroups.map((group) => (
                  <div key={group.label}>
                    <p
                      className={cn(
                        "font-mono text-xs uppercase tracking-[0.22em] transition-colors duration-700",
                        isInteractive &&
                          group.roles.some((role) => highlightedRoles.has(role.id))
                          ? "text-accent/80"
                          : "text-muted-foreground",
                      )}
                    >
                      {group.label}
                    </p>

                    <ul className="mt-6 space-y-7 md:space-y-8">
                      {group.roles.map((role) => {
                        const isHighlighted = highlightedRoles.has(role.id);

                        return (
                          <li
                            key={role.id}
                            id={`ecosystem-role-${role.id}`}
                            className={cn(
                              "transition-all duration-700",
                              isInteractive && !isHighlighted && "opacity-35",
                            )}
                          >
                            <p
                              className={cn(
                                "font-display text-lg font-medium tracking-[-0.02em] transition-colors duration-700 md:text-xl",
                                isHighlighted ? "text-foreground" : "text-foreground/85",
                              )}
                            >
                              {role.title}
                            </p>
                            <p
                              className={cn(
                                "mt-1.5 text-sm leading-[1.75] transition-colors duration-700 md:text-[15px]",
                                isHighlighted
                                  ? "text-muted-foreground"
                                  : "text-muted-foreground/80",
                              )}
                            >
                              {role.description}
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
