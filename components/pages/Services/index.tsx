import { Fragment } from "react";
import SectionContainer from "@/components/shared/SectionContainer";
import { SERVICES_LIST } from "@/data/services";
import { SERVICES_META } from "@/data/pages-meta";
import ServiceItemCard from "@/components/pages/Services/ServiceItem";

const ServicesPage = () => {
  return (
    <Fragment>
      <SectionContainer
        sectionTitle={SERVICES_META.sectionTitle}
        description={SERVICES_META.description}
      >
        <div className="grid grid-cols-1 py-10">
          {SERVICES_LIST.map((service) => {
            return (
              <Fragment key={service.slug}>
                <ServiceItemCard service={service} />
              </Fragment>
            );
          })}
        </div>
      </SectionContainer>
    </Fragment>
  );
};

export default ServicesPage;
