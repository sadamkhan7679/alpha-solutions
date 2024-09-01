import Head from "next/head";
import React from "react";
import { COMPANY_INFO, jsonLdData } from "@/constants/company-info";

type HeadProps = {
  title?: string;
  description?: string;
  keywords?: string[];
};

export const HeadComponent: React.FC<HeadProps> = ({
  title = COMPANY_INFO.Title,
  description = COMPANY_INFO.Description,
  keywords,
}) => {
  const allKeywords = [...COMPANY_INFO.Keywords, ...(keywords || [])];

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords?.join(", ")} />
      <meta name="author" content={COMPANY_INFO.Author} />
      <meta name="robots" content={COMPANY_INFO.Robots} />
      <meta name="theme-color" content={COMPANY_INFO.ThemeColor} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={COMPANY_INFO.Favicon} />
      <link rel="apple-touch-icon" href={COMPANY_INFO.Favicon} />
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href={COMPANY_INFO.Favicon} sizes="any" />
      <meta property="og:type" content={COMPANY_INFO.Type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={COMPANY_INFO.Image} />
      <meta property="og:url" content={COMPANY_INFO.URL} />
      <meta property="og:site_name" content={COMPANY_INFO.SiteName} />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={COMPANY_INFO.Twitter} />
      <meta name="twitter:creator" content={COMPANY_INFO.Twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={COMPANY_INFO.Image} />
      <link rel="canonical" href="https://www.yourcompany.com/" />
    </Head>
  );
};

export const JsonLdData = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
};
