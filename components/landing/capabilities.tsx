"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Bot,
  Boxes,
  GitBranch,
  Rocket,
  Sparkles,
  Workflow,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/landing/section-heading";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    icon: Sparkles,
    title: "AI-assisted development",
    description:
      "Agents draft implementations from your brief, propose architecture, and iterate with your review — you stay the decision maker on every merge.",
    accent: "lime" as const,
    span: "lg:col-span-2",
  },
  {
    icon: Workflow,
    title: "Automated engineering workflows",
    description:
      "Lint, typecheck, test, and build gates run on every change, wired into the pipeline by default.",
    accent: "lavender" as const,
    span: "",
  },
  {
    icon: Boxes,
    title: "Reusable blueprints",
    description:
      "Project templates, design tokens, and component libraries are versioned assets — new products start from proven foundations.",
    accent: "vermilion" as const,
    span: "",
  },
  {
    icon: Bot,
    title: "Agent orchestration",
    description:
      "Specialized agents plan, implement, and verify in parallel lanes, coordinated by a single auditable task graph.",
    accent: "lavender" as const,
    span: "",
  },
  {
    icon: GitBranch,
    title: "Developer-tool integration",
    description:
      "Work lands as ordinary pull requests in your Git host, so existing review habits and CI keep working unchanged.",
    accent: "lime" as const,
    span: "",
  },
  {
    icon: Rocket,
    title: "Scalable delivery",
    description:
      "From a landing page to a multi-service rollout, the same workflow scales from one builder to whole product teams.",
    accent: "vermilion" as const,
    span: "lg:col-span-2",
  },
];

const accentStyles = {
  lime: "bg-acid-lime/12 text-acid-lime",
  lavender: "bg-lavender/12 text-lavender",
  vermilion: "bg-vermilion/12 text-vermilion-soft",
};

export function Capabilities() {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <section id="capabilities" className="section-y relative">
      <div className="container-site">
        <SectionHeading
          eyebrow="Capabilities"
          title={
            <>
              One platform, <span className="text-lavender">every stage</span>{" "}
              of delivery
            </>
          }
          description="The Software Factory concept: compress the distance between an idea and a shipped product without giving up engineering rigor."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: (i % 4) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={cn(cap.span)}
            >
              <Card className="group h-full transition-all duration-(--motion-base) hover:-translate-y-1 hover:border-lavender/40 hover:shadow-raised">
                <CardHeader>
                  <span
                    className={cn(
                      "flex size-11 items-center justify-center rounded-lg border border-border shadow-panel transition-transform duration-(--motion-base) group-hover:scale-105",
                      accentStyles[cap.accent],
                    )}
                  >
                    <cap.icon className="size-5" aria-hidden="true" />
                  </span>
                  <CardTitle className="pt-3">{cap.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {cap.description}
                  </CardDescription>
                </CardHeader>
                {cap.span && (
                  <CardContent>
                    <div
                      aria-hidden="true"
                      className="flex items-center gap-1.5"
                    >
                      {Array.from({ length: 24 }, (_, j) => (
                        <span
                          key={j}
                          className={cn(
                            "h-6 w-1.5 rounded-full",
                            j < 4 + i * 2
                              ? j % 5 === 0
                                ? "bg-vermilion/70"
                                : "bg-acid-lime/70"
                              : "bg-ink-700",
                          )}
                        />
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
