"use client";

import { useEffect, useRef, useState } from "react";

const CONFIG = {
  // Particles
  particleCount: 120,
  particleBaseSpeed: 0.18,
  particleSpeedVariance: 0.22,
  particleBaseSize: 1.4,
  maxSize: 3.5,
  particleBaseOpacity: 0.45,
  peakOpacity: 0.9,
  particleColor: "255, 255, 255",
  accentColor: "255, 2, 52",

  // Particle trail
  trailLength: 12,
  trailOpacityDecay: 0.78,

  // Cursor gravity
  G: 4200,
  falloffExponent: 1.8,
  consumeRadius: 18,
  escapeRadius: 140,
  orbitDecay: 0.0008,
  maxVelocity: 7,
  proximityRadius: 280,

  // Field lines
  showFieldLines: true,
  fieldLineCount: 14,
  fieldLineLength: 260,
  fieldLineOpacity: 0.05,
  fieldLineSegments: 36,

  // Ink diffusion at cursor
  inkMaxDrops: 14,
  inkSpawnInterval: 65,
  inkStartRadius: 6,
  inkMaxRadius: 70,
  inkSpreadSpeed: 0.55,
  inkStartOpacity: 0.6,
  inkLerpFactor: 0.07,
  inkJitter: 14,
  inkColorInner: "255, 2, 52",
  inkColorOuter: "120, 0, 20",
  inkAsymmetry: true,

  canvasBlur: 0,
} as const;

const MOBILE_BREAKPOINT = 768;

interface TrailPoint {
  x: number;
  y: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  speed: number;
  history: TrailPoint[];
}

interface Point {
  x: number;
  y: number;
}

interface InkDrop {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  startOpacity: number;
  scaleX: number;
  scaleY: number;
  rotation: number;
  spreadSpeed: number;
}

const [PARTICLE_R, PARTICLE_G, PARTICLE_B] = CONFIG.particleColor.split(",").map((value) => Number(value.trim()));
const [ACCENT_R, ACCENT_G, ACCENT_B] = CONFIG.accentColor.split(",").map((value) => Number(value.trim()));
const [INK_INNER_R, INK_INNER_G, INK_INNER_B] = CONFIG.inkColorInner.split(",").map((value) => Number(value.trim()));
const [INK_OUTER_R, INK_OUTER_G, INK_OUTER_B] = CONFIG.inkColorOuter.split(",").map((value) => Number(value.trim()));

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * Math.max(0, Math.min(1, t));
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function getParticleCount(isMobile: boolean) {
  return isMobile ? 50 : CONFIG.particleCount;
}

function respawnParticle(particle: Particle, width: number, height: number) {
  const edge = Math.floor(Math.random() * 4);
  const centerX = width / 2;
  const centerY = height / 2;

  switch (edge) {
    case 0:
      particle.x = Math.random() * width;
      particle.y = -10;
      break;
    case 1:
      particle.x = width + 10;
      particle.y = Math.random() * height;
      break;
    case 2:
      particle.x = Math.random() * width;
      particle.y = height + 10;
      break;
    default:
      particle.x = -10;
      particle.y = Math.random() * height;
      break;
  }

  const baseAngle = Math.atan2(centerY - particle.y, centerX - particle.x);
  const spread = (Math.random() - 0.5) * Math.PI * 0.8;
  particle.speed = CONFIG.particleBaseSpeed + Math.random() * CONFIG.particleSpeedVariance;
  particle.vx = Math.cos(baseAngle + spread) * particle.speed;
  particle.vy = Math.sin(baseAngle + spread) * particle.speed;
  particle.size = CONFIG.particleBaseSize;
  particle.opacity = CONFIG.particleBaseOpacity;
  particle.history = [];
}

