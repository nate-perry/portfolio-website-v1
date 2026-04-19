import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/resume";

export function Contact() {
  return (
    <section
      id="contact"
      className="content-wrap relative overflow-hidden border-t border-line"
    >
      <div aria-hidden className="absolute inset-0 dotgrid opacity-70" />
      <div className="relative mx-auto max-w-6xl px-5 py-28 sm:py-36">
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-[1.3fr_1fr]">
          <div>
            <div className="label">07 / Contact</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
              Have something fun <br />
              to build? <span className="text-muted">Let&apos;s talk.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-3 rounded-full border border-line-strong bg-[rgb(var(--fg))] px-5 py-3 text-sm font-medium text-[rgb(var(--bg))] transition hover:opacity-90"
            >
              {profile.email}
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.rfp}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-sm text-muted transition hover:border-line-strong hover:text-[rgb(var(--fg))]"
            >
              <span className="mono text-[11px] text-accent">/rfp</span>
              rfp.nrperry.com
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
