"use client";

import { extracurriculars } from "@/lib/data";
import { Users, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

export default function ExtracurricularsSection() {
  return (
    <section id="activities" className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeading number="04" label="LINKS // SOCIAL" title="CONFIDANTS" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {extracurriculars.map((activity, i) => (
            <ScrollReveal key={activity.organization} delay={0.1 * (i + 1)}>
              <div className="p5-panel p5-panel-skew p5-panel-hover p-0 overflow-hidden h-full">
                {/* Header */}
                <div className="bg-foreground text-black p-3 border-b-2 border-foreground flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-accent" strokeWidth={3} />
                    <span className="p5-condensed italic text-black text-xs tracking-[0.2em]">
                      RANK {String(i + 1).padStart(2, "0")} {"//"} BOND
                    </span>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <div
                        key={j}
                        className={`w-2 h-3 ${j < (i === 0 ? 4 : 3) ? "bg-accent" : "bg-black/20"} skew-x-[-12deg]`}
                      />
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <div className="p5-label text-accent mb-1">{activity.dates.toUpperCase()}</div>
                    <h3 className="p5-display text-foreground text-2xl -skew-x-6 leading-tight mb-1">
                      {activity.title.toUpperCase()}
                    </h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="p5-condensed italic text-accent text-sm tracking-wider">
                        {activity.organization.toUpperCase()}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin size={11} className="text-foreground/40" strokeWidth={3} />
                      <span className="p5-condensed italic text-foreground/50 text-xs tracking-wider">
                        {activity.location.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <div className="h-px bg-foreground/15 mb-3" />

                  <ul className="space-y-2">
                    {activity.highlights.map((highlight, j) => (
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
