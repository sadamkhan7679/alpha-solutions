import SectionContainer, {
  SectionContainerProps,
} from "@/components/shared/SectionContainer";
import { Fragment, ReactNode } from "react";
import { Typography } from "@/components/shared/Typography";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BreadCrumbLinks } from "@/components/modules/Layouts/BreadCrumbLinks";

type Link = {
  title: string;
  href: string;
};

type PagesContainerProps = {
  children: ReactNode;
  heading?: string;
  sectionTitle?: ReactNode;
  description?: ReactNode;
  links?: Link[];
};

export const PagesContainer = ({
  children,
  heading,
  sectionTitle,
  description,
  links,
}: PagesContainerProps) => {
  return (
    <div className="relative mt-20 w-full">
      <div
        className="mx-auto app-container min-h-[50vh] w-full flex flex-col items-start justify-center"
        style={{
          backgroundImage: `url('/images/banners/services-banner.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <BreadCrumbLinks links={links} />
        <Typography variant="h1" className="text-center text-white">
          {heading}
        </Typography>
      </div>
      <SectionContainer sectionTitle={sectionTitle} description={description}>
        {children}
      </SectionContainer>
    </div>
  );
};

export default PagesContainer;
