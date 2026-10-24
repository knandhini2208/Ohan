import type { Metadata } from "next";
import { Suspense } from "react";
import { ExpertsBrowser } from "@/components/experts/ExpertsBrowser";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Find an expert | OHAN",
  description:
    "Search and compare fictional doctors, nutritionists and therapists on the OHAN demonstration platform.",
};

export default function ExpertsPage() {
  return (
    <>
      <section className="bg-sage-50 py-12 sm:py-16">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-sage-700">
            Experts
          </p>
          <h1 className="mt-2 max-w-3xl font-heading text-4xl font-semibold tracking-tight text-sage-900 sm:text-5xl">
            Find a healthcare professional
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-sage-800">
            Search by name, specialisation or topic, then narrow the list by
            type, consultation mode and language.
          </p>
          <p className="mt-4 max-w-2xl text-sm text-sage-700">
            All profiles are fictional and shown for demonstration only. No
            provider on this site has been verified.
          </p>
        </Container>
      </section>

      <section className="bg-white py-10 sm:py-14">
        <Container>
          <Suspense
            fallback={
              <p role="status" className="text-sage-800">
                Loading experts...
              </p>
            }
          >
            <ExpertsBrowser />
          </Suspense>
        </Container>
      </section>
    </>
  );
}