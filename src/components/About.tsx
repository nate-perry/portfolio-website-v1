import { SectionHeader } from "./SectionHeader";
import { Star } from "./Doodles";

const facts = [
  { k: "role", v: "Software Engineer" },
  { k: "team", v: "AWS · Edge Services" },
  { k: "base", v: "Arlington, VA" },
  { k: "likes", v: "Cloud · Edge · GIS · iOS" },
  { k: "studied", v: "UMD · CS + GIS minor" },
  { k: "vibe", v: "Down to build" },
];

export function About() {
  return (
    <section
      id="about"
      className="content-wrap mx-auto max-w-6xl px-5 py-24 sm:py-32"
    >
      <SectionHeader
        eyebrow="about"
        title="a cloud engineer who also likes"
        titleAccent="making things pretty."
        description="The short version: I care about infra that's reliable and tools that feel good to use. Here's the slightly longer version."
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="paper relative rounded-3xl border border-line p-8 text-base leading-relaxed text-subtle">
          <Star className="absolute right-6 top-6 h-4 w-4 text-accent animate-wiggle" />
          <p>
            I got into software through GIS — starting at Anne Arundel
            Community College, then a CS degree with a Geospatial Information
            Sciences minor at Maryland. At UMD I built interactive campus
            mapping tools used by thousands of students every day.
          </p>
          <p className="mt-4">
            I spent two years on AWS&apos;s National Security Practice building
            secure serverless geospatial APIs, ETL pipelines at scale, and
            reusable cloud building blocks adopted across 10+ internal teams.
            I&apos;m now on{" "}
            <span className="font-medium text-[rgb(var(--fg))]">
              AWS Edge Services
            </span>{" "}
            shipping control-plane APIs, encrypted data-plane paths, and
            central config for edge-deployed hardware.
          </p>
          <p className="mt-4">
            Outside the day job, I&apos;m building{" "}
            <a
              href="https://app.setlistapp.org"
              target="_blank"
              rel="noreferrer"
              className="link-underline text-[rgb(var(--fg))]"
            >
              Setlist
            </a>
            , a live-music discovery platform, and I maintain a SwiftUI
            interval timer on the App Store with a 5★ rating. More to come at{" "}
            <a
              href="https://rfp.nrperry.com"
              target="_blank"
              rel="noreferrer"
              className="link-underline text-[rgb(var(--fg))]"
            >
              rfp.nrperry.com
            </a>{" "}
            and{" "}
            <a
              href="https://geo.nrperry.com"
              target="_blank"
              rel="noreferrer"
              className="link-underline text-[rgb(var(--fg))]"
            >
              geo.nrperry.com
            </a>
            .
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-3">
          {facts.map((f, i) => (
            <li
              key={f.k}
              className={`dashed-card flex flex-col justify-between gap-6 p-5 transition hover:border-accent ${
                i % 3 === 1 ? "rotate-[-1deg]" : ""
              } ${i % 3 === 2 ? "rotate-[1deg]" : ""}`}
            >
              <span className="label">{f.k}</span>
              <span className="text-sm font-medium">{f.v}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
