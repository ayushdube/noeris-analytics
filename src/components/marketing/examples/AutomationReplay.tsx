"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import type { ShowcaseAutomation } from "@/modules/content/showcase";

// Top-to-bottom layout: a node's layer (x in the bundle) is its row, its lane (y) its column.
const NODE_W = 184;
const NODE_H = 44;
const LANE = 204;
const ROW = 66;
const PAD = 16;

const KIND_LABEL: Record<string, string> = {
  trigger: "Trigger",
  data: "Data / tools",
  code: "Logic",
  ai: "AI model",
  check: "Check",
  branch: "Decision",
  human: "Human approval",
  send: "Output",
  alert: "Alert",
  end: "End",
};

const KIND_DOT: Record<string, string> = {
  ai: "var(--accent)",
  check: "#7dd3a8",
  human: "#f2c46d",
  alert: "#f08a7e",
};

/** Workflow or agent graph with a step-by-step replay of a recorded run. */
export function AutomationReplay({ automation }: { automation: ShowcaseAutomation }) {
  const { diagram, runs } = automation;
  const [runIdx, setRunIdx] = useState(0);
  const [step, setStep] = useState(-1); // -1: not started; steps.length: finished
  const [playing, setPlaying] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const run = runs[runIdx];

  const layout = useMemo(() => {
    const lanes = diagram.nodes.map((n) => n.y);
    const minLane = Math.min(...lanes);
    const pos = new Map(diagram.nodes.map((n) => [n.id, { x: PAD + (n.y - minLane) * LANE, y: PAD + n.x * ROW }]));
    const width = PAD * 2 + (Math.max(...lanes) - minLane) * LANE + NODE_W + 40;
    const height = PAD * 2 + Math.max(...diagram.nodes.map((n) => n.x)) * ROW + NODE_H;
    return { pos, width, height };
  }, [diagram]);

  useEffect(() => {
    if (!playing) return;
    if (step >= run.steps.length - 1) {
      setPlaying(false);
      setStep(run.steps.length);
      return;
    }
    const next = run.steps[step + 1];
    timer.current = setTimeout(() => setStep((s) => s + 1), step < 0 ? 150 : next?.pause ? 1300 : 750);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [playing, step, run.steps]);

  const play = () => {
    const reduce = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setStep(run.steps.length);
      return;
    }
    setStep(-1);
    setPlaying(true);
  };

  const selectRun = (i: number) => {
    setPlaying(false);
    setRunIdx(i);
    setStep(-1);
  };

  const shown = run.steps.slice(0, Math.max(0, Math.min(step + 1, run.steps.length)));
  const visited = new Set(shown.map((s) => s.node));
  const current = step >= 0 && step < run.steps.length ? run.steps[step] : null;
  const traversed = new Set<string>();
  for (let i = 1; i < shown.length; i++) traversed.add(`${shown[i - 1].node}→${shown[i].node}`);
  if (shown.length && diagram.nodes.some((n) => n.id === "__start__")) traversed.add(`__start__→${shown[0].node}`);
  if (step >= run.steps.length && shown.length) traversed.add(`${shown[shown.length - 1].node}→__end__`);
  if (step >= run.steps.length && diagram.nodes.some((n) => n.id === "__end__")) visited.add("__end__");
  if (shown.length && diagram.nodes.some((n) => n.id === "__start__")) visited.add("__start__");

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:gap-8">
      <div className="min-w-0 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 md:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-muted">{automation.engineDetail}</span>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {["ai", "check", "human", "alert"]
              .filter((k) => diagram.nodes.some((n) => n.kind === k))
              .map((k) => (
                <span key={k} className="flex items-center gap-1.5 text-[0.6875rem] text-muted">
                  <span className="inline-block h-2 w-2 rounded-full" style={{ background: KIND_DOT[k] }} />
                  {KIND_LABEL[k]}
                </span>
              ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <svg
            viewBox={`0 0 ${layout.width} ${layout.height}`}
            className="mx-auto h-auto w-full"
            style={{ maxWidth: layout.width }}
            role="img"
            aria-label={`${automation.title}: diagram`}
          >
            {diagram.edges.map((e) => {
              const a = layout.pos.get(e.from);
              const b = layout.pos.get(e.to);
              if (!a || !b) return null;
              const x1 = a.x + NODE_W / 2;
              const y1 = a.y + NODE_H;
              const x2 = b.x + NODE_W / 2;
              const y2 = b.y;
              // an edge that skips rows in the same lane goes round the right-hand side
              const skip = b.y - a.y > ROW + 1 && Math.abs(a.x - b.x) < 1;
              const side = a.x + NODE_W + 28;
              const d = skip
                ? `M ${a.x + NODE_W} ${a.y + NODE_H / 2} C ${side} ${a.y + NODE_H / 2}, ${side} ${a.y + NODE_H / 2}, ${side} ${a.y + NODE_H} L ${side} ${b.y} C ${side} ${b.y + NODE_H / 2}, ${side} ${b.y + NODE_H / 2}, ${b.x + NODE_W} ${b.y + NODE_H / 2}`
                : `M ${x1} ${y1} C ${x1} ${y1 + 18}, ${x2} ${y2 - 18}, ${x2} ${y2}`;
              const on = traversed.has(`${e.from}→${e.to}`);
              const mid = skip ? { x: side + 4, y: (a.y + b.y) / 2 + NODE_H / 2 } : { x: (x1 + x2) / 2 + 12, y: (y1 + y2) / 2 + 4 };
              return (
                <g key={`${e.from}-${e.to}`}>
                  <path
                    d={d}
                    fill="none"
                    stroke={on ? "var(--accent)" : "rgba(255,255,255,0.16)"}
                    strokeWidth={on ? 1.8 : 1.2}
                    strokeDasharray={skip ? "4 4" : undefined}
                    style={{ transition: "stroke 400ms" }}
                  />
                  {e.label ? (
                    <text x={mid.x} y={mid.y} textAnchor="start" className="fill-current text-muted" fontSize="10" fontFamily="var(--font-mono, monospace)">
                      {e.label}
                    </text>
                  ) : null}
                </g>
              );
            })}
            {diagram.nodes.map((n) => {
              const p = layout.pos.get(n.id)!;
              const isCurrent = current?.node === n.id;
              const isPause = isCurrent && current?.pause;
              const seen = visited.has(n.id);
              const terminal = n.id === "__start__" || n.id === "__end__";
              const stroke = isPause ? "#f2c46d" : isCurrent ? "var(--accent)" : seen ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.12)";
              return (
                <g key={n.id} transform={`translate(${p.x} ${p.y})`} style={{ transition: "opacity 400ms" }} opacity={seen || step < 0 ? 1 : 0.55}>
                  <rect
                    width={NODE_W}
                    height={NODE_H}
                    rx={terminal ? NODE_H / 2 : 8}
                    fill={isCurrent ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.03)"}
                    stroke={stroke}
                    strokeWidth={isCurrent ? 1.8 : 1}
                    style={{ transition: "stroke 300ms, fill 300ms" }}
                  />
                  {KIND_DOT[n.kind] ? <circle cx={12} cy={NODE_H / 2} r={3.5} fill={KIND_DOT[n.kind]} /> : null}
                  <text x={KIND_DOT[n.kind] ? 22 : NODE_W / 2} y={NODE_H / 2 - 3} textAnchor={KIND_DOT[n.kind] ? "start" : "middle"} fontSize="11.5" className="fill-current text-foreground">
                    {n.label.length > 26 ? `${n.label.slice(0, 25)}…` : n.label}
                  </text>
                  <text x={KIND_DOT[n.kind] ? 22 : NODE_W / 2} y={NODE_H / 2 + 12} textAnchor={KIND_DOT[n.kind] ? "start" : "middle"} fontSize="9" className="fill-current text-muted">
                    {KIND_LABEL[n.kind]}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      <div className="flex min-w-0 flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 md:p-6">
        {runs.length > 1 ? (
          <div className="mb-4 flex flex-wrap gap-2" role="tablist" aria-label="Recorded runs">
            {runs.map((r, i) => (
              <button
                key={r.title}
                type="button"
                role="tab"
                aria-selected={i === runIdx}
                onClick={() => selectRun(i)}
                className={`rounded-sm border px-2.5 py-1.5 text-xs transition-colors duration-300 ${
                  i === runIdx ? "border-accent/60 text-foreground" : "border-white/10 text-muted-foreground hover:text-foreground"
                }`}
              >
                {r.title}
              </button>
            ))}
          </div>
        ) : null}
        <div className="mb-4 flex items-center justify-between gap-3">
          <p className="text-sm text-foreground">{run.title}</p>
          <button
            type="button"
            onClick={play}
            className="rounded-sm border border-accent/50 px-3 py-1.5 text-xs text-foreground transition-colors duration-300 hover:bg-accent/10"
          >
            {step < 0 ? "▶ Replay run" : playing ? "Replaying…" : "↻ Replay again"}
          </button>
        </div>
        <ol className="flex-1 space-y-2" aria-live="polite">
          {run.steps.map((s, i) => {
            const state = i < shown.length ? (i === step ? "current" : "done") : "todo";
            return (
              <li
                key={`${s.node}-${i}`}
                className={`rounded-sm border-l-2 py-1.5 pl-3 text-[0.8125rem] leading-snug transition-all duration-300 ${
                  state === "todo"
                    ? "border-white/[0.06] text-muted/60"
                    : s.pause
                      ? "border-[#f2c46d] text-foreground/90"
                      : state === "current"
                        ? "border-accent text-foreground"
                        : "border-white/20 text-muted-foreground"
                }`}
              >
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.06em] text-muted">
                  {diagram.nodes.find((n) => n.id === s.node)?.label ?? s.node}
                </span>
                <span className="block">{state === "todo" ? "…" : s.summary}</span>
              </li>
            );
          })}
        </ol>
        <p className={`mt-4 text-sm transition-opacity duration-500 ${step >= run.steps.length ? "text-foreground opacity-100" : "opacity-0"}`}>
          Result: {run.outcome}
        </p>
        <p className="mt-3 text-[0.6875rem] leading-relaxed text-muted">{automation.disclaimer}</p>
      </div>
    </div>
  );
}
