"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Wrench,
} from "lucide-react";

import type { SkillGroup } from "@/lib/types";

/* ─── Map category names to Lucide icons ─── */
const categoryIcons: Record<string, React.ReactNode> = {
  Languages: <Code2 className="size-4" />,
  Frontend: <Layout className="size-4" />,
  Backend: <Server className="size-4" />,
  "Databases / Backend Services": <Database className="size-4" />,
  "Cloud / Platforms": <Cloud className="size-4" />,
  "Developer Tools": <Wrench className="size-4" />,
};

/* ─── Short display labels for category headers ─── */
const categoryDisplayNames: Record<string, string> = {
  "Databases / Backend Services": "Databases & Backend Services",
  "Cloud / Platforms": "Cloud & Platforms",
};

const ease = [0.22, 1, 0.36, 1] as const;

interface SkillCardProps {
  group: SkillGroup;
  index: number;
}

export function SkillCard({ group, index }: SkillCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const categoryNumber = String(index + 1).padStart(2, "0");
  const displayName = categoryDisplayNames[group.category] ?? group.category;
  const icon = categoryIcons[group.category] ?? <Code2 className="size-4" />;

  return (
    <motion.div
      initial={
        prefersReducedMotion ? false : { opacity: 0, y: 24 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: prefersReducedMotion ? 0 : 0.06 * index,
        ease,
      }}
      className="skill-card group relative overflow-hidden rounded-2xl border border-border/50 bg-surface/40 backdrop-blur-sm transition-all duration-400"
    >
      {/* Hover glow */}
      <div className="skill-card-glow pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative p-5 sm:p-6">
        {/* Header row */}
        <div className="mb-5 flex items-start justify-between">
          <div className="flex items-center gap-3">
            {/* Icon container */}
            <div className="flex size-9 items-center justify-center rounded-lg border border-border/40 bg-background/60 text-accent transition-colors duration-300 group-hover:border-accent/30 group-hover:text-accent">
              {icon}
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.18em] text-muted/50 uppercase">
                Category {categoryNumber}
              </p>
              <h3 className="text-sm font-semibold tracking-tight text-foreground sm:text-base">
                {displayName}
              </h3>
            </div>
          </div>

          {/* Item count */}
          <span className="rounded-md bg-background/50 px-2 py-1 font-mono text-[10px] text-muted/50">
            {group.items.length}
          </span>
        </div>

        {/* Technology pills */}
        <div className="flex flex-wrap gap-2">
          {group.items.map((item) => (
            <span
              key={item}
              className="skill-pill rounded-lg border border-border/30 bg-background/40 px-3 py-1.5 font-mono text-xs tracking-wide text-muted transition-all duration-300 hover:border-accent/30 hover:text-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
