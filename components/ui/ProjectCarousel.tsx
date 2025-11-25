"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Project } from "@/types";
import { animationVariants } from "@/data/constants";

interface ProjectCarouselProps {
  projects: Project[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function ProjectCarousel({
  projects,
  activeIndex,
  setActiveIndex,
}: ProjectCarouselProps) {
  const [direction, setDirection] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true});

  const next = () => {
    setDirection(1);
    setActiveIndex((i) => (i + 1) % projects.length);
  };

  const prev = () => {
    setDirection(-1);
    setActiveIndex((i) => (i - 1 + projects.length) % projects.length);
  };

  const project = projects[activeIndex];
  const nextProjects = Array(3)
    .fill(0)
    .map((_, idx) => projects[(activeIndex + idx + 1) % projects.length]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="container mx-auto flex flex-col md:flex-row-reverse gap-6 px-6"
    >
      {/* === Mockup Browser Utama === */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{
          duration: 0.8,
          delay: 0.15,
          type: "spring",
          stiffness: 100,
        }}
        className="flex-1 bg-white border-2 border-gray-300 rounded-lg overflow-hidden shadow-[9px_4px_0_0_#000000]"
      >
        {/* browser bar */}
        <div className="bg-gray-100 p-2 flex items-center space-x-2 border-b border-gray-300">
          <div className="flex gap-2 items-center pl-4">
            <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
          </div>
          <div className="flex-1 bg-white border border-gray-300 rounded-full px-4 py-1 text-sm text-gray-600 mx-4 font-text">
            {project.title}
          </div>
        </div>

        {/* Gambar utama dengan animasi slide */}
        <div className="relative w-full h-64 md:h-[420px] overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={project.id}
              custom={direction}
              variants={animationVariants.slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 28,
              }}
              className="absolute inset-0"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="p-6">
          <motion.h3
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-2xl font-bold font-header"
          >
            {project.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-2 text-gray-700 font-text"
          >
            {project.description}
          </motion.p>

          <div className="mt-4 flex gap-4">
            <motion.button
              className="px-4 py-2 border-2 border-gray-500 font-text"
              whileTap={{ scale: 0.96 }}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55 }}
              onClick={prev}
            >
              Prev
            </motion.button>

            <motion.button
              className="px-4 py-2 border-2 border-gray-500 font-text"
              whileTap={{ scale: 0.96 }}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.65 }}
              onClick={next}
            >
              Next
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* === 3 Thumbnail Samping === */}
      <motion.div
        key={project.id}
        initial={{ opacity: 0, x: -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:w-1/3 bg-re min-h-full flex flex-col gap-4"
      >
        {nextProjects.map((p, idx) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              delay: 0.3 + idx * 0.15,
              type: "spring",
              stiffness: 180,
              damping: 18,
            }}
            onClick={() => setActiveIndex(p.id)}
            className="relative h-28 md:h-32 w-full border-2 border-gray-300 rounded-lg overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition flex-1"
          >
            <Image
              src={p.image}
              alt={p.title}
              fill
              style={{ objectFit: "cover" }}
              className="opacity-90 hover:opacity-100 transition"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
