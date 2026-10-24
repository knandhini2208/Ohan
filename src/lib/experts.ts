import {
  expertTypeLabels,
  type ConsultMode,
  type Expert,
  type ExpertType,
} from "@/data/experts";

export type ExpertFilters = {
  query: string;
  type: "all" | ExpertType;
  mode: "all" | ConsultMode;
  language: string; // "all" or a language name
};

export const emptyFilters: ExpertFilters = {
  query: "",
  type: "all",
  mode: "all",
  language: "all",
};

// Lower-case, remove apostrophes and punctuation so "Women's health" matches "womens health".
function normalise(text: string): string {
  return text
    .toLowerCase()
    .replace(/['\u2019]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function searchableText(expert: Expert): string {
  return normalise(
    [
      expert.name,
      expert.role,
      expert.qualifications,
      expertTypeLabels[expert.type],
      expert.city,
      expert.bio,
      ...expert.specialisations,
      ...expert.languages,
    ].join(" "),
  );
}

export function filterExperts(list: Expert[], filters: ExpertFilters): Expert[] {
  const words = normalise(filters.query).split(" ").filter(Boolean);

  return list.filter((expert) => {
    if (filters.type !== "all" && expert.type !== filters.type) return false;
    if (filters.mode !== "all" && !expert.modes.includes(filters.mode)) return false;
    if (filters.language !== "all" && !expert.languages.includes(filters.language)) {
      return false;
    }
    if (words.length === 0) return true;

    const text = searchableText(expert);
    return words.every((word) => text.includes(word));
  });
}

export function getLanguages(list: Expert[]): string[] {
  return Array.from(new Set(list.flatMap((expert) => expert.languages))).sort();
}

export function hasActiveFilters(filters: ExpertFilters): boolean {
  return (
    filters.query.trim() !== "" ||
    filters.type !== "all" ||
    filters.mode !== "all" ||
    filters.language !== "all"
  );
}