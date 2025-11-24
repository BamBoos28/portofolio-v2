"use client";

import { ChevronLast, Settings, GraduationCap, Rocket, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { animationVariants } from "@/data/constants";

export default function QuickLinks() {
  // Data ikon dan label disusun dalam array biar mudah diatur
  const quickLinks = [
    {
      label: "WORK",
      icon: <Settings strokeWidth={2.8} className="w-6 h-6" />,
    },
    {
      label: "LEARN",
      icon: <GraduationCap strokeWidth={2.8} className="w-6 h-6" />,
    },
    {
      label: "INNOVATE",
      icon: <Rocket strokeWidth={2.8} className="w-6 h-6" />,
    },
    {
      label: "DEVELOP",
      icon: <BarChart3 strokeWidth={2.8} className="w-6 h-6" />,
    },
  ];

  return (
    <section className="relative z-10 max-w-4xl mx-auto -bottom-8 ">
      <motion.div
        variants={animationVariants.quickLinkContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap justify-around bg-white border-2 border-gray-500"
        viewport={{ once: true, amount: 0.2 }}
      >
        {quickLinks.map(({ label, icon }) => (
          <motion.div
            key={label}
            variants={animationVariants.quickLinkItem}
            whileHover={{ scale: 1.03 }}
            className="flex-1 border-2 uppercase font-header border-gray-500 bg-gray-100 p-4 text-center font-bold flex justify-between
             cursor-pointer hover:bg-gray-200 transition-colors"
          >
            <div className="flex items-center gap-2 text-gray-800">
              {icon}
              <span>{label}</span>
            </div>
            <ChevronLast strokeWidth={3} className="text-gray-700" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
