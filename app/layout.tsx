import React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import { ThemeProvider } from "@/components/shared/Provider";
import Navbar from "@/components/modules/Navbar";
import { COMPANY_INFO } from "@/constants/company-info";
import { Toaster } from "@/components/ui/toaster";
import { generateMetadata, JsonLdData } from "@/components/shared/Head";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Footer from "@/components/modules/Home/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = generateMetadata({
  title: COMPANY_INFO.Title,
  description: COMPANY_INFO.Description,
  keywords: COMPANY_INFO.Keywords,
  image: COMPANY_INFO.Image,
  type: COMPANY_INFO.Type,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/*<head>*/}
      {/*  <title>{COMPANY_INFO.Title}</title>*/}
      {/*</head>*/}
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main
            // className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip"
            className="relative bg-white dark:bg-black-100 overflow-clip min-h-screen"
          >
            <Navbar />
            <div className="flex flex-col items-center justify-center w-full">
              {children}
            </div>
            <Footer />
          </main>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
        <Toaster />
        <JsonLdData />
        <GoogleTagManager
          gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as string}
        />
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID as string}
        />
      </body>
    </html>
  );
}
