"use client";

import dynamic from "next/dynamic";

const ExpertiseSection = dynamic(() => import("@/components/sections/Expertise"), {
  loading: () => <SectionSkeleton title="Expertise" />,
});
const Skills = dynamic(() => import("@/components/sections/Skills"), {
  loading: () => <SectionSkeleton title="Skills" />,
});

export default function ExpertisePage() {
  return (
    <>
      <ExpertiseSection />
      <Skills />
    </>
  );
}

function SectionSkeleton({ title }: { title: string }) {
  return (
    <div className="w-full py-12 flex items-center justify-center animate-pulse">
      <div className="text-gray-400 text-sm">Loading {title}...</div>
    </div>
  );
}
