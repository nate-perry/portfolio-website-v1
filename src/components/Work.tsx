"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { experiences } from "@/data/resume";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";

export function Work() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="work"
      className="content-wrap mx-auto max-w-6xl px-5 py-24 sm:py-32"
    >
      <SectionHeader
        eyebrow="work"
        title="five roles,"
        titleAccent="one long arc."
        description="From a UMD GIS internship to shipping edge infrastructure at AWS — each stop compounded on the last."
      />

      <ul className="space-y-2">
        {experiences.map((exp, i) => {
          const isOpen = open === i;
          return (
            <li
              key={`${exp.company}-${exp.start}`}
              className={cn(
                "paper overflow-hidden rounded-3xl border border-line transition",
                isOpen ? "border-line-strong" : "hover:border-line-strong"
              )}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-5 text-left"
                aria-expanded={isOpen}
              >
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-line bg-white p-1.5">
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
                    <span className="text-lg font-medium">
                      {exp.company.replace(" (AWS)", "")}
                    </span>
                    <span className="serif truncate text-base italic text-muted">
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
                      ? "border-accent bg-accent text-white"
                      : "border-line text-muted"
                  )}
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
                    <div className="grid grid-cols-1 gap-6 border-t border-dashed border-line px-5 py-6 md:grid-cols-[1fr_auto]">
                      <ul className="space-y-3 text-sm leading-relaxed text-subtle sm:text-base">
                        {exp.bullets.map((b, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span
                              aria-hidden
                              className="mono mt-1 text-[11px] text-accent"
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
