"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Solid black base */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      {/* Subtle red diamond pattern */}
      <div className="absolute inset-0 p5-diamonds opacity-60" />

      {/* Halftone overlay - top fade */}
      <div className="absolute top-0 left-0 right-0 h-[60vh] p5-halftone p5-halftone-fade opacity-50" />

      {/* Slow rotating speed lines on left side */}
      <motion.div
        className="absolute -left-[30vw] top-1/4 w-[80vw] h-[80vw] p5-speed-lines opacity-40"
        animate={{ rotate: 360 }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
      />

      {/* Slow rotating speed lines on right side */}
      <motion.div
        className="absolute -right-[30vw] bottom-0 w-[70vw] h-[70vw] p5-speed-lines opacity-30"
        animate={{ rotate: -360 }}
        transition={{ duration: 220, repeat: Infinity, ease: "linear" }}
      />

      {/* Pulsing red glow blobs */}
      <motion.div
        className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(230, 0, 18, 0.18) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(230, 0, 18, 0.15) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Diagonal stripe accent at top */}
      <div className="absolute top-0 left-0 right-0 h-1 p5-stripes opacity-80" />
      {/* Diagonal stripe accent at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 p5-stripes opacity-80" />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)",
        }}
      />
    </div>
  );
}
