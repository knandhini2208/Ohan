import { Apple, Brain, Check, ShieldCheck, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DemoBadge } from "@/components/ui/DemoBadge";
import { ExpertSearch } from "@/components/home/ExpertSearch";

const highlights = [
  "Doctors, nutritionists and therapists",
  "Hospitals, laboratories and wellness centres",
  "Clear, easy-to-read health education",
];

export function Hero() {
  return (
    <section className="bg-sage-50">
      <Container>
        <div className="grid items-center gap-12 pb-10 pt-12 sm:pt-16 lg:grid-cols-12 lg:gap-8 lg:pt-20">
          {/* Left: message */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-sage-200 bg-white px-3 py-1 text-sm font-medium text-sage-800">
              <ShieldCheck className="h-4 w-4 text-sage-600" aria-hidden="true" />
              Overall Health And Nutrition
            </span>

            <h1 className="mt-6 font-heading text-4xl font-semibold leading-tight tracking-tight text-sage-900 sm:text-5xl lg:text-6xl">
              Find the right support for your health and nutrition.
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-sage-800">
              OHAN brings healthcare professionals, wellness services and
              reliable health information together, so you can compare your
              options and request an appointment in one place.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/experts" size="lg">
                Find an expert
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore services
              </Button>
            </div>

            <ul className="mt-8 space-y-2.5">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-sage-800"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-200 text-sage-800">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: sample profile preview */}
          <div className="lg:col-span-5">
            <div className="mx-auto max-w-md rounded-3xl border border-sage-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-sage-900">
                  Sample expert profile
                </p>
                <DemoBadge>Fictional</DemoBadge>
              </div>

              <div className="mt-5 flex items-center gap-4">
                <div
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-sage-200 font-heading text-xl font-semibold text-sage-900"
                  aria-hidden="true"
                >
                  AR
                </div>
                <div>
                  <p className="font-heading text-xl font-semibold text-sage-900">
                    Dr. Asha Raman
                  </p>
                  <p className="text-sm text-sage-700">General physician</p>
                  <p className="text-sm text-sage-700">
                    Sample qualifications, 12 years (sample)
                  </p>
                </div>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                <li className="rounded-full bg-sage-100 px-3 py-1 text-xs font-medium text-sage-800">
                  Video consultation
                </li>
                <li className="rounded-full bg-sage-100 px-3 py-1 text-xs font-medium text-sage-800">
                  In-person
                </li>
                <li className="rounded-full bg-sage-100 px-3 py-1 text-xs font-medium text-sage-800">
                  English, Tamil
                </li>
              </ul>

              <div className="mt-5 grid grid-cols-3 gap-3 border-t border-sage-100 pt-5 text-center">
                <div className="rounded-xl bg-sage-50 p-3">
                  <Stethoscope
                    className="mx-auto h-5 w-5 text-sage-700"
                    aria-hidden="true"
                  />
                  <p className="mt-1.5 text-xs font-medium text-sage-800">Doctors</p>
                </div>
                <div className="rounded-xl bg-sage-50 p-3">
                  <Apple
                    className="mx-auto h-5 w-5 text-sage-700"
                    aria-hidden="true"
                  />
                  <p className="mt-1.5 text-xs font-medium text-sage-800">Nutrition</p>
                </div>
                <div className="rounded-xl bg-sage-50 p-3">
                  <Brain
                    className="mx-auto h-5 w-5 text-sage-700"
                    aria-hidden="true"
                  />
                  <p className="mt-1.5 text-xs font-medium text-sage-800">Therapy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="pb-14 lg:pb-20">
          <ExpertSearch />
        </div>
      </Container>
    </section>
  );
}