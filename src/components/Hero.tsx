"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Command, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/resume";

function LocalClock() {
  const [now, setNow] = useState<string>("");
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());
    setNow(fmt());
    const id = setInterval(() => setNow(fmt()), 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="mono tabular-nums">{now || "--:--:--"}</span>;
}

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
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
    <section
      id="home"
      ref={rootRef}
      className="relative overflow-hidden border-b border-line"
    >
      <div aria-hidden className="absolute inset-0 dotgrid" />
      <div aria-hidden className="pointer-events-none absolute inset-0 spotlight" />

      <div className="content-wrap mx-auto max-w-6xl px-5 pb-20 pt-16 sm:pt-24">
        <div className="flex items-center justify-between text-[11px] text-muted">
          <div className="mono flex items-center gap-2">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            <span className="uppercase tracking-wider">
              Available for collab · {profile.location}
            </span>
          </div>
          <div className="mono hidden items-center gap-2 uppercase tracking-wider sm:flex">
            <span>EST</span>
            <LocalClock />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 items-end gap-10 md:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="label mb-6">01 / Introduction</p>
            <h1 className="text-display font-semibold">
              <span className="block text-[rgb(var(--fg))]">Nathan</span>
              <span className="block text-muted">Perry.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-subtle sm:text-lg">
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-2">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full border border-line-strong bg-[rgb(var(--fg))] px-4 py-2 text-sm font-medium text-[rgb(var(--bg))] transition hover:opacity-90"
              >
                View work
                <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={profile.rfp}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-sm transition hover:border-line-strong"
              >
                <span className="mono text-[11px] text-accent">/rfp</span>
                rfp.nrperry.com
                <ArrowUpRight className="h-3.5 w-3.5 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <button
                type="button"
                onClick={openCmd}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-2 text-xs text-muted transition hover:border-line-strong hover:text-[rgb(var(--fg))] md:hidden"
              >
                <Command className="h-3.5 w-3.5" />
                Quick menu
              </button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-[rgb(var(--fg))]"
              >
                <Github className="h-4 w-4" /> github/nate-perry
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-[rgb(var(--fg))]"
              >
                <Linkedin className="h-4 w-4" /> linkedin
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 transition hover:text-[rgb(var(--fg))]"
              >
                <Mail className="h-4 w-4" /> email
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-3 md:gap-4"
          >
            <div className="col-span-2 overflow-hidden rounded-xl border border-line bg-card">
              <div className="flex items-center justify-between border-b border-line px-4 py-2">
                <span className="label">Now</span>
                <span className="mono text-[11px] text-lime">● shipping</span>
              </div>
              <div className="px-4 py-4 text-sm">
                <div className="text-muted">Software Engineer</div>
                <div className="font-medium">AWS · Edge Services</div>
                <div className="mono mt-2 text-[11px] text-muted">
                  Arlington, VA · Jul 2025 →
                </div>
              </div>
            </div>

            <div className="relative aspect-square overflow-hidden rounded-xl border border-line bg-card">
              <Image
                src={profile.headshot}
                alt={profile.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 220px"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
            </div>

            <div className="flex aspect-square flex-col justify-between overflow-hidden rounded-xl border border-line bg-card p-4">
              <div>
                <div className="label">Credentials</div>
                <div className="mono mt-3 text-2xl font-semibold text-[rgb(var(--fg))]">
                  4
                </div>
                <div className="text-xs text-muted">certifications</div>
              </div>
              <div className="mono text-[11px] text-muted">
                <div>AWS CP</div>
                <div>AWS SAA</div>
                <div>AWS DVA</div>
                <div>Sec+</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
