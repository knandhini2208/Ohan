import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DemoBadge } from "@/components/ui/DemoBadge";
import type { Article } from "@/data/articles";

export function ArticleCard({ article }: { article: Article }) {
  const Icon = article.icon;

  return (
    <Link
      href={`/education/${article.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-sage-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-sage-300 hover:shadow-md"
    >
      <div className="relative flex h-36 items-center justify-center bg-sage-100">
        <Icon className="h-12 w-12 text-sage-600" aria-hidden="true" />
        <DemoBadge className="absolute right-3 top-3">Sample article</DemoBadge>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-sage-700">
            {article.category}
          </span>
          <span className="text-xs text-sage-700">{article.readTime}</span>
        </div>

        <h3 className="mt-3 font-heading text-xl font-semibold text-sage-900">
          {article.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-sage-800">
          {article.excerpt}
        </p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-sage-700">
          Read article
          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}