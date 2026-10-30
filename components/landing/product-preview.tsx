"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  CheckCircle2,
  CircleDashed,
  Loader2,
  FileCode2,
  FlaskConical,
  GitPullRequest,
  TerminalSquare,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/landing/section-heading";
import { cn } from "@/lib/utils";

const tasks = [
  { name: "Scaffold Next.js app", status: "done" },
  { name: "Design tokens & theme", status: "done" },
  { name: "Landing hero + 3D scene", status: "active" },
  { name: "Checkout API routes", status: "queued" },
  { name: "E2E smoke tests", status: "queued" },
];

const activity = [
  { icon: FileCode2, text: "planner opened task graph · 6 tasks", tone: "text-lavender" },
  { icon: FlaskConical, text: "verify lane · typecheck passed", tone: "text-acid-lime" },
  { icon: GitPullRequest, text: "builder drafted PR #42 for review", tone: "text-lavender" },
  { icon: TerminalSquare, text: "build gate · production build ok", tone: "text-acid-lime" },
];

export function ProductPreview() {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <section id="preview" className="section-y">
      <div className="container-site">
        <SectionHeading
          eyebrow="Product preview"
          title={
            <>
              Watch the factory <span className="text-vermilion-soft">work</span>
            </>
          }
          description="An illustrative concept of the Software Factory workspace. Demo content only — live orchestration requires the hosted backend."
        />

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-14"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-3xl bg-lavender/8 blur-2xl"
          />
          <div
            role="img"
            aria-label="Illustrative mockup of the Software Factory workspace showing a task pipeline, agent activity feed, and build status"
            className="surface-raised relative overflow-hidden rounded-2xl"
          >
            {/* Window chrome */}
            <div className="flex items-center gap-3 border-b border-border px-5 py-3">
              <span className="flex gap-1.5" aria-hidden="true">
                <i className="size-3 rounded-full bg-vermilion/80" />
                <i className="size-3 rounded-full bg-lavender/60" />
                <i className="size-3 rounded-full bg-acid-lime/80" />
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                factory.app / storefront-relaunch
              </span>
              <Badge variant="outline" className="ml-auto hidden sm:inline-flex">
                Illustrative demo
              </Badge>
            </div>

            <div className="grid gap-px bg-border md:grid-cols-[1.2fr_1fr]">
              {/* Task pipeline */}
              <div className="bg-card p-5 sm:p-6">
                <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  Task pipeline
                </p>
                <ul className="mt-4 space-y-2.5">
                  {tasks.map((task) => (
                    <li
                      key={task.name}
                      className={cn(
                        "flex items-center gap-3 rounded-lg border px-4 py-3 text-sm",
                        task.status === "active"
                          ? "border-acid-lime/40 bg-acid-lime/8 text-foreground"
                          : "border-border bg-secondary/40 text-muted-foreground",
                      )}
                    >
                      {task.status === "done" && (
                        <CheckCircle2 className="size-4 shrink-0 text-acid-lime" aria-hidden="true" />
                      )}
                      {task.status === "active" && (
                        <Loader2
                          className={cn(
                            "size-4 shrink-0 text-acid-lime",
                            !reducedMotion && "animate-spin",
                          )}
                          aria-hidden="true"
                        />
                      )}
                      {task.status === "queued" && (
                        <CircleDashed className="size-4 shrink-0 text-ink-400" aria-hidden="true" />
                      )}
                      {task.name}
                      {task.status === "active" && (
                        <span className="ml-auto font-mono text-xs text-acid-lime">
                          running
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Agent activity + build status */}
              <div className="flex flex-col gap-px bg-border">
                <div className="flex-1 bg-card p-5 sm:p-6">
                  <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                    Agent activity
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activity.map((item) => (
                      <li key={item.text} className="flex items-start gap-2.5 text-sm">
                        <item.icon
                          className={cn("mt-0.5 size-4 shrink-0", item.tone)}
                          aria-hidden="true"
                        />
                        <span className="font-mono text-xs leading-relaxed text-muted-foreground">
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                      Build gate
                    </p>
                    <Badge variant="lime">passing</Badge>
                  </div>
                  <div className="mt-4 space-y-2" aria-hidden="true">
                    {[
                      ["lint", 100],
                      ["typecheck", 100],
                      ["test", 86],
                      ["build", 64],
                    ].map(([label, pct]) => (
                      <div key={label} className="flex items-center gap-3">
                        <span className="w-20 font-mono text-xs text-muted-foreground">
                          {label}
                        </span>
                        <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink-700">
                          <span
                            className={cn(
                              "block h-full rounded-full",
                              Number(pct) === 100 ? "bg-lavender" : "bg-acid-lime",
                            )}
                            style={{ width: `${pct}%` }}
                          />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
