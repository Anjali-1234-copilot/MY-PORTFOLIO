"use client";

import { motion, useReducedMotion } from "framer-motion";

import { skillGroups } from "@/lib/data";
import { SkillCard } from "./SkillCard";

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

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24 sm:py-32"
      aria-labelledby="skills-heading"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_100%,rgba(34,211,238,0.04),transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="bg-noise pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        aria-hidden="true"
      />

      {/* Section divider */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-px w-[min(100%,600px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* ─── Section Header ─── */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <motion.p
            {...useReveal(0)}
            className="mb-4 font-mono text-xs tracking-[0.22em] text-accent-secondary uppercase"
          >
            02 / SKILLS
          </motion.p>

          <motion.h2
            {...useReveal(1)}
            id="skills-heading"
            className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            Tools I use
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
              to build.
            </span>
          </motion.h2>

          <motion.p
            {...useReveal(2)}
            className="mt-5 text-base leading-relaxed text-muted sm:text-lg"
          >
            From application logic to intelligent systems, these are the
            technologies and tools I work with.
          </motion.p>
        </div>

        {/* ─── Skill Grid ─── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.category} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
