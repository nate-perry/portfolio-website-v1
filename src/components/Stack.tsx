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
        eyebrow="stack"
        title="tools I reach"
        titleAccent="for daily."
        description="What I've shipped production systems with — and the certifications that back them."
      />

      <div className="space-y-4">
        <Marquee items={row1} />
        <Marquee items={row2} reverse />
      </div>

      <div className="mt-14">
        <div className="label mb-4">certifications</div>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c, i) => (
            <li
              key={c.name}
              className={`dashed-card flex flex-col justify-between gap-3 p-5 transition hover:border-accent ${
                i % 2 === 0 ? "rotate-[-0.5deg]" : "rotate-[0.5deg]"
              }`}
            >
              <span className="label">{c.issuer}</span>
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
    <div className="group paper relative overflow-hidden rounded-full border border-line py-3">
      <div
        className={`flex w-max gap-10 px-6 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } group-hover:[animation-play-state:paused]`}
      >
        {track.map((it, i) => (
          <span
            key={`${it}-${i}`}
            className="flex items-center gap-3 whitespace-nowrap text-sm"
          >
            <span className="text-accent">✦</span>
            <span className="font-medium">{it}</span>
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
