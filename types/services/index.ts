import React from "react";

export interface SVGIconProps extends React.SVGProps<SVGSVGElement> {}


export type ServiceItem = {
  id: string;
  title: string;
  summary: string;
  slug: string;
  detailedDescription: string;
  keyBenefits: string[];
  technologies: string[];
  targetAudience: string[];
  Icon: React.FC<SVGIconProps>;
  caseStudies: { title: string; link: string }[];
  // icon: SVGElement;
  additionalData: {
    clientTestimonials: string[];
    serviceTags: string[];
    seoTags: string[];
  };
};
