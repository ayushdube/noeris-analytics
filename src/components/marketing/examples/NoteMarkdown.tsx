import { Fragment, type ReactNode } from "react";

/** Minimal renderer for the AI notes: headings, paragraphs, bullets, tables, bold, rules. */
function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-medium text-foreground">{part.slice(2, -2)}</strong>
    ) : (
      <Fragment key={i}>{part.replace("<reviewer>", "the engagement lead")}</Fragment>
    ),
  );
}

export function NoteMarkdown({ markdown }: { markdown: string }) {
  const lines = markdown.split("\n");
  const out: ReactNode[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i += 1; continue; }
    if (line.startsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        const cells = lines[i].split("|").slice(1, -1).map((c) => c.trim());
        if (!cells.every((c) => /^-+$/.test(c))) rows.push(cells);
        i += 1;
      }
      const [head, ...body] = rows;
      out.push(
        <div key={`t${i}`} className="my-6 overflow-x-auto">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <thead><tr>{head.map((c) => <th key={c} className="border-b border-white/10 py-2 pr-4 font-mono text-[0.6875rem] uppercase tracking-[0.06em] text-muted">{c}</th>)}</tr></thead>
            <tbody>{body.map((r, ri) => <tr key={ri}>{r.map((c, ci) => <td key={ci} className="border-b border-white/[0.05] py-2.5 pr-4 text-muted-foreground">{inline(c)}</td>)}</tr>)}</tbody>
          </table>
        </div>,
      );
      continue;
    }
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) { items.push(lines[i].slice(2)); i += 1; }
      out.push(
        <ul key={`u${i}`} className="my-4 space-y-2.5">
          {items.map((it, k) => (
            <li key={k} className="flex gap-3 text-[0.9375rem] leading-[1.75] text-muted-foreground">
              <span className="mt-0.5 shrink-0 font-mono text-xs text-accent" aria-hidden="true">·</span>
              <span>{inline(it)}</span>
            </li>
          ))}
        </ul>,
      );
      continue;
    }
    if (line.startsWith("---")) { out.push(<hr key={`h${i}`} className="my-8 border-white/[0.08]" />); i += 1; continue; }
    const heading = /^(#{1,3})\s+(.*)$/.exec(line);
    if (heading) {
      const level = heading[1].length;
      const cls = level === 1
        ? "font-display text-2xl font-medium tracking-[-0.02em] text-foreground md:text-[1.75rem]"
        : level === 2
          ? "mt-8 font-display text-lg font-medium text-foreground"
          : "mt-6 text-sm font-medium text-foreground";
      out.push(<p key={`h${i}`} className={cls}>{inline(heading[2])}</p>);
      i += 1;
      continue;
    }
    out.push(<p key={`p${i}`} className="mt-4 text-[0.9375rem] leading-[1.8] text-muted-foreground">{inline(line)}</p>);
    i += 1;
  }
  return <div>{out}</div>;
}
