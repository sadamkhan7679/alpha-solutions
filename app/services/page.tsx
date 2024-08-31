import ServicesPage from "@/components/pages/Services";
import PagesContainer from "@/components/modules/Layouts/PagesContainer";
import { SERVICES_LIST } from "@/data/services";
import { Fragment } from "react";
import ServiceItemCard from "@/components/pages/Services/ServiceItem";
import { SERVICES_META } from "@/data/pages-meta";

export default function Page() {
  return (
    <PagesContainer
      heading="Our Services"
      sectionTitle={SERVICES_META.sectionTitle}
      description={SERVICES_META.description}
    >
      {SERVICES_LIST.map((service) => {
        return (
          <Fragment key={service.slug}>
            <ServiceItemCard service={service} />
          </Fragment>
        );
      })}
    </PagesContainer>
  );
}
