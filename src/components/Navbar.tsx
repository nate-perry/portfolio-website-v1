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
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mac, setMac] = useState(true);

  useEffect(() => {
    setMac(navigator.platform.toLowerCase().includes("mac"));
    const onScroll = () => setScrolled(window.scrollY > 16);
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
          ? "border-b border-line bg-[rgb(var(--bg)/0.75)] backdrop-blur-md"
          : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="group flex items-center gap-2.5">
          <span
            aria-hidden
            className="relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg text-sm font-semibold text-white"
            style={{
              background:
                "linear-gradient(135deg, rgb(var(--c-violet)), rgb(var(--c-blue)) 60%, rgb(var(--c-teal)))",
            }}
          >
            N
          </span>
          <span className="text-[15px] font-semibold tracking-tight">
            Nate Perry
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-1.5 text-sm text-muted transition hover:bg-[rgb(var(--line)/0.5)] hover:text-[rgb(var(--fg))]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openCmd}
            aria-label="Open command menu"
            className="hidden items-center gap-2 rounded-lg border border-line bg-card px-2.5 py-1.5 text-xs text-muted transition hover:border-line-strong hover:text-[rgb(var(--fg))] sm:flex"
          >
            <Command className="h-3.5 w-3.5" />
            <kbd className="mono rounded border border-line px-1 py-0.5 text-[10px]">
              {mac ? "⌘K" : "^K"}
            </kbd>
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
