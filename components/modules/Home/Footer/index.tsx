"use client";

import MagicButton from "@/components/ui/MagicButton";
import Image from "next/image";
import { COMPANY_INFO } from "@/constants/company-info";
import { DirectionIcon } from "@/icons/common/directionIcon";
import { CompanyLogo } from "@/icons/logo/full-logo";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/shared/Typography";
import { CTA } from "@/components/shared/CTA";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

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
              <a
                href={`mailto:${COMPANY_INFO.Email}`}
                className="w-full lg:w-auto"
              >
                <CTA title="Let's get in touch" className="w-full lg:w-auto" />
              </a>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-2 py-10 lg:py-0">
            <form>
              <Card className="lg:rounded-none bg-navyBlue border-0 shadow-none">
                <CardHeader>
                  <Typography variant="h4" className="text-white">
                    Leave a Message
                  </Typography>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      Name
                    </Label>
                    <Input id="name" placeholder="Enter your name" />
                    <Label htmlFor="email" className="text-white">
                      Email
                    </Label>
                    <Input
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                    />
                    <Label htmlFor="message" className="text-white">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Enter your message"
                      className="min-h-[100px]"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary">Send message</Button>
                </CardFooter>
              </Card>
            </form>
          </div>
        </div>
      </div>

      <div
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-start md:place-items-center lg:place-items-end py-10 app-container"
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
            Address: 1234 Street Name, City Name, United States
          </Typography>
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
      <div className="flex justify-center lg:justify-between items-center py-5 bg-primary-dark">
        <div className="text-white text-md">
          Copyright
          <span>
            {getCurrentYear()} &copy; {COMPANY_INFO.Name} | All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );

  // return (
  //   <footer className="w-full pt-20 pb-10 app-container" id="contact">
  //     {/* background grid */}
  //     {/*<div className="w-full absolute left-0 -bottom-72 min-h-96">*/}
  //     {/*  <img*/}
  //     {/*    src="/footer-grid.svg"*/}
  //     {/*    alt="grid"*/}
  //     {/*    className="w-full h-full opacity-50 "*/}
  //     {/*  />*/}
  //     {/*</div>*/}
  //
  //     <div className="flex flex-col items-center">
  //       <h1 className="heading lg:max-w-[45vw]">
  //         Ready to take <span className="text-purple">your</span> digital
  //         presence to the next level?
  //       </h1>
  //       <p className="text-white-200 md:mt-10 my-5 text-center">
  //         Reach out to me today and let&apos;s discuss how I can help you
  //         achieve your goals.
  //       </p>
  //       <a href={`mailto:${COMPANY_INFO.Email}`}>
  //         <MagicButton
  //           title="Let's get in touch"
  //           icon={<DirectionIcon width={24} height={24} />}
  //           position="right"
  //         />
  //       </a>
  //     </div>
  //     <div className="w-full grid grid-cols-3 lg:grid-cols-4 place-items-end border-y-2 border-white py-10 mt-10">
  //       <div className="h-full flex flex-col items-start content-between">
  //         <CompanyLogo className="cursor-pointer highlighted-text" />
  //         <p className="text-white text-lg font-semibold mt-10">
  //           A digital agency that loves crafting beautiful websites and
  //           applications.
  //         </p>
  //
  //         <p className="text-md text-white-200">
  //           Address: 1234 Street Name, City Name, United States
  //         </p>
  //       </div>
  //       <div>
  //         <FooterLinks title="Industries" links={industriesQuickLinks} />
  //       </div>
  //       <div>
  //         <FooterLinks title="Services" links={servicesQuickLinks} />
  //       </div>
  //       <div>
  //         <FooterLinks title="Company" links={companyQuickLinks} />
  //       </div>
  //     </div>
  //     <div className="flex justify-between items-center py-5">
  //       <div className="text-white-200 text-md">
  //         Copyright
  //         <span>
  //           {getCurrentYear()} &copy; {COMPANY_INFO.Name} | All Rights Reserved
  //         </span>
  //       </div>
  //     </div>
  //   </footer>
  // );
};

export default Footer;
