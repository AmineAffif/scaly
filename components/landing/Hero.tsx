"use client";

import { useRef } from "react";
import Link from "next/link";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import { gsap, useGSAP, SplitText } from "components/gsap/gsapSetup";
import { copy } from "content/copy";

/**
 * Hero « la preuve d'abord » : titre serif centré, et l'avant/après
 * plein format comme pièce maîtresse. La poignée balaie l'image
 * d'elle-même au chargement.
 */
export default function Hero() {
  const scope = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLElement & { value: number }>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const split = SplitText.create(".hero-line", {
          type: "words,lines",
          mask: "lines",
        });

        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
        tl.from(split.words, { yPercent: 115, duration: 1, stagger: 0.05 })
          .from(
            ".hero-kicker, .hero-sub, .hero-cta",
            { y: 25, opacity: 0, duration: 0.8, stagger: 0.1 },
            0.4
          )
          .from(
            ".hero-artwork",
            { y: 70, opacity: 0, duration: 1.1, ease: "power3.out" },
            0.55
          );

        // La poignée du slider balaie l'image toute seule : 50 → 10 → 90 → 50
        const state = { v: 50 };
        gsap.to(state, {
          keyframes: [
            { v: 10, duration: 1.1 },
            { v: 90, duration: 1.5 },
            { v: 50, duration: 0.9 },
          ],
          ease: "power2.inOut",
          delay: 1.4,
          onUpdate() {
            if (sliderRef.current) sliderRef.current.value = state.v;
          },
        });

        return () => split.revert();
      });
    },
    { scope }
  );

  return (
    <section
      ref={scope}
      id="preuve"
      className="relative overflow-hidden bg-white pb-20 pt-32 sm:pt-36"
    >
      <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
        <p className="hero-kicker cartel cartel-accent">{copy.hero.kicker}</p>
        <h1 className="mx-auto mt-6 max-w-4xl font-display text-[12vw] leading-[1.02] text-gray-900 sm:text-6xl md:text-7xl">
          {copy.hero.titleLines.map((line) => (
            <span key={line} className="hero-line block">
              {line}
            </span>
          ))}
        </h1>
        <p className="hero-sub mx-auto mt-7 max-w-xl text-lg leading-relaxed text-gray-500">
          {copy.hero.subtitle}
        </p>
        <div className="hero-cta mt-9 flex flex-col items-center gap-3">
          <Link
            href="/users/register"
            className="bg-[#5199ec] px-9 py-4 text-sm font-medium text-white transition-colors hover:bg-[#3d87e0]"
          >
            {copy.hero.cta}
          </Link>
          <span className="cartel">{copy.hero.ctaNote}</span>
        </div>

        {/* La pièce maîtresse : l'avant/après grandeur nature */}
        <figure className="hero-artwork mt-16 text-left">
          <div className="artwork">
            <ImgComparisonSlider
              ref={sliderRef as never}
              className="w-full outline-none"
            >
              <img
                slot="first"
                src="/landscape-pixelized.webp"
                alt="Avant : image d'origine basse résolution"
                className="w-full"
                style={{ imageRendering: "pixelated" }}
              />
              <img
                slot="second"
                src="/landscape.webp"
                alt="Après : image agrandie par Scaly"
                className="w-full"
              />
            </ImgComparisonSlider>
          </div>
          <figcaption className="mt-3 flex items-center justify-between">
            <span className="cartel">{copy.hero.cartel}</span>
            <span className="cartel">avant / après · glissez</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
