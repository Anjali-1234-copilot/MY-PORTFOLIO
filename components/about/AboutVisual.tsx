"use client";

import { motion, useReducedMotion } from "framer-motion";

import { aboutData } from "@/lib/data";

/* ─── Animation constants ─── */
const ease = [0.22, 1, 0.36, 1] as const;

export function AboutVisual() {
  const prefersReducedMotion = useReducedMotion();

  const cardVariants = {
    hidden: prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease },
    },
  };

  const itemVariants = {
    hidden: prefersReducedMotion
      ? { opacity: 1 }
      : { opacity: 0, y: 12 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        delay: prefersReducedMotion ? 0 : 0.1 + i * 0.08,
        ease,
      },
    }),
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="about-card group relative w-full max-w-md overflow-hidden rounded-2xl border border-border/60 bg-surface/50 backdrop-blur-md"
    >
      {/* Glow on hover */}
      <div className="about-card-glow pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Top accent bar */}
      <div className="relative h-1 w-full bg-gradient-to-r from-accent via-purple-400 to-accent-secondary" />

      <div className="relative p-6 sm:p-8">
        {/* Header */}
        <motion.div
          custom={0}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-6 flex items-center gap-3"
        >
          <div className="flex size-9 items-center justify-center rounded-lg bg-accent/10 font-mono text-xs font-medium text-accent">
            A.S
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">
              Developer Profile
            </p>
            <p className="font-mono text-[11px] text-muted/70">
              anjalisinghmath@gmail.com
            </p>
          </div>
        </motion.div>

        {/* Focus areas */}
        <div className="mb-6 grid grid-cols-2 gap-2">
          {aboutData.highlights.map((item, i) => (
            <motion.div
              key={item.value}
              custom={i + 1}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="about-highlight-pill rounded-lg border border-border/40 bg-background/50 px-3 py-2.5 transition-colors duration-300 hover:border-accent/30"
            >
              <p className="font-mono text-[10px] tracking-[0.15em] text-muted/60 uppercase">
                {item.label}
              </p>
              <p className="mt-0.5 text-sm font-semibold tracking-wide text-foreground">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider with connection dots */}
        <motion.div
          custom={5}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mb-6 flex items-center gap-2"
        >
          <div className="h-px flex-1 bg-border/60" />
          <div className="flex gap-1.5">
            <span className="about-dot size-1.5 rounded-full bg-accent/50" />
            <span className="about-dot-delayed size-1.5 rounded-full bg-accent-secondary/50" />
            <span className="about-dot size-1.5 rounded-full bg-accent/50" />
          </div>
          <div className="h-px flex-1 bg-border/60" />
        </motion.div>

        {/* Academic stats */}
        <motion.div
          custom={6}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-stretch gap-4"
        >
          {/* CGPA */}
          <div className="flex-1 rounded-lg border border-border/30 bg-background/40 px-3 py-3 text-center">
            <p className="text-2xl font-bold tracking-tight text-accent">
              {aboutData.stats.cgpa}
            </p>
            <p className="mt-0.5 font-mono text-[10px] tracking-[0.12em] text-muted/60 uppercase">
              CGPA
            </p>
          </div>

          {/* Period */}
          <div className="flex-1 rounded-lg border border-border/30 bg-background/40 px-3 py-3 text-center">
            <p className="text-sm font-semibold tracking-tight text-foreground sm:text-base">
              {aboutData.stats.period}
            </p>
            <p className="mt-0.5 font-mono text-[10px] tracking-[0.12em] text-muted/60 uppercase">
              {aboutData.stats.program}
            </p>
          </div>
        </motion.div>

        {/* Institution */}
        <motion.p
          custom={7}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 text-center font-mono text-[11px] tracking-wider text-muted/50"
        >
          {aboutData.stats.institution}
        </motion.p>
      </div>
    </motion.div>
  );
}
