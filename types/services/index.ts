import React from "react";
import { SVGIconProps } from "@/types/root";

export type Industry = {
  title: string;
  slug: string;
  description: string;
  Icon: React.FC<SVGIconProps>;
};

export type ServiceItem = {
  id?: string;
  key: string;
  title: string;
  headline: string;
  summary: string;
  image: string;
  slug: string;
  detailedDescription: string;
  keyBenefits: string[];
  technologies: string[];
  targetAudience: string[];
  Icon?: string;
  caseStudies: { title: string; link: string }[];
  additionalData: {
    clientTestimonials: string[];
    serviceTags: string[];
    seoTags: string[];
  };
};
