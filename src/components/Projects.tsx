"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { projects } from "@/data/resume";
import { SectionHeader } from "./SectionHeader";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeader
        eyebrow="Projects"
        title="Things I'm building"
        description="A mix of products I'm shipping on the side and experiments I've enjoyed. More to come as I flesh this section out."
      />

      {featured.length > 0 && (
        <div className="mb-6 grid gap-6 md:grid-cols-2">
          {featured.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-subtle bg-surface p-6 transition hover:border-brand-400/60"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-500/20 blur-3xl transition group-hover:bg-brand-500/30" />
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-subtle bg-[rgb(var(--background))] px-2.5 py-0.5 text-xs text-muted">
                  <Sparkles className="h-3 w-3" /> Featured
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[rgb(var(--foreground))]" />
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                {p.name}
              </h3>
              <div className="mt-1 font-mono text-xs text-brand-400">
                {p.tagline}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-subtle bg-[rgb(var(--background))] px-2.5 py-0.5 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-3">
        {others.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group overflow-hidden rounded-2xl border border-subtle bg-surface transition hover:border-brand-400/60"
          >
            {p.image ? (
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[rgb(var(--background))]">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ) : null}
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold tracking-tight">
                  {p.name}
                </h3>
                <ArrowUpRight className="h-4 w-4 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[rgb(var(--foreground))]" />
              </div>
              <div className="mt-1 font-mono text-xs text-brand-400">
                {p.tagline}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-subtle bg-[rgb(var(--background))] px-2 py-0.5 text-[11px] text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
