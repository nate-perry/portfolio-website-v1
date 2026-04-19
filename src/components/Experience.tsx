"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { experiences } from "@/data/resume";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeader
        eyebrow="Experience"
        title="Where I've worked"
        description="A timeline of the teams and problems I've helped ship."
      />

      <ol className="relative border-l border-subtle pl-6 md:pl-10">
        {experiences.map((exp, i) => (
          <motion.li
            key={`${exp.company}-${exp.start}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="group relative mb-10 last:mb-0"
          >
            <span className="absolute -left-[34px] top-2 flex h-6 w-6 items-center justify-center rounded-full border border-subtle bg-surface md:-left-[50px]">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-400 shadow-[0_0_12px_rgb(96,170,255)]" />
            </span>

            <div className="rounded-2xl border border-subtle bg-surface p-6 transition group-hover:border-brand-400/50">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-white p-1">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      fill
                      className="object-contain"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{exp.company}</div>
                    <div className="text-sm text-muted">{exp.role}</div>
                  </div>
                </div>
                <div className="text-right text-xs text-muted">
                  <div>
                    {exp.start} — {exp.end}
                  </div>
                  <div>{exp.location}</div>
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                {exp.bullets.map((b, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span
                      aria-hidden
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-400"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {exp.tags?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-subtle bg-[rgb(var(--background))] px-2.5 py-0.5 text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
