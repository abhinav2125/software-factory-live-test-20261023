import { Factory } from "lucide-react";

const columns = [
  {
    heading: "Product",
    links: ["Capabilities", "How it works", "Preview", "Roadmap"],
    hrefs: ["#capabilities", "#how-it-works", "#preview", "#"],
  },
  {
    heading: "Resources",
    links: ["Documentation", "Design system", "Changelog", "Status"],
    hrefs: ["#", "#", "#", "#"],
  },
  {
    heading: "Company",
    links: ["About", "Blog", "Careers", "Contact"],
    hrefs: ["#", "#", "#", "#"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-site grid gap-10 py-14 md:grid-cols-[1.2fr_repeat(3,1fr)]">
        <div>
          <a href="#top" className="flex items-center gap-2.5">
            <span className="surface-raised flex size-9 items-center justify-center rounded-lg">
              <Factory className="size-5 text-acid-lime" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              Software Factory
            </span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            AI-assisted software delivery: from product brief to reviewed,
            tested pull requests.
          </p>
        </div>
        {columns.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <h3 className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              {col.heading}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((label, i) => (
                <li key={label}>
                  <a
                    href={col.hrefs[i]}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Software Factory. All rights reserved.</p>
          <p className="font-mono">lavender · acid lime · vermilion</p>
        </div>
      </div>
    </footer>
  );
}
