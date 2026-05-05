"use client";

import { projects } from "@/lib/data";
import { ExternalLink, Calendar } from "lucide-react";
import { GithubIcon } from "./Icons";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const arcana = ["FOOL", "MAGICIAN", "PRIESTESS"];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeading number="02" label="MISSIONS // ACTIVE" title="HEISTS" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={0.1 * (i + 1)}>
              <div className="group relative pt-4">
                {/* Arcana number floating outside */}
                <div className="absolute -top-1 left-2 sm:left-3 z-20 pointer-events-none">
                  <div className="p5-display text-accent text-5xl sm:text-6xl leading-none -skew-x-6 drop-shadow-[3px_3px_0_#000]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="p5-panel p5-panel-hover p-0 overflow-hidden h-full flex flex-col">
                  {/* Header bar */}
                  <div className="bg-accent border-b-2 border-foreground pl-16 sm:pl-24 pr-4 py-2 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="p5-condensed italic text-white text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] truncate">
                        ARCANA // {arcana[i % arcana.length]}
                      </span>
                    </div>
                    <span className="p5-condensed italic text-white/80 text-[10px] sm:text-xs tracking-widest hidden sm:flex items-center gap-1.5 flex-shrink-0">
                      <Calendar size={12} strokeWidth={3} />
                      {project.date.toUpperCase()}
                    </span>
                  </div>

                  {/* Halftone accent strip */}
                  <div className="h-3 p5-halftone opacity-80 border-b-2 border-foreground" />

                  <div className="p-5 sm:p-6 flex-1 flex flex-col">
                    {/* Title block */}
                    <div className="mb-4">
                      <h3 className="p5-display text-foreground text-2xl sm:text-3xl md:text-4xl leading-none -skew-x-6 mb-2">
                        {project.title.toUpperCase()}
                      </h3>
                      <p className="p5-condensed italic text-accent text-sm tracking-wider">
                        {"//"} {project.subtitle.toUpperCase()}
                      </p>
                      <p className="sm:hidden p5-condensed italic text-foreground/40 text-[10px] tracking-widest mt-1.5 flex items-center gap-1.5">
                        <Calendar size={11} strokeWidth={3} />
                        {project.date.toUpperCase()}
                      </p>
                    </div>

                    {/* Tech stack as "abilities" */}
                    <div className="mb-4 pb-4 border-b-2 border-foreground/15">
                      <div className="p5-label text-accent mb-2">ABILITIES</div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="p5-chip text-xs">
                            <span>{tech}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights as briefing */}
                    <div className="mb-5 flex-1">
                      <div className="p5-label text-accent mb-2">BRIEFING</div>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, j) => (
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

                    {/* Action button */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p5-button mt-auto self-start"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <span className="flex items-center gap-2 text-xs">
                        <GithubIcon size={14} />
                        VIEW SOURCE
                        <ExternalLink size={12} strokeWidth={3} />
                      </span>
                    </a>
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
