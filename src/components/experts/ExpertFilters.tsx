"use client";

import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  consultModes,
  expertTypeLabels,
  type ExpertType,
} from "@/data/experts";
import type { ExpertFilters as Filters } from "@/lib/experts";

type ExpertFiltersProps = {
  filters: Filters;
  languages: string[];
  showClear: boolean;
  onChange: (changes: Partial<Filters>) => void;
  onClear: () => void;
};

const fieldClasses =
  "h-12 w-full rounded-xl border border-sage-300 bg-white px-4 text-base text-sage-900 transition-colors placeholder:text-sage-600 hover:border-sage-400";

const labelClasses = "mb-1.5 block text-sm font-semibold text-sage-900";

export function ExpertFilters({
  filters,
  languages,
  showClear,
  onChange,
  onClear,
}: ExpertFiltersProps) {
  const typeEntries = Object.entries(expertTypeLabels) as [ExpertType, string][];

  return (
    <div
      role="search"
      aria-label="Search and filter experts"
      className="rounded-3xl border border-sage-200 bg-sage-50 p-5 sm:p-6"
    >
      <div>
        <label htmlFor="expert-search" className={labelClasses}>
          Search experts
        </label>
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-sage-600"
            aria-hidden="true"
          />
          <input
            id="expert-search"
            type="search"
            value={filters.query}
            onChange={(event) => onChange({ query: event.target.value })}
            placeholder="Name, specialisation, city or topic"
            className={`${fieldClasses} pl-12`}
          />
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div>
          <label htmlFor="expert-type" className={labelClasses}>
            Type of expert
          </label>
          <select
            id="expert-type"
            value={filters.type}
            onChange={(event) =>
              onChange({ type: event.target.value as Filters["type"] })
            }
            className={fieldClasses}
          >
            <option value="all">All experts</option>
            {typeEntries.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="expert-mode" className={labelClasses}>
            Consultation mode
          </label>
          <select
            id="expert-mode"
            value={filters.mode}
            onChange={(event) =>
              onChange({ mode: event.target.value as Filters["mode"] })
            }
            className={fieldClasses}
          >
            <option value="all">Any mode</option>
            {consultModes.map((mode) => (
              <option key={mode} value={mode}>
                {mode}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="expert-language" className={labelClasses}>
            Language
          </label>
          <select
            id="expert-language"
            value={filters.language}
            onChange={(event) => onChange({ language: event.target.value })}
            className={fieldClasses}
          >
            <option value="all">Any language</option>
            {languages.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>
      </div>

      {showClear && (
        <div className="mt-4">
          <Button variant="ghost" onClick={onClear}>
            <X className="h-4 w-4" aria-hidden="true" />
            Clear all filters
          </Button>
        </div>
      )}
    </div>
  );
}