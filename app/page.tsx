import AnimatedBackground from "@/components/AnimatedBackground";
import GlassNav from "@/components/GlassNav";
import HeroSection from "@/components/HeroSection";
import AboutSkillsSection from "@/components/AboutSkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ExtracurricularsSection from "@/components/ExtracurricularsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <GlassNav />
      <main className="relative z-10">
        <HeroSection />
        <AboutSkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ExtracurricularsSection />
        <ContactSection />
      </main>
    </>
  );
}
