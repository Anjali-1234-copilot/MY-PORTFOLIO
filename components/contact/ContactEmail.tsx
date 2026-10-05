"use client";

import { useState } from "react";
import { Copy, Check, ArrowUpRight } from "lucide-react";
import { person } from "@/lib/data";

export function ContactEmail() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(person.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      {/* Mailto Button */}
      <a
        href={`mailto:${person.email}`}
        className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-accent px-8 py-3.5 font-mono text-sm font-semibold tracking-wider text-white transition-all duration-300 hover:bg-accent/90 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
      >
        <span className="relative z-10 flex items-center gap-2">
          GET IN TOUCH
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
        {/* Shine effect */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" />
      </a>

      {/* Copy Email Box */}
      <div className="flex items-center gap-2 rounded-xl border border-border/40 bg-surface/40 p-1.5 backdrop-blur-sm">
        <div className="px-3 font-mono text-[11px] tracking-wider text-muted/80">
          {person.email}
        </div>
        <button
          onClick={handleCopy}
          className="flex size-8 items-center justify-center rounded-lg border border-border/30 bg-background/50 text-muted/70 transition-colors hover:border-accent/40 hover:bg-accent/10 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-1 focus:ring-offset-background"
          aria-label="Copy email address"
          title="Copy email address"
        >
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
        </button>
      </div>
    </div>
  );
}
