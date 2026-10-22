import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <Link
      href={service.href}
      className="group flex h-full flex-col rounded-2xl border border-sage-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-sage-300 hover:shadow-md"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage-100 text-sage-700 transition-colors duration-200 group-hover:bg-sage-700 group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>

      <h3 className="mt-5 font-heading text-xl font-semibold text-sage-900">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-sage-800">
        {service.description}
      </p>

      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-sage-700">
        {service.cta}
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}