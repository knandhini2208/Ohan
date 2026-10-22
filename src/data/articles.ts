import {
  Apple,
  Brain,
  HeartPulse,
  Moon,
  type LucideIcon,
} from "lucide-react";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  icon: LucideIcon;
};

// Sample articles for demonstration. General information only.
export const articles: Article[] = [
  {
    slug: "building-a-balanced-plate",
    title: "Building a balanced plate for everyday meals",
    excerpt:
      "A simple overview of the main food groups and how they can fit into regular family meals.",
    category: "Nutrition",
    readTime: "5 min read",
    icon: Apple,
  },
  {
    slug: "understanding-everyday-stress",
    title: "Understanding everyday stress and small habits that help",
    excerpt:
      "What stress is, why it affects us differently, and when it can help to talk to a professional.",
    category: "Mental wellbeing",
    readTime: "6 min read",
    icon: Brain,
  },
  {
    slug: "why-routine-check-ups-matter",
    title: "Why routine health check-ups matter",
    excerpt:
      "An introduction to preventive care and the questions worth asking at a regular check-up.",
    category: "Preventive care",
    readTime: "4 min read",
    icon: HeartPulse,
  },
  {
    slug: "sleep-and-daily-rhythm",
    title: "Sleep and daily rhythm: the basics",
    excerpt:
      "A plain-language look at why regular sleep matters and how daily routines can support it.",
    category: "Lifestyle",
    readTime: "5 min read",
    icon: Moon,
  },
];
