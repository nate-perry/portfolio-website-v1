"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/resume";
import { SectionHeader } from "./SectionHeader";
import { cn } from "@/lib/utils";

export function Projects() {
  const rfp = projects.find((p) => p.name === "RFP");
  const setlist = projects.find((p) => p.name === "Setlist");
  const rest = projects.filter(
    (p) => p.name !== "RFP" && p.name !== "Setlist"
  );

  return (
    <section
      id="projects"
      className="content-wrap mx-auto max-w-6xl px-5 py-24 sm:py-32"
    >
      <SectionHeader
        index="04"
        eyebrow="Projects"
        title="Things I'm building."
        description="A rotating set of side projects — products in progress, experiments, and tools. Ask me about any of them."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
        {rfp ? (
          <FeaturedCard
            project={rfp}
            className="md:col-span-4"
            accent="pink"
          />
        ) : null}
        {setlist ? (
          <FeaturedCard
            project={setlist}
            className="md:col-span-2"
            accent="blue"
          />
        ) : null}

        {rest.map((p, i) => (
          <MiniCard
            key={p.name}
            project={p}
            className={cn(
              "md:col-span-2",
              i === 0 ? "md:col-span-2" : "",
              rest.length === 3 ? "md:col-span-2" : ""
            )}
          />
        ))}
      </div>
    </section>
  );
}

function FeaturedCard({
  project,
  className,
  accent,
}: {
  project: (typeof projects)[number];
  className?: string;
  accent: "blue" | "pink";
}) {
  const gradient =
    accent === "blue"
      ? "from-sky-500/20 via-transparent to-transparent"
      : "from-fuchsia-500/25 via-transparent to-transparent";
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl border border-line bg-card p-6 transition hover:border-line-strong",
        className
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -inset-1 bg-gradient-to-br opacity-60 blur-2xl transition-opacity group-hover:opacity-80",
          gradient
        )}
      />
      <div className="relative z-[1] flex items-center justify-between">
        <span className="mono text-[11px] uppercase tracking-wider text-muted">
          Featured ·{" "}
          <span className="text-accent">{project.tagline}</span>
        </span>
        <ArrowUpRight className="h-4 w-4 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[rgb(var(--fg))]" />
      </div>
      <div className="relative z-[1] mt-10">
        <h3 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          {project.name}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-subtle">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="mono rounded-full border border-line bg-[rgb(var(--bg)/0.6)] px-2 py-0.5 text-[11px] text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

function MiniCard({
  project,
  className,
}: {
  project: (typeof projects)[number];
  className?: string;
}) {
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-card transition hover:border-line-strong",
        className
      )}
    >
      {project.image ? (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[rgb(var(--bg))]">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover opacity-90 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgb(var(--card))] via-transparent to-transparent" />
        </div>
      ) : (
        <div className="flex aspect-[16/10] items-center justify-center bg-[rgb(var(--bg))]">
          <span className="mono text-[11px] text-muted">{project.tagline}</span>
        </div>
      )}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">{project.name}</h3>
            <ArrowUpRight className="h-4 w-4 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[rgb(var(--fg))]" />
          </div>
          <div className="mono mt-1 text-[11px] text-accent">
            {project.tagline}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-subtle">
            {project.description}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="mono rounded-full border border-line bg-[rgb(var(--bg)/0.6)] px-2 py-0.5 text-[10px] text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
