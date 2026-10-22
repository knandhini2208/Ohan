import { ArticleCard } from "@/components/cards/ArticleCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { articles } from "@/data/articles";

export function EducationHighlights() {
  const highlights = articles.slice(0, 3);

  return (
    <section className="bg-sage-50 py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Health education"
            title="Learn at your own pace"
            description="Short, plain-language guides on nutrition, mental wellbeing and everyday healthy habits."
          />
          <Button
            href="/education"
            variant="secondary"
            className="self-start sm:self-auto"
          >
            View all articles
          </Button>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((article) => (
            <li key={article.slug}>
              <ArticleCard article={article} />
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-sage-700">
          Articles are sample content for demonstration. Health information on
          OHAN is general and is not a substitute for advice from a qualified
          healthcare professional.
        </p>
      </Container>
    </section>
  );
}