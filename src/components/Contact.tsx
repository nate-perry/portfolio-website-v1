import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/resume";
import { ArrowDoodle, Sparkle } from "./Doodles";

export function Contact() {
  return (
    <section
      id="contact"
      className="content-wrap relative overflow-hidden border-t border-line"
    >
      <div className="relative mx-auto max-w-6xl px-5 py-28 sm:py-36">
        <div className="relative">
          <Sparkle className="absolute -left-2 -top-6 h-5 w-5 text-accent animate-wiggle" />
          <div className="label">say hi</div>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
            got something fun <br />
            <span className="serif italic text-accent">to build</span>
            <span className="serif italic text-muted">?</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Always down to chat — side projects, weird ideas, or just to say
            hello. I try to reply within a day.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3.5 text-base font-medium text-white transition hover:brightness-110"
            >
              {profile.email}
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
              <span className="serif italic">or find me at</span>
              <a
                href={profile.rfp}
                target="_blank"
                rel="noreferrer"
                className="link-underline text-[rgb(var(--fg))]"
              >
                rfp.nrperry.com
              </a>
              <span>·</span>
              <a
                href={profile.geo}
                target="_blank"
                rel="noreferrer"
                className="link-underline text-[rgb(var(--fg))]"
              >
                geo.nrperry.com
              </a>
            </div>
          </div>

          <ArrowDoodle
            className="pointer-events-none absolute -right-2 top-10 hidden h-24 w-28 rotate-12 text-[rgb(var(--fg)/0.25)] md:block"
          />
        </div>
      </div>
    </section>
  );
}
