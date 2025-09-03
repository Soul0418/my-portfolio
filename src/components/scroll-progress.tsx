"use client";

import { useRef, ReactNode } from "react";
import { ScrollProgress } from "../../components/motion-primitives/scroll-progress";

export function ScrollProgressBasic3({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative h-screen overflow-auto fit-screen" ref={containerRef}>
      {/* Remove any static background div */}

      {/* Only the animated gradient progress bar */}
      <div className="pointer-events-none fixed left-0 top-0 w-full z-50">
        <ScrollProgress
          // gradient only, no solid background color
          className="absolute top-0 h-0.5 bg-gradient-to-r from-transparent via-[#111111] to-[#111111] dark:from-transparent dark:via-white dark:to-white"
          containerRef={containerRef}
          springOptions={{
            stiffness: 280,
            damping: 18,
            mass: 0.3,
          }}
        />
      </div>

      {/* Page content */}
      <div className="px-8 py-16">{children}</div>
    </div>
  );
}
