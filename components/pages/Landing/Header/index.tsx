import Link from "next/link";
import { Zap } from "lucide-react";

const navLinks = [
  { title: "Services", href: "#services" },
  { title: "Portfolio", href: "#portfolio" },
  { title: "Industries", href: "#industries" },
  { title: "Our Approach", href: "#approach" },
  { title: "Contact", href: "#contact" },
];

export const Header = () => {
  return (
    <header className="px-4 lg:px-6 z-50 h-20 flex items-center bg-[#000] text-white  border-b-2 border-orange-500">
      <Link className="flex items-center justify-center" href="#">
        <Zap className="h-6 w-6 text-orange-500" />
        <span className="ml-2 text-lg font-bold">Alpha Solutions</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {navLinks.map(({ title, href }) => (
          <Link key={title} href={href}>
            <li className="text-lg hover:text-orange-500">{title}</li>
          </Link>
        ))}
      </nav>
    </header>
  );
};
