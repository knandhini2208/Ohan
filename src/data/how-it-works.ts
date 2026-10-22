import {
  CalendarCheck,
  HeartPulse,
  ListChecks,
  Search,
  type LucideIcon,
} from "lucide-react";

export type Step = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const steps: Step[] = [
  {
    title: "Search",
    description:
      "Look for a doctor, nutritionist, therapist or facility by name, specialisation or topic.",
    icon: Search,
  },
  {
    title: "Compare",
    description:
      "Review qualifications, languages, locations and consultation modes side by side.",
    icon: ListChecks,
  },
  {
    title: "Request an appointment",
    description:
      "Choose a preferred time and send a request to the professional or facility you picked.",
    icon: CalendarCheck,
  },
  {
    title: "Consult and follow up",
    description:
      "Meet online or in person, and keep learning with simple, reliable health education.",
    icon: HeartPulse,
  },
];