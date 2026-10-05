"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { EducationItem as EducationItemType } from "@/lib/types";
import { EducationItem } from "./EducationItem";

const ease = [0.22, 1, 0.36, 1] as const;

interface EducationTimelineProps {
  items: EducationItemType[];
}

export function EducationTimeline({ items }: EducationTimelineProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative">
      {/* ─── The Vertical Timeline Line ─── */}
      <motion.div
        initial={prefersReducedMotion ? false : { height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.2, ease }}
        className="absolute top-2 bottom-0 left-0 w-px bg-gradient-to-b from-accent/50 via-border/50 to-transparent"
        aria-hidden="true"
      />

      {/* ─── Timeline Items ─── */}
      <div className="flex flex-col">
        {items.map((item, i) => (
          <EducationItem
            key={item.institution}
            item={item}
            index={i}
            isPrimary={i === 0} // Make the first one (B.Tech) prominent
          />
        ))}
      </div>
    </div>
  );
}
