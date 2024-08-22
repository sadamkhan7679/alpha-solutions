import { servicesList } from "@/constants/services";
import { ServiceCard } from "@/components/modules/ServicesList/ServicesCard";
import SectionContainer from "@/components/shared/SectionContainer";

const ServicesList = () => {
  return (
    <SectionContainer
      sectionTitle="Services List"
      description="This is the list of services we offer"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-10">
        {servicesList.map((service) => {
          return <ServiceCard service={service} key={service.id} />;
        })}
      </div>
    </SectionContainer>
  );
};

export default ServicesList;
