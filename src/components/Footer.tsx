import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/resume";

export function Footer() {
  return (
    <footer className="border-t border-subtle">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-10 sm:flex-row sm:items-center">
        <div>
          <div className="text-sm font-semibold">{profile.name}</div>
          <div className="mt-1 text-xs text-muted">
            © {new Date().getFullYear()} · Built with Next.js on Vercel.
          </div>
        </div>
        <div className="flex items-center gap-3 text-muted">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition hover:text-[rgb(var(--foreground))]"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-[rgb(var(--foreground))]"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="transition hover:text-[rgb(var(--foreground))]"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={profile.rfp}
            target="_blank"
            rel="noreferrer"
            className="ml-2 rounded-full border border-subtle bg-surface px-3 py-1 text-xs transition hover:border-brand-400"
          >
            rfp.nrperry.com ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
