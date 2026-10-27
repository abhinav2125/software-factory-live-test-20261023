"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Lightbulb, ListChecks, Hammer, PackageCheck } from "lucide-react";

import { SectionHeading } from "@/components/landing/section-heading";
import { cn } from "@/lib/utils";

const stages = [
  {
    icon: Lightbulb,
    step: "01",
    title: "Describe",
    text: "Write a product brief in plain language. The factory decomposes it into scoped, buildable tasks.",
    accent: "text-lavender",
    ring: "border-lavender/40",
  },
  {
    icon: ListChecks,
    step: "02",
    title: "Plan",
    text: "Agents propose an architecture and task graph. You approve the plan before a line of code is written.",
    accent: "text-acid-lime",
    ring: "border-acid-lime/40",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Build",
    text: "Implementation agents work in parallel lanes while lint, type, and test gates verify every change.",
    accent: "text-lavender",
    ring: "border-lavender/40",
  },
  {
    icon: PackageCheck,
    step: "04",
    title: "Ship",
    text: "Finished work arrives as reviewed pull requests, ready to merge and deploy through your pipeline.",
    accent: "text-vermilion-soft",
    ring: "border-vermilion/40",
  },
];

export function HowItWorks() {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <section id="how-it-works" className="section-y relative overflow-hidden">
      <div
        aria-hidden="true"
        className="bg-blueprint absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
      />
      <div className="container-site relative">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              From idea to shipped product in{" "}
              <span className="text-acid-lime">four moves</span>
            </>
          }
          description="A single connected pipeline — each stage hands structured context to the next, so nothing gets lost between brief and build."
        />

        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          {/* Connecting spine */}
          <span
            aria-hidden="true"
            className="absolute top-7 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-lavender/40 via-acid-lime/40 to-vermilion/40 md:block"
          />
          {stages.map((stage, i) => (
            <motion.li
              key={stage.title}
              initial={reducedMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative flex flex-col items-start gap-4 md:items-center md:text-center"
            >
              <span
                className={cn(
                  "surface-raised relative z-10 flex size-14 items-center justify-center rounded-2xl border",
                  stage.ring,
                )}
              >
                <stage.icon className={cn("size-6", stage.accent)} aria-hidden="true" />
              </span>
              <div>
                <p className="font-mono text-xs tracking-widest text-muted-foreground">
                  {stage.step}
                </p>
                <h3 className="font-display mt-1 text-xl font-semibold">
                  {stage.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {stage.text}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
