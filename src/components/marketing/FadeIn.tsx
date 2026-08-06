"use client";

import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  return (
    <div className={cn("animate-in-fade", className)} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}
