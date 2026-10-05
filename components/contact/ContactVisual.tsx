"use client";

/* ──────────────────────────────────────────────────
   Abstract glowing orbital visual for Contact section
   ────────────────────────────────────────────────── */

export function ContactVisual() {
  return (
    <div className="relative flex aspect-square w-full max-w-[280px] items-center justify-center sm:max-w-sm">
      {/* Glow aura */}
      <div className="absolute inset-0 rounded-full bg-accent/5 blur-[100px]" />

      {/* Orbit Rings */}
      <div className="absolute inset-4 rounded-full border border-border/20 [animation:spin_20s_linear_infinite]" />
      <div className="absolute inset-10 rounded-full border border-border/30 border-t-accent/40 border-r-accent-secondary/40 [animation:spin_15s_linear_infinite_reverse]" />
      <div className="absolute inset-16 rounded-full border border-border/20 [animation:spin_12s_linear_infinite]" />

      {/* Center Core */}
      <div className="relative flex size-20 items-center justify-center rounded-full bg-surface-elevated shadow-[0_0_40px_rgba(139,92,246,0.3)]">
        <div className="size-16 rounded-full bg-background/50 shadow-[inset_0_0_20px_rgba(139,92,246,0.2)]">
          <div className="absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-secondary shadow-[0_0_20px_rgba(34,211,238,0.8)] [animation:pulse_3s_ease-in-out_infinite]" />
        </div>
      </div>

      {/* Floating Nodes */}
      <div className="absolute top-[15%] left-[20%] size-2 rounded-full bg-accent/60 shadow-[0_0_10px_rgba(139,92,246,0.6)] [animation:float-subtle_4s_ease-in-out_infinite]" />
      <div className="absolute right-[20%] bottom-[15%] size-3 rounded-full bg-accent-secondary/60 shadow-[0_0_12px_rgba(34,211,238,0.6)] [animation:float-subtle-delayed_5s_ease-in-out_infinite]" />
      
      {/* Decorative Lines */}
      <div className="absolute top-1/2 left-0 h-px w-1/4 bg-gradient-to-r from-transparent to-border/40" />
      <div className="absolute top-1/2 right-0 h-px w-1/4 bg-gradient-to-l from-transparent to-border/40" />
      <div className="absolute top-0 left-1/2 h-1/4 w-px bg-gradient-to-b from-transparent to-border/40" />
      <div className="absolute bottom-0 left-1/2 h-1/4 w-px bg-gradient-to-t from-transparent to-border/40" />
    </div>
  );
}
