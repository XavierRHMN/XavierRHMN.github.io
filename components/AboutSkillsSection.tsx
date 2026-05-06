"use client";

import { skills, education } from "@/lib/data";
import { GraduationCap, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

export default function AboutSkillsSection() {
  return (
    <section id="skills" className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeading number="01" label="STATUS // PROFILE" title="ARSENAL" />
        </ScrollReveal>

        {/* Profile / Education card */}
        <ScrollReveal delay={0.1}>
          <div className="relative mb-16">
            <div className="p5-panel p-0 overflow-hidden">
              {/* Top red bar */}
              <div className="bg-accent border-b-2 border-foreground p-3 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <GraduationCap size={18} className="text-white flex-shrink-0" strokeWidth={3} />
                  <span className="p5-condensed italic text-white text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] truncate">
                    PROFILE // EDUCATION
                  </span>
                </div>
                <span className="p5-condensed italic text-white/80 text-xs tracking-widest hidden sm:block flex-shrink-0">
                  RANK 3
                </span>
              </div>

              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left: institution */}
                <div className="md:col-span-2">
                  <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                    <h3 className="p5-display text-foreground text-2xl sm:text-3xl -skew-x-6">
                      {education.institution}
                    </h3>
                  </div>
                  <p className="text-foreground/70 font-medium mb-4">{education.degree}</p>

                  <div className="flex flex-wrap gap-2">
                    {education.coursework.map((course) => (
                      <span key={course} className="p5-chip">
                        <span>{course}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: stats */}
                <div className="md:border-l-2 md:border-foreground/20 md:pl-6 space-y-4">
                  <div>
                    <div className="p5-label text-accent mb-1">CGPA</div>
                    <div className="p5-display text-foreground text-4xl -skew-x-6">
                      {education.cgpa}
                    </div>
                  </div>
                  <div>
                    <div className="p5-label text-accent mb-1">EXP. GRAD.</div>
                    <div className="p5-condensed italic text-foreground text-lg tracking-wider">
                      {education.expectedGraduation}
                    </div>
                  </div>
                  <div className="pt-3 border-t-2 border-foreground/20">
                    <div className="flex items-start gap-2">
                      <Award size={16} className="text-accent mt-0.5 flex-shrink-0" strokeWidth={3} />
                      <span className="p5-condensed italic text-foreground/90 text-xs tracking-wider leading-tight">
                        {education.awards[0].toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Skills heading */}
        <ScrollReveal delay={0.15}>
          <div className="mb-8 flex items-center gap-4">
            <div className="p5-skew bg-accent border-2 border-foreground px-3 py-1.5">
              <div className="p5-skew-content">
                <span className="p5-condensed italic text-white text-sm tracking-[0.2em]">
                  SKILL TREE
                </span>
              </div>
            </div>
            <div className="flex-1 h-1 p5-stripes-thin opacity-80" />
          </div>
        </ScrollReveal>

        {/* Skills by category — stacked rows */}
        <div className="space-y-6">
          {skills.map((category, i) => (
            <ScrollReveal key={category.category} delay={0.1 * (i + 1)}>
              <div className="p5-panel p-0 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                  {/* Category label - red side panel */}
                  <div className="bg-accent text-white p-4 md:p-5 flex md:flex-col items-center md:items-start justify-between md:justify-center gap-2 border-b-2 md:border-b-0 md:border-r-2 border-foreground">
                    <div className="p5-display text-white text-3xl md:text-4xl leading-none -skew-x-6">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <div className="p5-label text-white/80 text-[10px]">CATEGORY</div>
                      <div className="p5-condensed italic text-white text-base tracking-wider">
                        {category.category.toUpperCase()}
                      </div>
                    </div>
                  </div>

                  {/* Skill chips */}
                  <div className="md:col-span-3 p-5 flex flex-wrap gap-2 items-center">
                    {category.skills.map((skill) => (
                      <span key={skill} className="p5-chip">
                        <span>{skill}</span>
                      </span>
                    ))}
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
