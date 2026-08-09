"use client";

import { motion, useReducedMotion } from "framer-motion";

type LabelAlign = "left" | "center" | "right";

const sources: {
  id: string;
  label: string;
  x: number;
  y: number;
  align: LabelAlign;
  below?: boolean;
}[] = [
  { id: "shopify", label: "Commerce", x: 20, y: 24, align: "left" },
  { id: "erp", label: "ERP", x: 34, y: 18, align: "center", below: true },
  { id: "marketing", label: "Marketing", x: 50, y: 16, align: "center", below: true },
  { id: "crm", label: "CRM", x: 66, y: 18, align: "center", below: true },
  { id: "finance", label: "Finance", x: 80, y: 24, align: "right" },
];

const center = { x: 50, y: 48 };

const NODE_TRIM = 2.8;
const CORE_TRIM = 13;

function trimLine(x1: number, y1: number, x2: number, y2: number, trimStart: number, trimEnd: number) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const length = Math.hypot(dx, dy) || 1;
  const ux = dx / length;
  const uy = dy / length;

  return {
    x1: x1 + ux * trimStart,
    y1: y1 + uy * trimStart,
    x2: x2 - ux * trimEnd,
    y2: y2 - uy * trimEnd,
  };
}

function getSourceTrim(source: (typeof sources)[number]) {
  if (source.below) return NODE_TRIM + 4.5;
  return NODE_TRIM + 2.5;
}

function getLabelTransform(align: LabelAlign, below?: boolean) {
  if (below) {
    if (align === "left") return "translate(0, 130%)";
    if (align === "right") return "translate(-100%, 130%)";
    return "translate(-50%, 130%)";
  }

  if (align === "left") return "translate(0, -130%)";
  if (align === "right") return "translate(-100%, -130%)";
  return "translate(-50%, -130%)";
}

export function IntelligenceSystem() {
  const reduced = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-4xl overflow-visible px-2 py-8 sm:px-4 sm:py-10 md:py-12">
      <div className="relative aspect-[4/3] w-full md:aspect-[16/10]">
        <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible" aria-hidden="true">
          <defs>
            <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.28)" />
              <stop offset="55%" stopColor="rgba(255,255,255,0.1)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
            <radialGradient id="corePulse" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>

          {sources.map((s, i) => {
            const line = trimLine(s.x, s.y, center.x, center.y, getSourceTrim(s), CORE_TRIM);

            return (
            <g key={s.id}>
              <motion.line
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="0.22"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              />
              {!reduced && (
                <motion.circle
                  r="0.45"
                  fill="rgba(255,255,255,0.75)"
                  initial={{ offsetDistance: "0%" }}
                  animate={{ offsetDistance: "100%" }}
                  style={{
                    offsetPath: `path('M ${line.x1} ${line.y1} L ${line.x2} ${line.y2}')`,
                  }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.8,
                  }}
                />
              )}
              <circle cx={s.x} cy={s.y} r="1" fill="rgba(255,255,255,0.38)" />
              <circle cx={s.x} cy={s.y} r="1.8" fill="rgba(255,255,255,0.06)" />
            </g>
            );
          })}

          <motion.circle
            cx={center.x}
            cy={center.y}
            r="14"
            fill="url(#coreGlow)"
            animate={reduced ? {} : { r: [12, 15, 12], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
          {!reduced && (
            <motion.circle
              cx={center.x}
              cy={center.y}
              r="10"
              fill="url(#corePulse)"
              animate={{ r: [8, 13, 8], opacity: [0.2, 0.55, 0.2] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
          <motion.circle
            cx={center.x}
            cy={center.y}
            r="2.8"
            fill="rgba(255,255,255,0.6)"
            animate={reduced ? {} : { opacity: [0.45, 0.85, 0.45], r: [2.5, 3.1, 2.5] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          />

          {[
            { label: "Teams", x: 28, y: 84 },
            { label: "Leadership", x: 72, y: 84 },
          ].map((out, i) => {
            const line = trimLine(center.x, center.y + 4, out.x, out.y - 2, CORE_TRIM - 2, 2.5);

            return (
            <g key={out.label}>
              <motion.line
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="rgba(255,255,255,0.14)"
                strokeWidth="0.2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 1.2 + i * 0.2 }}
              />
              <circle cx={out.x} cy={out.y} r="0.8" fill="rgba(255,255,255,0.28)" />
            </g>
            );
          })}
        </svg>

        <div className="pointer-events-none absolute inset-0 overflow-visible">
          {sources.map((s) => (
            <span
              key={s.id}
              className="absolute z-10 whitespace-nowrap bg-background px-1 font-mono text-[0.625rem] uppercase tracking-[0.1em] text-muted-foreground/80 sm:text-xs sm:tracking-[0.16em] md:text-sm md:tracking-[0.2em]"
              style={{
                left: `${s.x}%`,
                top: `${s.y}%`,
                transform: getLabelTransform(s.align, s.below),
              }}
            >
              {s.label}
            </span>
          ))}

          <motion.span
            className="absolute left-1/2 top-[46%] z-10 -translate-x-1/2 -translate-y-full whitespace-nowrap bg-background px-1 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-foreground/80 sm:text-xs sm:tracking-[0.16em] md:text-sm"
            animate={reduced ? {} : { opacity: [0.55, 1, 0.55] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          >
            Intelligence
          </motion.span>

          <span className="absolute bottom-[8%] left-[28%] max-w-[40%] -translate-x-1/2 text-center font-mono text-[0.625rem] leading-snug text-muted-foreground/70 sm:bottom-[6%] sm:max-w-none sm:text-xs sm:leading-normal md:text-sm">
            Business teams
          </span>
          <span className="absolute bottom-[8%] left-[72%] max-w-[40%] -translate-x-1/2 text-center font-mono text-[0.625rem] leading-snug text-muted-foreground/70 sm:bottom-[6%] sm:max-w-none sm:text-xs sm:leading-normal md:text-sm">
            Executive leadership
          </span>
        </div>
      </div>
    </div>
  );
}
