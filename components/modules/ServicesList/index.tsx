"use client";

import { ServiceCard } from "@/components/modules/ServicesList/ServicesCard";
import SectionContainer from "@/components/shared/SectionContainer";
import { SERVICES_LIST } from "@/data/services";
import { Fragment } from "react";
import { SERVICES_META } from "@/data/pages-meta";

const ServicesList = () => {
  return (
    <SectionContainer
      sectionTitle={SERVICES_META.sectionTitle}
      description={SERVICES_META.description}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
        {SERVICES_LIST.map((service) => {
          return (
            <Fragment key={service.slug}>
              <ServiceCard service={service} />
            </Fragment>
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default ServicesList;
