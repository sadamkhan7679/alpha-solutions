import type { MetadataRoute } from "next";
import { COMPANY_INFO } from "@/constants/company-info";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: COMPANY_INFO.Name,
    short_name: COMPANY_INFO.ShortName,
    description: COMPANY_INFO.Description,
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
