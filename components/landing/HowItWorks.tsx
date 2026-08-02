"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "components/gsap/gsapSetup";
import { copy } from "content/copy";

export default function HowItWorks() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".how-step", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: scope.current, start: "top 72%", once: true },
      });
    },
    { scope }
  );

  return (
    <section ref={scope} id="methode" className="filet bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="cartel cartel-accent">{copy.how.number} · la méthode</p>
        <h2 className="mt-4 font-display text-5xl text-gray-900 sm:text-6xl">
          {copy.how.title}
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {copy.how.steps.map((step, i) => (
            <div key={step.title} className="how-step filet pt-6">
              <span className="font-display text-5xl italic text-[#5199ec]">
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-3xl text-gray-900">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-gray-500">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
