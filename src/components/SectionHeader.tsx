import type { ReactNode } from "react";
import { Squiggle } from "./Doodles";

export function SectionHeader({
  eyebrow,
  title,
  titleAccent,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-14 flex flex-col items-start gap-5">
      <div className="inline-flex items-center gap-3">
        <Squiggle className="h-3 w-12 text-accent" />
        <span className="label text-accent">{eyebrow}</span>
        <Squiggle className="h-3 w-12 text-accent" />
      </div>
      <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
        {title}
        {titleAccent ? (
          <>
            {" "}
            <span className="serif italic font-normal text-accent">
              {titleAccent}
            </span>
          </>
        ) : null}
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
