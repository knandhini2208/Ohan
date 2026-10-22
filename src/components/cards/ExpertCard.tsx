import {
  GraduationCap,
  Languages,
  MapPin,
  Phone,
  Video,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DemoBadge } from "@/components/ui/DemoBadge";
import {
  expertTypeLabels,
  type ConsultMode,
  type Expert,
} from "@/data/experts";

const modeIcons: Record<ConsultMode, LucideIcon> = {
  Video,
  "In-person": MapPin,
  Phone,
};

export function ExpertCard({ expert }: { expert: Expert }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-sage-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sage-200 font-heading text-lg font-semibold text-sage-900"
          aria-hidden="true"
        >
          {expert.initials}
        </div>
        <DemoBadge>Fictional profile</DemoBadge>
      </div>

      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-sage-700">
        {expertTypeLabels[expert.type]}
      </p>
      <h3 className="mt-1 font-heading text-xl font-semibold text-sage-900">
        {expert.name}
      </h3>
      <p className="text-sm text-sage-800">{expert.role}</p>

      <ul className="mt-4 space-y-2 text-sm text-sage-800">
        <li className="flex items-start gap-2.5">
          <GraduationCap
            className="mt-0.5 h-4 w-4 shrink-0 text-sage-600"
            aria-hidden="true"
          />
          <span>
            {expert.qualifications}, {expert.experienceYears} years of experience
          </span>
        </li>
        <li className="flex items-start gap-2.5">
          <Languages
            className="mt-0.5 h-4 w-4 shrink-0 text-sage-600"
            aria-hidden="true"
          />
          <span>{expert.languages.join(", ")}</span>
        </li>
        <li className="flex items-start gap-2.5">
          <MapPin
            className="mt-0.5 h-4 w-4 shrink-0 text-sage-600"
            aria-hidden="true"
          />
          <span>{expert.city}</span>
        </li>
      </ul>

      <ul className="mt-4 flex flex-wrap gap-2">
        {expert.specialisations.slice(0, 3).map((item) => (
          <li
            key={item}
            className="rounded-full bg-sage-100 px-3 py-1 text-xs font-medium text-sage-800"
          >
            {item}
          </li>
        ))}
      </ul>

      <ul className="mt-4 flex flex-wrap gap-2">
        {expert.modes.map((mode) => {
          const Icon = modeIcons[mode];
          return (
            <li
              key={mode}
              className="inline-flex items-center gap-1.5 rounded-full border border-sage-200 px-2.5 py-1 text-xs text-sage-800"
            >
              <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              {mode}
            </li>
          );
        })}
      </ul>

      <div className="mt-auto pt-6">
        <Button
          href={`/experts/${expert.slug}`}
          variant="secondary"
          className="w-full"
        >
          View profile
          <span className="sr-only"> of {expert.name}</span>
        </Button>
      </div>
    </article>
  );
}