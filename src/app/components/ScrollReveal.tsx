"use client";

import { useEffect, useRef } from "react";

type Direction = "up" | "left" | "right" | "stagger";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  className?: string;
  threshold?: number;
  delay?: number;
}

const classMap: Record<Direction, string> = {
  up: "scroll-reveal",
  left: "scroll-reveal-left",
  right: "scroll-reveal-right",
  stagger: "scroll-reveal-stagger",
};

export default function ScrollReveal({
  children,
  direction = "up",
  className = "",
  threshold = 0.15,
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => el.classList.add("revealed"), delay);
          } else {
            el.classList.add("revealed");
          }
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, delay]);

  return (
    <div ref={ref} className={`${classMap[direction]} ${className}`}>
      {children}
    </div>
  );
}
