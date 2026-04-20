"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  FolderGit2,
  Github,
  GraduationCap,
  Home,
  Layers,
  Linkedin,
  Mail,
  Moon,
  Search,
  Sparkles,
  Sun,
  User,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { profile } from "@/data/resume";
import { cn } from "@/lib/utils";

type Action = {
  id: string;
  label: string;
  group: string;
  icon: React.ComponentType<{ className?: string }>;
  hint?: string;
  run: () => void;
  external?: boolean;
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { setTheme, resolvedTheme } = useTheme();

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  const scrollTo = useCallback(
    (id: string) => () => {
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      close();
    },
    [close]
  );

  const openUrl = useCallback(
    (url: string) => () => {
      window.open(url, "_blank", "noopener,noreferrer");
      close();
    },
    [close]
  );

  const actions = useMemo<Action[]>(
    () => [
      { id: "nav-home", group: "Navigate", label: "Home", icon: Home, run: scrollTo("#home") },
      { id: "nav-about", group: "Navigate", label: "About", icon: User, run: scrollTo("#about") },
      { id: "nav-work", group: "Navigate", label: "Work", icon: Briefcase, run: scrollTo("#work") },
      { id: "nav-projects", group: "Navigate", label: "Projects", icon: FolderGit2, run: scrollTo("#projects") },
      { id: "nav-education", group: "Navigate", label: "Education", icon: GraduationCap, run: scrollTo("#education") },
      { id: "nav-stack", group: "Navigate", label: "Stack", icon: Layers, run: scrollTo("#stack") },
      {
        id: "ext-rfp",
        group: "Links",
        label: "Open RFP Radar",
        icon: Sparkles,
        run: openUrl(profile.rfp),
        external: true,
      },
      {
        id: "ext-geo",
        group: "Links",
        label: "Open GeoIntel",
        icon: Sparkles,
        run: openUrl(profile.geo),
        external: true,
      },
      {
        id: "ext-github",
        group: "Links",
        label: "GitHub · nate-perry",
        icon: Github,
        run: openUrl(profile.socials.github),
        external: true,
      },
      {
        id: "ext-linkedin",
        group: "Links",
        label: "LinkedIn",
        icon: Linkedin,
        run: openUrl(profile.socials.linkedin),
        external: true,
      },
      {
        id: "ext-email",
        group: "Links",
        label: `Email · ${profile.email}`,
        icon: Mail,
        run: () => {
          window.location.href = `mailto:${profile.email}`;
          close();
        },
      },
      {
        id: "theme-toggle",
        group: "Theme",
        label: resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode",
        icon: resolvedTheme === "dark" ? Sun : Moon,
        run: () => {
          setTheme(resolvedTheme === "dark" ? "light" : "dark");
          close();
        },
      },
    ],
    [scrollTo, openUrl, resolvedTheme, setTheme, close]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter((a) => a.label.toLowerCase().includes(q));
  }, [actions, query]);

  const grouped = useMemo(() => {
    const g = new Map<string, Action[]>();
    for (const a of filtered) {
      if (!g.has(a.group)) g.set(a.group, []);
      g.get(a.group)!.push(a);
    }
    return Array.from(g.entries());
  }, [filtered]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape") {
        close();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  const onInputKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(filtered.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(0, i - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[active]?.run();
    }
  };

  let flatIndex = -1;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-[12vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={close}
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-line-strong bg-card shadow-2xl"
          >
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <Search className="h-4 w-4 text-muted" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onInputKey}
                placeholder="Jump to section, open link…"
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
              />
              <kbd className="mono rounded-md border border-line px-1.5 py-0.5 text-[10px] text-muted">
                esc
              </kbd>
            </div>
            <div className="max-h-[50vh] overflow-y-auto p-2">
              {grouped.length === 0 ? (
                <div className="px-3 py-6 text-center text-sm text-muted">
                  No matches
                </div>
              ) : (
                grouped.map(([group, items]) => (
                  <div key={group} className="mb-2 last:mb-0">
                    <div className="label px-2 py-1.5">{group}</div>
                    <ul>
                      {items.map((a) => {
                        flatIndex += 1;
                        const Icon = a.icon;
                        const isActive = flatIndex === active;
                        return (
                          <li key={a.id}>
                            <button
                              type="button"
                              onMouseEnter={() => setActive(flatIndex)}
                              onClick={a.run}
                              className={cn(
                                "flex w-full items-center justify-between rounded-lg px-2 py-2 text-sm transition",
                                isActive
                                  ? "bg-[rgb(var(--line))] text-[rgb(var(--fg))]"
                                  : "text-subtle hover:bg-[rgb(var(--line)/0.6)]"
                              )}
                            >
                              <span className="flex items-center gap-3">
                                <Icon className="h-4 w-4 text-muted" />
                                <span>{a.label}</span>
                              </span>
                              {a.external ? (
                                <ArrowUpRight className="h-3.5 w-3.5 text-muted" />
                              ) : null}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))
              )}
            </div>
            <div className="flex items-center justify-between border-t border-line px-3 py-2 text-[11px] text-muted">
              <span className="mono">NATE.PERRY // command menu</span>
              <span className="mono flex items-center gap-2">
                <kbd className="rounded border border-line px-1">↑↓</kbd> nav
                <kbd className="rounded border border-line px-1">⏎</kbd> select
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
