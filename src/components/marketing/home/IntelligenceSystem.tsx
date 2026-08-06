"use client";

import { motion, useReducedMotion } from "framer-motion";

const sources = [
  { id: "shopify", label: "Commerce", x: 12, y: 18 },
  { id: "erp", label: "ERP", x: 28, y: 8 },
  { id: "crm", label: "CRM", x: 72, y: 12 },
  { id: "finance", label: "Finance", x: 88, y: 22 },
  { id: "marketing", label: "Marketing", x: 50, y: 6 },
];

export function IntelligenceSystem() {
  const reduced = useReducedMotion();
  const center = { x: 50, y: 48 };

  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-4xl md:aspect-[16/10]">
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full"
        aria-hidden="true"
      >
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

        {sources.map((s, i) => (
          <g key={s.id}>
            <motion.line
              x1={s.x}
              y1={s.y}
              x2={center.x}
              y2={center.y}
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
                  offsetPath: `path('M ${s.x} ${s.y} L ${center.x} ${center.y}')`,
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
        ))}

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
          { label: "Teams", x: 25, y: 88 },
          { label: "Leadership", x: 75, y: 88 },
        ].map((out, i) => (
          <g key={out.label}>
            <motion.line
              x1={center.x}
              y1={center.y + 4}
              x2={out.x}
              y2={out.y - 2}
              stroke="rgba(255,255,255,0.14)"
              strokeWidth="0.2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 1.2 + i * 0.2 }}
            />
            <circle cx={out.x} cy={out.y} r="0.8" fill="rgba(255,255,255,0.28)" />
          </g>
        ))}
      </svg>

      <div className="pointer-events-none absolute inset-0">
        {sources.map((s) => (
          <span
            key={s.id}
            className="absolute font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground/80 md:text-sm"
            style={{ left: `${s.x}%`, top: `${s.y}%`, transform: "translate(-50%, -120%)" }}
          >
            {s.label}
          </span>
        ))}
        <motion.span
          className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-full font-mono text-xs uppercase tracking-[0.16em] text-foreground/80 md:text-sm"
          animate={reduced ? {} : { opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        >
          Intelligence
        </motion.span>
        <span className="absolute bottom-[6%] left-[25%] -translate-x-1/2 font-mono text-xs text-muted-foreground/70 md:text-sm">
          Business teams
        </span>
        <span className="absolute bottom-[6%] left-[75%] -translate-x-1/2 font-mono text-xs text-muted-foreground/70 md:text-sm">
          Executive leadership
        </span>
      </div>
    </div>
  );
}
