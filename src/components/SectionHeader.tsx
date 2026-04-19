import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  children,
  accent = "var(--c-blue)",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
  accent?: string;
}) {
  return (
    <div className="mb-12 flex flex-col items-start gap-4">
      <div className="inline-flex items-center gap-2.5">
        <span
          aria-hidden
          className="inline-block h-1.5 w-1.5 rounded-full"
          style={{ background: `rgb(${accent})` }}
        />
        <span className="label">{eyebrow}</span>
      </div>
      <h2 className="max-w-3xl text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
