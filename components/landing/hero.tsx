"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeroVisual } from "@/components/three/hero-visual";

export function Hero() {
  const reducedMotion = useReducedMotion() ?? false;

  const fadeUp = (delay: number) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="bg-blueprint absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]"
      />
      <div className="container-site section-y relative grid items-center gap-14 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:pt-40">
        <div>
          <motion.div {...fadeUp(0)}>
            <Badge variant="lime">
              <span className="size-1.5 rounded-full bg-acid-lime" aria-hidden="true" />
              AI-assisted software delivery platform
            </Badge>
          </motion.div>

          <motion.h1
            {...fadeUp(0.08)}
            className="font-display text-balance mt-6 text-[length:var(--text-hero)] leading-[1.02] font-semibold tracking-tight"
          >
            Ship software at the{" "}
            <span className="text-lavender">speed of ideas</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Software Factory turns a product brief into production code.
            Describe what you want to build; orchestrated engineering agents
            plan, write, test, and deliver it through reusable, auditable
            workflows — with your team reviewing every commit.
          </motion.p>

          <motion.div {...fadeUp(0.24)} className="mt-9 flex flex-wrap items-center gap-4">
            <Button size="lg">
              Start your first build
              <ArrowRight aria-hidden="true" />
            </Button>
            <Button size="lg" variant="secondary">
              <PlayCircle aria-hidden="true" />
              Watch the workflow
            </Button>
          </motion.div>

          <motion.dl
            {...fadeUp(0.32)}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8"
          >
            {[
              ["Brief to repo", "in minutes"],
              ["Every change", "reviewed & tested"],
              ["Workflows", "fully reusable"],
            ].map(([term, desc]) => (
              <div key={term}>
                <dt className="font-display text-sm font-semibold text-foreground">
                  {term}
                </dt>
                <dd className="mt-1 text-xs text-muted-foreground">{desc}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto flex w-full justify-center"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
