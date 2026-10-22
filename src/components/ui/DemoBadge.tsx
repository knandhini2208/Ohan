import type { ReactNode } from "react";

type DemoBadgeProps = {
  children?: ReactNode;
  className?: string;
};

export function DemoBadge({ children = "Demo", className = "" }: DemoBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-sage-300 bg-sage-100 px-2.5 py-0.5 text-xs font-semibold text-sage-800 ${className}`}
    >
      {children}
    </span>
  );
}
