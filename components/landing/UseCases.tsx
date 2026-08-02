"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "components/gsap/gsapSetup";
import { copy } from "content/copy";

export default function UseCases() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".case-row").forEach((row) => {
        gsap.from(row.querySelectorAll(".case-reveal"), {
          y: 60,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 75%", once: true },
        });
      });
    },
    { scope }
  );

  return (
    <section ref={scope} className="filet bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="cartel cartel-accent">
          {copy.useCases.number} · les usages
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-5xl text-gray-900 sm:text-6xl">
          {copy.useCases.title}
        </h2>

        <div className="mt-16 space-y-24">
          {copy.useCases.cases.map((useCase, i) => (
            <div
              key={useCase.title}
              className={`case-row grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              <figure className="case-reveal [direction:ltr]" data-cursor="voir">
                <div className="artwork">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={useCase.img}
                      alt={useCase.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <figcaption className="cartel mt-2.5">
                  {useCase.kicker}
                </figcaption>
              </figure>
              <div className="[direction:ltr]">
                <h3 className="case-reveal font-display text-4xl text-gray-900">
                  {useCase.title}
                </h3>
                <p className="case-reveal mt-4 max-w-md leading-relaxed text-gray-500">
                  {useCase.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
