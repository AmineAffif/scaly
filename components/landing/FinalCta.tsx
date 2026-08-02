"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap, useGSAP, SplitText } from "components/gsap/gsapSetup";
import { copy } from "content/copy";

export default function FinalCta() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const split = SplitText.create(".final-title", {
          type: "words,lines",
          mask: "lines",
        });
        gsap.from(split.words, {
          yPercent: 115,
          duration: 0.9,
          stagger: 0.06,
          ease: "power4.out",
          scrollTrigger: {
            trigger: scope.current,
            start: "top 70%",
            once: true,
          },
        });
        gsap.from(".final-reveal", {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          delay: 0.3,
          scrollTrigger: {
            trigger: scope.current,
            start: "top 70%",
            once: true,
          },
        });
        return () => split.revert();
      });
    },
    { scope }
  );

  return (
    <section ref={scope} className="filet bg-white py-28 text-center sm:py-36">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <h2 className="final-title font-display text-6xl text-gray-900 sm:text-7xl">
          {copy.finalCta.title}
        </h2>
        <p className="final-reveal mx-auto mt-6 max-w-md text-gray-500">
          {copy.finalCta.body}
        </p>
        <div className="final-reveal mt-10">
          <Link
            href="/users/register"
            data-cursor="go"
            className="inline-block bg-[#5199ec] px-10 py-4 text-sm font-medium text-white transition-colors hover:bg-[#3d87e0]"
          >
            {copy.finalCta.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function EditorialFooter() {
  return (
    <footer className="filet bg-white pb-10 pt-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo-scaly-min.png"
                alt="Scaly"
                width={26}
                height={26}
                className="h-6 w-auto"
              />
              <span className="font-display text-2xl text-gray-900">Scaly</span>
            </div>
            <p className="mt-3 font-display text-lg italic text-gray-500">
              {copy.footer.baseline}
            </p>
          </div>
          {copy.footer.columns.map((column) => (
            <div key={column.title}>
              <p className="cartel">{column.title}</p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="cartel filet mt-14 pt-5">{copy.footer.legal}</p>
      </div>
    </footer>
  );
}
