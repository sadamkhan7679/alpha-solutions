// export type NavLink = {
//   label: string;
//   href: string;
//   children?: NavLink[];
// };

export enum Sections {
  Home = "Home",
  Services = "Services",
  TechStack = "Tech Stack",
  Approach = "Approach",
  Industries = "Industries",
  Projects = "Projects",
  Team = "Team",
  ClientsTestimonials = "Clients Testimonials",
  KeyHighlights = "Key Highlights",
  Footer = "Footer",
}

export type NavLink = {
  label: string;
  href: string;
  children?: NavLink[];
};
