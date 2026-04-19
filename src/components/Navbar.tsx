"use client";

import Link from "next/link";
import { Command } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mac, setMac] = useState(true);

  useEffect(() => {
    setMac(navigator.platform.toLowerCase().includes("mac"));
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openCmd = () => {
    const ev = new KeyboardEvent("keydown", {
      key: "k",
      metaKey: true,
      bubbles: true,
    });
    window.dispatchEvent(ev);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-colors duration-300",
        scrolled
          ? "border-b border-line bg-[rgb(var(--bg)/0.72)] backdrop-blur-md"
          : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2 text-sm font-medium">
          <span
            aria-hidden
            className="inline-flex h-6 w-6 items-center justify-center rounded border border-line bg-card"
          >
            <span className="mono text-[11px] text-accent">NP</span>
          </span>
          <span className="mono text-[13px] tracking-tight">nrperry.com</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-1.5 text-sm text-muted transition hover:text-[rgb(var(--fg))]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openCmd}
            className="group hidden items-center gap-2 rounded-md border border-line bg-card px-2.5 py-1.5 text-xs text-muted transition hover:border-line-strong hover:text-[rgb(var(--fg))] sm:flex"
          >
            <Command className="h-3.5 w-3.5" />
            <span>Quick menu</span>
            <kbd className="mono rounded border border-line px-1 py-0.5 text-[10px]">
              {mac ? "⌘K" : "Ctrl+K"}
            </kbd>
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
