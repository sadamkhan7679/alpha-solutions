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
import Loader from "@/components/shared/Loader";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: COMPANY_INFO.Title,
  description: COMPANY_INFO.Description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
<<<<<<< Updated upstream
      <head>
        <link rel="icon" href={COMPANY_INFO.Favicon} sizes="any" />
      </head>
      <body className={inter.className}>
=======
      {/*<head>*/}
      {/*<link rel="icon" href={COMPANY_INFO.Favicon} sizes="any" />*/}
      <HeadComponent />
      {/*</head>*/}
      <body className={poppins.className}>
>>>>>>> Stashed changes
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
          </main>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
