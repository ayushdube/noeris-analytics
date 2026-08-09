"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import type { NavItem } from "@/lib/navigation";
import { cn } from "@/lib/utils";

interface NavDropdownProps {
  item: NavItem;
  active: boolean;
  pathname: string;
}

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavDropdown({ item, active, pathname }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimeout = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  };

  const handleOpen = () => {
    clearCloseTimeout();
    setOpen(true);
  };

  const handleClose = () => {
    clearCloseTimeout();
    closeTimeout.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    return () => clearCloseTimeout();
  }, []);

  if (!item.children?.length) {
    return (
      <Link
        href={item.href}
        className={cn(
          "rounded-full px-3.5 py-2 text-[13px] font-medium tracking-wide transition-all duration-300",
          active
            ? "bg-surface-raised text-accent shadow-sm shadow-black/20"
            : "text-muted-foreground hover:bg-white/[0.04] hover:text-foreground",
        )}
        aria-current={active ? "page" : undefined}
      >
        {item.label}
      </Link>
    );
  }

  const twoColumns = item.columns === 2;

  return (
    <div className="relative" onMouseEnter={handleOpen} onMouseLeave={handleClose}>
      <Link
        href={item.href}
        className={cn(
          "rounded-full px-3.5 py-2 text-[13px] font-medium tracking-wide transition-all duration-300",
          active || open
            ? "bg-surface-raised text-accent shadow-sm shadow-black/20"
            : "text-muted-foreground hover:bg-white/[0.04] hover:text-foreground",
        )}
        aria-current={active ? "page" : undefined}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
      </Link>

      <div
        className={cn(
          "absolute left-1/2 top-[calc(100%+0.5rem)] z-50 -translate-x-1/2 pt-1 transition-all duration-300",
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-1 scale-[0.98] opacity-0",
        )}
      >
        <div
          className={cn(
            "origin-top overflow-hidden rounded-xl border border-white/[0.08] bg-surface/95 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.65)] backdrop-blur-xl",
            twoColumns ? "w-[28rem]" : "w-[15.5rem]",
          )}
        >
          <div className={cn("p-2", twoColumns && "grid grid-cols-2 gap-x-1")}>
            {item.children.map((child) => {
              const childActive = isActivePath(pathname, child.href);

              return (
                <Link
                  key={child.href}
                  href={child.href}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-[13px] leading-snug transition-colors duration-200",
                    childActive
                      ? "bg-surface-raised text-accent shadow-sm shadow-black/20"
                      : "text-muted-foreground hover:bg-white/[0.04] hover:text-foreground",
                  )}
                  aria-current={childActive ? "page" : undefined}
                >
                  {child.label}
                </Link>
              );
            })}
          </div>

          <div className="border-t border-white/[0.06] px-2 py-2">
            <Link
              href={item.href}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-white/[0.04] hover:text-foreground"
            >
              View all {item.label.toLowerCase()} →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