function createParticles(count: number, width: number, height: number): Particle[] {
  return Array.from({ length: count }, () => {
    const particle: Particle = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      size: CONFIG.particleBaseSize,
      opacity: CONFIG.particleBaseOpacity,
      speed: CONFIG.particleBaseSpeed,
      history: [],
    };
    respawnParticle(particle, width, height);
    return particle;
  });
}

function clampVelocity(particle: Particle) {
  const speed = Math.hypot(particle.vx, particle.vy);
  if (speed > CONFIG.maxVelocity) {
    particle.vx = (particle.vx / speed) * CONFIG.maxVelocity;
    particle.vy = (particle.vy / speed) * CONFIG.maxVelocity;
  }
}

function updateParticle(
  particle: Particle,
  cursor: Point,
  width: number,
  height: number,
  deltaTime: number,
) {
  if (cursor.x >= 0) {
    const dx = cursor.x - particle.x;
    const dy = cursor.y - particle.y;
    const cursorDist = Math.hypot(dx, dy);

    if (cursorDist > 0 && cursorDist <= CONFIG.escapeRadius) {
      const distClamped = Math.max(cursorDist, CONFIG.consumeRadius);
      const force = CONFIG.G / Math.pow(distClamped, CONFIG.falloffExponent);
      particle.vx += (dx / cursorDist) * force * deltaTime;
      particle.vy += (dy / cursorDist) * force * deltaTime;

      const speed = Math.hypot(particle.vx, particle.vy);
      if (speed > 0) {
        particle.vx -= (particle.vx / speed) * CONFIG.orbitDecay * speed;
        particle.vy -= (particle.vy / speed) * CONFIG.orbitDecay * speed;
      }
    }

    if (cursorDist < CONFIG.consumeRadius) {
      respawnParticle(particle, width, height);
      return;
    }
  }

  clampVelocity(particle);
  particle.x += particle.vx * deltaTime;
  particle.y += particle.vy * deltaTime;

  particle.history.unshift({ x: particle.x, y: particle.y });
  if (particle.history.length > CONFIG.trailLength) {
    particle.history.pop();
  }

  const cursorDist = cursor.x >= 0 ? Math.hypot(cursor.x - particle.x, cursor.y - particle.y) : Infinity;
  const cursorProximity = clamp(1 - cursorDist / CONFIG.proximityRadius, 0, 1);
  particle.opacity = lerp(CONFIG.particleBaseOpacity, CONFIG.peakOpacity, cursorProximity);
  particle.size = lerp(CONFIG.particleBaseSize, CONFIG.maxSize, cursorProximity);

  if (
    particle.x < -80 ||
    particle.x > width + 80 ||
    particle.y < -80 ||
    particle.y > height + 80
  ) {
    respawnParticle(particle, width, height);
  }
}

function getParticleColor(cursor: Point, particle: Particle) {
  const cursorDist =
    cursor.x >= 0 ? Math.hypot(cursor.x - particle.x, cursor.y - particle.y) : Infinity;
  const t = clamp(1 - cursorDist / CONFIG.proximityRadius, 0, 1);

  return {
    r: lerp(PARTICLE_R, ACCENT_R, t),
    g: lerp(PARTICLE_G, ACCENT_G, t),
    b: lerp(PARTICLE_B, ACCENT_B, t),
  };
}

function spawnInkDrop(inkDrops: InkDrop[], x: number, y: number) {
  inkDrops.push({
    x: x + (Math.random() - 0.5) * 2 * CONFIG.inkJitter,
    y: y + (Math.random() - 0.5) * 2 * CONFIG.inkJitter,
    radius: CONFIG.inkStartRadius,
    maxRadius: CONFIG.inkMaxRadius * (0.7 + Math.random() * 0.6),
    opacity: CONFIG.inkStartOpacity,
    startOpacity: CONFIG.inkStartOpacity,
    scaleX: CONFIG.inkAsymmetry ? 0.8 + Math.random() * 0.4 : 1,
    scaleY: CONFIG.inkAsymmetry ? 0.8 + Math.random() * 0.4 : 1,
    rotation: Math.random() * Math.PI * 2,
    spreadSpeed: CONFIG.inkSpreadSpeed * (0.7 + Math.random() * 0.6),
  });
}

