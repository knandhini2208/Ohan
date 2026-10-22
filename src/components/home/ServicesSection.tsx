import { ServiceCard } from "@/components/cards/ServiceCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Our services"
          title="Everything in one place, for every part of your health"
          description="From finding the right professional to understanding your options, OHAN is organised around what people actually look for."
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.slug}>
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}