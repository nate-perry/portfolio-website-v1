import { education } from "@/data/resume";
import { SectionHeader } from "./SectionHeader";

export function Education() {
  return (
    <section
      id="education"
      className="content-wrap mx-auto max-w-6xl px-5 py-24 sm:py-32"
    >
      <SectionHeader
        eyebrow="school"
        title="the classroom"
        titleAccent="years."
      />
      <ul className="space-y-3">
        {education.map((e, i) => (
          <li
            key={e.school}
            className={`paper grid grid-cols-1 gap-3 rounded-3xl border border-line p-6 md:grid-cols-[1fr_2fr_auto] md:items-center md:gap-8 ${
              i % 2 === 0 ? "rotate-[-0.3deg]" : "rotate-[0.3deg]"
            }`}
          >
            <div>
              <div className="label">{e.end}</div>
              <div className="mt-2 text-lg font-medium">{e.school}</div>
              <div className="mono text-[11px] text-muted">{e.location}</div>
            </div>
            <div className="text-sm text-subtle sm:text-base">
              <div className="serif italic">{e.program}</div>
              <div className="mt-1 text-xs text-muted">{e.college}</div>
            </div>
            <div>
              {"honors" in e && e.honors ? (
                <span className="inline-flex items-center rounded-full border border-accent bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {e.honors}
                </span>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
