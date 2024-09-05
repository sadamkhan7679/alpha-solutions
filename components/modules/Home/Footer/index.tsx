"use client";
import { COMPANY_INFO } from "@/constants/company-info";
import { CompanyLogo } from "@/icons/logo/full-logo";
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Typography } from "@/components/shared/Typography";
import { CTA } from "@/components/shared/CTA";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/modules/Contact/ContactForm";
import { industriesList } from "@/constants/industries";
import { SERVICES_LIST } from "@/data/services";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

type QuickLink = {
  title: string;
  href: string;
};

const industriesQuickLinks = industriesList.map((industry) => ({
  title: industry.title,
  href: `/industries/${industry.slug}`,
}));

const servicesQuickLinks = SERVICES_LIST.map((service) => ({
  title: service.title,
  href: `/services/${service.slug}`,
}));

const companyQuickLinks = [
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Industries",
    href: "/industries",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Team",
    href: "/team",
  },
  {
    title: "Contact",
    href: "/contact",
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
      <h2 className="text-white mt-5 md:mt-0 text-lg font-semibold">{title}</h2>
      <ul className="mt-5">
        {links.map((link) => (
          <motion.li
            key={link.title}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            <a
              href={link.href}
              className="text-white font-semibold flex items-center"
            >
              {link.title} <ChevronRight className="ml-2" />
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="w-full pt-20" id="contact">
      <div>
        <div className="app-container hidden lg:grid grid-cols-6 gap-10">
          <div className="col-span-4"></div>
          <div className="bg-secondary h-20 col-span-2 rounded-tr-4xl"></div>
        </div>
        <div className="w-full bg-primary-light app-container grid grid-cols-6 gap-10 py-10 lg:py-0">
          <div className="col-span-6 lg:col-span-4">
            <div className="flex flex-col items-center lg:items-start justify-evenly h-full">
              <Typography
                variant="h2"
                className="w-full lg:max-w-3/4 text-white text-center lg:text-left"
              >
                Ready to take{" "}
                <span className="text-black">your digital presence</span> to the
                next level?
              </Typography>
              <p className="text-white text-lg text-center py-8 lg:py-0">
                Reach out to us today and let&apos;s discuss how we can help you
                achieve your goals.
              </p>
              {/*<a*/}
              {/*  href={`mailto:${COMPANY_INFO.Email}`}*/}
              {/*  className="w-full lg:w-auto"*/}
              {/*>*/}
              <CTA title="Let's get in touch" className="w-full lg:w-auto" />
              {/*</a>*/}
            </div>
          </div>
          <div className="col-span-6 lg:col-span-2 py-10 lg:py-0">
            <Card className="lg:rounded-none bg-navyBlue border-0 shadow-none">
              <CardHeader>
                <Typography variant="h4" className="text-white">
                  Leave a Message
                </Typography>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-start md:place-items-center lg:place-items-start place-content-center py-10 app-container"
        style={{
          background: "url('/images/banners/footer-bg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="h-full flex flex-col items-start content-between">
          <CompanyLogo className="cursor-pointer text-white" />
          <Typography variant="h6" className="text-white mt-10">
            A digital agency that loves crafting beautiful websites and
            applications.
          </Typography>

          <Typography variant="p" className="text-md text-white">
            Address: {COMPANY_INFO.Address}
          </Typography>
          <Typography variant="p" className="text-md text-white">
            Phone: {COMPANY_INFO.Phone}
          </Typography>
        </div>
        <div className="w-full flex justify-end">
          <FooterLinks title="Industries" links={industriesQuickLinks} />
        </div>
        <div className="w-full flex justify-end">
          <FooterLinks title="Services" links={servicesQuickLinks} />
        </div>
        <div className="w-full flex justify-end">
          <FooterLinks title="Company" links={companyQuickLinks} />
        </div>
      </div>
      <div className="flex justify-center lg:justify-between items-center py-5 app-container bg-primary-dark">
        <div className="text-white text-md">
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
