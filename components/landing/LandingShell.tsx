"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "components/gsap/gsapSetup";
import EditorialCursor from "./EditorialCursor";

export default function LandingShell({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.11 });
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    document.body.classList.add("has-editorial-cursor");

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      document.body.classList.remove("has-editorial-cursor");
    };
  }, []);

  return (
    <>
      {children}
      <EditorialCursor />
    </>
  );
}
