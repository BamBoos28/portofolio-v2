// hooks/useAnimatedNavigate.ts
"use client";

import { useRouter } from 'next/navigation';
import { useTransition } from '@/components/contexts/TransitionContext';

export function useAnimatedNavigate() {
  const router = useRouter();
  const { startTransition, isTransitioning } = useTransition();

  const navigate = (path: string) => {
    // Prevent multiple transitions at the same time
    if (isTransitioning) return;
    
    startTransition(() => {
      router.push(path);
    });
  };

  return navigate;
}