"use client";

import { useEffect, useRef, useState } from "react";

const CONFIG = {
  // Layout
  spacing: 50,
  dotRadius: 1.5,
  gridOffsetX: 0,
  gridOffsetY: 0,

  // Colors
  baseColor: "rgba(255, 255, 255, 0.05)",
  accentColor: "rgba(255, 2, 52, 0.5)",
  hotColor: "rgba(255, 255, 255, 0.6)",

  // Magnetic field
  influenceRadius: 120,
  pushStrength: 30,
  attract: false,

  // Physics
  damping: 0.85,
  spring: 0.12,

  // Dot size pulse near cursor
  radiusPulse: true,
  maxRadiusMultiplier: 2.5,

  // Radial edge fade
  edgeFade: true,
  edgeFadeDistance: 180,
} as const;

const MOBILE_BREAKPOINT = 768;
const HOT_DISTANCE = 30;

interface Dot {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
}

interface Rgba {
  r: number;
  g: number;
  b: number;
  a: number;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * clamp(t, 0, 1);
}

function parseRgba(color: string): Rgba {
  const match = color.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)/i);
  if (!match) {
    return { r: 255, g: 255, b: 255, a: 1 };
  }

  return {
    r: Number(match[1]),
    g: Number(match[2]),
    b: Number(match[3]),
    a: match[4] !== undefined ? Number(match[4]) : 1,
  };
}

const BASE_RGBA = parseRgba(CONFIG.baseColor);
const ACCENT_RGBA = parseRgba(CONFIG.accentColor);
const HOT_RGBA = parseRgba(CONFIG.hotColor);

function lerpRgba(from: Rgba, to: Rgba, t: number): Rgba {
  return {
    r: lerp(from.r, to.r, t),
    g: lerp(from.g, to.g, t),
    b: lerp(from.b, to.b, t),
    a: lerp(from.a, to.a, t),
  };
}

function rgbaToString(color: Rgba, alphaMultiplier = 1) {
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a * alphaMultiplier})`;
}

function buildGrid(width: number, height: number): Dot[] {
  const dots: Dot[] = [];

  for (
    let originY = CONFIG.gridOffsetY;
    originY <= height + CONFIG.spacing;
    originY += CONFIG.spacing
  ) {
    for (
      let originX = CONFIG.gridOffsetX;
      originX <= width + CONFIG.spacing;
      originX += CONFIG.spacing
    ) {
      dots.push({
        x: originX,
        y: originY,
        originX,
        originY,
        vx: 0,
        vy: 0,
      });
    }
  }

  return dots;
}

function edgeFadeMultiplier(x: number, y: number, width: number, height: number) {
  if (!CONFIG.edgeFade) {
    return 1;
  }

  const distances = [x, y, width - x, height - y];
  const nearestEdge = Math.min(...distances);
  return clamp(nearestEdge / CONFIG.edgeFadeDistance, 0, 1);
}

export function MagneticBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const dotsRef = useRef<Dot[]>([]);
  const rafRef = useRef(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < MOBILE_BREAKPOINT) return;

    setActive(true);
  }, []);

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let running = false;

    const resizeCanvas = () => {
      if (window.innerWidth < MOBILE_BREAKPOINT) {
        if (running) {
          cancelAnimationFrame(rafRef.current);
          running = false;
        }
        return;
      }

      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      dotsRef.current = buildGrid(width, height);

      if (!running) {
        running = true;
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    const onMouseMove = (event: MouseEvent) => {
      mouseRef.current = { x: event.clientX, y: event.clientY };
    };

    const tick = () => {
      if (window.innerWidth < MOBILE_BREAKPOINT) {
        running = false;
        return;
      }

      const mouse = mouseRef.current;
      const dots = dotsRef.current;

      ctx.clearRect(0, 0, width, height);

      for (const dot of dots) {
        const dx = mouse.x - dot.originX;
        const dy = mouse.y - dot.originY;
        const distance = Math.hypot(dot.x - mouse.x, dot.y - mouse.y);

        let radius = CONFIG.dotRadius;
        let fillColor = BASE_RGBA;

        if (distance < CONFIG.influenceRadius && distance > 0) {
          const directionX = dx / Math.hypot(dx, dy) || 0;
          const directionY = dy / Math.hypot(dx, dy) || 0;
          const proximity = 1 - distance / CONFIG.influenceRadius;
          const force = proximity * CONFIG.pushStrength;
          const forceSign = CONFIG.attract ? 1 : -1;

          dot.vx += directionX * force * forceSign;
          dot.vy += directionY * force * forceSign;

          fillColor = lerpRgba(BASE_RGBA, ACCENT_RGBA, proximity);

          if (distance < HOT_DISTANCE) {
            fillColor = HOT_RGBA;
          }

          if (CONFIG.radiusPulse) {
            radius = CONFIG.dotRadius * lerp(1, CONFIG.maxRadiusMultiplier, proximity);
          }
        }

        dot.vx += (dot.originX - dot.x) * CONFIG.spring;
        dot.vy += (dot.originY - dot.y) * CONFIG.spring;
        dot.vx *= CONFIG.damping;
        dot.vy *= CONFIG.damping;
        dot.x += dot.vx;
        dot.y += dot.vy;

        const alphaMultiplier = edgeFadeMultiplier(dot.x, dot.y, width, height);
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = rgbaToString(fillColor, alphaMultiplier);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    resizeCanvas();
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("resize", resizeCanvas, { passive: true });

    return () => {
      running = false;
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [active]);

  if (!active) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-screen w-screen"
    />
  );
}
