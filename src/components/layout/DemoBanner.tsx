import { Container } from "@/components/ui/Container";

export function DemoBanner() {
  return (
    <div className="bg-sage-900 text-sage-50">
      <Container>
        <p className="py-2 text-center text-xs font-medium sm:text-sm">
          Demonstration website: all experts, facilities and articles shown are
          fictional, and nothing here is medical advice.
        </p>
      </Container>
    </div>
  );
}