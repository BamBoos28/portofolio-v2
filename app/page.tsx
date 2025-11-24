"use client";

import ContainerProvider from "@/components/ui/ContainerProvider";
import dynamic from "next/dynamic";

// Lazy load setiap section berat
const Hero = dynamic(() => import("@/components/sections/Hero"), {
  loading: () => <SectionSkeleton title="Hero" />,
});
const QuickLinks = dynamic(() => import("@/components/sections/QuickLinks"), {
  loading: () => <SectionSkeleton title="Quick Links" />,
});
const Projects = dynamic(() => import("@/components/sections/Projects"), {
  loading: () => <SectionSkeleton title="Projects" />,
});
const Skills = dynamic(() => import("@/components/sections/Skills"), {
  loading: () => <SectionSkeleton title="Skills" />,
});
const ExperienceSection = dynamic(
  () => import("@/components/sections/Experience"),
  { loading: () => <SectionSkeleton title="Experience" /> }
);
const ContactSection = dynamic(() => import("@/components/sections/Contact"), {
  loading: () => <SectionSkeleton title="Contact" />,
});

export default function Home() {
  return (
      <main className="min-h-screen bg-white text-gray-900 font-sans">
        <Hero />
        <QuickLinks />
        <Projects />
        <Skills />
        <ExperienceSection />
        <ContactSection />
      </main>
  );
}

/* 💡 Skeleton Loader Ringan */
function SectionSkeleton({ title }: { title: string }) {
  return (
    <div className="w-full py-16 flex items-center justify-center animate-pulse">
      <div className="text-gray-400 text-sm">Loading {title}...</div>
    </div>
  );
}
