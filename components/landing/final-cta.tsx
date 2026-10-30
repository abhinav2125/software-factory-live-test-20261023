"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function FinalCta() {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <section className="section-y">
      <div className="container-site">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="surface-raised relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-16 sm:py-24"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_120%,rgb(203_179_232/0.16),transparent)]"
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center">
            <h2 className="font-display text-balance text-[length:var(--text-section)] leading-[1.08] font-semibold tracking-tight">
              Your next release is a <span className="text-acid-lime">brief</span>{" "}
              away
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Bring an idea. Leave with a reviewed, tested, deployable
              repository. The assembly line is warm — put it to work.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button size="lg">
                Start building
                <ArrowRight aria-hidden="true" />
              </Button>
              <Button size="lg" variant="secondary">
                Talk to the team
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
