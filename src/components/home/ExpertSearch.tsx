"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { expertCategories, popularSearches } from "@/data/search";
import { buildExpertsHref } from "@/lib/search";

const fieldClasses =
  "h-12 w-full rounded-xl border border-sage-300 bg-white px-4 text-base text-sage-900 transition-colors placeholder:text-sage-600 hover:border-sage-400";

export function ExpertSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [type, setType] = useState("all");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(buildExpertsHref(query, type));
  }

  return (
    <div className="rounded-3xl border border-sage-200 bg-white p-5 shadow-sm sm:p-6">
      <form
        onSubmit={handleSubmit}
        role="search"
        aria-label="Find a healthcare expert"
        className="grid gap-4 md:grid-cols-[1fr_16rem_auto] md:items-end"
      >
        <div>
          <label
            htmlFor="hero-search-query"
            className="mb-1.5 block text-sm font-semibold text-sage-900"
          >
            What are you looking for?
          </label>
          <input
            id="hero-search-query"
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="A name, specialisation or topic"
            className={fieldClasses}
          />
        </div>

        <div>
          <label
            htmlFor="hero-search-type"
            className="mb-1.5 block text-sm font-semibold text-sage-900"
          >
            Type of expert
          </label>
          <select
            id="hero-search-type"
            value={type}
            onChange={(event) => setType(event.target.value)}
            className={fieldClasses}
          >
            {expertCategories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        <Button type="submit" size="lg" className="h-12 w-full md:w-auto">
          <Search className="h-5 w-5" aria-hidden="true" />
          Search
        </Button>
      </form>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-sage-800">Popular topics:</span>
        {popularSearches.map((term) => (
          <Link
            key={term}
            href={buildExpertsHref(term, "all")}
            className="rounded-full border border-sage-200 bg-sage-50 px-3 py-1 text-sm text-sage-800 transition-colors hover:border-sage-300 hover:bg-sage-100"
          >
            {term}
          </Link>
        ))}
      </div>
    </div>
  );
}