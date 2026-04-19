import { certifications, skills } from "@/data/resume";
import { SectionHeader } from "./SectionHeader";

const row1 = [...skills.programming, ...skills.cloud];
const row2 = [...skills.tools, ...skills.programming.slice(0, 3)];

const certColors = [
  "var(--c-blue)",
  "var(--c-violet)",
  "var(--c-orange)",
  "var(--c-teal)",
];

export function Stack() {
  return (
    <section
      id="stack"
      className="content-wrap mx-auto max-w-6xl px-5 py-24 sm:py-32"
    >
      <SectionHeader
        eyebrow="Stack"
        accent="var(--c-teal)"
        title={
          <>
            What I{" "}
            <span style={{ color: "rgb(var(--c-teal))" }}>use</span>.
          </>
        }
      />

      <div className="space-y-4">
        <Marquee items={row1} />
        <Marquee items={row2} reverse />
      </div>

      <div className="mt-14">
        <div className="label mb-4">Certifications</div>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c, i) => {
            const color = certColors[i % certColors.length];
            return (
              <li
                key={c.name}
                className="rounded-2xl border border-line bg-card p-5 card-hover hover:border-line-strong"
              >
                <span
                  className="inline-block h-1.5 w-6 rounded-full"
                  style={{ background: `rgb(${color})` }}
                />
                <div className="label mt-4">{c.issuer}</div>
                <div className="mt-1 text-sm font-medium">{c.name}</div>
              </li>
            );
          })}
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
    <div className="group relative overflow-hidden rounded-full border border-line bg-card py-3">
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
        className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[rgb(var(--bg))] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[rgb(var(--bg))] to-transparent"
      />
    </div>
  );
}
