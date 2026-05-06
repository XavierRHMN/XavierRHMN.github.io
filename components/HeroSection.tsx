"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "@/lib/data";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col px-4 sm:px-6 lg:px-12 pt-24 pb-8 overflow-hidden"
    >
      {/* Giant background "X" mark */}
      <motion.div
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="p5-display text-accent text-[14rem] sm:text-[24rem] lg:text-[36rem] leading-none -skew-x-6">
          X
        </div>
      </motion.div>

      <div className="relative max-w-7xl w-full mx-auto flex-1 flex flex-col justify-center">
        {/* Top decorative strip */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex items-center justify-between mb-8 lg:mb-10"
        >
          <div className="flex items-center gap-3">
            <div className="p5-skew bg-accent border-2 border-black px-3 py-1">
              <div className="p5-skew-content">
                <span className="p5-label text-white">PORTFOLIO {"// 2026"}</span>
              </div>
            </div>
            <div className="h-px w-16 bg-accent" />
          </div>
          <div className="flex items-center gap-3">
            <div className="h-px w-16 bg-accent" />
            <span className="p5-condensed italic text-foreground/70 text-xs tracking-widest">
              CODE NAME {"// JOKER.DEV"}
            </span>
          </div>
        </motion.div>

        {/* Main hero card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left: Big stacked name */}
          <div className="lg:col-span-8 relative">
            {/* "I AM" tag above */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-4"
            >
              <div className="inline-flex items-center gap-3">
                <div className="h-1 w-12 bg-accent" />
                <span className="p5-condensed italic text-accent text-sm tracking-[0.3em]">
                  THE NAME&apos;S
                </span>
              </div>
            </motion.div>

            {/* Massive name — stacked */}
            <div className="relative">
              <motion.h1
                initial={{ opacity: 0, x: -100, skewX: -20 }}
                animate={{ opacity: 1, x: 0, skewX: -6 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="p5-display text-foreground leading-[0.85] block"
                style={{ fontSize: "clamp(3.25rem, 14vw, 12rem)" }}
              >
                XAVIER
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, x: 100, skewX: -20 }}
                animate={{ opacity: 1, x: 0, skewX: -6 }}
                transition={{ duration: 0.7, delay: 0.65, ease: [0.4, 0, 0.2, 1] }}
                className="p5-display leading-[0.85] block"
                style={{ fontSize: "clamp(3.25rem, 14vw, 12rem)" }}
              >
                <span className="text-accent p5-num-shadow-lg">
                  RAHMAN
                </span>
              </motion.h1>
            </div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-6 flex items-center gap-3 flex-wrap"
            >
              <div className="p5-skew bg-foreground border-2 border-black px-3 py-1.5">
                <div className="p5-skew-content">
                  <span className="p5-condensed italic text-black text-sm sm:text-base tracking-wider">
                    DEVELOPER
                  </span>
                </div>
              </div>
              <span className="text-accent text-2xl">×</span>
              <div className="p5-skew bg-foreground border-2 border-black px-3 py-1.5">
                <div className="p5-skew-content">
                  <span className="p5-condensed italic text-black text-sm sm:text-base tracking-wider">
                    INNOVATOR
                  </span>
                </div>
              </div>
              <span className="text-accent text-2xl">×</span>
              <div className="p5-skew bg-accent border-2 border-black px-3 py-1.5">
                <div className="p5-skew-content">
                  <span className="p5-condensed italic text-white text-sm sm:text-base tracking-wider">
                    PROBLEM SOLVER
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Contact links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p5-button"
                aria-label="GitHub"
              >
                <span className="flex items-center gap-2">
                  <GithubIcon size={16} />
                  GITHUB
                </span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p5-button"
                aria-label="LinkedIn"
              >
                <span className="flex items-center gap-2">
                  <LinkedinIcon size={16} />
                  LINKEDIN
                </span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p5-button"
                aria-label="Email"
              >
                <span className="flex items-center gap-2">
                  <Mail size={16} strokeWidth={2.5} />
                  EMAIL
                </span>
              </a>
            </motion.div>
          </div>

          {/* Right: Calling card panel */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 4 }}
            animate={{ opacity: 1, x: 0, rotate: 2 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="lg:col-span-4 relative"
          >
            <div className="relative p5-clip-card bg-foreground text-black p-6 border-4 border-black shadow-[8px_8px_0_#e60012]">
              <div className="absolute top-2 right-2 left-2 h-1 p5-stripes opacity-80" />

              <div className="mt-3">
                <div className="p5-label text-accent mb-2">CALLING CARD</div>
                <h3 className="p5-display text-2xl text-black leading-tight -skew-x-6 mb-4">
                  TAKE THE WEB
                </h3>
                <div className="h-px bg-black/20 mb-4" />

                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <Phone size={14} className="text-accent mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                    <span className="p5-condensed text-black tracking-wider">
                      {personalInfo.phone}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail size={14} className="text-accent mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                    <span className="p5-condensed text-black tracking-wider break-all">
                      {personalInfo.email}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin size={14} className="text-accent mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                    <span className="p5-condensed text-black tracking-wider">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-black/20">
                  <div className="text-[10px] text-black/60 italic p5-condensed tracking-wider">
                    &ldquo;I shall take your code.&rdquo; — A. Phantom Thief
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
