"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin, ChevronDown } from "lucide-react";

import { heroData, person, socialLinks } from "@/lib/data";
import { externalLinkProps } from "@/lib/utils";
import { HeroVisual } from "./HeroVisual";

/* ─── Brand SVG Icons (not in lucide-react v1.52+) ─── */
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

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

/* ─── Animation helpers ─── */
const ease = [0.22, 1, 0.36, 1] as const;

function stagger(i: number) {
  return { duration: 0.6, delay: 0.15 + i * 0.1, ease };
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const initial = prefersReducedMotion
    ? false
    : ({ opacity: 0, y: 24 } as const);
  const animate = { opacity: 1, y: 0 };

  return (
    <section
      id="hero"
      className="relative flex min-h-dvh items-center overflow-hidden pt-20 pb-16"
      aria-label="Introduction"
    >
      {/* ─── Background layers ─── */}
      <div
        className="bg-grid pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      <div
        className="bg-noise pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-overlay"
        aria-hidden="true"
      />
      {/* Radial glow — hero center */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.06)_0%,rgba(34,211,238,0.02)_40%,transparent_70%)]"
        aria-hidden="true"
      />
      {/* Secondary ambient glow */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.04),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        {/* ─── Left: Content ─── */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Name */}
          <motion.h1
            initial={initial}
            animate={animate}
            transition={stagger(0)}
            className="hero-name text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {heroData.firstName}{" "}
            <span className="hero-name-gradient bg-gradient-to-r from-accent via-purple-400 to-accent-secondary bg-clip-text text-transparent">
              {heroData.lastName}
            </span>
          </motion.h1>

          {/* Headline */}
          <motion.h2
            initial={initial}
            animate={animate}
            transition={stagger(1)}
            className="mt-6 max-w-xl text-2xl font-semibold leading-snug tracking-tight text-foreground/90 sm:text-3xl md:text-4xl"
          >
            {heroData.headline}
          </motion.h2>

          {/* Eyebrow / Role */}
          <motion.div
            initial={initial}
            animate={animate}
            transition={stagger(2)}
            className="mt-8 flex items-center gap-2"
          >
            <span className="inline-block size-1.5 rounded-full bg-accent-secondary/80 shadow-[0_0_6px_rgba(34,211,238,0.5)]" />
            <p className="font-mono text-xs tracking-[0.2em] text-accent-secondary uppercase">
              {heroData.eyebrow}
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={initial}
            animate={animate}
            transition={stagger(2.5)}
            className="mt-3 font-mono text-[11px] tracking-[0.25em] text-muted/80 uppercase sm:text-xs"
          >
            {heroData.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={initial}
            animate={animate}
            transition={stagger(3)}
            className="mt-6 max-w-lg text-sm leading-relaxed text-muted sm:text-base"
          >
            {heroData.description}
          </motion.p>

          {/* Location */}
          <motion.p
            initial={initial}
            animate={animate}
            transition={stagger(3.5)}
            className="mt-4 flex items-center gap-1.5 font-mono text-xs tracking-wider text-muted/50"
          >
            <MapPin className="size-3" />
            {person.location}
          </motion.p>

          {/* ─── Buttons ─── */}
          <motion.div
            initial={initial}
            animate={animate}
            transition={stagger(4)}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            {/* View Projects */}
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hero-btn-primary group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(139,92,246,0.3)] transition-all duration-300 hover:shadow-[0_0_36px_rgba(139,92,246,0.45)]"
            >
              VIEW PROJECTS
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>

            {/* GitHub */}
            <a
              href={socialLinks.github}
              {...externalLinkProps}
              className="hero-btn-secondary group inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent/40 hover:bg-surface"
            >
              <GitHubIcon className="size-4" />
              GITHUB
            </a>

            {/* LinkedIn */}
            <a
              href={socialLinks.linkedin}
              {...externalLinkProps}
              className="hero-btn-secondary group inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent-secondary/40 hover:bg-surface"
            >
              <LinkedInIcon className="size-4" />
              LINKEDIN
            </a>
          </motion.div>
        </div>

        {/* ─── Right: Visual ─── */}
        <div className="flex items-center justify-center">
          <HeroVisual />
        </div>
      </div>

      {/* ─── Scroll Indicator ─── */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-[0.25em] text-muted/60 uppercase">
          Scroll to explore
        </span>
        <ChevronDown className="hero-scroll-arrow size-4 text-muted/50" />
      </motion.div>
    </section>
  );
}
