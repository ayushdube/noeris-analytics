import Link from "next/link";

import { AnimateIn } from "@/components/visuals/AnimateIn";

const stats = [
  "69 completed projects",
  "4.9★ average rating",
  "$200K+ delivered",
  "Top Rated Plus · Expert-Vetted",
];

export function UpworkTrustStrip() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <AnimateIn>
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-8 md:px-10 md:py-10">
            <div className="flex flex-col items-center gap-2 text-center">
              <p className="text-label text-label-sm">Verified on Upwork</p>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-muted">
                Upwork
              </span>
            </div>

            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center">
              {stats.map((stat) => (
                <li
                  key={stat}
                  className="font-mono text-[0.6875rem] uppercase tracking-[0.06em] text-muted-foreground md:text-xs"
                >
                  {stat}
                </li>
              ))}
            </ul>

            <blockquote className="mt-8 border-t border-white/[0.06] pt-8 text-center">
              <p className="text-sm italic leading-[1.75] text-muted-foreground md:text-base">
                &ldquo;Ankita is one of the most skilled professionals I have worked with. She has
                advanced Power BI knowledge along with outstanding communication skills.&rdquo;
              </p>
              <footer className="mt-4 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-muted">
                Verified Upwork client
              </footer>
            </blockquote>

            <p className="mt-6 text-center">
              <Link
                href="https://www.upwork.com/freelancers/ankitajaiswal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors duration-500 hover:text-accent-foreground"
              >
                View profile →
              </Link>
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
