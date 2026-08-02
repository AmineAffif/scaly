"use client";

import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { gsap, useGSAP } from "components/gsap/gsapSetup";
import { copy } from "content/copy";

export default function Faq() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".faq-inner", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: scope.current, start: "top 75%", once: true },
      });
    },
    { scope }
  );

  return (
    <section ref={scope} id="faq" className="filet bg-white py-24 sm:py-32">
      <div className="faq-inner mx-auto max-w-3xl px-5 sm:px-8">
        <p className="cartel cartel-accent">{copy.faq.number} · questions</p>
        <h2 className="mt-4 font-display text-5xl text-gray-900 sm:text-6xl">
          {copy.faq.title}
        </h2>

        <Accordion type="single" collapsible className="mt-12">
          {copy.faq.items.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-display text-xl font-normal text-gray-900 hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-gray-500">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
