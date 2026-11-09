import type { Metadata } from "next";
import {
  ExternalLink,
  GitBranch,
  Lightbulb,
  MessageCircleQuestion,
  ShieldAlert,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us — Software Factory",
  description:
    "How to reach the Software Factory team: questions, feedback, and collaboration all go through the public GitHub issue tracker.",
};

const issueUrl =
  "https://github.com/abhinav2125/software-factory-live-test-20261023/issues/new";
const issuePath = "github.com/abhinav2125/software-factory-live-test-20261023/issues/new";

const topics = [
  {
    icon: MessageCircleQuestion,
    title: "Questions",
    description:
      "Ask how the factory works — workflows, agent orchestration, review, or how a change moves from brief to pull request.",
    accent: "lime" as const,
  },
  {
    icon: Lightbulb,
    title: "Feedback",
    description:
      "Tell us what is confusing, broken, or missing. Screenshots, the page you were on, and the steps you followed make feedback easier to act on.",
    accent: "lavender" as const,
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Propose a feature, a workflow change, or a way to work together on the repository. Ideas that start as a discussion often become a reviewed change.",
    accent: "vermilion" as const,
  },
];

const accentStyles = {
  lime: "bg-acid-lime/12 text-acid-lime",
  lavender: "bg-lavender/12 text-lavender",
  vermilion: "bg-vermilion/12 text-vermilion-soft",
};

export default function ContactPage() {
  return (
    <main id="main-content" className="container-site min-h-screen pt-32 pb-20 sm:pt-40">
      <span
        hidden
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: "<!-- factory-live-e2e:20261030-contact-page -->" }}
      />
      <Badge>Contact</Badge>
      <h1 className="font-display mt-6 text-[length:var(--text-hero)] leading-tight font-semibold tracking-tight">
        Contact Us
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Getting in touch is simple: the Software Factory team keeps one public
        channel, the issue tracker on GitHub. Ask a question, share feedback, or
        start a conversation about working together — every message lands in the
        same place, in the open.
      </p>

      <section aria-labelledby="contact-channel" className="mt-12">
        <div className="surface-raised relative overflow-hidden rounded-3xl px-6 py-12 sm:px-10 sm:py-14">
          <div
            aria-hidden="true"
            className="bg-blueprint absolute inset-0 [mask-image:radial-gradient(ellipse_70%_80%_at_50%_0%,black,transparent)]"
          />
          <div className="relative grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <h2
                id="contact-channel"
                className="font-display text-balance text-[length:var(--text-section)] leading-[1.08] font-semibold tracking-tight"
              >
                Open a GitHub issue
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
                The GitHub issue channel is for questions, feedback, and
                collaboration. Describe what you want to do, what you expected,
                and what you saw — links to a branch or pull request help us
                follow along. Anyone can read and reply, so the conversation
                stays useful to everyone working in this repository.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={issueUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ size: "lg" }))}
                >
                  Open a GitHub issue
                  <ExternalLink aria-hidden="true" />
                </a>
                <p className="font-mono text-xs break-all text-muted-foreground">
                  {issuePath}
                </p>
              </div>
            </div>
            <div className="surface-panel rounded-xl p-6">
              <span
                className={cn(
                  "flex size-11 items-center justify-center rounded-lg",
                  accentStyles.lime,
                )}
              >
                <GitBranch className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-display mt-4 text-base font-semibold">
                One channel, in the open
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Issues are public. Anyone following the repository can read your
                message, reply, and link related work — so answers help more
                than one person.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="what-to-write" className="mt-12">
        <h2 id="what-to-write" className="sr-only">
          What to write about
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {topics.map((topic) => (
            <Card key={topic.title} className="h-full">
              <CardHeader>
                <span
                  className={cn(
                    "flex size-11 items-center justify-center rounded-lg border border-border shadow-panel",
                    accentStyles[topic.accent],
                  )}
                >
                  <topic.icon className="size-5" aria-hidden="true" />
                </span>
                <CardTitle className="pt-3">
                  <h3>{topic.title}</h3>
                </CardTitle>
                <CardDescription className="leading-relaxed">
                  {topic.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section aria-labelledby="contact-notes" className="mt-10">
        <Card>
          <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start">
            <span
              className={cn(
                "flex size-11 shrink-0 items-center justify-center rounded-lg border border-border shadow-panel",
                accentStyles.vermilion,
              )}
            >
              <ShieldAlert className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h2
                id="contact-notes"
                className="font-display text-base font-semibold"
              >
                Before you post
              </h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                GitHub issues are public, so keep secrets, credentials, and
                private data out of your message. If your topic needs a longer
                look, one issue per topic keeps the discussion readable. There
                is no support desk behind this page — the issue tracker is the
                whole channel, and replies come from the people working in the
                repository.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
