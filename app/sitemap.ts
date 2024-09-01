import type { MetadataRoute } from "next";
import { SERVICES_LIST } from "@/data/services";
import { projectsList } from "@/data/Projects";
import { industriesList } from "@/constants/industries";

const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

type SiteMapRoute = {
  url: string;
  lastModified: Date;
  changeFrequency: "monthly" | "yearly";
  priority: number;
};

const servicesRoutes: SiteMapRoute[] = SERVICES_LIST.map((service) => {
  return {
    url: `${BaseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  };
});

const caseStudiesRoutes: SiteMapRoute[] = projectsList.map((project) => {
  return {
    url: `${BaseUrl}/case-studies/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  };
});

const industriesRoutes: SiteMapRoute[] = industriesList.map((industry) => {
  return {
    url: `${BaseUrl}/industries/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  };
});

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes: SiteMapRoute[] = [
    {
      url: BaseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${BaseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BaseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BaseUrl}/industries`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BaseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BaseUrl}/team`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BaseUrl}/approach`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${BaseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BaseUrl}/not-found`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  return [...baseRoutes, ...servicesRoutes, ...caseStudiesRoutes];
}