function updateAndDrawInk(
  ctx: CanvasRenderingContext2D,
  cursor: Point,
  inkDrops: InkDrop[],
  inkPos: Point,
  lastInkSpawn: number,
  timestamp: number,
) {
  inkPos.x += (cursor.x - inkPos.x) * CONFIG.inkLerpFactor;
  inkPos.y += (cursor.y - inkPos.y) * CONFIG.inkLerpFactor;

  if (
    cursor.x > 0 &&
    timestamp - lastInkSpawn > CONFIG.inkSpawnInterval &&
    inkDrops.length < CONFIG.inkMaxDrops
  ) {
    spawnInkDrop(inkDrops, inkPos.x, inkPos.y);
    lastInkSpawn = timestamp;
  }

  ctx.globalCompositeOperation = "screen";

  for (let index = inkDrops.length - 1; index >= 0; index -= 1) {
    const drop = inkDrops[index];
    drop.radius += drop.spreadSpeed;
    const t = (drop.radius - CONFIG.inkStartRadius) / (drop.maxRadius - CONFIG.inkStartRadius);
    drop.opacity = drop.startOpacity * (1 - clamp(t, 0, 1)) ** 1.6;

    if (drop.radius >= drop.maxRadius || drop.opacity <= 0.01) {
      inkDrops.splice(index, 1);
      continue;
    }

    ctx.save();
    ctx.translate(drop.x, drop.y);
    ctx.rotate(drop.rotation);
    ctx.scale(drop.scaleX, drop.scaleY);

    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, drop.radius);
    gradient.addColorStop(0, `rgba(${INK_INNER_R}, ${INK_INNER_G}, ${INK_INNER_B}, ${drop.opacity})`);
    gradient.addColorStop(0.4, `rgba(${INK_INNER_R}, ${INK_INNER_G}, ${INK_INNER_B}, ${drop.opacity * 0.65})`);
    gradient.addColorStop(0.75, `rgba(${INK_OUTER_R}, ${INK_OUTER_G}, ${INK_OUTER_B}, ${drop.opacity * 0.28})`);
    gradient.addColorStop(1, `rgba(${INK_OUTER_R}, ${INK_OUTER_G}, ${INK_OUTER_B}, 0)`);

    ctx.beginPath();
    ctx.arc(0, 0, drop.radius, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.restore();
  }

  ctx.globalCompositeOperation = "source-over";

  return lastInkSpawn;
}

function drawFieldLines(ctx: CanvasRenderingContext2D, cursor: Point, timestamp: number) {
  if (!CONFIG.showFieldLines || cursor.x < 0) {
    return;
  }

  for (let lineIndex = 0; lineIndex < CONFIG.fieldLineCount; lineIndex += 1) {
    const theta = (lineIndex / CONFIG.fieldLineCount) * Math.PI * 2;
    const points: Point[] = [];

    for (let segment = 0; segment <= CONFIG.fieldLineSegments; segment += 1) {
      const progress = segment / CONFIG.fieldLineSegments;
      const stepX = cursor.x + Math.cos(theta) * progress * CONFIG.fieldLineLength;
      const stepY = cursor.y + Math.sin(theta) * progress * CONFIG.fieldLineLength;
      const waviness = Math.sin(segment * 0.4 + timestamp * 0.001) * 4 * progress;
      points.push({
        x: stepX - Math.sin(theta) * waviness,
        y: stepY + Math.cos(theta) * waviness,
      });
    }

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);

    for (let index = 1; index < points.length; index += 1) {
      const previous = points[index - 1];
      const current = points[index];
      ctx.quadraticCurveTo(previous.x, previous.y, (previous.x + current.x) / 2, (previous.y + current.y) / 2);
    }

    const last = points[points.length - 1];
    ctx.lineTo(last.x, last.y);

    const gradient = ctx.createLinearGradient(cursor.x, cursor.y, last.x, last.y);
    gradient.addColorStop(0, `rgba(${ACCENT_R}, ${ACCENT_G}, ${ACCENT_B}, ${CONFIG.fieldLineOpacity})`);
    gradient.addColorStop(1, `rgba(${ACCENT_R}, ${ACCENT_G}, ${ACCENT_B}, 0)`);

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 1;
    ctx.stroke();
  }
}

