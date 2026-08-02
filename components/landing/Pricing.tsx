"use client";

import { useRef } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { gsap, useGSAP } from "components/gsap/gsapSetup";
import { copy } from "content/copy";

export default function Pricing() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".plan-card", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: scope.current, start: "top 72%", once: true },
      });
    },
    { scope }
  );

  return (
    <section ref={scope} id="tarifs" className="filet bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="cartel cartel-accent">
          {copy.pricing.number} · les tarifs
        </p>
        <h2 className="mt-4 font-display text-5xl text-gray-900 sm:text-6xl">
          {copy.pricing.title}
        </h2>
        <p className="mt-4 max-w-md text-gray-500">{copy.pricing.subtitle}</p>

        <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-0 md:divide-x md:divide-gray-200">
          {copy.pricing.plans.map((plan) => (
            <div
              key={plan.name}
              className={`plan-card flex flex-col px-0 py-2 md:px-10 md:first:pl-0 md:last:pr-0 ${
                "popular" in plan ? "relative" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-3xl text-gray-900">
                  {plan.name}
                </h3>
                {"popular" in plan && (
                  <span className="cartel cartel-accent">recommandé</span>
                )}
              </div>
              <div className="mt-5 flex items-baseline gap-2">
                <span
                  className={`font-display text-6xl ${
                    "popular" in plan ? "text-[#5199ec]" : "text-gray-900"
                  }`}
                >
                  {plan.price}
                </span>
                <span className="cartel">{plan.per}</span>
              </div>
              <p className="mt-3 text-sm text-gray-500">{plan.desc}</p>
              <ul className="mt-7 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-gray-700"
                  >
                    <Check
                      size={15}
                      className="mt-0.5 shrink-0 text-[#5199ec]"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/users/register"
                className={`mt-8 px-6 py-3.5 text-center text-sm font-medium transition-colors ${
                  "popular" in plan
                    ? "bg-[#5199ec] text-white hover:bg-[#3d87e0]"
                    : "border border-gray-300 text-gray-800 hover:border-gray-900"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
