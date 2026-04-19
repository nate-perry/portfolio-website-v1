"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/resume";
import { SectionHeader } from "./SectionHeader";
import { Sparkle, Star } from "./Doodles";
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
        eyebrow="play"
        title="side quests &"
        titleAccent="experiments."
        description="A rotating mix of products I'm building, weekend experiments, and tools I wanted to exist. Ask me about any of them."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-6">
        {rfp ? (
          <FeaturedCard
            project={rfp}
            className="md:col-span-4"
            flair="pink"
            rotate="-rotate-[0.5deg]"
            tag="shhh · cooking"
          />
        ) : null}
        {setlist ? (
          <FeaturedCard
            project={setlist}
            className="md:col-span-2"
            flair="amber"
            rotate="rotate-[0.5deg]"
            tag="in the wild"
          />
        ) : null}

        {rest.map((p) => (
          <MiniCard key={p.name} project={p} className="md:col-span-2" />
        ))}
      </div>
    </section>
  );
}

function FeaturedCard({
  project,
  className,
  flair,
  rotate,
  tag,
}: {
  project: (typeof projects)[number];
  className?: string;
  flair: "pink" | "amber";
  rotate?: string;
  tag: string;
}) {
  const gradient =
    flair === "amber"
      ? "from-amber-300/40 via-orange-200/20 to-transparent dark:from-amber-500/25 dark:via-orange-400/10"
      : "from-rose-300/40 via-fuchsia-200/20 to-transparent dark:from-rose-500/25 dark:via-fuchsia-400/10";
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
        "group paper relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-3xl border border-line p-7 transition",
        "hover:-translate-y-1 hover:border-line-strong",
        rotate,
        className
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -inset-1 bg-gradient-to-br opacity-70 blur-2xl transition-opacity group-hover:opacity-90",
          gradient
        )}
      />

      <div className="relative z-[1] flex items-center justify-between">
        <span
          className="sticker inline-flex rotate-[-4deg] items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-medium text-white"
        >
          <Sparkle className="h-3 w-3" />
          {tag}
        </span>
        <ArrowUpRight className="h-5 w-5 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
      </div>

      <div className="relative z-[1] mt-10">
        <div className="mono text-xs text-muted">{project.tagline}</div>
        <h3 className="mt-2 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {project.name}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-subtle sm:text-base">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line bg-[rgb(var(--bg)/0.5)] px-2.5 py-1 text-[11px] text-muted backdrop-blur"
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
        "group paper relative flex flex-col overflow-hidden rounded-3xl border border-line transition hover:-translate-y-1 hover:border-line-strong",
        className
      )}
    >
      {project.image ? (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-soft">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <Star className="absolute right-3 top-3 h-4 w-4 text-accent opacity-0 transition group-hover:opacity-100" />
        </div>
      ) : (
        <div className="flex aspect-[16/10] items-center justify-center bg-soft">
          <span className="serif text-2xl italic text-muted">
            {project.tagline}
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-medium">{project.name}</h3>
            <ArrowUpRight className="h-4 w-4 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
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
              className="rounded-full border border-line bg-soft px-2 py-0.5 text-[11px] text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
