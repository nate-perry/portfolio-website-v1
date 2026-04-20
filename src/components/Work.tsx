"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { experiences } from "@/data/resume";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";

const rowColors = [
  "var(--c-blue)",
  "var(--c-violet)",
  "var(--c-orange)",
  "var(--c-teal)",
  "var(--c-pink)",
];

export function Work() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="work"
      className="content-wrap mx-auto max-w-6xl px-5 py-24 sm:py-32"
    >
      <SectionHeader
        eyebrow="Work"
        accent="var(--c-orange)"
        title={
          <>
            Five roles,{" "}
            <span style={{ color: "rgb(var(--c-orange))" }}>one arc</span>.
          </>
        }
      />

      <ul className="overflow-hidden rounded-2xl border border-line bg-card">
        {experiences.map((exp, i) => {
          const isOpen = open === i;
          const color = rowColors[i % rowColors.length];
          return (
            <li
              key={`${exp.company}-${exp.start}`}
              className={cn(
                "relative",
                i < experiences.length - 1 ? "border-b border-line" : ""
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "absolute inset-y-0 left-0 w-1 transition-opacity",
                  isOpen ? "opacity-100" : "opacity-0"
                )}
                style={{ background: `rgb(${color})` }}
              />
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-5 text-left transition hover:bg-[rgb(var(--line)/0.35)]"
                aria-expanded={isOpen}
              >
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-line bg-white p-1.5">
                  <Image
                    src={exp.logo}
                    alt=""
                    fill
                    className="object-contain p-1.5"
                    sizes="44px"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-base font-semibold sm:text-lg">
                      {exp.company.replace(" (AWS)", "")}
                    </span>
                    <span className="truncate text-sm text-muted">
                      {exp.role}
                    </span>
                  </div>
                  <div className="mono mt-1 text-[11px] uppercase tracking-wider text-muted">
                    {exp.start} → {exp.end} · {exp.location}
                  </div>
                </div>
                <span
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full border transition",
                    isOpen
                      ? "border-transparent text-white"
                      : "border-line text-muted"
                  )}
                  style={isOpen ? { background: `rgb(${color})` } : undefined}
                >
                  {isOpen ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 gap-6 border-t border-line px-5 py-6 md:grid-cols-[1fr_auto]">
                      <ul className="space-y-3 text-sm leading-relaxed text-subtle sm:text-base">
                        {exp.bullets.map((b, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span
                              aria-hidden
                              className="mono mt-1 text-[11px]"
                              style={{ color: `rgb(${color})` }}
                            >
                              {String(idx + 1).padStart(2, "0")}
                            </span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      {exp.tags?.length ? (
                        <div className="flex flex-wrap gap-1.5 md:max-w-xs md:justify-end">
                          {exp.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-line bg-soft px-2.5 py-1 text-[11px] text-muted"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
