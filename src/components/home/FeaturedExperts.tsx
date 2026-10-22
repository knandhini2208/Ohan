import { ExpertCard } from "@/components/cards/ExpertCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredExperts } from "@/data/experts";

export function FeaturedExperts() {
  return (
    <section className="bg-sage-50 py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Featured experts"
            title="Meet some of the professionals on OHAN"
            description="Compare specialisations, languages and consultation modes before you request an appointment."
          />
          <Button href="/experts" variant="secondary" className="self-start sm:self-auto">
            View all experts
          </Button>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredExperts.map((expert) => (
            <li key={expert.slug}>
              <ExpertCard expert={expert} />
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-sage-700">
          All profiles are fictional and shown for demonstration only. No
          provider on this site has been verified.
        </p>
      </Container>
    </section>
  );
}