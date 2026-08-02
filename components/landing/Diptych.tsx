"use client";

import { useRef } from "react";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import { gsap, useGSAP } from "components/gsap/gsapSetup";
import { copy } from "content/copy";

/**
 * Le diptyque : slider avant/après plein format, dont la poignée
 * s'anime seule à l'entrée dans le viewport.
 */
export default function Diptych() {
  const scope = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLElement & { value: number }>(null);

  useGSAP(
    () => {
      gsap.from(".diptych-head", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: scope.current, start: "top 75%", once: true },
      });
      gsap.from(".diptych-artwork", {
        y: 70,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: scope.current, start: "top 70%", once: true },
      });

      // La poignée balaie l'image d'elle-même : 50 → 12 → 88 → 50
      const state = { v: 50 };
      gsap.to(state, {
        keyframes: [
          { v: 12, duration: 1.1 },
          { v: 88, duration: 1.5 },
          { v: 50, duration: 0.9 },
        ],
        ease: "power2.inOut",
        delay: 0.5,
        scrollTrigger: {
          trigger: ".diptych-artwork",
          start: "top 60%",
          once: true,
        },
        onUpdate() {
          if (sliderRef.current) sliderRef.current.value = state.v;
        },
      });
    },
    { scope }
  );

  return (
    <section ref={scope} id="preuve" className="filet bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="diptych-head flex items-end justify-between gap-6">
          <div>
            <p className="cartel cartel-accent">
              {copy.diptych.number} · la preuve
            </p>
            <h2 className="mt-4 font-display text-5xl text-gray-900 sm:text-6xl">
              {copy.diptych.title}
            </h2>
            <p className="mt-4 max-w-md text-gray-500">{copy.diptych.body}</p>
          </div>
        </div>

        <figure className="diptych-artwork mt-12">
          <div className="artwork" data-cursor="glisser">
            <ImgComparisonSlider ref={sliderRef as never} className="w-full outline-none">
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
            <span className="cartel">{copy.diptych.cartel}</span>
            <span className="cartel">avant / après</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
