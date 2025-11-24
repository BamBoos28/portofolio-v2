// components/ClientLayout.tsx
"use client";

import { usePathname } from 'next/navigation';
import TransitionOverlay from './TransitionOverlay';
import { useTransitionScroll } from '@/components/hooks/useTransitionScroll';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Handle scroll prevention during transitions
  useTransitionScroll();

  return (
    <>
      <div 
        key={pathname} // Force re-render on route change
        className="min-h-screen flex flex-col"
      >
        {children}
      </div>
      <TransitionOverlay />
    </>
  );
}