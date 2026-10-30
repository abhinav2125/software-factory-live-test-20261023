import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us — Software Factory",
  description: "About the Software Factory team: what the product does and how we approach quality.",
};

const sections = [
  {
    title: "Our purpose",
    body: "Software Factory exists to shorten the distance between an idea and a shipped change. The product watches a repository for new issues, implements the requested work in an isolated environment, verifies the result with the project’s own checks, and opens a pull request so a human can review and merge with confidence.",
  },
  {
    title: "How we approach quality",
    body: "Every change is validated before it reaches review: dependencies are installed from a clean lockfile, existing tests keep running, new behavior is covered where practical, and a production build must succeed. We treat protected configuration and credentials as off-limits to automation, and we keep generated artifacts out of version control.",
  },
  {
    title: "The team",
    body: "We are a small group of engineers building reliable automation around everyday software work. We believe automation should be boring in the best way: predictable, auditable, and always leaving the final decision to people.",
  },
];

export default function AboutPage() {
  return (
    <main id="main-content" className="container-site min-h-screen pt-32 pb-20 sm:pt-40">
      <span
        hidden
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: "<!-- factory-live-e2e:20261030-about-us -->" }}
      />
      <Badge>Software Factory</Badge>
      <h1 className="font-display mt-6 text-[length:var(--text-hero)] leading-tight font-semibold tracking-tight">
        About Us
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Reliable automation for everyday software work, with people making the final decision.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {sections.map((section) => (
          <Card key={section.title}>
            <CardHeader>
              <CardTitle>
                <h2>{section.title}</h2>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed text-muted-foreground">{section.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
