"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { person } from "@/lib/data";

const checks = [
  "Next.js App Router",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Lucide React",
  "Centralized portfolio data",
] as const;

export function SetupStatus() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-surface/80 p-8 shadow-[0_0_80px_var(--glow)] backdrop-blur-md"
      aria-labelledby="setup-heading"
    >
      <p className="mb-3 font-mono text-xs tracking-[0.22em] text-accent-secondary uppercase">
        Project setup
      </p>
      <h1
        id="setup-heading"
        className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        {person.name}
      </h1>
      <p className="mt-2 text-sm text-muted sm:text-base">
        {person.headline} · {person.location}
      </p>
      <p className="mt-6 text-sm leading-relaxed text-muted">
        The development environment is running. Section UI will be built
        incrementally from this foundation.
      </p>
      <ul className="mt-8 space-y-3">
        {checks.map((item, index) => (
          <motion.li
            key={item}
            initial={prefersReducedMotion ? false : { opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.35,
              delay: prefersReducedMotion ? 0 : 0.08 * index,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-center gap-3 text-sm text-foreground"
          >
            <CheckCircle2
              className="size-4 shrink-0 text-accent-secondary"
              aria-hidden="true"
            />
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
