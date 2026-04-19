import type { ReactNode } from "react";

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  children,
}: {
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-12 grid grid-cols-1 items-end gap-6 border-b border-line pb-6 md:grid-cols-[auto_1fr_auto] md:gap-10">
      <div>
        <div className="label flex items-center gap-3">
          {index ? <span className="text-accent">{index}</span> : null}
          <span>{eyebrow}</span>
        </div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-md text-sm leading-relaxed text-muted md:ml-auto">
          {description}
        </p>
      ) : (
        <div />
      )}
      {children ? <div>{children}</div> : null}
    </div>
  );
}
