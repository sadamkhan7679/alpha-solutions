import React from "react";

export interface SVGIconProps extends React.SVGProps<SVGSVGElement> {}

export type ServiceItem = {
  key: string;
  title: string;
  summary: string;
  slug: string;
  detailedDescription: string;
  keyBenefits: string[];
  technologies: string[];
  targetAudience: string[];
  Icon?: React.FC<SVGIconProps>;
  image?: string;
  caseStudies: { title: string; link: string }[];
  className?: string;
  // icon: SVGElement;
  additionalData: {
    clientTestimonials: string[];
    serviceTags: string[];
    seoTags: string[];
  };
};