function drawParticleTrails(ctx: CanvasRenderingContext2D, particles: Particle[], cursor: Point) {
  for (const particle of particles) {
    const color = getParticleColor(cursor, particle);

    for (let index = 0; index < particle.history.length; index += 1) {
      const position = particle.history[index];
      const trailOpacity =
        particle.opacity * CONFIG.trailOpacityDecay ** index * (1 - index / CONFIG.trailLength);
      const trailSize = Math.max(particle.size * (1 - index / CONFIG.trailLength) * 0.5, 0.3);

      ctx.beginPath();
      ctx.arc(position.x, position.y, trailSize, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${trailOpacity})`;
      ctx.fill();
    }
  }
}

function drawParticles(ctx: CanvasRenderingContext2D, particles: Particle[], cursor: Point) {
  for (const particle of particles) {
    const color = getParticleColor(cursor, particle);

    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${particle.opacity})`;
    ctx.fill();
  }
}

function drawFrame(
  ctx: CanvasRenderingContext2D,
  particles: Particle[],
  cursor: Point,
  inkDrops: InkDrop[],
  inkPos: Point,
  lastInkSpawn: number,
  width: number,
  height: number,
  timestamp: number,
  deltaTime: number,
) {
  ctx.clearRect(0, 0, width, height);

  for (const particle of particles) {
    updateParticle(particle, cursor, width, height, deltaTime);
  }

  drawFieldLines(ctx, cursor, timestamp);
  const nextInkSpawn = updateAndDrawInk(ctx, cursor, inkDrops, inkPos, lastInkSpawn, timestamp);
  drawParticleTrails(ctx, particles, cursor);
  drawParticles(ctx, particles, cursor);

  return nextInkSpawn;
}

export function MagneticBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<Point>({ x: -9999, y: -9999 });
  const rafRef = useRef(0);
  const lastFrameRef = useRef(0);
  const particlesRef = useRef<Particle[]>([]);
  const inkDropsRef = useRef<InkDrop[]>([]);
  const inkPosRef = useRef<Point>({ x: -9999, y: -9999 });
  const lastInkSpawnRef = useRef(0);
  const sizeRef = useRef({ width: 0, height: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setActive(true);
  }, []);

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let running = false;

    const initializeScene = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isMobile = width < MOBILE_BREAKPOINT;

      sizeRef.current = { width, height };
      particlesRef.current = createParticles(getParticleCount(isMobile), width, height);
    };

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = "100vw";
      canvas.style.height = "100vh";
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      initializeScene();

      if (!running) {
        running = true;
        lastFrameRef.current = performance.now();
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    const onMouseMove = (event: MouseEvent) => {
      mouseRef.current = { x: event.clientX, y: event.clientY };
    };

    const tick = (timestamp: number) => {
      const deltaTime = clamp((timestamp - lastFrameRef.current) / 16.67, 0.5, 2);
      lastFrameRef.current = timestamp;

      const { width, height } = sizeRef.current;
      lastInkSpawnRef.current = drawFrame(
        ctx,
        particlesRef.current,
        mouseRef.current,
        inkDropsRef.current,
        inkPosRef.current,
        lastInkSpawnRef.current,
        width,
        height,
        timestamp,
        deltaTime,
      );
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
      style={CONFIG.canvasBlur > 0 ? { filter: `blur(${CONFIG.canvasBlur}px)` } : undefined}
    />
  );
}
