"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/resume";
import { SectionHeader } from "./SectionHeader";
import { cn, colorVar } from "@/lib/utils";

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
        eyebrow="Projects"
        accent="var(--c-pink)"
        title={
          <>
            Things I&apos;m{" "}
            <span style={{ color: "rgb(var(--c-pink))" }}>building</span>.
          </>
        }
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-6">
        {rfp ? <FeaturedCard project={rfp} className="md:col-span-4" /> : null}
        {setlist ? (
          <FeaturedCard project={setlist} className="md:col-span-2" />
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
}: {
  project: (typeof projects)[number];
  className?: string;
}) {
  const color = colorVar[project.color];
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
        "group card-hover relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-2xl border border-line bg-card p-7 hover:border-line-strong",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70 transition-opacity group-hover:opacity-100"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 15% 0%, rgb(${color} / 0.22), transparent 65%)`,
        }}
      />

      <div className="relative z-[1] flex items-start justify-between">
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium text-white"
          style={{ background: `rgb(${color})` }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
          Featured
        </span>
        <ArrowUpRight
          className="h-5 w-5 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          style={{ color: undefined }}
        />
      </div>

      <div className="relative z-[1] mt-10">
        <div
          className="mono text-xs font-medium"
          style={{ color: `rgb(${color})` }}
        >
          {project.tagline}
        </div>
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
              className="rounded-full border border-line bg-[rgb(var(--bg)/0.6)] px-2.5 py-1 text-[11px] text-muted backdrop-blur"
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
  const color = colorVar[project.color];
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
        "group card-hover flex flex-col overflow-hidden rounded-2xl border border-line bg-card hover:border-line-strong",
        className
      )}
    >
      {project.image ? (
        <div
          className="relative aspect-[16/10] w-full overflow-hidden"
          style={{
            background: `linear-gradient(135deg, rgb(${color} / 0.12), rgb(${color} / 0.04))`,
          }}
        >
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ) : (
        <div
          className="flex aspect-[16/10] items-center justify-center"
          style={{
            background: `linear-gradient(135deg, rgb(${color} / 0.18), rgb(${color} / 0.04))`,
          }}
        >
          <span
            className="mono text-sm font-medium"
            style={{ color: `rgb(${color})` }}
          >
            {project.tagline}
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ background: `rgb(${color})` }}
              />
              <h3 className="text-lg font-semibold">{project.name}</h3>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
          <div className="mono mt-1 text-[11px] text-muted">
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
