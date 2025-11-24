"use client";

import { useState } from "react";
import ProjectCarousel from "@/components/ui/ProjectCarousel";
import { dummyProjects } from "@/data/constants";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="project"
      className="pt-28 pb-26 bg-gray-200 border-y-4 border-gray-500"
    >
      <h2 className="text-4xl font-header font-bold text-center mb-4">
        Project
      </h2>

      <h2 className="text-gray-600 text-lg leading-relaxed font-text text-center mb-14 max-w-6xl mx-auto">
        Perjalanan profesional dan akademis saya. Bagian ini merangkum peran,
        tanggung jawab, serta latar belakang pendidikan yang membentuk keahlian
        saya saat ini.
      </h2>

      <ProjectCarousel
        projects={dummyProjects}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </section>
  );
}
