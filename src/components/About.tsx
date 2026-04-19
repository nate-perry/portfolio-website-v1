import { SectionHeader } from "./SectionHeader";

const facts = [
  { k: "Role", v: "Software Engineer", c: "var(--c-blue)" },
  { k: "Team", v: "AWS · Edge Services", c: "var(--c-violet)" },
  { k: "Base", v: "Arlington, VA", c: "var(--c-teal)" },
  { k: "Focus", v: "Cloud · Edge · GIS", c: "var(--c-orange)" },
  { k: "Studied", v: "UMD · CS + GIS minor", c: "var(--c-pink)" },
  { k: "Status", v: "Open to collab", c: "var(--c-amber)" },
];

export function About() {
  return (
    <section
      id="about"
      className="content-wrap mx-auto max-w-6xl px-5 py-24 sm:py-32"
    >
      <SectionHeader
        eyebrow="About"
        accent="var(--c-violet)"
        title={
          <>
            A cloud engineer focused on{" "}
            <span style={{ color: "rgb(var(--c-violet))" }}>
              reliable infrastructure
            </span>{" "}
            and well-designed APIs.
          </>
        }
        description="The short version — I care about infra that's reliable, APIs that are pleasant, and shipping products that people actually use."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-2xl border border-line bg-card p-8 text-base leading-relaxed text-subtle">
          <p>
            I got into software through GIS — starting at Anne Arundel
            Community College, then a CS degree with a Geospatial Information
            Sciences minor at Maryland. At UMD I built interactive campus
            mapping tools used daily by thousands of students.
          </p>
          <p className="mt-4">
            I spent two years on AWS&apos;s National Security Practice building
            secure serverless geospatial APIs, ETL pipelines at scale, and
            reusable cloud building blocks adopted across 10+ internal teams.
            I&apos;m now on <strong className="text-[rgb(var(--fg))] font-medium">AWS Edge Services</strong>
            {" "}shipping control-plane APIs, encrypted data-plane paths, and
            central config management for edge-deployed hardware.
          </p>
          <p className="mt-4">
            Outside the day job I&apos;m building{" "}
            <a
              href="https://app.setlistapp.org"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-[rgb(var(--fg))] underline decoration-[rgb(var(--c-orange))] decoration-2 underline-offset-4"
            >
              Setlist
            </a>
            , a live-music discovery platform. More at{" "}
            <a
              href="https://rfp.nrperry.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-[rgb(var(--fg))] underline decoration-[rgb(var(--c-violet))] decoration-2 underline-offset-4"
            >
              rfp.nrperry.com
            </a>{" "}
            and{" "}
            <a
              href="https://geo.nrperry.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-[rgb(var(--fg))] underline decoration-[rgb(var(--c-teal))] decoration-2 underline-offset-4"
            >
              geo.nrperry.com
            </a>
            .
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-3">
          {facts.map((f) => (
            <li
              key={f.k}
              className="rounded-2xl border border-line bg-card p-5 card-hover hover:border-line-strong"
            >
              <span
                className="inline-block h-1.5 w-6 rounded-full"
                style={{ background: `rgb(${f.c})` }}
              />
              <div className="label mt-4">{f.k}</div>
              <div className="mt-1 text-sm font-medium">{f.v}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
