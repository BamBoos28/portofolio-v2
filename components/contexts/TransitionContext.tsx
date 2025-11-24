// contexts/TransitionContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface TransitionContextType {
  isTransitioning: boolean;
  startTransition: (callback: () => void) => void;
  completeTransition: () => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export function TransitionProvider({ children }: { children: ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startTransition = (callback: () => void) => {
    setIsTransitioning(true);
    
    // Tunggu animasi menutup selesai sebelum pindah halaman
    setTimeout(() => {
      callback();
    }, 600);
  };

  const completeTransition = () => {
    setIsTransitioning(false);
  };

  return (
    <TransitionContext.Provider value={{ 
      isTransitioning, 
      startTransition, 
      completeTransition 
    }}>
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  const context = useContext(TransitionContext);
  if (context === undefined) {
    throw new Error('useTransition must be used within a TransitionProvider');
  }
  return context;
}