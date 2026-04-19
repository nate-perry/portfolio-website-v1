import { certifications, skills } from "@/data/resume";
import { SectionHeader } from "./SectionHeader";

const row1 = [...skills.programming, ...skills.cloud];
const row2 = [...skills.tools, ...skills.programming.slice(0, 3)];

export function Stack() {
  return (
    <section
      id="stack"
      className="content-wrap mx-auto max-w-6xl px-5 py-24 sm:py-32"
    >
      <SectionHeader
        index="05"
        eyebrow="Stack"
        title="Tools I reach for."
        description="What I've shipped production systems with — and the certifications to back them."
      />

      <div className="space-y-6">
        <Marquee items={row1} />
        <Marquee items={row2} reverse />
      </div>

      <div className="mt-14">
        <div className="label mb-4">Certifications</div>
        <ul className="grid grid-cols-1 overflow-hidden rounded-xl border border-line sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c, i) => (
            <li
              key={c.name}
              className={`flex flex-col justify-between gap-2 border-line p-5 ${
                i < certifications.length - 1 ? "border-b sm:border-b-0 sm:border-r last:border-r-0" : ""
              } ${
                i === 1 ? "lg:border-r" : ""
              } ${i < 2 ? "sm:border-b lg:border-b-0" : ""}`}
            >
              <span className="mono text-[11px] text-accent">{c.issuer}</span>
              <span className="text-sm font-medium">{c.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Marquee({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const track = [...items, ...items];
  return (
    <div className="group relative overflow-hidden rounded-xl border border-line bg-card py-4">
      <div
        className={`flex w-max gap-10 px-6 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } group-hover:[animation-play-state:paused]`}
      >
        {track.map((it, i) => (
          <span
            key={`${it}-${i}`}
            className="mono whitespace-nowrap text-sm uppercase tracking-wider text-subtle"
          >
            <span className="mr-3 text-accent">◆</span>
            {it}
          </span>
        ))}
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[rgb(var(--bg))] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[rgb(var(--bg))] to-transparent"
      />
    </div>
  );
}
