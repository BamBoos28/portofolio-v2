"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { certificates } from "@/data/constants";
import { Certificate } from "@/types";

export default function CertificateGallery() {
  const [active, setActive] = useState<Certificate | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const translateX = useRef(0);

  const SPEED = 0.3; // smooth speed (px/frame)
  const loopItems = [...certificates, ...certificates, ...certificates]; // duplicate once for seamless loop

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId: number;
    const totalWidth = container.scrollWidth / 2; // width of one loop

    const animate = () => {
      if (!isPaused && !active) {
        translateX.current -= SPEED;
        if (Math.abs(translateX.current) >= totalWidth) {
          // reset position tanpa “blink”
          translateX.current = 0;
        }

        container.style.transform = `translateX(${translateX.current}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused, active]);

  return (
    <section className="relative py-20 bg-gray-100 border-b-4 border-gray-500 overflow-hidden">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-header font-bold text-gray-800">
          Sertifikat Saya
        </h2>
        <p className="text-gray-600 mt-2 font-text">
          Beberapa sertifikat profesional yang saya peroleh baik diluar maupun dalam sekolah
        </p>
      </div>

      <div
        className="relative w-full overflow-hidden container mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Wrapper yang digerakkan */}
        <div
          ref={containerRef}
          className="flex gap-8 px-6 py-6 will-change-transform"
          style={{
            whiteSpace: "nowrap",
            transform: "translateX(0)",
          }}
        >
          {loopItems.map((cert, i) => (
            <CertificateCard
              key={`${cert.id}-${i}`}
              cert={cert}
              index={i}
              onClick={() => {
                setActive(cert);
                setIsPaused(true);
              }}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setActive(null);
              setIsPaused(false);
            }}
          >
            <motion.div
              className="relative max-w-5xl w-[92%] max-h-[90vh] bg-white p-4 rounded-xl shadow-lg"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 140, damping: 18 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => {
                  setActive(null);
                  setIsPaused(false);
                }}
                className="absolute top-4 right-4 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
                aria-label="Close certificate"
              >
                <X className="w-5 h-5" />
              </button>

              <motion.img
                src={active.image}
                alt={active.title}
                className="w-full max-h-[80vh] object-contain rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
              />
              <p className="text-center mt-4 font-semibold text-gray-800 font-text">
                {active.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

interface CardProps {
  cert: Certificate;
  index: number;
  onClick: () => void;
}

function CertificateCard({ cert, index, onClick }: CardProps) {
  const background = `linear-gradient(306deg, hsl(${cert.hueA},100%,50%), hsl(${cert.hueB},100%,50%))`;

  return (
    <motion.div
      className="flex-none w-72 relative cursor-pointer group inline-block"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay: (index % 4) * 0.1, duration: 0.6, ease: "easeOut" }}
      onClick={onClick}
    >
      <motion.div
        whileHover={{ scale: 1.03, rotate: -1 }}
        className="relative bg-white border-2 border-gray-300 shadow-lg rounded-2xl overflow-hidden z-10"
      >
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-72 object-cover"
          loading="lazy"
        />
      </motion.div>
      <p className="text-center mt-3 font-semibold text-gray-700 font-text text-wrap">
        {cert.title}
      </p>
    </motion.div>
  );
}
