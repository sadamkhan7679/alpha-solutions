import { NavLink } from "@/types/nav-link";

export const navLinks: NavLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Service 1",
        href: "/services/service-1",
      },
      {
        label: "Service 2",
        href: "/services/service-2",
      },
      {
        label: "Service 3",
        href: "/services/service-3",
      },
      {
        label: "Service 4",
        href: "/services/service-4",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
