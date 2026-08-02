"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap, useGSAP, SplitText } from "components/gsap/gsapSetup";
import { copy } from "content/copy";

/**
 * Hero « l'œuvre » : titre serif XXL, et l'image exposée comme dans
 * une galerie, qui passe de pixelisée à nette au chargement.
 */
export default function Hero() {
  const scope = useRef<HTMLElement>(null);

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
          .from(".hero-kicker, .hero-sub, .hero-cta", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
          }, 0.45)
          .from(".hero-artwork", {
            y: 60,
            opacity: 0,
            duration: 1.1,
            ease: "power3.out",
          }, 0.3)
          // La révélation : l'image pixelisée s'efface, la nette apparaît
          .to(".hero-img-pixelated", {
            opacity: 0,
            duration: 1.6,
            ease: "power2.inOut",
          }, 1.1)
          .from(".hero-cartel", { opacity: 0, duration: 0.7 }, 1.8);

        // Parallax douce de l'œuvre au scroll
        gsap.to(".hero-artwork", {
          yPercent: -6,
          ease: "none",
          scrollTrigger: {
            trigger: scope.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
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
      className="relative overflow-hidden bg-white pt-32 pb-20 sm:pt-40"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[6fr_5fr]">
        <div>
          <p className="hero-kicker cartel cartel-accent">{copy.hero.kicker}</p>
          <h1 className="mt-6 font-display text-[13vw] leading-[1.02] text-gray-900 sm:text-6xl md:text-7xl">
            {copy.hero.titleLines.map((line) => (
              <span key={line} className="hero-line block">
                {line}
              </span>
            ))}
          </h1>
          <p className="hero-sub mt-7 max-w-md text-lg leading-relaxed text-gray-500">
            {copy.hero.subtitle}
          </p>
          <div className="hero-cta mt-9 flex flex-wrap items-center gap-5">
            <Link
              href="/users/register"
              data-cursor="go"
              className="bg-[#5199ec] px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-[#3d87e0]"
            >
              {copy.hero.cta}
            </Link>
            <span className="cartel">{copy.hero.ctaNote}</span>
          </div>
        </div>

        {/* L'œuvre */}
        <figure className="hero-artwork">
          <div className="artwork relative" data-cursor="voir">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/landscape.webp"
                alt="Image agrandie par Scaly"
                fill
                priority
                className="object-cover"
              />
              <Image
                src="/landscape-pixelized.webp"
                alt=""
                fill
                priority
                className="hero-img-pixelated object-cover"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
          </div>
          <figcaption className="hero-cartel mt-3 flex items-center justify-between">
            <span className="cartel">{copy.hero.cartel}</span>
            <span className="cartel cartel-accent">scaly</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
