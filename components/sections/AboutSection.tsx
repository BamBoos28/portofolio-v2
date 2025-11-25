"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative  py-24 bg-gray-50 border-b-4 border-gray-500 overflow-hidden"
    >
      {/* Content */}
      <div className="container mx-auto flex flex-col lg:flex-row-reverse gap-12 px-6 lg:px-12">
        {/* Left Image */}
        <motion.div
          className="lg:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-[8px_8px_0_#000000]">
            <Image
              src="/me.png"
              alt="Profile Image"
              fill
              className="object-cover rounded-3xl"
              priority
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-header font-bold  text-gray-800 mb-4"
          >
            About Me
          </motion.h2>

          <h3 className="text-4xl font-text mt-3 mb-4 text-gray-800">
            Fullstack Web Developer
          </h3>

          <p className="text-gray-700 mb-8 leading-relaxed font-text">
            Saya adalah mahasiswa D4-Rekayasa Perangkat Lunak sekaligus
            programmer Laravel yang memiliki rasa ingin tahu tinggi terhadap
            teknologi yang digunakan oleh website profesional.
          </p>

          {/* Personal Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-gray-700 font-text">
            <InfoItem label="Name" value="Wan Aziz Zakaria" />
            <InfoItem label="Phone" value="+62 8954-2446-5906" />
            <InfoItem
              label="Age"
              value={(new Date().getFullYear() - 2003).toString()}
            />
            <InfoItem label="Email" value="wanazizakaria28@gmail.com" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col border border-gray-200  p-4 bg-white hover:shadow-[4px_4px_0_#000000] transition-all">
      <span className="text-sm font-semibold text-gray-500">{label}</span>
      <span className="text-gray-800 font-medium mt-1">{value}</span>
    </div>
  );
}
