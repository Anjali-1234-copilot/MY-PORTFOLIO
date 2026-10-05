"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Award } from "lucide-react";
import type { Certification } from "@/lib/types";

const ease = [0.22, 1, 0.36, 1] as const;

interface CertificationCardProps {
  cert: Certification;
  index: number;
}

export function CertificationCard({ cert, index }: CertificationCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const displayNumber = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96, y: 12 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: prefersReducedMotion ? 0 : 0.06 * index,
        ease,
      }}
      className="cert-card group relative overflow-hidden rounded-xl border border-border/50 bg-surface/30 p-5 backdrop-blur-sm sm:p-6"
    >
      {/* Subtle hover glow */}
      <div className="cert-card-glow pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex items-start gap-4">
        {/* Icon & Number column */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg border border-border/40 bg-background/50 text-accent-secondary/70 transition-colors duration-300 group-hover:border-accent-secondary/30 group-hover:text-accent-secondary">
            <Award className="size-5" />
          </div>
          <span className="font-mono text-[10px] tracking-wider text-muted/30">
            {displayNumber}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 pt-1">
          <h3 className="font-semibold tracking-tight text-foreground/90 transition-colors group-hover:text-foreground">
            {cert.title}
          </h3>
          <p className="mt-1 font-mono text-xs tracking-wider text-muted/60 uppercase">
            {cert.issuer}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
