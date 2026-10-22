export type NavItem = {
  label: string;
  href: string;
};

export type NavGroup = {
  title: string;
  links: NavItem[];
};

export const mainNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Experts", href: "/experts" },
  { label: "Facilities", href: "/facilities" },
  { label: "Health Education", href: "/education" },
  { label: "Insurance", href: "/insurance" },
  { label: "About", href: "/about" },
];

export const footerGroups: NavGroup[] = [
  {
    title: "Explore",
    links: [
      { label: "Services", href: "/services" },
      { label: "Find an expert", href: "/experts" },
      { label: "Facilities", href: "/facilities" },
      { label: "Health education", href: "/education" },
      { label: "Insurance guidance", href: "/insurance" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About OHAN", href: "/about" },
      { label: "Contact us", href: "/contact" },
      { label: "Join as a provider", href: "/provider/register" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of use", href: "/terms" },
      { label: "Health disclaimer", href: "/disclaimer" },
    ],
  },
];