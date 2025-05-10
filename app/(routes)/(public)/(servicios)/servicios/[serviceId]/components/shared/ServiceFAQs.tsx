"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible";

import { Service } from "@/interfaces";

export function ServiceFAQs({ faqs }: Partial<Service>) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs!.map(({ id, answer, question }, index) => (
        <FadeInWhenVisible key={id} delay={index * 0.1}>
          <AccordionItem
            value={`item-${index}`}
            className="border-b border-gray-200 py-2"
          >
            <AccordionTrigger className="text-left font-medium text-gray-800 hover:cursor-pointer">
              {question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              {answer}
            </AccordionContent>
          </AccordionItem>
        </FadeInWhenVisible>
      ))}
    </Accordion>
  );
}
