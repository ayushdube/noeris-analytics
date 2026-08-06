"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import "./PageLoader.css";

type Phase = "animating" | "holding" | "fading" | "done";

type Particle = {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  color: string;
  size: number;
  delay: number;
  duration: number;
  isRed: boolean;
};

const LOGO_SIZE = 200;
const CRISP_LOGO_SIZE = 400;
const SAMPLE_STEP = 3;
const HOLD_MS = 600;
const FADE_MS = 500;
const SMOOTH_REVEAL_MS = 450;
const BRAND_RED = "#FF0234";

function isRedPixel(r: number, g: number, b: number): boolean {
  return r > 180 && g < 80 && b < 80;
}

interface PageLoaderProps {
  onComplete: () => void;
}

export function PageLoader({ onComplete }: PageLoaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const startTimeRef = useRef<number>(0);
  const fadingStartRef = useRef<number>(0);
  const holdingStartRef = useRef<number>(0);
  const phaseRef = useRef<Phase>("animating");
  const completedRef = useRef(false);
  const holdScheduledRef = useRef(false);
  const holdTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [phase, setPhase] = useState<Phase>("animating");
  const [skipped, setSkipped] = useState(false);

  const finish = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    cancelAnimationFrame(rafRef.current);
    if (holdTimeoutRef.current) clearTimeout(holdTimeoutRef.current);
    phaseRef.current = "done";
    setPhase("done");
    sessionStorage.setItem("noeris_intro_seen", "1");
    onComplete();
  }, [onComplete]);

  const handleSkip = useCallback(() => {
    finish();
  }, [finish]);

  useEffect(() => {
    if (sessionStorage.getItem("noeris_intro_seen")) {
      onComplete();
      setSkipped(true);
    }
  }, [onComplete]);

  useEffect(() => {
    if (skipped) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      finish();
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const setupCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setupCanvas();

    const drawBackground = () => {
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, width, height);
    };

    const drawParticle = (particle: Particle, x: number, y: number, withRedGlow: boolean) => {
      if (withRedGlow && particle.isRed) {
        ctx.shadowBlur = 12;
        ctx.shadowColor = BRAND_RED;
      } else {
        ctx.shadowBlur = 0;
      }

      ctx.fillStyle = particle.color;
      ctx.fillRect(x, y, particle.size, particle.size);
      ctx.shadowBlur = 0;
    };

    const drawLogoAtTargets = (alpha: number, withRedGlow: boolean) => {
      ctx.save();
      ctx.globalAlpha = alpha;
      for (const particle of particlesRef.current) {
        drawParticle(particle, particle.targetX, particle.targetY, withRedGlow && alpha > 0.5);
      }
      ctx.restore();
    };

    const getLogoPosition = () => ({
      x: width / 2 - LOGO_SIZE / 2,
      y: height / 2 - LOGO_SIZE / 2,
    });

    const drawCrispLogo = (
      crispCanvas: HTMLCanvasElement,
      alpha: number,
      withGlow: boolean,
    ) => {
      const { x, y } = getLogoPosition();

      ctx.save();
      ctx.globalAlpha = alpha;

      if (withGlow) {
        ctx.shadowBlur = 20;
        ctx.shadowColor = BRAND_RED;
      }

      ctx.drawImage(crispCanvas, x, y, LOGO_SIZE, LOGO_SIZE);
      ctx.restore();
    };

    const drawSettledLogo = (
      now: number,
      crispCanvas: HTMLCanvasElement,
      withGlow: boolean,
    ) => {
      const revealT = Math.min(1, (now - holdingStartRef.current) / SMOOTH_REVEAL_MS);
      const particleAlpha = 1 - revealT;
      const logoAlpha = revealT;

      if (particleAlpha > 0) {
        drawLogoAtTargets(particleAlpha, withGlow);
      }

      if (logoAlpha > 0) {
        drawCrispLogo(crispCanvas, logoAlpha, withGlow && revealT > 0.6);
      }
    };

    const sampleParticlesFromImage = (imageData: ImageData) => {
      const centerX = width / 2;
      const centerY = height / 2;
      const particles: Particle[] = [];

      for (let y = 0; y < LOGO_SIZE; y += SAMPLE_STEP) {
        for (let x = 0; x < LOGO_SIZE; x += SAMPLE_STEP) {
          const i = (y * LOGO_SIZE + x) * 4;
          const r = imageData.data[i] ?? 0;
          const g = imageData.data[i + 1] ?? 0;
          const b = imageData.data[i + 2] ?? 0;
          const a = imageData.data[i + 3] ?? 0;

          if (a < 20) continue;

          particles.push({
            x: Math.random() * width * 1.4 - width * 0.2,
            y: Math.random() * height * 1.4 - height * 0.2,
            targetX: centerX - LOGO_SIZE / 2 + x,
            targetY: centerY - LOGO_SIZE / 2 + y,
            color: `rgb(${r},${g},${b})`,
            size: SAMPLE_STEP,
            delay: Math.random() * 1200,
            duration: 1600 + Math.random() * 1200,
            isRed: isRedPixel(r, g, b),
          });
        }
      }

      particlesRef.current = particles;
    };

    const animate = (now: number, crispCanvas: HTMLCanvasElement) => {
      if (phaseRef.current === "done") return;

      drawBackground();

      if (phaseRef.current === "fading") {
        drawCrispLogo(crispCanvas, 1, false);

        const fadeElapsed = now - fadingStartRef.current;
        const fadeOpacity = Math.min(1, fadeElapsed / FADE_MS);

        ctx.fillStyle = `rgba(10, 10, 10, ${fadeOpacity})`;
        ctx.fillRect(0, 0, width, height);

        if (fadeOpacity >= 1) {
          finish();
          return;
        }

        rafRef.current = requestAnimationFrame((t) => animate(t, crispCanvas));
        return;
      }

      if (phaseRef.current === "holding") {
        drawSettledLogo(now, crispCanvas, true);
        rafRef.current = requestAnimationFrame((t) => animate(t, crispCanvas));
        return;
      }

      let allArrived = true;
      const elapsed = now - startTimeRef.current;

      for (const particle of particlesRef.current) {
        const particleElapsed = elapsed - particle.delay;

        if (particleElapsed <= 0) {
          drawParticle(particle, particle.x, particle.y, false);
          allArrived = false;
          continue;
        }

        const t = Math.min(particleElapsed / particle.duration, 1);
        const ease = 1 - (1 - t) ** 3;
        const x = particle.x + (particle.targetX - particle.x) * ease;
        const y = particle.y + (particle.targetY - particle.y) * ease;

        drawParticle(particle, x, y, false);

        if (t < 1) allArrived = false;
      }

      if (allArrived && !holdScheduledRef.current && particlesRef.current.length > 0) {
        holdScheduledRef.current = true;
        phaseRef.current = "holding";
        holdingStartRef.current = performance.now();
        setPhase("holding");

        holdTimeoutRef.current = setTimeout(() => {
          phaseRef.current = "fading";
          fadingStartRef.current = performance.now();
          setPhase("fading");
        }, HOLD_MS);
      }

      rafRef.current = requestAnimationFrame((t) => animate(t, crispCanvas));
    };

    const img = new Image();
    img.src = "/brand/logo-mark.svg";

    img.onload = () => {
      const offscreen = document.createElement("canvas");
      offscreen.width = LOGO_SIZE;
      offscreen.height = LOGO_SIZE;

      const offscreenCtx = offscreen.getContext("2d");
      if (!offscreenCtx) return;

      offscreenCtx.drawImage(img, 0, 0, LOGO_SIZE, LOGO_SIZE);
      const imageData = offscreenCtx.getImageData(0, 0, LOGO_SIZE, LOGO_SIZE);

      const crispCanvas = document.createElement("canvas");
      crispCanvas.width = CRISP_LOGO_SIZE;
      crispCanvas.height = CRISP_LOGO_SIZE;
      const crispCtx = crispCanvas.getContext("2d");
      if (!crispCtx) return;

      crispCtx.drawImage(img, 0, 0, CRISP_LOGO_SIZE, CRISP_LOGO_SIZE);

      sampleParticlesFromImage(imageData);
      startTimeRef.current = performance.now();
      rafRef.current = requestAnimationFrame((t) => animate(t, crispCanvas));
    };

    img.onerror = () => {
      finish();
    };

    const handleResize = () => {
      setupCanvas();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      img.onload = null;
      img.onerror = null;
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(rafRef.current);
      if (holdTimeoutRef.current) clearTimeout(holdTimeoutRef.current);
    };
  }, [skipped, finish]);

  if (skipped || phase === "done") return null;

  return (
    <div className="page-loader" aria-label="Loading Noeris Analytics">
      <button type="button" className="page-loader__skip" onClick={handleSkip}>
        SKIP INTRO
      </button>
      <canvas
        ref={canvasRef}
        className="page-loader__canvas"
        aria-hidden="true"
        role="presentation"
      />
    </div>
  );
}
