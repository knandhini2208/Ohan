export function buildExpertsHref(query: string, type: string): string {
  const params = new URLSearchParams();
  if (query.trim()) params.set("q", query.trim());
  if (type && type !== "all") params.set("type", type);
  const qs = params.toString();
  return qs ? `/experts?${qs}` : "/experts";
}