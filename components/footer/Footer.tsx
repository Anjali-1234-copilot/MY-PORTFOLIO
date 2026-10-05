"use client";

import { person } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/20 bg-background pt-16 pb-8">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"
        aria-hidden="true"
      />
      
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          
          {/* Identity */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <span className="font-bold tracking-widest text-foreground uppercase">
              {person.name}
            </span>
            <span className="mt-1 font-mono text-[10px] tracking-[0.2em] text-muted/60 uppercase">
              {person.headline}
            </span>
            <span className="mt-0.5 font-mono text-[10px] tracking-[0.2em] text-muted/40 uppercase">
              {person.location}
            </span>
          </div>

          {/* Copyright */}
          <div className="text-center sm:text-right">
            <p className="font-mono text-xs tracking-wider text-muted/50">
              © {currentYear} Anjali Singh.
              <br className="sm:hidden" /> All rights reserved.
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
