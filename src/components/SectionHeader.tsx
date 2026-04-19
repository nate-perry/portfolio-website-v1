import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-10 flex flex-col items-start gap-3">
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-full border border-subtle bg-surface px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base text-muted">{description}</p>
      ) : null}
      {children}
    </div>
  );
}
