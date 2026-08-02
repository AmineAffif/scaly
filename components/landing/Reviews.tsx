"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "components/gsap/gsapSetup";
import { copy } from "content/copy";

export default function Reviews() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".review-card", {
        y: 60,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
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
          {copy.reviews.number} · les visiteurs
        </p>
        <h2 className="mt-4 font-display text-5xl text-gray-900 sm:text-6xl">
          {copy.reviews.title}
        </h2>

        <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {copy.reviews.items.map((review, i) => (
            <blockquote
              key={review.author}
              className={`review-card filet pt-5 ${
                i % 3 === 1 ? "lg:translate-y-8" : ""
              }`}
            >
              <p className="font-display text-xl leading-snug text-gray-800">
                « {review.text} »
              </p>
              <footer className="mt-4">
                <p className="text-sm font-medium text-gray-900">
                  {review.author}
                </p>
                <p className="cartel mt-0.5">{review.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
