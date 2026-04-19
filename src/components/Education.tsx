import { GraduationCap } from "lucide-react";
import { education } from "@/data/resume";
import { SectionHeader } from "./SectionHeader";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeader eyebrow="Education" title="Schools & degrees" />
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((e) => (
          <div
            key={e.school}
            className="rounded-2xl border border-subtle bg-surface p-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-subtle bg-[rgb(var(--background))] text-brand-400">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold">{e.school}</div>
                <div className="text-xs text-muted">{e.college}</div>
              </div>
            </div>
            <div className="mt-4 text-sm text-muted">{e.program}</div>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
              <span>{e.location}</span>
              <span aria-hidden>•</span>
              <span>{e.end}</span>
              {"honors" in e && e.honors ? (
                <>
                  <span aria-hidden>•</span>
                  <span className="text-brand-400">{e.honors}</span>
                </>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
