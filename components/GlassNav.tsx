"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";
import { Menu, X } from "lucide-react";

export default function GlassNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar background */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className={`relative transition-colors duration-300 ${
          scrolled ? "bg-black/95 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        {/* Top thin red stripe */}
        <div className="h-1 p5-stripes" />

        <div className="flex items-center justify-between px-4 sm:px-8 py-3">
          {/* Logo block — angular red tag */}
          <a href="#hero" className="group flex items-center gap-3">
            <div className="relative p5-skew bg-accent border-2 border-black px-3 py-1.5 group-hover:bg-black group-hover:border-accent transition-colors duration-200">
              <div className="p5-skew-content">
                <span className="p5-condensed italic text-white text-lg leading-none group-hover:text-accent transition-colors">
                  XR
                </span>
              </div>
            </div>
            <span className="hidden sm:block p5-condensed italic text-foreground text-sm tracking-widest">
              {"// CODE THE WORLD"}
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="p5-slash relative inline-block px-4 py-2 p5-condensed italic text-sm tracking-widest text-foreground hover:text-white transition-colors duration-200"
                >
                  <span className="relative z-10">
                    {String(i + 1).padStart(2, "0")} {link.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p5-skew bg-accent border-2 border-black p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <div className="p5-skew-content">
              {mobileOpen ? <X size={20} strokeWidth={3} /> : <Menu size={20} strokeWidth={3} />}
            </div>
          </button>
        </div>
      </motion.div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden bg-black border-y-2 border-accent"
          >
            <ul className="flex flex-col">
              {navLinks.map((link, i) => (
                <li key={link.href} className="border-b border-accent/30 last:border-b-0">
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-6 py-4 p5-condensed italic text-base tracking-widest text-foreground hover:bg-accent hover:text-white transition-colors duration-150"
                  >
                    <span className="text-accent mr-3">{String(i + 1).padStart(2, "0")}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
