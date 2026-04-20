import { SectionHeader } from "./SectionHeader";

const facts = [
  { k: "Role", v: "Software Engineer", c: "var(--c-blue)" },
  { k: "Team", v: "AWS · Edge Services", c: "var(--c-violet)" },
  { k: "Base", v: "Arlington, VA", c: "var(--c-teal)" },
  { k: "Focus", v: "Cloud · Edge · GIS", c: "var(--c-orange)" },
  { k: "Studied", v: "UMD · CS + GIS", c: "var(--c-pink)" },
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
            Building{" "}
            <span style={{ color: "rgb(var(--c-violet))" }}>
              reliable infrastructure
            </span>
            .
          </>
        }
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-2xl border border-line bg-card p-8 text-base leading-relaxed text-subtle">
          <p>
            I got into software through GIS at UMD, where I built campus
            mapping tools used by thousands of students daily.
          </p>
          <p className="mt-4">
            I spent two years at AWS on the National Security Practice — secure
            serverless geospatial APIs, ETL at scale, and reusable cloud
            building blocks. I&apos;m now on{" "}
            <strong className="font-medium text-[rgb(var(--fg))]">
              AWS Edge Services
            </strong>
            , shipping control-plane APIs and config infra for edge hardware.
          </p>
          <p className="mt-4">
            On the side I&apos;m building{" "}
            <a
              href="https://app.setlistapp.org"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-[rgb(var(--fg))] underline decoration-[rgb(var(--c-orange))] decoration-2 underline-offset-4"
            >
              Setlist
            </a>
, plus{" "}
            <a
              href="https://rfp.nrperry.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-[rgb(var(--fg))] underline decoration-[rgb(var(--c-violet))] decoration-2 underline-offset-4"
            >
              RFP Radar
            </a>{" "}
            and{" "}
            <a
              href="https://geo.nrperry.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-[rgb(var(--fg))] underline decoration-[rgb(var(--c-teal))] decoration-2 underline-offset-4"
            >
              GeoIntel
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
