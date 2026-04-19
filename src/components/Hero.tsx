"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Command, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/resume";
import { ArrowDoodle, Sparkle, Underline } from "./Doodles";

function LocalClock() {
  const [now, setNow] = useState<string>("");
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }).format(new Date());
    setNow(fmt());
    const id = setInterval(() => setNow(fmt()), 30000);
    return () => clearInterval(id);
  }, []);
  return <span>{now || "—"}</span>;
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
      <div aria-hidden className="pointer-events-none absolute inset-0 spotlight" />

      <div className="content-wrap mx-auto max-w-6xl px-5 pb-24 pt-14 sm:pt-20">
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            <span className="text-xs">
              around for side collabs · <LocalClock /> in{" "}
              <span className="mono">DC</span>
            </span>
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 items-start gap-12 md:grid-cols-[1.45fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <p className="text-lg text-muted">
              <span className="serif italic">hi, </span>I&apos;m
            </p>
            <h1 className="mt-2 text-display font-semibold leading-[0.95]">
              Nate Perry.
            </h1>

            <p className="relative mt-6 max-w-xl text-lg leading-relaxed text-subtle sm:text-xl">
              I&apos;m a software engineer at{" "}
              <span className="relative inline-block">
                <span className="relative z-[1] font-medium text-[rgb(var(--fg))]">
                  AWS
                </span>
                <Underline className="absolute -bottom-1 left-0 right-0 w-full text-accent" />
              </span>{" "}
              working on{" "}
              <span className="serif italic text-[rgb(var(--fg))]">
                edge services
              </span>
              . I build cloud infrastructure, secure distributed systems, and
              the occasional iOS app.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-[rgb(var(--fg))] px-5 py-2.5 text-sm font-medium text-[rgb(var(--bg))] transition hover:opacity-90"
              >
                see what I&apos;ve built
                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={profile.rfp}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-4 py-2.5 text-sm transition hover:border-accent hover:text-accent"
              >
                <span className="mono text-[11px] opacity-60">↗</span>
                rfp.nrperry.com
              </a>
              <a
                href={profile.geo}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-4 py-2.5 text-sm transition hover:border-accent hover:text-accent"
              >
                <span className="mono text-[11px] opacity-60">↗</span>
                geo.nrperry.com
              </a>
              <button
                type="button"
                onClick={openCmd}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-2.5 text-xs text-muted transition hover:border-line-strong hover:text-[rgb(var(--fg))] md:hidden"
              >
                <Command className="h-3.5 w-3.5" />
                quick menu
              </button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-[rgb(var(--fg))]"
              >
                <Github className="h-4 w-4" /> github
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
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
              <div className="paper relative h-full w-full -rotate-2 overflow-hidden rounded-[28px] border border-line">
                <Image
                  src={profile.headshot}
                  alt={profile.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 360px"
                />
                <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-line-strong bg-[rgb(var(--card)/0.9)] px-3 py-2 text-xs backdrop-blur">
                  <div className="mono text-[10px] uppercase tracking-wider text-muted">
                    now playing
                  </div>
                  <div className="mt-0.5 font-medium">
                    building at AWS · Edge Services
                  </div>
                </div>
              </div>

              <div
                className="sticker absolute -right-4 -top-4 flex h-20 w-20 rotate-[12deg] items-center justify-center rounded-full bg-accent text-center text-white animate-float"
                aria-hidden
              >
                <div>
                  <div className="serif text-lg italic leading-none">
                    hello!
                  </div>
                  <div className="mono mt-1 text-[9px] uppercase tracking-wider">
                    est. 2026
                  </div>
                </div>
              </div>

              <Sparkle
                className="absolute -left-6 top-6 h-6 w-6 text-accent animate-wiggle"
              />
              <ArrowDoodle
                className="absolute -left-16 bottom-12 hidden h-16 w-20 -scale-x-100 text-[rgb(var(--fg)/0.3)] md:block"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
