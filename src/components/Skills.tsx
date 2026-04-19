import { Award, Code2, Cloud, Wrench } from "lucide-react";
import { certifications, skills } from "@/data/resume";
import { SectionHeader } from "./SectionHeader";

const groups = [
  { key: "programming", label: "Programming", icon: Code2 },
  { key: "cloud", label: "Cloud & Infra", icon: Cloud },
  { key: "tools", label: "Tools", icon: Wrench },
] as const;

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeader
        eyebrow="Skills"
        title="What I work with"
        description="A snapshot of the tools and platforms I reach for most."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {groups.map((g) => {
          const Icon = g.icon;
          return (
            <div
              key={g.key}
              className="rounded-2xl border border-subtle bg-surface p-6"
            >
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
                <Icon className="h-4 w-4 text-brand-400" />
                {g.label}
              </div>
              <ul className="flex flex-wrap gap-2">
                {skills[g.key].map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-subtle bg-[rgb(var(--background))] px-3 py-1 text-xs text-muted"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-10">
        <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
          <Award className="h-4 w-4 text-brand-400" />
          Certifications
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c) => (
            <li
              key={c.name}
              className="rounded-2xl border border-subtle bg-surface p-4"
            >
              <div className="text-sm font-medium">{c.name}</div>
              <div className="mt-1 text-xs text-muted">{c.issuer}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
