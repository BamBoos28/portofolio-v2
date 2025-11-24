"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { animationVariants } from "@/data/constants";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between p-10 mt-12 container mx-auto ">
      <motion.div
        className="w-full md:w-1/2 z-10 bg-white/50"
        variants={animationVariants.heroContainer}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1
          variants={animationVariants.heroItem}
          className="text-5xl md:text-7xl font-bold font-header"
        >
          Hello. I'm Wan
        </motion.h1>

        <motion.p
          variants={animationVariants.heroItem}
          className="mt-4 text-lg font-text"
        >
          Saya seorang pengembang web yang bersemangat dalam membangun
          pengalaman digital yang indah dan fungsional. Mari wujudkan ide
          Anda.
        </motion.p>

        <motion.button
          variants={animationVariants.heroItem}
          className="inline-block px-6 py-2 mt-6 border-2 border-gray-500 bg-gray-200 font-bold hover:bg-gray-300 uppercase font-header"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Contact Me
        </motion.button>
      </motion.div>

      <motion.div
        className="flex md:w-1/2  justify-end  absolute md:relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        <motion.div
          className="w-80 h-80 relative rounded-full overflow-hidden shadow-lg"
          animate={{ y: [0, -8, 0], rotate: [0, 1, 0] }}
          transition={{ duration: 4, ease: "easeInOut" }}
        >
          <Image
            src="/me.png"
            alt="Foto Diri Wan"
            fill
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}