// hooks/useHandleNavigation.ts
"use client";

import { usePathname } from "next/navigation";
import { useAnimatedNavigate } from "@/components/hooks/useAnimatedNavigate";
import { useTransition } from "@/components/contexts/TransitionContext";
import React from "react";

export function useHandleNavigation() {
  const navigate = useAnimatedNavigate();
  const pathname = usePathname();
  const { isTransitioning } = useTransition();

  const handleNavigation = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
      e.preventDefault();
      if (isTransitioning || pathname === path) return;
      navigate(path);
    },
    [isTransitioning, pathname, navigate]
  );

  return handleNavigation;
}
