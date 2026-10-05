"use client";

import { motion } from "framer-motion";

export function TaxonomyVisual() {
  return (
    <div className="project-visual-wrapper relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border/50 bg-[#000000] font-mono text-[10px] shadow-2xl backdrop-blur-md">
      
      {/* ─── Minimal Next.js Vibe Background ─── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />

      {/* ─── Top Bar ─── */}
      <div className="flex h-10 items-center justify-between border-b border-white/10 px-4">
        <div className="flex items-center gap-2">
          <div className="size-4 rounded-full bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
          <span className="font-sans font-semibold tracking-wide text-white/90">Taxonomy</span>
        </div>
        <div className="flex gap-3 text-white/40">
          <span className="hover:text-white/80 transition-colors">Docs</span>
          <span className="hover:text-white/80 transition-colors">Components</span>
          <span className="hover:text-white/80 transition-colors">Deploy</span>
        </div>
      </div>

      <div className="flex h-[calc(100%-2.5rem)] p-4 gap-4">
        
        {/* ─── Left Column (Architecture/Files) ─── */}
        <div className="flex w-1/3 flex-col gap-3">
          <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3 flex-1">
            <span className="text-[8px] text-white/40 uppercase tracking-widest mb-2 block">App Router</span>
            <div className="space-y-1.5 border-l border-white/10 pl-2">
              <div className="flex items-center gap-2">
                <div className="size-1.5 rounded-sm bg-white/60" />
                <span className="text-[9px] text-white/80">layout.tsx</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-1.5 rounded-sm bg-white/60" />
                <span className="text-[9px] text-white/80">page.tsx</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-1.5 rounded-sm bg-white/30" />
                <span className="text-[9px] text-white/50">loading.tsx</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <div className="size-1.5 rounded-sm bg-blue-400/80" />
                <span className="text-[9px] text-blue-400/90">api/auth</span>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3 h-20 flex flex-col justify-center items-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.05),transparent_60%)]" />
             <span className="text-[10px] text-white/70 relative z-10">PRISMA CLIENT</span>
             <div className="mt-1 flex gap-1 relative z-10">
               <span className="size-1 rounded-full bg-emerald-400" />
               <span className="text-[7px] text-emerald-400/80 uppercase">Connected</span>
             </div>
          </div>
        </div>

        {/* ─── Right Column (Dashboard Preview) ─── */}
        <div className="flex flex-1 flex-col rounded-lg border border-white/10 bg-white/[0.03] overflow-hidden relative">
          
          <div className="border-b border-white/10 bg-white/[0.02] p-2 flex justify-between items-center">
            <span className="text-[8px] text-white/40 uppercase tracking-widest">Server Components</span>
            <div className="flex items-center gap-1">
              <span className="text-[7px] text-white/30">22ms</span>
              <div className="size-1.5 rounded-full bg-emerald-400/60" />
            </div>
          </div>
          
          <div className="p-4 flex flex-col gap-3 h-full">
            <div className="flex justify-between items-end">
              <div>
                <div className="h-2 w-24 bg-white/20 rounded-sm mb-1" />
                <div className="h-1.5 w-16 bg-white/10 rounded-sm" />
              </div>
              <div className="h-6 w-16 bg-white/10 rounded border border-white/10" />
            </div>
            
            <div className="flex-1 rounded border border-white/5 bg-white/[0.02] p-3 flex flex-col gap-2 relative overflow-hidden">
               {/* Skeleton rows */}
               {[1, 2, 3].map(i => (
                 <div key={i} className="flex items-center gap-3">
                   <div className="size-4 rounded bg-white/10" />
                   <div className="flex-1 h-1.5 bg-white/10 rounded-sm" />
                   <div className="w-8 h-1.5 bg-white/5 rounded-sm" />
                 </div>
               ))}
               
               {/* Abstract hover highlight */}
               <motion.div 
                 className="absolute inset-x-0 h-8 top-2 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
                 animate={{ y: [0, 40, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
