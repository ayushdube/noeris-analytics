"use client";

import { useEffect, useRef, useState } from "react";

interface ParallaxPoint {
  x: number;
  y: number;
}

interface ViewportSize {
  width: number;
  height: number;
}

export function useMouseParallax(strength = 1) {
  const raw = useRef<ParallaxPoint>({ x: 0, y: 0 });
  const [smoothed, setSmoothed] = useState<ParallaxPoint>({ x: 0, y: 0 });
  const [viewport, setViewport] = useState<ViewportSize>({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const updateViewport = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };
    updateViewport();

    const onMouseMove = (event: MouseEvent) => {
      raw.current = {
        x: event.clientX / window.innerWidth - 0.5,
        y: event.clientY / window.innerHeight - 0.5,
      };
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("resize", updateViewport, { passive: true });

    let frame = 0;

    const tick = () => {
      setSmoothed((previous) => ({
        x: previous.x + (raw.current.x * strength - previous.x) * 0.06,
        y: previous.y + (raw.current.y * strength - previous.y) * 0.06,
      }));
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", updateViewport);
      cancelAnimationFrame(frame);
    };
  }, [strength]);

  return { ...smoothed, viewport };
}

export function parallaxTranslate(
  parallax: ParallaxPoint,
  viewport: ViewportSize,
  depth: number,
) {
  const x = parallax.x * viewport.width * 0.05 * depth;
  const y = parallax.y * viewport.height * 0.05 * depth;
  return `translate3d(${x}px, ${y}px, 0)`;
}
