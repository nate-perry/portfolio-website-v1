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
        index="03"
        eyebrow="Work"
        title="Five roles, one long arc."
        description="From a UMD GIS internship to shipping edge infrastructure at AWS — each stop compounds on the last."
      />

      <ul className="divide-y divide-line border-t border-line">
        {experiences.map((exp, i) => {
          const isOpen = open === i;
          return (
            <li key={`${exp.company}-${exp.start}`}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className={cn(
                  "grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 py-5 text-left transition",
                  "hover:bg-[rgb(var(--line)/0.35)] px-2 -mx-2 rounded-lg"
                )}
                aria-expanded={isOpen}
              >
                <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-md border border-line bg-white p-1">
                  <Image
                    src={exp.logo}
                    alt=""
                    fill
                    className="object-contain p-1"
                    sizes="36px"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-base font-medium sm:text-lg">
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
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line text-muted">
                  {isOpen ? (
                    <Minus className="h-3.5 w-3.5" />
                  ) : (
                    <Plus className="h-3.5 w-3.5" />
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
                    <div className="grid grid-cols-1 gap-6 pb-6 pl-[52px] pr-2 md:grid-cols-[1fr_auto]">
                      <ul className="space-y-3 text-sm leading-relaxed text-subtle">
                        {exp.bullets.map((b, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span
                              aria-hidden
                              className="mono mt-[2px] text-[11px] text-muted"
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
                              className="mono rounded-full border border-line bg-card px-2 py-0.5 text-[11px] text-muted"
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
