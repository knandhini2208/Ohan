"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { SearchX } from "lucide-react";
import { ExpertCard } from "@/components/cards/ExpertCard";
import { ExpertFilters } from "@/components/experts/ExpertFilters";
import { Button } from "@/components/ui/Button";
import { experts } from "@/data/experts";
import {
  emptyFilters,
  filterExperts,
  getLanguages,
  hasActiveFilters,
  type ExpertFilters as Filters,
} from "@/lib/experts";

const allLanguages = getLanguages(experts);
const validTypes = ["all", "doctor", "nutrition", "therapy"];

export function ExpertsBrowser() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const typeParam = searchParams.get("type") ?? "all";
  const type = (validTypes.includes(typeParam) ? typeParam : "all") as Filters["type"];

  // The key makes the filters reset if the address changes (for example,
  // clicking a different popular topic while already on this page).
  return <ExpertsExplorer key={`${query}|${type}`} initialQuery={query} initialType={type} />;
}

function ExpertsExplorer({
  initialQuery,
  initialType,
}: {
  initialQuery: string;
  initialType: Filters["type"];
}) {
  const [filters, setFilters] = useState<Filters>({
    ...emptyFilters,
    query: initialQuery,
    type: initialType,
  });

  const results = filterExperts(experts, filters);
  const active = hasActiveFilters(filters);

  function updateFilters(changes: Partial<Filters>) {
    setFilters((current) => ({ ...current, ...changes }));
  }

  function clearFilters() {
    setFilters(emptyFilters);
  }

  return (
    <div>
      <ExpertFilters
        filters={filters}
        languages={allLanguages}
        showClear={active}
        onChange={updateFilters}
        onClear={clearFilters}
      />

      <p
        role="status"
        aria-live="polite"
        className="mt-8 text-sm font-medium text-sage-800"
      >
        Showing {results.length} of {experts.length} experts
      </p>

      {results.length > 0 ? (
        <ul className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((expert) => (
            <li key={expert.slug}>
              <ExpertCard expert={expert} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-4 rounded-2xl border border-dashed border-sage-300 bg-sage-50 px-6 py-14 text-center">
          <SearchX className="mx-auto h-10 w-10 text-sage-600" aria-hidden="true" />
          <h2 className="mt-4 font-heading text-xl font-semibold text-sage-900">
            No experts match your search
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-sage-800">
            Try a different word, or remove some filters to see more results.
          </p>
          <div className="mt-6">
            <Button onClick={clearFilters}>Clear all filters</Button>
          </div>
        </div>
      )}
    </div>
  );
}