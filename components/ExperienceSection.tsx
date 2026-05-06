"use client";

import { workExperience } from "@/lib/data";
import { Briefcase, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeading number="03" label="DOSSIER // RECORD" title="EXPERIENCE" />
        </ScrollReveal>

        <div className="space-y-8">
          {workExperience.map((exp, i) => (
            <ScrollReveal key={exp.company} delay={0.1 * (i + 1)}>
              <div className="p5-panel p-0 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                  {/* Left: dates / icon */}
                  <div className="md:col-span-3 bg-accent text-white p-5 border-b-2 md:border-b-0 md:border-r-2 border-foreground flex md:flex-col justify-between md:justify-start gap-3">
                    <div className="w-12 h-12 bg-black border-2 border-white flex items-center justify-center flex-shrink-0">
                      <Briefcase size={20} className="text-accent" strokeWidth={3} />
                    </div>
                    <div className="md:mt-auto text-right md:text-left">
                      <div className="p5-label text-white/70 mb-1">PERIOD</div>
                      <div className="p5-condensed italic text-white text-sm tracking-wider leading-tight">
                        {exp.dates.toUpperCase()}
                      </div>
                    </div>
                  </div>

                  {/* Right: content */}
                  <div className="md:col-span-9 p-6">
                    <div className="mb-4">
                      <h3 className="p5-display text-foreground text-3xl -skew-x-6 leading-tight mb-1">
                        {exp.title.toUpperCase()}
                      </h3>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="p5-condensed italic text-accent text-sm tracking-wider">
                          {exp.company.toUpperCase()}
                        </span>
                        <span className="text-foreground/30">{"//"}</span>
                        <span className="flex items-center gap-1 p5-condensed italic text-foreground/60 text-sm tracking-wider">
                          <MapPin size={12} strokeWidth={3} />
                          {exp.location.toUpperCase()}
                        </span>
                      </div>
                    </div>

                    <div className="h-px bg-foreground/15 mb-4" />

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, j) => (
                        <li
                          key={j}
                          className="text-sm text-foreground/80 leading-relaxed pl-5 relative"
                        >
                          <span className="absolute left-0 top-1.5 text-accent font-bold text-xs">
                            ▸
                          </span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
