"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Factory, Menu, X, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#preview", label: "Preview" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-(--motion-base)",
        scrolled || open
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary"
        className="container-site flex h-16 items-center justify-between"
      >
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
          <span className="surface-raised flex size-9 items-center justify-center rounded-lg">
            <Factory className="size-5 text-acid-lime" aria-hidden="true" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Software Factory
          </span>
        </Link>

        <ul className="hidden items-center gap-4 md:flex lg:gap-8">
          {links.map((link) => (
            <li key={link.href} className={link.href.startsWith("/#") ? "hidden lg:block" : undefined}>
              <Link
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm">
            Sign in
          </Button>
          <Button size="sm">
            Start building
            <ArrowRight aria-hidden="true" />
          </Button>
        </div>

        <button
          type="button"
          className="surface-raised flex size-10 items-center justify-center rounded-lg md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile primary" className="border-t border-border md:hidden">
          <ul className="container-site flex flex-col gap-1 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-base text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 flex gap-3 px-3">
              <Button variant="secondary" className="flex-1">
                Sign in
              </Button>
              <Button className="flex-1">
                Start building
                <ArrowRight aria-hidden="true" />
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
