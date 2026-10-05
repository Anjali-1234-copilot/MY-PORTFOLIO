"use client";

import { motion, useReducedMotion } from "framer-motion";
import { certifications } from "@/lib/data";
import { CertificationCard } from "./CertificationCard";

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

export function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden py-24 sm:py-32"
      aria-labelledby="certifications-heading"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(34,211,238,0.02),transparent_70%)]"
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
            05 / CERTIFICATIONS
          </motion.p>
          <motion.h2
            {...useReveal(1)}
            id="certifications-heading"
            className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl"
          >
            Always learning.
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
              Always building.
            </span>
          </motion.h2>
        </div>

        {/* ─── Certifications Grid ─── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <CertificationCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
