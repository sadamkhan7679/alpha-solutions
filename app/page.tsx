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
import ServicesList from "@/components/modules/ServicesList";
import TeamList from "@/components/modules/Team";
import TechStack from "@/components/modules/TechStack";
import ClientsTestimonials from "@/components/modules/ClientFeedbacks";
import KeyHighlights from "@/components/modules/KeyHighlights";
import Approach from "@/components/modules/Approach";

const Home = () => {
  return (
    <main
      // className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip"
      className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip"
    >
      <div
        // className="max-w-7xl w-full"
        className="w-full"
      >
        <Hero />
        <ServicesList />
        <TechStack />
        <h1>INDUSTRIES</h1>
        <Approach />
        <h1>RECENT PROJECTS</h1>
        <TeamList />
        <ClientsTestimonials />
        <KeyHighlights />
        <h1>CONTACT US</h1>
        <h1>FOOTER</h1>

        {/*<FloatingNav navItems={navItems} />*/}
        {/*<Hero />*/}
        {/*<ServicesList />*/}
        {/*<TeamList />*/}
        {/*<Grid />*/}
        {/*<RecentProjects />*/}
        {/*<Clients />*/}
        {/*<Experience />*/}
        {/*<Process />*/}
        {/*<Footer />*/}
      </div>
    </main>
  );
};

export default Home;
