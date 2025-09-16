"use client";

import type React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
};

export function AnimatedSection({
  children,
  className = "",
  threshold = 0.3,
}: AnimatedSectionProps) {
  const { isVisible, ref } = useScrollAnimation(threshold);

  return (
    <section ref={ref} className={className}>
      <div
        className={`transform transition-all duration-1000 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
