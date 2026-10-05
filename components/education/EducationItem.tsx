"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { EducationItem as EducationItemType } from "@/lib/types";

const ease = [0.22, 1, 0.36, 1] as const;

interface EducationItemProps {
  item: EducationItemType;
  index: number;
  isPrimary?: boolean;
}

export function EducationItem({ item, index, isPrimary = false }: EducationItemProps) {
  const prefersReducedMotion = useReducedMotion();
  const displayNumber = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : 0.1 * index, ease }}
      className={`relative pl-8 sm:pl-10 ${isPrimary ? "pb-12" : "pb-8"}`}
    >
      {/* Timeline Node */}
      <div
        className={`absolute top-0.5 left-[-5px] size-2.5 rounded-full ring-4 ring-background transition-colors duration-300 ${
          isPrimary
            ? "bg-accent shadow-[0_0_12px_rgba(139,92,246,0.6)]"
            : "bg-muted/30"
        }`}
      />

      <div
        className={`group relative overflow-hidden rounded-xl border border-border/40 transition-all duration-300 ${
          isPrimary
            ? "bg-surface/60 shadow-lg shadow-black/20 hover:border-accent/30 hover:shadow-accent/5"
            : "bg-surface/30 hover:border-border/60 hover:bg-surface/40"
        }`}
      >
        <div className="relative p-5 sm:p-6">
          <div className="mb-2 flex items-center justify-between">
            <span
              className={`font-mono text-xs tracking-wider ${
                isPrimary ? "text-accent/80" : "text-muted/50"
              }`}
            >
              {displayNumber}
            </span>
            <span
              className={`font-mono text-[10px] tracking-wider uppercase ${
                isPrimary
                  ? "rounded-md bg-accent/10 px-2 py-1 text-accent"
                  : "text-muted/60"
              }`}
            >
              {item.period}
            </span>
          </div>

          <h3
            className={`font-bold tracking-tight ${
              isPrimary ? "text-lg text-foreground sm:text-xl" : "text-base text-foreground/80 sm:text-lg"
            }`}
          >
            {item.institution}
          </h3>
          <p
            className={`mt-1 font-mono text-xs tracking-wider uppercase ${
              isPrimary ? "text-accent-secondary" : "text-muted/60"
            }`}
          >
            {item.program}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <div
              className={`flex items-center gap-2 rounded-lg border px-3 py-1.5 ${
                isPrimary
                  ? "border-accent-secondary/20 bg-accent-secondary/5"
                  : "border-border/30 bg-background/50"
              }`}
            >
              <span className="font-mono text-[10px] tracking-widest text-muted/60 uppercase">
                {item.resultLabel}
              </span>
              <span
                className={`text-sm font-semibold tracking-tight ${
                  isPrimary ? "text-accent-secondary" : "text-foreground/80"
                }`}
              >
                {item.result}
              </span>
            </div>
          </div>

          {/* Coursework (only if available) */}
          {item.coursework && item.coursework.length > 0 && (
            <div className="mt-5 border-t border-border/20 pt-4">
              <span className="mb-3 block font-mono text-[10px] tracking-[0.15em] text-muted/50 uppercase">
                Relevant Coursework
              </span>
              <div className="flex flex-wrap gap-1.5">
                {item.coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-md border border-border/30 bg-background/40 px-2 py-1 font-mono text-[10px] tracking-wide text-muted/80 transition-colors group-hover:border-accent/20"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
