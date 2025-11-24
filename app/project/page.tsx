"use client";

import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import CardStack from "@/components/ui/CardStack";
import { PROJECTS } from "@/data/constants";


const FILTERS = ["Semua", "Website", "Mobile", "Other"];

export default function ProjectsShowcase() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-200px" });

  const filteredProjects = useMemo(() => {
    if (activeFilter === "Semua") return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-12 border-b-4 border-gray-500 bg-gray-50"
    >
      <div className="container mx-auto px-6 flex flex-col items-center justify-center">
        {/* Title */}
        <h2 className="text-4xl font-header font-bold text-gray-800 mb-4 text-center">
          My Projects
        </h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-gray-600 text-lg leading-relaxed font-text text-center mb-10 max-w-4xl mx-auto"
        >
          Beberapa proyek yang telah saya kembangkan — mulai dari aplikasi web,
          mobile, dan beberapa bidang yang saya kuasai. Masing-masing dibuat dengan fokus pada
          performa, dan pengalaman pengguna yang baik.
        </motion.p>

        {/* Filter Buttons */}
        <motion.div
          className="flex justify-center gap-4 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {FILTERS.map((filter) => (
            <motion.button
              key={filter}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 border-2 font-header text-sm font-semibold uppercase tracking-wide transition-all
                ${
                  activeFilter === filter
                    ? "border-gray-600 shadow-[5px_4px_0_0_#000000]"
                    : "bg-white text-gray-700 border-gray-400 hover:bg-gray-100"
                }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Cards */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  stiffness: 120,
                  damping: 9,
                }}
                className="relative flex flex-col border border-gray-500/20 rounded-lg mb-6"
              >
                {/* Card Image */}
                <CardStack images={project.image}/>

                {/* Card Content */}
                <div className="p-6 text-left flex flex-col  mt-4 transition-all">
                  <h3 className="text-xl font-header font-bold mb-2 text-gray-900">
                    {project.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 flex-1 font-text">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs capitalize font-semibold bg-gray-200 border border-gray-300 text-gray-800 px-3 py-1 rounded-full font-text"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
