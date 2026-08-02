"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "components/gsap/gsapSetup";
import { copy } from "content/copy";

/**
 * Section pinnée : on plonge dans l'image au scroll,
 * le cartel change à mesure que le zoom révèle le détail.
 */
export default function ZoomDetail() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const captions = gsap.utils.toArray<HTMLElement>(".zoom-caption");
          gsap.set(captions, { opacity: 0 });
          gsap.set(captions[0], { opacity: 1 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: scope.current,
              start: "top top",
              end: "+=220%",
              pin: true,
              scrub: 0.6,
            },
          });

          tl.to(".zoom-img", { scale: 2, duration: 1, ease: "none" })
            .to(captions[0], { opacity: 0, duration: 0.12 }, 0.42)
            .to(captions[1], { opacity: 1, duration: 0.12 }, 0.46)
            .to(".zoom-img", { scale: 4, duration: 1, ease: "none" }, 1)
            .to(captions[1], { opacity: 0, duration: 0.12 }, 1.42)
            .to(captions[2], { opacity: 1, duration: 0.12 }, 1.46);
        }
      );

      // Mobile : simple reveal, pas de pin
      mm.add("(max-width: 767px)", () => {
        gsap.set(".zoom-caption", { opacity: 0 });
        gsap.set(".zoom-caption-last", { opacity: 1 });
      });
    },
    { scope }
  );

  return (
    <section
      ref={scope}
      className="filet relative flex min-h-screen flex-col justify-center overflow-hidden bg-white py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="cartel cartel-accent">{copy.zoom.number} · le détail</p>
        <h2 className="mt-4 font-display text-5xl text-gray-900 sm:text-6xl">
          {copy.zoom.title}
        </h2>

        <figure className="mt-10">
          <div className="artwork overflow-hidden">
            <div className="relative aspect-[16/9] overflow-hidden">
              <div className="zoom-img absolute inset-0 origin-center">
                <Image
                  src="/landscape.webp"
                  alt="Zoom dans une image agrandie par Scaly"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <figcaption className="relative mt-3 h-5">
            {copy.zoom.captions.map((caption, i) => (
              <span
                key={caption}
                className={`zoom-caption cartel absolute left-0 top-0 ${
                  i === copy.zoom.captions.length - 1 ? "zoom-caption-last" : ""
                }`}
              >
                {caption}
              </span>
            ))}
            <span className="cartel absolute right-0 top-0">fig. 03</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
