"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { navItems } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileMenu({ isOpen, onClose, pathname }: MobileMenuProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
      return () => cancelAnimationFrame(frame);
    }

    setVisible(false);
    const timeout = window.setTimeout(() => setMounted(false), 480);
    return () => window.clearTimeout(timeout);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const activeIdx = navItems.findIndex((item) => isActivePath(pathname, item.href));
      setExpandedIndex(activeIdx >= 0 ? activeIdx : null);
    }
  }, [isOpen, pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col overflow-hidden"
      style={{
        backgroundColor: "#0e0e0d",
        clipPath: visible
          ? "inset(0 0 0% 0)"
          : isOpen
            ? "inset(0 0 100% 0)"
            : "inset(100% 0 0% 0)",
        transition: visible
          ? "clip-path 550ms cubic-bezier(0.76, 0, 0.24, 1)"
          : "clip-path 450ms cubic-bezier(0.76, 0, 0.24, 1)",
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
    >
      <div
        className="flex h-14 shrink-0 items-center justify-between border-b border-white/[0.06]"
        style={{ padding: "0 20px" }}
      >
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center gap-2 outline-none"
          aria-label="Noeris Analytics home"
        >
          <div
            className="flex h-[26px] w-[26px] items-center justify-center rounded-md bg-[#ff0234] text-xs font-bold text-white"
            aria-hidden="true"
          >
            N
          </div>
          <div className="leading-none">
            <div className="font-sans text-[11px] font-semibold text-white">Noeris</div>
            <div className="mt-0.5 font-mono text-[7px] uppercase tracking-[0.15em] text-white/30">
              Analytics
            </div>
          </div>
        </Link>

        <button
          type="button"
          onClick={onClose}
          className="flex items-center gap-1.5"
          aria-label="Close menu"
        >
          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/30">
            Close
          </span>
          <span className="text-[13px] text-white/40" aria-hidden="true">
            ×
          </span>
        </button>
      </div>

      <nav
        className="min-h-0 flex-1 overflow-y-auto overscroll-contain"
        style={{ padding: "28px 20px 0" }}
        aria-label="Mobile navigation"
      >
        {navItems.map((item, index) => {
          const isActive = isActivePath(pathname, item.href);
          const isExpanded = expandedIndex === index;
          const hasChildren = Boolean(item.children?.length);
          const isCaseStudies = item.href === "/case-studies";
          const isExpandable = hasChildren && !isCaseStudies;

          return (
            <div
              key={item.href}
              style={{
                overflow: "hidden",
                transitionDelay: `${80 + index * 60}ms`,
                transform: visible ? "translateY(0)" : "translateY(100%)",
                opacity: visible ? 1 : 0,
                transition:
                  "transform 500ms cubic-bezier(0.76, 0, 0.24, 1), opacity 300ms ease",
              }}
            >
              <div
                role="button"
                tabIndex={0}
                onClick={() => {
                  if (isExpandable) {
                    setExpandedIndex(isExpanded ? null : index);
                  } else {
                    router.push(item.href);
                    onClose();
                  }
                }}
                onKeyDown={(event) => {
                  if (event.key !== "Enter" && event.key !== " ") return;
                  event.preventDefault();
                  if (isExpandable) {
                    setExpandedIndex(isExpanded ? null : index);
                  } else {
                    router.push(item.href);
                    onClose();
                  }
                }}
                className="group cursor-pointer select-none"
                style={{
                  borderLeft: isActive ? "2px solid #ff0234" : "2px solid transparent",
                  paddingLeft: "12px",
                  marginBottom: "14px",
                }}
                aria-expanded={isExpandable ? isExpanded : undefined}
                aria-current={isActive ? "page" : undefined}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "font-display text-[22px] font-medium leading-none tracking-[-0.02em] transition-colors duration-200",
                      isActive ? "text-white" : "text-white/45 group-hover:text-white/75",
                    )}
                  >
                    {item.label}
                  </span>

                  {hasChildren ? (
                    <span
                      className={cn(
                        "shrink-0 rounded-[3px] border px-[5px] py-0.5 font-mono text-[9px] leading-[1.4] tracking-[0.04em] transition-all duration-200",
                        isExpandable && isExpanded
                          ? "border-[rgba(255,2,52,0.3)] text-[rgba(255,2,52,0.7)]"
                          : "border-white/10 text-white/20 group-hover:border-white/[0.18]",
                      )}
                    >
                      {item.children!.length}
                      {isExpandable ? (isExpanded ? " ↑" : " ↓") : null}
                    </span>
                  ) : null}
                </div>
              </div>

              {isExpandable ? (
                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: isExpanded ? "1fr" : "0fr",
                    transition: "grid-template-rows 320ms cubic-bezier(0.76, 0, 0.24, 1)",
                    marginTop: "-8px",
                    marginBottom: isExpanded ? "14px" : "6px",
                  }}
                >
                  <div style={{ overflow: "hidden" }}>
                    <div
                      style={{
                        paddingLeft: "26px",
                        paddingBottom: "8px",
                        paddingTop: "4px",
                      }}
                    >
                      {item.children!.map((child, childIndex) => {
                        const childActive = isActivePath(pathname, child.href);

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={onClose}
                            style={{
                              display: "block",
                              fontSize: "14px",
                              fontFamily: "sans-serif",
                              color: childActive
                                ? "rgba(255,255,255,0.75)"
                                : "rgba(255,255,255,0.4)",
                              padding: "10px 0",
                              borderBottom:
                                childIndex < item.children!.length - 1
                                  ? "1px solid rgba(255,255,255,0.05)"
                                  : "none",
                              transition: "color 150ms ease",
                              textDecoration: "none",
                            }}
                          >
                            {child.label}
                          </Link>
                        );
                      })}

                      <Link
                        href={item.href}
                        onClick={onClose}
                        style={{
                          display: "block",
                          fontSize: "10px",
                          fontFamily: "monospace",
                          letterSpacing: "0.08em",
                          color: "rgba(255,2,52,0.5)",
                          paddingTop: "8px",
                          textDecoration: "none",
                          textTransform: "uppercase",
                        }}
                      >
                        View all {item.label.toLowerCase()} →
                      </Link>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </nav>

      <div
        className="mx-5 shrink-0 border-t border-white/[0.06] pt-4"
        style={{ paddingBottom: "max(20px, env(safe-area-inset-bottom))" }}
      >
        <p className="mb-3 font-mono text-[8px] uppercase tracking-[0.12em] text-white/[0.22]">
          {siteConfig.email}
        </p>

        <Link
          href="/contact"
          onClick={onClose}
          className="flex h-11 items-center justify-center rounded-[10px] bg-[#ff0234] px-4 hover:bg-[#ff0234]/90"
        >
          <span className="font-sans text-sm font-medium text-white">Book a call</span>
        </Link>
      </div>
    </div>
  );
}
