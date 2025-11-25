"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { experiences, educations } from "@/data/constants";

export default function ExperienceSection() {
  const [selected, setSelected] = useState(experiences[0]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true});

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 border-b-4 border-gray-500 bg-gray-200"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-header font-bold text-center text-gray-800 mb-4"
        >
          Experience & Education
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-gray-600 text-lg leading-relaxed font-text text-center mb-14 max-w-6xl mx-auto"
        >
          Perjalanan profesional dan akademis saya. Bagian ini merangkum peran,
          tanggung jawab, serta latar belakang pendidikan yang membentuk
          keahlian saya saat ini.
        </motion.h2>

        {/* Timeline + Detail */}
        <div className="flex flex-col lg:flex-row gap-12 0">
          {/* Timeline Bagian Kiri */}
          <div className="relative flex-1">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-400" />

            <div className="grid grid-cols-2 gap-y-10">
              {/* Kolom Education */}
              <div className="pr-10 flex flex-col gap-10 items-end">
                {educations.map((edu, i) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.2,
                      type: "spring",
                      stiffness: 120,
                    }}
                    onClick={() => setSelected(edu)}
                    className="cursor-pointer flex flex-col items-end text-right group"
                  >
                    <motion.div
                      className={`w-5 h-5 rounded-full border-4 mb-2 ${
                        selected.id === edu.id
                          ? "bg-gray-800 border-gray-600"
                          : "bg-white border-gray-400"
                      }`}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                    />
                    <p className="text-sm font-text text-gray-500">
                      {edu.year}
                    </p>
                    <p
                      className={`font-header font-semibold ${
                        selected.id === edu.id
                          ? "text-gray-900"
                          : "text-gray-700 group-hover:text-gray-900"
                      }`}
                    >
                      {edu.title}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Kolom Experience */}
              <div className="pl-10 flex flex-col gap-10 items-start">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: 40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.2,
                      type: "spring",
                      stiffness: 120,
                    }}
                    onClick={() => setSelected(exp)}
                    className="cursor-pointer flex flex-col items-start group"
                  >
                    <motion.div
                      className={`w-5 h-5 rounded-full border-4 mb-2 ${
                        selected.id === exp.id
                          ? "bg-gray-800 border-gray-600"
                          : "bg-white border-gray-400"
                      }`}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                    />
                    <p className="text-sm font-text text-gray-500">
                      {exp.year}
                    </p>
                    <p
                      className={`font-header font-semibold ${
                        selected.id === exp.id
                          ? "text-gray-900"
                          : "text-gray-700 group-hover:text-gray-900"
                      }`}
                    >
                      {exp.title}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Detail Kanan */}
          <motion.div
            key={selected.id}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="flex-1 bg-white border-2 border-gray-300 shadow-[9px_4px_0_0_#000000] p-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-header font-bold text-gray-800 mb-3">
                  {selected.title}
                </h3>
                <p className="text-gray-600 font-text leading-relaxed mb-5">
                  {selected.description}
                </p>

                {/* List Poin Detail */}
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: { staggerChildren: 0.15 },
                    },
                  }}
                  className="list-disc list-inside space-y-2 text-gray-700"
                >
                  {selected.points?.map((point, idx) => (
                    <motion.li
                      key={idx}
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.4 }}
                      className="font-text"
                    >
                      {point}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
