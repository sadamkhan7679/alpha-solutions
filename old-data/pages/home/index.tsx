"use client";
import React from "react";
import HeroSection from "@/modules/home/Hero";
import { navItems } from "@/data";
import Grid from "@/components/ui/Grid";
import RecentProjects from "@/modules/home/RecentProjects";
import Clients from "@/modules/home/ClientFeedbacks";
import Experience from "@/modules/home/WorkExperience";
import Process from "@/modules/home/Process";
import Footer from "@/modules/home/Footer";
import {FloatingNav} from "@/components/ui/FloatingNavbar";

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <HeroSection />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Process />
        <Footer />
      </div>
    </main>
  );
};

export default HomePage;
