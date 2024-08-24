"use client";

import { ServiceCard } from "@/components/modules/ServicesList/ServicesCard";
import SectionContainer from "@/components/shared/SectionContainer";
import { SERVICES_LIST } from "@/data/services";
import { Fragment } from "react";

const ServicesList = () => {
  return (
    <SectionContainer
      sectionTitle="Cutting-Edge Solutions for Every Digital Need"
      description="At the intersection of innovation and expertise, we offer a comprehensive suite of digital services tailored to elevate your business. From intuitive mobile apps to robust web platforms, our team crafts bespoke solutions that drive growth, enhance user engagement, and solidify your digital presence. Whether you're a startup looking to disrupt or an enterprise aiming to evolve, our services are designed to turn your vision into a powerful digital reality."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-10">
        {SERVICES_LIST.map((service) => {
          return (
            <Fragment key={service.id}>
              <ServiceCard service={service} />
            </Fragment>
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default ServicesList;
