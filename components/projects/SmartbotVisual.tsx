"use client";

import { motion } from "framer-motion";

export function SmartbotVisual() {
  return (
    <div className="project-visual-wrapper relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border/50 bg-[#0a0b12] font-mono text-[10px] shadow-2xl backdrop-blur-md">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08)_0%,transparent_60%)]" />

      {/* ─── Sidebar ─── */}
      <div className="absolute left-0 top-0 bottom-0 w-32 border-r border-border/30 bg-surface/30 p-3 hidden sm:flex flex-col">
        <div className="flex items-center gap-2 mb-6">
          <div className="size-4 rounded-full bg-indigo-500 flex items-center justify-center">
            <span className="text-[8px] text-white">AI</span>
          </div>
          <span className="font-sans font-bold text-white/90 text-[10px]">SMARTBOT</span>
        </div>

        <button className="flex items-center gap-2 rounded border border-indigo-500/30 bg-indigo-500/10 px-2 py-1.5 mb-4 hover:bg-indigo-500/20 transition-colors">
          <span className="text-indigo-400">+</span>
          <span className="text-indigo-400/90 text-[9px]">New Chat</span>
        </button>

        <span className="text-[8px] text-muted/50 uppercase tracking-wider mb-2">History</span>
        <div className="flex flex-col gap-1.5 flex-1 overflow-hidden">
          {["System Architecture", "React Hooks", "Document Analysis", "Next.js APIs"].map((chat, i) => (
            <div key={i} className="flex items-center gap-2 p-1.5 rounded hover:bg-white/5 transition-colors cursor-default">
              <span className="size-3 rounded-sm bg-white/5" />
              <span className="text-[9px] text-white/60 truncate">{chat}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-2 pt-3 border-t border-border/30">
          <div className="size-6 rounded-full bg-surface-elevated ring-1 ring-border/50" />
          <span className="text-[9px] text-white/70">Anjali S.</span>
        </div>
      </div>

      {/* ─── Main Chat Interface ─── */}
      <div className="absolute top-0 right-0 bottom-0 left-0 sm:left-32 flex flex-col bg-transparent">
        
        {/* Header */}
        <div className="flex h-10 items-center justify-between border-b border-border/30 bg-surface/20 px-4">
          <span className="text-[10px] text-white/80">System Architecture</span>
          <div className="flex gap-2">
            <span className="rounded bg-indigo-500/20 px-2 py-0.5 text-[8px] text-indigo-400 border border-indigo-500/30">GPT-4</span>
          </div>
        </div>

        {/* Chat Log */}
        <div className="flex-1 p-4 flex flex-col gap-4 overflow-hidden relative">
          
          {/* User Message */}
          <div className="flex gap-3 max-w-[85%] self-end">
            <div className="rounded-lg rounded-tr-sm bg-indigo-500/20 border border-indigo-500/30 p-3 text-white/80">
              <div className="h-1.5 w-32 bg-indigo-200/40 rounded-sm mb-1.5" />
              <div className="h-1.5 w-48 bg-indigo-200/40 rounded-sm" />
            </div>
            <div className="size-6 shrink-0 rounded-full bg-surface-elevated ring-1 ring-border/50 mt-1" />
          </div>

          {/* AI Response */}
          <div className="flex gap-3 max-w-[90%]">
            <div className="size-6 shrink-0 rounded-full bg-indigo-500 flex items-center justify-center mt-1">
              <span className="text-[8px] text-white">AI</span>
            </div>
            <div className="rounded-lg rounded-tl-sm border border-border/30 bg-surface/40 p-3 w-full">
              
              {/* Document Attachment Mockup */}
              <div className="mb-3 flex items-center gap-3 rounded-md border border-border/20 bg-background/50 p-2">
                <div className="size-8 rounded bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                  <span className="text-[6px] text-red-400">PDF</span>
                </div>
                <div>
                  <span className="block text-[9px] text-white/80">architecture-diagram.pdf</span>
                  <span className="block text-[7px] text-muted/50 mt-0.5">Parsed 2.4MB • 14 pages</span>
                </div>
              </div>

              {/* Text Blocks */}
              <div className="space-y-2">
                <div className="h-1.5 w-full bg-white/20 rounded-sm" />
                <div className="h-1.5 w-11/12 bg-white/20 rounded-sm" />
                <div className="h-1.5 w-3/4 bg-white/20 rounded-sm" />
                <div className="mt-3 h-1.5 w-1/2 bg-white/20 rounded-sm" />
                
                {/* Simulated cursor blinking */}
                <motion.div 
                  className="mt-1 h-3 w-1.5 bg-indigo-400 rounded-sm"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>

            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 pt-0">
          <div className="relative rounded-lg border border-border/40 bg-surface/50 p-2 flex items-center gap-2">
            <div className="size-5 rounded bg-white/5 flex items-center justify-center cursor-default">
              <span className="text-[12px] text-white/40">+</span>
            </div>
            <div className="flex-1 h-4 bg-transparent border-none text-[10px] text-white/30 flex items-center px-1">
              Message SMARTBOT...
            </div>
            <div className="size-6 rounded bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center cursor-default">
               <div className="size-2 bg-indigo-400 rounded-sm" />
            </div>
          </div>
          <div className="text-center mt-2">
            <span className="text-[7px] text-muted/40">AI SDK • Next.js App Router • Vercel AI</span>
          </div>
        </div>

      </div>
    </div>
  );
}
