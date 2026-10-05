"use client";

import { motion } from "framer-motion";

export function SmartAttendVisual() {
  return (
    <div className="project-visual-wrapper relative aspect-[16/11] w-full overflow-hidden rounded-xl border border-border/40 bg-[#0a0b10] font-mono text-[10px] shadow-2xl backdrop-blur-md sm:aspect-[4/3]">
      {/* ─── Top Navigation Bar ─── */}
      <div className="flex h-10 items-center justify-between border-b border-border/30 bg-surface/40 px-4">
        <div className="flex items-center gap-3">
          <div className="flex size-5 items-center justify-center rounded bg-accent/20">
            <div className="size-2 rounded-full bg-accent shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
          </div>
          <span className="font-semibold tracking-[0.1em] text-foreground/90">
            SMARTATTEND
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5">
            <span className="project-live-dot size-1.5 rounded-full bg-emerald-400 shadow-[0_0_4px_rgba(52,211,153,0.6)]" />
            <span className="text-[9px] tracking-wider text-emerald-400">
              SYSTEM ACTIVE
            </span>
          </div>
          <div className="h-4 w-px bg-border/40" />
          <div className="size-5 rounded-full bg-surface-elevated ring-1 ring-border/50" />
        </div>
      </div>

      <div className="flex h-[calc(100%-2.5rem)]">
        {/* ─── Sidebar ─── */}
        <div className="hidden w-14 flex-col items-center gap-4 border-r border-border/20 bg-surface/20 py-4 sm:flex">
          <div className="size-6 rounded-lg border border-accent/40 bg-accent/10 shadow-[inset_0_0_10px_rgba(139,92,246,0.2)]" />
          <div className="size-6 rounded-lg border border-border/30 bg-background/50" />
          <div className="size-6 rounded-lg border border-border/30 bg-background/50" />
          <div className="mt-auto size-6 rounded-lg border border-border/30 bg-background/50" />
        </div>

        {/* ─── Main Content ─── */}
        <div className="flex-1 p-3 sm:p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs tracking-wider text-muted/70">
              Live Camera Feeds
            </span>
            <span className="text-[9px] text-muted/40 uppercase">
              3 Active Streams
            </span>
          </div>

          {/* ─── Camera Grid ─── */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {/* Primary Camera (Active Recognition) */}
            <div className="group relative col-span-2 overflow-hidden rounded-lg border border-accent/30 bg-surface-elevated sm:col-span-1">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.1),transparent)]" />
              
              {/* Fake video feed overlay */}
              <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay" />
              
              <div className="absolute top-2 left-2 rounded bg-black/50 px-1.5 py-0.5 text-[8px] text-white backdrop-blur-md">
                CAM-01 (ENTRANCE)
              </div>
              
              {/* Face Tracking Bounding Box */}
              <motion.div 
                className="absolute top-1/2 left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 border border-emerald-400/60 bg-emerald-400/5 shadow-[0_0_15px_rgba(52,211,153,0.15)]"
                animate={{
                  scale: [1, 1.05, 1],
                  borderColor: ["rgba(52,211,153,0.4)", "rgba(52,211,153,0.8)", "rgba(52,211,153,0.4)"]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Crosshairs */}
                <div className="absolute top-0 left-0 size-2 border-t border-l border-emerald-400" />
                <div className="absolute top-0 right-0 size-2 border-t border-r border-emerald-400" />
                <div className="absolute bottom-0 left-0 size-2 border-b border-l border-emerald-400" />
                <div className="absolute bottom-0 right-0 size-2 border-b border-r border-emerald-400" />
                
                {/* Identity Tag */}
                <div className="absolute -top-4 left-0 whitespace-nowrap bg-emerald-400/20 px-1 text-[7px] text-emerald-300 backdrop-blur-sm">
                  ID: 8992 • 98.4%
                </div>
              </motion.div>

              {/* Scanning Line */}
              <motion.div
                className="absolute left-0 h-px w-full bg-emerald-400/50 shadow-[0_0_10px_rgba(52,211,153,0.8)]"
                animate={{ top: ["10%", "90%", "10%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Secondary Cameras */}
            {["CAM-02 (HALL)", "CAM-03 (EXIT)"].map((cam) => (
              <div key={cam} className="relative hidden aspect-video overflow-hidden rounded-lg border border-border/20 bg-background/50 sm:block">
                <div className="absolute inset-0 bg-noise opacity-5 mix-blend-overlay" />
                <div className="absolute top-2 left-2 rounded bg-black/50 px-1.5 py-0.5 text-[8px] text-muted/80 backdrop-blur-md">
                  {cam}
                </div>
                {/* Searching indicator */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 size-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-muted/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </div>
            ))}
          </div>

          {/* ─── Real-Time Log ─── */}
          <div className="mt-4">
            <span className="mb-2 block text-[9px] tracking-widest text-muted/50 uppercase">
              Recent Detections
            </span>
            <div className="flex flex-col gap-1.5">
              {[
                { id: "EMP-402", time: "08:42:15", status: "VERIFIED", color: "text-emerald-400", bg: "bg-emerald-400/10" },
                { id: "EMP-119", time: "08:41:03", status: "VERIFIED", color: "text-emerald-400", bg: "bg-emerald-400/10" },
                { id: "UNKNOWN", time: "08:39:22", status: "FLAGGED", color: "text-amber-400", bg: "bg-amber-400/10" },
              ].map((log, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-md border border-border/15 bg-background/30 px-3 py-1.5 transition-colors hover:bg-surface/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="size-4 rounded-full bg-surface-elevated ring-1 ring-border/50" />
                    <span className="text-[10px] text-foreground/80">{log.id}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] text-muted/50">{log.time}</span>
                    <span className={`rounded px-1.5 py-0.5 text-[8px] ${log.bg} ${log.color}`}>
                      {log.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
