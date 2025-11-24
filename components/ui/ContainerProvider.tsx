"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ContainerProviderProps {
  children: React.ReactNode;
}

export default function ContainerProvider({ children }: ContainerProviderProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Simulasikan loading selesai ketika komponen ter-mount
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 400); // delay kecil biar smooth
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Konten utama */}
      <div className={`transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        {children}
      </div>

      {/* Overlay hitam */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-gray-500/50 flex items-center justify-center"
          >
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
