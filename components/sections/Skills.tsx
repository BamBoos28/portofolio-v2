"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { techStacks } from "@/data/constants";
import { TechStack } from "@/types";

export default function Skills() {
  const [selected, setSelected] = useState<TechStack>(techStacks[0]);
  const skillRef = useRef(null);
  const isInViewSkill = useInView(skillRef, { once: true, margin: "-500px" });

  return (
    <section
      id="skill"
      ref={skillRef}
      className="py-28 border-b-4 border-gray-500"
    >
      <div className="container mx-auto px-6 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-header font-bold text-gray-800 mb-4 text-center">
          My Tech Stack
        </h2>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInViewSkill ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-gray-600 text-lg leading-relaxed font-text text-center mb-14 max-w-6xl mx-auto"
        >
          Alat dan kerangka kerja yang saya kuasai dan gunakan untuk membangun
          aplikasi web yang cepat, efisien, dan skalabel.
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-10 w-full">
          {/* Detail View */}
          <motion.div
            key={selected.id}
            className="flex-1 bg-white shadow-[9px_4px_0_0_#000000] p-8 border-2 border-gray-300"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInViewSkill ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-9">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                className="text-6xl"
              >
                <img src={selected.icon} alt="icon-details" className="w-12 rounded-full" />
                
              </motion.div>
              <div>
                <h3 className="text-3xl font-header font-semibold text-gray-800 flex items-center gap-2">
                  {selected.name}
                  {selected.favorite && (
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  )}
                </h3>
              </div>
            </div>

            <motion.p
              key={selected.description}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-gray-600 leading-relaxed mb-2 font-text"
            >
              {selected.description}
            </motion.p>
          </motion.div>

          {/* Grid View */}
          <div className="flex-[1.5] grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {techStacks.map((tech, i) => (
              <motion.div
                key={tech.id}
                onClick={() => setSelected(tech)}
                className={`relative bg-white cursor-pointer border-4 hover:shadow-[9px_4px_0_0_#000000] transition duration-300 flex flex-col items-center justify-center p-4 ${
                  selected.id === tech.id
                    ? "border-gray-500"
                    : "border-transparent"
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInViewSkill ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  delay: i * 0.06,
                  type: "spring",
                  stiffness: 140,
                  damping: 10,
                }}
              >
                <img src={tech.icon} alt="icon" className="rounded-full w-6 mb-2"/>
                {/* <span className="text-4xl mb-2">{tech.icon}</span> */}
                <p className="text-sm font-medium text-gray-700 text-center">
                  {tech.name}
                </p>
                {tech.favorite && (
                  <Star className="absolute top-2 right-2 w-4 h-4 text-yellow-400 fill-yellow-400" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
