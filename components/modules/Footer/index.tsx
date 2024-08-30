import MagicButton from "@/components/ui/MagicButton";
import Image from "next/image";
import { COMPANY_INFO } from "@/constants/company-info";
import { DirectionIcon } from "@/icons/common/directionIcon";
import { CompanyLogo } from "@/icons/logo/full-logo";
import React from "react";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

type QuickLink = {
  title: string;
  href: string;
};

const industriesQuickLinks = [
  {
    title: "Healthcare",
    href: "#healthcare",
  },
  {
    title: "E-commerce",
    href: "#e-commerce",
  },
  {
    title: "Finance",
    href: "#finance",
  },
  {
    title: "Education",
    href: "#education",
  },
  {
    title: "Real Estate",
    href: "#real-estate",
  },
  {
    title: "Travel",
    href: "#travel",
  },
];

const servicesQuickLinks = [
  {
    title: "Web Development",
    href: "#web-development",
  },
  {
    title: "Mobile Development",
    href: "#mobile-development",
  },
  {
    title: "UI/UX Design",
    href: "#ui-ux-design",
  },
  {
    title: "Digital Marketing",
    href: "#digital-marketing",
  },
  {
    title: "SEO",
    href: "#seo",
  },
  {
    title: "Content Writing",
    href: "#content-writing",
  },
];

const companyQuickLinks = [
  {
    title: "About Us",
    href: "#about",
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "Industries",
    href: "#industries",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Team",
    href: "#team",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const FooterLinks = ({
  title,
  links,
}: {
  title: string;
  links: QuickLink[];
}) => {
  return (
    <div>
      <h2 className="text-white text-lg font-semibold">{title}</h2>
      <ul className="mt-5">
        {links.map((link) => (
          <li key={link.title}>
            <a href={link.href} className="text-white-200">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 app-container" id="contact">
      {/* background grid */}
      {/*<div className="w-full absolute left-0 -bottom-72 min-h-96">*/}
      {/*  <img*/}
      {/*    src="/footer-grid.svg"*/}
      {/*    alt="grid"*/}
      {/*    className="w-full h-full opacity-50 "*/}
      {/*  />*/}
      {/*</div>*/}

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href={`mailto:${COMPANY_INFO.Email}`}>
          <MagicButton
            title="Let's get in touch"
            icon={<DirectionIcon width={24} height={24} />}
            position="right"
          />
        </a>
      </div>
      <div className="w-full grid grid-cols-3 lg:grid-cols-4 place-items-end border-y-2 border-white py-10 mt-10">
        <div className="h-full flex flex-col items-start content-between">
          <CompanyLogo className="cursor-pointer highlighted-text" />
          <p className="text-white text-lg font-semibold mt-10">
            A digital agency that loves crafting beautiful websites and
            applications.
          </p>

          <p className="text-md text-white-200">
            Address: 1234 Street Name, City Name, United States
          </p>
        </div>
        <div>
          <FooterLinks title="Industries" links={industriesQuickLinks} />
        </div>
        <div>
          <FooterLinks title="Services" links={servicesQuickLinks} />
        </div>
        <div>
          <FooterLinks title="Company" links={companyQuickLinks} />
        </div>
      </div>
      <div className="flex justify-between items-center py-5">
        <div className="text-white-200 text-md">
          Copyright
          <span>
            {getCurrentYear()} &copy; {COMPANY_INFO.Name} | All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
