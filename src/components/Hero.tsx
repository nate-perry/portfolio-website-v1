"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/data/resume";

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
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-line"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-pattern fade-mask opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-[480px] w-[480px] animate-blob-slow rounded-full opacity-60 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgb(var(--c-violet) / 0.55), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/3 h-[520px] w-[520px] animate-blob-slow rounded-full opacity-60 blur-[110px]"
        style={{
          animationDelay: "-6s",
          background:
            "radial-gradient(circle at 70% 50%, rgb(var(--c-teal) / 0.5), transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/3 h-[420px] w-[420px] animate-blob-slow rounded-full opacity-50 blur-[110px]"
        style={{
          animationDelay: "-10s",
          background:
            "radial-gradient(circle at 50% 50%, rgb(var(--c-pink) / 0.45), transparent 65%)",
        }}
      />

      <div className="content-wrap mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 pb-24 pt-16 md:grid-cols-[1.25fr_1fr] md:pt-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-xs"
          >
            <span className="relative inline-flex h-1.5 w-1.5">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70"
                style={{ background: "rgb(var(--c-lime))" }}
              />
              <span
                className="relative inline-flex h-1.5 w-1.5 rounded-full"
                style={{ background: "rgb(var(--c-lime))" }}
              />
            </span>
            <span className="text-subtle">Available for side projects</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-display font-semibold"
          >
            Nate Perry
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-subtle sm:text-xl"
          >
            Software engineer at{" "}
            <span className="font-medium text-[rgb(var(--fg))]">AWS</span>{" "}
            building cloud &amp; edge systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-[rgb(var(--fg))] px-5 py-2.5 text-sm font-medium text-[rgb(var(--bg))] transition hover:opacity-90"
            >
              See my work
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.rfp}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2.5 text-sm transition hover:border-line-strong"
            >
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ background: "rgb(var(--c-violet))" }}
              />
              <span className="font-medium">RFP Radar</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.geo}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2.5 text-sm transition hover:border-line-strong"
            >
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ background: "rgb(var(--c-teal))" }}
              />
              <span className="font-medium">GeoIntel</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              Arlington, VA
            </span>
            <span className="mono text-xs">
              <LocalClock /> ET
            </span>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-[rgb(var(--fg))]"
            >
              <Github className="h-3.5 w-3.5" /> GitHub
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-[rgb(var(--fg))]"
            >
              <Linkedin className="h-3.5 w-3.5" /> LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 transition hover:text-[rgb(var(--fg))]"
            >
              <Mail className="h-3.5 w-3.5" /> Email
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div
            aria-hidden
            className="absolute -inset-6 rounded-[32px] opacity-70 blur-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgb(var(--c-violet) / 0.35), rgb(var(--c-blue) / 0.25) 50%, rgb(var(--c-pink) / 0.3))",
            }}
          />
          <div className="relative overflow-hidden rounded-3xl border border-line bg-card">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={profile.headshot}
                alt={profile.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 360px"
              />
            </div>
            <div className="flex items-center justify-between border-t border-line bg-card px-4 py-3 text-xs">
              <div>
                <div className="label">Currently</div>
                <div className="mt-0.5 font-medium">AWS · Edge Services</div>
              </div>
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium text-white"
                style={{
                  background:
                    "linear-gradient(135deg, rgb(var(--c-violet)), rgb(var(--c-blue)))",
                }}
              >
                Shipping
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
