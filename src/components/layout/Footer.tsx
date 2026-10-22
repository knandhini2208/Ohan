import Link from "next/link";
import { Leaf, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { footerGroups } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-sage-200 bg-sage-50">
      <Container>
        <div className="grid gap-12 py-14 lg:grid-cols-12">
          {/* Brand and contact */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sage-700 text-white">
                <Leaf className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-heading text-2xl font-semibold tracking-tight text-sage-900">
                OHAN
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-sage-800">
              Overall Health And Nutrition. A platform concept that helps people
              discover healthcare professionals, facilities and trustworthy
              health information in one place.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-sage-800">
              <li className="flex items-start gap-3">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-sage-600"
                  aria-hidden="true"
                />
                <span>hello@ohan.example (sample address)</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-sage-600"
                  aria-hidden="true"
                />
                <span>Sample office address (demonstration only)</span>
              </li>
            </ul>
          </div>

          {/* Link groups */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:pl-12">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-semibold text-sage-900">
                  {group.title}
                </h2>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-sage-700 transition-colors hover:text-sage-900 hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="rounded-2xl border border-sage-200 bg-white p-5 text-sm leading-relaxed text-sage-800">
          <p>
            <span className="font-semibold text-sage-900">
              Health information disclaimer.
            </span>{" "}
            OHAN is a demonstration project. Content is for general education
            only and is not medical advice, diagnosis or treatment. In an
            emergency, contact your local emergency services immediately (112
            in India).
          </p>
        </div>

        <div className="py-8 text-xs text-sage-700">
          <p>&copy; 2026 OHAN demonstration project. All profiles and data are fictional.</p>
        </div>
      </Container>
    </footer>
  );
}