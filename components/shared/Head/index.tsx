import React from "react";
import { COMPANY_INFO, jsonLdData } from "@/constants/company-info";
import type { Metadata } from "next";

// type HeadProps = {
//   title?: string;
//   description?: string;
//   keywords?: string[];
// };

// export const HeadComponent: React.FC<HeadProps> = ({
//   title = COMPANY_INFO.Title,
//   description = COMPANY_INFO.Description,
//   keywords,
// }) => {
//   const allKeywords = [...COMPANY_INFO.Keywords, ...(keywords || [])];
//
//   return (
//     <Head>
//       <title>{title}</title>
//       <meta name="description" content={description} />
//       <meta name="keywords" content={allKeywords?.join(", ")} />
//       <meta name="author" content={COMPANY_INFO.Author} />
//       <meta name="robots" content={COMPANY_INFO.Robots} />
//       <meta name="theme-color" content={COMPANY_INFO.ThemeColor} />
//       <meta name="viewport" content="width=device-width, initial-scale=1" />
//       <link rel="icon" href={COMPANY_INFO.Favicon} />
//       <link rel="apple-touch-icon" href={COMPANY_INFO.Favicon} />
//       <link rel="manifest" href="/manifest.json" />
//       <link rel="icon" href={COMPANY_INFO.Favicon} sizes="any" />
//       <meta property="og:type" content={COMPANY_INFO.Type} />
//       <meta property="og:title" content={title} />
//       <meta property="og:description" content={description} />
//       <meta property="og:image" content={COMPANY_INFO.Image} />
//       <meta property="og:url" content={COMPANY_INFO.URL} />
//       <meta property="og:site_name" content={COMPANY_INFO.SiteName} />
//       <meta property="og:locale" content="en_US" />
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:site" content={COMPANY_INFO.Twitter} />
//       <meta name="twitter:creator" content={COMPANY_INFO.Twitter} />
//       <meta name="twitter:title" content={title} />
//       <meta name="twitter:description" content={description} />
//       <meta name="twitter:image" content={COMPANY_INFO.Image} />
//       <link rel="canonical" href="https://www.yourcompany.com/" />
//     </Head>
//   );
// };

export function generateMetadata({
  title = COMPANY_INFO.Title,
  description = COMPANY_INFO.Description,
  keywords = COMPANY_INFO.Keywords,
  image = "/og-image.jpg",
  type = COMPANY_INFO.Type,
}: {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  type?: string;
}): Metadata {
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
    title,
    description,
    keywords: keywords?.join(", "),
    authors: [{ name: COMPANY_INFO.Author }],
    icons: [
      { rel: "icon", url: COMPANY_INFO.Favicon },
      { rel: "apple-touch-icon", url: COMPANY_INFO.Favicon },
    ],
    manifest: "/manifest.json",
    openGraph: {
      title,
      description,
      siteName: COMPANY_INFO.Name,
      url: COMPANY_INFO.URL,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      site: COMPANY_INFO.Twitter,
      creator: COMPANY_INFO.Twitter,
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: COMPANY_INFO.URL,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export const JsonLdData = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
};
