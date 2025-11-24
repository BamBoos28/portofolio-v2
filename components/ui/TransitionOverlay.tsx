// components/TransitionOverlay.tsx
"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useTransition } from '@/components/contexts/TransitionContext';

export default function TransitionOverlay() {
  const { isTransitioning, completeTransition } = useTransition();

  return (
    <AnimatePresence mode="sync">
      {isTransitioning && (
        <motion.div
          className="fixed inset-0 z-[9999] pointer-events-none flex"
          initial="closed"
          animate="open"
          exit="closed"
          variants={{
            open: { 
              transition: { 
                staggerChildren: 0.1 
              } 
            },
            closed: { 
              transition: { 
                staggerChildren: 0.1,
                staggerDirection: -1 
              } 
            }
          }}
          onAnimationComplete={completeTransition}
        >
          {/* Panel Kiri */}
          <motion.div
            variants={{
              open: { x: 0 },
              closed: { x: '-100%' }
            }}
            transition={{ 
              duration: 0.6, 
              ease: [0.65, 0, 0.35, 1] 
            }}
            className="w-1/2 h-full bg-black"
          />
          
          {/* Panel Kanan */}
          <motion.div
            variants={{
              open: { x: 0 },
              closed: { x: '100%' }
            }}
            transition={{ 
              duration: 0.6, 
              ease: [0.65, 0, 0.35, 1] 
            }}
            className="w-1/2 h-full bg-black"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}