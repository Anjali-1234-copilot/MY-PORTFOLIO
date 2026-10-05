"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* ───────────────────────────────────────────────
   AI-inspired animated network orb
   Pure canvas + CSS — no external 3D library
   ─────────────────────────────────────────────── */

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  brightness: number;
  phase: number;
}

const NODE_COUNT = 20;
const CONNECTION_DISTANCE = 110;
const NODE_SPEED = 0.1;

function createNodes(w: number, h: number): Node[] {
  const cx = w / 2;
  const cy = h / 2;
  const spread = Math.min(w, h) * 0.38;

  return Array.from({ length: NODE_COUNT }, () => {
    const angle = Math.random() * Math.PI * 2;
    const dist = Math.random() * spread;
    return {
      x: cx + Math.cos(angle) * dist,
      y: cy + Math.sin(angle) * dist,
      vx: (Math.random() - 0.5) * NODE_SPEED,
      vy: (Math.random() - 0.5) * NODE_SPEED,
      radius: 1.2 + Math.random() * 1.8,
      brightness: 0.4 + Math.random() * 0.6,
      phase: Math.random() * Math.PI * 2,
    };
  });
}

export function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const prefersReducedMotion = useReducedMotion();

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const rect = container.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    nodesRef.current = createNodes(rect.width, rect.height);
  }, []);

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [resize]);

  /* Pointer tracking for subtle interactivity */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const onMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };
    const onLeave = () => {
      mouseRef.current.active = false;
    };
    container.addEventListener("pointermove", onMove);
    container.addEventListener("pointerleave", onLeave);
    return () => {
      container.removeEventListener("pointermove", onMove);
      container.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  /* Animation loop */
  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;
    const accentRGB = "139, 92, 246"; // --accent
    const cyanRGB = "34, 211, 238"; // --accent-secondary

    const animate = () => {
      time += 0.008;
      const w = canvas.width / (Math.min(window.devicePixelRatio || 1, 2));
      const h = canvas.height / (Math.min(window.devicePixelRatio || 1, 2));
      const cx = w / 2;
      const cy = h / 2;
      const bounds = Math.min(w, h) * 0.44;

      ctx.clearRect(0, 0, w, h);

      const nodes = nodesRef.current;
      const mouse = mouseRef.current;

      /* Update node positions */
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        /* Gentle pull toward center */
        const dx = cx - node.x;
        const dy = cy - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > bounds) {
          node.vx += (dx / dist) * 0.02;
          node.vy += (dy / dist) * 0.02;
        }

        /* Subtle mouse repulsion */
        if (mouse.active) {
          const mdx = node.x - mouse.x;
          const mdy = node.y - mouse.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < 100 && mDist > 0) {
            const force = (100 - mDist) / 100 * 0.15;
            node.vx += (mdx / mDist) * force;
            node.vy += (mdy / mDist) * force;
          }
        }

        /* Damping */
        node.vx *= 0.995;
        node.vy *= 0.995;
      }

      /* Draw connections */
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.15;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${accentRGB}, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      /* Draw nodes */
      for (const node of nodes) {
        const pulse = Math.sin(time * 2 + node.phase) * 0.3 + 0.7;
        const alpha = node.brightness * pulse;
        const useAccent = node.phase > Math.PI;
        const rgb = useAccent ? accentRGB : cyanRGB;

        /* Glow */
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${alpha * 0.08})`;
        ctx.fill();

        /* Core */
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${alpha * 0.7})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [prefersReducedMotion]);

  return (
    <motion.div
      ref={containerRef}
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="hero-visual-container relative aspect-square w-full max-w-[520px]"
      aria-hidden="true"
    >
      {/* Outer ring glow */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.05)_0%,transparent_60%)]" />

      {/* Orbiting ring */}
      <div className="hero-orbit absolute inset-4 rounded-full border border-accent/[0.04]">
        <div className="hero-orbit-dot absolute -top-1 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-accent/30 shadow-[0_0_6px_rgba(139,92,246,0.3)]" />
      </div>

      {/* Second orbit */}
      <div className="hero-orbit-reverse absolute inset-12 rounded-full border border-accent-secondary/[0.03]">
        <div className="hero-orbit-dot absolute -bottom-1 left-1/2 size-1 -translate-x-1/2 rounded-full bg-accent-secondary/30 shadow-[0_0_4px_rgba(34,211,238,0.3)]" />
      </div>

      <canvas ref={canvasRef} className="absolute inset-0 size-full" />

      {/* Floating labels */}
      <div className="hero-float-label absolute top-[18%] right-[12%] rounded-md border border-border/50 bg-surface/60 px-2 py-1 font-mono text-[10px] tracking-wider text-accent/70 backdrop-blur-sm">
        AI
      </div>
      <div className="hero-float-label-delayed absolute bottom-[22%] left-[10%] rounded-md border border-border/50 bg-surface/60 px-2 py-1 font-mono text-[10px] tracking-wider text-accent-secondary/70 backdrop-blur-sm">
        CV
      </div>
      <div className="hero-float-label-slow absolute top-[60%] right-[8%] rounded-md border border-border/50 bg-surface/60 px-2 py-1 font-mono text-[10px] tracking-wider text-muted/50 backdrop-blur-sm">
        ML
      </div>
    </motion.div>
  );
}
