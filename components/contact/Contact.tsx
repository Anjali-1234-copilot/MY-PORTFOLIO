"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactEmail } from "./ContactEmail";
import { SocialLinks } from "./SocialLinks";
import { ContactVisual } from "./ContactVisual";

const ease = [0.22, 1, 0.36, 1] as const;

function useReveal(i: number) {
  const prefersReducedMotion = useReducedMotion();
  return {
    initial: prefersReducedMotion ? false : ({ opacity: 0, y: 20 } as const),
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" } as const,
    transition: {
      duration: 0.55,
      delay: prefersReducedMotion ? 0 : 0.08 * i,
      ease,
    },
  };
}

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-32 lg:py-40"
      aria-labelledby="contact-heading"
    >
      {/* Background styling for visual consistency */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(139,92,246,0.06),transparent_70%)]"
        aria-hidden="true"
      />
      
      {/* Top section divider */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-px w-[min(100%,800px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          
          {/* Left: Content */}
          <div className="flex flex-col text-center lg:text-left">
            <motion.p
              {...useReveal(0)}
              className="mb-4 font-mono text-xs tracking-[0.22em] text-accent uppercase"
            >
              06 / CONTACT
            </motion.p>
            
            <motion.h2
              {...useReveal(1)}
              id="contact-heading"
              className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl"
            >
              Let&apos;s build
              <br />
              <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
                something meaningful.
              </span>
            </motion.h2>
            
            <motion.p
              {...useReveal(2)}
              className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg lg:mx-0"
            >
              Have an idea, opportunity, or project in mind? Feel free to reach
              out.
            </motion.p>

            <motion.div
              {...useReveal(3)}
              className="mt-10 flex flex-col items-center gap-8 lg:items-start"
            >
              <ContactEmail />
              
              <div className="flex w-full flex-col items-center gap-4 border-t border-border/30 pt-8 lg:items-start">
                <span className="font-mono text-[10px] tracking-widest text-muted/50 uppercase">
                  Other ways to connect
                </span>
                <SocialLinks />
              </div>
            </motion.div>
          </div>

          {/* Right: Visual */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              {...useReveal(4)}
              className="flex items-center justify-center"
            >
              <ContactVisual />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
