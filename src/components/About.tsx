import { SectionHeader } from "./SectionHeader";

const facts = [
  { k: "Role", v: "Software Engineer" },
  { k: "Team", v: "AWS Edge Services" },
  { k: "Base", v: "Arlington, VA" },
  { k: "Interests", v: "Cloud · Edge · Geospatial · iOS" },
  { k: "Schooled", v: "UMD · CS + GIS minor" },
  { k: "Available", v: "For side collab" },
];

export function About() {
  return (
    <section
      id="about"
      className="content-wrap mx-auto max-w-6xl px-5 py-24 sm:py-32"
    >
      <SectionHeader
        index="02"
        eyebrow="About"
        title="Cloud engineer, GIS nerd, iOS hobbyist."
        description="I work on the infrastructure under products that run at scale. Day job is Edge Services at AWS; side projects tend to mix location, data, and anything that puts pixels on a phone."
      />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-6 text-base leading-relaxed text-subtle">
          <p>
            I got into software through GIS — starting at Anne Arundel CC, then a
            CS degree and Geospatial Information Sciences minor at Maryland. At
            UMD I built interactive campus mapping tools used by thousands of
            students daily.
          </p>
          <p>
            At AWS I spent two years on the National Security Practice building
            secure serverless geospatial APIs, ETL at scale, and reusable cloud
            building blocks adopted across 10+ teams. I&apos;m now on Edge
            Services, shipping control-plane APIs, encrypted data-plane paths,
            and a central config service for edge-deployed hardware.
          </p>
          <p>
            Outside the day job I&apos;m building{" "}
            <a
              href="https://app.setlistapp.org"
              target="_blank"
              rel="noreferrer"
              className="link-underline text-[rgb(var(--fg))]"
            >
              Setlist
            </a>
            , a live-music discovery platform, and I maintain a SwiftUI interval
            timer on the App Store.
          </p>
        </div>

        <dl className="grid grid-cols-2 overflow-hidden rounded-xl border border-line">
          {facts.map((f, i) => (
            <div
              key={f.k}
              className={`flex flex-col justify-between gap-4 border-line p-5 ${
                i % 2 === 0 ? "border-r" : ""
              } ${i < facts.length - 2 ? "border-b" : ""}`}
            >
              <dt className="label">{f.k}</dt>
              <dd className="mono text-sm">{f.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
