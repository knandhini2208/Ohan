import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { steps } from "@/data/how-it-works";

export function HowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="How OHAN works"
          title="From search to appointment request in four simple steps"
          description="OHAN is designed to make finding the right support clear and unhurried."
        />

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li
                key={step.title}
                className="rounded-2xl border border-sage-200 bg-sage-50 p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-sage-200 bg-white text-sage-700">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span
                    className="font-heading text-3xl font-semibold text-sage-300"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-sage-900">
                  <span className="sr-only">Step {index + 1}: </span>
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sage-800">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>

        <p className="mt-8 text-center text-sm text-sage-700">
          In this demonstration version, appointment requests are not sent
          anywhere. Real booking needs a backend, which comes later.
        </p>
      </Container>
    </section>
  );
}