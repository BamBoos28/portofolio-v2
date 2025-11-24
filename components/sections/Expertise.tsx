"use client";

import { Code2, Smartphone, Package as Cube, Database } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className="relative py-20 border-b-4 border-gray-500 bg-gray-100"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-header font-bold text-gray-800">
          Keahlian Saya
        </h2>
      </motion.div>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-10">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:w-1/3 space-y-5"
        >
          <h3 className="text-3xl font-semibold font-header text-gray-800 leading-snug">
            Membangun Solusi Digital dan Teknis yang Efisien
          </h3>
          <p className="text-gray-600 font-text">
            Saya berfokus pada pengembangan sistem digital yang terintegrasi
            dari antarmuka pengguna, backend, hingga desain manufaktur digital.
          </p>
        </motion.div>

        {/* Right Cards */}
        <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
          {[
            {
              icon: <Code2 className="w-10 h-10 text-gray-700 mb-3" />,
              title: "Web Development",
              text: (
                <>
                  Mengembangkan website modern menggunakan{" "}
                  <strong>Next.js</strong> dan <strong>Laravel</strong> — fokus
                  pada performa tinggi, desain responsif, serta pengalaman
                  pengguna yang intuitif.
                </>
              ),
            },
            {
              icon: <Database className="w-10 h-10 text-gray-700 mb-3" />,
              title: "Backend & API",
              text: (
                <>
                  Merancang dan membangun <strong>RESTful API</strong> dengan{" "}
                  <strong>Laravel</strong> dan <strong>Node.js</strong> untuk
                  sistem web dan mobile. Menjamin keamanan, skalabilitas, serta
                  integrasi yang efisien dengan layanan eksternal.
                </>
              ),
            },
            {
              icon: <Smartphone className="w-10 h-10 text-gray-700 mb-3" />,
              title: "Mobile Development",
              text: (
                <>
                  Mengembangkan aplikasi Android dengan{" "}
                  <strong>React Native</strong> dan <strong>Java</strong>,
                  dengan performa cepat, desain bersih, serta pengalaman
                  pengguna yang konsisten di berbagai perangkat.
                </>
              ),
            },
            {
              icon: <Cube className="w-10 h-10 text-gray-700 mb-3" />,
              title: "Desain 3D & Manufaktur Digital",
              text: (
                <>
                  Membuat model 3D menggunakan{" "}
                  <strong>Autodesk Inventor</strong> untuk desain mekanik dan
                  manufaktur, serta <strong>AutoCAD</strong> untuk perancangan
                  2D teknis dan detail produksi.
                </>
              ),
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white border-2 border-gray-400 p-6 shadow-sm hover:shadow-md transition"
              whileHover={{ scale: 1.03 }}
            >
              {card.icon}
              <h4 className="text-xl font-semibold mb-2 font-header">
                {card.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed font-text">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
