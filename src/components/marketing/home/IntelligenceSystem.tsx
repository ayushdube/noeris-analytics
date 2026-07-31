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
            <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
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
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="0.15"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            />
            {!reduced && (
              <motion.circle
                r="0.4"
                fill="rgba(255,255,255,0.5)"
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
            <circle cx={s.x} cy={s.y} r="0.8" fill="rgba(255,255,255,0.2)" />
          </g>
        ))}

        <motion.circle
          cx={center.x}
          cy={center.y}
          r="12"
          fill="url(#coreGlow)"
          animate={reduced ? {} : { r: [11, 13, 11], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <circle cx={center.x} cy={center.y} r="2.5" fill="rgba(255,255,255,0.35)" />

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
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="0.15"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 1.2 + i * 0.2 }}
            />
            <circle cx={out.x} cy={out.y} r="0.6" fill="rgba(255,255,255,0.15)" />
          </g>
        ))}
      </svg>

      <div className="pointer-events-none absolute inset-0">
        {sources.map((s) => (
          <span
            key={s.id}
            className="absolute font-mono text-[9px] uppercase tracking-[0.2em] text-muted/60 md:text-[10px]"
            style={{ left: `${s.x}%`, top: `${s.y}%`, transform: "translate(-50%, -120%)" }}
          >
            {s.label}
          </span>
        ))}
        <span
          className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-full font-mono text-[8px] uppercase tracking-[0.25em] text-foreground/50 md:text-[9px]"
        >
          Intelligence
        </span>
        <span className="absolute bottom-[6%] left-[25%] -translate-x-1/2 font-mono text-[9px] text-muted/50">
          Business teams
        </span>
        <span className="absolute bottom-[6%] left-[75%] -translate-x-1/2 font-mono text-[9px] text-muted/50">
          Executive leadership
        </span>
      </div>
    </div>
  );
}
