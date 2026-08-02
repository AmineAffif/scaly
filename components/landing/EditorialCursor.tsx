"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "components/gsap/gsapSetup";

/**
 * Curseur galerie : point bleu discret, s'étend avec un label
 * sur les éléments portant [].
 */
export default function EditorialCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  useGSAP(
    () => {
      if (!enabled || !ref.current) return;
      gsap.set(ref.current, { x: -100, y: -100 });

      const xTo = gsap.quickTo(ref.current, "x", { duration: 0.22, ease: "power3" });
      const yTo = gsap.quickTo(ref.current, "y", { duration: 0.22, ease: "power3" });

      const onMove = (e: MouseEvent) => {
        xTo(e.clientX);
        yTo(e.clientY);
      };
      const onOver = (e: MouseEvent) => {
        const target = (e.target as HTMLElement).closest<HTMLElement>(
          "a, button"
        );
        gsap.to(ref.current, { scale: target ? 2.4 : 1, duration: 0.25 });
      };

      window.addEventListener("mousemove", onMove, { passive: true });
      window.addEventListener("mouseover", onOver, { passive: true });
      return () => {
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseover", onOver);
      };
    },
    { dependencies: [enabled] }
  );

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5199ec]"
    />
  );
}
