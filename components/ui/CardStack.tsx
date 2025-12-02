"use client";

import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";

type ImageItem = {
  url: string;
  alt: string;
};

type Card = {
  id: number;
  src: string;
  alt: string;
};

export default function CardStack({
  images,
}: {
  images: ImageItem[];
}) {
  const [cards, setCards] = useState<Card[]>([]);
  const [loadedMap, setLoadedMap] = useState<Record<number, boolean>>({});
  const [swipeInfo, setSwipeInfo] = useState<{ id: number; dir: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // lazy control: start loading only when component is in viewport
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // initialize cards (structure only) whenever images prop changes
  useEffect(() => {
    if (images && images.length > 0) {
      const initial = images.map((img, i) => ({ id: i, src: img.url, alt: img.alt || "" }));
      setCards(initial);
      // reset loaded map
      const map: Record<number, boolean> = {};
      initial.forEach((c) => (map[c.id] = false));
      setLoadedMap(map);
    } else {
      setCards([]);
      setLoadedMap({});
    }
  }, [images]);

  // intersection observer to trigger shouldLoad
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // if already set to load, skip
    if (shouldLoad) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setShouldLoad(true);
          if (observerRef.current) {
            observerRef.current.disconnect();
            observerRef.current = null;
          }
        }
      },
      { root: null, rootMargin: "300px", threshold: 0.1 } // preload a bit earlier
    );

    observerRef.current.observe(el);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [shouldLoad]);

  // sequentially load images when shouldLoad becomes true
  useEffect(() => {
    if (!shouldLoad) return;
    if (!images || images.length === 0) return;

    let cancelled = false;

    (async () => {
      for (let i = 0; i < images.length; i++) {
        if (cancelled) break;
        // if already loaded (maybe from previous run), skip
        if (loadedMap[i]) continue;

        await new Promise<void>((resolve) => {
          const img = new window.Image();
          img.src = images[i].url;

          // if browser already cached the image, onload triggers very fast
          img.onload = () => {
            if (!cancelled) {
              setLoadedMap((prev) => ({ ...prev, [i]: true }));
              resolve();
            } else {
              resolve();
            }
          };
          img.onerror = () => {
            // still mark as loaded to remove skeleton, you can set fallback behavior here
            if (!cancelled) {
              setLoadedMap((prev) => ({ ...prev, [i]: true }));
              resolve();
            } else {
              resolve();
            }
          };

          // safety: timeout in case image stalls (so skeleton won't show forever)
          const t = setTimeout(() => {
            if (!cancelled) {
              setLoadedMap((prev) => ({ ...prev, [i]: true }));
            }
            clearTimeout(t);
            resolve();
          }, 3000);
        });

        // small delay between starting each image to avoid burst
        await new Promise((r) => setTimeout(r, 120));
      }
    })();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldLoad, images]);

  const top = cards[0];

  // Swipe thresholds (same as before)
  const DIST_THRESHOLD = 120;
  const VEL_THRESHOLD = 500;

  function handleDragEnd(e: PointerEvent | any, info: any, cardId: number) {
    setIsDragging(false);

    // Prevent swipe during animation
    if (isAnimating) return;

    const offsetX = info.offset.x ?? 0;
    const velocityX = info.velocity.x ?? 0;

    const shouldSwipe =
      Math.abs(offsetX) > DIST_THRESHOLD || Math.abs(velocityX) > VEL_THRESHOLD;

    if (shouldSwipe) {
      const dir = Math.sign(offsetX || velocityX) || 1;
      setSwipeInfo({ id: cardId, dir });
      setIsAnimating(true);

      // Move card to back after a short delay to ensure animation starts
      setTimeout(() => {
        setCards((prev) => {
          if (prev.length <= 1) return prev;
          const [first, ...rest] = prev;
          return [...rest, first];
        });
      }, 50);
    }
  }

  function handleDragStart() {
    // Prevent drag during animation
    if (isAnimating) return;
    setIsDragging(true);
  }

  // Reset when empty (reinitialize)
  useEffect(() => {
    if (cards.length === 0 && images.length > 0) {
      const timer = setTimeout(() => {
        const reinit = images.map((img, i) => ({ id: i, src: img.url, alt: img.alt || "" }));
        setCards(reinit);
        const map: Record<number, boolean> = {};
        reinit.forEach((c) => (map[c.id] = false));
        setLoadedMap(map);
        // also set shouldLoad true so images start loading again
        setShouldLoad(true);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [cards.length, images]);

  // Clean up swipe info after animation completes
  function onExitComplete() {
    setSwipeInfo(null);
    setIsAnimating(false);
  }

  return (
    <div className="relative w-full flex items-center justify-center" ref={containerRef}>
      {/* Main container untuk memusatkan semua kartu */}
      <div className="relative w-[320px] md:w-[420px] flex items-center justify-center">
        <AnimatePresence onExitComplete={onExitComplete} initial={false} mode="popLayout">
          {top && (
            <motion.div
              key={top.id}
              drag={isAnimating ? false : "x"}
              dragElastic={0.2}
              dragConstraints={{ left: 0, right: 0 }}
              onDragStart={handleDragStart}
              onDragEnd={(e, info) => handleDragEnd(e, info, top.id)}
              initial={{
                y: -20,
                scale: 1.05,
                rotate: 0,
                opacity: 0,
                filter: "blur(4px)",
              }}
              animate={{
                y: 0,
                scale: 1,
                rotate: 0,
                opacity: 1,
                filter: "blur(0px)",
              }}
              whileDrag={{
                scale: 1.02,
                cursor: "grabbing",
              }}
              exit={{
                x: swipeInfo && swipeInfo.id === top.id ? swipeInfo.dir * 1000 : 1000,
                rotate: swipeInfo && swipeInfo.id === top.id ? swipeInfo.dir * 25 : 25,
                opacity: 0,
                scale: 0.8,
                transition: { duration: 0.5, ease: [0.32, 0.72, 0, 1] },
              }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="w-full max-h-96 rounded-2xl shadow-2xl bg-white overflow-hidden cursor-grab touch-none"
              style={{ zIndex: 20, cursor: isAnimating ? "default" : "grab" }}
            >
              <div className="w-full max-h-96 relative bg-gray-50 flex items-center justify-center">
                {/* show skeleton while this top image not loaded or while we haven't started loading */}
                {!shouldLoad || !loadedMap[top.id] ? (
                  <div className="absolute inset-0 p-4 flex items-center justify-center">
                    <div className="w-full h-full rounded-2xl bg-gray-200 animate-pulse" />
                  </div>
                ) : null}

                {/* Render actual <img> only when shouldLoad === true (prevents early requests) */}
                {shouldLoad ? (
                  <motion.img
                    src={top.src}
                    alt={top.alt || `card-${top.id}`}
                    className={`w-full max-h-96 object-contain select-none ${loadedMap[top.id] ? "opacity-100" : "opacity-0"}`}
                    draggable={false}
                    onLoad={() => setLoadedMap((prev) => ({ ...prev, [top.id]: true }))}
                    onError={() => setLoadedMap((prev) => ({ ...prev, [top.id]: true }))}
                  />
                ) : null}

                {/* Label bawah */}
                <motion.div
                  className="absolute left-4 bottom-4 bg-white/90 px-3 py-1 rounded-lg backdrop-blur text-sm font-medium shadow-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {top.alt || `Photo #${top.id + 1}`}
                </motion.div>

                {/* Indikator swipe */}
                <motion.div
                  className="absolute right-4 top-4 bg-green-500/90 text-white px-2 py-1 rounded text-xs font-medium"
                  animate={{ opacity: isDragging && !isAnimating ? 1 : 0 }}
                >
                  Swipe →
                </motion.div>

                {/* Overlay selama animasi */}
                {isAnimating && <div className="absolute inset-0 bg-transparent pointer-events-none" />}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stack background - dipusatkan dalam container yang sama */}
        <div className="pointer-events-none absolute w-full h-full flex items-center justify-center">
          {cards.slice(1, 5).map((c, idx) => {
            const depth = idx + 1;
            const translateY = depth * 8;
            const scale = 1 - depth * 0.03;
            const rotate = (depth % 2 === 0 ? -1 : 1) * depth * 1.5;

            return (
              <motion.div
                key={c.id}
                className="absolute w-full h-full rounded-2xl overflow-hidden bg-gray-100 shadow-lg"
                initial={{ y: translateY, scale, rotate, opacity: 0.8 }}
                animate={{ y: translateY, scale, rotate, opacity: Math.max(0.6, 0.8 - depth * 0.1) }}
                transition={{ type: "spring", stiffness: 300, damping: 30, delay: depth * 0.05 }}
                style={{ zIndex: 20 - depth }}
              >
                {/* skeleton if not loaded */}
                {!shouldLoad || !loadedMap[c.id] ? (
                  <div className="w-full h-full bg-gray-200 animate-pulse" />
                ) : null}

                {/* only render image tag when shouldLoad true */}
                {shouldLoad ? (
                  <img
                    src={c.src}
                    alt={c.alt || `card-${c.id}`}
                    className={`w-full h-full object-cover ${loadedMap[c.id] ? "" : "opacity-0"}`}
                    draggable={false}
                    onLoad={() => setLoadedMap((prev) => ({ ...prev, [c.id]: true }))}
                    onError={() => setLoadedMap((prev) => ({ ...prev, [c.id]: true }))}
                  />
                ) : null}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
