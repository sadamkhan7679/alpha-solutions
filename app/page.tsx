import Hero from "@/components/modules/Hero";
import Footer from "@/components/modules/Footer";
import ServicesList from "@/components/modules/ServicesList";
import TeamList from "@/components/modules/Team";
import TechStack from "@/components/modules/TechStack";
import ClientsTestimonials from "@/components/modules/ClientFeedbacks";
import KeyHighlights from "@/components/modules/KeyHighlights";
import DevelopmentApproach from "@/components/modules/DevelopmentApproach";
import Industries from "@/components/modules/Industries";
import Projects from "@/components/modules/Projects";

const PageSections = [
  {
    id: "home",
    Component: Hero,
  },
  {
    id: "services",
    Component: ServicesList,
  },
  {
    id: "tech-stack",
    Component: TechStack,
  },
  // {
  //   id: "experience-timeline",
  //   Component: ExperienceTimeline,
  // },
  {
    id: "approach",
    Component: DevelopmentApproach,
  },
  {
    id: "industries",
    Component: Industries,
  },
  {
    id: "projects",
    Component: Projects,
  },
  {
    id: "team",
    Component: TeamList,
  },
  {
    id: "clients-testimonials",
    Component: ClientsTestimonials,
  },
  {
    id: "key-highlights",
    Component: KeyHighlights,
  },
  // {
  //   id: "contact",
  //   Component: () => <h1>CONTACT US</h1>,
  // },
  {
    id: "footer",
    Component: Footer,
  },
];

const Home = () => {
  return (
    <div
      // className="max-w-7xl w-full"
      className="w-full"
    >
      {PageSections.map(({ id, Component }) => (
        <div key={id} id={id}>
          <Component />
        </div>
      ))}

      {/*<Hero />*/}
      {/*<ServicesList />*/}
      {/*<TechStack />*/}
      {/*/!*<ExperienceTimeline />*!/*/}
      {/*<DevelopmentApproach />*/}
      {/*/!*<Industries />*!/*/}
      {/*/!*<Approach />*!/*/}
      {/*<Projects />*/}
      {/*<TeamList />*/}
      {/*<ClientsTestimonials />*/}
      {/*<KeyHighlights />*/}
      {/*/!*<h1>CONTACT US</h1>*!/*/}
      {/*/!*<h1>FOOTER</h1>*!/*/}

      {/*/!*<FloatingNav navItems={navItems} />*!/*/}
      {/*/!*<Hero />*!/*/}
      {/*/!*<ServicesList />*!/*/}
      {/*/!*<TeamList />*!/*/}
      {/*/!*<Grid />*!/*/}
      {/*/!*<RecentProjects />*!/*/}
      {/*/!*<Clients />*!/*/}
      {/*/!*<Experience />*!/*/}
      {/*/!*<Process />*!/*/}
      {/*/!*<Footer />*!/*/}
    </div>
  );
};

export default Home;
