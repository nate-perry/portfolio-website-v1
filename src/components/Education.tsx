import { education } from "@/data/resume";
import { SectionHeader } from "./SectionHeader";

export function Education() {
  return (
    <section
      id="education"
      className="content-wrap mx-auto max-w-6xl px-5 py-24 sm:py-32"
    >
      <SectionHeader index="06" eyebrow="Education" title="The classroom years." />
      <div className="overflow-hidden rounded-xl border border-line">
        {education.map((e, i) => (
          <div
            key={e.school}
            className={`grid grid-cols-1 gap-2 p-6 md:grid-cols-[1fr_2fr_auto] md:items-center md:gap-8 ${
              i < education.length - 1 ? "border-b border-line" : ""
            }`}
          >
            <div>
              <div className="label">{e.end}</div>
              <div className="mt-2 text-base font-medium">{e.school}</div>
              <div className="mono text-[11px] text-muted">{e.location}</div>
            </div>
            <div className="text-sm text-subtle">
              <div>{e.program}</div>
              <div className="mt-1 text-xs text-muted">{e.college}</div>
            </div>
            <div className="mono text-[11px]">
              {"honors" in e && e.honors ? (
                <span className="rounded-full border border-line bg-card px-2.5 py-1 text-lime">
                  {e.honors}
                </span>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
