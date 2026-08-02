"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP, ScrollTrigger } from "components/gsap/gsapSetup";
import { copy } from "content/copy";

/**
 * Cimaise défilante : les œuvres passent en continu,
 * la vitesse répond légèrement au scroll.
 */
export default function GalleryMarquee() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const track = scope.current?.querySelector(".gallery-track");
      if (!track) return;

      const tween = gsap.to(track, {
        xPercent: -50,
        repeat: -1,
        duration: 38,
        ease: "none",
      });

      ScrollTrigger.create({
        onUpdate(self) {
          const boost = gsap.utils.clamp(-3, 3, self.getVelocity() / 400);
          gsap.to(tween, {
            timeScale: 1 + boost,
            duration: 0.4,
            overwrite: true,
          });
        },
      });
    },
    { scope }
  );

  const items = [...copy.marquee.items, ...copy.marquee.items];

  return (
    <section ref={scope} className="filet overflow-hidden bg-white py-14">
      <p className="cartel mx-auto max-w-6xl px-5 sm:px-8">
        {copy.marquee.caption}
      </p>
      <div className="gallery-track mt-8 flex w-max items-end gap-8 pr-8">
        {items.map((item, i) => (
          <figure key={i} className="w-64 shrink-0 sm:w-80" data-cursor="voir">
            <div className="artwork">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>
            </div>
            <figcaption className="cartel mt-2.5">{item.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
