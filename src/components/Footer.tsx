import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/resume";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="content-wrap border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="mono flex items-center gap-2 text-sm">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded border border-line bg-card text-[11px] text-accent">
                NP
              </span>
              nrperry.com
            </div>
            <p className="mt-4 max-w-sm text-xs text-muted">
              © {year} Nathan Perry. Designed &amp; built with Next.js, Tailwind
              &amp; Framer Motion. Hosted on Vercel.
            </p>
          </div>
          <div>
            <div className="label">Socials</div>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline inline-flex items-center gap-2 hover:text-[rgb(var(--fg))]"
                >
                  <Github className="h-3.5 w-3.5" /> github
                </a>
              </li>
              <li>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline inline-flex items-center gap-2 hover:text-[rgb(var(--fg))]"
                >
                  <Linkedin className="h-3.5 w-3.5" /> linkedin
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="link-underline inline-flex items-center gap-2 hover:text-[rgb(var(--fg))]"
                >
                  <Mail className="h-3.5 w-3.5" /> email
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="label">Elsewhere</div>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <a
                  href={profile.rfp}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline hover:text-[rgb(var(--fg))]"
                >
                  rfp.nrperry.com
                </a>
              </li>
              <li>
                <a
                  href="https://app.setlistapp.org"
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline hover:text-[rgb(var(--fg))]"
                >
                  setlistapp.org
                </a>
              </li>
              <li>
                <a
                  href="https://nterval-timer.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline hover:text-[rgb(var(--fg))]"
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
