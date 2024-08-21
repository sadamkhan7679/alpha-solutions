import React from "react";
import LogoButton from "@/components/logo-button";
import { navLinks } from "@/constants/nav-links";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header className="flex items-center justify-between py-4">
      <LogoButton />
      <nav className="hidden gap-12 lg:flex">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-semibold text-gray-500 hover:text-gray-700"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
