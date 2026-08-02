"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "components/gsap/gsapSetup";
import { copy } from "content/copy";

export default function UseCases() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".case-col", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: { trigger: scope.current, start: "top 72%", once: true },
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

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-gray-200">
          {copy.useCases.cases.map((useCase) => (
            <div
              key={useCase.title}
              className="case-col md:px-10 md:first:pl-0 md:last:pr-0"
            >
              <p className="cartel cartel-accent">{useCase.kicker}</p>
              <h3 className="mt-4 font-display text-4xl text-gray-900">
                {useCase.title}
              </h3>
              <p className="mt-4 leading-relaxed text-gray-500">
                {useCase.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
