"use client";

import { motion, useReducedMotion } from "framer-motion";

import { projects } from "@/lib/data";
import { SmartAttendProject } from "./SmartAttendProject";
import { MediCareProject } from "./MediCareProject";
import { SignSpeakProject } from "./SignSpeakProject";
import { TaxonomyProject } from "./TaxonomyProject";
import { SmartbotProject } from "./SmartbotProject";

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

export function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 sm:py-32"
      aria-labelledby="projects-heading"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(139,92,246,0.03),transparent_70%)]"
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
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <motion.p
            {...useReveal(0)}
            className="mb-4 font-mono text-xs tracking-[0.22em] text-accent uppercase"
          >
            03 / SELECTED WORK
          </motion.p>

          <motion.h2
            {...useReveal(1)}
            id="projects-heading"
            className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            Things I&apos;ve
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
              built.
            </span>
          </motion.h2>

          <motion.p
            {...useReveal(2)}
            className="mt-6 text-base leading-relaxed text-muted sm:text-lg"
          >
            Intelligent systems, full-stack applications,
            and real-time computer vision.
          </motion.p>
        </div>

        {/* ─── Projects Stack ─── */}
        <div className="flex flex-col gap-16 md:gap-24">
          <SmartAttendProject project={projects[0]} />
          <MediCareProject project={projects[1]} />
          <SignSpeakProject project={projects[2]} />
          <TaxonomyProject project={projects[3]} />
          <SmartbotProject project={projects[4]} />
        </div>
      </div>
    </section>
  );
}
