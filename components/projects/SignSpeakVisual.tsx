"use client";

import { motion } from "framer-motion";

export function SignSpeakVisual() {
  return (
    <div className="project-visual-wrapper relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border/40 bg-[#0a0b10] font-mono text-[10px] shadow-2xl backdrop-blur-md">
      
      {/* ─── Video Feed Background ─── */}
      <div className="absolute inset-0 bg-noise opacity-15 mix-blend-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(192,132,252,0.1)_0%,transparent_70%)]" />

      {/* ─── Top HUD ─── */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-3">
        <div className="flex items-center gap-2 rounded bg-black/40 px-2 py-1 backdrop-blur-md border border-white/5">
          <span className="project-live-dot size-1.5 rounded-full bg-red-500 shadow-[0_0_4px_rgba(239,68,68,0.8)]" />
          <span className="text-[8px] tracking-widest text-white/80">REC</span>
          <span className="ml-1 text-[8px] text-white/40 font-sans">00:14:22</span>
        </div>
        <div className="flex items-center gap-1.5 rounded bg-black/40 px-2 py-1 backdrop-blur-md border border-white/5 text-[8px] text-white/60 tracking-wider">
          <span>FPS: 59.8</span>
          <span className="mx-1 h-2 w-px bg-white/20" />
          <span>LATENCY: 12ms</span>
        </div>
      </div>

      {/* ─── Center Reticle & Hand Landmarks ─── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        
        {/* Abstract Hand Landmark Grid */}
        <motion.div 
          className="relative size-32"
          animate={{ scale: [1, 1.02, 1], rotate: [0, 1, 0, -1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Box */}
          <div className="absolute inset-0 border border-purple-400/40 bg-purple-400/5 shadow-[0_0_15px_rgba(192,132,252,0.15)] rounded-sm" />
          
          {/* Landmark Points (Fake) */}
          <div className="absolute top-1/4 left-1/4 size-1.5 rounded-full bg-purple-400 shadow-[0_0_4px_rgba(192,132,252,0.8)]" />
          <div className="absolute top-1/3 right-1/3 size-1.5 rounded-full bg-purple-400 shadow-[0_0_4px_rgba(192,132,252,0.8)]" />
          <div className="absolute bottom-1/3 left-1/2 size-1.5 rounded-full bg-purple-400 shadow-[0_0_4px_rgba(192,132,252,0.8)]" />
          <div className="absolute top-1/2 left-2/3 size-1.5 rounded-full bg-purple-400 shadow-[0_0_4px_rgba(192,132,252,0.8)]" />
          <div className="absolute bottom-1/4 right-1/4 size-1.5 rounded-full bg-purple-400 shadow-[0_0_4px_rgba(192,132,252,0.8)]" />
          
          {/* Connecting Lines */}
          <svg className="absolute inset-0 size-full opacity-60" overflow="visible">
            <line x1="25%" y1="25%" x2="50%" y2="66%" stroke="#c084fc" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="50%" y1="66%" x2="75%" y2="75%" stroke="#c084fc" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="66%" y1="33%" x2="66%" y2="50%" stroke="#c084fc" strokeWidth="1" strokeDasharray="2 2" />
          </svg>

          {/* Target Label */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-purple-400/20 px-1.5 py-0.5 text-[8px] text-purple-300 backdrop-blur-sm border border-purple-400/30">
            HAND DETECTED
          </div>
        </motion.div>
      </div>

      {/* ─── Bottom HUD / Translation Result ─── */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <div className="flex flex-col gap-2">
          
          {/* Confidence Meter */}
          <div className="self-end rounded bg-black/40 px-2 py-1 backdrop-blur-md border border-white/5 w-32">
            <div className="flex justify-between text-[7px] text-white/50 mb-1">
              <span>CONFIDENCE</span>
              <span className="text-purple-400">96.8%</span>
            </div>
            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-purple-400" 
                initial={{ width: "85%" }}
                animate={{ width: ["85%", "96%", "91%", "98%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
              />
            </div>
          </div>

          {/* Translation Output */}
          <div className="rounded-lg border border-purple-500/30 bg-purple-900/40 p-3 backdrop-blur-md shadow-[0_0_20px_rgba(192,132,252,0.15)] flex flex-col justify-center">
            <span className="text-[7px] tracking-[0.2em] text-purple-300/70 mb-1 uppercase">Live Translation</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-white tracking-wide">"HELLO WORLD"</span>
              <motion.span 
                className="w-1.5 h-3.5 bg-purple-400"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
