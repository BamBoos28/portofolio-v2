"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
  useReducedMotion 
} from "motion/react";
import { MessageCircleMore, Mail, Github } from "lucide-react"; 
import { interpolate } from "flubber";
import Image from "next/image";
import { CONTACTS } from "@/data/constants";



const getIndex = (_: string, index: number) => index;

function useFlubber(progress: any, paths: string[]) {
  return useTransform(progress, paths.map(getIndex), paths, {
    mixer: (a: string, b: string) =>
      interpolate(a, b, { maxSegmentLength: 0.1 }),
  });
}

export default function ContactSection() {
  const [active, setActive] = useState(0);
  const progress = useMotionValue(active);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-300px" });
  const shouldReduceMotion = useReducedMotion();

  const paths = useMemo(() => CONTACTS.map((c) => c.path), []);
  const colors = useMemo(() => CONTACTS.map((c) => c.color), []);
  const pathD = useFlubber(progress, paths);
  const fill = useTransform(progress, [0, 1, 2], colors);

  // Jalankan animasi hanya saat section terlihat
  useEffect(() => {
    if (isInView) {
      animate(progress, active, { duration: 0.8, ease: "easeInOut" });
    }
  }, [active, progress, isInView]);

  // Interval hanya aktif jika section terlihat
  useEffect(() => {
    if (!isInView) return;

    const tick = () => setActive((p) => (p + 1) % CONTACTS.length);
    const id = window.setInterval(tick, 5000);

    return () => clearInterval(id);
  }, [isInView]);

  return (
    <section ref={ref} className="py-28 to-white border-b-4 border-gray-500">
      <motion.div
        className="container mx-auto flex flex-col md:flex-row items-center gap-21"
        initial={shouldReduceMotion ? {} :{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Foto diri */}
        <motion.div
          className="w-1/2 h-150 relative rounded-full overflow-hidden shadow-lg hidden md:block"
          animate={
            isInView
              ? { y: [0, -8, 0], rotate: [0, 1, 0] }
              : { y: 0, rotate: 0 }
          }
          transition={
            isInView
              ? { duration: 4,ease: "easeInOut" }
              : { duration: 0 }
          }
        >
          <Image
            src="/m3.png"
            alt="Foto Diri Wan"
            fill
            style={{ objectFit: "cover" }}
          />
        </motion.div>

        {/* Bagian kanan */}
        <div className="flex flex-col items-start text-left space-y-8">
          <div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 font-header"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              Contact
            </motion.h2>
            <p className="text-gray-600 leading-relaxed max-w-md font-text">
              Tertarik berdiskusi? Jangan ragu untuk menghubungi saya melalui
              platform di bawah ini. Saya terbuka untuk kolaborasi, proyek
              freelance, atau sekadar berbagi ide.
            </p>
          </div>

          {/* Icon morphing */}
          <div className="flex items-center gap-8">
            <svg viewBox="0 0 24 24" width="150" height="150">
              <motion.path
                d={pathD as any}
                fill={fill as any}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={
                  isInView
                    ? { scale: [1, 1.05, 1], opacity: 1 }
                    : { scale: 0.9, opacity: 0.3 }
                }
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </svg>

            {/* Tombol kontak */}
            <div className="space-y-4">
              {CONTACTS.map((c, i) => (
                <motion.button
                  key={c.key}
                  className={`w-64 flex items-center gap-4 px-4 py-3 border transition ${
                    i === active
                      ? "border-gray-500 shadow-[6px_6px_0_#000000]"
                      : "bg-white border-gray-200 hover:shadow-sm"
                  }`}
                  whileHover={isInView ? { scale: 1.03 } : undefined}
                >
                  <span
                    className={`w-10 h-10 flex items-center justify-center rounded-full ${
                      i === active ? "bg-white/20" : "bg-gray-100"
                    }`}
                  >
                    {c.key === "wa" ?  (
                      <MessageCircleMore className="w-5 h-5 text-[#25D366]" />
                    ) : c.key === "email" ? (
                      <Mail className="w-5 h-5 text-[#EA4335]" />
                    ) : (
                      <Github className="w-5 h-5 text-[#181717]" />
                    )}
                  </span>
                  <div className="text-left">
                    <p className="font-semibold">{c.title}</p>
                    <p className="text-sm opacity-80">{c.subtitle}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
