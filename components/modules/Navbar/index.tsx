"use client";
import { cn } from "@/lib/utils";

import React, { useState, useEffect } from "react";
import { NavLink, navLinks } from "@/constants/nav-links";
import { CTA } from "@/components/shared/CTA";
import LogoButton from "@/components/shared/logo-button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<NavLink | null>(null);

  const pathname = usePathname();

  console.log(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const handleLinkClick = (link: NavLink) => {
  //   setActiveLink(link);
  //   setIsMenuOpen(false);
  //   const element = document.getElementById(link.href.toLowerCase());
  //   element && element.scrollIntoView({ behavior: "smooth" });
  // };

  const handleLinkClick = (link: NavLink) => {
    setActiveLink(link);
    setIsMenuOpen(false);
    const element = document.getElementById(link.label.toLowerCase());
    if (element) {
      const navbarElement = document.getElementById("navbar");

      if (!navbarElement) {
        return;
      }

      const navbarHeight = navbarElement?.offsetHeight;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const getNavLink = (link: NavLink) => {
    if (pathname === "/") {
      return `#${link.href}`;
    }

    return `${link.href}`;
  };

  return (
    <nav
      // className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-dark shadow-md" : "bg-transparent"}`}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ",
        // isScrolled
        //   ? "shadow-md bg-black border border-transparent dark:border-white/[0.2]"
        //   : "bg-transparent",
      )}
      id="navbar"
    >
      <div
        // className="app-container mx-auto px-4"
        className={cn(
          "mx-auto px-4 app-container",
          isScrolled
            ? "shadow-md bg-primary border-b border-transparent dark:border-white/[0.2]"
            : "bg-transparent",
        )}
      >
        <div className="flex justify-between items-center py-2">
          <div className="text-2xl font-bold">
            <LogoButton
              className={isScrolled ? "text-white" : "text-primary"}
            />
          </div>
          <ul className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link href={getNavLink(link)} key={link.label}>
                <li
                  className={cn(
                    "text-lg font-semibold transition-colors",
                    isScrolled ? "text-white" : "text-primary",
                    activeLink === link &&
                      isScrolled &&
                      "text-white bg-secondary px-4 py-2 rounded-xl",
                  )}
                >
                  {link.label}
                </li>
              </Link>
            ))}
            <CTA />
          </ul>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary-dark">
            {navLinks.map((link) => (
              <Link href={getNavLink(link)} key={link.label}>
                <li
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium hover:text-blue-500 hover:bg-gray-50 transition-colors",
                    activeLink === link
                      ? "text-white bg-secondary"
                      : "text-secondary",
                  )}
                >
                  {link.label}
                </li>
              </Link>
            ))}
            <CTA className="hidden" />
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
