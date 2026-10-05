"use client";

import { motion, useReducedMotion } from "framer-motion";
import { interests } from "@/lib/data";
import { InterestCard } from "./InterestCard";

const ease = [0.22, 1, 0.36, 1] as const;

function useReveal(i: number) {
  const prefersReducedMotion = useReducedMotion();
  return {
    initial: prefersReducedMotion ? false : ({ opacity: 0, y: 16 } as const),
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" } as const,
    transition: {
      duration: 0.5,
      delay: prefersReducedMotion ? 0 : 0.08 * i,
      ease,
    },
  };
}

export function BeyondCode() {
  return (
    <section
      id="beyond-code"
      className="relative overflow-hidden py-16 sm:py-20"
      aria-labelledby="beyond-code-heading"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <motion.p
            {...useReveal(0)}
            className="mb-3 font-mono text-[10px] tracking-[0.25em] text-muted/50 uppercase"
          >
            BEYOND CODE
          </motion.p>
          <motion.h2
            {...useReveal(1)}
            id="beyond-code-heading"
            className="text-2xl font-bold tracking-tight text-foreground/80 sm:text-3xl"
          >
            A little more than code.
          </motion.h2>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {interests.map((interest, i) => (
            <InterestCard key={interest} interest={interest} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
