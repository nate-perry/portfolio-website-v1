import { SectionHeader } from "./SectionHeader";

const highlights = [
  {
    label: "Based in",
    value: "Arlington, VA",
  },
  {
    label: "Currently",
    value: "AWS · Edge Services",
  },
  {
    label: "Interests",
    value: "Cloud · Edge · Geospatial · iOS",
  },
  {
    label: "Education",
    value: "UMD · CS + GIS minor",
  },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeader
        eyebrow="About"
        title="A little about me"
        description="I'm a software engineer at AWS, currently on the Edge Services team. I like the intersection of cloud infrastructure and secure distributed systems — building things that work reliably at scale and are pleasant to use."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-subtle bg-surface p-6 leading-relaxed text-muted">
          <p>
            Before AWS, I studied Computer Science and Geospatial Information
            Sciences at the University of Maryland. That background pulls me
            toward problems where data, location, and systems intersect —
            geospatial APIs, sensor data, and connectivity at the edge.
          </p>
          <p className="mt-4">
            Outside of work I build apps people actually use. I&apos;m working
            on{" "}
            <a
              href="https://app.setlistapp.org"
              target="_blank"
              rel="noreferrer"
              className="text-[rgb(var(--foreground))] underline underline-offset-4 hover:text-brand-400"
            >
              Setlist
            </a>
            , a live-music discovery platform, and shipped an interval timer on
            the iOS App Store.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-3">
          {highlights.map((h) => (
            <li
              key={h.label}
              className="rounded-2xl border border-subtle bg-surface p-5"
            >
              <div className="text-xs uppercase tracking-wider text-muted">
                {h.label}
              </div>
              <div className="mt-2 text-sm font-medium">{h.value}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
