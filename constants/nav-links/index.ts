// export const navLinks: NavLink[] = [
//   {
//     label: "Home",
//     href: "/",
//   },
//   {
//     label: "About",
//     href: "/about",
//   },
//   {
//     label: "Services",
//     href: "/services",
//     children: [
//       {
//         label: "Service 1",
//         href: "/services/service-1",
//       },
//       {
//         label: "Service 2",
//         href: "/services/service-2",
//       },
//       {
//         label: "Service 3",
//         href: "/services/service-3",
//       },
//       {
//         label: "Service 4",
//         href: "/services/service-4",
//       },
//     ],
//   },
//   {
//     label: "Contact",
//     href: "/contact",
//   },
// ];

import { Sections } from "@/types/nav-link";

export type NavLink = {
  label: string;
  href: string;
  children?: NavLink[];
};

// Home = "Home",
//     Services = "Services",
//     TechStack = "Tech Stack",
//     Approach = "Approach",
//     Industries = "Industries",
//     Projects = "Projects",
//     Team = "Team",
//     ClientsTestimonials = "Clients Testimonials",
//     KeyHighlights = "Key Highlights",
//     Footer = "Footer",

export const navLinks: NavLink[] = [
  // {
  //   label: Sections.Home,
  //   href: "/",
  // },
  {
    label: Sections.Services,
    href: "/services",
  },
  // {
  //   label: Sections.TechStack,
  //   href: "/tech-stack",
  // },
  {
    label: Sections.Approach,
    href: "/approach",
  },
  // {
  //   label: Sections.Industries,
  //   href: "/industries",
  // },
  {
    label: Sections.Projects,
    href: "/projects",
  },
  {
    label: Sections.Team,
    href: "/team",
  },
  // {
  //   label: Sections.ClientsTestimonials,
  //   href: "/clients-testimonials",
  // },
  // {
  //   label: Sections.KeyHighlights,
  //   href: "/key-highlights",
  // },
  // {
  //   label: Sections.Footer,
  //   href: "/footer",
  // },
];
