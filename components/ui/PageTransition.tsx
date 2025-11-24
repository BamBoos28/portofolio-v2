"use client";

import  { createContext, useContext, useCallback, useState } from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

type PageTransitionContextType = {
  startPageTransition: (href: string) => void;
  isTransitioning: boolean;
};

const PageTransitionContext = createContext<PageTransitionContextType | null>(null);

export function usePageTransition() {
  const ctx = useContext(PageTransitionContext);
  if (!ctx) throw new Error("usePageTransition must be used within PageTransitionProvider");
  return ctx;
}

// Duration config (ms) — sesuaikan jika perlu
const CLOSE_DURATION = 520;
const OPEN_DURATION = 520;
const NAV_DELAY = 40; // jeda kecil sebelum push

export const PageTransitionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const [phase, setPhase] = useState<"idle" | "closing" | "opening">("idle");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startPageTransition = useCallback(async (href: string) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    // Mulai animasi menutup
    setPhase("closing");

    // tunggu animasi menutup selesai
    await new Promise((r) => setTimeout(r, CLOSE_DURATION));

    // beri sedikit jeda lalu pindah halaman
    await new Promise((r) => setTimeout(r, NAV_DELAY));
    try {
      // router.push boleh mengembalikan void / Promise tergantung versi Next.js
      // kita tidak terlalu bergantung pada return value karena kita akan
      // langsung memicu fase membuka setelah navigasi.
      await router.push(href);
    } catch (err) {
      // Jika push gagal, pastikan membuka kembali overlay
      console.error("Navigation failed:", err);
    }

    // Mulai membuka overlay di halaman baru
    setPhase("opening");
    await new Promise((r) => setTimeout(r, OPEN_DURATION));

    // reset
    setPhase("idle");
    setIsTransitioning(false);
  }, [isTransitioning, router]);

  return (
    <PageTransitionContext.Provider value={{ startPageTransition, isTransitioning }}>
      <div className="relative min-h-screen">
        {children}

        {/* Overlay panels */}
        <div aria-hidden className="pointer-events-none fixed inset-0 z-[9999]">
          {/* left panel */}
          <motion.div
            initial={false}
            animate={
              phase === "idle"
                ? { x: "-100%", transition: { duration: 0 } }
                : phase === "closing"
                ? { x: "0%", transition: { duration: CLOSE_DURATION / 1000, ease: [0.16, 0.84, 0.26, 1] } }
                : { x: "-100%", transition: { duration: OPEN_DURATION / 1000, ease: [0.16, 0.84, 0.26, 1] } }
            }
            className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-br from-black to-black/85 origin-left"
            style={{ transform: "translateZ(0)" }}
          />

          {/* right panel */}
          <motion.div
            initial={false}
            animate={
              phase === "idle"
                ? { x: "100%", transition: { duration: 0 } }
                : phase === "closing"
                ? { x: "0%", transition: { duration: CLOSE_DURATION / 1000, ease: [0.16, 0.84, 0.26, 1] } }
                : { x: "100%", transition: { duration: OPEN_DURATION / 1000, ease: [0.16, 0.84, 0.26, 1] } }
            }
            className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-br from-black to-black/85 origin-right"
            style={{ transform: "translateZ(0)" }}
          />
        </div>
      </div>
    </PageTransitionContext.Provider>
  );
};

// Simple link component that uses the transition
export const TransitionLink: React.FC<
  React.PropsWithChildren<{ href: string; className?: string; replace?: boolean }>
> = ({ href, children, className }) => {
  const { startPageTransition, isTransitioning } = usePageTransition();

  const onClick = (e: React.MouseEvent) => {
    // jika modifier keys (ctrl/cmd/shift) atau kanan-klik -> biarkan default
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    if (!isTransitioning) startPageTransition(href);
  };

  return (
    <a href={href} onClick={onClick} className={className}>
      {children}
    </a>
  );
};
