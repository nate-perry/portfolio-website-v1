import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/resume";

export function Contact() {
  return (
    <section
      id="contact"
      className="content-wrap relative overflow-hidden border-t border-line"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 0%, rgb(var(--c-violet) / 0.18), transparent 60%), radial-gradient(ellipse 50% 40% at 80% 100%, rgb(var(--c-orange) / 0.15), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 py-28 sm:py-36">
        <div className="label">Contact</div>
        <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
          Let&apos;s{" "}
          <span
            style={{
              background:
                "linear-gradient(120deg, rgb(var(--c-violet)), rgb(var(--c-blue)) 40%, rgb(var(--c-teal)) 80%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            build
          </span>{" "}
          something.
        </h2>
        <p className="mt-6 max-w-xl text-lg text-muted">
          Open to side projects and collabs. I reply within a day.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-base font-medium text-white transition hover:opacity-90"
            style={{
              background:
                "linear-gradient(135deg, rgb(var(--c-violet)), rgb(var(--c-blue)))",
            }}
          >
            {profile.email}
            <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href={profile.rfp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2.5 text-sm transition hover:border-line-strong"
          >
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ background: "rgb(var(--c-violet))" }}
            />
            <span className="font-medium">RFP Radar</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-muted" />
          </a>
          <a
            href={profile.geo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2.5 text-sm transition hover:border-line-strong"
          >
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ background: "rgb(var(--c-teal))" }}
            />
            <span className="font-medium">GeoIntel</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-muted" />
          </a>
        </div>
      </div>
    </section>
  );
}
