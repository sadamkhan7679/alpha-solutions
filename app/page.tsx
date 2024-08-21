"use client";

import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Hero from "@/components/modules/Hero";
import RecentProjects from "@/components/modules/RecentProjects";
import Grid from "@/components/ui/Grid";
import Clients from "@/components/modules/ClientFeedbacks";
import Experience from "@/components/modules/WorkExperience";
import Process from "@/components/modules/Process";
import Footer from "@/components/modules/Footer";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
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

export default Home;
