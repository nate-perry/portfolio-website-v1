import type { SVGProps } from "react";

export function Squiggle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 140 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      aria-hidden
      {...props}
    >
      <path d="M2 8 Q 12 1, 22 8 T 42 8 T 62 8 T 82 8 T 102 8 T 122 8 T 138 8" />
    </svg>
  );
}

export function ArrowDoodle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 80 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M4 8 C 18 4, 44 20, 54 48" />
      <path d="M46 42 L 54 50 L 62 44" />
    </svg>
  );
}

export function Star(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M12 1l2.39 7.38H22l-6.19 4.5L18.2 20 12 15.5 5.8 20l2.39-7.12L2 8.38h7.61z" />
    </svg>
  );
}

export function Sparkle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" />
    </svg>
  );
}

export function Underline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 200 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      aria-hidden
      {...props}
    >
      <path d="M4 8 C 50 2, 120 2, 196 8" />
    </svg>
  );
}
