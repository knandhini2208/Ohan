import {
  Apple,
  BookOpen,
  Brain,
  Building2,
  ShieldCheck,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "doctors",
    title: "Doctors and specialists",
    description:
      "Browse general physicians and specialists, compare their experience and request an appointment.",
    href: "/experts?type=doctor",
    cta: "Find doctors",
    icon: Stethoscope,
  },
  {
    slug: "nutrition",
    title: "Nutrition and diet consultation",
    description:
      "Connect with nutritionists and dieticians for everyday eating habits and long-term wellbeing.",
    href: "/experts?type=nutrition",
    cta: "Find nutritionists",
    icon: Apple,
  },
  {
    slug: "therapy",
    title: "Therapy and counselling",
    description:
      "Explore therapists and counsellors who offer a supportive space to talk, online or in person.",
    href: "/experts?type=therapy",
    cta: "Find therapists",
    icon: Brain,
  },
  {
    slug: "facilities",
    title: "Hospitals, labs and wellness centres",
    description:
      "Discover hospitals, laboratories, rehabilitation and wellness centres and the services they list.",
    href: "/facilities",
    cta: "Browse facilities",
    icon: Building2,
  },
  {
    slug: "education",
    title: "Health education",
    description:
      "Read clear, general-interest articles on nutrition, mental wellbeing and healthy routines.",
    href: "/education",
    cta: "Read articles",
    icon: BookOpen,
  },
  {
    slug: "insurance",
    title: "Insurance guidance",
    description:
      "Learn the basics of health insurance and send an enquiry. OHAN does not sell insurance or process claims.",
    href: "/insurance",
    cta: "Learn more",
    icon: ShieldCheck,
  },
];