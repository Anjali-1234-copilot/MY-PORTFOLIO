"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

import type { Project } from "@/lib/types";
import { externalLinkProps } from "@/lib/utils";
import { ProjectVisual } from "./ProjectVisual";

/* ─── Brand SVG (GitHub — not available in lucide v1.52+) ─── */
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}

const ease = [0.22, 1, 0.36, 1] as const;

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

export function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const projectNumber = String(index + 1).padStart(2, "0");

  if (featured) {
    return <FeaturedCard project={project} projectNumber={projectNumber} prefersReducedMotion={!!prefersReducedMotion} />;
  }

  return <SecondaryCard project={project} projectNumber={projectNumber} index={index} prefersReducedMotion={!!prefersReducedMotion} />;
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Featured (large) project card — SMARTATTEND
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function FeaturedCard({
  project,
  projectNumber,
  prefersReducedMotion,
}: {
  project: Project;
  projectNumber: string;
  prefersReducedMotion: boolean;
}) {
  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease }}
      className="project-card group relative overflow-hidden rounded-2xl border border-border/50 bg-surface/40 backdrop-blur-sm"
    >
      {/* Glow */}
      <div className="project-card-glow pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative grid grid-cols-1 gap-0 lg:grid-cols-2">
        {/* ─── Visual (left on desktop) ─── */}
        <div className="order-2 p-5 sm:p-6 lg:order-1 lg:p-8">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="project-visual-hover"
          >
            <ProjectVisual title={project.title} />
          </motion.div>
        </div>

        {/* ─── Content (right on desktop) ─── */}
        <div className="order-1 flex flex-col justify-center p-6 sm:p-8 lg:order-2 lg:py-10 lg:pr-10 lg:pl-4">
          {/* Number + Featured badge */}
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-xs tracking-wider text-accent/60">
              {projectNumber}
            </span>
            <span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-0.5 font-mono text-[10px] tracking-[0.15em] text-accent/70 uppercase">
              Featured
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-1 font-mono text-xs tracking-wider text-muted/60 uppercase">
            {project.subtitle}
          </p>

          {/* Description */}
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="project-tech-pill rounded-lg border border-border/30 bg-background/40 px-2.5 py-1 font-mono text-[11px] tracking-wide text-muted/70 transition-all duration-300 hover:border-accent/25 hover:text-foreground/80"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Features */}
          <ul className="mt-5 space-y-1.5">
            {project.features.slice(0, 4).map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-muted/80"
              >
                <span className="mt-1.5 inline-block size-1 shrink-0 rounded-full bg-accent/50" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Actions */}
          {project.githubUrl && (
            <div className="mt-6">
              <a
                href={project.githubUrl}
                {...externalLinkProps}
                className="project-github-btn group/btn inline-flex items-center gap-2 rounded-xl border border-border/50 bg-background/30 px-5 py-2.5 font-mono text-xs tracking-wider text-foreground transition-all duration-300 hover:border-accent/40 hover:bg-surface"
              >
                <GitHubIcon className="size-4" />
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

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Secondary project card — MediCare / SignSpeak
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function SecondaryCard({
  project,
  projectNumber,
  index,
  prefersReducedMotion,
}: {
  project: Project;
  projectNumber: string;
  index: number;
  prefersReducedMotion: boolean;
}) {
  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : 0.08 * index, ease }}
      className="project-card group relative overflow-hidden rounded-2xl border border-border/50 bg-surface/40 backdrop-blur-sm"
    >
      {/* Glow */}
      <div className="project-card-glow pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex flex-col">
        {/* Visual */}
        <div className="p-4 pb-0 sm:p-5 sm:pb-0">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="project-visual-hover"
          >
            <ProjectVisual title={project.title} />
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          {/* Number */}
          <span className="mb-3 font-mono text-xs tracking-wider text-accent/50">
            {projectNumber}
          </span>

          {/* Title */}
          <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-1 font-mono text-[11px] tracking-wider text-muted/55 uppercase">
            {project.subtitle}
          </p>

          {/* Description */}
          <p className="mt-3 text-sm leading-relaxed text-muted/80">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="project-tech-pill rounded-md border border-border/25 bg-background/35 px-2 py-0.5 font-mono text-[10px] tracking-wide text-muted/60 transition-all duration-300 hover:border-accent/20 hover:text-foreground/70"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Features (compact) */}
          <ul className="mt-4 space-y-1">
            {project.features.slice(0, 3).map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-xs text-muted/70"
              >
                <span className="mt-1 inline-block size-1 shrink-0 rounded-full bg-accent-secondary/40" />
                {feature}
              </li>
            ))}
            {project.features.length > 3 && (
              <li className="font-mono text-[10px] text-muted/40">
                +{project.features.length - 3} more
              </li>
            )}
          </ul>

          {/* GitHub (only if available) */}
          {project.githubUrl && (
            <div className="mt-5">
              <a
                href={project.githubUrl}
                {...externalLinkProps}
                className="project-github-btn group/btn inline-flex items-center gap-2 rounded-lg border border-border/40 px-4 py-2 font-mono text-[11px] tracking-wider text-foreground/80 transition-all duration-300 hover:border-accent/35 hover:bg-surface/60"
              >
                <GitHubIcon className="size-3.5" />
                VIEW ON GITHUB
                <ArrowUpRight className="size-3 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
