"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "components/gsap/gsapSetup";
import { copy } from "content/copy";

export default function Stats() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".stat-value").forEach((el) => {
        const target = parseFloat(el.dataset.value ?? "0");
        const state = { v: 0 };
        gsap.to(state, {
          v: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate() {
            el.textContent = Math.round(state.v).toLocaleString("fr-FR");
          },
        });
      });

      gsap.from(".stat-item", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: scope.current, start: "top 80%", once: true },
      });
    },
    { scope }
  );

  return (
    <section ref={scope} className="filet bg-white py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-12 px-5 sm:px-8 lg:grid-cols-4">
        {copy.stats.items.map((item) => (
          <div key={item.label} className="stat-item filet pt-5">
            <p className="font-display text-6xl text-gray-900">
              {"prefix" in item && item.prefix}
              <span className="stat-value" data-value={item.value}>
                0
              </span>
              <span className="text-[#5199ec]">
                {"suffix" in item && item.suffix}
              </span>
            </p>
            <p className="cartel mt-3">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
