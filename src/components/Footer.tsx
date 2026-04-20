import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/resume";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="content-wrap border-t border-line bg-soft">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-sm font-semibold text-white"
                style={{
                  background:
                    "linear-gradient(135deg, rgb(var(--c-violet)), rgb(var(--c-blue)) 60%, rgb(var(--c-teal)))",
                }}
              >
                N
              </span>
              <span className="text-[15px] font-semibold tracking-tight">
                Nate Perry
              </span>
            </div>
            <p className="mt-4 max-w-sm text-xs text-muted">
              © {year} · Next.js &amp; Vercel.
            </p>
          </div>
          <div>
            <div className="label mb-3">Socials</div>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[rgb(var(--fg))]"
                >
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[rgb(var(--fg))]"
                >
                  <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 hover:text-[rgb(var(--fg))]"
                >
                  <Mail className="h-3.5 w-3.5" /> Email
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="label mb-3">Elsewhere</div>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a
                  href={profile.rfp}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[rgb(var(--fg))]"
                >
                  RFP Radar
                </a>
              </li>
              <li>
                <a
                  href={profile.geo}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[rgb(var(--fg))]"
                >
                  GeoIntel
                </a>
              </li>
              <li>
                <a
                  href="https://app.setlistapp.org"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[rgb(var(--fg))]"
                >
                  setlistapp.org
                </a>
              </li>
              <li>
                <a
                  href="https://nterval-timer.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[rgb(var(--fg))]"
                >
                  interval timer (iOS)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
