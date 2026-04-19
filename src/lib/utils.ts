export function cn(...classes: Array<string | undefined | false | null>): string {
  return classes.filter(Boolean).join(" ");
}

import type { ProjectColor } from "@/data/resume";

export const colorVar: Record<ProjectColor, string> = {
  blue: "var(--c-blue)",
  violet: "var(--c-violet)",
  orange: "var(--c-orange)",
  teal: "var(--c-teal)",
  amber: "var(--c-amber)",
  pink: "var(--c-pink)",
};
