"use client";

import { motion, useReducedMotion } from "framer-motion";

import { aboutData } from "@/lib/data";
import { AboutVisual } from "./AboutVisual";

/* ─── Animation constants ─── */
const ease = [0.22, 1, 0.36, 1] as const;

function useReveal(i: number) {
  const prefersReducedMotion = useReducedMotion();
  return {
    initial: prefersReducedMotion ? false : ({ opacity: 0, y: 20 } as const),
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" } as const,
    transition: {
      duration: 0.55,
      delay: prefersReducedMotion ? 0 : 0.08 * i,
      ease,
    },
  };
}

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 sm:py-32"
      aria-labelledby="about-heading"
    >
      {/* Subtle background continuity */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(139,92,246,0.06),transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="bg-noise pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
        aria-hidden="true"
      />

      {/* Section divider */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-px w-[min(100%,600px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* ─── Left: Text ─── */}
          <div>
            {/* Eyebrow */}
            <motion.p
              {...useReveal(0)}
              className="mb-4 font-mono text-xs tracking-[0.22em] text-accent uppercase"
            >
              {aboutData.eyebrow}
            </motion.p>

            {/* Heading */}
            <motion.h2
              {...useReveal(1)}
              id="about-heading"
              className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              {aboutData.heading[0]}
              <br />
              <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
                {aboutData.heading[1]}
              </span>
            </motion.h2>

            {/* Paragraphs */}
            {aboutData.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                {...useReveal(i + 2)}
                className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
              >
                {p}
              </motion.p>
            ))}

            {/* Decorative line */}
            <motion.div
              {...useReveal(4)}
              className="mt-8 flex items-center gap-3"
            >
              <div className="h-px w-12 bg-accent/40" />
              <span className="font-mono text-[11px] tracking-[0.18em] text-muted/50 uppercase">
                Bengaluru, Karnataka
              </span>
            </motion.div>
          </div>

          {/* ─── Right: Visual Card ─── */}
          <div className="flex justify-center lg:justify-end">
            <AboutVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
