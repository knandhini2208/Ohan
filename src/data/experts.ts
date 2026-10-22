export type ExpertType = "doctor" | "nutrition" | "therapy";
export type ConsultMode = "Video" | "In-person" | "Phone";

export type Expert = {
  slug: string;
  name: string;
  initials: string;
  type: ExpertType;
  role: string;
  qualifications: string;
  experienceYears: number;
  specialisations: string[];
  languages: string[];
  modes: ConsultMode[];
  city: string;
  bio: string;
  featured?: boolean;
};

export const expertTypeLabels: Record<ExpertType, string> = {
  doctor: "Doctor",
  nutrition: "Nutrition",
  therapy: "Therapy",
};

// All people below are fictional and exist only for demonstration.
export const experts: Expert[] = [
  {
    slug: "asha-raman",
    name: "Dr. Asha Raman",
    initials: "AR",
    type: "doctor",
    role: "General physician",
    qualifications: "MBBS, MD",
    experienceYears: 12,
    specialisations: ["Preventive care", "Lifestyle health", "Routine check-ups"],
    languages: ["English", "Tamil"],
    modes: ["Video", "In-person"],
    city: "Chennai",
    bio: "Focuses on preventive care and helping patients build sustainable healthy routines.",
    featured: true,
  },
  {
    slug: "karthik-subramanian",
    name: "Dr. Karthik Subramanian",
    initials: "KS",
    type: "doctor",
    role: "Paediatrician",
    qualifications: "MBBS, DCH",
    experienceYears: 9,
    specialisations: ["Child health", "Growth and development", "Vaccination guidance"],
    languages: ["English", "Tamil", "Hindi"],
    modes: ["Video", "In-person", "Phone"],
    city: "Madurai",
    bio: "Supports families with child health questions and routine paediatric care.",
  },
  {
    slug: "meera-iyer",
    name: "Meera Iyer",
    initials: "MI",
    type: "nutrition",
    role: "Clinical dietician",
    qualifications: "M.Sc. Clinical Nutrition and Dietetics",
    experienceYears: 8,
    specialisations: ["Balanced eating", "Family nutrition", "Meal planning"],
    languages: ["English", "Tamil", "Malayalam"],
    modes: ["Video", "Phone"],
    city: "Coimbatore",
    bio: "Helps individuals and families build practical, culturally familiar eating habits.",
    featured: true,
  },
  {
    slug: "rohan-pillai",
    name: "Rohan Pillai",
    initials: "RP",
    type: "nutrition",
    role: "Sports nutritionist",
    qualifications: "M.Sc. Sports and Exercise Nutrition",
    experienceYears: 6,
    specialisations: ["Active lifestyles", "Hydration", "Energy and recovery"],
    languages: ["English", "Hindi"],
    modes: ["Video", "In-person"],
    city: "Bengaluru",
    bio: "Works with active people on fuelling their training and everyday routines.",
  },
  {
    slug: "divya-nair",
    name: "Divya Nair",
    initials: "DN",
    type: "therapy",
    role: "Counselling psychologist",
    qualifications: "M.Sc. Counselling Psychology",
    experienceYears: 10,
    specialisations: ["Stress and workload", "Life transitions", "Student wellbeing"],
    languages: ["English", "Malayalam", "Tamil"],
    modes: ["Video", "In-person"],
    city: "Kochi",
    bio: "Offers a calm, supportive space for people dealing with everyday pressures.",
    featured: true,
  },
  {
    slug: "arjun-menon",
    name: "Arjun Menon",
    initials: "AM",
    type: "therapy",
    role: "Counsellor",
    qualifications: "M.A. Counselling",
    experienceYears: 5,
    specialisations: ["Sleep habits", "Relationships", "Building routines"],
    languages: ["English", "Telugu", "Hindi"],
    modes: ["Video", "Phone"],
    city: "Hyderabad",
    bio: "Supports people in talking through challenges and building healthier daily habits.",
  },
];

export const featuredExperts = experts.filter((expert) => expert.featured);