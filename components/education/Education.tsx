"use client";

import { motion, useReducedMotion } from "framer-motion";
import { education } from "@/lib/data";
import { EducationTimeline } from "./EducationTimeline";

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

export function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden py-24 sm:py-32"
      aria-labelledby="education-heading"
    >
      {/* Background styling for visual consistency */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(34,211,238,0.03),transparent_70%)]"
        aria-hidden="true"
      />
      
      {/* Section divider */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-px w-[min(100%,600px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Header Column (left on desktop) */}
          <div className="lg:col-span-4 xl:col-span-4">
            <motion.p
              {...useReveal(0)}
              className="mb-4 font-mono text-xs tracking-[0.22em] text-accent uppercase"
            >
              04 / EDUCATION
            </motion.p>
            <motion.h2
              {...useReveal(1)}
              id="education-heading"
              className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl"
            >
              The foundation
              <br />
              <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
                behind the work.
              </span>
            </motion.h2>
          </div>

          {/* Timeline Column (right on desktop) */}
          <div className="lg:col-span-8 xl:col-span-7 xl:col-start-6">
            <EducationTimeline items={education} />
          </div>
        </div>
      </div>
    </section>
  );
}
