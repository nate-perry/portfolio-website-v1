import { education } from "@/data/resume";
import { SectionHeader } from "./SectionHeader";

const eduColors = ["var(--c-violet)", "var(--c-teal)"];

export function Education() {
  return (
    <section
      id="education"
      className="content-wrap mx-auto max-w-6xl px-5 py-24 sm:py-32"
    >
      <SectionHeader
        eyebrow="Education"
        accent="var(--c-amber)"
        title={
          <>
            <span style={{ color: "rgb(var(--c-amber))" }}>School</span>.
          </>
        }
      />
      <ul className="overflow-hidden rounded-2xl border border-line bg-card">
        {education.map((e, i) => {
          const color = eduColors[i % eduColors.length];
          return (
            <li
              key={e.school}
              className={`grid grid-cols-1 gap-3 p-6 md:grid-cols-[1fr_2fr_auto] md:items-center md:gap-8 ${
                i < education.length - 1 ? "border-b border-line" : ""
              }`}
            >
              <div>
                <div
                  className="inline-block h-1.5 w-6 rounded-full"
                  style={{ background: `rgb(${color})` }}
                />
                <div className="mt-3 text-lg font-semibold">{e.school}</div>
                <div className="mono text-[11px] text-muted">
                  {e.location} · {e.end}
                </div>
              </div>
              <div className="text-sm text-subtle sm:text-base">
                <div className="font-medium text-[rgb(var(--fg))]">
                  {e.program}
                </div>
                <div className="mt-1 text-xs text-muted">{e.college}</div>
              </div>
              <div>
                {"honors" in e && e.honors ? (
                  <span
                    className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-white"
                    style={{ background: `rgb(${color})` }}
                  >
                    {e.honors}
                  </span>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
