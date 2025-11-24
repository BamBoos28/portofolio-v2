// hooks/useTransitionScroll.ts
"use client";

import { useEffect } from 'react';
import { useTransition } from '@/components/contexts/TransitionContext';

export function useTransitionScroll() {
  const { isTransitioning } = useTransition();

  useEffect(() => {
    if (isTransitioning) {
      document.body.style.overflow = 'hidden';
      document.body.style.pointerEvents = 'none';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.pointerEvents = 'auto';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.pointerEvents = 'auto';
    };
  }, [isTransitioning]);
}