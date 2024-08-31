import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";

type Link = {
  title: string;
  href: string;
};

type BreadCrumbLinksProps = {
  links?: Link[];
};

export const BreadCrumbLinks = ({ links }: BreadCrumbLinksProps) => {
  const updatedLinks = [
    {
      title: "Home",
      href: "/",
    },
    ...(links || []),
  ];

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {updatedLinks?.map((link) => {
          return (
            <Fragment key={link.title}>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={link.href}
                  className="text-bold text-white text-lg underline underline-offset-8 hover:text-white"
                >
                  {link.title}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-bold text-white text-lg" />
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
