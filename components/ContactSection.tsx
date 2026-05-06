"use client";

import { personalInfo } from "@/lib/data";
import { Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const contactLinks = [
  {
    icon: Mail,
    label: "EMAIL",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: "PHONE",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
  },
  {
    icon: GithubIcon,
    label: "GITHUB",
    value: "@XavierRHMN",
    href: personalInfo.github,
  },
  {
    icon: LinkedinIcon,
    label: "LINKEDIN",
    value: "Xavier Rahman",
    href: personalInfo.linkedin,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <SectionHeading number="05" label="TRANSMISSION // OPEN" title="CONTACT" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          {/* Calling card */}
          <div className="relative">
            {/* Background offset shadow card (red) */}
            <div className="absolute inset-0 bg-accent translate-x-3 translate-y-3 -rotate-1" />

            {/* Main card */}
            <div className="relative bg-foreground border-4 border-black p-6 sm:p-10 lg:p-12">
              {/* Top accent stripe */}
              <div className="absolute top-3 left-3 right-3 h-1.5 p5-stripes opacity-90" />

              <div className="mt-4">
                {/* Header */}
                <div className="text-center mb-8 pb-6 border-b-4 border-black border-dashed">
                  <div className="inline-block p5-skew bg-accent border-2 border-black px-3 py-1 mb-3">
                    <div className="p5-skew-content">
                      <span className="p5-condensed italic text-white text-xs tracking-[0.3em]">
                        OFFICIAL CALLING CARD
                      </span>
                    </div>
                  </div>
                  <h3 className="p5-display text-black text-3xl sm:text-4xl md:text-5xl -skew-x-6 leading-none mb-2">
                    SENDER&apos;S NOTICE
                  </h3>
                  <p className="p5-condensed italic text-black/70 text-sm tracking-wider mt-3 max-w-xl mx-auto">
                    YOU, WHO ARE READING THIS — I AM ALWAYS OPEN TO NEW OPPORTUNITIES,
                    COLLABORATIONS, AND CONVERSATIONS. REACH OUT.
                  </p>
                </div>

                {/* Contact grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {contactLinks.map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-3 p-4 bg-black hover:bg-accent border-2 border-black transition-colors duration-200"
                    >
                      <div className="w-10 h-10 bg-accent group-hover:bg-black border-2 border-foreground flex items-center justify-center flex-shrink-0 transition-colors">
                        <Icon size={16} className="text-white" strokeWidth={3} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="p5-label text-accent group-hover:text-white text-[10px] mb-0.5 transition-colors">
                          {label}
                        </div>
                        <div className="p5-condensed italic text-foreground text-sm tracking-wider truncate">
                          {value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Location footer */}
                <div className="flex items-center gap-2 justify-center pt-6 border-t-4 border-black border-dashed">
                  <MapPin size={14} className="text-accent" strokeWidth={3} />
                  <span className="p5-condensed italic text-black/70 text-xs tracking-[0.2em]">
                    BASED IN {personalInfo.location.toUpperCase()}
                  </span>
                </div>

                {/* Signature */}
                <div className="mt-6 text-right">
                  <div className="inline-block">
                    <div className="p5-label text-black/50 mb-1 text-right">— SINCERELY,</div>
                    <div className="p5-display text-accent text-3xl -skew-x-6 leading-none" style={{ textShadow: "2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000" }}>
                      XAVIER R.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Footer */}
        <ScrollReveal delay={0.2}>
          <div className="mt-16 flex items-center justify-between gap-4 flex-wrap">
            <span className="p5-condensed italic text-foreground/40 text-xs tracking-widest">
              &copy; {new Date().getFullYear()} XAVIER RAHMAN // ALL RIGHTS RESERVED
            </span>
            <span className="p5-condensed italic text-accent/70 text-xs tracking-[0.3em]">
              END OF FILE //
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
