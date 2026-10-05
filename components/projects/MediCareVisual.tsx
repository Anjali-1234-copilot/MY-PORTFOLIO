"use client";

import { motion } from "framer-motion";

export function MediCareVisual() {
  return (
    <div className="project-visual-wrapper relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border/40 bg-[#0a0b10] font-mono text-[10px] shadow-2xl backdrop-blur-md">
      {/* ─── Top Navigation Bar ─── */}
      <div className="flex h-9 items-center justify-between border-b border-border/30 bg-surface/30 px-3">
        <div className="flex items-center gap-2">
          <div className="size-4 rounded bg-accent-secondary/20 flex items-center justify-center">
            <span className="text-[10px] text-accent-secondary">+</span>
          </div>
          <span className="font-semibold tracking-wider text-foreground/80 text-[11px]">
            MediCare HMS
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded bg-background/50 px-2 py-0.5 text-[8px] text-muted/60">
            DR. SARAH J.
          </span>
          <div className="size-4 rounded-full bg-surface-elevated ring-1 ring-border/40" />
        </div>
      </div>

      <div className="flex h-[calc(100%-2.25rem)]">
        {/* ─── Sidebar ─── */}
        <div className="w-12 border-r border-border/20 bg-surface/10 py-3 flex flex-col items-center gap-3">
          <div className="size-6 rounded bg-accent-secondary/15 border border-accent-secondary/30" />
          <div className="size-6 rounded bg-background/40 border border-border/20" />
          <div className="size-6 rounded bg-background/40 border border-border/20" />
          <div className="size-6 rounded bg-background/40 border border-border/20 mt-auto" />
        </div>

        {/* ─── Main Content ─── */}
        <div className="flex-1 p-3 flex flex-col gap-3">
          
          {/* Top Stats Row */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "TODAY'S OPD", value: "42", trend: "+12%" },
              { label: "WAITING", value: "08", trend: "-2" },
              { label: "ADMITTED", value: "114", trend: "0" },
            ].map((stat, i) => (
              <div key={i} className="rounded-lg border border-border/20 bg-surface/20 p-2">
                <span className="text-[7px] text-muted/50 tracking-wider block">{stat.label}</span>
                <div className="flex items-end justify-between mt-1">
                  <span className="text-sm font-semibold text-foreground/90">{stat.value}</span>
                  <span className="text-[7px] text-emerald-400/80">{stat.trend}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-1 gap-3 overflow-hidden">
            {/* Active Queue / Appointments */}
            <div className="flex-1 flex flex-col rounded-lg border border-border/20 bg-surface/10 p-2">
              <span className="text-[8px] tracking-wider text-muted/60 mb-2 uppercase">OPD Queue</span>
              <div className="flex flex-col gap-1.5 flex-1 overflow-hidden">
                {[
                  { id: "PT-882", name: "Michael R.", time: "10:15", status: "IN SESSION" },
                  { id: "PT-491", name: "Emma S.", time: "10:30", status: "WAITING" },
                  { id: "PT-022", name: "David L.", time: "10:45", status: "WAITING" },
                ].map((pt, i) => (
                  <div key={i} className={`flex items-center justify-between rounded p-1.5 border ${i === 0 ? 'border-accent-secondary/30 bg-accent-secondary/5' : 'border-border/10 bg-background/30'}`}>
                    <div className="flex items-center gap-2">
                      <div className="size-5 rounded-full bg-surface-elevated" />
                      <div className="flex flex-col">
                        <span className="text-[9px] text-foreground/80">{pt.name}</span>
                        <span className="text-[7px] text-muted/50">{pt.id}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[8px] text-muted/70">{pt.time}</span>
                      <span className={`text-[6px] px-1 py-0.5 rounded mt-0.5 ${i === 0 ? 'bg-accent-secondary/20 text-accent-secondary/90' : 'bg-border/20 text-muted/50'}`}>
                        {pt.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Patient / Prescription */}
            <div className="flex-1 flex flex-col rounded-lg border border-border/20 bg-surface/10 overflow-hidden">
              <div className="border-b border-border/20 p-2 bg-surface/20 flex justify-between items-center">
                <span className="text-[8px] text-muted/60 uppercase tracking-wider">Active Record</span>
                <span className="text-[7px] bg-accent-secondary/20 text-accent-secondary px-1 py-0.5 rounded">PDF</span>
              </div>
              <div className="p-3 flex flex-col gap-2">
                <div className="h-2 w-1/3 bg-border/40 rounded-sm" />
                <div className="h-1.5 w-1/4 bg-border/20 rounded-sm mb-2" />
                
                <div className="h-px w-full bg-border/10 my-1" />
                
                <div className="h-1.5 w-full bg-border/20 rounded-sm" />
                <div className="h-1.5 w-5/6 bg-border/20 rounded-sm" />
                <div className="h-1.5 w-4/5 bg-border/20 rounded-sm" />
                
                <div className="mt-auto pt-2 flex gap-2">
                  <div className="h-4 flex-1 bg-accent-secondary/20 rounded border border-accent-secondary/30" />
                  <div className="h-4 w-8 bg-surface-elevated rounded border border-border/30" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
