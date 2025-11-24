"use client";

import dynamic from "next/dynamic";

const AboutSection = dynamic(() => import("@/components/sections/AboutSection"), {
  loading: () => <SectionSkeleton title="About" />,
});
const ContactSection = dynamic(() => import("@/components/sections/Contact"), {
  loading: () => <SectionSkeleton title="Contact" />,
});

export default function ExperiencePage() {
  return (
    <>
      <AboutSection />
      <ContactSection />
    </>
  );
}

function SectionSkeleton({ title }: { title: string }) {
  return (
    <div className="w-full py-16 flex items-center justify-center animate-pulse">
      <div className="text-gray-400 text-sm">Loading {title}...</div>
    </div>
  );
}
