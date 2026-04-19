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
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
                N
              </span>
              <span className="serif text-lg italic">nate perry</span>
            </div>
            <p className="mt-4 max-w-sm text-xs text-muted">
              © {year}. Made with love and caffeine in{" "}
              <span className="serif italic">Arlington, VA</span>. Next.js +
              Tailwind, deployed on Vercel.
            </p>
          </div>
          <div>
            <div className="label mb-3">socials</div>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-accent"
                >
                  <Github className="h-3.5 w-3.5" /> github
                </a>
              </li>
              <li>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-accent"
                >
                  <Linkedin className="h-3.5 w-3.5" /> linkedin
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 hover:text-accent"
                >
                  <Mail className="h-3.5 w-3.5" /> email
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="label mb-3">elsewhere</div>
            <ul className="space-y-2 text-sm text-muted">
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
                  href={profile.geo}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline hover:text-[rgb(var(--fg))]"
                >
                  geo.nrperry.com
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
