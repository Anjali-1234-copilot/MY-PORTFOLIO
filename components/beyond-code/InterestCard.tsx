"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Users, Palette, Compass, Activity } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

interface InterestCardProps {
  interest: string;
  index: number;
}

/* ─── Map interest names to Lucide icons ─── */
const iconMap: Record<string, React.ReactNode> = {
  Badminton: <Activity className="size-5" />,
  "Kho-Kho": <Users className="size-5" />,
  "Drawing / Sketching": <Palette className="size-5" />,
  "Traveling / Discovering new things": <Compass className="size-5" />,
};

/* ─── Map long names to shorter display names if needed ─── */
const nameMap: Record<string, string> = {
  "Drawing / Sketching": "Sketching",
  "Traveling / Discovering new things": "Traveling",
};

export function InterestCard({ interest, index }: InterestCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const icon = iconMap[interest] || <Activity className="size-5" />;
  const displayName = nameMap[interest] || interest;

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: prefersReducedMotion ? 0 : 0.05 * index,
        ease,
      }}
      className="interest-card group relative flex aspect-square flex-col items-center justify-center overflow-hidden rounded-2xl border border-border/40 bg-surface/20 p-4 transition-all duration-300 sm:aspect-[4/3] sm:p-6"
    >
      {/* Background radial gradient shown on hover */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08)_0%,transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Icon */}
      <div className="relative mb-3 flex size-12 items-center justify-center rounded-full border border-border/20 bg-background/50 text-muted/60 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-accent/30 group-hover:text-accent group-hover:shadow-[0_4px_16px_rgba(139,92,246,0.2)]">
        {icon}
      </div>

      {/* Name */}
      <h3 className="relative font-mono text-xs tracking-widest text-foreground/70 uppercase transition-colors duration-300 group-hover:text-foreground">
        {displayName}
      </h3>
    </motion.div>
  );
}
