"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { externalLinkProps } from "@/lib/utils";
import { MediCareVisual } from "./MediCareVisual";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}

const ease = [0.22, 1, 0.36, 1] as const;

export function MediCareProject({ project }: { project: Project }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease }}
      className="group relative overflow-hidden rounded-2xl border border-border/30 bg-surface/20 backdrop-blur-sm transition-colors hover:border-accent-secondary/30"
    >
      <div className="absolute inset-0 bg-gradient-to-tl from-accent-secondary/5 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      
      <div className="relative grid grid-cols-1 gap-0 lg:grid-cols-12 lg:items-center">
        {/* Visual (Left on Desktop) */}
        <div className="order-1 p-6 pb-0 sm:p-10 sm:pb-0 lg:col-span-6 lg:p-10 lg:pr-0">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="relative transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          >
            <div className="absolute -inset-4 rounded-xl bg-accent-secondary/10 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
            <MediCareVisual />
          </motion.div>
        </div>

        {/* Content (Right on Desktop) */}
        <div className="order-2 flex flex-col p-6 sm:p-10 lg:col-span-6 lg:pl-12">
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-[10px] tracking-widest text-accent-secondary/60 uppercase">
              02 / FULL-STACK SYSTEM
            </span>
          </div>

          <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-2 font-mono text-xs tracking-[0.2em] text-muted/60 uppercase">
            {project.subtitle}
          </p>

          <p className="mt-6 text-sm leading-relaxed text-muted/90 sm:text-base">
            {project.description}
          </p>

          <div className="mt-8 border-l border-border/40 pl-4">
            <span className="block font-mono text-[10px] tracking-widest text-muted/50 uppercase">
              Capabilities
            </span>
            <ul className="mt-3 space-y-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-muted/80">
                  <span className="mt-1.5 inline-block size-1 shrink-0 rounded-full bg-accent-secondary/60" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <span className="block font-mono text-[10px] tracking-widest text-muted/50 uppercase">
              STACK
            </span>
            <p className="mt-2 font-mono text-[11px] leading-relaxed tracking-wide text-muted/70">
              {project.technologies.join(" · ")}
            </p>
          </div>

          {project.githubUrl && (
            <div className="mt-10">
              <a
                href={project.githubUrl}
                {...externalLinkProps}
                className="group/btn inline-flex items-center gap-2 rounded-lg border border-border/40 bg-surface/40 px-5 py-2.5 font-mono text-[11px] tracking-wider text-foreground/90 transition-all duration-300 hover:border-accent-secondary/40 hover:bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-accent-secondary/50"
              >
                <GitHubIcon className="size-4 transition-transform group-hover/btn:scale-110" />
                VIEW ON GITHUB
                <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
