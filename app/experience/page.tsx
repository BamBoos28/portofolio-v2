"use client";

import dynamic from "next/dynamic";

const ExperienceSection = dynamic(() => import("@/components/sections/Experience"), {
  loading: () => <SectionSkeleton title="Experience" />,
});
const CertificateGallery = dynamic(() => import("@/components/sections/CertificateGallery"), {
  loading: () => <SectionSkeleton title="Certificates" />,
});

export default function ExperiencePage() {
  return (
    <>
      <ExperienceSection />
      <CertificateGallery />
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
