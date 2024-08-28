import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import { ThemeProvider } from "@/components/shared/Provider";
import Navbar from "@/components/modules/Navbar";
import { COMPANY_INFO } from "@/constants/company-info";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Razmisoft | Tailored Technology to Drive Your Success",
  description: "Tailored Technology to Drive Your Success",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href={COMPANY_INFO.Favicon} sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main
            // className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip"
            className="relative bg-body overflow-clip min-h-screen"
          >
            <Navbar />
            <div className="flex flex-col items-center justify-center w-full pt-20">
              {children}
            </div>
          </main>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
