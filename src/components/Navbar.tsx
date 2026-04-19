"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full px-4 py-2 transition-all",
            scrolled ? "glass" : "border border-transparent"
          )}
        >
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold tracking-tight"
          >
            <span
              aria-hidden
              className="inline-block h-2 w-2 rounded-full bg-brand-400 shadow-[0_0_16px_rgb(96,170,255)]"
            />
            <span>Nate Perry</span>
          </Link>
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3 py-1.5 text-sm text-muted transition hover:bg-[rgb(var(--border)/0.4)] hover:text-[rgb(var(--foreground))]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a
              href="https://rfp.nrperry.com"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full border border-subtle bg-surface px-3 py-1.5 text-xs font-medium text-muted transition hover:text-[rgb(var(--foreground))] sm:inline-flex"
            >
              rfp.nrperry.com ↗
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
