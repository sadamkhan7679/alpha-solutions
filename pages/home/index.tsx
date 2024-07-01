import React, { Fragment } from "react";
import HeroSection from "@/modules/home/hero";
import ServicesList from "@/modules/home/services";
import Container from "@/components/ui/container";

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Fragment>
      <HeroSection />
      <Container>
        <ServicesList />
      </Container>
    </Fragment>
  );
};

export default HomePage;
